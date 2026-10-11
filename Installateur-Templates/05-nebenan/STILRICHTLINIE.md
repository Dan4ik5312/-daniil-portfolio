# Nebenan – Stilrichtlinie

## Positionierung
Kleine regionale Betriebe, persönlich geführte Unternehmen und serviceorientierte Installateure.

## Farben
Warmes Creme #fff8ef, Burgunder #823c4b, Dunkelbraun #452a31.
Farben in stil.css über :root ändern. --accent ist die Buttonfläche, --on-accent deren Schriftfarbe, --accent-text die Akzentfarbe für Text. Diese Werte getrennt prüfen; helle Buttonfarben sind keine geeigneten Textfarben auf Weiß. --muted bleibt gut lesbar.

## Schrift und Ton
Georgia in Überschriften, Arial im Fließtext. Freundliche, konkrete Sprache; keine erfundene Familiengeschichte.
Fließtext mindestens 16 px. Keine Webfont-CDNs einbauen. Bei eigenen Schriften Dateien lokal und mit passender Lizenz bereitstellen. Firmenname und Einsatzgebiet in kunde.js ändern; sichtbare Headline im index.html oder über heroTitle. heroTitle ist Klartext, ohne HTML. Für den gestalteten Zeilenumbruch samt em-Akzent direkt die H1 im HTML bearbeiten.

## Komposition
Bogenförmiges Hauptfoto und runder Bildhinweis, persönlicher Betriebsabschnitt früh auf der Seite. Leistungen als horizontale Zeilen statt Karten. Weiche 12–24-px-Ecken.
Mobile Reihenfolge und Desktop-Reihenfolge bleiben im selben DOM verständlich. Stilregeln gehören in stil.css, gemeinsame Responsivität und Interaktionen in base.css bzw. script.js. Jede Vorlage besitzt eigene Kopien dieser Dateien und ist unabhängig.

## Bilder
Einladende Bäder, später echte Team- und Betriebsfotos. Bei Porträts Augen und Kopf innerhalb des Rundbogens halten.
Hero-Datei und Alt-Text über kunde.js anpassbar, weitere Fotos direkt in index.html. object-fit: cover schneidet Fotos zu; object-position bei jedem neuen Motiv kontrollieren. Symbolbild-Hinweise erst entfernen, wenn eigene, freigegebene Referenzbilder eingesetzt werden. Bildnachweise aktualisieren.

## Variieren, ohne den Stil zu verlieren
Burgunder kann zu dunklem Petrol oder tiefem Ziegelrot wechseln. Rundbogen, Serifen und ruhige Zeilenstruktur erhalten. Persönliche Aussagen nur schreiben, wenn sie zum Kunden passen.
Zusätzlich lassen sich Abschnitte im HTML umsortieren, Leistungsinhalte austauschen und nicht benötigte Module entfernen. IDs eindeutig lassen, zugehörige Navigationslinks mitändern. Bei gelöschtem Kontaktabschnitt müssen sämtliche CTAs angepasst werden. Kundenindividuelle Leistungsschwerpunkte auch in Hauptheadline, Bildwahl und Reihenfolge zeigen; nicht nur die Farbe austauschen.

## Bei jeder Erweiterung prüfen
- 320, 375, 390, 768, 1024 und 1440 px Breite: kein seitliches Scrollen, keine überdeckten Inhalte.
- 200 % Textgröße: Firmenname, Menü, Überschriften und Footer weiterhin bedienbar.
- Buttons mindestens 44 px hoch, sichtbarer Tastaturfokus, sinnvolle Überschriftenfolge.
- Menü per Tastatur, Escape und Touch; Rechtslinks öffnen die jeweilige Ausklappsektion.
- Keine erfundenen Sternebewertungen, Gütesiegel, Reaktionszeiten oder Notdienst-Zusagen.
- Konkrete Leistungen, FAQ-Antworten und Prozessversprechen mit dem Betrieb abgleichen.
- Rechtliches gemäß ../RECHT-AT.md und technische Freigabe gemäß ../START-HIER.md.

