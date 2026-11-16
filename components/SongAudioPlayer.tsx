"use client";

import { useRef, useState } from "react";
import { Play, Pause, Download, Volume2, VolumeX, Loader2 } from "lucide-react";

interface SongAudioPlayerProps {
  audioUrl: string;
  downloadFilename: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function SongAudioPlayer({
  audioUrl,
  downloadFilename,
}: SongAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = clickRatio * duration;
    setCurrentTime(audio.currentTime);
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  }

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Lädt die Datei unsichtbar in den Zwischenspeicher, um CORS-Restriktionen für Downloads zu umgehen
      const response = await fetch(audioUrl);
      if (!response.ok) throw new Error("Download fehlgeschlagen");
      
      const blob = await response.blob();
      
      // Erstellt einen lokalen Link, der das download-Attribut zwingend ausführt
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = downloadFilename; 
      
      document.body.appendChild(link);
      link.click();
      
      // Aufräumen
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download-Trick fehlgeschlagen, öffne Fallback:", error);
      // Notfall-Fallback, falls der Browser den Fetch blockiert
      window.open(audioUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-2xl border border-amber-500/20 bg-zinc-950/90 p-5 sm:p-6 shadow-inner space-y-5">
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex items-center gap-4">
        {/* Großer goldener Play/Pause-Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Abspielen"}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-zinc-950 shadow-lg shadow-amber-500/25 transition hover:scale-105 hover:from-amber-300 hover:to-amber-500 active:scale-95"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 fill-zinc-950" />
          ) : (
            <Play className="h-6 w-6 fill-zinc-950 ml-0.5" />
          )}
        </button>

        {/* Fortschrittsbalken & Zeit */}
        <div className="flex-1 space-y-2">
          <div
            onClick={handleSeek}
            role="slider"
            aria-label="Wiedergabeposition"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            tabIndex={0}
            className="group relative h-2.5 w-full cursor-pointer rounded-full bg-zinc-800 overflow-hidden"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Stummschalten */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Ton einschalten" : "Stummschalten"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Download-Zeile */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 pt-4">
        <span className="text-xs text-zinc-500">
          {isPlaying ? "Läuft gerade für dich..." : "Tippe auf Play, um deinen Song zu hören"}
        </span>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-300 transition hover:bg-amber-500/20 hover:text-amber-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Download className="h-3.5 w-3.5" />
          )}
          {isDownloading ? "Wird geladen..." : "MP3 speichern"}
        </button>
      </div>
    </div>
  );
}