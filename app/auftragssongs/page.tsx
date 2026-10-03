import React from 'react';
import Link from 'next/link';

export default function AuftragssongsPage() {
  return (
    <main className="min-h-screen pt-12 pb-16">
      
      {/* --- Zurück-Button --- */}
      <div className="px-6 max-w-6xl mx-auto mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      {/* Header-Sektion der Unterseite */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
          Maßgeschneiderte <span className="text-gold-gradient font-semibold">Auftragssongs</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Jeder besondere Anlass verdient mehr als nur Musik von der Stange. 
          Hier siehst du, wie aus einer Vision und ein paar persönlichen Stichworten 
          ein unvergessliches musikalisches Unikat entsteht.
        </p>
        
        {/* Schwebender Pfeil zum ersten Song */}
        <a 
          href="#song-1" 
          className="animate-bounce p-3 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-colors"
          aria-label="Zu den Songs scrollen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </section>

      {/* Sektion mit den Demos und Briefings */}
      <section className="px-6 max-w-4xl mx-auto space-y-20">
        
        {/* --- CARD 1: HOCHZEIT --- */}
        <div id="song-1" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Emotionale Hochzeitsballade
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394656%3Fsecret_token%3Ds-OrTgiIvFqGm&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
              </div>
            </div>
            <div className="w-full flex flex-col bg-background/30 rounded-xl p-5 border border-border/30">
              <div className="inline-flex items-center mb-4 justify-center w-full">
                <span className="h-[1px] w-12 bg-gold mr-4 opacity-50"></span>
                <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">Die Vision</h4>
                <span className="h-[1px] w-12 bg-gold ml-4 opacity-50"></span>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-base text-muted-foreground">
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Anlass & Personen</strong> 
                  <span className="leading-relaxed">Hochzeit von Maik & Sähra (nach 10 Jahren Beziehung). Das erste gemeinsame Kind ist unterwegs.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Dynamik</strong> 
                  <span className="leading-relaxed">Haben schon viele Höhen und Tiefen durchgemacht, geben sich gegenseitig viel Freiraum und gleichzeitig extrem viel Halt.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Epische Pop-Ballade (ähnlich wie "You Raise Me Up"), sehr emotional und romantisch.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Ein großer, aufbauender Refrain. Der Song fokussiert sich auf die tiefe Verbundenheit, das Baby und die liebevolle Feier mit den Gästen.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pfeil zum nächsten Song */}
          <a href="#song-2" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse" aria-label="Nächster Song">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 1 --- */}

        {/* --- CARD 2: 50. GEBURTSTAG --- */}
        <div id="song-2" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Lustiger Geburtstagssong
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412388872%3Fsecret_token%3Ds-mYtJ1WQmonu&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
              </div>
            </div>
            <div className="w-full flex flex-col bg-background/30 rounded-xl p-5 border border-border/30">
              <div className="inline-flex items-center mb-4 justify-center w-full">
                <span className="h-[1px] w-12 bg-gold mr-4 opacity-50"></span>
                <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">Die Vision</h4>
                <span className="h-[1px] w-12 bg-gold ml-4 opacity-50"></span>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-base text-muted-foreground">
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Anlass & Personen</strong> 
                  <span className="leading-relaxed">50. Geburtstag von Frank. Lokführer, verheiratet (Gisela), zwei Teenager-Töchter.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Charakter</strong> 
                  <span className="leading-relaxed">Liebt große Portionen Fleisch, hat einen kleinen Bauchansatz, guckt ab und zu jungen Frauen hinterher (die darüber nur schmunzeln).</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Lustige Parodie, Partysong.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Ein sehr eingängiger Refrain, der sich oft wiederholt, damit alle Partygäste sofort mitsingen können.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pfeil zum nächsten Song */}
          <a href="#song-3" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse" aria-label="Nächster Song">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 2 --- */}

        {/* --- CARD 3: LIEBESGESCHICHTE --- */}
        <div id="song-3" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Emotionale Singer-Songwriter Liebesgeschichte
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394659%3Fsecret_token%3Ds-aPf0VF1RDgW&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
              </div>
            </div>
            <div className="w-full flex flex-col bg-background/30 rounded-xl p-5 border border-border/30">
              <div className="inline-flex items-center mb-4 justify-center w-full">
                <span className="h-[1px] w-12 bg-gold mr-4 opacity-50"></span>
                <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">Die Vision</h4>
                <span className="h-[1px] w-12 bg-gold ml-4 opacity-50"></span>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-base text-muted-foreground">
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Anlass</strong> 
                  <span className="leading-relaxed">Liebeserklärung / Jahrestag / Hochzeit.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Inhalt</strong> 
                  <span className="leading-relaxed">Eine tiefgründige Geschichte mit echten Höhen und Tiefen. Das Paar hatte schon die "Koffer gepackt", hat sich aber für die Liebe entschieden und den Sturm gemeinsam überstanden.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Akustische Pop-Ballade (Vibe wie Johannes Oerding oder ein emotionaler "Rosamunde Pilcher"-Film). Sehr organisch und nahbar.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Sehr emotionale, raue Männerstimme. Ein intimer Text über Schmerz, Trauer und das große Happy End.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pfeil zum nächsten Song */}
          <a href="#song-4" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse" aria-label="Nächster Song">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 3 --- */}

        {/* --- CARD 4: HERZSCHMERZ --- */}
        <div id="song-4" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Energiegeladener Trennungs-Rap
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394641%3Fsecret_token%3Ds-swRkROBrS0m&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
              </div>
            </div>
            <div className="w-full flex flex-col bg-background/30 rounded-xl p-5 border border-border/30">
              <div className="inline-flex items-center mb-4 justify-center w-full">
                <span className="h-[1px] w-12 bg-gold mr-4 opacity-50"></span>
                <h4 className="text-sm font-semibold text-gold uppercase tracking-widest">Die Vision</h4>
                <span className="h-[1px] w-12 bg-gold ml-4 opacity-50"></span>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-base text-muted-foreground">
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Anlass</strong> 
                  <span className="leading-relaxed">Trennung / Liebeskummer / Wutbewältigung.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Inhalt</strong> 
                  <span className="leading-relaxed">Schmerzhafte Verarbeitung eines heftigen Vertrauensbruchs ("Ich hab dich geliebt und du hast mich betrogen"). Aus anfänglicher Trauer wird eiskalte Wut und neues Selbstbewusstsein.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Moderner Melodic Pop-Rap / R&B-Trap (Vibe wie Jazeek mit 2000er R&B-Nostalgie).</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Weibliche Stimme. Starker dynamischer Kontrast zwischen schnellem, rhythmischem Rap in den Strophen und extrem kraftvoll gesungenem Refrain.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Beim letzten Song lassen wir den Pfeil weg, da hier das Ende erreicht ist */}
        </div>
        {/* --- ENDE CARD 4 --- */}

      </section>
    </main>
  );
}