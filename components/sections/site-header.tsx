const NAV_LINKS = [
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Probehören", href: "#portfolio" },
  { label: "Ausblick", href: "#coming-soon" },
  { label: "Kontakt", href: "#kontakt" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#top"
          className="glass rounded-full border border-border px-4 py-2 text-sm font-semibold tracking-tight"
        >
          <span className="text-gold-gradient">Mikrobi</span>
          <span className="text-foreground/70">-Musik</span>
        </a>

        <nav className="glass hidden items-center gap-1 rounded-full border border-border px-2 py-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-gradient-to-b from-gold-soft to-copper px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)] transition-transform hover:scale-[1.03]"
        >
          Song anfragen
        </a>
      </div>
    </header>
  )
}
