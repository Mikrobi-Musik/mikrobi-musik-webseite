import { Heart, Sparkles, Gift } from "lucide-react"

const VALUES = [
  {
    icon: Sparkles,
    title: "Maßgeschneidert",
    subtitle: "Von deiner Idee zum eigenen Song",
    text: "Ein besonderer Anlass verdient mehr als nur Musik von der Stange. Jede meiner Kompositionen entsteht individuell und richtet sich exakt nach deinen persönlichen Vorgaben. Der Ablauf ist dabei ganz unkompliziert: Du lieferst mir einfach ein paar grobe Stichpunkte, erzählst mir eine kleine Geschichte oder nennst mir die wichtigsten Details, die im Lied vorkommen sollen. Aus diesen Basisinformationen schreibe ich im ersten Schritt die kompletten Lyrics. Im Anschluss erwecke ich diesen Text musikalisch zum Leben, indem ich Genre, Instrumente und Stimmung exakt auf deine Vision abstimme. Das Ergebnis ist ein maßgeschneiderter Song, den es so auf der Welt kein zweites Mal gibt.",
  },
  {
    icon: Gift,
    title: "Anlassbezogen",
    subtitle: "Der Soundtrack für deinen Moment",
    text: "Das Leben steckt voller einzigartiger Ereignisse, die uns für immer im Gedächtnis bleiben. Ob es der Gänsehaut-Moment bei einer Hochzeit ist, die persönliche Überraschung an einem runden Geburtstag oder das Festhalten wertvoller Erinnerungen an besondere Menschen – dein Moment bekommt genau den Soundtrack, den er verdient. Ein maßgeschneidertes Lied ist oft das emotionalste Geschenk, das man machen kann, besonders dann, wenn gesprochene Worte allein nicht ausreichen. Ich helfe dir dabei, die Atmosphäre und Bedeutung deines Anlasses musikalisch einzufangen und in ein Lied zu verwandeln, das diese Erinnerung für die Ewigkeit festhält.",
  },
  {
    icon: Heart,
    title: "Mit Herz",
    subtitle: "Musik, die Kraft gibt",
    text: "Mein Wissen und meine Leidenschaft setze ich auch dort ein, wo Musik am dringendsten gebraucht wird. Als ehrenamtlicher Song Creator für die Songs of Love Foundation schreibe ich individuelle Mutmach-Songs für Menschen in schweren Zeiten. Ein kleiner musikalischer Lichtblick, der von Herzen kommt.",
  },
]

export function About() {
  return (
    <section id="ueber-mich" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Über mich</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, ich bin <span className="text-gold-gradient">Mirko</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Mein Lebensmittelpunkt liegt in einem schönen Ort am Fuße der Schwäbischen Alb, wo ich mit meiner Familie lebe.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Früher habe ich oft gedacht: Wie schön wäre es, wenn einer meiner Lieblingskünstler ein Lied über meine
            Frau und mich schreiben würde, damit die ganze Welt unsere Geschichte hören kann? Aber so etwas macht
            natürlich niemand. Da ich selbst weder singen noch ein Instrument spielen kann, blieb das lange nur ein
            Traum.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Das änderte sich schlagartig, als ich Suno AI für mich entdeckte. Diese Technologie war für mich eine
            absolute Offenbarung, denn plötzlich hatte ich das Werkzeug in der Hand, um genau diesen Wunsch endlich
            in die Tat umzusetzen. Dabei besteht die kreative Arbeit keineswegs aus einem einfachen Knopfdruck: Ich
            investiere sehr viel Zeit und Detailarbeit in professionelles Prompting, das Schreiben passender Lyrics
            und die Konzeption der Songs zusammen mit meinem KI-Assistenten. Es ist ein faszinierender Prozess, Ideen
            und Emotionen so präzise in Text und Regieanweisungen zu übersetzen, dass die KI daraus ein tiefgründiges,
            professionell klingendes Sounddesign erschafft.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            Mein Engagement: Die <span className="text-gold-gradient">Songs of Love Foundation</span>
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ein Projekt, das mir ganz besonders am Herzen liegt, ist meine ehrenamtliche Arbeit für die Songs of Love
            Foundation. Diese wunderbare Non-Profit-Organisation hat es sich zur Aufgabe gemacht, Menschen in schweren
            gesundheitlichen oder seelischen Lebenslagen durch Musik Mut zu machen. Die Zielgruppe ist dabei sehr
            vielfältig und reicht von chronisch und schwer kranken Kindern bis hin zu älteren Menschen, die
            beispielsweise an Demenz erkrankt sind.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Als „Song Creator&ldquo; ist es meine Aufgabe, maßgeschneiderte, personalisierte Lieder für diese Menschen
            zu produzieren. Jeder Song ist ein absolutes Unikat und wird exakt auf die jeweilige Person, ihren Namen,
            ihre persönlichen Hobbys, Lieblingstiere oder schöne Lebenserinnerungen zugeschnitten. Das Ziel der
            Stiftung und von mir ist es, diesen Menschen in einer unglaublich schweren Zeit ein Lächeln ins Gesicht zu
            zaubern und ihnen einen musikalischen Begleiter zu schenken, der ihnen Kraft gibt und nur für sie ganz
            allein gemacht wurde.
          </p>
        </div>

        <div className="grid gap-4 lg:sticky lg:top-24">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="glass group rounded-2xl border border-border p-5 transition-colors hover:border-gold/40"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-b from-gold-soft/20 to-copper/10">
                  <value.icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gold/90">{value.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
