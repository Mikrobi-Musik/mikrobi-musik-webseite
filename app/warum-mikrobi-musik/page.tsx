import React from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, Sparkles, Clock, HeartHandshake, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Warum Mikrobi-Musik? | Der ehrliche Vergleich',
  description: 'Warum 5 bis 7 Tage Handwerk statt 2 Minuten KI-Massenware? Der Unterschied zwischen Algorithmus, finanziellem Risiko und echter emotionaler Resonanz.',
}

export default function WarumMikrobiMusikPage() {
  return (
    <main className="min-h-screen pt-12 pb-20">
      
      {/* Schwebender Zurück-Button */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Link 
          href="/" 
          className="glass inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-gold border border-border/50 hover:border-gold/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16 flex flex-col items-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold font-medium">Haltung & Transparenz</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
          Warum <span className="text-gold-gradient font-semibold">Mikrobi-Musik</span> – und keine 2-Minuten-KI?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Heute kann jeder in 120 Sekunden eine künstliche Intelligenz anwerfen. Doch ein Lied, das zu Tränen rührt oder ein Leben lang im Gedächtnis bleibt, entsteht nicht durch einen schnellen Zufallsklick.
        </p>
      </section>

      <div className="px-6 max-w-5xl mx-auto space-y-16">
        
        {/* Der direkte Gegenüberstellungs-Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Spalte: Typische 2-Minuten-KI */}
          <div className="glass rounded-3xl border border-border/60 p-8 flex flex-col bg-background/20">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/40">
              <div className="p-2.5 rounded-xl bg-destructive/10 text-destructive">
                <XCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Typische 2-Minuten-KI</h2>
                <span className="text-xs text-muted-foreground">Schnell generiert, oft oberflächlich</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span><strong>100 % finanzielles Risiko:</strong> Sofortige Vollzahlung im Voraus. Enttäuscht das Ergebnis oder klingt die Stimme unnatürlich, ist dein Geld unwiderruflich weg.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span><strong>Keine Korrekturen:</strong> „Gekauft wie gewürfelt“. Es gibt weder Feedback-Schleifen noch einen persönlichen Ansprechpartner, der nachbessert.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span><strong>Holprige Reime & Plattitüden:</strong> Kalendersprüche und peinliche Zweckreime ohne echte Dramaturgie oder menschliche Tiefe.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span><strong>Falsche Betonungen:</strong> Typische KI-Krankheit: Namen, Spitznamen oder regionale Begriffe werden unnatürlich verzerrt ausgesprochen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold text-base leading-none">✕</span>
                <span><strong>Anonymes Großkonzern-Abo:</strong> Du zahlst an anonyme Plattformen, oft in Abo-Modellen verstrickt, ohne jeden gesellschaftlichen Mehrwert.</span>
              </li>
            </ul>
          </div>

          {/* Spalte: Mikrobi-Musik */}
          <div className="glass rounded-3xl border border-gold/40 p-8 flex flex-col bg-gold/5 shadow-[0_0_30px_rgba(209,164,61,0.12)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/20">
              <div className="p-2.5 rounded-xl bg-gold/15 text-gold">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Mikrobi-Musik (5–7 Tage)</h2>
                <span className="text-xs text-gold/90 font-medium">Persönliche Kuration mit Herz & Gehör</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-foreground/90 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base leading-none">✓</span>
                <span><strong>Faires 50/50-Modell:</strong> Du zahlst erst 50 % (24,50 €) vorab. Die restlichen 50 % werden erst fällig, wenn du deine Hörprobe gehört hast und rundum zufrieden bist.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base leading-none">✓</span>
                <span><strong>3 Korrekturschleifen inklusive:</strong> Textzeile ändern? Melodie dynamischer? Tempo anpassen? Wir schleifen gemeinsam am Song, bis er perfekt sitzt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base leading-none">✓</span>
                <span><strong>Echte Poesie & Tiefgang:</strong> Ich verwandle deine persönlichen Erinnerungen und Meilensteine in berührende Verse statt Phrasen von der Stange.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base leading-none">✓</span>
                <span><strong>Phonetische Akribie:</strong> Jeder Name und jede Silbe wird nach Gehör und lautschriftlich so lange optimiert, bis die Aussprache makellos und natürlich klingt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base leading-none">✓</span>
                <span><strong>Das Robin-Hood-Prinzip:</strong> Dein Song finanziert ehrenamtliche Mutmach-Lieder für Kinderkliniken und Hospize.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Highlight-Box: Finanzielles Risiko & Sicherheitsversprechen */}
        <section className="glass rounded-3xl border border-gold/50 bg-gradient-to-b from-gold/10 via-background/60 to-background p-8 md:p-10 shadow-[0_0_35px_rgba(209,164,61,0.15)]">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/20 text-gold shadow-md">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Dein Sicherheitsversprechen</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">
                Was passiert, wenn dir das Ergebnis nicht gefällt?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Bei reinen KI-Websites musst du den vollen Betrag sofort bezahlen. Klingt der Song metallisch oder gefällt dir die Stimmung nicht, ist dein Geld weg. Bei Mikrobi-Musik hast du <strong>3 volle Korrekturschleifen inklusive</strong>: Gemeinsam passen wir Melodie, Textzeilen oder Betonungen im Dialog an. Und sollte es wider Erwarten absolut nicht harmonieren, sind deine restlichen 50 % geschützt – denn die Schlussrechnung wird <strong>erst nach deiner ausdrücklichen Demo-Freigabe</strong> fällig.
              </p>
            </div>
          </div>
        </section>

        {/* Die 3 Qualitäts-Säulen */}
        <section className="glass rounded-3xl border border-border/60 p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-foreground mb-3">Warum Zeit der wichtigste Produktionsfaktor ist</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Ein guter Song braucht keine Monate – aber er braucht Sorgfalt, Gehör und Respekt vor dem Anlass.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-border/40 bg-background/40">
              <Sparkles className="h-6 w-6 text-gold mb-3" />
              <h4 className="font-semibold text-foreground text-base mb-2">1. Das Text-Handwerk</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ich schreibe keine Reime nach Schablone. Ich strukturiere deine Meilensteine so, dass der Song eine echte Geschichte erzählt, die für Gänsehaut sorgt.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/40 bg-background/40">
              <Clock className="h-6 w-6 text-gold mb-3" />
              <h4 className="font-semibold text-foreground text-base mb-2">2. Gehör & Feinschliff</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Wo Apps beim erstbesten Wurf aufhören, fängt meine Arbeit an: Stimmfarben prüfen, Dynamik abstimmen und Betonungen solange anpassen, bis kein Roboter mehr zu hören ist.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/40 bg-background/40">
              <HeartHandshake className="h-6 w-6 text-gold mb-3" />
              <h4 className="font-semibold text-foreground text-base mb-2">3. Menschlicher Dialog</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Du sprichst mit einem echten Menschen. Wenn dir eine Textzeile nicht gefällt oder das Tempo geändert werden soll, dann passen wir es gemeinsam an.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="glass rounded-3xl border border-gold/40 p-8 md:p-10 text-center max-w-2xl mx-auto shadow-[0_0_30px_rgba(209,164,61,0.1)]">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Bereit für deinen Song mit Seele?</h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Festpreis 49 € (50 % Anzahlung, 50 % erst nach Demo-Freigabe). Unverbindliche Anfrage ohne jedes Risiko.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#kontakt"
              className="w-full sm:w-auto rounded-full bg-gradient-to-b from-gold-soft to-copper px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)] transition-transform hover:scale-[1.03]"
            >
              Song unverbindlich anfragen
            </Link>
            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
            >
              Ablauf & Preise <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}