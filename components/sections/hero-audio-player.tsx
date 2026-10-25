"use client";

import { useState, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";

export function HeroAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-3xl mb-16">
      <div className="glass rounded-2xl border border-gold/30 bg-background/30 p-5 md:p-6 backdrop-blur-md shadow-lg">
        <audio
          ref={audioRef}
          src="/audio/ein-lied-des-laechelns.mp3"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />

        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Musik pausieren" : "Musik abspielen"}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-gold-soft via-gold to-copper text-primary-foreground shadow-[0_0_20px_rgba(209,164,61,0.3)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 fill-current" />
            ) : (
              <Play className="h-6 w-6 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Text & Songtitel */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
              <Music className="h-3.5 w-3.5" />
              <span>Titelsong · Ein Lied des Lächelns</span>
            </div>
            <p className="mt-1.5 text-sm text-foreground/90 font-medium italic leading-relaxed">
              „Musik sagt oft mehr als tausend Worte. Nimm dir 3 Minuten und hör rein, was Mikrobi-Musik im Herzen bewegt.“
            </p>
          </div>
        </div>

        {/* Fortschrittsbalken */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border/40">
          <div
            className="h-full bg-gradient-to-r from-gold-soft via-gold to-copper transition-all duration-150 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}