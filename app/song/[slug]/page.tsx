import { notFound } from "next/navigation";
import { Sparkles, Heart, FileText, ArrowUpRight } from "lucide-react";

import { getSongBySlug } from "@/lib/d1";
import SongAudioPlayer from "@/components/SongAudioPlayer";

export const dynamic = "force-dynamic";

interface SongPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PublicSongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = await getSongBySlug(slug);

  if (!song) {
    notFound();
  }

  const publicR2Base =
    (process.env.NEXT_PUBLIC_AUDIO_BASE_URL || process.env.NEXT_PUBLIC_R2_PUBLIC_URL)?.replace(/\/$/, "") || "";
  const audioUrl = `${publicR2Base}/${song.audio_key}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-zinc-100 py-10 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Warmer goldener Bühnenschein im Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[420px] w-[680px] rounded-full bg-amber-500/10 blur-[130px]"
      />

      <div className="relative z-10 w-full max-w-2xl space-y-8">
        {/* Dezentes Branding oben */}
        <header className="flex flex-col items-center text-center space-y-3">
          <a href="/" className="group inline-flex flex-col items-center gap-2">
            <img
              src="/images/mikrobi-logo.png"
              alt="Mikrobi-Musik"
              className="h-24 sm:h-28 w-auto rounded-2xl border border-amber-500/20 object-contain shadow-lg shadow-amber-500/15 transition group-hover:scale-105"
            />
            
          </a>
        </header>

        {/* Hauptkarte */}
        <article className="rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 p-7 sm:p-10 shadow-2xl backdrop-blur-xl space-y-7">
          {/* Widmungs-Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-300">
              <Heart className="h-3.5 w-3.5 fill-amber-400/30" />
              Ein persönlicher Song für {song.recipient}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-amber-400/70" />
              Unikat
            </span>
          </div>

          {/* Titel & persönliche Botschaft */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {song.title}
            </h1>

            {song.message && (
              <blockquote className="border-l-2 border-amber-500/50 pl-4 py-0.5 text-base sm:text-lg leading-relaxed text-zinc-300 italic">
                „{song.message}“
              </blockquote>
            )}
          </div>

          {/* Edler Custom-Player */}
          <SongAudioPlayer
            audioUrl={audioUrl}
            downloadFilename={`${song.title} - Mikrobi-Musik.mp3`}
          />

          {/* Optionaler Songtext */}
          {song.lyrics && (
            <section className="border-t border-zinc-800/80 pt-7 space-y-3.5">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-300/90">
                <FileText className="h-4 w-4" />
                Songtext zum Mitlesen
              </div>
              <div className="whitespace-pre-line rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-5 sm:p-6 text-sm sm:text-base leading-relaxed text-zinc-300">
                {song.lyrics}
              </div>
            </section>
          )}
        </article>

        {/* Einladender Footer */}
        <footer className="text-center space-y-2 pt-1">
          <p className="text-xs text-zinc-400">
            Mit Herz komponiert &amp; produziert von{" "}
            <a
              href="/"
              className="inline-flex items-center gap-0.5 font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Mikrobi-Musik
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
          <p className="text-[11px] text-zinc-600">
            Dein persönlicher Song – festgehalten auf Schiefer &amp; im Klang.
          </p>
        </footer>
      </div>
    </main>
  );
}