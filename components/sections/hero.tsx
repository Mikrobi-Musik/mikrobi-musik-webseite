import Image from "next/image"
import Link from "next/link"

const HERO_ARTWORK = "/images/mikrobi-logo.png"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Cinematischer Hintergrund-Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 8%, oklch(0.82 0.14 74 / 0.22), transparent 70%), radial-gradient(50% 40% at 50% 100%, oklch(0.68 0.13 52 / 0.18), transparent 75%)",
        }}
      />
      
      {/* Feine goldene Akzentlinie */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* --- Großes, breites, schwebendes Artwork-Banner --- */}
        <div className="relative mb-12 w-full max-w-3xl">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] blur-3xl"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, oklch(0.82 0.14 74 / 0.4), transparent 70%)" }}
          />
          <div
            className="animate-[mikrobi-float_7s_ease-in-out_infinite] overflow-hidden rounded-[2rem] border border-gold/30 shadow-[0_0_50px_rgba(209,164,61,0.25)]"
            style={{ animationDuration: "7s" }}
          >
            <Image
              src={HERO_ARTWORK}
              alt="Mikrobi-Musik Artwork"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-sm md:text-base uppercase tracking-[0.4em] text-gold mb-4 font-medium">
          Mikrobi-Musik
        </h1>
        
        <p className="text-4xl md:text-6xl font-light tracking-wide text-foreground leading-tight mb-8">
          Deine Vision. <br className="md:hidden" />
          <span className="text-gold-gradient font-semibold">Dein Song.</span>
        </p>

        {/* --- Neuer Begrüßungstext --- */}
        <div className="max-w-2xl mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-medium">Dein Soundtrack. Deine Geschichte. Eine Herzenssache.</strong><br />
            Egal ob du einen ganz persönlichen Song für einen unvergesslichen Moment suchst oder ein ehrenamtliches Herzensprojekt miterleben möchtest: Hier bist du genau richtig. Hör rein, entdecke emotionale Geschichten und lass uns gemeinsam Musik erschaffen, die verbindet und dort ankommt, wo sie am meisten gebraucht wird.
          </p>
        </div>

        {/* --- Philosophie-Sektion: Musiker statt Künstler --- */}
        <div className="w-full max-w-3xl mb-16 p-8 rounded-2xl border border-border glass text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-gold-gradient mb-4 text-center">
            Musiker statt Künstler – Die Magie der KI als Werkzeug
          </h3>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Wenn man Musik mit künstlicher Intelligenz erschafft, landet man schnell in Grundsatzdiskussionen. Für mich ist das Bild klar: Ich sehe mich eher als <strong className="text-foreground">Musiker</strong>, nicht als klassischen Künstler. Ich kann weder Noten lesen noch ein Instrument fehlerfrei spielen – und trotzdem kann ich jede erdenkliche Facette der Musik zum Leben erwecken.
            </p>
            <p>
              Der große Vorteil? Durch diese moderne Technologie kann ich so viele Menschen erreichen und Songs schreiben, wie es einem traditionellen Musiker allein niemals möglich wäre. Ob KI-Musik „richtig“ oder „falsch“ ist, darüber lässt sich streiten – am Ende entscheidet das ohnehin der Hörer.
            </p>
            <p className="text-foreground font-medium text-center pt-2">
              Für mich zählt am Ende nur eins: Die erzeugten Emotionen und die Botschaft. Wenn ein Song den Hörer im Herzen berührt, Trost spendet oder ein Lächeln ins Gesicht zaubert, dann hat er seinen Zweck erfüllt. Und genau das ist mein Antrieb: Menschen durch Musik glücklich zu machen.
            </p>
          </div>
        </div>

        {/* --- Das Robin-Hood-Prinzip --- */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gold-gradient mb-3">
            Das Robin-Hood-Prinzip
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            Ich glaube an die Kraft der Musik. Mit jedem gebuchten Projekt für maßgeschneiderte Auftragssongs trägst du direkt dazu bei, die laufenden Kosten für Software, Server und Produktionsmittel für unsere ehrenamtlichen Herzensprojekte zu decken.
          </p>
        </div>
        
        {/* Das Zwei-Säulen Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full mt-4">
          
          {/* Säule 1: Auftragssongs */}
          <div className="flex flex-col items-center p-8 rounded-2xl border border-border glass transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Maßgeschneiderte Auftragssongs</h3>
            <p className="text-muted-foreground mb-8 text-center flex-grow">
              Der Soundtrack für eure wichtigsten Momente. Endlich hast du die Möglichkeit, deine ganz persönliche Geschichte in ein unvergessliches Lied zu verwandeln. Hochwertige, individuelle Kompositionen für Hochzeiten, Geburtstage und besondere Meilensteine, die für immer bleiben.
            </p>
            <Link 
              href="/auftragssongs" 
              className="mt-auto px-8 py-3 bg-gradient-to-b from-gold-soft via-gold to-copper text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all w-full md:w-auto shadow-[0_0_25px_rgba(209,164,61,0.25)] hover:shadow-[0_0_35px_rgba(209,164,61,0.4)]"
            >
              Zu den Demos & Briefings
            </Link>
          </div>

          {/* Säule 2: Ehrenamt */}
          <div className="flex flex-col items-center p-8 rounded-2xl border border-border glass transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Ehrenamtliche Herzensprojekte</h3>
            <p className="text-muted-foreground mb-8 text-center flex-grow">
              Musik, die Kraft gibt, wo sie am meisten gebraucht wird. Kostenlose Mutmach- und Erinnerungslieder für Menschen, die in einer schwierigen Zeit stecken und einfach mal wieder Mut, Kraft, ein Lächeln oder ein musikalisches Andenken brauchen.
            </p>
            <Link 
              href="/herzensprojekte" 
              className="mt-auto px-8 py-3 bg-gradient-to-b from-gold-soft via-gold to-copper text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all w-full md:w-auto shadow-[0_0_25px_rgba(209,164,61,0.25)] hover:shadow-[0_0_35px_rgba(209,164,61,0.4)]"
            >
              Zu den Demos & Projekten
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}