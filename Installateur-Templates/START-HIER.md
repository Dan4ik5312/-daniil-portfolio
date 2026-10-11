# Installateur-Templates – Start hier

Fünf eigenständige, lokale HTML-Landingpages für österreichische Installateurbetriebe. index.html in diesem Ordner öffnet die Stilübersicht. Keine Installation, kein Build und kein Server notwendig; jede Variante lässt sich direkt per Doppelklick öffnen.

## Die fünf Richtungen
1. 01-klarwerk: Blau/Weiß, klarer Allround-Auftritt.
2. 02-atelier: Editorial, Serifen, Badgestaltung.
3. 03-kraftwerk: Anthrazit/Orange, kräftiges Handwerk.
4. 04-morgen: Grün, runde Flächen, Heizungsmodernisierung.
5. 05-nebenan: Burgunder/Creme, persönliche Regionalität.

Die Unterschiede betreffen Typografie, Hero-Komposition, Bildform, Leistungsdarstellung, Abschnittsfolge und Farbwelt.

## Einen neuen Kunden anlegen
1. Den gewünschten Stilordner komplett kopieren und nach dem Kunden benennen. Der Ordner funktioniert ohne Dateien aus anderen Stilordnern.
2. kunde.js im Texteditor öffnen. company, legalName, city, region, address, phone, phoneDisplay, email und hours ersetzen. Telefonnummer international eintragen; keine Platzhalter veröffentlichen.
3. Texte in index.html auf die tatsächlichen Leistungen abstimmen. Je Stil liegt STILRICHTLINIE.md bei. Die H1 kann im HTML mit em/Zeilenumbruch gestaltet oder über heroTitle als Klartext ersetzt werden.
4. Farben, Rundungen und Bildzuschnitte in stil.css anpassen. Basiseinstellungen stehen in base.css.
5. Eigene Fotos nach assets/ kopieren und src/Alt-Texte ändern. Der Hero kann über heroImage/heroAlt gesteuert werden. Weitere Fotos stehen im HTML. Die mitgelieferten SVG-Dateien enthalten optimierte, eingebettete WebP-Fotos und sind offline nutzbar.
6. Impressum und Datenschutzerklärung direkt im HTML vollständig ausfüllen. RECHT-AT.md verwenden. Sämtliche eckigen Klammern und nicht zutreffende Varianten entfernen.
7. Telefon/E-Mail prüfen, dann demo: false setzen. Die Kontaktbuttons öffnen nun die Telefon- bzw. E-Mail-App. Es gibt kein Kontaktformular und keinen Serverversand. Im Demo-Modus werden keine erfundenen Telefonnummern angerufen.
8. Statische HTML-Fallbacks synchronisieren: dieselben Firmen- und Kontaktdaten auch in den data-field-Elementen von index.html eintragen. Das ist für Darstellung ohne JavaScript und Suchmaschinen sinnvoll. Meta-Titel und Beschreibung ebenfalls direkt im head bearbeiten; JavaScript allein reicht für saubere Suchmaschinen-Metadaten nicht aus.
9. Nach Prüfung meta robots von noindex,nofollow auf index,follow ändern (oder entfernen). Erst für die echte Domain bei Bedarf einen absoluten Canonical-Link und reale LocalBusiness-Strukturdaten ergänzen.
10. Den Inhalt des Kundenordners auf ein Hosting mit HTTPS hochladen. Den gesamten Vorlagenkatalog nicht als Kundenwebsite hochladen.

## Aufbau je Stil
- index.html: vollständige einseitige Landingpage, Navigation und Rechtsbereiche.
- kunde.js: zentrale Firmenangaben und Haupttexte.
- stil.css: individuelle Gestaltung und Designvariablen.
- base.css: Grundlayout und mobile Regeln.
- script.js: Mobilmenü, Kontaktdaten, Demo-Schutz, Rechtslinks.
- assets/: lokale Fotos und Bildquellen.
- STILRICHTLINIE.md: Regeln für konsistente Erweiterungen.

## Wiederverwendung und Module
Abschnitte sind mit lesbaren IDs markiert: leistungen, betrieb, einblicke, ablauf, fragen, kontakt. Abschnitte können im HTML verschoben und ergänzt werden. Bei Entfernung immer Navigations- und CTA-Ziele kontrollieren. Die FAQ sind native details-Elemente. Impressum und Datenschutz bleiben direkt per #impressum bzw. #datenschutz erreichbar und auch ohne JavaScript manuell ausklappbar.

## Vor Kundenauslieferung
- Alle sichtbaren Angaben, Leistungen, Zeiten, Bilder, Symbolbild-Hinweise und Rechtsbereiche geprüft.
- Telefon und E-Mail führen zu echten Zielen; die E-Mail-App sendet erst nach Handlung des Besuchers.
- Website funktioniert auf Smartphone, Tablet und Desktop; 200 % Schriftgröße und Tastatur geprüft.
- Bildrechte und ggf. Personenfreigaben dokumentiert; keine Stockfotos als eigene Referenzen bezeichnet.
- Keine unbelegten Bewertungen, Notdienstversprechen oder Meistertitel ergänzt.
- Hosting/Server-Logs und Datenschutztext stimmen überein. Zusätzliche Trackingdienste erst nach gesonderter Prüfung integrieren.
- noindex nur für die endgültige Kundenwebsite entfernen; Testkopien nicht indexieren lassen.

## Technische Grundlage
Reines HTML, CSS und kleines Vanilla-JavaScript. Kein Framework, keine externen Schriftanfragen, kein Analytics, keine Cookies, keine Karte und kein CDN. Die Inhalte bleiben als HTML im Quelltext vorhanden. Eine untere mobile Kontaktleiste unterstützt schnelle Anfragen; eine einseitige Ankernavigation führt durch die Seite.

## Rechte am Paket
Der individuell für dieses Paket erstellte Code kann für Kundenprojekte kopiert und verändert werden. Für die Stockfotos gilt separat die Pexels-Lizenz, dokumentiert unter assets/BILDQUELLEN.md. Dieses Paket erteilt keine weitergehenden Rechte an fremden Marken oder Bildern. Keine rechtliche Freigabe für einen konkreten Betrieb.

