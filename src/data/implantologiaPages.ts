export interface ImplantologiaFaq {
  question: string;
  answer: string;
}

export interface ImplantologiaContentCard {
  title: string;
  text: string;
}

export interface ImplantologiaPage {
  slug: "impianto-singolo" | "denti-fissi" | "ponte-su-impianti" | "protesi-instabile";
  title: string;
  metaDescription: string;
  cardTitle: string;
  serviceInterest: string;
  heroTitleFirst: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroImage: string;
  problemIntro: string;
  problemCards: ImplantologiaContentCard[];
  causeIntro: string;
  causeCards: ImplantologiaContentCard[];
  faqs: ImplantologiaFaq[];
}

const sharedFaqs: ImplantologiaFaq[] = [
  {
    question: "La richiesta online conferma già l’appuntamento?",
    answer:
      "No. Nel modulo puoi indicare una preferenza: lo studio ti ricontatterà per verificare la disponibilità e confermare i prossimi passaggi.",
  },
  {
    question: "Se ho poco osso, posso comunque valutare gli impianti?",
    answer:
      "Sì, puoi richiedere una valutazione. Gli esami indicati permetteranno di capire la disponibilità ossea e se considerare procedure preparatorie oppure alternative non implantari.",
  },
  {
    question: "Quanto dura il percorso?",
    answer:
      "Dipende dalla situazione clinica, dagli eventuali trattamenti preliminari e dai tempi di guarigione. Dopo la visita lo studio può spiegarti una sequenza e una durata indicative.",
  },
  {
    question: "Posso scegliere una data e un orario dal modulo?",
    answer:
      "Puoi indicare una preferenza dal lunedì al venerdì. Non è una prenotazione automatica: lo studio la confermerà in base alla disponibilità.",
  },
  {
    question: "Cosa succede dopo aver inviato la richiesta?",
    answer:
      "La richiesta arriva allo studio, che ti ricontatterà ai recapiti indicati per confermare disponibilità, raccogliere eventuali informazioni utili e organizzare la visita.",
  },
];

