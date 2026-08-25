export type EsteticaSorrisoPageSlug =
  | "denti-piu-bianchi"
  | "denti-scheggiati-o-consumati"
  | "spazi-tra-i-denti"
  | "faccette-dentali";

export interface EsteticaSorrisoOrientationItem {
  title: string;
  text: string;
}

export interface EsteticaSorrisoTopic {
  id: string;
  /** ID del trattamento principale già definito in categoryTreatments. */
  treatmentId: string;
  /** Preset tecnici esistenti affrontati nella stessa sezione, ma non mostrati come topic autonomi. */
  relatedTreatmentIds?: readonly string[];
  kicker: string;
  title: string;
  intro: string;
  paragraphs: readonly string[];
  points?: readonly string[];
  note?: string;
}

export interface EsteticaSorrisoProcessStep {
  title: string;
  text: string;
}

export interface EsteticaSorrisoPage {
  slug: EsteticaSorrisoPageSlug;
  navLabel: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroAccent: string;
  heroIntro: string;
  clinicalNote: string;
  orientation: {
    kicker: string;
    title: string;
    intro: string;
    items: readonly EsteticaSorrisoOrientationItem[];
  };
  topics: readonly EsteticaSorrisoTopic[];
  process: {
    kicker: string;
    title: string;
    intro: string;
    steps: readonly EsteticaSorrisoProcessStep[];
  };
  reviewIds: readonly string[];
  finalCta: {
    title: string;
    text: string;
    href: string;
    label: string;
  };
}

export interface EsteticaSorrisoNavigationLink {
  href: string;
  label: string;
}

export const ESTETICA_SORRISO_BASE_PATH = "/attivita/estetica-del-sorriso/";
export const ESTETICA_SORRISO_REQUEST_HREF = `${ESTETICA_SORRISO_BASE_PATH}#richiesta`;

const commonProcess: EsteticaSorrisoPage["process"] = {
  kicker: "Come risolviamo",
  title: "Un percorso chiaro, dalla valutazione alla soluzione",
  intro:
    "Non partiamo dal trattamento più noto: partiamo da ciò che vuoi migliorare e dai dati clinici necessari per farlo in modo corretto.",
  steps: [
    {
      title: "Valutiamo il sorriso",
      text: "Controlliamo denti, gengive, occlusione e restauri presenti. Quando serve, completiamo la visita con fotografie, scansione digitale o altri esami indicati.",
    },
    {
      title: "Confrontiamo le soluzioni",
      text: "Ti mostriamo le alternative realmente adatte al caso, spiegando differenze, limiti, manutenzione e livello di intervento richiesto.",
    },
    {
      title: "Definiamo il percorso",
      text: "Concordiamo priorità, fasi e controlli. Il trattamento inizia solo dopo aver verificato che il piano sia coerente con salute, funzione e risultato desiderato.",
    },
  ],
};

const commonFinalCta = {
  title: "Vuoi capire quale soluzione è adatta al tuo sorriso?",
  text: "Richiedi una valutazione: ascoltiamo ciò che vuoi migliorare, controlliamo la situazione clinica e ti indichiamo un percorso concreto.",
  href: ESTETICA_SORRISO_REQUEST_HREF,
  label: "Richiedi una valutazione",
} as const;

