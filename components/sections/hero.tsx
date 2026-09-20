import Image from "next/image"

/* Bildpfad hier leicht austauschbar */
const HERO_ARTWORK = "/images/mikrobi-logo.png"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Cinematischer Hintergrund-Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 8%, oklch(0.82 0.14 74 / 0.22), transparent 70%), radial-gradient(50% 40% at 50% 100%, oklch(0.68 0.13 52 / 0.18), transparent 75%)",
        }}
      />
      {/* feine goldene Linien */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-36 text-center md:pt-44">
        {/* Artwork-Banner */}
        <div className="relative mb-10 w-full max-w-2xl">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, oklch(0.82 0.14 74 / 0.35), transparent 70%)" }}
          />
          <div
            className="animate-[mikrobi-float_7s_ease-in-out_infinite] overflow-hidden rounded-[2rem] border border-border"
            style={{ animationDuration: "7s" }}
          >
            <Image
              src={HERO_ARTWORK || "/placeholder.svg"}
              alt="Mikrobi-Musik Artwork mit metallischem Schriftzug und Lautsprechern"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Maßgeschneiderte Musikkompositionen
        </p>

        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gold-gradient">Mikrobi</span>
          <span className="text-foreground">-Musik</span>
        </h1>

        <p className="mt-5 text-pretty text-xl text-muted-foreground sm:text-2xl">
          Deine Vision. Dein Song.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#kontakt"
            className="w-full rounded-full bg-gradient-to-b from-gold-soft to-copper px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_36px_-8px_var(--gold)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Song anfragen
          </a>
          <a
            href="#portfolio"
            className="glass w-full rounded-full border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-gold/50 sm:w-auto"
          >
            Probehören
          </a>
        </div>
      </div>
    </section>
  )
}
