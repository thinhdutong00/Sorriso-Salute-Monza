export interface InternalHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface InternalHeroPanel {
  label: string;
  title: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface InternalHeroCarouselItem {
  name: string;
  role: string;
  image: string;
}

export interface InternalHeroCarousel {
  label: string;
  items: InternalHeroCarouselItem[];
  interval?: number;
}

export interface InternalPageHeroContent {
  eyebrow: string;
  titlePrimary: string;
  titleAccent: string;
  lead: string;
  breadcrumbs: InternalHeroBreadcrumb[];
  panel?: InternalHeroPanel;
  quote?: string;
  carousel?: InternalHeroCarousel;
}

const homeCrumb: InternalHeroBreadcrumb = { label: "Home", href: "/" };
const treatmentsCrumb: InternalHeroBreadcrumb = { label: "Trattamenti", href: "/attivita/" };

const treatmentPanel = (
  items: string[],
  ctaHref = "/richiesta-generale/",
): InternalHeroPanel => ({
  label: "Il risultato che cerchiamo",
  title: "Dal problema a un percorso chiaro",
  items,
  ctaLabel: "Parlaci della tua esigenza",
  ctaHref,
});

const treatmentHero = (
  currentLabel: string,
  eyebrow: string,
  titlePrimary: string,
  titleAccent: string,
  lead: string,
  panelItems: string[],
): InternalPageHeroContent => ({
  eyebrow,
  titlePrimary,
  titleAccent,
  lead,
  breadcrumbs: [homeCrumb, treatmentsCrumb, { label: currentLabel }],
  panel: treatmentPanel(panelItems),
});

const aboutHeroCarousel: InternalHeroCarousel = {
  label: "Il team dello Studio Dentistico Sorriso & Salute",
  interval: 4800,
  items: [
    {
      name: "Gianni Focarelli",
      role: "Titolare e Amministratore della Sorriso&Salute srl",
      image: "/assets/brand/team/staff-gianni-focarelli.webp",
    },
    {
      name: "Dott.ssa Moreschi Chiara",
      role: "Chirurgo orale",
      image: "/assets/brand/team/staff-chiara-moreschi.webp",
    },
    {
      name: "Dott.ssa Maria Isabel Pareja Carrillo",
      role: "Odontoiatra e Direttore Sanitario",
      image: "/assets/brand/team/staff-maria-pareja.webp",
    },
    {
      name: "Dott.ssa Cacciabue Paola",
      role: "Odontoiatra specialista in Ortodonzia",
      image: "/assets/brand/team/staff-paola-cacciabue.webp",
    },
    {
      name: "Dott.ssa Dervishi Denisa",
      role: "Odontoiatra generalista",
      image: "/assets/brand/team/staff-denisa-dervishi.webp",
    },
  ],
};

const aboutHero: InternalPageHeroContent = {
  eyebrow: "Quelli che ti aiuteranno ad avere",
  titlePrimary: "Un sorriso che racconta chi sei davvero,",
  titleAccent: "senza parole.",
  lead:
    "Competenze diverse lavorano insieme per offrirti valutazioni chiare, continuità nel percorso e attenzione alla persona.",
  quote:
    "Il nostro compito non è solo eliminare un fastidio, ti restituiamo il piacere di mangiare, la sicurezza di parlare e la libertà di sorridere.",
  breadcrumbs: [homeCrumb, { label: "Chi siamo" }],
  carousel: aboutHeroCarousel,
};

const internalPageHeroes: Record<string, InternalPageHeroContent> = {
  "/attivita/": {
    eyebrow: "Soluzioni per la salute del sorriso",
    titlePrimary: "Il trattamento giusto.",
    titleAccent: "Per tornare a sorridere bene.",
    lead:
      "Partiamo dal problema che vuoi risolvere e costruiamo un percorso comprensibile, dalla prima valutazione ai controlli.",
    breadcrumbs: [homeCrumb, { label: "Trattamenti" }],
  },
  "/attivita/chirurgia-orale/": treatmentHero(
    "Chirurgia orale",
    "Chirurgia orale",
    "Interventi mirati",
    "per la salute della bocca",
    "Estrazioni e piccoli interventi vengono pianificati con attenzione alla sicurezza, al comfort e al recupero.",
    ["Valutazione precisa", "Intervento pianificato", "Indicazioni chiare per il recupero"],
  ),
  "/attivita/endodonzia/": treatmentHero(
    "Endodonzia",
    "Endodonzia",
    "Salvare il dente",
    "dall’interno",
    "La devitalizzazione tratta l’infezione all’interno del dente con l’obiettivo di conservarlo e recuperare la funzione.",
    ["Ridurre dolore e infezione", "Conservare il dente naturale", "Ripristinare la funzione"],
  ),
  "/attivita/estetica-del-sorriso/": treatmentHero(
    "Estetica del sorriso",
    "Estetica del sorriso",
    "Un sorriso",
    "più armonioso",
    "Valutiamo colore, forma e proporzioni per proporti miglioramenti coerenti con il tuo viso e con la salute dei denti.",
    ["Analisi del sorriso", "Risultato naturale", "Soluzioni costruite sul tuo caso"],
  ),
  "/attivita/gnatologia/": treatmentHero(
    "Gnatologia",
    "Gnatologia",
    "Comfort nella mandibola",
    "e nella masticazione",
    "Una valutazione funzionale aiuta a capire dolori mandibolari, tensioni e disturbi legati all’articolazione temporo-mandibolare.",
    ["Ascolto dei sintomi", "Valutazione di funzione e occlusione", "Percorso mirato"],
  ),
  "/attivita/igiene-orale-e-profilassi/": treatmentHero(
    "Igiene orale",
    "Igiene orale e profilassi",
    "Denti puliti",
    "e protetti",
    "Controlli e igiene professionale aiutano a ridurre placca e tartaro e a intercettare per tempo i segnali da non trascurare.",
    ["Pulizia professionale", "Controllo di denti e gengive", "Richiami personalizzati"],
  ),
  "/studio-dentistico-monza-dentista/igiene-orale-e-profilassi/": treatmentHero(
    "Igiene orale",
    "Prevenzione e salute orale",
    "Proteggi denti e gengive.",
    "Previeni prima di curare.",
    "Controlli e igiene professionale aiutano a ridurre placca e tartaro e a intercettare per tempo i segnali da non trascurare.",
    ["Pulizia professionale", "Controllo di denti e gengive", "Richiami personalizzati"],
  ),
  "/attivita/odontoiatria-conservativa/": treatmentHero(
    "Conservativa",
    "Odontoiatria conservativa",
    "Curare e ricostruire",
    "i denti",
    "Interveniamo sulle lesioni del dente cercando di preservare il più possibile struttura naturale, funzione ed estetica.",
    ["Diagnosi della lesione", "Tessuto sano preservato", "Forma e funzione recuperate"],
  ),
  "/attivita/ortodonzia/": treatmentHero(
    "Ortodonzia",
    "Ortodonzia",
    "Denti allineati",
    "e morso equilibrato",
    "Valutiamo occlusione e posizione dei denti per confrontare soluzioni ortodontiche compatibili con età, obiettivi e quotidianità.",
    ["Valutazione ortodontica", "Opzioni anche discrete", "Controlli lungo il percorso"],
  ),
  "/studio-dentistico-monza-dentista/ortodonzia/": treatmentHero(
    "Ortodonzia",
    "Allineamento e funzione",
    "Denti più allineati.",
    "Un sorriso più sicuro.",
    "Valutiamo occlusione e posizione dei denti per confrontare soluzioni ortodontiche compatibili con età, obiettivi e quotidianità.",
    ["Valutazione ortodontica", "Opzioni anche discrete", "Controlli lungo il percorso"],
  ),
  "/attivita/parodontologia/": treatmentHero(
    "Parodontologia",
    "Parodontologia",
    "Gengive sane",
    "e denti stabili",
    "Il controllo dell’infiammazione gengivale aiuta a proteggere i tessuti che sostengono i denti e a mantenere il risultato nel tempo.",
    ["Diagnosi dei tessuti di sostegno", "Controllo dell’infiammazione", "Mantenimento personalizzato"],
  ),
  "/attivita/pedodonzia/": treatmentHero(
    "Pedodonzia",
    "Pedodonzia",
    "Proteggere il sorriso",
    "dei bambini",
    "Prevenzione, cure delicate e comunicazione adatta all’età aiutano i più piccoli a vivere la visita con maggiore serenità.",
    ["Approccio rassicurante", "Prevenzione fin da piccoli", "Indicazioni semplici per la famiglia"],
  ),
  "/chi-siamo/": aboutHero,
  "/chi-siamo-studio-dentistico-monza/": aboutHero,
  "/struttura-studio-dentistico-monza/": {
    eyebrow: "Lo studio a Monza",
    titlePrimary: "Tecnologia e accoglienza.",
    titleAccent: "Uno spazio pensato per te.",
    lead:
      "Ambienti organizzati, strumenti aggiornati e attenzione al comfort accompagnano ogni fase della visita.",
    breadcrumbs: [homeCrumb, { label: "Lo studio" }],
  },
  "/doctors/": {
    eyebrow: "Il nostro team",
    titlePrimary: "Professionisti diversi.",
    titleAccent: "Un’unica cura per il tuo sorriso.",
    lead:
      "Il confronto tra competenze permette di leggere il problema da più punti di vista e costruire un percorso coordinato.",
    breadcrumbs: [homeCrumb, { label: "Équipe" }],
  },
  "/doctors/dr-rohini-joe/": {
    eyebrow: "Conosci il professionista",
    titlePrimary: "Dr. Rohini Joe.",
    titleAccent: "Competenza al servizio del tuo sorriso.",
    lead: "Scopri esperienza, approccio e ruolo all’interno dell’équipe dello studio.",
    breadcrumbs: [homeCrumb, { label: "Équipe", href: "/doctors/" }, { label: "Dr. Rohini Joe" }],
  },
  "/doctors/jacob-jones/": {
    eyebrow: "Conosci il professionista",
    titlePrimary: "Jacob Jones.",
    titleAccent: "Competenza al servizio del tuo sorriso.",
    lead: "Scopri esperienza, approccio e ruolo all’interno dell’équipe dello studio.",
    breadcrumbs: [homeCrumb, { label: "Équipe", href: "/doctors/" }, { label: "Jacob Jones" }],
  },
  "/doctors/jordan-brown/": {
    eyebrow: "Conosci il professionista",
    titlePrimary: "Jordan Brown.",
    titleAccent: "Competenza al servizio del tuo sorriso.",
    lead: "Scopri esperienza, approccio e ruolo all’interno dell’équipe dello studio.",
    breadcrumbs: [homeCrumb, { label: "Équipe", href: "/doctors/" }, { label: "Jordan Brown" }],
  },
  "/doctors/taylor-smith/": {
    eyebrow: "Conosci il professionista",
    titlePrimary: "Taylor Smith.",
    titleAccent: "Competenza al servizio del tuo sorriso.",
    lead: "Scopri esperienza, approccio e ruolo all’interno dell’équipe dello studio.",
    breadcrumbs: [homeCrumb, { label: "Équipe", href: "/doctors/" }, { label: "Taylor Smith" }],
  },
  "/contatti/": {
    eyebrow: "Contatti e indicazioni",
    titlePrimary: "Parliamo del tuo sorriso.",
    titleAccent: "Trova il primo passo giusto.",
    lead:
      "Chiamaci, scrivici o raggiungi lo studio: ti aiutiamo a capire come iniziare e quale visita richiedere.",
    breadcrumbs: [homeCrumb, { label: "Contatti" }],
  },
  "/recensioni-studio-dentistico-monza/": {
    eyebrow: "Le esperienze dei pazienti",
    titlePrimary: "La fiducia si racconta.",
    titleAccent: "Leggi chi ci ha già scelto.",
    lead:
      "Esperienze e opinioni aiutano a conoscere l’accoglienza, l’attenzione e il modo di lavorare dello studio.",
    breadcrumbs: [homeCrumb, { label: "Recensioni" }],
  },
  "/convenzioni-dirette/": {
    eyebrow: "Convenzioni dello studio",
    titlePrimary: "Usa la tua convenzione.",
    titleAccent: "Accedi alle cure con più semplicità.",
    lead:
      "Verifica gli enti convenzionati e chiedi allo studio come vengono gestite autorizzazioni e pratiche.",
    breadcrumbs: [homeCrumb, { label: "Convenzioni", href: "/convenzioni-dirette-studio-dentistico-monza/" }, { label: "Dirette" }],
  },
  "/convenzioni-dirette-studio-dentistico-monza/": {
    eyebrow: "Convenzioni dello studio",
    titlePrimary: "Usa la tua convenzione.",
    titleAccent: "Accedi alle cure con più semplicità.",
    lead:
      "Verifica gli enti convenzionati e chiedi allo studio come vengono gestite autorizzazioni e pratiche.",
    breadcrumbs: [homeCrumb, { label: "Convenzioni dirette" }],
  },
  "/convenzioni-indirette/": {
    eyebrow: "Rimborsi e fondi sanitari",
    titlePrimary: "Richiedi il tuo rimborso.",
    titleAccent: "Segui un percorso più semplice.",
    lead:
      "Consulta gli enti disponibili e chiedi allo studio quali documenti possono accompagnare la richiesta di rimborso.",
    breadcrumbs: [homeCrumb, { label: "Convenzioni", href: "/convenzioni-dirette-studio-dentistico-monza/" }, { label: "Indirette" }],
  },
  "/faqs/": {
    eyebrow: "Risposte semplici e trasparenti",
    titlePrimary: "Hai un dubbio?",
    titleAccent: "Trova subito una risposta chiara.",
    lead:
      "Abbiamo raccolto le domande più frequenti su visite, trattamenti e organizzazione dello studio.",
    breadcrumbs: [homeCrumb, { label: "Domande frequenti" }],
  },
  "/privacy-policy/": {
    eyebrow: "Privacy e trasparenza",
    titlePrimary: "I tuoi dati.",
    titleAccent: "Protetti con trasparenza.",
    lead: "Qui trovi le informazioni sul trattamento dei dati personali e sui tuoi diritti.",
    breadcrumbs: [homeCrumb, { label: "Privacy policy" }],
  },
  "/cookie-policy/": {
    eyebrow: "Preferenze e trasparenza",
    titlePrimary: "Cookie e preferenze.",
    titleAccent: "Scegli in modo consapevole.",
    lead: "Consulta le informazioni sui cookie utilizzati dal sito e sulla gestione delle preferenze.",
    breadcrumbs: [homeCrumb, { label: "Cookie policy" }],
  },
};

const labelFromPath = (pathname: string) => {
  const slug = pathname.split("/").filter(Boolean).at(-1) ?? "Pagina";

  return slug
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const getInternalPageHero = (
  pathname: string,
  fallbackTitle?: string,
): InternalPageHeroContent => {
  const configured = internalPageHeroes[pathname];
  if (configured) return configured;

  const label = fallbackTitle?.split("|")[0].trim() || labelFromPath(pathname);

  return {
    eyebrow: "Studio Dentistico Sorriso & Salute",
    titlePrimary: `${label}.`,
    titleAccent: "Informazioni chiare, subito.",
    lead:
      "Trova in questa pagina le informazioni essenziali e i prossimi passi utili per orientarti.",
    breadcrumbs: [homeCrumb, { label }],
  };
};
