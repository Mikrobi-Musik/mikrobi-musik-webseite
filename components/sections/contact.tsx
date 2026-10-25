"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, Loader2, CheckCircle2, ShieldCheck, ArrowUpRight, AlertCircle } from "lucide-react"

export function Contact() {
  const [values, setValues] = useState({
    requestType: "", // "auftragssong" oder "herzensprojekt"
    senderName: "",
    senderEmail: "",
    person: "",
    pronunciation: "",
    occasion: "",
    style: "",
    details: "",
  })

  // Speichert, ob der Absendeversuch bereits stattgefunden hat (Validation Trigger)
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function update(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }))
    }
  }

  // Prüffunktion für die Pflichtfelder
  const isFieldInvalid = (key: keyof typeof values) => {
    if (!hasAttemptedSubmit) return false
    return !values[key] || values[key].trim() === ""
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setHasAttemptedSubmit(true)

    // Validierung aller Pflichtfelder
    const missingFields: string[] = []
    if (!values.requestType) missingFields.push("Bereichsauswahl (Auftragssong vs. Herzensprojekt)")
    if (!values.senderName.trim()) missingFields.push("Dein Name")
    if (!values.senderEmail.trim()) missingFields.push("Deine E-Mail-Adresse")
    if (!values.person.trim()) missingFields.push("Name der Hauptperson")
    if (!values.occasion.trim()) missingFields.push("Anlass des Songs")
    if (!values.details.trim()) missingFields.push("Wichtige Details für die Lyrics")

    if (missingFields.length > 0) {
      setStatus("error")
      setErrorMessage(
        `Bitte fülle alle markierten Pflichtfelder aus (${missingFields.length} Angabe${missingFields.length > 1 ? "n fehlen" : " fehlt"}).`
      )
      
      // Sanft zum Formularbeginn scrollen, damit die Fehler sichtbar sind
      const formElement = document.getElementById("kontakt-formular")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    const isAuftrag = values.requestType === "auftragssong"
    const typeLabel = isAuftrag ? "[Auftragssong]" : "[Herzensprojekt]"
    const subjectLine = `${typeLabel} Neue Anfrage von ${values.senderName || values.person || "Interessent"}`

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
          from_name: values.senderName || "Song-Anfrage",
          email: values.senderEmail,
          replyto: values.senderEmail,
          message: [
            `Kategorie: ${isAuftrag ? "Maßgeschneiderter Auftragssong (49 €)" : "Ehrenamtliches Herzensprojekt"}`,
            "",
            "Kontaktdaten des Anfragenden:",
            `• Name des Absenders: ${values.senderName || "-"}`,
            `• E-Mail-Adresse: ${values.senderEmail}`,
            "",
            "Details für den persönlichen Song:",
            `• Name der Hauptperson (Besungener): ${values.person || "-"}`,
            `• Aussprache des Namens: ${values.pronunciation || "-"}`,
            `• Anlass des Songs: ${values.occasion || "-"}`,
            `• Musikstil / Stimmung: ${values.style || "-"}`,
            "",
            "• Wichtige Details für die Lyrics:",
            `${values.details || "-"}`,
          ].join("\n"),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setHasAttemptedSubmit(false)
        setValues({
          requestType: "",
          senderName: "",
          senderEmail: "",
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
              onClick={() => {
                setStatus("idle")
                setHasAttemptedSubmit(false)
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
            >
              Weitere Anfrage senden
            </button>
          </div>
        ) : (
          <form id="kontakt-formular" onSubmit={handleSubmit} noValidate className="grid gap-5">
            {/* Globale Fehlerbox ganz oben, falls beim Klick Fehler vorhanden sind */}
            {hasAttemptedSubmit && status === "error" && (
              <div className="flex items-start gap-3 p-4 rounded-xl border border-red-500/40 bg-red-500/10 text-xs text-red-400">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-300">Formular noch unvollständig</p>
                  <p className="mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Auswahlbereich (Pflichtfeld) */}
            <div
              className={`grid gap-2 p-4 rounded-xl border transition-colors bg-secondary/20 ${
                isFieldInvalid("requestType")
                  ? "border-red-500/80 bg-red-500/5 ring-1 ring-red-500/40"
                  : "border-border/60"
              }`}
            >
              <label className="text-sm font-medium text-foreground/90">
                Worum geht es bei deiner Anfrage? <span className="text-gold">*</span>
              </label>
              <p className="text-xs text-muted-foreground">Bitte wähle einen Bereich aus:</p>

              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                    values.requestType === "auftragssong"
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border bg-secondary/40 text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="requestType"
                    value="auftragssong"
                    checked={values.requestType === "auftragssong"}
                    onChange={(e) => setValues((prev) => ({ ...prev, requestType: e.target.value }))}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium">Maßgeschneiderter Auftragssong</span>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                    values.requestType === "herzensprojekt"
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border bg-secondary/40 text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="requestType"
                    value="herzensprojekt"
                    checked={values.requestType === "herzensprojekt"}
                    onChange={(e) => setValues((prev) => ({ ...prev, requestType: e.target.value }))}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium">Ehrenamtliches Herzensprojekt</span>
                </label>
              </div>

              {isFieldInvalid("requestType") && (
                <p className="text-xs text-red-400 font-medium mt-1">
                  Bitte wähle aus, ob es sich um einen Auftragssong oder ein Herzensprojekt handelt.
                </p>
              )}

              {/* Dynamische Kachel bei Auswahl von Auftragssong */}
              {values.requestType === "auftragssong" && (
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-gold/40 bg-gold/10 transition-all">
                  <div className="text-xs text-foreground/90 leading-tight">
                    <span className="font-semibold text-gold block sm:inline">Transparenter Festpreis: 49 €</span>
                    <span className="sm:ml-1 text-muted-foreground">
                      Erfahre alles über Ablauf, Anzahlung & deine Zufriedenheit.
                    </span>
                  </div>
                  <Link
                    href="/preise"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline whitespace-nowrap"
                  >
                    Ablauf & Preise ansehen
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}

              {/* Dynamische Kachel bei Auswahl von Herzensprojekt */}
              {values.requestType === "herzensprojekt" && (
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-amber-500/40 bg-amber-500/10 transition-all">
                  <div className="text-xs text-foreground/90 leading-relaxed">
                    <span className="font-semibold text-amber-400 block mb-0.5">
                      Herzenssache mit Verantwortung:
                    </span>
                    <span className="text-muted-foreground">
                      Kostenlose Songs sind ausschließlich für Menschen in schweren Lebenskrisen, meist mit Klinikaufenthalt reserviert (schwer kranke Kinder, Jugendliche, Erwachsene, Hospizbegleitung, Demenzstationen, Alten- und Pflegeeinrichtungen). Für Geburtstage, Hochzeiten oder private Feiern wähle bitte den regulären Auftragssong (49 €) – denn nur so können wir diese ehrenamtlichen Projekte dauerhaft ermöglichen.
                    </span>
                  </div>
                  <Link
                    href="/herzensprojekte"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline whitespace-nowrap mt-1 sm:mt-0"
                  >
                    Projekte ansehen
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Kontaktdaten des Absenders */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Dein Name"
                htmlFor="senderName"
                hint="Dein Vor- und Nachname"
                required
                error={isFieldInvalid("senderName") ? "Bitte gib deinen Namen an." : undefined}
              >
                <input
                  id="senderName"
                  name="senderName"
                  value={values.senderName}
                  onChange={update("senderName")}
                  placeholder="z. B. Max Mustermann"
                  className={getInputClass(isFieldInvalid("senderName"))}
                />
              </Field>

              <Field
                label="Deine E-Mail-Adresse"
                htmlFor="senderEmail"
                hint="Für Rückfragen & die Song-Demo"
                required
                error={isFieldInvalid("senderEmail") ? "Bitte gib eine gültige E-Mail-Adresse an." : undefined}
              >
                <input
                  id="senderEmail"
                  name="senderEmail"
                  type="email"
                  value={values.senderEmail}
                  onChange={update("senderEmail")}
                  placeholder="name@beispiel.de"
                  className={getInputClass(isFieldInvalid("senderEmail"))}
                />
              </Field>
            </div>

            {/* Song-Details */}
            <Field
              label="Name der Hauptperson"
              htmlFor="person"
              hint="Für wen ist der Song? Vor- und ggf. Spitzname."
              required
              error={isFieldInvalid("person") ? "Bitte nenne den Namen der besungenen Person." : undefined}
            >
              <input
                id="person"
                name="person"
                value={values.person}
                onChange={update("person")}
                placeholder="z. B. Anna, Opa Willi …"
                className={getInputClass(isFieldInvalid("person"))}
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
                className={getInputClass(false)}
              />
            </Field>

            <Field
              label="Anlass des Songs"
              htmlFor="occasion"
              hint="Wofür soll der Song sein?"
              required
              error={isFieldInvalid("occasion") ? "Bitte gib den Anlass für den Song an." : undefined}
            >
              <input
                id="occasion"
                name="occasion"
                value={values.occasion}
                onChange={update("occasion")}
                placeholder="z. B. Geburtstag, Hochzeit, Mutmacher …"
                className={getInputClass(isFieldInvalid("occasion"))}
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
                className={getInputClass(false)}
              />
            </Field>

            <Field
              label="Wichtige Details für die Lyrics"
              htmlFor="details"
              hint="Hobbys, Lieblingstiere, wichtige Wegbegleiter, Anekdoten …"
              required
              error={isFieldInvalid("details") ? "Bitte teile mir einige Details oder Stichpunkte für den Songtext mit." : undefined}
            >
              <textarea
                id="details"
                name="details"
                rows={5}
                value={values.details}
                onChange={update("details")}
                placeholder="Erzähl mir alles, was im Song vorkommen soll – kleine Geschichten, Insider, besondere Momente …"
                className={`${getInputClass(isFieldInvalid("details"))} resize-none`}
              />
            </Field>

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

function getInputClass(hasError: boolean) {
  const base =
    "w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all"
  if (hasError) {
    return `${base} border-red-500/80 bg-red-500/5 focus:border-red-500 focus:ring-1 focus:ring-red-500/50`
  }
  return `${base} border-border focus:border-gold/60 focus:ring-1 focus:ring-gold/40`
}

function Field({
  label,
  htmlFor,
  hint,
  required,
  error,
  children,
}: {
  label: string
  htmlFor: string
  hint?: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground/90">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {hint ? <p className="-mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      {children}
      {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
    </div>
  )
}