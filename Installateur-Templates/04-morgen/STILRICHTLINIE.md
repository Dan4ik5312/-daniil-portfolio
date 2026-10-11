# Morgen – Stilrichtlinie

## Positionierung
Betriebe mit Fokus auf Heizungsmodernisierung, Beratung und zukunftsfähige Haustechnik.

## Farben
Helles Graugrün #eef4ed, Waldgrün #163c32, Limette #b9ed77.
Farben in stil.css über :root ändern. --accent ist die Buttonfläche, --on-accent deren Schriftfarbe, --accent-text die Akzentfarbe für Text. Diese Werte getrennt prüfen; helle Buttonfarben sind keine geeigneten Textfarben auf Weiß. --muted bleibt gut lesbar.

## Schrift und Ton
Klare Sans-Serif, ausgeglichene Zeilen, ruhige Sprache. Farbige Headline-Teile dunkelgrün; Limette dient als Fläche mit dunkler Schrift.
Fließtext mindestens 16 px. Keine Webfont-CDNs einbauen. Bei eigenen Schriften Dateien lokal und mit passender Lizenz bereitstellen. Firmenname und Einsatzgebiet in kunde.js ändern; sichtbare Headline im index.html oder über heroTitle. heroTitle ist Klartext, ohne HTML. Für den gestalteten Zeilenumbruch samt em-Akzent direkt die H1 im HTML bearbeiten.

## Komposition
Desktop: zentrierter Text über einem breiten Hausfoto. Runde Karten und Buttons, Ecken 24–28 px. Dunkelgrüner Beratungsabschnitt. Mobil wird der Einstieg linksbündig.
Mobile Reihenfolge und Desktop-Reihenfolge bleiben im selben DOM verständlich. Stilregeln gehören in stil.css, gemeinsame Responsivität und Interaktionen in base.css bzw. script.js. Jede Vorlage besitzt eigene Kopien dieser Dateien und ist unabhängig.

## Bilder
Moderne Wohnhäuser und echte Technik im Wohnkontext. Keine unpassenden Windparks oder abstrakten grünen Blätter als Technik-Ersatz.
Hero-Datei und Alt-Text über kunde.js anpassbar, weitere Fotos direkt in index.html. object-fit: cover schneidet Fotos zu; object-position bei jedem neuen Motiv kontrollieren. Symbolbild-Hinweise erst entfernen, wenn eigene, freigegebene Referenzbilder eingesetzt werden. Bildnachweise aktualisieren.

## Variieren, ohne den Stil zu verlieren
Waldgrün/Limette als zusammenhängendes Paar ändern. Runde Formensprache erhalten. Energieeinsparungen, Förderungen, Zertifizierungen und Umweltbehauptungen nur mit belegbaren Angaben aufnehmen.
Zusätzlich lassen sich Abschnitte im HTML umsortieren, Leistungsinhalte austauschen und nicht benötigte Module entfernen. IDs eindeutig lassen, zugehörige Navigationslinks mitändern. Bei gelöschtem Kontaktabschnitt müssen sämtliche CTAs angepasst werden. Kundenindividuelle Leistungsschwerpunkte auch in Hauptheadline, Bildwahl und Reihenfolge zeigen; nicht nur die Farbe austauschen.

## Bei jeder Erweiterung prüfen
- 320, 375, 390, 768, 1024 und 1440 px Breite: kein seitliches Scrollen, keine überdeckten Inhalte.
- 200 % Textgröße: Firmenname, Menü, Überschriften und Footer weiterhin bedienbar.
- Buttons mindestens 44 px hoch, sichtbarer Tastaturfokus, sinnvolle Überschriftenfolge.
- Menü per Tastatur, Escape und Touch; Rechtslinks öffnen die jeweilige Ausklappsektion.
- Keine erfundenen Sternebewertungen, Gütesiegel, Reaktionszeiten oder Notdienst-Zusagen.
- Konkrete Leistungen, FAQ-Antworten und Prozessversprechen mit dem Betrieb abgleichen.
- Rechtliches gemäß ../RECHT-AT.md und technische Freigabe gemäß ../START-HIER.md.

