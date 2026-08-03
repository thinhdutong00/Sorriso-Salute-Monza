import type { TreatmentCategoryId } from "./categoryTreatments";

export type GeneralRequestSecondStepProfileId =
  | "generic-duration"
  | "igiene-last-appointment"
  | "conservativa-duration"
  | "endodonzia-duration"
  | "parodontologia-duration"
  | "protesi-current-situation"
  | "implantologia-missing-tooth-duration"
  | "implantologia-tooth-presence"
  | "implantologia-bone-evaluation"
  | "estetica-previous-treatment"
  | "ortodonzia-previous-evaluation"
  | "gnatologia-duration"
  | "chirurgia-previous-evaluation"
  | "pedodonzia-first-visit"
  | "trauma-timing"
  | "parodontologia-last-check"
  | "implantologia-last-check"
  | "protesi-instability-duration"
  | "ortodonzia-current-appliance";

export interface GeneralRequestSecondStepProfile {
  id: GeneralRequestSecondStepProfileId;
  eyebrow: string;
  question: string;
  ariaLabel: string;
  summaryLabel: string;
  validationMessage: string;
  options: readonly string[];
  isDuration: boolean;
}

type TreatmentPresetId = `${TreatmentCategoryId}--${string}`;

const durationOptions = [
  "Da pochi giorni",
  "Da settimane",
  "Da mesi / anni",
] as const;

const previousAppointmentOptions = [
  "Meno di 6 mesi fa",
  "Tra 6 e 12 mesi fa",
  "Più di 12 mesi fa",
  "Non l’ho mai effettuata / non ricordo",
] as const;

const previousCheckOptions = [
  "Meno di 6 mesi fa",
  "Tra 6 e 12 mesi fa",
  "Più di 12 mesi fa",
  "Non l’ho mai effettuato / non ricordo",
] as const;

export const generalRequestFallbackSecondStepProfileId: GeneralRequestSecondStepProfileId =
  "generic-duration";

export const generalRequestSecondStepProfiles: Readonly<
  Record<GeneralRequestSecondStepProfileId, GeneralRequestSecondStepProfile>
