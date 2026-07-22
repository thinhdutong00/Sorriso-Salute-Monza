export type EditorialTone = "plain" | "paper" | "dark";

export interface EditorialCard {
  title: string;
  text: string;
}

export interface EditorialSection {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: EditorialCard[];
  tone?: EditorialTone;
}

export interface EditorialStep {
  number: string;
  title: string;
  text: string;
}

export interface EditorialLink {
  href: string;
  label: string;
  text: string;
}

export interface EditorialFaq {
  question: string;
  answer: string;
}

export type ImplantologiaEditorialSlug =
  | "carico-immediato"
  | "poco-osso"
  | "percorso"
  | "manutenzione-impianti";

export interface ImplantologiaEditorialPage {
  slug: ImplantologiaEditorialSlug;
  title: string;
  metaDescription: string;
  serviceInterest: string;
  h1: string;
  heroIntro: string;
  heroImage: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  heroSourceType: "image/avif" | "image/jpeg";
  heroSrcSet: string;
  recognitionTitle: string;
  recognitionIntro: string;
  recognitionItems: string[];
  sections: EditorialSection[];
  timeline?: {
    kicker: string;
    title: string;
    intro: string;
    steps: EditorialStep[];
  };
  costFactors: string[];
  relatedLinks: EditorialLink[];
  faqs: EditorialFaq[];
}

