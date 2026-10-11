# Kraftwerk – Stilrichtlinie

## Positionierung
Direkt auftretende Handwerksbetriebe, Reparatur- und Modernisierungsschwerpunkte.

## Farben
Anthrazit #181b1e, Cremeweiß #f4f2ec, kräftiges Orange #ff773b.
Farben in stil.css über :root ändern. --accent ist die Buttonfläche, --on-accent deren Schriftfarbe, --accent-text die Akzentfarbe für Text. Diese Werte getrennt prüfen; helle Buttonfarben sind keine geeigneten Textfarben auf Weiß. --muted bleibt gut lesbar.

## Schrift und Ton
Fette Sans-Serif; kurze H1 und H2 dürfen in Versalien stehen. Textinhalt klar und konkret. Lange Überschriften auf zwei bis drei gut lesbare Zeilen kürzen.
Fließtext mindestens 16 px. Keine Webfont-CDNs einbauen. Bei eigenen Schriften Dateien lokal und mit passender Lizenz bereitstellen. Firmenname und Einsatzgebiet in kunde.js ändern; sichtbare Headline im index.html oder über heroTitle. heroTitle ist Klartext, ohne HTML. Für den gestalteten Zeilenumbruch samt em-Akzent direkt die H1 im HTML bearbeiten.

## Komposition
Große Typografie, harte Kanten, orange Informationsleiste und nummerierte Prozesskarten. Ein heller Betriebsabschnitt schafft einen bewussten Kontrast.
Mobile Reihenfolge und Desktop-Reihenfolge bleiben im selben DOM verständlich. Stilregeln gehören in stil.css, gemeinsame Responsivität und Interaktionen in base.css bzw. script.js. Jede Vorlage besitzt eigene Kopien dieser Dateien und ist unabhängig.

## Bilder
Technische Details, reale Arbeitssituationen und klare Motive; leicht entsättigte Fotos. Keine künstlichen Notdienst-Symbole.
Hero-Datei und Alt-Text über kunde.js anpassbar, weitere Fotos direkt in index.html. object-fit: cover schneidet Fotos zu; object-position bei jedem neuen Motiv kontrollieren. Symbolbild-Hinweise erst entfernen, wenn eigene, freigegebene Referenzbilder eingesetzt werden. Bildnachweise aktualisieren.

## Variieren, ohne den Stil zu verlieren
Orange kann zu Gelb wechseln, solange dunkle Schrift auf dem Akzent lesbar bleibt. Keine Pastelltöne, pillenförmigen Karten oder verspielten Serifen. Keine unbelegten 24/7- und Soforthilfe-Versprechen.
Zusätzlich lassen sich Abschnitte im HTML umsortieren, Leistungsinhalte austauschen und nicht benötigte Module entfernen. IDs eindeutig lassen, zugehörige Navigationslinks mitändern. Bei gelöschtem Kontaktabschnitt müssen sämtliche CTAs angepasst werden. Kundenindividuelle Leistungsschwerpunkte auch in Hauptheadline, Bildwahl und Reihenfolge zeigen; nicht nur die Farbe austauschen.

## Bei jeder Erweiterung prüfen
- 320, 375, 390, 768, 1024 und 1440 px Breite: kein seitliches Scrollen, keine überdeckten Inhalte.
- 200 % Textgröße: Firmenname, Menü, Überschriften und Footer weiterhin bedienbar.
- Buttons mindestens 44 px hoch, sichtbarer Tastaturfokus, sinnvolle Überschriftenfolge.
- Menü per Tastatur, Escape und Touch; Rechtslinks öffnen die jeweilige Ausklappsektion.
- Keine erfundenen Sternebewertungen, Gütesiegel, Reaktionszeiten oder Notdienst-Zusagen.
- Konkrete Leistungen, FAQ-Antworten und Prozessversprechen mit dem Betrieb abgleichen.
- Rechtliches gemäß ../RECHT-AT.md und technische Freigabe gemäß ../START-HIER.md.