> = Object.freeze({
  "generic-duration": {
    id: "generic-duration",
    eyebrow: "Durata del problema",
    question: "Da quanto tempo hai questo problema?",
    ariaLabel: "Seleziona da quanto tempo è presente il problema",
    summaryLabel: "Durata del problema",
    validationMessage: "Indica da quanto tempo hai questo problema.",
    options: durationOptions,
    isDuration: true,
  },
  "igiene-last-appointment": {
    id: "igiene-last-appointment",
    eyebrow: "Igiene orale",
    question: "Quando hai effettuato l’ultima igiene orale professionale?",
    ariaLabel: "Seleziona quando hai effettuato l’ultima igiene orale professionale",
    summaryLabel: "Ultima igiene professionale",
    validationMessage: "Indica quando hai effettuato l’ultima igiene orale professionale.",
    options: previousAppointmentOptions,
    isDuration: false,
  },
  "conservativa-duration": {
    id: "conservativa-duration",
    eyebrow: "Situazione del dente",
    question: "Da quanto tempo hai notato il problema al dente?",
    ariaLabel: "Seleziona da quanto tempo hai notato il problema al dente",
    summaryLabel: "Durata del problema al dente",
    validationMessage: "Indica da quanto tempo hai notato il problema al dente.",
    options: [...durationOptions, "Non ho sintomi, vorrei una valutazione"],
    isDuration: true,
  },
  "endodonzia-duration": {
    id: "endodonzia-duration",
    eyebrow: "Dolore o fastidio",
    question: "Da quanto tempo avverti dolore o fastidio al dente?",
    ariaLabel: "Seleziona da quanto tempo avverti dolore o fastidio al dente",
    summaryLabel: "Durata del dolore o fastidio",
    validationMessage: "Indica da quanto tempo avverti dolore o fastidio al dente.",
    options: [...durationOptions, "Non ho dolore, vorrei una valutazione"],
    isDuration: true,
  },
  "parodontologia-duration": {
    id: "parodontologia-duration",
    eyebrow: "Salute delle gengive",
    question: "Da quanto tempo noti problemi alle gengive?",
    ariaLabel: "Seleziona da quanto tempo noti problemi alle gengive",
    summaryLabel: "Durata dei problemi alle gengive",
    validationMessage: "Indica da quanto tempo noti problemi alle gengive.",
    options: [...durationOptions, "Non ho sintomi, vorrei un controllo"],
    isDuration: true,
  },
  "protesi-current-situation": {
    id: "protesi-current-situation",
    eyebrow: "Situazione attuale",
    question: "Hai già una protesi, una corona o un ponte nella zona interessata?",
    ariaLabel: "Seleziona la situazione attuale della protesi, della corona o del ponte",
    summaryLabel: "Situazione protesica attuale",
    validationMessage: "Indica la situazione attuale della protesi, della corona o del ponte.",
    options: [
      "No, è una prima valutazione",
      "Sì, vorrei controllarla",
      "Sì, si muove o dà fastidio",
      "Sì, è danneggiata",
    ],
    isDuration: false,
  },
  "implantologia-missing-tooth-duration": {
    id: "implantologia-missing-tooth-duration",
    eyebrow: "Situazione dei denti",
    question: "Da quanto tempo manca il dente o i denti da sostituire?",
    ariaLabel: "Seleziona da quanto tempo manca il dente o i denti da sostituire",
    summaryLabel: "Tempo dalla perdita del dente",
    validationMessage: "Indica da quanto tempo manca il dente o i denti da sostituire.",
    options: [
      "Da meno di 3 mesi",
      "Da 3 a 12 mesi",
      "Da più di un anno",
      "Il dente è ancora presente / deve essere estratto",
    ],
    isDuration: true,
  },
  "implantologia-tooth-presence": {
    id: "implantologia-tooth-presence",
    eyebrow: "Situazione dei denti",
    question: "Il dente o i denti da sostituire sono ancora presenti?",
    ariaLabel: "Indica se il dente o i denti da sostituire sono ancora presenti",
    summaryLabel: "Presenza dei denti da sostituire",
    validationMessage: "Indica se il dente o i denti da sostituire sono ancora presenti.",
    options: [
      "Sì",
      "No, sono stati estratti recentemente",
      "No, mancano da più tempo",
      "Non sono sicuro",
    ],
    isDuration: false,
  },
  "implantologia-bone-evaluation": {
    id: "implantologia-bone-evaluation",
    eyebrow: "Valutazione dell’osso",
    question: "Ti è già stato detto che potrebbe esserci poco osso?",
    ariaLabel: "Indica se ti è già stato detto che potrebbe esserci poco osso",
    summaryLabel: "Valutazione ossea precedente",
    validationMessage: "Indica se ti è già stato detto che potrebbe esserci poco osso.",
    options: [
      "Sì, dopo una visita",
      "Sì, dopo una TAC o un esame 3D",
      "No",
      "Non sono sicuro",
    ],
    isDuration: false,
  },
  "estetica-previous-treatment": {
    id: "estetica-previous-treatment",
    eyebrow: "Trattamenti precedenti",
    question: "Hai già effettuato trattamenti estetici sui denti interessati?",
    ariaLabel: "Indica se hai già effettuato trattamenti estetici sui denti interessati",
    summaryLabel: "Trattamenti estetici precedenti",
    validationMessage: "Indica se hai già effettuato trattamenti estetici sui denti interessati.",
    options: [
      "No, è la prima volta",
      "Sì, nell’ultimo anno",
      "Sì, più di un anno fa",
      "Non ricordo / non sono sicuro",
    ],
    isDuration: false,
  },
  "ortodonzia-previous-evaluation": {
    id: "ortodonzia-previous-evaluation",
    eyebrow: "Valutazione ortodontica",
    question: "Hai già effettuato una valutazione ortodontica?",
    ariaLabel: "Indica se hai già effettuato una valutazione ortodontica",
    summaryLabel: "Valutazione ortodontica precedente",
    validationMessage: "Indica se hai già effettuato una valutazione ortodontica.",
    options: [
      "No, sarebbe la prima valutazione",
      "Sì, nell’ultimo anno",
      "Sì, più di un anno fa",
      "Sono già in trattamento / porto un apparecchio",
    ],
    isDuration: false,
  },
  "gnatologia-duration": {
    id: "gnatologia-duration",
    eyebrow: "Mandibola e masticazione",
    question: "Da quanto tempo avverti fastidio alla mandibola o serri i denti?",
    ariaLabel: "Seleziona da quanto tempo avverti fastidio alla mandibola o serri i denti",
    summaryLabel: "Durata del fastidio",
    validationMessage: "Indica da quanto tempo avverti fastidio alla mandibola o serri i denti.",
    options: [...durationOptions, "Non ho dolore, vorrei una valutazione"],
    isDuration: true,
  },
  "chirurgia-previous-evaluation": {
    id: "chirurgia-previous-evaluation",
    eyebrow: "Valutazione precedente",
    question: "La situazione è già stata valutata da un dentista?",
    ariaLabel: "Indica se la situazione è già stata valutata da un dentista",
    summaryLabel: "Valutazione precedente",
    validationMessage: "Indica se la situazione è già stata valutata da un dentista.",
    options: [
      "No, è la prima valutazione",
      "Sì, con una visita",
      "Sì, con radiografia o altri esami",
      "Sì, ho già ricevuto un’indicazione al trattamento",
    ],
    isDuration: false,
  },
  "pedodonzia-first-visit": {
    id: "pedodonzia-first-visit",
    eyebrow: "Visite del bambino",
    question: "È la prima visita odontoiatrica del bambino?",
    ariaLabel: "Indica se è la prima visita odontoiatrica del bambino",
    summaryLabel: "Visite odontoiatriche del bambino",
    validationMessage: "Indica se è la prima visita odontoiatrica del bambino.",
    options: [
      "Sì, è la prima visita",
      "No, l’ultima visita è stata meno di 6 mesi fa",
      "No, tra 6 e 12 mesi fa",
      "No, più di 12 mesi fa / non ricordo",
    ],
    isDuration: false,
  },
  "trauma-timing": {
    id: "trauma-timing",
    eyebrow: "Momento del trauma",
    question: "Quando è avvenuto il trauma?",
    ariaLabel: "Seleziona quando è avvenuto il trauma",
    summaryLabel: "Momento del trauma",
    validationMessage: "Indica quando è avvenuto il trauma.",
    options: [
      "Oggi",
      "Negli ultimi 2–3 giorni",
      "Da più di 3 giorni",
      "Non ricordo con precisione",
    ],
    isDuration: false,
  },
  "parodontologia-last-check": {
    id: "parodontologia-last-check",
    eyebrow: "Controllo parodontale",
    question: "Quando hai effettuato l’ultimo controllo parodontale?",
    ariaLabel: "Seleziona quando hai effettuato l’ultimo controllo parodontale",
    summaryLabel: "Ultimo controllo parodontale",
    validationMessage: "Indica quando hai effettuato l’ultimo controllo parodontale.",
    options: previousCheckOptions,
    isDuration: false,
  },
  "implantologia-last-check": {
    id: "implantologia-last-check",
    eyebrow: "Controllo degli impianti",
    question: "Quando hai effettuato l’ultimo controllo degli impianti?",
    ariaLabel: "Seleziona quando hai effettuato l’ultimo controllo degli impianti",
    summaryLabel: "Ultimo controllo degli impianti",
    validationMessage: "Indica quando hai effettuato l’ultimo controllo degli impianti.",
    options: previousCheckOptions,
    isDuration: false,
  },
  "protesi-instability-duration": {
    id: "protesi-instability-duration",
    eyebrow: "Stabilità della protesi",
    question: "Da quanto tempo la protesi si muove o dà fastidio?",
    ariaLabel: "Seleziona da quanto tempo la protesi si muove o dà fastidio",
    summaryLabel: "Durata dell’instabilità della protesi",
    validationMessage: "Indica da quanto tempo la protesi si muove o dà fastidio.",
    options: durationOptions,
    isDuration: true,
  },
  "ortodonzia-current-appliance": {
    id: "ortodonzia-current-appliance",
    eyebrow: "Situazione ortodontica",
    question: "Stai già utilizzando un apparecchio o una contenzione?",
    ariaLabel: "Indica se stai già utilizzando un apparecchio o una contenzione",
    summaryLabel: "Situazione ortodontica attuale",
    validationMessage: "Indica se stai già utilizzando un apparecchio o una contenzione.",
    options: [
      "Sì, un apparecchio fisso",
      "Sì, un apparecchio mobile o allineatori",
      "Sì, una contenzione",
      "No",
    ],
    isDuration: false,
  },
});

