import { GraduationCap, ShoppingBag } from "lucide-react"

const TEASERS = [
  {
    icon: GraduationCap,
    title: "Tutorials",
    text: "Praktische Tutorials rund um Komposition, Songwriting und Produktion.",
  },
  {
    icon: ShoppingBag,
    title: "Merchandise",
    text: "Bald erhältlich: ausgewähltes Merch für alle, die Mikrobi-Musik lieben.",
  },
]

export function ComingSoon() {
  return (
    <section id="coming-soon" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="glass relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.14 74 / 0.25), transparent 70%)" }}
        />
        <div className="relative">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Ausblick</p>
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Coming Soon
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            Es kommt noch einiges: Ein Blick hinter die Kulissen, hilfreiche Inhalte und mehr.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {TEASERS.map((teaser) => (
              <div key={teaser.title} className="rounded-2xl border border-border bg-secondary/30 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-gradient-to-b from-gold-soft/20 to-copper/10">
                  <teaser.icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold">{teaser.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{teaser.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
