export function ImpressumContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
      <p>
        Mirko Neumann
        <br />
        Mikrobi-Musik
        <br />
        Joh.-Seb.-Bach-Straße 49
        <br />
        72581 Dettingen an der Erms
      </p>

      <div>
        <h3 className="mb-1 text-base font-semibold text-foreground">Kontakt</h3>
        <p>
          Telefon: 015679521864
          <br />
          E-Mail: neumannmirko77@gmail.com
        </p>
      </div>

      <div>
        <h3 className="mb-1 text-base font-semibold text-foreground">Umsatzsteuer-ID & Kleinunternehmerstatus</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE461997701
        </p>
        <p className="mt-1">
          Gemäß § 19 UStG wird als Kleinunternehmer keine Umsatzsteuer berechnet und nicht gesondert ausgewiesen.
        </p>
      </div>

      <div>
        <h3 className="mb-1 text-base font-semibold text-foreground">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>

      <p className="text-xs">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de/impressum-generator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-gradient underline"
        >
          eRecht24
        </a>
      </p>
    </div>
  )
}

export function DatenschutzContent() {
  return (
    <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h3>
        <h4 className="mb-1 font-semibold text-foreground/90">Allgemeine Hinweise</h4>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können.
        </p>
      </div>

      <div>
        <h4 className="mb-1 font-semibold text-foreground/90">Datenerfassung auf dieser Website</h4>
        <p className="mb-2 font-medium text-foreground/80">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
          <br />
          Mirko Neumann, Johann-Sebastian-Bach-Str. 49, 72581 Dettingen an der Erms.
          <br />
          Telefon: 015679521864, E-Mail: neumannmirko77@gmail.com.
        </p>

        <p className="mb-2 mt-3 font-medium text-foreground/80">Wie erfassen wir Ihre Daten?</p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. Daten, die Sie in das Song-Profil bzw. Kontaktformular eingeben).
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
          erfasst (vor allem technische Daten wie Browser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <p className="mb-2 mt-3 font-medium text-foreground/80">Wofür nutzen wir Ihre Daten?</p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Die übermittelten Angaben aus dem Kontaktformular dienen der Angebotserstellung, Vertragsanbahnung und individuellen Komposition Ihres Auftragssongs oder Herzensprojekts.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">2. Hosting & Content Delivery Network (CDN)</h3>
        <h4 className="mb-1 font-semibold text-foreground/90">Cloudflare Pages</h4>
        <p>
          Wir hosten unsere Website bei Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA.
          Cloudflare bietet ein weltweites Content Delivery Network mit DNS-Diensten. Dabei wird der Datenverkehr zwischen Ihrem Browser und unserer Website über die Server von Cloudflare geleitet, um Ladezeiten und Sicherheit zu optimieren. Wir haben mit Cloudflare einen Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">3. Formulare & Drittanbieter-Dienste</h3>
        
        <h4 className="mb-1 font-semibold text-foreground/90">Kontaktformular / Song-Profil (Web3Forms)</h4>
        <p>
          Wenn Sie uns Anfragen über das Song-Profil zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Die technische Weiterleitung erfolgt über den Dienst Web3Forms. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen.
        </p>

        <h4 className="mb-1 mt-3 font-semibold text-foreground/90">Eingebettete Medien (Spotify & SoundCloud)</h4>
        <p>
          Auf unseren Unterseiten sind Player der Musikdienste Spotify (Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Schweden) und SoundCloud (SoundCloud Global Limited & Co. KG, Rheinsberger Str. 76/77, 10115 Berlin) eingebunden. Beim Abspielen dieser Inhalte wird eine direkte Verbindung zwischen Ihrem Browser und den Servern der jeweiligen Plattformen hergestellt, wodurch diese Informationen über Ihren Besuch und Ihre IP-Adresse erhalten.
        </p>

        <h4 className="mb-1 mt-3 font-semibold text-foreground/90">Zahlungsabwicklung (PayPal & Banküberweisung)</h4>
        <p>
          Im Rahmen der Auftragsabwicklung bieten wir Zahlungen per Banküberweisung (unter Nutzung von GiroCodes) sowie per PayPal an. Wenn Sie per PayPal bezahlen, werden Ihre Zahlungsdaten an PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg weitergeleitet. Die Weitergabe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">4. Ihre Rechte</h3>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
      </div>

      <p className="text-xs">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-gradient underline"
        >
          eRecht24
        </a>
      </p>
    </div>
  )
}