export const esteticaSorrisoPages: readonly EsteticaSorrisoPage[] = [
  {
    slug: "denti-piu-bianchi",
    navLabel: "Denti più bianchi",
    title: "Denti più bianchi a Monza | Sorriso & Salute",
    metaDescription:
      "Sbiancamento dentale a Monza: valutazione di macchie, discromie e denti devitalizzati per scegliere il trattamento più adatto al tuo sorriso.",
    eyebrow: "Estetica del sorriso · Denti più bianchi",
    h1: "Ritrova un sorriso più luminoso con denti più bianchi",
    heroAccent: "Un trattamento su misura per valorizzare il tuo colore naturale.",
    heroIntro:
      "Se i denti ti sembrano spenti, macchiati o più scuri, possiamo individuare il motivo e scegliere come intervenire. Lo sbiancamento professionale è una delle possibilità, ma non è la risposta automatica a ogni discromia.",
    clinicalNote:
      "Lo sbiancamento agisce sui denti naturali e il risultato varia in base al colore di partenza e alla causa della discromia. Corone, faccette e otturazioni non cambiano colore con il trattamento.",
    orientation: {
      kicker: "Perché i denti possono apparire più scuri",
      title: "Macchie, colore interno e restauri richiedono valutazioni diverse",
      intro:
        "Capire dove nasce l’alterazione del colore evita trattamenti inutili e permette di definire un risultato realistico.",
      items: [
        {
          title: "Pigmentazioni superficiali",
          text: "Caffè, tè, fumo e altri pigmenti possono depositarsi sulla superficie. In alcuni casi il primo passo utile è l’igiene professionale.",
        },
        {
          title: "Colore naturale o discromie interne",
          text: "Il colore può dipendere dalla struttura del dente, dall’età, da farmaci o da alterazioni avvenute durante la formazione dentale.",
        },
        {
          title: "Un solo dente diventato scuro",
          text: "Un trauma o una precedente devitalizzazione possono modificare il colore di un singolo dente e richiedono un controllo mirato.",
        },
        {
          title: "Restauri già presenti",
          text: "Otturazioni, corone e faccette mantengono il loro colore. Vanno considerate prima di stabilire tonalità e sequenza del trattamento.",
        },
      ],
    },
    topics: [
      {
        id: "rendere-i-denti-piu-bianchi",
        treatmentId: "estetica-del-sorriso--sbiancamento-dentale-professionale",
        relatedTreatmentIds: [
          "estetica-del-sorriso--sbiancamento-dentale-in-studio",
          "estetica-del-sorriso--sbiancamento-domiciliare-con-mascherine",
        ],
        kicker: "Sbiancamento professionale",
        title: "Rendere i denti più bianchi",
        intro:
          "Quando denti e gengive sono in condizioni adeguate, lo sbiancamento professionale può rendere più chiaro il colore dei denti naturali in modo controllato.",
        paragraphs: [
          "Prima del trattamento verifichiamo salute orale, sensibilità, restauri visibili e tipo di discromia. Questa valutazione permette di stabilire se lo sbiancamento è indicato e quale cambiamento di colore è ragionevole attendersi.",
          "Il percorso può essere svolto in studio, a casa con mascherine su misura oppure con una combinazione delle due modalità. Tempi, prodotto e controlli vengono definiti dall’odontoiatra, non lasciati al caso.",
        ],
        points: [
          "Controllo iniziale di denti e gengive",
          "Modalità in studio o domiciliare scelta sul caso",
          "Indicazioni precise per gestire sensibilità e mantenimento",
        ],
      },
      {
        id: "schiarire-denti-macchiati-o-scuriti",
        treatmentId: "estetica-del-sorriso--correzione-dei-denti-macchiati",
        kicker: "Macchie e discromie",
        title: "Schiarire denti macchiati o scuriti",
        intro:
          "Una macchia superficiale, una discromia interna e un vecchio restauro non si correggono nello stesso modo.",
        paragraphs: [
          "Osserviamo distribuzione, profondità e possibile origine dell’alterazione. Se la pigmentazione è esterna può essere sufficiente una seduta di igiene; se coinvolge il colore del dente possiamo valutare lo sbiancamento o una soluzione restaurativa mirata.",
          "L’obiettivo non è coprire subito il problema, ma scegliere l’intervento meno invasivo capace di ottenere un risultato armonico con gli altri denti.",
        ],
        note:
          "Macchie nuove, localizzate o associate ad altri sintomi devono essere controllate prima di qualsiasi trattamento estetico.",
      },
      {
        id: "schiarire-un-dente-diventato-piu-scuro",
        treatmentId:
          "estetica-del-sorriso--sbiancamento-interno-dei-denti-devitalizzati",
        kicker: "Un dente più scuro degli altri",
        title: "Schiarire un dente diventato più scuro",
        intro:
          "Quando un dente devitalizzato cambia colore, lo sbiancamento esterno può non essere sufficiente. Serve prima controllare il dente dall’interno.",
        paragraphs: [
          "Verifichiamo il precedente trattamento canalare, l’integrità del dente e l’assenza di condizioni che richiedano altre cure. Solo dopo questa verifica possiamo considerare lo sbiancamento interno.",
          "Il prodotto viene applicato all’interno del dente secondo un protocollo controllato e il colore viene rivalutato nel tempo. Se il trattamento non è indicato, discutiamo alternative restaurative coerenti con il caso.",
        ],
      },
    ],
    process: commonProcess,
    reviewIds: ["review-9103", "review-9102", "review-9100"],
    finalCta: commonFinalCta,
  },
  {
    slug: "denti-scheggiati-o-consumati",
    navLabel: "Denti scheggiati o consumati",
    title: "Denti scheggiati o consumati a Monza | Sorriso & Salute",
    metaDescription:
      "Ricostruzione estetica di denti scheggiati o consumati a Monza: valutiamo causa, morso e tessuto residuo per recuperare forma e funzione.",
    eyebrow: "Estetica del sorriso · Forma dei denti",
    h1: "Ripara i denti scheggiati o consumati e torna a sorridere con sicurezza",
    heroAccent: "Recuperiamo forma e funzione con una ricostruzione su misura.",
    heroIntro:
      "Una scheggiatura può dipendere da un trauma; un consumo diffuso può indicare attrito, serramento, erosione o un equilibrio del morso da controllare. Valutiamo la causa prima di scegliere come ricostruire.",
    clinicalNote:
      "La soluzione dipende da estensione del danno, tessuto dentale disponibile, occlusione e abitudini individuali. In alcuni casi può essere necessario stabilizzare prima la causa dell’usura.",
    orientation: {
      kicker: "Perché forma e lunghezza possono cambiare",
      title: "Un difetto visibile può avere una causa locale o coinvolgere tutto il morso",
      intro:
        "La forma del restauro conta, ma la sua stabilità dipende anche da ciò che succede quando chiudi e muovi la bocca.",
      items: [
        {
          title: "Trauma o morso su un oggetto duro",
          text: "Una piccola frattura può interessare solo lo smalto oppure estendersi più in profondità. La visita ne definisce entità e urgenza.",
        },
        {
          title: "Serramento e digrignamento",
          text: "Carichi ripetuti possono accorciare, appiattire o scheggiare più denti. Ricostruire senza gestire il sovraccarico espone il risultato a nuovi danni.",
        },
        {
          title: "Erosione e usura",
          text: "Acidi, sfregamento e contatti dentali possono agire insieme. Riconoscere il meccanismo aiuta a proteggere il tessuto residuo.",
        },
        {
          title: "Forma o proporzioni poco armoniche",
          text: "Denti integri ma molto diversi per larghezza, lunghezza o profilo possono essere valutati con un progetto estetico conservativo.",
        },
      ],
    },
    topics: [
      {
        id: "riparare-un-dente-scheggiato",
        treatmentId: "estetica-del-sorriso--correzione-dei-denti-scheggiati",
        kicker: "Danno localizzato",
        title: "Riparare un dente scheggiato",
        intro:
          "Una piccola scheggiatura può spesso essere ricostruita in modo conservativo, ma prima dobbiamo verificare profondità, vitalità e contatti del dente.",
        paragraphs: [
          "Quando le condizioni lo permettono, il composito adesivo consente di ricreare la porzione mancante e integrarla per colore e forma. Nei danni più estesi possono essere indicate soluzioni differenti.",
          "Controlliamo anche il morso per evitare che il nuovo margine riceva un carico eccessivo. Il risultato viene rifinito e lucidato per ottenere un profilo regolare e facile da mantenere.",
        ],
      },
      {
        id: "ricostruire-denti-consumati",
        treatmentId: "estetica-del-sorriso--correzione-dei-denti-consumati",
        kicker: "Usura diffusa",
        title: "Ricostruire denti consumati",
        intro:
          "Quando più denti hanno perso altezza o volume, non basta allungare ciò che si vede: serve un progetto che consideri insieme funzione ed estetica.",
        paragraphs: [
          "Analizziamo distribuzione dell’usura, occlusione, abitudini e possibili fattori erosivi. In base all’entità definiamo se monitorare, proteggere o ricostruire in modo graduale.",
          "Il piano può includere restauri adesivi, intarsi, faccette o altre soluzioni proporzionate al tessuto residuo. Quando indicato, una protezione notturna e controlli periodici aiutano a preservare il lavoro eseguito.",
        ],
        note:
          "Dolore, sensibilità o una frattura recente richiedono una valutazione clinica prima di concentrarsi sul risultato estetico.",
      },
      {
        id: "correggere-piccole-imperfezioni-della-forma",
        treatmentId: "estetica-del-sorriso--miglioramento-della-forma-dei-denti",
        relatedTreatmentIds: [
          "estetica-del-sorriso--miglioramento-delle-proporzioni-dentali",
        ],
        kicker: "Armonia delle proporzioni",
        title: "Correggere piccole imperfezioni della forma",
        intro:
          "Bordi irregolari, denti di dimensioni diverse o profili poco uniformi possono essere corretti con interventi mirati e proporzionati.",
        paragraphs: [
          "Valutiamo lunghezza, larghezza, simmetria, linea gengivale e rapporto con labbra e viso. La soluzione può prevedere rimodellamento, aggiunte in composito, faccette o una combinazione di trattamenti.",
          "Ti mostriamo quale cambiamento è compatibile con i denti e con il morso, evitando di sacrificare tessuto sano quando esiste un’alternativa più conservativa.",
        ],
      },
    ],
    process: commonProcess,
    reviewIds: ["review-9103", "review-9100", "review-9102"],
    finalCta: commonFinalCta,
  },
  {
    slug: "spazi-tra-i-denti",
    navLabel: "Spazi tra i denti",
    title: "Spazi tra i denti e diastema a Monza | Sorriso & Salute",
    metaDescription:
      "Chiusura degli spazi tra i denti a Monza: valutiamo proporzioni, posizione, gengive e morso per scegliere tra composito, faccette o ortodonzia.",
    eyebrow: "Estetica del sorriso · Spazi tra i denti",
    h1: "Chiudi gli spazi tra i denti e ritrova un sorriso più armonioso",
    heroAccent: "La soluzione giusta rispetta le proporzioni del tuo sorriso.",
    heroIntro:
      "Un diastema può dipendere dalla posizione dei denti, dalle loro proporzioni o dai tessuti circostanti. Prima di chiuderlo, valutiamo quale soluzione può integrarsi davvero nel tuo sorriso.",
    clinicalNote:
      "Composito, faccette e ortodonzia modificano lo spazio in modi diversi. La scelta dipende da dimensione del diastema, salute orale, radici, gengive, occlusione e risultato desiderato.",
    orientation: {
      kicker: "Perché può esserci uno spazio",
      title: "La distanza tra i denti è solo una parte del quadro",
      intro:
        "Per chiudere uno spazio senza creare denti sproporzionati dobbiamo osservare insieme posizione, forma e stabilità.",
      items: [
        {
          title: "Proporzioni dei denti",
          text: "Denti stretti rispetto allo spazio disponibile possono lasciare distanze visibili anche quando sono correttamente allineati.",
        },
        {
          title: "Posizione e inclinazione",
          text: "Lo spazio può dipendere dal modo in cui i denti sono disposti nell’arcata e dal rapporto tra le radici.",
        },
        {
          title: "Gengive e frenulo",
          text: "La forma dei tessuti e l’inserzione del frenulo possono influire sull’aspetto del diastema e vanno incluse nella valutazione.",
        },
        {
          title: "Morso e stabilità",
          text: "Contatti, spinta della lingua e altri fattori funzionali possono favorire lo spostamento dei denti o la riapertura dello spazio.",
        },
      ],
    },
    topics: [
      {
        id: "chiudere-gli-spazi-tra-i-denti",
        treatmentId:
          "estetica-del-sorriso--chiusura-dei-piccoli-spazi-tra-i-denti",
        relatedTreatmentIds: [
          "estetica-del-sorriso--correzione-estetica-dei-diastemi",
        ],
        kicker: "Diastema e piccoli spazi",
        title: "Chiudere gli spazi tra i denti",
        intro:
          "La soluzione corretta chiude lo spazio mantenendo proporzioni naturali, contatti funzionali e tessuti gengivali facili da pulire.",
        paragraphs: [
          "Con il composito possiamo aggiungere materiale direttamente ai denti in casi selezionati. Le faccette possono essere considerate quando occorre modificare anche forma o colore. L’ortodonzia sposta i denti ed è spesso più adatta quando la posizione è il problema principale.",
          "Prima di proporti una strada confrontiamo simulazione estetica, livello di intervento, tempi e manutenzione. Se necessario, il piano può combinare più discipline per evitare un compromesso solo apparentemente rapido.",
        ],
        points: [
          "Composito per aggiunte adesive mirate",
          "Faccette quando vanno corrette anche forma e proporzioni",
          "Ortodonzia quando serve riposizionare i denti",
        ],
        note:
          "La chiusura di uno spazio non impedisce sempre che si riapra: stabilità e mantenimento vengono valutati nel piano.",
      },
    ],
    process: commonProcess,
    reviewIds: ["review-9100", "review-9102", "review-9103"],
    finalCta: commonFinalCta,
  },
  {
    slug: "faccette-dentali",
    navLabel: "Faccette dentali",
    title: "Faccette dentali in ceramica e composito a Monza | Sorriso & Salute",
    metaDescription:
      "Faccette dentali a Monza: confronto tra ceramica e composito, valutazione di smalto, morso e proporzioni per un risultato naturale e pianificato.",
    eyebrow: "Estetica del sorriso · Faccette dentali",
    h1: "Trasforma il tuo sorriso con faccette progettate su di te",
    heroAccent: "Più armonia nella forma, nel colore e nelle proporzioni.",
    heroIntro:
      "Ceramica e composito permettono di modificare l’aspetto dei denti in modi diversi. Valutiamo salute, smalto, occlusione e obiettivi prima di indicare se una faccetta è davvero il trattamento adatto.",
    clinicalNote:
      "Ogni preparazione è individuale e può variare da minima a più estesa. In presenza di carie, problemi gengivali, usura attiva o malocclusione può essere necessario curare o stabilizzare prima queste condizioni.",
    orientation: {
      kicker: "Prima di scegliere le faccette",
      title: "Il progetto deve funzionare oltre che apparire naturale",
      intro:
        "Una faccetta ben indicata nasce dall’equilibrio tra desiderio estetico, tessuto disponibile e carichi del morso.",
      items: [
        {
          title: "Salute di denti e gengive",
          text: "Carie, infiammazione e restauri non adeguati vanno identificati e gestiti prima del trattamento estetico.",
        },
        {
          title: "Smalto disponibile",
          text: "Quantità e qualità dello smalto influenzano adesione, preparazione e scelta del materiale.",
        },
        {
          title: "Morso e abitudini",
          text: "Serramento, digrignamento e contatti sfavorevoli possono aumentare il rischio di scheggiature o distacchi.",
        },
        {
          title: "Obiettivo e manutenzione",
          text: "Colore, forma e proporzioni vengono pianificati insieme a controlli, igiene e possibili interventi futuri.",
        },
      ],
    },
    topics: [
      {
        id: "faccette-in-ceramica",
        treatmentId: "estetica-del-sorriso--faccette-dentali-in-ceramica",
        kicker: "Progetto indiretto",
        title: "Faccette in ceramica",
        intro:
          "Le faccette in ceramica sono sottili restauri realizzati su misura per modificare forma, colore e proporzioni dei denti selezionati.",
        paragraphs: [
          "Il progetto parte da fotografie, analisi del sorriso e valutazione del morso. Quando utile, una simulazione permette di discutere in anticipo volumi e risultato atteso.",
          "La ceramica offre stabilità cromatica e caratteristiche ottiche vicine al dente naturale, ma richiede indicazione corretta, adesione accurata e controlli nel tempo. L’entità della preparazione dipende dalla situazione di partenza.",
        ],
        points: [
          "Colore e forma progettati su misura",
          "Valutazione preventiva di spessori e occlusione",
          "Controlli e igiene regolari per proteggere il risultato",
        ],
      },
      {
        id: "faccette-in-composito",
        treatmentId: "estetica-del-sorriso--faccette-dentali-in-composito",
        kicker: "Modellazione adesiva",
        title: "Faccette in composito",
        intro:
          "Il composito viene applicato e modellato direttamente sul dente per correggere piccoli difetti di forma, proporzione o colore in casi selezionati.",
        paragraphs: [
          "La tecnica può richiedere una preparazione contenuta e consente riparazioni e modifiche più semplici rispetto a un restauro indiretto. Indicazione e spessori devono comunque essere pianificati per evitare volumi eccessivi.",
          "Rispetto alla ceramica, il composito può richiedere lucidature e manutenzione più frequenti e può modificarsi cromaticamente nel tempo. Ti spieghiamo queste differenze prima di scegliere il materiale.",
        ],
      },
    ],
    process: commonProcess,
    reviewIds: ["review-9103", "review-9100", "review-9102"],
    finalCta: commonFinalCta,
  },
];

export const esteticaSorrisoPageBySlug = Object.fromEntries(
  esteticaSorrisoPages.map((page) => [page.slug, page]),
) as Readonly<Record<EsteticaSorrisoPageSlug, EsteticaSorrisoPage>>;

export const esteticaSorrisoNavigationLinks: readonly EsteticaSorrisoNavigationLink[] =
  esteticaSorrisoPages.map(({ slug, navLabel }) => ({
    href: `${ESTETICA_SORRISO_BASE_PATH}${slug}/`,
    label: navLabel,
  }));
