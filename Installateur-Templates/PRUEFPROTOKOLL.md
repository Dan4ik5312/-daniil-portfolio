# Prüfung der Vorlagen

Geprüft am 29.09.2026 mit Microsoft Edge / Chromium unter Windows. Browsergrößen wurden emuliert; kein Test auf physischen iOS- oder Android-Geräten und keine formelle WCAG-Zertifizierung.

Alle fünf Stile:
- 320, 375, 390, 768, 1024 und 1440 px: keine horizontalen Überläufe.
- 200 % Grundschriftgröße bei 390 px: kein horizontaler Überlauf.
- Mobilmenü öffnet; Escape und Auswahl eines Navigationslinks schließen es.
- Kontaktbuttons zeigen im Demo-Modus einen Hinweis, statt erfundene Kontaktdaten zu verwenden.
- Impressum und Datenschutz lassen sich über Footerlinks öffnen.
- FAQ öffnen und schließen, alle internen Sprungziele vorhanden.
- Bilder eingebettet und dekodierbar, Alt-Texte vorhanden.
- Keine JavaScript-Seitenfehler und keine externen HTTP-Anfragen beim Laden.
- Desktop- und Mobilansichten visuell kontrolliert.

Zusätzlich geprüft:
- Live-Konfiguration mit synthetischen Testdaten: korrekte tel:- und mailto:-Links; keine Anrufe oder Nachrichten ausgelöst. Die Testdaten wurden nicht in die Vorlagen übernommen.
- Langer Firmenname bei 390 px bleibt innerhalb des Viewports.
- Inhalte und Navigation ohne JavaScript lesbar; für die endgültige Veröffentlichung HTML-Fallbacks mit den echten Kundendaten synchronisieren.
- Stilübersicht bei 320, 390, 768 und 1440 px ohne horizontalen Überlauf.

Vor jeder Kundenauslieferung mit den individuellen Texten, Bildern, Kontaktdaten und Rechtsangaben erneut prüfen. Kein Backend und kein Nachrichtenversand implementiert; die Seite nutzt Telefon- und E-Mail-Links.

