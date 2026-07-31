# Sistema tipografico

L’intero sito usa lo stesso stack tipografico del progetto Fisioterapia
Malavasi: `ui-sans-serif`, `system-ui`, `-apple-system`,
`BlinkMacSystemFont`, `"Segoe UI"`, `Arial`, `"Helvetica Neue"`,
`sans-serif`. Su Chrome/macOS questo corrisponde al carattere di sistema Apple
San Francisco/SF Pro visibile negli screenshot. I font delle icone sono
infrastruttura grafica e non devono essere usati per contenuti testuali.

Lo stack e la scala generale sono definiti in `src/styles/typography.css`;
l’override visuale delle pagine interne è centralizzato in
`src/styles/internal-pages.css`.

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
  `--font-family-navigation`: tutti risolvono allo stack Malavasi.
- Usare i token `--type-size-*`, `--type-weight-*`, `--type-line-*`,
  `--type-tracking-*` e `--type-color-*`.
- Per nuovi blocchi riutilizzabili sono disponibili le classi
  `.type-display`, `.type-section-title`, `.type-body` e `.type-label`.
- Le variazioni responsive possono usare `clamp()`, mantenendo come limite
  massimo il token semantico corrispondente.
- Non introdurre altre famiglie di testo. `sans-serif` è ammesso soltanto come
  fallback tecnico.
- Non aggiungere link o `@import` verso servizi font esterni: lo stack Malavasi
  usa i caratteri di sistema.
