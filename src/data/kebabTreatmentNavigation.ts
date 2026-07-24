import { implantologiaMenuLinks, protesiDentaleMenuLink } from "./implantologiaNavigation";

export interface KebabTreatmentLink {
  kind: "link";
  id:
    | "hygiene"
    | "periodontics"
    | "restorative"
    | "endodontics"
    | "prosthetics"
    | "aesthetics"
    | "orthodontics"
    | "oral-surgery"
    | "gnathology"
    | "pediatric-dentistry";
  href: string;
  label: string;
  description: string;
}

export interface KebabImplantologyGroup {
  kind: "implantology";
  id: "dental-implants";
  label: string;
  description: string;
  children: Array<{ href: string; label: string }>;
}

export interface KebabTreatmentCategory {
  id:
    | "prevention-gums"
    | "tooth-recovery"
    | "missing-teeth"
    | "aesthetics-alignment"
    | "oral-surgery"
    | "jaw-chewing"
    | "children";
  label: string;
  items: Array<KebabTreatmentLink | KebabImplantologyGroup>;
}

export const kebabAllTreatmentsLink = {
  href: "/attivita/",
  label: "Tutti i trattamenti",
  description: "Scopri tutti i trattamenti",
};

const kebabImplantologyOrder = [
  "/implantologia/",
  "/implantologia/impianto-singolo/",
  "/implantologia/ponte-su-impianti/",
  "/implantologia/denti-fissi/",
  "/implantologia/protesi-instabile/",
  "/implantologia/carico-immediato/",
  "/implantologia/poco-osso/",
  "/implantologia/manutenzione-impianti/",
] as const;

const implantologyLinkByHref = new Map(
  implantologiaMenuLinks.map((link) => [link.href, link] as const),
);

export const kebabImplantologyMenuLinks = kebabImplantologyOrder.map((href) => {
  const link = implantologyLinkByHref.get(href);

  if (!link) {
    throw new Error(`Missing implantology navigation link for ${href}`);
  }

  return {
    ...link,
    label: href === "/implantologia/carico-immediato/" ? "Impianti a carico immediato" : link.label,
  };
});

export const kebabTreatmentCategories: KebabTreatmentCategory[] = [
  {
    id: "prevention-gums",
    label: "Prevenzione e gengive",
    items: [
      {
        kind: "link",
        id: "hygiene",
        href: "/attivita/igiene-orale-e-profilassi/",
        label: "Igiene orale e prevenzione",
        description: "Pulizia e prevenzione",
      },
      {
        kind: "link",
        id: "periodontics",
        href: "/attivita/parodontologia/",
        label: "Gengive e parodontite",
        description: "Cura gengive e sostegno dei denti",
      },
    ],
  },
  {
    id: "tooth-recovery",
    label: "Cura e recupero del dente",
    items: [
      {
        kind: "link",
        id: "restorative",
        href: "/attivita/odontoiatria-conservativa/",
        label: "Carie, otturazioni e ricostruzioni",
        description: "Cura carie e denti danneggiati",
      },
      {
        kind: "link",
        id: "endodontics",
        href: "/attivita/endodonzia/",
        label: "Devitalizzazione e recupero del dente",
        description: "Devitalizza e salva il dente",
      },
    ],
  },
  {
    id: "missing-teeth",
    label: "Denti mancanti",
    items: [
      {
        kind: "implantology",
        id: "dental-implants",
        label: "Impianti dentali",
        description: "Denti fissi su impianti",
        children: kebabImplantologyMenuLinks,
      },
      {
        kind: "link",
        id: "prosthetics",
        href: protesiDentaleMenuLink.href,
        label: "Protesi e denti mancanti",
        description: "Sostituisce i denti mancanti",
      },
    ],
  },
  {
    id: "aesthetics-alignment",
    label: "Estetica e allineamento",
    items: [
      {
        kind: "link",
        id: "aesthetics",
        href: "/attivita/estetica-del-sorriso/",
        label: "Estetica del sorriso",
        description: "Migliora forma e colore dei denti",
      },
      {
        kind: "link",
        id: "orthodontics",
        href: "/attivita/ortodonzia/",
        label: "Apparecchi e allineatori",
        description: "Allinea i denti",
      },
    ],
  },
  {
    id: "oral-surgery",
    label: "Chirurgia orale",
    items: [
      {
        kind: "link",
        id: "oral-surgery",
        href: "/attivita/chirurgia-orale/",
        label: "Chirurgia orale ed estrazioni",
        description: "Estrazioni e piccoli interventi",
      },
    ],
  },
  {
    id: "jaw-chewing",
    label: "Mandibola e masticazione",
    items: [
      {
        kind: "link",
        id: "gnathology",
        href: "/attivita/gnatologia/",
        label: "Bruxismo, mandibola e masticazione",
        description: "Cura mandibola e masticazione",
      },
    ],
  },
  {
    id: "children",
    label: "Bambini e ragazzi",
    items: [
      {
        kind: "link",
        id: "pediatric-dentistry",
        href: "/attivita/pedodonzia/",
        label: "Dentista per bambini",
        description: "Cure dentali per bambini",
      },
    ],
  },
];
