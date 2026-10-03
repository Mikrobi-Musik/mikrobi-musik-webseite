"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle2, ShieldCheck } from "lucide-react"

export function Contact() {
  const [values, setValues] = useState({
    requestType: "", // "auftragssong" oder "herzensprojekt"
    person: "",
    pronunciation: "",
    occasion: "",
    style: "",
    details: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function update(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!values.requestType) {
      setStatus("error")
      setErrorMessage("Bitte wähle aus, ob es sich um einen Auftragssong oder ein Herzensprojekt handelt.")
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    const isAuftrag = values.requestType === "auftragssong"
    const typeLabel = isAuftrag ? "[Auftragssong]" : "[Herzensprojekt]"
    const subjectLine = `${typeLabel} Neue Anfrage von ${values.person || "Unbekannt"}`

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "347c0a33-7bab-4a68-806a-fc902bc97365",
          subject: subjectLine,
          from_name: values.person || "Song-Anfrage",
          message: [
            `Kategorie: ${isAuftrag ? "Maßgeschneiderter Auftragssong" : "Ehrenamtliches Herzensprojekt"}`,
            "",
            "Details für den persönlichen Song:",
            "",
            `• Name der Hauptperson: ${values.person || "-"}`,
            `• Aussprache des Namens: ${values.pronunciation || "-"}`,
            `• Anlass des Songs: ${values.occasion || "-"}`,
            `• Musikstil / Stimmung: ${values.style || "-"}`,
            "• Wichtige Details für die Lyrics:",
            `${values.details || "-"}`,
          ].join("\n"),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setValues({
          requestType: "",
          person: "",
          pronunciation: "",
          occasion: "",
          style: "",
          details: "",
        })
      } else {
        setStatus("error")
        setErrorMessage(result.message || "Etwas ist schiefgelaufen.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Netzwerkfehler. Bitte versuche es später noch einmal.")
    }
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
          wird deine Anfrage direkt an mich gesendet.
        </p>
      </div>

      <div className="glass rounded-3xl border border-border p-6 sm:p-8">
        {status === "success" ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
            <h3 className="mt-4 text-xl font-bold">Vielen Dank für deine Anfrage!</h3>
            <p className="mt-2 text-muted-foreground">
              Dein Song-Profil wurde erfolgreich verschickt. Ich melde mich bald bei dir!
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
            >
              Weitere Anfrage senden
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            
            {/* Auswahlbereich (Pflichtfeld) */}
            <div className="grid gap-2 p-4 rounded-xl border border-border/60 bg-secondary/20">
              <label className="text-sm font-medium text-foreground/90">
                Worum geht es bei deiner Anfrage? <span className="text-gold">*</span>
              </label>
              <p className="text-xs text-muted-foreground">Bitte wähle einen Bereich aus:</p>
              
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${values.requestType === "auftragssong" ? "border-gold bg-gold/10 text-foreground" : "border-border bg-secondary/40 text-muted-foreground hover:border-gold/40"}`}>
                  <input
                    type="radio"
                    name="requestType"
                    value="auftragssong"
                    checked={values.requestType === "auftragssong"}
                    onChange={(e) => setValues(prev => ({ ...prev, requestType: e.target.value }))}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium">Maßgeschneiderter Auftragssong</span>
                </label>

                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${values.requestType === "herzensprojekt" ? "border-gold bg-gold/10 text-foreground" : "border-border bg-secondary/40 text-muted-foreground hover:border-gold/40"}`}>
                  <input
                    type="radio"
                    name="requestType"
                    value="herzensprojekt"
                    checked={values.requestType === "herzensprojekt"}
                    onChange={(e) => setValues(prev => ({ ...prev, requestType: e.target.value }))}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium">Ehrenamtliches Herzensprojekt</span>
                </label>
              </div>
            </div>

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
              hint="Damit der Song richtig klingt – lautschriftlich beschrieben."
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

            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">Fehler: {errorMessage}</p>
            )}

            {/* Datenschutz-Hinweis */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-gold/20 bg-gold/5 text-xs text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <p>
                <strong className="text-foreground">Streng vertraulich:</strong> Alle hier eingegebenen personenbezogenen Daten, Namen und persönlichen Details werden absolut vertraulich behandelt, streng datenschutzkonform verarbeitet und dienen ausschließlich der Erstellung deines persönlichen Songs.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-soft to-copper px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_36px_-8px_var(--gold)] transition-transform hover:scale-[1.02] disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" strokeWidth={2} />
                  Senden
                </>
              )}
            </button>
          </form>
        )}
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