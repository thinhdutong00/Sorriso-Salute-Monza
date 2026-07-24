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
        href: "/implantologia/",
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
        href: "/implantologia/",
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
        href: "/implantologia/",
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
