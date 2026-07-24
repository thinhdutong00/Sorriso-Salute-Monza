export interface ProtesiCard {
  title: string;
  text: string;
}

export interface ProtesiStep {
  title: string;
  text: string;
}

export interface ProtesiLink {
  href: string;
  label: string;
  text: string;
}

export interface ProtesiFaq {
  question: string;
  answer: string;
}

export const protesiDentaleSeo = {
  title: "Protesi dentali fisse e mobili | Sorriso & Salute Monza",
  description:
    "Protesi dentali fisse e mobili a Monza: corone, ponti, protesi rimovibili e soluzioni su impianti valutate in base alle esigenze del paziente.",
  canonicalPath: "/protesi-dentale/",
  h1: "Protesi dentali fisse e mobili: soluzioni per denti compromessi o mancanti",
} as const;

export const situations: ProtesiCard[] = [
  {
    title: "Un dente molto compromesso",
    text: "La visita serve a capire se il dente può essere recuperato e protetto con una ricostruzione protesica oppure se occorre valutare un percorso diverso.",
  },
  {
    title: "Un dente mancante",
    text: "Le possibilità possono comprendere un ponte sostenuto dai denti vicini o una corona su impianto, quando indicata dalla valutazione clinica.",
  },
  {
    title: "Più denti mancanti",
    text: "Numero, posizione e condizioni dei denti residui orientano la scelta fra ponti, protesi rimovibili e soluzioni sostenute da impianti.",
  },
  {
    title: "Tutti o quasi tutti i denti mancanti",
    text: "Si valutano funzione, supporto, igiene e possibilità di manutenzione per confrontare protesi complete mobili e soluzioni su impianti.",
  },
  {
    title: "Una protesi mobile che si muove",
    text: "Controllo, regolazione, rifacimento o stabilizzazione su impianti sono opzioni differenti, da discutere dopo aver esaminato bocca e protesi.",
  },
  {
    title: "Una vecchia protesi da sostituire",
    text: "Corone, ponti e protesi possono richiedere una nuova valutazione quando cambiano stabilità, pulibilità, funzione o condizioni dei tessuti di supporto.",
  },
];

export const definitions: ProtesiCard[] = [
  {
    title: "Dente naturale",
    text: "Comprende la parte visibile e la radice inserita nell’osso. Quando è recuperabile, conservarlo può far parte del progetto di cura.",
  },
  {
    title: "Impianto",
    text: "È un supporto inserito nell’osso. Non è il dente visibile: può sostenere una corona, un ponte o, in alcuni casi, contribuire a stabilizzare una protesi mobile.",
  },
  {
    title: "Corona",
    text: "È una protesi che ricopre un dente preparato oppure viene collegata a un impianto per sostituire la parte visibile di un singolo dente.",
  },
  {
    title: "Ponte",
    text: "Sostituisce uno o più denti mancanti collegando elementi protesici sostenuti da denti naturali o da impianti, secondo il progetto clinico.",
  },
  {
    title: "Protesi completa",
    text: "Sostituisce tutti i denti di un’arcata. Può essere mobile oppure far parte di un progetto sostenuto da impianti quando esistono le indicazioni.",
  },
  {
    title: "Protesi rimovibile",
    text: "Può sostituire alcuni o tutti i denti ed è progettata per essere rimossa dal paziente per l’igiene quotidiana.",
  },
];

export const fixedOptions: ProtesiCard[] = [
  {
    title: "Corona su dente naturale",
    text: "Può proteggere e ripristinare la forma di un dente recuperabile dopo le cure e la preparazione previste dal piano individuale.",
  },
  {
    title: "Ponte su denti naturali",
    text: "Sostituisce uno o più denti mancanti utilizzando denti naturali idonei come supporto. La loro condizione deve essere valutata con attenzione.",
  },
  {
    title: "Corona su impianto",
    text: "Sostituisce la parte visibile di un singolo dente ed è collegata a un impianto quando osso, gengive e condizioni generali lo consentono.",
  },
  {
    title: "Ponte su impianti",
    text: "Può sostituire più denti vicini utilizzando impianti come supporto, senza implicare che sia la soluzione adatta a ogni situazione.",
  },
  {
    title: "Arcata fissa su impianti",
    text: "È una protesi estesa sostenuta da impianti. Numero e posizione dei supporti, tempi e fasi dipendono dalla pianificazione clinica.",
  },
];

