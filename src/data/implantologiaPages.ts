export interface ImplantologiaFaq {
  question: string;
  answer: string;
}

export interface ImplantologiaPage {
  slug: "impianto-singolo" | "denti-fissi" | "ponte-su-impianti" | "protesi-instabile";
  title: string;
  metaDescription: string;
  h1: string;
  cardTitle: string;
  serviceInterest: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  whenIndicated: string[];
  journey: Array<{ title: string; text: string }>;
  reasons: string[];
  faqs: ImplantologiaFaq[];
}

export const implantologiaPages: ImplantologiaPage[] = [
  {
    slug: "impianto-singolo",
    title: "Impianto dentale singolo a Monza | Sorriso&Salute",
    metaDescription:
      "Valutazione implantologica per sostituire un singolo dente mancante a Monza. Prenota una consulenza presso lo studio Sorriso&Salute.",
    h1: "Impianto dentale singolo a Monza",
    cardTitle: "Impianto singolo",
    serviceInterest: "Impianto singolo",
    heroIntro:
      "Quando manca un solo dente, una valutazione implantologica permette di capire se un impianto con corona può essere una soluzione adatta, preservando i denti vicini.",
    heroImage: "/assets/brand/implant-solutions/optimized/implant-single-1080.avif",
    heroImageAlt: "Modello di impianto dentale singolo con corona",
    whenIndicated: [
      "Manca un dente e si desidera valutare una soluzione fissa.",
      "I denti adiacenti sono integri e si vuole evitare di coinvolgerli in un ponte tradizionale.",
      "Osso, gengive e condizioni generali consentono di prendere in considerazione un impianto, previa valutazione clinica.",
    ],
    journey: [
      { title: "Valutazione iniziale", text: "Il dentista esamina il dente mancante, i tessuti e la salute orale complessiva." },
      { title: "Diagnosi e pianificazione", text: "Gli esami indicati aiutano a verificare lo spazio e la disponibilità ossea." },
      { title: "Fase implantare", text: "Se il caso è idoneo, viene pianificato il posizionamento dell'impianto e il periodo di guarigione." },
      { title: "Corona e controlli", text: "La protesi viene progettata per funzione ed estetica, con controlli programmati nel tempo." },
    ],
    reasons: [
      "Pianificazione implantoprotesica costruita sul singolo caso.",
      "Un unico studio per diagnosi, fase chirurgica, protesi e controlli.",
      "Spiegazione chiara delle alternative prima di iniziare il trattamento.",
    ],
    faqs: [
      { question: "Un impianto singolo coinvolge i denti vicini?", answer: "In genere l'impianto sostiene la propria corona senza richiedere la preparazione dei denti adiacenti. La fattibilità va comunque verificata clinicamente." },
      { question: "Quanto tempo richiede il percorso?", answer: "I tempi dipendono da guarigione, condizioni dei tessuti ed eventuali procedure preparatorie. La visita consente di definire una sequenza indicativa." },
      { question: "Se manca osso si può fare l'impianto?", answer: "La disponibilità ossea viene valutata con gli esami appropriati. Quando necessario si discutono procedure preparatorie o soluzioni alternative." },
    ],
  },
  {
    slug: "denti-fissi",
    title: "Denti fissi su impianti a Monza | Sorriso&Salute",
    metaDescription:
      "Soluzioni implantologiche per denti fissi su impianti a Monza, previa valutazione clinica. Prenota una consulenza presso Sorriso&Salute.",
    h1: "Denti fissi su impianti a Monza",
    cardTitle: "Denti fissi",
    serviceInterest: "Denti fissi",
    heroIntro:
      "Quando mancano molti denti o si utilizza una protesi mobile, la visita permette di capire se una riabilitazione fissa su impianti può rientrare tra le opzioni disponibili.",
    heroImage: "/assets/brand/implant-solutions/optimized/full-arch-1080.avif",
    heroImageAlt: "Modello di riabilitazione con denti fissi su impianti",
    whenIndicated: [
      "Mancano molti denti nella stessa arcata.",
      "La protesi mobile limita la masticazione o la sicurezza nella vita quotidiana.",
      "Si desidera valutare una soluzione fissa, compatibilmente con condizioni cliniche, osso e salute generale.",
    ],
    journey: [
      { title: "Ascolto e visita", text: "Si valutano difficoltà attuali, aspettative e condizioni della bocca." },
      { title: "Studio implantoprotesico", text: "Diagnostica e impronte aiutano a progettare posizione degli impianti e futura protesi." },
      { title: "Trattamento per fasi", text: "Il piano stabilisce chirurgia, eventuale protesi provvisoria e tempi di guarigione." },
      { title: "Protesi e mantenimento", text: "La riabilitazione definitiva viene seguita da controlli e igiene professionale periodica." },
    ],
    reasons: [
      "Valutazione congiunta degli aspetti chirurgici e protesici.",
      "Alternative e limiti spiegati prima della scelta terapeutica.",
      "Programma di mantenimento dopo la consegna della protesi.",
    ],
    faqs: [
      { question: "I denti fissi possono essere messi subito?", answer: "In alcuni casi può essere valutato un provvisorio a carico immediato, ma stabilità implantare e condizioni cliniche devono essere favorevoli." },
      { question: "Quanti impianti servono?", answer: "Il numero dipende da anatomia, estensione della riabilitazione e progetto protesico. Non può essere stabilito senza diagnosi." },
      { question: "I risultati sono uguali per tutti?", answer: "No. I risultati possono variare in base alla situazione clinica, alla guarigione e al mantenimento nel tempo." },
    ],
  },
  {
    slug: "ponte-su-impianti",
    title: "Ponte su impianti a Monza | Sorriso&Salute",
    metaDescription:
      "Valutazione per ponte fisso su impianti dentali a Monza. Scopri il percorso implantologico più adatto al tuo caso.",
    h1: "Ponte su impianti dentali a Monza",
    cardTitle: "Ponte su impianti",
    serviceInterest: "Ponte su impianti",
    heroIntro:
      "Quando mancano più denti vicini, un ponte sostenuto da impianti può consentire una riabilitazione fissa senza sostituire ogni elemento con un singolo impianto.",
    heroImage: "/assets/brand/implant-solutions/optimized/multiple-teeth-1080.avif",
    heroImageAlt: "Modello di ponte dentale sostenuto da impianti",
    whenIndicated: [
      "Mancano due o più denti consecutivi.",
      "Si desidera valutare una soluzione fissa senza appoggiarsi a una protesi mobile.",
      "La distribuzione dell'osso e gli spazi consentono un progetto implantoprotesico adeguato.",
    ],
    journey: [
      { title: "Analisi dell'area", text: "La visita valuta denti residui, gengive, occlusione e spazio protesico." },
      { title: "Progetto del ponte", text: "Si definiscono numero e posizione degli impianti in relazione alla futura protesi." },
      { title: "Inserimento degli impianti", text: "La fase chirurgica viene programmata secondo il piano condiviso con il paziente." },
      { title: "Consegna e controlli", text: "Dopo la guarigione viene completato il ponte e vengono indicati igiene e controlli." },
    ],
    reasons: [
      "Progettazione che parte dalla funzione della protesi finale.",
      "Valutazione delle possibili alternative implantari e non implantari.",
      "Indicazioni personalizzate per igiene e mantenimento del ponte.",
    ],
    faqs: [
      { question: "Serve un impianto per ogni dente mancante?", answer: "Non necessariamente. In alcuni progetti due o più impianti possono sostenere un ponte; la scelta dipende dalla diagnosi." },
      { question: "Come si pulisce un ponte su impianti?", answer: "Sono necessari strumenti e tecniche specifiche per detergere sotto il ponte. Lo studio fornisce indicazioni personalizzate." },
      { question: "È sempre preferibile a un ponte sui denti?", answer: "Non esiste una soluzione migliore in assoluto. La scelta considera denti residui, osso, esigenze protesiche e condizioni generali." },
    ],
  },
  {
    slug: "protesi-instabile",
    title: "Protesi dentale instabile a Monza | Sorriso&Salute",
    metaDescription:
      "La protesi mobile si muove o crea disagio? Prenota una valutazione implantologica a Monza per capire le soluzioni disponibili.",
    h1: "Protesi dentale instabile? Valutazione implantologica a Monza",
    cardTitle: "Protesi instabile",
    serviceInterest: "Protesi instabile",
    heroIntro:
      "Se la protesi mobile si muove durante la masticazione o nel parlare, una valutazione consente di verificare adattamento, tessuti e possibili soluzioni di stabilizzazione.",
    heroImage: "/assets/brand/implant-solutions/optimized/implant-prosthesis-1080.avif",
    heroImageAlt: "Modello di protesi dentale stabilizzata da impianti",
    whenIndicated: [
      "La protesi tende a muoversi mentre si mangia o si parla.",
      "Sono presenti punti di pressione o difficoltà nel mantenere stabile la protesi.",
      "Si vuole capire se è possibile migliorare ritenzione e comfort con una soluzione implantare.",
    ],
    journey: [
      { title: "Controllo della protesi", text: "Si esaminano adattamento, usura, mucose e funzione della protesi attuale." },
      { title: "Valutazione delle opzioni", text: "Si confrontano ribasatura, nuova protesi, stabilizzazione o riabilitazione fissa, quando indicate." },
      { title: "Pianificazione clinica", text: "Gli esami necessari permettono di verificare fattibilità e posizione degli eventuali impianti." },
      { title: "Adattamento e mantenimento", text: "Dopo il trattamento si controllano comfort, igiene e stabilità nel tempo." },
    ],
    reasons: [
      "Valutazione della protesi esistente prima di proporre un nuovo percorso.",
      "Confronto trasparente tra soluzioni mobili, stabilizzate e fisse.",
      "Assistenza nella fase di adattamento e nei controlli successivi.",
    ],
    faqs: [
      { question: "Una protesi che si muove va sempre sostituita?", answer: "No. A volte può essere adattata o ribasata; in altri casi si valuta una nuova protesi o una stabilizzazione implantare." },
      { question: "Bastano pochi impianti per stabilizzarla?", answer: "In alcuni casi una protesi mobile può essere ancorata a un numero limitato di impianti, ma la configurazione dipende dall'anatomia e dal progetto." },
      { question: "La protesi diventa completamente fissa?", answer: "Dipende dalla soluzione scelta. Una overdenture resta rimovibile per l'igiene, mentre una riabilitazione fissa segue un progetto diverso." },
    ],
  },
];

export const implantologiaPageBySlug = new Map(
  implantologiaPages.map((page) => [page.slug, page]),
);
