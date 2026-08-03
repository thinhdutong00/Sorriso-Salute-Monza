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

export interface PrimaryTreatmentMenuLink {
  href: string;
  label: string;
  technicalLabel: string;
  image: string;
  imageAlt: string;
}

export const primaryTreatmentMenuLinks: PrimaryTreatmentMenuLink[] = [
  {
    href: "/attivita/igiene-orale-e-profilassi/",
    label: "Denti puliti e protetti",
    technicalLabel: "Igiene orale e profilassi",
    image: "/assets/brand/igiene-orale-manipolo-v4.jpg",
    imageAlt: "Manipolo professionale per l'igiene e la pulizia dentale",
  },
  {
    href: "/attivita/odontoiatria-conservativa/",
    label: "Curare e ricostruire i denti",
    technicalLabel: "Odontoiatria conservativa",
    image: "/mirror-assets/936aa37f5650fe50.jpg",
    imageAlt: "Restauro conservativo del dente",
  },
  {
    href: "/attivita/endodonzia/",
    label: "Salvare il dente dall’interno",
    technicalLabel: "Endodonzia",
    image: "/assets/brand/endodonzia-root-canal.png",
    imageAlt: "Trattamento endodontico canalare",
  },
  {
    href: "/attivita/parodontologia/",
    label: "Gengive sane e denti stabili",
    technicalLabel: "Parodontologia",
    image: "/mirror-assets/598a95ac622e41af.jpg",
    imageAlt: "Valutazione parodontale",
  },
  {
    href: "/protesi-dentale/",
    label: "Ritrovare sorriso e masticazione",
    technicalLabel: "Protesi dentale",
    image: "/assets/brand/dental-cad-monitor.png",
    imageAlt: "Progettazione digitale di una protesi dentale",
  },
  {
    href: "/implantologia/",
    label: "Sostituire i denti mancanti",
    technicalLabel: "Impianti dentali",
    image: "/assets/brand/implantologia-dental-implant.png",
    imageAlt: "Impianto dentale in titanio",
  },
  {
    href: "/attivita/estetica-del-sorriso/",
    label: "Un sorriso più armonioso",
    technicalLabel: "Estetica del sorriso",
    image: "/assets/generated/esthetic-smile-natural.jpg",
    imageAlt: "Valutazione estetica del sorriso allo specchio",
  },
  {
    href: "/attivita/ortodonzia/",
    label: "Denti allineati e morso equilibrato",
    technicalLabel: "Ortodonzia",
    image: "/assets/brand/ortodonzia-allineatore.jpg",
    imageAlt: "Allineatore trasparente per trattamento ortodontico",
  },
  {
    href: "/attivita/gnatologia/",
    label: "Comfort nella mandibola e nella masticazione",
    technicalLabel: "Gnatologia",
    image: "/assets/brand/gnatologia-modelli-arcate-v3.jpg",
    imageAlt: "Modelli delle arcate dentali per analizzare il morso",
  },
  {
    href: "/attivita/chirurgia-orale/",
    label: "Interventi mirati per la salute della bocca",
    technicalLabel: "Chirurgia orale",
    image: "/assets/brand/chirurgia-orale-equipe.jpg",
    imageAlt: "Equipe odontoiatrica durante un intervento di chirurgia orale",
  },
  {
    href: "/attivita/pedodonzia/",
    label: "Proteggere il sorriso dei bambini",
    technicalLabel: "Pedodonzia",
    image: "/mirror-assets/0b18b64a0ee4eb07.jpg",
    imageAlt: "Odontoiatria dedicata ai bambini",
  },
];

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
