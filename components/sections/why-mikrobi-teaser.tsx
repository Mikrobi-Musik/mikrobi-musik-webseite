import Link from "next/link"

export function WhyMikrobiTeaser() {
  return (
    <section className="relative mx-auto max-w-4xl px-5 py-12">
      <div className="glass relative overflow-hidden rounded-3xl border border-gold/40 p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(209,164,61,0.12)]">
        {/* Subtiler Glow-Effekt im Hintergrund */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.14 74 / 0.18), transparent 70%)" }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Mensch & Handwerk vs. Automat
          </p>

          <h2 className="text-2xl sm:text-4xl font-light tracking-wide text-foreground mb-4">
            Warum kein 2-Minuten-Song aus der <span className="text-gold-gradient font-semibold">KI?</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Jeder KI-Generator liefert heute Töne in Sekunden – doch gefällt das Ergebnis nicht, ist das Geld unwiderruflich weg. Erfahre, warum maßgeschneidertes Handwerk, persönliche Feinarbeit, <strong>3 Korrekturschleifen</strong> und unser <strong>50/50-Sicherheitsmodell</strong> den entscheidenden Unterschied machen.
          </p>

          <Link
            href="/warum-mikrobi-musik"
            className="rounded-full bg-gradient-to-b from-gold-soft to-copper px-8 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)] transition-transform hover:scale-[1.03]"
          >
            Zum ehrlichen Vergleich
          </Link>
        </div>
      </div>
    </section>
  )
}