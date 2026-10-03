import React from 'react';
import Link from 'next/link';

export default function HerzensprojektePage() {
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
          Ehrenamtliche <span className="text-gold-gradient font-semibold">Herzensprojekte</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Musik, die Kraft gibt, wo sie am meisten gebraucht wird. 
          Hier zeigen wir, wie durch das Robin-Hood-Prinzip kostenlose Mutmach- und Erinnerungslieder 
          für Menschen in schwierigen Zeiten entstehen.
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
        
        {/* --- CARD 1: DEMENZ --- */}
        <div id="song-1" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Musikalisches Lebensportrait
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394644%3Fsecret_token%3Ds-JeZ6U9Ir9pU&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Familie & Stationen</strong> 
                  <span className="leading-relaxed">Renate, geboren in Jena. Große Liebe Reinhart (unvergesslicher Paris-Urlaub) und zwei Kinder (Michaela & Frank).</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Beruf & Hobbys</strong> 
                  <span className="leading-relaxed">War mit Herzblut Krankenschwester in einer Kinderklinik. Liebte die Berge und das Wandern in den Alpen.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Klassischer, großer orchestraler Schlager-Sound der 60er Jahre (im Stil von Regina Thoss). Alte Musik bringt sie sofort zum Strahlen.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Geschenk der Angehörigen für die Mutter in der Pflegeeinrichtung, das alle wunderbaren Stationen ihres Lebens feiert.</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#song-2" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 1 --- */}

        {/* --- CARD 2: MÄDCHEN 9 JAHRE --- */}
        <div id="song-2" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Fröhlicher Mutmach-Song
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394662%3Fsecret_token%3Ds-g0joQFqKrwb&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Hauptperson</strong> 
                  <span className="leading-relaxed">Lea (9 Jahre), Mama Sandra, Papa Joachim, Schwester Sahra, Hund Balu und unzertrennlich mit bester Freundin Hanna.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Hobbys & Träume</strong> 
                  <span className="leading-relaxed">Liebt Fahrradfahren, Modenschauen mit Hanna, Lesen sowie Pommes & Schokolade. Träumt davon, eine echte Superheldin zu sein.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Moderner, gut gelaunter Kinder-Pop (im Stil der "Giraffenaffen").</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Eine Überraschung der Eltern, um Leas blühender Fantasie etwas zu geben, das ihr Kraft und Freude schenkt.</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#song-3" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 2 --- */}

        {/* --- CARD 3: JUNGE 14 JAHRE --- */}
        <div id="song-3" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Motivierende Gaming-Hymne
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394647%3Fsecret_token%3Ds-cLVxRFXt9DY&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Hauptperson</strong> 
                  <span className="leading-relaxed">Lukas (14 Jahre). Familie: Mama Katja, Papa Tomas, und der kleine Bruder Felix, der total zu ihm aufschaut.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Hobbys & Talente</strong> 
                  <span className="leading-relaxed">Riesiger Gaming-Fan, Keyboarder/Pianist, Skateboarder. Liebt scharfe Chili-Chips beim Zocken.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Moderner EDM / Slap House mit starkem Bass. Sehr cool, voller positiver Energie und nach vorne gehend.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Soll wie eine Hymne für einen Helden ("Player Number One") klingen und ihm zeigen, dass er jedes Level in seinem Leben meistern kann.</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#song-4" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 3 --- */}

        {/* --- CARD 4: MÄDCHEN 21 JAHRE --- */}
        <div id="song-4" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Indie-Pop Roadtrip
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394665%3Fsecret_token%3Ds-NdWLYp1dMpM&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Hauptperson</strong> 
                  <span className="leading-relaxed">Sophie (21 Jahre) und ihre beste Freundin Clara. Sophie war schon immer ein absoluter Freigeist.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Leidenschaften</strong> 
                  <span className="leading-relaxed">Liebt das Meer, Indie-Musik, Festivals und ihren alten VW-Bulli für gemeinsame Roadtrips.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Moderner, treibender deutscher Indie-Pop (wie Provinz oder Milky Chance). Positiv, energiegeladen und voller Vorfreude.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Keine traurigen/medizinischen Themen! Fokus liegt auf Freiheit, dem Meer und tiefer Freundschaft – eine Hymne für den nächsten Sommer.</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#song-5" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 4 --- */}

        {/* --- CARD 5: HOSPIZ WÜRDEVOLLER ABSCHIED --- */}
        <div id="song-5" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Musikalischer Lebensrückblick (Abschluss)
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394653%3Fsecret_token%3Ds-Y37cEarUc2E&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Familie & Charakter</strong> 
                  <span className="leading-relaxed">Heinrich. Ein absoluter Macher. Große Liebe Martha, Kinder und Enkel, denen er alles beigebracht hat.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Berufung & Hobbys</strong> 
                  <span className="leading-relaxed">Verbrachte Stunden an seiner alten Hobelbank. Liebte seinen Garten und das Wandern in der Schwäbischen Alb.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Klassischer Liedermacher-Stil (Akustikgitarre und Cello) mit tiefer, warmer Männerstimme. Sehr würdevoll und friedlich.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Soll einen tröstenden Rückblick bilden, der sein Leben als Meisterstück ehrt und zeigt, dass sein "Werk nun vollbracht" ist.</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#song-6" className="mt-8 text-muted-foreground hover:text-gold transition-colors animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>
        {/* --- ENDE CARD 5 --- */}

        {/* --- CARD 6: HOSPIZ RÜCKBLICK (ZEITLOS) --- */}
        <div id="song-6" className="flex flex-col items-center scroll-mt-24">
          <div className="glass w-full p-6 md:p-8 rounded-2xl border border-border flex flex-col gap-6 transition-transform hover:-translate-y-1">
            <div className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                Musikalisches Vermächtnis (Zeitlos)
              </h3>
              <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-border/50">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2412394650%3Fsecret_token%3Ds-evQ2JQTBdse&color=%23d1a43d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
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
                  <strong className="text-foreground mb-1 text-lg font-medium">Familie & Charakter</strong> 
                  <span className="leading-relaxed">Heinrich. Ein absoluter Macher. Große Liebe Martha, Kinder und Enkel, denen er alles beigebracht hat.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Berufung & Hobbys</strong> 
                  <span className="leading-relaxed">Verbrachte Stunden an seiner alten Hobelbank. Liebte seinen Garten und das Wandern in der Schwäbischen Alb.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Stimmung & Genre</strong> 
                  <span className="leading-relaxed">Klassischer Liedermacher-Stil (Akustikgitarre und Cello) mit tiefer, warmer Männerstimme. Sehr warm, tröstend und zeitlos.</span>
                </li>
                <li className="flex flex-col">
                  <strong className="text-foreground mb-1 text-lg font-medium">Besonderheiten</strong> 
                  <span className="leading-relaxed">Kein Abschiedswort. Der Fokus liegt darauf, dass seine Werte und die Wurzeln, die er gepflanzt hat, für immer weiterleben.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Letzter Song, daher kein Pfeil mehr */}
        </div>
        {/* --- ENDE CARD 6 --- */}

      </section>
    </main>
  );
}