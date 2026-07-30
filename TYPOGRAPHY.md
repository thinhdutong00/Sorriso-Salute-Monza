# Sistema tipografico

Il sito usa una sola famiglia per tutti i testi: **Inter**. I file variabili
completi normale e corsivo sono pubblicati direttamente da
`public/assets/fonts` e registrati con il nome esatto `Inter`, così il rendering
non dipende da Google Fonts, dal bundler, da font installati sul dispositivo o
da fallback per i simboli presenti nelle pagine. I font delle icone sono
infrastruttura grafica e non devono essere usati per contenuti testuali.

La fonte di verità è `src/styles/typography.css`. Le nuove pagine e le modifiche
alle pagine esistenti devono riutilizzare i token definiti lì, evitando nuove
famiglie o valori tipografici isolati.

## Scala di riferimento

| Ruolo | Dimensione | Peso | Interlinea | Spaziatura | Colore |
| --- | ---: | ---: | ---: | ---: | --- |
| Display / H1 | fino a 60 px | 400–700 | 1 | 0 | `#0E384C` |
| Titolo sezione / H2 | fino a 40 px | 700 | 1.2 | 0 | `#0E384C` |
| Titolo card / H3 | 20–24 px | 600–700 | 1.2 | 0 | `#0E384C` |
| Testo introduttivo | 20 px | 400 | 1.5 | 0 | `#334155` |
| Testo e descrizioni | 16 px | 400 | 1.5; 1.8 per testi lunghi | 0 | `#334155` |
| Navigazione e pulsanti | 16 px | 500–700 | 1 | 0 | dipende dal contesto |
| Testo secondario | 14 px | 400–600 | 1.5 | 0 | `#475569` |
| Etichette / kicker | 12 px | 700–800 | 1.2 | `0.12em` | `#475569` |

Su fondi scuri il colore testuale di riferimento è `#FFFFFF`.

## Regole d’uso

- Usare `--font-family-body`, `--font-family-display` o
  `--font-family-navigation`; tutti risolvono a Inter.
- Usare i token `--type-size-*`, `--type-weight-*`, `--type-line-*`,
  `--type-tracking-*` e `--type-color-*`.
- Per nuovi blocchi riutilizzabili sono disponibili le classi
  `.type-display`, `.type-section-title`, `.type-body` e `.type-label`.
- Le variazioni responsive possono usare `clamp()`, mantenendo come limite
  massimo il token semantico corrispondente.
- Non introdurre altre famiglie di testo. `sans-serif` è ammesso soltanto come
  fallback tecnico di Inter.
- Non aggiungere link o `@import` verso servizi font esterni: Inter deve restare
  self-hosted e verificabile tramite `document.fonts`.