export const generalRequestServiceSecondStepProfiles: Readonly<
  Record<TreatmentCategoryId, GeneralRequestSecondStepProfileId>
> = Object.freeze({
  "igiene-orale-e-profilassi": "igiene-last-appointment",
  "odontoiatria-conservativa": "conservativa-duration",
  endodonzia: "endodonzia-duration",
  parodontologia: "parodontologia-duration",
  "protesi-dentale": "protesi-current-situation",
  implantologia: "implantologia-missing-tooth-duration",
  "estetica-del-sorriso": "estetica-previous-treatment",
  ortodonzia: "ortodonzia-previous-evaluation",
  gnatologia: "gnatologia-duration",
  "chirurgia-orale": "chirurgia-previous-evaluation",
  pedodonzia: "pedodonzia-first-visit",
});

export const generalRequestTreatmentSecondStepOverrides: Readonly<
  Partial<Record<TreatmentPresetId, GeneralRequestSecondStepProfileId>>
> = Object.freeze({
  "odontoiatria-conservativa--ricostruzione-di-denti-scheggiati": "trauma-timing",
  "odontoiatria-conservativa--ricostruzione-di-denti-fratturati": "trauma-timing",
  "odontoiatria-conservativa--ricostruzione-di-denti-danneggiati-da-traumi":
    "trauma-timing",
  "pedodonzia--gestione-dei-traumi-dentali-nei-bambini": "trauma-timing",
  "parodontologia--controlli-parodontali": "parodontologia-last-check",
  "parodontologia--terapia-parodontale-di-supporto": "parodontologia-last-check",
  "parodontologia--sedute-periodiche-di-mantenimento": "parodontologia-last-check",
  "implantologia--carico-immediato": "implantologia-tooth-presence",
  "implantologia--soluzioni-in-caso-di-poco-osso": "implantologia-bone-evaluation",
  "implantologia--controlli-degli-impianti": "implantologia-last-check",
  "implantologia--igiene-e-mantenimento-degli-impianti": "implantologia-last-check",
  "implantologia--manutenzione-delle-protesi-su-impianti": "implantologia-last-check",
  "protesi-dentale--stabilizzazione-della-protesi-mobile": "protesi-instability-duration",
  "implantologia--stabilizzare-una-protesi-mobile": "protesi-instability-duration",
  "ortodonzia--contenzione-mobile": "ortodonzia-current-appliance",
  "ortodonzia--contenzione-fissa": "ortodonzia-current-appliance",
  "ortodonzia--controlli-ortodontici": "ortodonzia-current-appliance",
});
