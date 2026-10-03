"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { DatenschutzContent, ImpressumContent } from "./legal-content"

type LegalKey = "impressum" | "datenschutz" | null

export function SiteFooter() {
  const [open, setOpen] = useState<LegalKey>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null)
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row">
        <p>
          <span className="text-gold-gradient font-semibold">Mikrobi</span>
          <span className="text-foreground/70 font-semibold">-Musik</span>
          <span className="ml-2">· Deine Vision. Dein Song.</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => setOpen("impressum")}
            className="transition-colors hover:text-foreground"
          >
            Impressum
          </button>
          <button
            type="button"
            onClick={() => setOpen("datenschutz")}
            className="transition-colors hover:text-foreground"
          >
            Datenschutzerklärung
          </button>
          <p>&copy; {new Date().getFullYear()} Mikrobi-Musik. Alle Rechte vorbehalten.</p>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open === "impressum" ? "Impressum" : "Datenschutzerklärung"}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={() => setOpen(null)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <div className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-gold-gradient text-xl font-bold">
                {open === "impressum" ? "Impressum" : "Datenschutzerklärung"}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Schließen"
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5">
              {open === "impressum" ? <ImpressumContent /> : <DatenschutzContent />}
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
