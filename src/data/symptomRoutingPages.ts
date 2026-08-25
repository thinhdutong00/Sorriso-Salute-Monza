import {
  categoryTreatmentsByPath,
  type TreatmentCategoryId,
} from "./categoryTreatments";

export type SymptomRoutingTreatment = {
  label: string;
  serviceSlug: TreatmentCategoryId;
  description: string;
  treatmentHref: string;
  bookingHref: string;
};

export type SymptomRoutingPage = {
  slug: string;
  path: `/sintomi/${string}/`;
  title: string;
  titlePrimary: string;
  titleAccent: string;
  metaDescription: string;
  intro: string;
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
  description: string,
): SymptomRoutingTreatment => {
  const treatmentHref = treatmentPageHrefByService[serviceSlug];

  if (!treatmentHref) {
    throw new Error(
      `Pagina trattamento non configurata per il servizio ${serviceSlug}.`,
    );
  }

  return {
    label,
    serviceSlug,
    description,
    treatmentHref,
    bookingHref: `/richiesta-generale/?servizio=${encodeURIComponent(serviceSlug)}`,
  };
};

const sharedIntro =
  "Situazioni simili possono dipendere da problemi diversi. Le aree qui sotto ti aiutano a capire da dove iniziare, senza sostituire una valutazione in studio.";

export const symptomRoutingPages: readonly SymptomRoutingPage[] = [
  {
    slug: "mal-di-denti-o-sensibilita",
    path: "/sintomi/mal-di-denti-o-sensibilita/",
    title: "Mal di denti o sensibilità",
    titlePrimary: "Mal di denti",
    titleAccent: "o sensibilità",
    metaDescription:
      "Orientati tra odontoiatria conservativa ed endodonzia in caso di mal di denti o sensibilità.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Odontoiatria conservativa",
        "odontoiatria-conservativa",
        "Può essere pertinente quando un dente è sensibile, presenta una carie, una piccola frattura o una parte danneggiata. La visita chiarisce se è possibile curarlo e ricostruirlo conservando la struttura sana.",
      ),
      treatment(
        "Endodonzia",
        "endodonzia",
        "Può entrare in gioco quando il dolore proviene dalla parte interna del dente, per esempio in presenza di un’infiammazione profonda. La visita permette di capire se il dente può essere curato e conservato.",
      ),
    ],
  },
  {
    slug: "gengive-gonfie-o-sanguinanti",
    path: "/sintomi/gengive-gonfie-o-sanguinanti/",
    title: "Gengive gonfie o sanguinanti",
    titlePrimary: "Gengive gonfie",
    titleAccent: "o sanguinanti",
    metaDescription:
      "Orientati tra parodontologia e igiene orale in caso di gengive gonfie o sanguinanti.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Parodontologia",
        "parodontologia",
        "Può essere pertinente quando le gengive sanguinano, si gonfiano o sembrano ritirarsi, oppure quando un dente si muove. La visita serve a valutare i tessuti che sostengono i denti e il percorso più adatto.",
      ),
      treatment(
        "Igiene orale e profilassi",
        "igiene-orale-e-profilassi",
        "Può essere utile quando placca e tartaro favoriscono sanguinamento, alito pesante o fastidio alle gengive. La seduta professionale e i controlli aiutano a mantenere denti e gengive puliti nel tempo.",
      ),
    ],
  },
  {
    slug: "denti-mancanti-o-danneggiati",
    path: "/sintomi/denti-mancanti-o-danneggiati/",
    title: "Denti mancanti o danneggiati",
    titlePrimary: "Denti mancanti",
    titleAccent: "o danneggiati",
    metaDescription:
      "Orientati tra impianti dentali, protesi dentale e chirurgia orale per denti mancanti o danneggiati.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Impianti dentali",
        "implantologia",
        "Possono essere valutati per sostituire uno o più denti mancanti con supporti fissi nell’osso. La visita permette di controllare gengive, osso e alternative disponibili prima di decidere.",
      ),
      treatment(
        "Protesi dentale",
        "protesi-dentale",
        "Può aiutare quando uno o più denti sono molto danneggiati o mancanti e occorre recuperarne forma, stabilità e funzione. La soluzione viene scelta in base alla bocca e alle esigenze della persona.",
      ),
      treatment(
        "Chirurgia orale",
        "chirurgia-orale",
        "Può entrare in gioco per denti non recuperabili, denti del giudizio o altre situazioni che richiedono un intervento mirato. Prima di procedere vengono valutate immagini, anatomia e possibili alternative.",
      ),
    ],
  },
  {
    slug: "denti-storti-forma-o-colore",
    path: "/sintomi/denti-storti-forma-o-colore/",
    title: "Denti storti, forma o colore",
    titlePrimary: "Denti storti,",
    titleAccent: "forma o colore",
    metaDescription:
      "Orientati tra estetica del sorriso e ortodonzia per denti storti o per migliorare forma e colore.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Estetica del sorriso",
        "estetica-del-sorriso",
        "Può essere utile quando si desidera migliorare colore, forma o armonia dei denti e del sorriso. La visita aiuta a capire quali cambiamenti sono realistici e rispettosi dei denti.",
      ),
      treatment(
        "Ortodonzia",
        "ortodonzia",
        "Può essere pertinente quando i denti sono storti, affollati o il morso non chiude in modo equilibrato. La valutazione chiarisce se e come guidare gradualmente i denti verso una posizione più adatta.",
      ),
    ],
  },
  {
    slug: "dolore-alla-mandibola-o-masticazione",
    path: "/sintomi/dolore-alla-mandibola-o-masticazione/",
    title: "Dolore alla mandibola o masticazione",
    titlePrimary: "Dolore alla mandibola",
    titleAccent: "o masticazione",
    metaDescription:
      "Scopri quando la gnatologia può essere pertinente per dolore alla mandibola o difficoltà nella masticazione.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Gnatologia",
        "gnatologia",
        "Può essere utile in presenza di fastidio alla mandibola, rumori articolari o difficoltà durante la masticazione. La visita valuta come lavorano insieme mandibola, articolazioni, muscoli e denti.",
      ),
    ],
  },
  {
    slug: "cure-dentali-per-bambini",
    path: "/sintomi/cure-dentali-per-bambini/",
    title: "Cure dentali per bambini",
    titlePrimary: "Cure dentali",
    titleAccent: "per bambini",
    metaDescription:
      "Scopri quando la pedodonzia può aiutare nella prevenzione e nelle cure dentali per bambini.",
    intro: sharedIntro,
    treatments: [
      treatment(
        "Pedodonzia",
        "pedodonzia",
        "È il percorso dedicato a denti e gengive dei bambini, dai controlli alla prevenzione fino alla gestione di carie o piccoli traumi. L’approccio viene adattato all’età e ai tempi del bambino.",
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

export const symptomMenuLinks = symptomRoutingPages.map(({ path, title }) => ({
  href: path,
  label: title,
}));