export const implantologiaPages: ImplantologiaPage[] = [
  {
    slug: "impianto-singolo",
    title: "Impianto dentale singolo a Monza | Sorriso&Salute",
    metaDescription:
      "Valutazione implantologica per sostituire un singolo dente mancante a Monza. Prenota una consulenza presso lo studio Sorriso&Salute.",
    cardTitle: "Impianto singolo",
    serviceInterest: "Impianto singolo",
    heroTitleFirst: "Impianto dentale singolo",
    heroTitleAccent: "a Monza",
    heroIntro:
      "Se hai perso un dente o devi sostituirne uno compromesso, una visita permette di capire se l’impianto singolo può essere indicato per il tuo caso.",
    heroImage: "/assets/brand/implant-solutions/optimized/implant-single-1080.avif",
    problemIntro:
      "Un dente mancante può cambiare l’equilibrio del sorriso e il modo in cui mastichi. Il primo passo è capire la condizione dell’area e dei denti vicini.",
    problemCards: [
      {
        title: "Spazio lasciato dal dente mancante",
        text: "Valutiamo da quanto tempo manca il dente e come si è modificato lo spazio disponibile.",
      },
      {
        title: "Dente compromesso da valutare",
        text: "Prima di parlare di impianto verifichiamo se il dente può essere conservato e quali alternative esistono.",
      },
      {
        title: "Masticazione da riequilibrare",
        text: "Controlliamo contatti, funzione e rapporto con i denti dell’arcata opposta.",
      },
    ],
    causeIntro:
      "Perdita, frattura o compromissione di un dente hanno cause e condizioni diverse. Capirle aiuta a scegliere un percorso coerente con il singolo caso.",
    causeCards: [
      {
        title: "Dente perso o non recuperabile",
        text: "Trauma, carie profonda o problemi dei tessuti di sostegno possono richiedere una valutazione dedicata.",
      },
      {
        title: "Osso e gengiva da verificare",
        text: "La fattibilità dipende anche dalla qualità dei tessuti e dagli esami ritenuti necessari dal professionista.",
      },
      {
        title: "Alternative da confrontare",
        text: "Impianto, ponte o altre opzioni vengono spiegati con benefici, limiti e tempi indicativi.",
      },
    ],
    faqs: [
      {
        question: "Posso sapere subito se posso mettere un impianto singolo?",
        answer:
          "L’indicazione può essere data solo dopo una valutazione clinica e, quando necessari, esami diagnostici. La visita serve proprio a chiarire fattibilità e alternative.",
      },
      {
        question: "L’impianto singolo coinvolge i denti vicini?",
        answer:
          "In genere sostiene la propria corona senza preparare i denti adiacenti, ma la scelta va confermata dopo aver valutato l’intera area.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "denti-fissi",
    title: "Denti fissi su impianti a Monza | Sorriso&Salute",
    metaDescription:
      "Soluzioni implantologiche per denti fissi su impianti a Monza, previa valutazione clinica. Prenota una consulenza presso Sorriso&Salute.",
    cardTitle: "Denti fissi",
    serviceInterest: "Denti fissi",
    heroTitleFirst: "Denti fissi su impianti",
    heroTitleAccent: "a Monza",
    heroIntro:
      "Se più denti mancanti o una protesi mobile limitano comfort e sicurezza, possiamo valutare insieme le soluzioni implantologiche disponibili.",
    heroImage: "/assets/brand/implant-solutions/optimized/full-arch-1080.avif",
    problemIntro:
      "Quando mancano più denti o una protesi mobile non è stabile, anche gesti quotidiani come mangiare e parlare possono diventare meno spontanei.",
    problemCards: [
      {
        title: "Più denti mancanti",
        text: "Valutiamo l’estensione della mancanza e la condizione dei denti ancora presenti.",
      },
      {
        title: "Protesi mobile poco stabile",
        text: "Controlliamo adattamento, tessuti e reali possibilità di migliorare la stabilità.",
      },
      {
        title: "Difficoltà a masticare con serenità",
        text: "Analizziamo funzione e appoggi per trasformare il disagio in un quadro più chiaro.",
      },
    ],
    causeIntro:
      "Una protesi può perdere adattamento e i denti residui possono cambiare nel tempo. La visita distingue ciò che si può correggere da ciò che richiede un nuovo progetto.",
    causeCards: [
      {
        title: "Perdita di più elementi",
        text: "Numero, posizione e distribuzione dei denti mancanti influenzano le opzioni percorribili.",
      },
      {
        title: "Cambiamenti dei tessuti",
        text: "Osso e gengive possono modificarsi e rendere una protesi mobile meno stabile rispetto al passato.",
      },
      {
        title: "Progetto protesico da definire",
        text: "Il numero di impianti e il tipo di protesi dipendono dalla diagnosi, non da una formula uguale per tutti.",
      },
    ],
    faqs: [
      {
        question: "Posso sapere subito se posso avere denti fissi su impianti?",
        answer:
          "Serve una valutazione clinica e protesica, con gli eventuali esami indicati. Solo allora è possibile discutere una soluzione fissa, una soluzione mobile stabilizzata o altre alternative.",
      },
      {
        question: "Quanti impianti servono?",
        answer:
          "Il numero dipende da anatomia, estensione della riabilitazione e progetto protesico. Non può essere stabilito correttamente senza diagnosi.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "ponte-su-impianti",
    title: "Ponte su impianti a Monza | Sorriso&Salute",
    metaDescription:
      "Valutazione per ponte fisso su impianti dentali a Monza. Scopri il percorso implantologico più adatto al tuo caso.",
    cardTitle: "Ponte su impianti",
    serviceInterest: "Ponte su impianti",
    heroTitleFirst: "Ponte su impianti dentali",
    heroTitleAccent: "a Monza",
    heroIntro:
      "Quando mancano più denti vicini, il ponte su impianti può essere una strada da valutare per recuperare stabilità e funzione.",
    heroImage: "/assets/brand/implant-solutions/optimized/multiple-teeth-1080.avif",
    problemIntro:
      "Più denti vicini mancanti possono lasciare uno spazio importante e modificare gli appoggi della masticazione. Una diagnosi chiarisce cosa è possibile ricostruire.",
    problemCards: [
      {
        title: "Più denti vicini mancanti",
        text: "Misuriamo lo spazio e valutiamo la condizione dei tessuti nell’intera zona.",
      },
      {
        title: "Soluzione fissa da valutare",
        text: "Confrontiamo il ponte su impianti con le alternative compatibili con il caso.",
      },
      {
        title: "Stabilità degli appoggi da verificare",
        text: "Il progetto parte da distribuzione dei carichi, occlusione e futura protesi.",
      },
    ],
    causeIntro:
      "Estrazioni, problemi parodontali o vecchi lavori protesici possono lasciare spazi diversi tra loro. Anche per questo il progetto va costruito sull’area reale.",
    causeCards: [
      {
        title: "Spazio protesico variabile",
        text: "L’ampiezza della zona e la posizione dei denti residui condizionano il disegno del ponte.",
      },
      {
        title: "Distribuzione dell’osso",
        text: "Gli esami eventualmente indicati aiutano a capire dove gli impianti possono essere presi in considerazione.",
      },
      {
        title: "Funzione da progettare",
        text: "Numero e posizione degli impianti vengono valutati in relazione alla protesi finale e alla masticazione.",
      },
    ],
    faqs: [
      {
        question: "Posso sapere subito se il ponte su impianti è indicato?",
        answer:
          "La visita permette di valutare area, tessuti, denti residui e spazio protesico. Gli eventuali esami completano il quadro prima di definire l’indicazione.",
      },
      {
        question: "Serve un impianto per ogni dente mancante?",
        answer:
          "Non necessariamente. In alcuni progetti più impianti possono sostenere un ponte; numero e posizione dipendono dalla diagnosi e dal carico previsto.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "protesi-instabile",
    title: "Protesi dentale instabile a Monza | Sorriso&Salute",
    metaDescription:
      "La protesi mobile si muove o crea disagio? Prenota una valutazione implantologica a Monza per capire le soluzioni disponibili.",
    cardTitle: "Protesi instabile",
    serviceInterest: "Protesi instabile",
    heroTitleFirst: "Protesi dentale instabile?",
    heroTitleAccent: "Valutazione implantologica a Monza",
    heroIntro:
      "Se la protesi mobile si muove mentre mangi o parli, il primo passo è capire cosa la rende instabile e quali opzioni possono aiutarti.",
    heroImage: "/assets/brand/implant-solutions/optimized/implant-prosthesis-1080.avif",
    problemIntro:
      "Non lasciare che una protesi instabile condizioni ogni pasto. Capire perché si muove permette di valutare correzioni, sostituzione o stabilizzazione, se indicate.",
    problemCards: [
      {
        title: "Protesi che si muove",
        text: "Controlliamo appoggio, ritenzione e cambiamenti avvenuti nel tempo.",
      },
      {
        title: "Fastidio nel mangiare o parlare",
        text: "Ascoltiamo quando compare il disagio e verifichiamo i punti che lo provocano.",
      },
      {
        title: "Stabilità da migliorare, se possibile",
        text: "Valutiamo le opzioni compatibili con tessuti, anatomia e aspettative individuali.",
      },
    ],
    causeIntro:
      "Una protesi può muoversi perché i tessuti cambiano, i componenti si usurano o l’appoggio non è più adeguato. Non significa automaticamente che servano impianti.",
    causeCards: [
      {
        title: "Adattamento cambiato nel tempo",
        text: "Osso e mucose possono modificarsi e ridurre la precisione dell’appoggio della protesi.",
      },
      {
        title: "Usura o ritenzione ridotta",
        text: "La protesi e i suoi componenti possono richiedere manutenzione, correzione o sostituzione.",
      },
      {
        title: "Più opzioni possibili",
        text: "Ribasatura, nuova protesi, stabilizzazione o soluzione fissa vengono considerate solo quando appropriate.",
      },
    ],
    faqs: [
      {
        question: "Una protesi mobile può essere stabilizzata?",
        answer:
          "In alcuni casi sì, con adattamenti della protesi o con ancoraggi implantari. La scelta dipende da anatomia, tessuti, protesi esistente e obiettivi del paziente.",
      },
      {
        question: "La protesi che si muove va sempre sostituita?",
        answer:
          "No. A volte può essere corretta o ribasata; in altri casi si valuta una nuova protesi o un percorso implantologico, se indicato.",
      },
      ...sharedFaqs,
    ],
  },
];

export const implantologiaPageBySlug = new Map(
  implantologiaPages.map((page) => [page.slug, page]),
);
