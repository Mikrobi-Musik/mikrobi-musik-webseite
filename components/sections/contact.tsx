"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function Contact() {
  const [values, setValues] = useState({
    person: "",
    pronunciation: "",
    occasion: "",
    style: "",
    details: "",
  })

  function update(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const subject = "Anfrage: Mein persönlicher Song"
    const body = [
      "Hallo Mirko,",
      "",
      "hier sind die Details für meinen persönlichen Song:",
      "",
      `• Name der Hauptperson: ${values.person || "-"}`,
      `• Aussprache des Namens: ${values.pronunciation || "-"}`,
      `• Anlass des Songs: ${values.occasion || "-"}`,
      `• Musikstil / Stimmung: ${values.style || "-"}`,
      "• Wichtige Details für die Lyrics:",
      `${values.details || "-"}`,
      "",
      "Viele Grüße",
    ].join("\n")

    const mailto = `mailto:neumannmirko77@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section id="kontakt" className="relative mx-auto max-w-3xl scroll-mt-24 px-5 py-24">
      <div className="mb-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Song-Profil</p>
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Erzähl mir von <span className="text-gold-gradient">deiner Vision</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Fülle das Song-Profil aus – je mehr Details du mir gibst, desto persönlicher wird dein Song. Mit einem Klick
          öffnet sich dein E-Mail-Programm mit allen Angaben.
        </p>
      </div>

      <div className="glass rounded-3xl border border-border p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="grid gap-5">
          <Field
            label="Name der Hauptperson"
            htmlFor="person"
            hint="Für wen ist der Song? Vor- und ggf. Spitzname."
          >
            <input
              id="person"
              name="person"
              required
              value={values.person}
              onChange={update("person")}
              placeholder="z. B. Anna, Opa Willi …"
              className={inputClass}
            />
          </Field>

          <Field
            label="Genaue Aussprache des Namens"
            htmlFor="pronunciation"
            hint="Damit der Name im Song richtig klingt – lautschriftlich beschrieben."
          >
            <input
              id="pronunciation"
              name="pronunciation"
              value={values.pronunciation}
              onChange={update("pronunciation")}
              placeholder="z. B. 'Maike' wie 'My-ke'"
              className={inputClass}
            />
          </Field>

          <Field
            label="Anlass des Songs"
            htmlFor="occasion"
            hint="Wofür soll der Song sein?"
          >
            <input
              id="occasion"
              name="occasion"
              required
              value={values.occasion}
              onChange={update("occasion")}
              placeholder="z. B. Geburtstag, Hochzeit, Mutmacher …"
              className={inputClass}
            />
          </Field>

          <Field
            label="Gewünschter Musikstil / Stimmung"
            htmlFor="style"
            hint="Welches Genre und welche Gefühle soll der Song transportieren?"
          >
            <input
              id="style"
              name="style"
              value={values.style}
              onChange={update("style")}
              placeholder="z. B. gefühlvolle Ballade, fröhlicher Pop, Rock …"
              className={inputClass}
            />
          </Field>

          <Field
            label="Wichtige Details für die Lyrics"
            htmlFor="details"
            hint="Hobbys, Lieblingstiere, wichtige Wegbegleiter, Anekdoten …"
          >
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              value={values.details}
              onChange={update("details")}
              placeholder="Erzähl mir alles, was im Song vorkommen soll – kleine Geschichten, Insider, besondere Momente …"
              className={`${inputClass} resize-none`}
            />
          </Field>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-copper px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_36px_-8px_var(--gold)] transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
            Senden
          </button>
        </form>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/40"

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string
  htmlFor: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground/90">
        {label}
      </label>
      {hint ? <p className="-mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      {children}
    </div>
  )
}
