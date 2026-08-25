import {
  categoryTreatmentsByPath,
  type TreatmentCategoryId,
} from "./categoryTreatments";

export type SymptomRoutingTreatment = {
  label: string;
  technicalName?: string;
  serviceSlug: TreatmentCategoryId;
  description:
    | string
    | readonly {
        text: string;
        strong?: boolean;
      }[];
  treatmentHref: string;
  bookingHref: string;
  treatmentCtaLabel?: string;
};

export type SymptomRoutingPage = {
  slug: string;
  path: `/sintomi/${string}/`;
  title: string;
  menuLabel: string;
  metaDescription: string;
  eyebrow?: string;
  orientationTitle?: string;
  orientationDescription?: string;
  treatments: readonly SymptomRoutingTreatment[];
};

const treatmentPageHrefByService = Object.fromEntries(
  Object.entries(categoryTreatmentsByPath).map(([href, category]) => [
    category.id,
    href,
  ]),
) as Record<TreatmentCategoryId, string>;

const treatment = (
  label: string,
  serviceSlug: TreatmentCategoryId,
  description: SymptomRoutingTreatment["description"],
  treatmentCtaLabel?: string,
  technicalName?: string,
): SymptomRoutingTreatment => {
  const treatmentHref = treatmentPageHrefByService[serviceSlug];

  if (!treatmentHref) {
    throw new Error(
      `Pagina trattamento non configurata per il servizio ${serviceSlug}.`,
    );
  }

  return {
    label,
    technicalName,
    serviceSlug,
    description,
    treatmentHref,
    bookingHref: `/richiesta-generale/?servizio=${encodeURIComponent(serviceSlug)}`,
    treatmentCtaLabel,
  };
};

