import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock, Music, HeartHandshake } from 'lucide-react';

export default function PreisePage() {
  return (
    <main className="min-h-screen pt-12 pb-20">
      
      {/* --- Schwebender Zurück-Button --- */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-50">
        <Link 
          href="/" 
          className="glass inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-gold border border-border/50 hover:border-gold/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      {/* --- Header-Sektion --- */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16 flex flex-col items-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Transparent & Fair</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
          Ablauf & <span className="text-gold-gradient font-semibold">Preise</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Kein anonymer Checkout-Warenkorb, sondern persönliche Maßarbeit. 
          Hier erfährst du, wie dein Song entsteht und wie fair die Zusammenarbeit abläuft.
        </p>
      </section>

      <div className="px-6 max-w-5xl mx-auto space-y-16">
        
        {/* --- Preiskarte / Das Paket --- */}
        <section className="glass rounded-3xl border border-gold/40 p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.1)]">
          <div className="absolute top-0 right-0 bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider px-6 py-2 rounded-bl-2xl border-l border-b border-gold/30">
            Einführungspreis
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-medium text-gold uppercase tracking-wider">Komplettpaket</span>
              <h2 className="text-3xl font-bold text-foreground mt-1 mb-4">Dein persönlicher Auftragssong</h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-gold-gradient">49 €</span>
                <span className="text-sm text-muted-foreground">Festpreis pro Song</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                Ein vollständig maßgeschneidertes Unikat für deinen ganz besonderen Moment – von Herzen getextet, 
                komponiert und in Studioqualität produziert.
              </p>
              
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center rounded-xl border border-gold/50 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-background hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
              >
                Jetzt Song unverbindlich anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-background/40 rounded-2xl p-6 border border-border/40 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" /> Was immer enthalten ist:
              </h3>
              
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Individuelles Song-Konzept</strong> basierend auf deiner Geschichte & Stichworten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Komplette Lyrics</strong> (Strophen, eingängiger Refrain & Bridge)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Wunsch-Genre & Stimmung</strong> (Pop, Ballade, Schlager, Rap, Akustik uvm.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Inklusive 3 Korrekturschleifen</strong> nach der ersten Hörprobe (enthält Audio-Wasserzeichen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Finale Master-Dateien</strong> in voller Studioqualität (WAV & MP3) zum Download</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Die 4 Schritte --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              In 4 einfachen Schritten zu deinem Lied
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Volle Transparenz und Sicherheit bei jedem einzelnen Schritt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Schritt 1 */}
            <div className="glass rounded-2xl border border-border p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold/60 uppercase tracking-widest">Schritt 01</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">Unverbindliche Anfrage</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Du sendest mir deine ersten Gedanken, Stichpunkte oder die Story über das Kontaktformular. Wir stimmen kurz ab, ob die Vision passt.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 text-[11px] text-gold font-medium">
                100 % kostenlos & unverbindlich
              </div>
            </div>

            {/* Schritt 2 */}
<div className="glass rounded-2xl border border-border p-6 flex flex-col justify-between">
  <div>
    <span className="text-xs font-bold text-gold/60 uppercase tracking-widest">Schritt 02</span>
    <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">Projektstart & Anzahlung</h3>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Wenn alles für dich passt, erhältst du deine Anzahlungsrechnung über 50 % (24,50 €). Bezahle ganz flexibel per PayPal Express oder bequem via GiroCode per Banküberweisung – danach startet sofort die Produktion.
    </p>
  </div>
  <div className="mt-6 pt-4 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1">
    <Clock className="h-3 w-3 text-gold" /> Bearbeitungszeit ca. 3–5 Tage
  </div>
</div>

            {/* Schritt 3 */}
            <div className="glass rounded-2xl border border-border p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold/60 uppercase tracking-widest">Schritt 03</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">Deine Hörprobe</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Du bekommst einen privaten Streaming-Link mit der ersten Version deines Songs. Hier prüfen wir gemeinsam Text, Melodie und eventuelle Änderungswünsche.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 text-[11px] text-gold font-medium">
                Inklusive 3 Feedback-Runden
              </div>
            </div>

            {/* Schritt 4 */}
            <div className="glass rounded-2xl border border-border p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-gold/60 uppercase tracking-widest">Schritt 04</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">Restzahlung & Master</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Erst wenn du begeistert bist, begleichst du die restlichen 50 % (24,50 €). Direkt danach erhältst du die unberührten Studio-Dateien zum Download.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 text-[11px] text-gold font-medium flex items-center gap-1">
                <Music className="h-3 w-3" /> WAV & MP3 Master-Audio
              </div>
            </div>

          </div>
        </section>

        {/* --- Warum persönliche Zahlung auf Rechnung? (Infobox) --- */}
        <section className="glass rounded-2xl border border-border/60 p-6 md:p-8 bg-background/20">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Persönlich & transparent: Zahlung auf Rechnung
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Ein Auftragssong ist ein individuelles Herzensprojekt, das im direkten Dialog miteinander entsteht – ganz ohne unpersönliche Abo-Fallen oder anonyme Massen-Checkouts. Du zahlst fair in zwei Schritten (50/50) und wählst einfach deinen bevorzugten Weg: sekundenschnell per <strong>PayPal Express</strong> oder per <strong>Banküberweisung via GiroCode</strong>.
              </p>
              <p className="text-sm text-gold/90 leading-relaxed font-medium">
                So behältst du jederzeit die volle Kontrolle und jeder Cent fließt direkt in hochwertige Produktion sowie in die Finanzierung der ehrenamtlichen Herzensprojekte für Kinderkliniken und Hospize.
              </p>
            </div>
          </div>
        </section>

        {/* --- Bottom CTA --- */}
        <div className="text-center pt-8">
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-xl border border-gold/50 bg-gold/10 px-8 py-3.5 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-background hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          >
            Jetzt dein Wunschprojekt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}