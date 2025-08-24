import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-kjf-blue hover:text-kjf-green transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Seite</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          <p className="text-gray-600">Stand: 24. August 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inhaltsübersicht</h2>
            <ul className="text-gray-700 leading-relaxed mb-4 list-disc list-inside">
              <li>Verantwortlicher</li>
              <li>Übersicht der Verarbeitungen</li>
              <li>Maßgebliche Rechtsgrundlagen</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Löschung von Daten</li>
              <li>Bereitstellung des Onlineangebotes und Webhosting</li>
              <li>Plugins und eingebettete Funktionen sowie Inhalte</li>
              <li>Änderung und Aktualisierung der Datenschutzerklärung</li>
              <li>Rechte der betroffenen Personen</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlicher</h2>
            <p className="text-gray-700 leading-relaxed">
              Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e. V.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <i>c/o Dr. Franz Matheis</i>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Buttlerweg 10
            </p>
            <p className="text-gray-700 leading-relaxed">
              82327 Traubing
            </p>
            <p className="text-gray-700 leading-relaxed">
              Deutschland
            </p>
            <p className="text-gray-700 leading-relaxed">
              E-Mail-Adresse: <a href="mailto:mail@example.com" className="text-kjf-blue" target="blank">mail@example.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Impressum: <a href="https://kjf-sta.de/impressum" className="text-kjf-blue" target="blank">https://kjf-sta.de/impressum</a>
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Übersicht der Verarbeitungen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Arten der verarbeiteten Daten</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Inhaltsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-2">Kategorien betroffener Personen</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Nutzer</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-2">Zwecke der Verarbeitung</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Sicherheitsmaßnahmen</li>
              <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
              <li>Informationstechnische Infrastruktur</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-2">Maßgebliche Rechtsgrundlagen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, 
              dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere 
              Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong>: Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder 
              eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, 
              überwiegen. Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum 
              Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz - BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf 
              Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur 
              Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des
               Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die 
               Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sicherheitsmaßnahmen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände 
              und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen 
              geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören insbesondere die Sicherung 
              der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden 
              Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von 
              Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten 
              bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch 
              datenschutzfreundliche Voreinstellungen. Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den eingesetzten Dienstleistern und Technologien verarbeitet werden 
              und die Verarbeitung einer vollständigen IP-Adresse nicht erforderlich ist, wird die IP-Adresse gekürzt (auch als "IP-Masking" bezeichnet). Hierbei werden die letzten 
              beiden Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt. Mit der Kürzung der IP-Adresse soll die Identifizierung 
              einer Person anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden. TLS-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten 
              zu schützen, nutzen wir eine TLS-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Löschung von Daten</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder 
              sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht 
              gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt 
              und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur 
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist. Unsere 
              Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bereitstellung des Onlineangebotes und Webhosting</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die 
              notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Verarbeitete Datenarten</strong>: Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten 
                (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus); Inhaltsdaten (z.B. Eingaben in Onlineformularen).
              </li>
              <li>
                <strong>Betroffene Personen</strong>: Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
              </li>
              <li>
                <strong>Zwecke der Verarbeitung</strong>: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und 
                Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.).); Sicherheitsmaßnahmen. <strong>Rechtsgrundlagen</strong>: Berechtigte 
                Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). 
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Der Zugriff auf unser Onlineangebot wird in Form von so genannten "Server-Logfiles" protokolliert. Zu den 
                Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen 
                Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören.
              </li>
              <li>
                Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von 
                missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte 
                Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder 
                anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
              </li>
              <li>
                <strong>E-Mail-Versand und -Hosting</strong>: Die von uns in Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung 
                von E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider) 
                sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu 
                beachten, dass E-Mails im Internet grundsätzlich nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber (sofern 
                kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir können daher für den 
                Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen; <strong>Rechtsgrundlagen</strong>: Berechtigte 
                Interessen (Art. 6  Abs. 1 S. 1 lit. f) DSGVO).
              </li> 
              <li>
                <strong>Content-Delivery-Network</strong>: Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, 
                insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer 
                ausgeliefert werden können; <strong>Rechtsgrundlagen</strong>: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plugins und eingebettete Funktionen sowie Inhalte</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet als "Drittanbieter”) bezogen 
              werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich bezeichnet als "Inhalte”). Die Einbindung setzt immer voraus, 
              dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse 
              ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich 
              zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder 
              Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die pseudonymen 
              Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu 
              verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen Informationen aus anderen Quellen verbunden 
              werden.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Verarbeitete Datenarten</strong>: Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten 
                (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
              </li>
              <li>
                <strong>Betroffene Personen</strong>: Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
              </li>
              <li>
                <strong>Zwecke der Verarbeitung</strong>: Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit. <strong>Rechtsgrundlagen</strong>: Berechtigte Interessen 
                (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). 
              </li>
            </ul>
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Änderung und Aktualisierung der Datenschutzerklärung</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns 
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder 
              eine sonstige individuelle Benachrichtigung erforderlich wird. Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen 
              angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechte der betroffenen Personen</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden 
                personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes 
                Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die 
                Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung 
                in Verbindung steht.</strong>
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen</strong>: Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht</strong>: Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten 
                sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Recht auf Berichtigung</strong>: Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung 
                der Sie betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung und Einschränkung der Verarbeitung</strong>: Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten 
                unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit</strong>: Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in 
                einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong>Beschwerde bei Aufsichtsbehörde</strong>: Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde 
                bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der 
                Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