export const symptomRoutingPages: readonly SymptomRoutingPage[] = [
  {
    slug: "mal-di-denti-o-sensibilita",
    path: "/sintomi/mal-di-denti-o-sensibilita/",
    title: "Dolore ai denti",
    menuLabel: "Dolore ai denti",
    metaDescription:
      "Scopri quali trattamenti possono essere indicati in caso di dolore, sensibilità, carie o denti danneggiati.",
    eyebrow: "Capire da dove viene il dolore",
    orientationTitle: "Da dove iniziare?",
    orientationDescription:
      "Il dolore o la sensibilità possono avere cause diverse. Seleziona la situazione più vicina alla tua per capire quali cure possono essere valutate durante la visita.",
    treatments: [
      treatment(
        "Riparare un dente danneggiato",
        "odontoiatria-conservativa",
        "Può riguardarti se un dente ha una carie, è sensibile, scheggiato o presenta una parte danneggiata. Durante la visita il dentista valuta se può essere curato e ricostruito conservando il più possibile il dente naturale.",
        "Scopri il trattamento",
        "Odontoiatria conservativa",
      ),
      treatment(
        "Curare un dolore profondo al dente",
        "endodonzia",
        "Può riguardarti quando il dolore è profondo, intenso o persistente e il problema interessa la parte interna del dente. Durante la visita il dentista valuta se il dente può essere curato e conservato attraverso un trattamento canalare.",
        "Scopri il trattamento",
        "Endodonzia",
      ),
    ],
  },
  {
    slug: "gengive-gonfie-o-sanguinanti",
    path: "/sintomi/gengive-gonfie-o-sanguinanti/",
    title: "Gengive che sanguinano",
    menuLabel: "Gengive che sanguinano",
    metaDescription:
      "Orientati tra parodontologia e igiene orale in caso di gengive gonfie o sanguinanti.",
    eyebrow: "Capire cosa succede alle gengive",
    orientationTitle: "Da dove iniziare?",
    orientationDescription:
      "Se le gengive sanguinano, sono gonfie, si ritirano o avverti fastidio, è utile capire da cosa dipende. Qui puoi distinguere tra una situazione che richiede una valutazione delle gengive e la normale igiene professionale.",
    treatments: [
      treatment(
        "Curare gengive infiammate o che si ritirano",
        "parodontologia",
        "Può riguardarti se le gengive sanguinano frequentemente, sono gonfie o si stanno ritirando, oppure se alcuni denti iniziano a muoversi. La visita permette di valutare i tessuti che sostengono i denti e individuare il percorso più adatto per proteggerli e conservarli nel tempo.",
        "Scopri il trattamento",
        "Parodontologia",
      ),
      treatment(
        "Igiene professionale e rimozione del tartaro",
        "igiene-orale-e-profilassi",
        "Può essere indicata quando si accumulano placca e tartaro o quando le gengive sanguinano durante l’igiene quotidiana. La seduta professionale permette di rimuovere i depositi anche nelle zone più difficili da raggiungere e aiuta a mantenere denti e gengive puliti e protetti nel tempo.",
        "Scopri il trattamento",
        "Igiene orale e profilassi",
      ),
    ],
  },
  {
    slug: "denti-mancanti-o-danneggiati",
    path: "/sintomi/denti-mancanti-o-danneggiati/",
    title: "Denti danneggiati o mancanti",
    menuLabel: "Denti danneggiati o mancanti",
    metaDescription:
      "Orientati tra impianti dentali, protesi dentale e chirurgia orale per denti mancanti o danneggiati.",
    eyebrow: "Ritrovare denti stabili e funzionali",
    orientationTitle: "Da dove iniziare?",
    orientationDescription:
      "Se uno o più denti mancano, sono molto danneggiati o devono essere rimossi, esistono soluzioni diverse per recuperarne funzione, stabilità ed estetica. Seleziona la situazione più vicina alla tua per capire quali possibilità possono essere valutate durante la visita.",
    treatments: [
      treatment(
        "Sostituire uno o più denti mancanti",
        "implantologia",
        [
          {
            text: "Se ti manca uno o più denti, possono essere valutati ",
          },
          {
            text: "impianti dentali in titanio",
            strong: true,
          },
          {
            text: " per sostituirli in modo stabile: dall’",
          },
          {
            text: "impianto singolo",
            strong: true,
          },
          {
            text: " fino a soluzioni per più denti o ",
          },
          {
            text: "denti fissi su impianti",
            strong: true,
          },
          {
            text: ". Quando necessario possono essere valutate anche la stabilizzazione di una protesi mobile e procedure di ",
          },
          {
            text: "rigenerazione ossea",
            strong: true,
          },
          {
            text: ".",
          },
        ],
        "Scopri il trattamento",
        "Impianti dentali",
      ),
      treatment(
        "Ricostruire o sostituire denti compromessi",
        "protesi-dentale",
        [
          {
            text: "Quando uno o più denti sono molto danneggiati o mancanti, possono essere valutate ",
          },
          {
            text: "corone, ponti, protesi fisse o mobili e protesi su impianti",
            strong: true,
          },
          {
            text: ". L’obiettivo è recuperare denti stabili, una masticazione efficace e un risultato armonioso con il sorriso.",
          },
        ],
        "Scopri il trattamento",
        "Protesi dentale",
      ),
      treatment(
        "Rimuovere o trattare un dente compromesso",
        "chirurgia-orale",
        "Può essere necessaria quando un dente non può essere conservato o richiede un intervento specifico. Comprende, tra le diverse possibilità, l’estrazione di denti compromessi o del giudizio, il trattamento di denti inclusi e interventi chirurgici o rigenerativi quando indicati nel percorso di cura.",
        "Scopri il trattamento",
        "Chirurgia orale",
      ),
    ],
  },
  {
    slug: "denti-storti-forma-o-colore",
    path: "/sintomi/denti-storti-forma-o-colore/",
    title: "Migliorare il sorriso",
    menuLabel: "Allineare o schiarire i denti",
    metaDescription:
      "Orientati tra estetica del sorriso e ortodonzia per denti storti o per migliorare forma e colore.",
    eyebrow: "Forma, colore e allineamento",
    orientationTitle: "Cosa vuoi migliorare?",
    orientationDescription:
      "Se vuoi rendere i denti più armoniosi, chiari o allineati, esistono percorsi diversi in base a ciò che desideri migliorare. Puoi intervenire sulla forma e sul colore dei denti oppure sul loro allineamento.",
    treatments: [
      treatment(
        "Migliorare forma e colore dei denti",
        "estetica-del-sorriso",
        [
          {
            text: "Se vuoi modificare forma, colore o proporzioni dei denti, possono essere valutate soluzioni come ",
          },
          {
            text: "faccette in ceramica o composito e sbiancamento professionale",
            strong: true,
          },
          {
            text: ". La visita permette di capire quale intervento può valorizzare il sorriso mantenendo un risultato armonioso con denti, viso e lineamenti.",
          },
        ],
        "Scopri le soluzioni",
        "Estetica del sorriso",
      ),
      treatment(
        "Allineare i denti",
        "ortodonzia",
        [
          {
            text: "Se i denti sono storti, affollati o presentano spazi che vorresti correggere, possono essere valutati diversi percorsi ortodontici. Tra le possibilità ci sono ",
          },
          {
            text: "Invisalign® e altri allineatori trasparenti",
            strong: true,
          },
          {
            text: ", pensati per spostare progressivamente i denti in modo discreto, oltre agli ",
          },
          {
            text: "apparecchi ortodontici tradizionali",
            strong: true,
          },
          {
            text: " quando più indicati.",
          },
        ],
        "Scopri le soluzioni",
        "Ortodonzia",
      ),
    ],
  },
  {
    slug: "dolore-alla-mandibola-o-masticazione",
    path: "/sintomi/dolore-alla-mandibola-o-masticazione/",
    title: "Dolore quando mastichi",
    menuLabel: "Dolore quando mastichi",
    metaDescription:
      "Scopri quando la gnatologia può essere pertinente per dolore alla mandibola o difficoltà nella masticazione.",
    eyebrow: "Mandibola, articolazioni e masticazione",
    orientationTitle: "Da cosa può dipendere?",
    orientationDescription:
      "Dolore, tensione o rumori alla mandibola possono comparire mentre mastichi, apri la bocca o muovi la mandibola. Una valutazione permette di capire se il fastidio può essere collegato alle articolazioni, ai muscoli o al modo in cui i denti entrano in contatto.",
    treatments: [
      treatment(
        "Valutare mandibola e masticazione",
        "gnatologia",
        "Può riguardarti se senti dolore o affaticamento mentre mastichi, avverti click o rumori alla mandibola oppure hai difficoltà nei movimenti di apertura e chiusura della bocca. Durante la visita vengono valutati insieme articolazioni, muscoli, denti e masticazione per individuare l’origine del disturbo e capire quale percorso può essere più indicato. In base alla valutazione possono essere considerate anche soluzioni specifiche per serramento o bruxismo, come un bite realizzato per il singolo caso.",
        "Scopri il trattamento",
        "Gnatologia",
      ),
    ],
  },
  {
    slug: "cure-dentali-per-bambini",
    path: "/sintomi/cure-dentali-per-bambini/",
    title: "Dentista per bambini",
    menuLabel: "Bambini dal dentista",
    metaDescription:
      "Scopri quando la pedodonzia può aiutare nella prevenzione e nelle cure dentali per bambini.",
    eyebrow: "Denti sani durante la crescita",
    orientationTitle: "Quando portare un bambino dal dentista?",
    orientationDescription:
      "I controlli durante la crescita aiutano a seguire lo sviluppo di denti e gengive, prevenire i problemi più comuni e intervenire quando compaiono carie, fastidi o piccoli traumi. Ogni visita viene adattata all’età e alle esigenze del bambino.",
    treatments: [
      treatment(
        "Controlli, prevenzione e cure per bambini",
        "pedodonzia",
        "È il percorso dedicato alla salute di denti e gengive durante l’infanzia. Comprende controlli periodici, prevenzione e cura delle carie, gestione di piccoli traumi e indicazioni per una corretta igiene orale. L’approccio viene adattato all’età del bambino per accompagnarlo nelle diverse fasi della crescita. Quando indicato, il percorso può comprendere anche fluoroprofilassi e sigillature dei solchi.",
        "Scopri il percorso",
        "Pedodonzia",
      ),
    ],
  },
] as const;

if (symptomRoutingPages.length !== 6) {
  throw new Error("La navigazione per sintomi deve generare esattamente 6 pagine.");
}

const routedServiceSlugs = symptomRoutingPages.flatMap((page) =>
  page.treatments.map((item) => item.serviceSlug),
);

if (
  routedServiceSlugs.length !== 11 ||
  new Set(routedServiceSlugs).size !== 11
) {
  throw new Error(
    "Le pagine di smistamento devono collegare una sola volta tutti gli 11 trattamenti.",
  );
}

export const symptomMenuLinks = symptomRoutingPages.map(({ path, menuLabel }) => ({
  href: path,
  label: menuLabel,
}));
