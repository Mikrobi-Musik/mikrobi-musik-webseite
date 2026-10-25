import Link from "next/link"

const NAV_LINKS = [
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Probehören", href: "/#portfolio" },
  { label: "Warum Mikrobi-Musik?", href: "/warum-mikrobi-musik" },
  { label: "Ablauf & Preise", href: "/preise" },
  { label: "Ausblick", href: "/#coming-soon" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        {/* Logo Kapsel - Blickdicht */}
        <Link
          href="/"
          className="rounded-full border border-border bg-[#07070c] px-4 py-2 text-sm font-semibold tracking-tight shadow-lg transition-transform hover:scale-105"
        >
          <span className="text-gold-gradient">Mikrobi</span>
          <span className="text-foreground/70">-Musik</span>
        </Link>

        {/* Navigation Kapsel - Blickdicht, kein Durchscheinen */}
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-[#07070c] px-3 py-1.5 shadow-lg md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs lg:text-sm text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/#kontakt"
          className="rounded-full bg-gradient-to-b from-gold-soft to-copper px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)] transition-transform hover:scale-[1.03] whitespace-nowrap"
        >
          Song anfragen
        </Link>
      </div>
    </header>
  )
}