const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/artist/1pOWPwDhzPBUE2hgi7B3AQ?utm_source=generator&theme=0"

export function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 px-5 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(50% 40% at 50% 0%, oklch(0.82 0.14 74 / 0.1), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Portfolio</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Probehören</h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Alle meine auf Spotify verfügbaren Songs – direkt hier zum Anhören.
          </p>
        </div>

        <div className="glass overflow-hidden rounded-2xl border border-border p-2 transition-colors hover:border-gold/40">
          <iframe
            title="Mikrobi Musik auf Spotify"
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height={452}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://open.spotify.com/intl-de/artist/1pOWPwDhzPBUE2hgi7B3AQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold underline-offset-4 hover:underline"
          >
            Vollständiges Profil auf Spotify öffnen
          </a>
        </div>
      </div>
    </section>
  )
}
