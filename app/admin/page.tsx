"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const runtime = "edge";
import {
  Upload,
  Download,
  Copy,
  Check,
  Trash2,
  LogOut,
  Music,
  Loader2,
  ExternalLink,
} from "lucide-react";
import type { SongRecord } from "@/lib/d1";
import { generateCoasterSvg } from "@/lib/laser-svg";

export default function AdminDashboardPage() {
  const router = useRouter();

  const [songs, setSongs] = useState<SongRecord[]>([]);
  const [loadingList, setLoadingList] = useState(true);

  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  async function loadSongs() {
    setLoadingList(true);
    try {
      const res = await fetch("/api/admin/songs");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = (await res.json()) as { songs?: SongRecord[]; error?: string };
      if (data.songs) {
        setSongs(data.songs);
      }
    } catch {
      setErrorText("Songs konnten nicht geladen werden.");
    } finally {
      setLoadingList(false);
    }
  }

  useEffect(() => {
    loadSongs();
  }, []);

  function getPublicSongUrl(slug: string): string {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      (typeof window !== "undefined" ? window.location.origin : "https://mikrobi-musik.de");
    return `${base}/song/${slug}`;
  }

  async function handleDownloadSvg(song: SongRecord) {
    const songUrl = getPublicSongUrl(song.slug);
    const svgContent = await generateCoasterSvg({
      songUrl,
      title: song.title,
      recipient: song.recipient,
    });

    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeName = `${song.recipient}-${song.title}`
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/gi, "-")
      .replace(/^-|-$/g, "");
    a.href = url;
    a.download = `untersetzer-${safeName || song.slug}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function handleCopyLink(slug: string) {
    const url = getPublicSongUrl(slug);
    await navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  }

  async function handleCreateSong(e: React.FormEvent) {
    e.preventDefault();
    setErrorText("");
    setStatusText("");

    if (!file) {
      setErrorText("Bitte wähle eine MP3-Datei aus.");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Presigned Upload-URL + eindeutigen Slug vom Server holen
      setStatusText("Bereite Upload vor...");
      const urlRes = await fetch("/api/admin/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type || "audio/mpeg",
        }),
      });

      const urlData = (await urlRes.json()) as {
        uploadUrl?: string;
        audioKey?: string;
        slug?: string;
        error?: string;
      };

      if (!urlRes.ok || !urlData.uploadUrl || !urlData.audioKey || !urlData.slug) {
        throw new Error(urlData.error || "Upload-URL konnte nicht erstellt werden.");
      }

      // 2. MP3 direkt zu Cloudflare R2 hochladen
      setStatusText("Lade MP3 zu Cloudflare R2 hoch...");
      const uploadRes = await fetch(urlData.uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type || "audio/mpeg",
        },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error(`R2-Upload fehlgeschlagen (Status ${uploadRes.status}). Prüfe ggf. R2 CORS.`);
      }

      // 3. Song-Metadaten in Cloudflare D1 speichern
      setStatusText("Speichere Song-Daten in D1...");
      const saveRes = await fetch("/api/admin/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: urlData.slug,
          recipient,
          title,
          message,
          lyrics,
          audio_key: urlData.audioKey,
        }),
      });

      const saveData = (await saveRes.json()) as { song?: SongRecord; error?: string };
      if (!saveRes.ok || !saveData.song) {
        throw new Error(saveData.error || "Song konnte nicht in D1 gespeichert werden.");
      }

      // 4. Formular zurücksetzen, Liste aktualisieren & SVG direkt anbieten
      setSongs((prev) => [saveData.song!, ...prev]);
      setRecipient("");
      setTitle("");
      setMessage("");
      setLyrics("");
      setFile(null);
      const fileInput = document.getElementById("audio-file") as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";

      setStatusText("Song gespeichert! Laser-SVG wird heruntergeladen...");
      await handleDownloadSvg(saveData.song);
      setStatusText("Fertig! Song ist online und SVG liegt im Download-Ordner.");
    } catch (err) {
      setErrorText(err instanceof Error ? err.message : "Unbekannter Fehler.");
      setStatusText("");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(song: SongRecord) {
    if (!confirm(`Song "${song.title}" für ${song.recipient} wirklich löschen?`)) return;

    try {
      const res = await fetch(`/api/admin/songs?id=${encodeURIComponent(song.id)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error || "Löschen fehlgeschlagen.");
      }
      setSongs((prev) => prev.filter((s) => s.id !== song.id));
    } catch (err) {
      setErrorText(err instanceof Error ? err.message : "Fehler beim Löschen.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-zinc-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Kopfzeile */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Music className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Mikrobi-Musik Studio &amp; Laser-Admin
              </h1>
              <p className="text-sm text-zinc-400">
                Songs hochladen &amp; 100×100 mm Schiefer-SVGs für den Sculpfun S9 erzeugen
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Abmelden
          </button>
        </header>

        {/* Formular für neuen Song */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 shadow-xl">
          <h2 className="text-lg font-semibold text-white mb-5">Neuen Song anlegen</h2>

          <form onSubmit={handleCreateSong} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Empfänger (Name auf dem Untersetzer) *
                </label>
                <input
                  type="text"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="z. B. William"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Songtitel *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="z. B. DJ Dino Bounce"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Persönliche Widmung / Botschaft (optional)
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="z. B. Ein kleiner Song nur für dich – von Herzen!"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Songtext / Lyrics (optional, wird auf der Song-Seite angezeigt)
              </label>
              <textarea
                rows={4}
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                placeholder="Hier kannst du den Liedtext einfügen..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                MP3-Audiodatei *
              </label>
              <input
                id="audio-file"
                type="file"
                accept="audio/mpeg,audio/mp3,audio/*"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-zinc-800 file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-amber-400 hover:file:bg-zinc-700"
              />
            </div>

            {errorText && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorText}
              </p>
            )}

            {statusText && (
              <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
                {statusText}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird verarbeitet...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Song speichern &amp; Laser-SVG herunterladen
                </>
              )}
            </button>
          </form>
        </section>

        {/* Liste bestehender Songs */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Gespeicherte Songs ({songs.length})
          </h2>

          {loadingList ? (
            <div className="flex items-center gap-2 text-sm text-zinc-400 py-6">
              <Loader2 className="h-4 w-4 animate-spin" />
              Lade Songs aus D1...
            </div>
          ) : songs.length === 0 ? (
            <p className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-sm text-zinc-400">
              Noch keine Songs angelegt. Erstelle oben deinen ersten Untersetzer-Song!
            </p>
          ) : (
            <div className="space-y-3">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold text-white">{song.title}</span>
                      <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 text-xs text-amber-300">
                        Für {song.recipient}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono">
                      /song/{song.slug} ·{" "}
                      {new Date(song.created_at).toLocaleDateString("de-DE")}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleDownloadSvg(song)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-amber-400"
                      title="100x100 mm SVG für Sculpfun S9 herunterladen"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Laser-SVG
                    </button>

                    <button
                      onClick={() => handleCopyLink(song.slug)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                      title="Song-Link kopieren"
                    >
                      {copiedSlug === song.slug ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          Kopiert
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Link
                        </>
                      )}
                    </button>

                    <a
                      href={`/song/${song.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                      title="Öffentliche Song-Seite öffnen"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Vorschau
                    </a>

                    <button
                      onClick={() => handleDelete(song)}
                      className="inline-flex items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                      title="Song löschen"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}