export const implantologiaEditorialPages: ImplantologiaEditorialPage[] = [
  {
    slug: "carico-immediato",
    title: "Carico immediato su impianti | Sorriso & Salute Monza",
    metaDescription:
      "Carico immediato su impianti a Monza: quando può essere valutata una protesi provvisoria e quali verifiche servono prima del trattamento.",
    serviceInterest: "Valutazione implantologica per carico immediato",
    h1: "Carico immediato: denti provvisori sugli impianti quando le condizioni lo permettono",
    heroIntro:
      "Il carico immediato può ridurre il periodo trascorso senza denti visibili, ma non è una soluzione automatica. La possibilità di collegare una protesi provvisoria agli impianti dipende dalla stabilità ottenuta, dall'osso disponibile e dal quadro clinico complessivo.",
    heroImage: "/assets/brand/implant-solutions/implant-single.png",
    heroAlt: "Illustrazione esplicativa di un impianto dentale",
    heroWidth: 1448,
    heroHeight: 1086,
    heroSourceType: "image/avif",
    heroSrcSet:
      "/assets/brand/implant-solutions/optimized/implant-single-480.avif 480w, /assets/brand/implant-solutions/optimized/implant-single-720.avif 720w, /assets/brand/implant-solutions/optimized/implant-single-1080.avif 1080w",
    recognitionTitle: "Stai cercando di capire se potrai avere subito dei denti provvisori?",
    recognitionIntro:
      "È una domanda frequente, soprattutto quando mancano denti in una zona visibile o quando una protesi mobile crea disagio. Una valutazione serve a distinguere il desiderio iniziale da ciò che è clinicamente indicato.",
    recognitionItems: [
      "Temi di rimanere senza denti durante la guarigione.",
      "Hai uno o più denti non recuperabili e vuoi conoscere le opzioni provvisorie.",
      "Porti una protesi mobile e vorresti capire se esiste un percorso implantare.",
      "Hai letto di denti fissi in tempi brevi, ma vuoi sapere quali sono condizioni e limiti.",
    ],
    sections: [
      {
        id: "che-cosa-significa",
        kicker: "Partire dalle parole",
        title: "Che cosa significa davvero carico immediato",
        paragraphs: [
          "Il carico è il collegamento di una protesi all'impianto. Nel carico immediato questo passaggio avviene in una fase molto vicina all'inserimento implantare, secondo tempi stabiliti dal piano clinico.",
          "Nella maggior parte dei percorsi iniziali la protesi è provvisoria: aiuta estetica e funzione mentre i tessuti guariscono, ma non coincide necessariamente con la protesi definitiva.",
        ],
        tone: "paper",
      },
      {
        id: "differenze",
        kicker: "Termini da non confondere",
        title: "Impianto immediato, carico immediato e protesi definitiva sono fasi diverse",
        intro:
          "Parole simili descrivono decisioni cliniche differenti. Chiarirle evita aspettative non realistiche.",
        cards: [
          {
            title: "Impianto post-estrattivo immediato",
            text: "L'impianto viene inserito nella stessa seduta dell'estrazione, solo se il sito e le condizioni locali lo consentono.",
          },
          {
            title: "Carico immediato",
            text: "Una protesi provvisoria viene collegata agli impianti nella fase iniziale, se stabilità e progetto protesico sono adeguati.",
          },
          {
            title: "Protesi provvisoria",
            text: "È progettata per accompagnare la guarigione e può richiedere adattamenti e indicazioni specifiche nell'uso quotidiano.",
          },
          {
            title: "Protesi definitiva",
            text: "Viene definita dopo le verifiche cliniche previste, quando i tessuti e gli impianti permettono di completare il progetto.",
          },
        ],
      },
      {
        id: "criteri",
        kicker: "La decisione clinica",
        title: "Quando il carico immediato può essere preso in considerazione",
        intro:
          "Non basta la presenza di osso in termini generali. La decisione si prende dopo visita, esami eventualmente indicati e pianificazione della protesi.",
        bullets: [
          "Stabilità primaria adeguata degli impianti al momento dell'inserimento.",
          "Quantità, qualità e posizione dell'osso compatibili con il progetto.",
          "Tessuti orali in condizioni controllabili e assenza di problemi locali non gestiti.",
          "Distribuzione dei carichi e tipo di protesi compatibili con la fase di guarigione.",
          "Possibilità di seguire le indicazioni su igiene, alimentazione e controlli.",
          "Valutazione di abitudini, farmaci e condizioni generali che possono influire sulla guarigione.",
        ],
      },
      {
        id: "limiti",
        kicker: "Una scelta, non una scorciatoia",
        title: "Quando è più prudente attendere",
        paragraphs: [
          "Se la stabilità iniziale non è sufficiente, se serve gestire l'osso o i tessuti, oppure se i carichi non possono essere controllati, il professionista può proporre una guarigione senza carico immediato.",
          "Un percorso convenzionale non è un risultato di serie B: può essere la scelta più appropriata per proteggere la guarigione. Anche un piano pensato per il carico immediato può essere modificato durante la seduta se i riscontri clinici lo richiedono.",
        ],
        tone: "dark",
      },
      {
        id: "vantaggi-e-responsabilita",
        kicker: "Aspettative trasparenti",
        title: "Possibili vantaggi e responsabilità del periodo provvisorio",
        cards: [
          {
            title: "Continuità estetica",
            text: "Il provvisorio può limitare il periodo senza denti visibili, ma forma e funzione sono adattate alla guarigione.",
          },
          {
            title: "Funzione controllata",
            text: "La protesi consente una funzione definita dal piano, con indicazioni alimentari che vanno rispettate.",
          },
          {
            title: "Igiene accurata",
            text: "La pulizia attorno alla protesi e ai tessuti è parte del trattamento e viene personalizzata.",
          },
          {
            title: "Controlli e adattamenti",
            text: "Durante la guarigione possono essere necessari controlli, regolazioni o modifiche del provvisorio.",
          },
        ],
      },
      {
        id: "valutazione-personale",
        kicker: "Il passo utile",
        title: "Dalla domanda iniziale a un piano verificabile",
        paragraphs: [
          "La visita permette di valutare denti residui, gengive, osso, occlusione e soluzione protesica. Solo dopo questi passaggi è possibile dire se il carico immediato è ragionevole e quale alternativa prevedere se non lo fosse.",
          "Le informazioni presenti sono di carattere generale e non sostituiscono una valutazione odontoiatrica individuale.",
        ],
        tone: "paper",
      },
    ],
    timeline: {
      kicker: "Prima, durante e dopo",
      title: "Come può svolgersi un percorso con carico immediato",
      intro:
        "Le fasi e i tempi reali cambiano da persona a persona. Questa sequenza aiuta a capire le decisioni principali, non sostituisce il piano clinico.",
      steps: [
        {
          number: "01",
          title: "Visita e raccolta dei dati",
          text: "Si esaminano salute generale e orale, denti, tessuti, occlusione ed esami eventualmente necessari.",
        },
        {
          number: "02",
          title: "Pianificazione implantare e protesica",
          text: "Si definiscono posizione degli impianti, tipo di provvisorio e alternativa nel caso il carico non sia possibile.",
        },
        {
          number: "03",
          title: "Inserimento e verifica della stabilità",
          text: "La procedura viene eseguita con anestesia locale; la stabilità effettiva viene verificata durante l'inserimento e guida la decisione finale sul carico.",
        },
        {
          number: "04",
          title: "Consegna del provvisorio, se indicata",
          text: "La protesi viene adattata per la fase di guarigione e accompagnata da istruzioni personalizzate.",
        },
        {
          number: "05",
          title: "Guarigione, controlli e protesi definitiva",
          text: "Si controllano tessuti, impianti e provvisorio prima di completare la fase protesica definitiva.",
        },
      ],
    },
    costFactors: [
      "Numero e posizione degli impianti da valutare.",
      "Estensioni e caratteristiche della protesi provvisoria e di quella definitiva.",
      "Eventuali estrazioni o trattamenti preliminari clinicamente necessari.",
      "Condizioni dell'osso e dei tessuti ed eventuali procedure ossee indicate dal piano.",
      "Esami, controlli e adattamenti previsti dal piano individuale.",
    ],
    relatedLinks: [
      {
        href: "/implantologia/impianto-singolo/",
        label: "Impianto singolo",
        text: "Approfondisci il percorso quando manca un solo dente.",
      },
      {
        href: "/implantologia/denti-fissi/",
        label: "Denti fissi",
        text: "Scopri le valutazioni possibili quando mancano molti denti.",
      },
      {
        href: "/implantologia/protesi-instabile/",
        label: "Protesi instabile",
        text: "Valuta le opzioni quando la protesi mobile si muove o crea disagio.",
      },
      {
        href: "/implantologia/percorso/",
        label: "Percorso implantologico",
        text: "Segui le fasi dalla prima visita alla protesi definitiva.",
      },
      {
        href: "/implantologia/manutenzione-impianti/",
        label: "Manutenzione degli impianti",
        text: "Scopri come controlli e igiene proseguono dopo la consegna.",
      },
    ],
    faqs: [
      {
        question: "Che cosa vuol dire carico immediato?",
        answer:
          "Significa collegare agli impianti una protesi nella fase iniziale del trattamento, quando i criteri clinici lo consentono. In genere si tratta di una protesi provvisoria, progettata per accompagnare la guarigione.",
      },
      {
        question: "Il carico immediato è possibile per tutti?",
        answer:
          "No. Dipende soprattutto dalla stabilità degli impianti, dall'osso, dai tessuti, dal tipo di protesi e dalle condizioni generali. La conferma può arrivare solo dopo la valutazione e, in alcuni casi, dopo l'inserimento implantare.",
      },
      {
        question: "Carico immediato significa avere subito i denti definitivi?",
        answer:
          "Non necessariamente. Il carico immediato riguarda spesso una protesi provvisoria. La protesi definitiva viene pianificata dopo le verifiche previste durante la guarigione.",
      },
      {
        question: "Impianto immediato e carico immediato sono la stessa cosa?",
        answer:
          "No. L'impianto immediato descrive l'inserimento dell'impianto nella stessa seduta dell'estrazione; il carico immediato descrive il collegamento della protesi. Una possibilità non comporta automaticamente l'altra.",
      },
      {
        question: "Si può fare il carico immediato dopo un'estrazione?",
        answer:
          "Può essere valutato, ma dipende dalle condizioni del sito, dalla possibilità di ottenere stabilità e dal progetto protesico. Se i criteri non sono presenti, vengono considerate fasi differenti.",
      },
      {
        question: "Che cosa succede se durante la procedura il carico non è indicato?",
        answer:
          "Il piano dovrebbe prevedere un'alternativa. Il professionista può lasciare guarire gli impianti senza carico immediato e proporre una soluzione provvisoria compatibile con la situazione riscontrata.",
      },
      {
        question: "Con il provvisorio posso mangiare normalmente?",
        answer:
          "La funzione viene controllata per proteggere la guarigione. Le indicazioni su consistenza degli alimenti, masticazione e igiene sono personalizzate e vanno seguite per tutto il periodo indicato.",
      },
      {
        question: "Quanto dura un percorso di carico immediato?",
        answer:
          "Non esiste una durata valida per tutti. Guarigione, controlli e passaggio alla protesi definitiva dipendono dal caso clinico e vengono chiariti nel piano individuale.",
      },
      {
        question: "Rimarrò senza denti durante la guarigione?",
        answer:
          "Il piano dovrebbe chiarire prima del trattamento quale soluzione provvisoria può essere prevista. Il carico immediato può ridurre il periodo senza denti visibili in casi selezionati, ma non può essere confermato senza valutazione e verifica clinica.",
      },
      {
        question: "Il trattamento è doloroso?",
        answer:
          "L'inserimento viene eseguito con anestesia locale. Fastidi, gonfiore e recupero possono variare secondo procedura e persona; lo studio fornisce indicazioni individuali e va contattato in caso di sintomi inattesi.",
      },
      {
        question: "Serve sempre un innesto osseo?",
        answer:
          "No. La necessità di gestire l'osso dipende dal volume disponibile, dalla posizione degli impianti e dal progetto protesico. Se una procedura ossea è indicata, può anche modificare la possibilità di carico immediato.",
      },
      {
        question: "Come viene determinato il preventivo?",
        answer:
          "Dopo la diagnosi vengono considerati numero degli impianti, tipo di provvisorio e protesi definitiva, eventuali estrazioni o procedure ossee e complessità delle fasi previste.",
      },
    ],
  },
  {
    slug: "poco-osso",
    title: "Impianti dentali con poco osso | Sorriso & Salute Monza",
    metaDescription:
      "Hai poco osso? Scopri come viene valutata la situazione e quali possibilità possono essere considerate dopo una visita implantologica a Monza.",
    serviceInterest: "Valutazione implantologica in presenza di poco osso",
    h1: "Impianti dentali con poco osso: valutazione e possibili soluzioni",
    heroIntro:
      "Sentirsi dire di avere poco osso non basta, da solo, a stabilire se un impianto sia possibile o escluso. Servono una valutazione della zona, degli spazi anatomici e del progetto protesico per capire quali opzioni siano ragionevoli.",
    heroImage: "/assets/brand/implant-solutions/bone-regeneration.png",
    heroAlt: "Illustrazione esplicativa della valutazione dell'osso per un impianto dentale",
    heroWidth: 1448,
    heroHeight: 1086,
    heroSourceType: "image/jpeg",
    heroSrcSet:
      "/assets/brand/implantologia-editorial/optimized/bone-regeneration-480.jpg 480w, /assets/brand/implantologia-editorial/optimized/bone-regeneration-720.jpg 720w, /assets/brand/implantologia-editorial/optimized/bone-regeneration-1080.jpg 1080w",
    recognitionTitle: "Il dubbio sul poco osso può nascere in situazioni diverse",
    recognitionIntro:
      "L'osso può modificarsi dopo la perdita di un dente o essere limitato in una zona specifica. Prima di parlare di soluzioni è importante capire dove, quanto e perché manca.",
    recognitionItems: [
      "Hai perso uno o più denti da tempo e temi che l'osso si sia ridotto.",
      "Una valutazione precedente ha segnalato un volume osseo limitato.",
      "Porti una protesi mobile e vuoi sapere se gli impianti possono essere considerati.",
      "Vuoi capire che cosa significano rigenerazione ossea o rialzo del seno mascellare.",
    ],
    sections: [
      {
        id: "perche-serve-osso",
        kicker: "Il punto di partenza",
        title: "Perché quantità e qualità dell'osso contano",
        paragraphs: [
          "L'impianto deve essere posizionato in una sede compatibile con la futura protesi e con le strutture anatomiche vicine. Per questo non conta soltanto l'altezza dell'osso: vengono considerate anche larghezza, qualità, forma e posizione.",
          "La stessa definizione di poco osso può quindi descrivere problemi differenti. Una misura isolata non consente di scegliere il trattamento senza collegarla a salute orale, occlusione e obiettivo protesico.",
        ],
        tone: "paper",
      },
      {
        id: "valutazione",
        kicker: "Prima delle soluzioni",
        title: "Come viene studiata la situazione",
        intro:
          "La valutazione procede dal quadro generale al dettaglio della zona interessata.",
        bullets: [
          "Storia clinica, farmaci, abitudini e fattori che possono influire sulla guarigione.",
          "Esame di denti, gengive, spazi disponibili e modo in cui le arcate entrano in contatto.",
          "Esami radiografici eventualmente indicati per studiare volume osseo e strutture vicine.",
          "Definizione della protesi desiderata prima di stabilire posizione e numero degli impianti.",
          "Confronto tra benefici, limiti, alternative e necessità di eventuali fasi preliminari.",
        ],
      },
      {
        id: "possibilita",
        kicker: "Opzioni da personalizzare",
        title: "Quali strade possono essere prese in considerazione",
        intro:
          "Non esiste una tecnica adatta a ogni difetto. Le possibilità vengono valutate in relazione al risultato protesico e al profilo clinico individuale.",
        cards: [
          {
            title: "Impianto senza aumento osseo",
            text: "Può essere considerato quando l'osso presente è sufficiente nella posizione utile e rispetta i criteri di sicurezza del piano.",
          },
          {
            title: "Innesto o rigenerazione ossea",
            text: "Con innesto osseo si indica l'uso di materiale per favorire la ricostruzione del volume necessario; la procedura può essere eseguita prima dell'impianto oppure, quando indicato, nella stessa fase. Tecnica e materiale dipendono dal difetto.",
          },
          {
            title: "Rialzo del seno mascellare",
            text: "È una possibilità chirurgica riferita ai settori posteriori superiori quando lo spazio osseo sotto il seno mascellare è limitato; indicazione e modalità richiedono esami e valutazione specifici.",
          },
          {
            title: "Alternativa protesica",
            text: "Quando chirurgia, anatomia o preferenze rendono poco appropriato il percorso implantare, si possono discutere soluzioni protesiche differenti.",
          },
        ],
      },
      {
        id: "rigenerazione-ossea",
        kicker: "Capire la rigenerazione",
        title: "Rigenerare l'osso non è sempre necessario e non è sempre uguale",
        paragraphs: [
          "Rigenerazione ossea è un termine ampio. Può riguardare un difetto circoscritto oppure un volume più esteso e può richiedere una fase dedicata prima dell'impianto. Materiali, tecnica e sequenza dipendono dal difetto e dalla valutazione professionale.",
          "Come ogni procedura, presenta limiti e possibili complicanze. Per questo il consenso informato deve chiarire obiettivi, alternative, controlli e cosa accade se la risposta dei tessuti non è quella attesa.",
        ],
        tone: "dark",
      },
      {
        id: "rialzo-seno",
        kicker: "Una zona specifica",
        title: "Che cosa indica il rialzo del seno mascellare",
        paragraphs: [
          "Nei settori posteriori dell'arcata superiore il seno mascellare può lasciare un'altezza ossea ridotta per l'impianto previsto. Il rialzo del seno mira a creare le condizioni per aumentare l'osso in quella zona.",
          "Non è una risposta generica a ogni situazione di poco osso e non è automaticamente necessario. Anatomia, osso residuo, salute del seno e piano protesico guidano l'eventuale indicazione; la disponibilità della procedura va confermata nel percorso clinico.",
        ],
      },
      {
        id: "tempi-e-limiti",
        kicker: "Un percorso non standard",
        title: "Guarigione e tempi dipendono dalla procedura scelta",
        paragraphs: [
          "Una fase di gestione ossea può modificare la sequenza del trattamento. In alcuni casi impianto e procedura sull'osso possono essere valutati insieme; in altri è più prudente attendere la guarigione prima di procedere.",
          "Non è corretto promettere una durata universale. Estensione del difetto, tecnica indicata, risposta dei tessuti e controlli determinano il calendario individuale.",
        ],
        tone: "paper",
      },
      {
        id: "valutazione-personale",
        kicker: "Decisioni informate",
        title: "La diagnosi viene prima del nome della tecnica",
        paragraphs: [
          "Una visita può chiarire se l'osso è davvero insufficiente per il progetto considerato, quali alternative esistono e quale rapporto tra benefici e impegno presenta ciascuna opzione.",
          "Le informazioni presenti sono di carattere generale e non sostituiscono una valutazione odontoiatrica individuale.",
        ],
      },
    ],
    timeline: {
      kicker: "Dal dubbio al piano",
      title: "Le fasi possibili quando l'osso è limitato",
      intro:
        "La sequenza cambia in base alla diagnosi. Non tutte le persone attraversano ogni fase.",
      steps: [
        {
          number: "01",
          title: "Visita",
          text: "Si raccolgono informazioni cliniche e si esaminano denti, tessuti, spazi e funzione.",
        },
        {
          number: "02",
          title: "Esami indicati",
          text: "Quando necessari, servono a studiare osso e strutture anatomiche della zona.",
        },
        {
          number: "03",
          title: "Progetto protesico",
          text: "Si definisce ciò che la futura protesi deve sostituire prima di pianificare gli impianti.",
        },
        {
          number: "04",
          title: "Confronto delle opzioni",
          text: "Si discutono percorso senza aumento osseo, eventuale rigenerazione o alternative protesiche.",
        },
        {
          number: "05",
          title: "Fase chirurgica, se indicata",
          text: "Modalità e sequenza dipendono dal difetto e possono precedere o accompagnare l'impianto.",
        },
        {
          number: "06",
          title: "Guarigione e controlli",
          text: "I tessuti vengono monitorati prima delle fasi successive; igiene, alimentazione, eventuali terapie e segnali da riferire seguono sempre le istruzioni postoperatorie individuali.",
        },
      ],
    },
    costFactors: [
      "Tipo, posizione ed estensione del difetto osseo.",
      "Numero e sede degli impianti previsti dal progetto protesico.",
      "Eventuale procedura rigenerativa, materiali indicati e sua sequenza rispetto agli impianti.",
      "Esami e trattamenti preliminari necessari per rendere il quadro controllabile.",
      "Tipo di protesi, fasi provvisorie, controlli e tempi clinici individuali.",
    ],
    relatedLinks: [
      {
        href: "/implantologia/impianto-singolo/",
        label: "Impianto singolo",
        text: "Approfondisci la sostituzione di un singolo dente mancante.",
      },
      {
        href: "/implantologia/ponte-su-impianti/",
        label: "Ponte su impianti",
        text: "Scopri come può essere valutata una zona con più denti mancanti.",
      },
      {
        href: "/implantologia/denti-fissi/",
        label: "Denti fissi su impianti",
        text: "Approfondisci le valutazioni per una riabilitazione più estesa.",
      },
      {
        href: "/implantologia/percorso/",
        label: "Percorso implantologico",
        text: "Comprendi la sequenza tra diagnosi, eventuali fasi ossee, impianti e protesi.",
      },
      {
        href: "/protesi-dentale/",
        label: "Protesi dentale",
        text: "Confronta le possibilità protesiche in relazione al quadro individuale.",
      },
    ],
    faqs: [
      {
        question: "Si possono mettere impianti quando c'è poco osso?",
        answer:
          "In alcuni casi sì, ma poco osso non identifica una sola situazione. Posizione, volume, qualità, strutture vicine e progetto protesico devono essere valutati prima di indicare un impianto o una procedura preliminare.",
      },
      {
        question: "Come si capisce quanto osso è disponibile?",
        answer:
          "La visita valuta la situazione clinica; gli esami radiografici eventualmente indicati aiutano a studiare volume, forma e rapporti con le strutture anatomiche. Il dato viene poi collegato alla protesi da realizzare.",
      },
      {
        question: "La rigenerazione ossea è sempre necessaria?",
        answer:
          "No. È una delle possibilità quando l'osso non è compatibile con il progetto. In altri casi può essere indicato un piano senza aumento osseo oppure un'alternativa protesica.",
      },
      {
        question: "Che cos'è la rigenerazione ossea?",
        answer:
          "È un insieme di procedure finalizzate a ricostruire un volume osseo utile. Indicazione, materiali, tecnica e sequenza dipendono dal tipo di difetto e devono essere spiegati nel piano individuale.",
      },
      {
        question: "Che cos'è il rialzo del seno mascellare?",
        answer:
          "È una procedura che può essere valutata nei settori posteriori superiori quando l'osso sotto il seno mascellare è limitato. Non riguarda tutte le aree e richiede uno studio anatomico specifico.",
      },
      {
        question: "Impianto e rigenerazione possono essere eseguiti insieme?",
        answer:
          "A volte può essere valutato, in altre situazioni le fasi vengono separate. Dipende dal difetto, dalla stabilità ottenibile e dalla capacità di proteggere la guarigione.",
      },
      {
        question: "Quanto tempo serve se manca osso?",
        answer:
          "Non c'è una durata standard. Il calendario dipende dall'estensione del difetto, dalla procedura scelta, dalla risposta dei tessuti e dalle verifiche previste prima della protesi.",
      },
      {
        question: "L'età impedisce di fare un impianto?",
        answer:
          "L'età anagrafica, da sola, non decide l'indicazione. Contano salute generale e orale, farmaci, capacità di guarigione, autonomia nell'igiene e rapporto tra benefici e impegno del trattamento.",
      },
      {
        question: "Quali alternative esistono se la chirurgia non è indicata?",
        answer:
          "Si possono discutere soluzioni protesiche differenti in base ai denti presenti, alla zona da riabilitare e alle preferenze della persona. La visita serve anche a confrontare queste alternative.",
      },
      {
        question: "Rimarrò senza denti durante le eventuali fasi ossee?",
        answer:
          "La gestione provvisoria viene pianificata in base alla zona, ai denti presenti e alla necessità di proteggere la guarigione. La visita permette di spiegare quale soluzione può essere prevista nel caso individuale.",
      },
      {
        question: "Come viene scelta la soluzione quando c'è poco osso?",
        answer:
          "La scelta collega volume e posizione dell'osso, salute generale e orale, futura protesi, complessità e alternative. Non dipende dal solo nome di una tecnica né può essere definita correttamente online.",
      },
      {
        question: "Come viene determinato il costo?",
        answer:
          "Il preventivo dipende dagli esami e dalle fasi indicate, dall'estensione dell'eventuale difetto, dal numero degli impianti, dalla protesi prevista e dalla complessità clinica complessiva.",
      },
    ],
  },
  {
    slug: "percorso",
    title: "Percorso implantologico a Monza | Sorriso & Salute",
    metaDescription:
      "Dalla prima visita alla protesi definitiva: fasi, tempi variabili, provvisorio, controlli e dubbi del percorso implantologico a Monza.",
    serviceInterest: "Prima valutazione per un percorso implantologico",
    h1: "Il percorso implantologico: dalla prima visita alla protesi definitiva",
    heroIntro:
      "Un impianto non è una procedura isolata, ma una parte di un progetto che comprende diagnosi, chirurgia, protesi e controlli. Conoscere le fasi aiuta a fare domande più precise e ad affrontare il percorso con aspettative realistiche.",
    heroImage: "/assets/brand/sorriso-salute-sala-operativa.png",
    heroAlt: "Sala operativa dello Studio Dentistico Sorriso & Salute a Monza",
    heroWidth: 1254,
    heroHeight: 1254,
    heroSourceType: "image/jpeg",
    heroSrcSet:
      "/assets/brand/implantologia-editorial/optimized/sala-operativa-480.jpg 480w, /assets/brand/implantologia-editorial/optimized/sala-operativa-720.jpg 720w, /assets/brand/implantologia-editorial/optimized/sala-operativa-1080.jpg 1080w",
    recognitionTitle: "Vorresti sapere che cosa succede, in quale ordine e perché?",
    recognitionIntro:
      "Il percorso cambia con il numero di denti mancanti, la situazione dei tessuti e il tipo di protesi. Alcuni dubbi, però, sono comuni.",
    recognitionItems: [
      "Non sai quali esami servano prima di decidere.",
      "Vuoi capire la differenza tra impianto, moncone e protesi.",
      "Ti chiedi se sarà previsto un dente provvisorio durante la guarigione.",
      "Vuoi conoscere controlli, impegni e alternative prima di accettare il piano.",
    ],
    sections: [
      {
        id: "progetto-unico",
        kicker: "Una visione completa",
        title: "Chirurgia e protesi vengono pianificate insieme",
        paragraphs: [
          "La posizione dell'impianto deve rispondere alla futura protesi e rispettare osso, gengive, denti vicini e strutture anatomiche. Per questo il percorso parte dal risultato funzionale da ottenere, non dal solo inserimento di una vite.",
          "Il piano chiarisce che cosa è indicato, quali alternative esistono e quali riscontri potrebbero rendere necessario modificare la sequenza iniziale.",
        ],
        tone: "paper",
      },
      {
        id: "impianto-e-protesi",
        kicker: "I componenti",
        title: "Impianto, collegamento e protesi non sono la stessa cosa",
        cards: [
          {
            title: "Impianto",
            text: "È il componente inserito nell'osso per sostenere la riabilitazione quando il trattamento è indicato.",
          },
          {
            title: "Componente di collegamento",
            text: "Collega l'impianto alla parte protesica e viene scelto in funzione del progetto.",
          },
          {
            title: "Protesi",
            text: "È la parte che sostituisce il dente o i denti e può attraversare una fase provvisoria prima di quella definitiva.",
          },
          {
            title: "Tessuti e igiene",
            text: "Gengive e osso fanno parte del risultato e richiedono salute, accessibilità alla pulizia e controlli nel tempo.",
          },
        ],
      },
      {
        id: "prima-della-chirurgia",
        kicker: "Preparare il percorso",
        title: "Che cosa viene verificato prima dell'inserimento",
        intro:
          "La fase diagnostica serve a ridurre le incognite e a identificare ciò che va gestito prima.",
        bullets: [
          "Salute generale, farmaci, allergie, abitudini e precedenti odontoiatrici.",
          "Denti residui, gengive, igiene, occlusione e spazio per la futura protesi.",
          "Osso e strutture anatomiche attraverso gli esami ritenuti necessari.",
          "Eventuali problemi da stabilizzare prima della fase implantare.",
          "Igiene professionale o trattamento delle gengive, estrazioni ed eventuale rigenerazione ossea, solo quando risultano necessari nel caso individuale.",
          "Soluzione provvisoria, soluzione definitiva e possibilità alternative.",
          "Consenso informato, indicazioni preoperatorie e calendario dei controlli.",
        ],
      },
      {
        id: "durante-intervento",
        kicker: "Durante la procedura",
        title: "Che cosa può accadere nella fase implantare",
        intro:
          "La procedura viene definita dal piano individuale e può cambiare per numero di impianti, zona e trattamenti associati.",
        cards: [
          {
            title: "Anestesia locale",
            text: "L'area viene anestetizzata prima della procedura; gestione del comfort e indicazioni dipendono dalla situazione individuale.",
          },
          {
            title: "Inserimento e verifiche",
            text: "Gli impianti vengono posizionati secondo il progetto e il professionista verifica i riscontri clinici utili alle fasi successive.",
          },
          {
            title: "Suture, quando necessarie",
            text: "La necessità di punti e la loro gestione dipendono dalla procedura eseguita e vengono spiegate nelle istruzioni postoperatorie.",
          },
          {
            title: "Provvisorio e istruzioni",
            text: "Se previsto, viene gestito il provvisorio; prima di lasciare lo studio vengono chiariti igiene, alimentazione, controlli e contatti utili.",
          },
        ],
      },
      {
        id: "primi-giorni",
        kicker: "I primi giorni",
        title: "Dolore, alimentazione e ritorno alle attività dipendono dal caso",
        paragraphs: [
          "Durata della seduta, fastidi temporanei, tempi per mangiare e rientro al lavoro variano con estensione della procedura e risposta individuale. Le indicazioni ricevute hanno priorità sulle informazioni generali.",
          "Igiene, alimentazione, eventuali terapie prescritte e appuntamenti di controllo vanno seguiti come indicato. In presenza di sintomi inattesi, dolore che non segue l'andamento spiegato, sanguinamento o altri dubbi è opportuno contattare lo studio.",
        ],
        tone: "paper",
      },
      {
        id: "provvisorio",
        kicker: "Durante la guarigione",
        title: "Il provvisorio dipende dal caso e non coincide con il definitivo",
        paragraphs: [
          "La presenza di un dente o di una protesi provvisoria viene pianificata in base a zona, stabilità, estetica, funzione e capacità di proteggere gli impianti. Può essere collegata agli impianti oppure sostenuta in altro modo.",
          "Se è previsto un carico immediato, la conferma dipende anche dai riscontri clinici ottenuti durante l'inserimento. Il passaggio alla protesi definitiva avviene dopo le verifiche stabilite dal piano.",
        ],
        tone: "dark",
      },
      {
        id: "tempi",
        kicker: "Tempi individuali",
        title: "La guarigione non segue un calendario uguale per tutti",
        paragraphs: [
          "Numero e sede degli impianti, qualità dei tessuti, eventuali estrazioni o procedure preliminari e tipo di protesi modificano fasi e tempi.",
          "Una stima può essere fornita dopo la diagnosi, ma viene aggiornata in base alla risposta clinica. Affrettare una fase per rispettare una data astratta non è un obiettivo del trattamento.",
        ],
        tone: "paper",
      },
      {
        id: "fase-protesica",
        kicker: "Dalle prove al definitivo",
        title: "La fase protesica completa forma, funzione e pulibilità",
        intro:
          "Dopo le verifiche di guarigione, il progetto viene trasferito nella protesi più adatta al numero e alla posizione dei denti da sostituire.",
        cards: [
          {
            title: "Corona singola",
            text: "Sostituisce un singolo dente e viene provata e controllata rispetto a denti vicini, gengiva, estetica e igiene.",
          },
          {
            title: "Ponte su impianti",
            text: "Può sostituire più denti vicini; numero e posizione degli impianti e forma del ponte dipendono dal progetto complessivo.",
          },
          {
            title: "Arcata fissa o protesi mobile stabilizzata",
            text: "Quando mancano molti denti, il confronto può includere una riabilitazione fissa oppure una protesi rimovibile resa più stabile dagli impianti.",
          },
          {
            title: "Prove e regolazione della masticazione",
            text: "Forma, contatti, comfort, fonetica e accesso alla pulizia vengono verificati; dopo la consegna possono essere necessari adattamenti.",
          },
        ],
      },
      {
        id: "dopo-la-protesi",
        kicker: "Il percorso continua",
        title: "Consegna della protesi, controlli e manutenzione",
        paragraphs: [
          "Dopo la consegna vengono verificati comfort, contatti tra i denti, accesso all'igiene e condizioni dei tessuti. La protesi e i suoi componenti possono richiedere regolazioni o manutenzione nel tempo.",
          "Il programma dei controlli viene definito in base ai fattori individuali: il completamento della protesi non elimina la necessità di prevenzione professionale e cura quotidiana.",
        ],
      },
      {
        id: "valutazione-personale",
        kicker: "Un piano comprensibile",
        title: "Ogni fase dovrebbe rispondere a una domanda precisa",
        paragraphs: [
          "Prima di iniziare è utile sapere perché viene proposta una soluzione, quali alternative sono possibili, che cosa comprende il preventivo e quali impegni richiederà la manutenzione.",
          "Le informazioni presenti sono di carattere generale e non sostituiscono una valutazione odontoiatrica individuale.",
        ],
      },
    ],
    timeline: {
      kicker: "Le nove fasi",
      title: "Dal primo contatto ai controlli nel tempo",
      intro:
        "Questa sequenza descrive un percorso orientativo. Le fasi possono essere adattate, separate o non necessarie in base al caso.",
      steps: [
        {
          number: "01",
          title: "Primo contatto",
          text: "Racconti il problema principale e raccogli le indicazioni per organizzare la prima valutazione.",
        },
        {
          number: "02",
          title: "Visita e diagnosi",
          text: "Si raccolgono anamnesi e dati clinici e si esaminano denti, gengive, funzione e bisogni.",
        },
        {
          number: "03",
          title: "Piano di trattamento",
          text: "Gli esami eventualmente indicati completano la diagnosi; vengono confrontati opzioni, limiti e preventivo.",
        },
        {
          number: "04",
          title: "Preparazione, se necessaria",
          text: "Si gestiscono le condizioni orali o le procedure preliminari richieste prima degli impianti.",
        },
        {
          number: "05",
          title: "Inserimento implantare",
          text: "Gli impianti vengono posizionati secondo il progetto e si verificano i riscontri clinici previsti.",
        },
        {
          number: "06",
          title: "Guarigione",
          text: "Tessuti e impianti vengono controllati seguendo indicazioni personalizzate su igiene e funzione.",
        },
        {
          number: "07",
          title: "Provvisorio, se previsto",
          text: "La soluzione provvisoria accompagna estetica e funzione nelle modalità compatibili con la guarigione.",
        },
        {
          number: "08",
          title: "Protesi definitiva",
          text: "Dopo le verifiche necessarie si completa la riabilitazione e si controllano funzione e pulibilità.",
        },
        {
          number: "09",
          title: "Controlli e manutenzione",
          text: "Igiene quotidiana, sedute professionali e controlli vengono adattati al rischio individuale.",
        },
      ],
    },
    costFactors: [
      "Numero, posizione e caratteristiche degli impianti previsti.",
      "Tipo ed estensione della protesi provvisoria e definitiva.",
      "Esami e trattamenti preliminari indicati dalla diagnosi.",
      "Condizioni di osso, gengive, denti residui e occlusione.",
      "Numero di fasi cliniche, controlli e componenti compresi nel piano.",
    ],
    relatedLinks: [
      {
        href: "/implantologia/impianto-singolo/",
        label: "Impianto singolo",
        text: "Segui il percorso pensato per la mancanza di un solo dente.",
      },
      {
        href: "/implantologia/ponte-su-impianti/",
        label: "Ponte su impianti",
        text: "Approfondisci la riabilitazione di più denti vicini.",
      },
      {
        href: "/implantologia/denti-fissi/",
        label: "Denti fissi",
        text: "Scopri quali valutazioni servono quando mancano molti denti.",
      },
      {
        href: "/implantologia/protesi-instabile/",
        label: "Protesi mobile stabilizzata",
        text: "Valuta il percorso quando una protesi mobile si muove o crea disagio.",
      },
      {
        href: "/implantologia/carico-immediato/",
        label: "Carico immediato",
        text: "Capisci quando può essere considerata una protesi provvisoria precoce.",
      },
      {
        href: "/implantologia/poco-osso/",
        label: "Impianti con poco osso",
        text: "Approfondisci valutazione ossea e possibilità da discutere.",
      },
      {
        href: "/implantologia/manutenzione-impianti/",
        label: "Manutenzione degli impianti",
        text: "Scopri che cosa prosegue dopo la consegna della protesi.",
      },
      {
        href: "/protesi-dentale/",
        label: "Protesi dentale",
        text: "Comprendi il ruolo della protesi nel completamento del percorso.",
      },
    ],
    faqs: [
      {
        question: "Da dove si comincia?",
        answer:
          "Si parte dal primo contatto e da una visita. Vengono raccolte le informazioni sulla salute e sul problema, esaminati denti, gengive e funzione e valutata la necessità di esami. È anche il momento per chiarire obiettivi e alternative.",
      },
      {
        question: "Gli esami radiografici sono sempre gli stessi?",
        answer:
          "No. Il professionista indica gli esami utili in base alla zona, alle informazioni già disponibili e alla complessità del progetto, evitando di considerarli un passaggio identico per tutti.",
      },
      {
        question: "Qual è la differenza tra impianto e protesi?",
        answer:
          "L'impianto è il componente inserito nell'osso; la protesi è la parte che sostituisce il dente o i denti. Tra i due possono esserci componenti di collegamento specifici.",
      },
      {
        question: "Avrò un dente provvisorio durante la guarigione?",
        answer:
          "Dipende da zona, stabilità, estetica, funzione e tipo di riabilitazione. Il piano dovrebbe spiegare prima della procedura quale soluzione provvisoria è prevista e quali alternative esistono.",
      },
      {
        question: "Quanto dura il percorso implantologico?",
        answer:
          "Non esiste un tempo unico. Fasi preliminari, guarigione, numero di impianti e tipo di protesi incidono sul calendario, che viene stimato dopo la diagnosi e aggiornato durante i controlli.",
      },
      {
        question: "Quanti appuntamenti sono necessari?",
        answer:
          "Il numero dipende dal caso e dalle fasi previste. Visita, eventuali esami, procedura, controlli e passaggi protesici vengono descritti nel piano individuale.",
      },
      {
        question: "L'intervento implantare è sempre possibile?",
        answer:
          "No. Salute generale e orale, osso, tessuti, abitudini e possibilità di mantenere il risultato devono essere valutati. Quando il rapporto tra benefici e rischi non è favorevole si discutono alternative.",
      },
      {
        question: "Che cosa devo fare durante la guarigione?",
        answer:
          "Occorre seguire le indicazioni ricevute su igiene, alimentazione, farmaci prescritti e controlli e contattare lo studio se compaiono sintomi inattesi. Le istruzioni cambiano in base alla procedura.",
      },
      {
        question: "I controlli terminano con la protesi definitiva?",
        answer:
          "No. Impianti, tessuti, occlusione e componenti protesici devono essere monitorati nel tempo con una frequenza definita in base al rischio individuale.",
      },
      {
        question: "Impianto e dente vengono applicati insieme?",
        answer:
          "Non sempre. Inserimento dell'impianto, eventuale provvisorio e protesi definitiva sono decisioni distinte. La loro sequenza dipende da stabilità, tessuti, zona e progetto protesico.",
      },
      {
        question: "È sempre necessario aspettare prima della protesi?",
        answer:
          "La guarigione e il momento del carico vengono stabiliti per il singolo caso. In situazioni selezionate può essere valutato un provvisorio precoce; in altre attendere è la scelta più prudente.",
      },
      {
        question: "Rimarrò senza denti durante il percorso?",
        answer:
          "La gestione provvisoria viene discussa prima di iniziare e dipende dalla zona e dal trattamento. Non è possibile garantire online una soluzione specifica, ma il piano dovrebbe chiarire le alternative previste.",
      },
      {
        question: "Quando viene consegnata la protesi definitiva?",
        answer:
          "Dopo le verifiche di guarigione e le fasi protesiche previste. Il momento varia con stabilità, tessuti, tipo di riabilitazione ed eventuali trattamenti preparatori.",
      },
      {
        question: "Che cosa succede se ho poco osso?",
        answer:
          "La situazione viene studiata in relazione alla futura protesi. Possono essere discusse procedure ossee, strategie implantari compatibili o alternative protesiche, senza presumere che una soluzione sia adatta a tutti.",
      },
      {
        question: "Come viene determinato il costo?",
        answer:
          "Il preventivo considera diagnostica, numero degli impianti, tipo di protesi, eventuali estrazioni o procedure ossee, materiali e complessità delle fasi cliniche.",
      },
      {
        question: "Che cosa devo fare dopo il trattamento?",
        answer:
          "Seguire le indicazioni su igiene, alimentazione e controlli, proteggere l'eventuale provvisorio e riferire sintomi inattesi. Dopo la protesi definitiva continua un programma personalizzato di mantenimento.",
      },
    ],
  },
  {
    slug: "manutenzione-impianti",
    title: "Manutenzione impianti dentali | Sorriso & Salute Monza",
    metaDescription:
      "Igiene, controlli e manutenzione di impianti e protesi: cosa monitorare e quando contattare Sorriso & Salute a Monza.",
    serviceInterest: "Controllo e manutenzione di impianti e protesi",
    h1: "Manutenzione degli impianti dentali e delle protesi",
    heroIntro:
      "Il completamento della protesi non conclude la cura. Tessuti, impianti, componenti e superfici protesiche cambiano nel tempo e hanno bisogno di igiene, controlli e interventi calibrati sul rischio individuale.",
    heroImage: "/assets/brand/implant-solutions/implant-prosthesis.png",
    heroAlt: "Illustrazione di una protesi stabilizzata su impianti dentali",
    heroWidth: 1448,
    heroHeight: 1086,
    heroSourceType: "image/avif",
    heroSrcSet:
      "/assets/brand/implant-solutions/optimized/implant-prosthesis-480.avif 480w, /assets/brand/implant-solutions/optimized/implant-prosthesis-720.avif 720w, /assets/brand/implant-solutions/optimized/implant-prosthesis-1080.avif 1080w",
    recognitionTitle: "Hai un impianto o una protesi e vuoi proteggerli nel tempo?",
    recognitionIntro:
      "Non serve aspettare dolore o mobilità per chiedere un controllo. La manutenzione è più utile quando intercetta i cambiamenti prima che diventino evidenti.",
    recognitionItems: [
      "Non sai come pulire sotto una corona, un ponte o una protesi su impianti.",
      "È passato tempo dall'ultimo controllo e non hai un programma personalizzato.",
      "Noti sanguinamento, gonfiore, cattivo sapore o fastidio attorno a un impianto.",
      "La protesi sembra diversa, si muove, trattiene più cibo o modifica la masticazione.",
    ],
    sections: [
      {
        id: "perche-manutenzione",
        kicker: "Prevenzione continua",
        title: "Un impianto non si caria, ma i tessuti possono ammalarsi",
        paragraphs: [
          "La placca può accumularsi attorno agli impianti e favorire infiammazione dei tessuti. Sanguinamento o gonfiore non vanno considerati normali solo perché il dente è artificiale.",
          "Anche la protesi e i suoi componenti sono sottoposti a carichi e usura. Per questo il controllo comprende sia la parte biologica sia quella meccanica.",
        ],
        tone: "paper",
      },
      {
        id: "igiene-casa",
        kicker: "Ogni giorno",
        title: "L'igiene domiciliare deve raggiungere anche gli spazi meno visibili",
        intro:
          "Gli strumenti e la tecnica dipendono dalla forma della protesi, dalla manualità e dagli spazi disponibili. Durante il controllo è utile mostrare concretamente come pulisci.",
        bullets: [
          "Spazzolare con attenzione il margine tra protesi e gengiva senza trascurare le superfici interne.",
          "Pulire gli spazi accessibili sotto ponti o protesi con lo strumento indicato per la propria situazione.",
          "Seguire frequenza e modalità concordate, evitando manovre traumatiche improvvisate.",
          "Osservare sanguinamento, gonfiore, secrezioni, cambiamenti di colore o aumento della ritenzione di cibo.",
          "Portare ai controlli dubbi e difficoltà pratiche per adattare strumenti e tecnica.",
        ],
      },
      {
        id: "controllo-professionale",
        kicker: "Durante il controllo",
        title: "Che cosa può essere verificato",
        cards: [
          {
            title: "Tessuti",
            text: "Si osservano igiene, sanguinamento, gonfiore e altri segni che richiedono attenzione.",
          },
          {
            title: "Stabilità e funzione",
            text: "Si valutano comfort, masticazione e possibili cambiamenti nei contatti tra i denti.",
          },
          {
            title: "Protesi e componenti",
            text: "Si controllano integrità, usura, ritenzione e accessibilità delle superfici da pulire.",
          },
          {
            title: "Fattori di rischio",
            text: "Abitudini, salute generale e capacità di mantenere l'igiene orientano la frequenza dei richiami.",
          },
        ],
      },
      {
        id: "manutenzione-protesi",
        kicker: "La parte meccanica",
        title: "Protesi e componenti possono richiedere regolazioni o riparazioni",
        paragraphs: [
          "Una corona, un ponte o una protesi completa su impianti non sono invariabili. Usura dei materiali, cambiamenti dell'occlusione o sollecitazioni ripetute possono rendere opportuni controlli, regolazioni o sostituzioni di componenti.",
          "In un'arcata fissa si verificano stabilità, componenti, superfici e accesso alla pulizia. In una protesi mobile stabilizzata si controllano anche ritenzione e attacchi, che possono richiedere manutenzione o sostituzione secondo l'usura rilevata.",
          "Una sensazione di movimento non va ignorata e non deve essere corretta autonomamente. Una verifica tempestiva aiuta a distinguere un problema protesico da una condizione che coinvolge impianto o tessuti.",
        ],
        tone: "dark",
      },
      {
        id: "segnali",
        kicker: "Quando contattare lo studio",
        title: "Segnali da non rimandare al controllo successivo",
        intro:
          "Un sintomo non permette una diagnosi a distanza, ma alcuni cambiamenti meritano una valutazione.",
        bullets: [
          "Sanguinamento persistente, gonfiore o secrezione attorno all'impianto.",
          "Dolore nuovo, fastidio alla masticazione o sensibilità dei tessuti.",
          "Movimento percepito della corona, del ponte o della protesi.",
          "Fratture, scheggiature o cambiamenti improvvisi nel modo di chiudere i denti.",
          "Cattivo sapore o odore persistente localizzato nella zona implantare.",
          "Maggiore difficoltà a pulire o accumulo di cibo comparso recentemente.",
        ],
      },
      {
        id: "fattori-rischio",
        kicker: "Frequenza personalizzata",
        title: "I richiami dipendono dal rischio, non da una regola unica",
        paragraphs: [
          "Storia di problemi gengivali, igiene, fumo, condizioni generali, farmaci, numero e tipo di protesi e carichi masticatori possono modificare il programma di mantenimento.",
          "La frequenza viene quindi definita dal professionista e aggiornata se il quadro cambia. Saltare controlli perché non c'è dolore può lasciare evolvere alterazioni inizialmente poco evidenti.",
        ],
        tone: "paper",
      },
      {
        id: "durata",
        kicker: "Una domanda frequente",
        title: "Quanto dura un impianto? Non esiste una garanzia universale",
        paragraphs: [
          "La durata dipende da salute dei tessuti, qualità dell'igiene, carichi, abitudini, condizioni generali e regolarità dei controlli. Impianto e protesi sono componenti diversi e possono avere necessità di manutenzione differenti.",
          "L'obiettivo realistico è controllare i fattori modificabili e intervenire quando compaiono segnali clinici o meccanici, non promettere una durata identica per tutte le persone.",
        ],
      },
      {
        id: "valutazione-personale",
        kicker: "Un programma su misura",
        title: "Ripartire da una verifica anche se i controlli sono stati interrotti",
        paragraphs: [
          "Se non hai un programma di manutenzione o non ricordi l'ultimo controllo, una visita permette di registrare la situazione attuale e definire i passaggi successivi senza presupporre che ci sia un problema.",
          "Le informazioni presenti sono di carattere generale e non sostituiscono una valutazione odontoiatrica individuale.",
        ],
      },
    ],
    costFactors: [
      "Tipo, estensione e accessibilità della protesi su impianti.",
      "Condizioni dei tessuti e quantità di depositi da gestire.",
      "Numero di impianti e necessità di esami o verifiche specifiche.",
      "Eventuali regolazioni, riparazioni o componenti protesici da sostituire.",
      "Frequenza dei richiami definita dal profilo di rischio individuale.",
    ],
    relatedLinks: [
      {
        href: "/implantologia/percorso/",
        label: "Percorso implantologico",
        text: "Ripercorri le fasi dalla valutazione ai controlli nel tempo.",
      },
      {
        href: "/implantologia/impianto-singolo/",
        label: "Impianto singolo",
        text: "Approfondisci struttura e valutazioni per un singolo dente.",
      },
      {
        href: "/implantologia/ponte-su-impianti/",
        label: "Ponte su impianti",
        text: "Scopri le caratteristiche di una riabilitazione di più denti.",
      },
      {
        href: "/implantologia/denti-fissi/",
        label: "Denti fissi su impianti",
        text: "Approfondisci igiene e controlli nelle riabilitazioni più estese.",
      },
      {
        href: "/implantologia/protesi-instabile/",
        label: "Protesi instabile",
        text: "Capisci che cosa valutare quando una protesi crea movimento o disagio.",
      },
      {
        href: "/protesi-dentale/",
        label: "Protesi dentale",
        text: "Approfondisci controlli e manutenzione delle soluzioni protesiche.",
      },
    ],
    faqs: [
      {
        question: "Ogni quanto vanno controllati gli impianti?",
        answer:
          "La frequenza non è uguale per tutti. Viene definita in base a condizioni dei tessuti, igiene, tipo di protesi, abitudini, salute generale e storia clinica e può cambiare nel tempo.",
      },
      {
        question: "Gli impianti devono essere puliti?",
        answer:
          "Occorre pulire il margine gengivale e gli spazi attorno o sotto la protesi con tecnica e strumenti compatibili con la sua forma. Il professionista o l'igienista possono mostrare la sequenza adatta al caso.",
      },
      {
        question: "Gli impianti possono avere carie?",
        answer:
          "L'impianto non sviluppa carie, ma la placca può infiammare i tessuti che lo circondano. Anche i denti naturali vicini e la protesi devono essere controllati e puliti.",
      },
      {
        question: "È normale che la gengiva sanguini attorno a un impianto?",
        answer:
          "Il sanguinamento persistente è un segnale da valutare. Può essere associato a infiammazione o a difficoltà di pulizia, ma solo un controllo permette di comprenderne la causa.",
      },
      {
        question: "Che cosa devo fare se la protesi su impianti si muove?",
        answer:
          "Contatta lo studio e limita le sollecitazioni sulla zona fino alla verifica. Non tentare di stringere, incollare o modificare la protesi: il movimento può avere cause diverse.",
      },
      {
        question: "Una protesi su impianti può richiedere manutenzione?",
        answer:
          "Sì, materiali e componenti sono soggetti a carichi e usura. Controlli periodici aiutano a individuare cambiamenti dell'occlusione, scheggiature o necessità di manutenzione.",
      },
      {
        question: "Gli impianti durano per sempre?",
        answer:
          "Non è possibile garantire una durata universale. Salute dei tessuti, igiene, fumo, carichi, condizioni generali e controlli influenzano il risultato; inoltre impianto e protesi possono richiedere interventi diversi nel tempo.",
      },
      {
        question: "Il fumo può influire?",
        answer:
          "Il fumo può aumentare i fattori di rischio per i tessuti intorno agli impianti. Va riferito al professionista, che valuterà prevenzione e frequenza dei richiami senza poter azzerare ogni rischio.",
      },
      {
        question: "Serve l'igiene professionale anche con una protesi fissa?",
        answer:
          "Può essere indicata per rimuovere depositi non gestibili a casa e verificare la qualità dell'igiene. Modalità e frequenza dipendono dalla protesi e dal profilo individuale.",
      },
      {
        question: "Posso fare un controllo se l'impianto è stato eseguito altrove?",
        answer:
          "Una valutazione clinica può essere richiesta anche in questo caso. È utile portare la documentazione disponibile, sapendo che l'accesso a componenti o informazioni tecniche può dipendere dai dati del trattamento precedente.",
      },
      {
        question: "Come si pulisce sotto un ponte o un'arcata su impianti?",
        answer:
          "La tecnica dipende da forma della protesi, spazi disponibili e manualità. Durante il controllo il professionista o l'igienista può indicare e mostrare gli strumenti adatti, senza applicare una prescrizione identica a tutti.",
      },
      {
        question: "Quali segnali devo riferire allo studio?",
        answer:
          "Sanguinamento o gonfiore persistenti, dolore nuovo, secrezioni, cattivo sapore, difficoltà di pulizia, cambiamenti della masticazione o movimento della protesi meritano un contatto con lo studio.",
      },
      {
        question: "Che cosa avviene durante un controllo?",
        answer:
          "Possono essere valutati tessuti, igiene, stabilità e integrità della protesi, masticazione e fattori di rischio. Eventuali esami vengono indicati solo quando ritenuti utili per il caso.",
      },
    ],
  },
];

export const implantologiaEditorialPageBySlug = new Map(
  implantologiaEditorialPages.map((page) => [page.slug, page] as const),
);