export const mobileOptions: ProtesiCard[] = [
  {
    title: "Protesi parziale",
    text: "Sostituisce alcuni denti e utilizza i denti residui e i tessuti orali secondo il tipo di progetto; viene rimossa per la pulizia.",
  },
  {
    title: "Protesi totale",
    text: "Sostituisce tutti i denti di un’arcata e appoggia sui tessuti di supporto. Adattamento, stabilità e controlli variano da persona a persona.",
  },
  {
    title: "Protesi mobile tradizionale",
    text: "Può rappresentare una soluzione quando mancano molti denti o un’intera arcata, anche quando non si ricorre a supporti implantari.",
  },
  {
    title: "Protesi mobile stabilizzata su impianti",
    text: "Si aggancia a componenti collegati agli impianti per aumentare la ritenzione, ma resta rimovibile dal paziente per l’igiene.",
  },
];

export const choiceFactors = [
  "Recuperabilità e prognosi dei denti presenti.",
  "Salute di gengive e tessuti di sostegno.",
  "Numero e posizione dei denti mancanti.",
  "Disponibilità ossea quando si valutano impianti.",
  "Capacità di mantenere una corretta igiene domiciliare.",
  "Esigenze funzionali e abitudini individuali.",
  "Risultati della valutazione clinica e degli esami indicati.",
  "Possibilità di controllare, pulire e manutenere la soluzione nel tempo.",
] as const;

export const pathway: ProtesiStep[] = [
  {
    title: "Visita",
    text: "Si raccolgono esigenze, sintomi, aspettative e informazioni utili a inquadrare la situazione.",
  },
  {
    title: "Valutazione di denti e gengive",
    text: "Si controllano denti residui, tessuti di sostegno, spazi e condizioni della protesi eventualmente presente.",
  },
  {
    title: "Esami quando indicati",
    text: "Immagini e altre registrazioni vengono richieste solo quando servono a completare la valutazione.",
  },
  {
    title: "Progettazione",
    text: "Si confrontano supporti, estensione, fasi e modalità di manutenzione delle possibilità considerate.",
  },
  {
    title: "Cure preparatorie",
    text: "Quando necessarie, possono precedere la fase protesica e vengono inserite nel piano complessivo.",
  },
  {
    title: "Provvisorio, quando previsto",
    text: "Una soluzione temporanea può accompagnare alcune fasi, con funzione e durata definite per il singolo percorso.",
  },
  {
    title: "Realizzazione della protesi",
    text: "Il progetto viene tradotto nei passaggi clinici e tecnici previsti per la soluzione scelta.",
  },
  {
    title: "Prove",
    text: "Quando previste, permettono di verificare adattamento, rapporti funzionali ed elementi del progetto prima della consegna.",
  },
  {
    title: "Consegna",
    text: "La protesi viene applicata o consegnata insieme alle indicazioni per uso, igiene e periodo di adattamento.",
  },
  {
    title: "Controlli e manutenzione",
    text: "Il risultato viene seguito nel tempo per controllare tessuti, supporti, componenti e facilità di pulizia.",
  },
];

export const maintenanceItems: ProtesiCard[] = [
  {
    title: "Adattamento iniziale",
    text: "Nei primi periodi possono essere necessari tempo e controlli per abituarsi a ingombri, contatti e modalità di utilizzo della nuova protesi.",
  },
  {
    title: "Igiene quotidiana",
    text: "Denti, gengive, spazi sotto i ponti, componenti implantari e protesi rimovibili richiedono modalità di pulizia coerenti con il progetto.",
  },
  {
    title: "Controlli e regolazioni",
    text: "Controlli periodici e possibili regolazioni aiutano a intercettare cambiamenti dei tessuti, dell’occlusione o dei componenti.",
  },
  {
    title: "Segnali da riferire",
    text: "Mobilità, fastidio, irritazione, fratture o difficoltà nella pulizia vanno comunicati allo studio senza attendere il controllo successivo.",
  },
];

export const costFactors = [
  "Numero e posizione dei denti da ricostruire o sostituire.",
  "Tipo ed estensione della protesi prevista.",
  "Supporto su denti naturali, impianti o tessuti orali.",
  "Materiali individuati nel progetto protesico.",
  "Eventuali estrazioni o cure preparatorie.",
  "Eventuali procedure implantari previste.",
  "Necessità e caratteristiche di una fase provvisoria.",
  "Complessità del caso e numero di fasi cliniche e tecniche.",
] as const;

export const relatedLinks: ProtesiLink[] = [
  {
    href: "/implantologia/impianto-singolo/",
    label: "Impianto singolo",
    text: "Quando manca un solo dente e si valuta una corona sostenuta da impianto.",
  },
  {
    href: "/implantologia/ponte-su-impianti/",
    label: "Ponte su impianti",
    text: "Per approfondire il supporto implantare quando mancano più denti vicini.",
  },
  {
    href: "/implantologia/denti-fissi/",
    label: "Denti fissi su impianti",
    text: "Una panoramica delle soluzioni fisse estese sostenute da impianti.",
  },
  {
    href: "/implantologia/protesi-instabile/",
    label: "Protesi mobile instabile",
    text: "Le valutazioni possibili quando una protesi mobile si muove o crea disagio.",
  },
  {
    href: "/implantologia/carico-immediato/",
    label: "Carico immediato",
    text: "Indicazioni, limiti e differenza tra protesi provvisoria e definitiva.",
  },
  {
    href: "/implantologia/poco-osso/",
    label: "Impianti con poco osso",
    text: "Come viene valutata la disponibilità ossea prima di formulare un piano.",
  },
  {
    href: "/implantologia/",
    label: "Percorso implantologico",
    text: "Le fasi dalla prima visita alla protesi e ai controlli successivi.",
  },
  {
    href: "/implantologia/manutenzione-impianti/",
    label: "Manutenzione degli impianti",
    text: "Igiene e controlli di protesi e supporti implantari nel tempo.",
  },
];

export const faqs: ProtesiFaq[] = [
  {
    question: "Che differenza c’è tra protesi fissa e mobile?",
    answer:
      "La protesi fissa viene cementata o avvitata a denti o impianti e non viene rimossa dal paziente. La protesi mobile è invece progettata per essere rimossa, soprattutto per l’igiene. Indicazioni e manutenzione sono differenti.",
  },
  {
    question: "Corona e impianto sono la stessa cosa?",
    answer:
      "No. L’impianto è un supporto inserito nell’osso; la corona è la parte protesica visibile che può ricoprire un dente naturale o essere collegata a un impianto.",
  },
  {
    question: "È sempre necessario mettere un impianto?",
    answer:
      "No. Denti recuperabili, ponti su denti naturali e protesi rimovibili possono rappresentare alternative in alcune situazioni. La scelta richiede una valutazione individuale.",
  },
  {
    question: "Si può recuperare un dente compromesso?",
    answer:
      "Dipende dalla quantità di tessuto residuo, dal sostegno gengivale e osseo, dalle condizioni della radice e dalla possibilità di ottenere un risultato mantenibile. Non è possibile stabilirlo online.",
  },
  {
    question: "Che differenza c’è tra ponte su denti e ponte su impianti?",
    answer:
      "Nel primo caso il ponte è sostenuto da denti naturali preparati; nel secondo è collegato a impianti. La condizione dei denti, lo spazio, l’osso e la manutenzione orientano la scelta.",
  },
  {
    question: "Una protesi mobile può essere stabilizzata?",
    answer:
      "In alcuni casi può agganciarsi a componenti collegati a impianti per aumentare la ritenzione. Anche quando stabilizzata, resta rimovibile dal paziente e richiede igiene e controlli.",
  },
  {
    question: "Rimarrò senza denti durante il trattamento?",
    answer:
      "Quando le condizioni lo permettono, il piano può prevedere una soluzione provvisoria. Tipo, tempi e possibilità dipendono però dalla situazione clinica e dalle fasi necessarie.",
  },
  {
    question: "Quanto tempo serve?",
    answer:
      "Non esiste una durata uguale per tutti. Numero di fasi, cure preparatorie, eventuali impianti, guarigione, prove e adattamento determinano il calendario individuale.",
  },
  {
    question: "La protesi definitiva richiede manutenzione?",
    answer:
      "Sì. Anche una protesi definitiva richiede igiene quotidiana e controlli per verificare denti, gengive, impianti, componenti e usura nel tempo.",
  },
  {
    question: "Come viene determinato il preventivo?",
    answer:
      "Il preventivo deriva dal progetto definito dopo la valutazione: estensione, supporti, materiali, eventuali cure preparatorie, fase provvisoria e numero di passaggi incidono sulla sua composizione.",
  },
  {
    question: "Come si sceglie il materiale?",
    answer:
      "La scelta considera posizione, funzione, spazio disponibile, supporto, esigenze estetiche, modalità di pulizia e caratteristiche del progetto. Le alternative vanno discusse per il caso individuale.",
  },
  {
    question: "Ogni quanto servono i controlli?",
    answer:
      "La frequenza viene indicata in base a denti e gengive, tipo di protesi, supporti, igiene e fattori individuali. Va rivalutata se compaiono mobilità, fastidio o difficoltà di pulizia.",
  },
];
