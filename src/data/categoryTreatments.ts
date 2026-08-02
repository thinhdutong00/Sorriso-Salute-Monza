export type TreatmentCategoryId =
  | "igiene-orale-e-profilassi"
  | "odontoiatria-conservativa"
  | "endodonzia"
  | "parodontologia"
  | "protesi-dentale"
  | "implantologia"
  | "estetica-del-sorriso"
  | "ortodonzia"
  | "gnatologia"
  | "chirurgia-orale"
  | "pedodonzia";

export interface GeneralRequestServiceOption {
  slug: TreatmentCategoryId;
  label: string;
  displayLabel: string;
  group: string;
  order: number;
}

export interface CategoryTreatmentItem {
  id: string;
  label: string;
  description: string;
  categoryId: TreatmentCategoryId;
  specificTreatmentValue: string;
  internalHref?: string;
}

export interface CategoryTreatmentGroup {
  title: string;
  items: readonly CategoryTreatmentItem[];
}

export interface CategoryTreatmentsData {
  id: TreatmentCategoryId;
  formService: GeneralRequestServiceOption;
  eyebrow: string;
  title: string;
  description?: string;
  groups: readonly CategoryTreatmentGroup[];
  sectionId: string;
}

export interface TreatmentFormPreset {
  treatmentId: string;
  categoryId: TreatmentCategoryId;
  serviceSlug: TreatmentCategoryId;
  specificTreatmentValue: string;
}

type TreatmentFactory = (
  localId: string,
  label: string,
  description: string,
  internalHref?: string,
) => CategoryTreatmentItem;

const treatmentFor = (categoryId: TreatmentCategoryId): TreatmentFactory =>
  (localId, label, description, internalHref) => ({
    id: `${categoryId}--${localId}`,
    label,
    description,
    categoryId,
    specificTreatmentValue: label,
    ...(internalHref ? { internalHref } : {}),
  });

const service = (
  slug: TreatmentCategoryId,
  label: string,
  displayLabel: string,
  group: string,
  order: number,
): GeneralRequestServiceOption => ({ slug, label, displayLabel, group, order });

const igiene = treatmentFor("igiene-orale-e-profilassi");
const conservativa = treatmentFor("odontoiatria-conservativa");
const endodonzia = treatmentFor("endodonzia");
const parodontologia = treatmentFor("parodontologia");
const protesi = treatmentFor("protesi-dentale");
const implantologia = treatmentFor("implantologia");
const estetica = treatmentFor("estetica-del-sorriso");
const ortodonzia = treatmentFor("ortodonzia");
const gnatologia = treatmentFor("gnatologia");
const chirurgia = treatmentFor("chirurgia-orale");
const pedodonzia = treatmentFor("pedodonzia");

export const categoryTreatmentsByPath: Readonly<Record<string, CategoryTreatmentsData>> = {
  "/attivita/igiene-orale-e-profilassi/": {
    id: "igiene-orale-e-profilassi",
    formService: service(
      "igiene-orale-e-profilassi",
      "Igiene orale e profilassi",
      "Pulizia dei denti e prevenzione",
      "igiene",
      1,
    ),
    eyebrow: "I trattamenti",
    title: "Prevenzione e cura quotidiana del sorriso",
    description:
      "Trattamenti e controlli pensati per mantenere denti e gengive puliti, sani e protetti nel tempo.",
    sectionId: "trattamenti-igiene-orale",
    groups: [
      {
        title: "Igiene professionale",
        items: [
          igiene(
            "igiene-orale-professionale",
            "Igiene orale professionale",
            "La seduta rimuove i depositi accumulati su denti e gengive con strumenti scelti in base alle condizioni della bocca.",
          ),
          igiene(
            "rimozione-di-placca-e-tartaro",
            "Rimozione di placca e tartaro",
            "Il trattamento elimina placca e tartaro dalle superfici dentali, comprese le aree difficili da raggiungere con l’igiene quotidiana.",
          ),
          igiene(
            "lucidatura-dei-denti",
            "Lucidatura dei denti",
            "La lucidatura leviga delicatamente le superfici dentali dopo la pulizia professionale e riduce la ritenzione di nuovi depositi.",
          ),
          igiene(
            "rimozione-delle-macchie-superficiali",
            "Rimozione delle macchie superficiali",
            "La procedura attenua le pigmentazioni esterne causate, per esempio, da caffè, tè o fumo senza modificare il colore naturale del dente.",
          ),
          igiene(
            "istruzioni-per-l-igiene-orale-domiciliare",
            "Istruzioni per l’igiene orale domiciliare",
            "Il professionista indica tecniche e strumenti adatti per pulire denti, spazi interdentali e gengive nella routine quotidiana.",
          ),
        ],
      },
      {
        title: "Prevenzione e controlli",
        items: [
          igiene(
            "controlli-periodici",
            "Controlli periodici",
            "Le visite periodiche permettono di monitorare denti e gengive e di valutare precocemente eventuali cambiamenti clinici.",
          ),
          igiene(
            "programmi-di-richiamo-personalizzati",
            "Programmi di richiamo personalizzati",
            "La frequenza dei controlli e delle sedute di igiene viene definita in base alle condizioni della bocca e ai fattori di rischio individuali.",
          ),
          igiene(
            "fluoroprofilassi",
            "Fluoroprofilassi",
            "L’applicazione professionale di fluoro può sostenere la resistenza dello smalto e viene proposta quando indicata dalla valutazione clinica.",
          ),
          igiene(
            "sigillature-dei-solchi-dentali",
            "Sigillature dei solchi dentali",
            "Un materiale protettivo viene applicato nei solchi dei denti posteriori per renderli più facili da pulire e ridurre il rischio di carie.",
          ),
        ],
      },
    ],
  },
  "/attivita/odontoiatria-conservativa/": {
    id: "odontoiatria-conservativa",
    formService: service(
      "odontoiatria-conservativa",
      "Conservativa",
      "Carie, otturazione o dente danneggiato",
      "conservativa",
      2,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per curare e ricostruire i denti",
    description:
      "Soluzioni conservative per recuperare denti danneggiati dalla carie, da una frattura o da un trauma.",
    sectionId: "trattamenti-odontoiatria-conservativa",
    groups: [
      {
        title: "Cura della carie",
        items: [
          conservativa(
            "cura-della-carie",
            "Cura della carie",
            "Il tessuto dentale danneggiato viene rimosso e il dente viene ricostruito, preservando quanto più possibile la struttura sana.",
          ),
          conservativa(
            "otturazioni-dentali",
            "Otturazioni dentali",
            "L’otturazione ripristina forma e funzione della parte di dente interessata da carie o da una piccola perdita di tessuto.",
          ),
          conservativa(
            "otturazioni-estetiche-in-composito",
            "Otturazioni estetiche in composito",
            "Il restauro utilizza una resina composita scelta in una tonalità compatibile con il colore del dente naturale.",
          ),
          conservativa(
            "sostituzione-di-vecchie-otturazioni",
            "Sostituzione di vecchie otturazioni",
            "Un’otturazione usurata o non più adeguata viene rimossa e sostituita dopo aver valutato il tessuto dentale sottostante.",
          ),
        ],
      },
      {
        title: "Ricostruzione del dente",
        items: [
          conservativa(
            "ricostruzioni-dentali",
            "Ricostruzioni dentali",
            "La ricostruzione ripristina la parte di dente perduta con una tecnica e un materiale scelti in base all’estensione del danno.",
          ),
          conservativa(
            "ricostruzione-di-denti-scheggiati",
            "Ricostruzione di denti scheggiati",
            "La porzione scheggiata viene ricreata per recuperare un profilo regolare e una funzione compatibile con il morso.",
          ),
          conservativa(
            "ricostruzione-di-denti-fratturati",
            "Ricostruzione di denti fratturati",
            "Dopo aver verificato profondità e stabilità della frattura, il dente viene ricostruito con la soluzione conservativa più adatta.",
          ),
          conservativa(
            "ricostruzione-di-denti-danneggiati-da-traumi",
            "Ricostruzione di denti danneggiati da traumi",
            "Il trattamento recupera i tessuti persi a seguito di un trauma, dopo una valutazione della polpa, della radice e dei tessuti circostanti.",
          ),
          conservativa(
            "intarsi-dentali",
            "Intarsi dentali",
            "L’intarsio è un restauro realizzato fuori dalla bocca e applicato sul dente quando una ricostruzione diretta non è indicata.",
          ),
          conservativa(
            "intarsi-in-composito",
            "Intarsi in composito",
            "L’intarsio in composito ricostruisce porzioni estese del dente con un materiale resinoso preparato su misura.",
          ),
          conservativa(
            "intarsi-in-ceramica",
            "Intarsi in ceramica",
            "L’intarsio in ceramica è progettato su misura per ripristinare forma, contatti e superficie masticatoria del dente.",
          ),
          conservativa(
            "restauri-diretti",
            "Restauri diretti",
            "Il materiale da restauro viene modellato direttamente sul dente durante la seduta per ricostruire una perdita di tessuto contenuta.",
          ),
          conservativa(
            "restauri-indiretti",
            "Restauri indiretti",
            "Il restauro viene progettato e realizzato su misura prima di essere fissato al dente, quando serve una ricostruzione più estesa.",
          ),
        ],
      },
    ],
  },
  "/attivita/endodonzia/": {
    id: "endodonzia",
    formService: service(
      "endodonzia",
      "Endodonzia",
      "Dolore al dente o devitalizzazione",
      "conservativa",
      4,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per curare il dente dall’interno",
    description:
      "Percorsi dedicati alla cura della polpa e dei canali radicolari, con l’obiettivo di conservare il dente naturale quando possibile.",
    sectionId: "trattamenti-endodonzia",
    groups: [
      {
        title: "Trattamenti canalari",
        items: [
          endodonzia(
            "devitalizzazione",
            "Devitalizzazione",
            "La procedura rimuove la polpa infiammata o non vitale, deterge i canali radicolari e li sigilla per conservare il dente quando possibile.",
          ),
          endodonzia(
            "trattamento-canalare",
            "Trattamento canalare",
            "I canali interni del dente vengono sagomati, disinfettati e sigillati dopo aver valutato anatomia e condizioni dei tessuti.",
          ),
          endodonzia(
            "cura-delle-infezioni-interne-del-dente",
            "Cura delle infezioni interne del dente",
            "Il trattamento interviene sui canali contaminati per ridurre la carica batterica e gestire l’infiammazione dei tessuti circostanti.",
          ),
          endodonzia(
            "trattamento-della-necrosi-pulpare",
            "Trattamento della necrosi pulpare",
            "Quando la polpa non è più vitale, i canali vengono detersi e sigillati per limitare la diffusione dell’infezione.",
          ),
          endodonzia(
            "ritrattamento-canalare",
            "Ritrattamento canalare",
            "Un precedente trattamento viene riaperto, rivalutato e ripetuto quando persistono o ricompaiono problemi all’interno dei canali.",
          ),
        ],
      },
      {
        title: "Trattamenti complessi",
        items: [
          endodonzia(
            "cura-del-granuloma-dentale",
            "Cura del granuloma dentale",
            "La lesione attorno alla radice viene gestita trattando la causa endodontica e monitorando nel tempo la risposta dei tessuti.",
          ),
          endodonzia(
            "apicectomia",
            "Apicectomia",
            "L’intervento rimuove la parte terminale della radice e il tessuto infiammatorio associato quando il solo accesso canalare non è sufficiente.",
          ),
          endodonzia(
            "chirurgia-endodontica",
            "Chirurgia endodontica",
            "La chirurgia consente di raggiungere la radice dall’esterno per trattare problemi non risolvibili attraverso il canale dentale.",
          ),
          endodonzia(
            "trattamento-dei-canali-calcificati",
            "Trattamento dei canali calcificati",
            "Canali molto stretti o parzialmente obliterati vengono individuati e trattati con tecniche dedicate, compatibilmente con l’anatomia del dente.",
          ),
          endodonzia(
            "rimozione-di-strumenti-fratturati-nel-canale",
            "Rimozione di strumenti fratturati nel canale",
            "Si valuta se recuperare o superare il frammento presente nel canale, considerando posizione, accessibilità e sicurezza per la radice.",
          ),
          endodonzia(
            "chiusura-delle-perforazioni-radicolari",
            "Chiusura delle perforazioni radicolari",
            "La comunicazione anomala nella radice viene sigillata con materiali specifici dopo aver controllato e deterso l’area interessata.",
          ),
        ],
      },
    ],
  },
  "/attivita/parodontologia/": {
    id: "parodontologia",
    formService: service(
      "parodontologia",
      "Parodontologia",
      "Gengive che sanguinano o denti che si muovono",
      "parodontologia",
      3,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per gengive sane e denti stabili",
    description:
      "Soluzioni dedicate alla salute delle gengive e dei tessuti che sostengono i denti.",
    sectionId: "trattamenti-parodontologia",
    groups: [
      {
        title: "Gengivite e parodontite",
        items: [
          parodontologia(
            "cura-della-gengivite",
            "Cura della gengivite",
            "Il percorso riduce placca e infiammazione gengivale attraverso igiene professionale e indicazioni personalizzate per la cura quotidiana.",
          ),
          parodontologia(
            "cura-della-parodontite",
            "Cura della parodontite",
            "La terapia controlla l’infezione dei tessuti di sostegno del dente con procedure non chirurgiche o chirurgiche definite dopo la diagnosi.",
          ),
          parodontologia(
            "trattamento-delle-gengive-sanguinanti",
            "Trattamento delle gengive sanguinanti",
            "Si individuano le cause del sanguinamento e si interviene su placca, tartaro e altri fattori locali che mantengono l’infiammazione.",
          ),
          parodontologia(
            "scaling",
            "Scaling",
            "Lo scaling rimuove placca e tartaro dalle superfici dentali sopra e sotto il margine gengivale con strumenti dedicati.",
          ),
          parodontologia(
            "levigatura-radicolare",
            "Levigatura radicolare",
            "La levigatura deterge e regolarizza le superfici delle radici coinvolte nella malattia parodontale per favorirne la gestione clinica.",
          ),
          parodontologia(
            "pulizia-parodontale-profonda",
            "Pulizia parodontale profonda",
            "La seduta tratta in profondità le aree sotto gengiva dove si accumulano depositi associati alle tasche parodontali.",
          ),
          parodontologia(
            "trattamento-dei-tessuti-sottogengivali",
            "Trattamento dei tessuti sottogengivali",
            "Le aree sotto il margine gengivale vengono deterse e trattate in modo mirato in base alla profondità e all’estensione delle tasche.",
          ),
        ],
      },
      {
        title: "Gengive e rigenerazione",
        items: [
          parodontologia(
            "chirurgia-parodontale",
            "Chirurgia parodontale",
            "L’intervento consente di accedere ai tessuti profondi per trattare difetti parodontali che richiedono una gestione chirurgica.",
          ),
          parodontologia(
            "trattamento-delle-recessioni-gengivali",
            "Trattamento delle recessioni gengivali",
            "La recessione viene valutata per proteggere la radice esposta e, quando indicato, migliorare quantità e posizione dei tessuti gengivali.",
          ),
          parodontologia(
            "innesti-gengivali",
            "Innesti gengivali",
            "Una piccola quantità di tessuto viene utilizzata per aumentare lo spessore gengivale o coprire selezionate superfici radicolari esposte.",
          ),
          parodontologia(
            "rigenerazione-dei-tessuti-parodontali",
            "Rigenerazione dei tessuti parodontali",
            "Tecniche dedicate possono favorire la ricostruzione dei tessuti di sostegno in difetti con caratteristiche cliniche idonee.",
          ),
          parodontologia(
            "trattamenti-con-biomateriali",
            "Trattamenti con biomateriali",
            "Biomateriali selezionati possono supportare procedure parodontali rigenerative quando anatomia e condizioni locali ne indicano l’impiego.",
          ),
        ],
      },
      {
        title: "Mantenimento",
        items: [
          parodontologia(
            "controlli-parodontali",
            "Controlli parodontali",
            "Le visite misurano nel tempo gengive, tasche e stabilità dentale per verificare l’andamento della salute parodontale.",
          ),
          parodontologia(
            "terapia-parodontale-di-supporto",
            "Terapia parodontale di supporto",
            "Dopo la terapia attiva, sedute programmate aiutano a controllare i fattori di rischio e le aree più difficili da mantenere.",
          ),
          parodontologia(
            "sedute-periodiche-di-mantenimento",
            "Sedute periodiche di mantenimento",
            "La cadenza delle sedute viene adattata alla risposta individuale e serve a monitorare e pulire le zone più vulnerabili.",
          ),
        ],
      },
    ],
  },
  "/protesi-dentale/": {
    id: "protesi-dentale",
    formService: service(
      "protesi-dentale",
      "Protesi dentale",
      "Corona, ponte o protesi dentale",
      "protesi",
      6,
    ),
    eyebrow: "I trattamenti",
    title: "Soluzioni per ritrovare sorriso e masticazione",
    description:
      "Protesi personalizzate per ricostruire denti compromessi o sostituire quelli mancanti.",
    sectionId: "trattamenti-protesi-dentale",
    groups: [
      {
        title: "Protesi fisse",
        items: [
          protesi(
            "corone-dentali",
            "Corone dentali",
            "La corona riveste un dente preparato per recuperarne forma, resistenza e funzione con un manufatto realizzato su misura.",
          ),
          protesi(
            "ponti-dentali",
            "Ponti dentali",
            "Il ponte sostituisce uno o più denti mancanti appoggiandosi a denti o impianti valutati come supporti adeguati.",
          ),
          protesi(
            "protesi-fisse",
            "Protesi fisse",
            "Le protesi fisse ricostruiscono denti compromessi o assenti e vengono cementate o avvitate a supporti dentali o implantari.",
          ),
          protesi(
            "protesi-provvisorie",
            "Protesi provvisorie",
            "Il provvisorio protegge i tessuti e mantiene estetica e funzione durante le fasi necessarie alla riabilitazione definitiva.",
          ),
          protesi(
            "protesi-definitive",
            "Protesi definitive",
            "Il manufatto definitivo viene progettato dopo le fasi cliniche necessarie per integrarsi con morso, tessuti e denti presenti.",
          ),
        ],
      },
      {
        title: "Protesi mobili",
        items: [
          protesi(
            "protesi-mobili-totali",
            "Protesi mobili totali",
            "La protesi totale rimovibile sostituisce tutti i denti di un’arcata e viene adattata alla forma dei tessuti di appoggio.",
          ),
          protesi(
            "protesi-mobili-parziali",
            "Protesi mobili parziali",
            "La protesi parziale rimovibile sostituisce alcuni denti mancanti e si integra con quelli ancora presenti nell’arcata.",
          ),
          protesi(
            "protesi-scheletrate",
            "Protesi scheletrate",
            "Una struttura metallica sottile sostiene i denti artificiali e distribuisce l’appoggio tra denti residui e mucose.",
          ),
          protesi(
            "protesi-con-ganci",
            "Protesi con ganci",
            "I ganci contribuiscono a trattenere la protesi rimovibile sfruttando denti naturali idonei come elementi di supporto.",
          ),
          protesi(
            "protesi-con-attacchi",
            "Protesi con attacchi",
            "Sistemi di precisione collegano la protesi rimovibile a denti o impianti per migliorarne ritenzione e gestione quotidiana.",
          ),
        ],
      },
      {
        title: "Protesi su impianti",
        items: [
          protesi(
            "corone-su-impianti",
            "Corone su impianti",
            "Una corona su misura viene collegata a un impianto per sostituire il dente mancante senza appoggiarsi ai denti vicini.",
            "/implantologia/impianto-singolo/",
          ),
          protesi(
            "ponti-su-impianti",
            "Ponti su impianti",
            "Un ponte sostenuto da impianti può sostituire più denti adiacenti con un numero di supporti definito dalla pianificazione clinica.",
            "/implantologia/ponte-su-impianti/",
          ),
          protesi(
            "protesi-fisse-su-impianti",
            "Protesi fisse su impianti",
            "La protesi viene fissata a impianti pianificati per riabilitare più denti o un’arcata e non viene rimossa dal paziente.",
            "/implantologia/denti-fissi/",
          ),
          protesi(
            "protesi-mobili-sostenute-da-impianti",
            "Protesi mobili sostenute da impianti",
            "La protesi rimovibile si aggancia a impianti che ne aumentano il sostegno, mantenendo la possibilità di rimuoverla per l’igiene.",
            "/implantologia/protesi-instabile/",
          ),
          protesi(
            "stabilizzazione-della-protesi-mobile",
            "Stabilizzazione della protesi mobile",
            "Impianti e attacchi dedicati possono ridurre i movimenti di una protesi rimovibile durante la funzione, quando clinicamente indicato.",
            "/implantologia/protesi-instabile/",
          ),
        ],
      },
    ],
  },
  "/implantologia/": {
    id: "implantologia",
    formService: service(
      "implantologia",
      "Implantologia",
      "Uno o più denti mancanti",
      "implantologia",
      5,
    ),
    eyebrow: "I trattamenti",
    title: "Soluzioni per sostituire i denti mancanti",
    description:
      "Percorsi personalizzati per sostituire uno o più denti e ritrovare stabilità nella masticazione.",
    sectionId: "trattamenti-implantologia",
    groups: [
      {
        title: "Denti mancanti",
        items: [
          implantologia(
            "sostituire-un-solo-dente",
            "Sostituire un solo dente",
            "Un impianto può sostenere una corona singola per sostituire il dente assente dopo aver valutato osso, gengiva e spazi disponibili.",
            "/implantologia/impianto-singolo/",
          ),
          implantologia(
            "sostituire-piu-denti",
            "Sostituire più denti",
            "Più denti contigui possono essere sostituiti con una riabilitazione sostenuta da impianti pianificati in base all’area da trattare.",
            "/implantologia/ponte-su-impianti/",
          ),
          implantologia(
            "ritrovare-denti-fissi",
            "Ritrovare denti fissi",
            "Una protesi fissata a impianti può riabilitare aree estese o un’arcata quando le condizioni cliniche consentono questo percorso.",
            "/implantologia/denti-fissi/",
          ),
          implantologia(
            "riabilitare-un-intera-arcata",
            "Riabilitare un’intera arcata",
            "La riabilitazione completa combina impianti e una protesi progettata per ripristinare denti, funzione e corretti rapporti di masticazione.",
            "/implantologia/denti-fissi/",
          ),
        ],
      },
      {
        title: "Protesi e impianti",
        items: [
          implantologia(
            "stabilizzare-una-protesi-mobile",
            "Stabilizzare una protesi mobile",
            "Sistemi di aggancio su impianti possono offrire maggiore ritenzione a una protesi rimovibile e facilitarne l’uso quotidiano.",
            "/implantologia/protesi-instabile/",
          ),
          implantologia(
            "protesi-dentali-su-impianti",
            "Protesi dentali su impianti",
            "Corone, ponti o protesi estese possono essere sostenuti da impianti selezionando la soluzione in base ai denti mancanti e ai tessuti disponibili.",
          ),
          implantologia(
            "corone-su-impianti",
            "Corone su impianti",
            "La corona implantare sostituisce la parte visibile del dente ed è collegata all’impianto tramite componenti progettati per il singolo caso.",
            "/implantologia/impianto-singolo/",
          ),
          implantologia(
            "ponti-su-impianti",
            "Ponti su impianti",
            "Il ponte unisce più elementi protesici e viene sostenuto da impianti distribuiti secondo la pianificazione della riabilitazione.",
            "/implantologia/ponte-su-impianti/",
          ),
        ],
      },
      {
        title: "Tempi e condizioni cliniche",
        items: [
          implantologia(
            "carico-immediato",
            "Carico immediato",
            "Una protesi provvisoria può essere collegata agli impianti in tempi brevi quando stabilità primaria e condizioni cliniche rispettano criteri specifici.",
            "/implantologia/carico-immediato/",
          ),
          implantologia(
            "impianto-post-estrattivo",
            "Impianto post-estrattivo",
            "L’impianto viene inserito nella stessa seduta dell’estrazione solo quando osso, tessuti e controllo dell’area lo consentono.",
          ),
          implantologia(
            "soluzioni-in-caso-di-poco-osso",
            "Soluzioni in caso di poco osso",
            "Esami e pianificazione definiscono se siano possibili tecniche implantari o rigenerative adatte alla quantità e qualità di osso disponibile.",
            "/implantologia/poco-osso/",
          ),
          implantologia(
            "rigenerazione-ossea",
            "Rigenerazione ossea",
            "La procedura utilizza tecniche e biomateriali per ricreare un volume osseo adeguato in difetti selezionati prima o durante l’implantologia.",
          ),
          implantologia(
            "innesti-ossei",
            "Innesti ossei",
            "Materiale osseo autologo o sostitutivo viene posizionato nelle aree carenti dopo una valutazione anatomica e clinica accurata.",
          ),
          implantologia(
            "rialzo-del-seno-mascellare",
            "Rialzo del seno mascellare",
            "La tecnica aumenta il volume osseo nella zona posteriore del mascellare superiore quando lo spazio disponibile non è sufficiente per gli impianti pianificati.",
          ),
        ],
      },
      {
        title: "Percorso e mantenimento",
        items: [
          implantologia(
            "pianificazione-implantologica",
            "Pianificazione implantologica",
            "Visita, immagini diagnostiche e valutazione protesica vengono integrate per definire posizione, numero e tempi degli impianti.",
          ),
          implantologia(
            "percorso-implantologico",
            "Percorso implantologico",
            "Il percorso coordina diagnosi, fase chirurgica, guarigione, protesi e controlli secondo una sequenza adattata al quadro clinico.",
          ),
          implantologia(
            "controlli-degli-impianti",
            "Controlli degli impianti",
            "Le visite verificano nel tempo tessuti, igiene, stabilità e componenti protesiche per individuare eventuali cambiamenti.",
            "/implantologia/manutenzione-impianti/",
          ),
          implantologia(
            "igiene-e-mantenimento-degli-impianti",
            "Igiene e mantenimento degli impianti",
            "Sedute e istruzioni personalizzate aiutano a pulire correttamente impianti e tessuti circostanti e a monitorarne la salute.",
            "/implantologia/manutenzione-impianti/",
          ),
          implantologia(
            "manutenzione-delle-protesi-su-impianti",
            "Manutenzione delle protesi su impianti",
            "La protesi e i suoi componenti vengono controllati e, quando necessario, puliti, regolati o sottoposti a interventi tecnici.",
            "/implantologia/manutenzione-impianti/",
          ),
        ],
      },
    ],
  },
  "/attivita/estetica-del-sorriso/": {
    id: "estetica-del-sorriso",
    formService: service(
      "estetica-del-sorriso",
      "Estetica del sorriso",
      "Denti più bianchi e sorriso più armonioso",
      "estetica",
      7,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per un sorriso più armonioso",
    description:
      "Soluzioni per migliorare colore, forma e proporzioni dei denti, rispettando l’equilibrio naturale del sorriso.",
    sectionId: "trattamenti-estetica-del-sorriso",
    groups: [
      {
        title: "Colore dei denti",
        items: [
          estetica(
            "sbiancamento-dentale-professionale",
            "Sbiancamento dentale professionale",
            "Il trattamento schiarisce le pigmentazioni dei denti naturali con prodotti professionali, dopo aver controllato salute orale e possibili sensibilità.",
          ),
          estetica(
            "sbiancamento-dentale-in-studio",
            "Sbiancamento dentale in studio",
            "Il gel sbiancante viene applicato e controllato durante la seduta, proteggendo i tessuti gengivali secondo il protocollo scelto.",
          ),
          estetica(
            "sbiancamento-domiciliare-con-mascherine",
            "Sbiancamento domiciliare con mascherine",
            "Mascherine realizzate su misura consentono di applicare a casa il prodotto indicato seguendo tempi e controlli stabiliti dal dentista.",
          ),
          estetica(
            "sbiancamento-interno-dei-denti-devitalizzati",
            "Sbiancamento interno dei denti devitalizzati",
            "Il materiale sbiancante viene posizionato all’interno di un dente non vitale discromico dopo aver verificato il precedente trattamento canalare.",
          ),
        ],
      },
      {
        title: "Forma e armonia",
        items: [
          estetica(
            "faccette-dentali-in-ceramica",
            "Faccette dentali in ceramica",
            "Sottili elementi ceramici vengono progettati per modificare forma, colore o proporzione della superficie visibile di denti selezionati.",
          ),
          estetica(
            "faccette-dentali-in-composito",
            "Faccette dentali in composito",
            "Il composito viene modellato sulla superficie del dente per correggere caratteristiche estetiche con un approccio definito dopo la valutazione clinica.",
          ),
          estetica(
            "correzione-dei-denti-macchiati",
            "Correzione dei denti macchiati",
            "La causa e la profondità delle discromie guidano la scelta tra pulizia, sbiancamento, restauro o rivestimento estetico.",
          ),
          estetica(
            "correzione-dei-denti-scheggiati",
            "Correzione dei denti scheggiati",
            "La parte mancante può essere ricostruita con materiali adesivi o altre soluzioni proporzionate all’estensione dello scheggiamento.",
          ),
          estetica(
            "correzione-dei-denti-consumati",
            "Correzione dei denti consumati",
            "Dopo aver individuato le cause dell’usura, si valuta come ripristinare forma e funzione senza sovraccaricare i denti.",
          ),
          estetica(
            "miglioramento-della-forma-dei-denti",
            "Miglioramento della forma dei denti",
            "Contorni e volumi dentali possono essere modificati con tecniche additive o restaurative pianificate nel rispetto del morso.",
          ),
          estetica(
            "miglioramento-delle-proporzioni-dentali",
            "Miglioramento delle proporzioni dentali",
            "La valutazione del sorriso guida interventi mirati su larghezza, lunghezza e rapporti tra denti, gengive e labbra.",
          ),
          estetica(
            "chiusura-dei-piccoli-spazi-tra-i-denti",
            "Chiusura dei piccoli spazi tra i denti",
            "Spazi contenuti possono essere ridotti con restauri adesivi o altre soluzioni, verificando proporzioni e contatti tra i denti.",
          ),
          estetica(
            "correzione-estetica-dei-diastemi",
            "Correzione estetica dei diastemi",
            "La chiusura dei diastemi viene pianificata considerando dimensioni dentali, posizione delle radici, gengive e possibili alternative ortodontiche.",
          ),
        ],
      },
    ],
  },
  "/attivita/ortodonzia/": {
    id: "ortodonzia",
    formService: service(
      "ortodonzia",
      "Ortodonzia",
      "Denti da allineare o apparecchio",
      "ortodonzia",
      8,
    ),
    eyebrow: "I trattamenti",
    title: "Soluzioni per allineare i denti e migliorare il morso",
    description:
      "Trattamenti ortodontici dedicati a bambini, ragazzi e adulti, scelti in base alle esigenze della persona.",
    sectionId: "trattamenti-ortodonzia",
    groups: [
      {
        title: "Apparecchi ortodontici",
        items: [
          ortodonzia(
            "apparecchio-fisso-tradizionale",
            "Apparecchio fisso tradizionale",
            "Attacchi e fili applicano forze controllate per spostare gradualmente i denti secondo il piano ortodontico.",
          ),
          ortodonzia(
            "apparecchio-mobile",
            "Apparecchio mobile",
            "Il dispositivo rimovibile viene portato per i tempi indicati e può guidare movimenti dentali o funzioni specifiche durante la crescita.",
          ),
          ortodonzia(
            "allineatori-trasparenti",
            "Allineatori trasparenti",
            "Una sequenza di mascherine rimovibili sposta progressivamente i denti e richiede uso regolare e controlli programmati.",
          ),
          ortodonzia(
            "ortodonzia-invisibile",
            "Ortodonzia invisibile",
            "Soluzioni poco visibili, come allineatori o apparecchi linguali, vengono valutate in base ai movimenti necessari e alla collaborazione richiesta.",
          ),
          ortodonzia(
            "apparecchi-con-attacchi-estetici",
            "Apparecchi con attacchi estetici",
            "Attacchi di colore simile al dente riducono l’impatto visivo mantenendo la meccanica di un apparecchio fisso.",
          ),
          ortodonzia(
            "ortodonzia-linguale",
            "Ortodonzia linguale",
            "L’apparecchio viene applicato sulla superficie interna dei denti e pianificato in relazione ad anatomia, morso e movimenti richiesti.",
          ),
        ],
      },
      {
        title: "Percorsi per età ed esigenze",
        items: [
          ortodonzia(
            "ortodonzia-per-bambini",
            "Ortodonzia per bambini",
            "La valutazione controlla crescita, eruzione e rapporti tra le arcate per stabilire se e quando sia utile intervenire.",
          ),
          ortodonzia(
            "ortodonzia-intercettiva",
            "Ortodonzia intercettiva",
            "Un trattamento precoce può guidare alcuni aspetti della crescita o correggere abitudini e problemi che tendono a peggiorare.",
          ),
          ortodonzia(
            "apparecchi-funzionali-per-la-crescita",
            "Apparecchi funzionali per la crescita",
            "Dispositivi specifici sfruttano la fase di sviluppo per intervenire sui rapporti tra mascella e mandibola in casi selezionati.",
          ),
          ortodonzia(
            "ortodonzia-per-ragazzi",
            "Ortodonzia per ragazzi",
            "Il percorso viene pianificato considerando denti permanenti, crescita residua, igiene e abitudini del giovane paziente.",
          ),
          ortodonzia(
            "ortodonzia-per-adulti",
            "Ortodonzia per adulti",
            "L’allineamento viene progettato tenendo conto della salute di denti e gengive, delle esigenze protesiche e della stabilità del morso.",
          ),
          ortodonzia(
            "trattamento-delle-malocclusioni",
            "Trattamento delle malocclusioni",
            "La terapia modifica rapporti dentali e, quando possibile, scheletrici che interferiscono con un’occlusione equilibrata.",
          ),
          ortodonzia(
            "trattamento-dei-disallineamenti-dentali",
            "Trattamento dei disallineamenti dentali",
            "I denti vengono spostati gradualmente per migliorare allineamento, contatti e possibilità di igiene secondo obiettivi condivisi.",
          ),
        ],
      },
      {
        title: "Dopo il trattamento",
        items: [
          ortodonzia(
            "contenzione-mobile",
            "Contenzione mobile",
            "Un dispositivo rimovibile mantiene i denti nella posizione raggiunta e viene portato secondo le indicazioni ricevute.",
          ),
          ortodonzia(
            "contenzione-fissa",
            "Contenzione fissa",
            "Un sottile filo applicato dietro i denti contribuisce a limitarne gli spostamenti dopo la fase attiva del trattamento.",
          ),
          ortodonzia(
            "controlli-ortodontici",
            "Controlli ortodontici",
            "Le visite verificano andamento dei movimenti, condizioni dei tessuti e collaborazione, consentendo gli adattamenti necessari al piano.",
          ),
        ],
      },
    ],
  },
  "/attivita/gnatologia/": {
    id: "gnatologia",
    formService: service(
      "gnatologia",
      "Gnatologia",
      "Dolore alla mandibola o denti serrati",
      "ortodonzia",
      9,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per mandibola, morso e masticazione",
    description:
      "Valutazioni e soluzioni dedicate all’equilibrio della mandibola, delle articolazioni e dei muscoli della masticazione.",
    sectionId: "trattamenti-gnatologia",
    groups: [
      {
        title: "Valutazione gnatologica",
        items: [
          gnatologia(
            "visita-gnatologica",
            "Visita gnatologica",
            "La visita raccoglie sintomi e abitudini e valuta mandibola, articolazioni, muscoli e contatti dentali durante movimento e riposo.",
          ),
          gnatologia(
            "valutazione-dell-occlusione",
            "Valutazione dell’occlusione",
            "Si analizzano i contatti tra le arcate e il loro rapporto con movimenti mandibolari, denti, muscoli e articolazioni.",
          ),
          gnatologia(
            "valutazione-dell-articolazione-temporo-mandibolare",
            "Valutazione dell’articolazione temporo-mandibolare",
            "L’esame considera apertura, movimenti, rumori e dolorabilità delle articolazioni, integrando eventuali immagini diagnostiche quando indicate.",
          ),
          gnatologia(
            "valutazione-dei-muscoli-masticatori",
            "Valutazione dei muscoli masticatori",
            "Palpazione e prove funzionali aiutano a individuare tensioni, dolorabilità o affaticamento dei muscoli coinvolti nella masticazione.",
          ),
        ],
      },
      {
        title: "Disturbi e trattamenti",
        items: [
          gnatologia(
            "trattamento-del-bruxismo",
            "Trattamento del bruxismo",
            "Il percorso mira a proteggere denti e strutture coinvolte e a gestire i fattori associati al digrignamento o serramento.",
          ),
          gnatologia(
            "trattamento-del-serramento-dentale",
            "Trattamento del serramento dentale",
            "La gestione combina indicazioni comportamentali e, quando utile, dispositivi personalizzati per ridurre il sovraccarico su denti, muscoli e articolazioni.",
          ),
          gnatologia(
            "trattamento-dei-disturbi-dell-atm",
            "Trattamento dei disturbi dell’ATM",
            "Il piano viene definito in base al tipo di disturbo articolare e può includere educazione, esercizi, dispositivi e controlli.",
          ),
          gnatologia(
            "trattamento-del-dolore-mandibolare",
            "Trattamento del dolore mandibolare",
            "Dopo aver valutato origine e fattori aggravanti, si scelgono misure conservative per gestire dolore e limitazioni del movimento.",
          ),
          gnatologia(
            "trattamento-degli-scatti-articolari",
            "Trattamento degli scatti articolari",
            "Rumori e scatti vengono valutati insieme a dolore e funzione per stabilire se sia necessario un trattamento o il solo monitoraggio.",
          ),
          gnatologia(
            "bite-personalizzato",
            "Bite personalizzato",
            "Il dispositivo rimovibile viene realizzato sull’occlusione individuale per modificare i contatti e proteggere le strutture coinvolte.",
          ),
          gnatologia(
            "bite-notturno",
            "Bite notturno",
            "Il bite viene portato durante il sonno secondo indicazione per limitare gli effetti del serramento o del digrignamento sui denti.",
          ),
          gnatologia(
            "protezione-dei-denti-dall-usura",
            "Protezione dei denti dall’usura",
            "Si individuano le cause dell’usura e si adottano misure per limitarne la progressione e proteggere le superfici dentali.",
          ),
          gnatologia(
            "riduzione-del-sovraccarico-dei-muscoli-masticatori",
            "Riduzione del sovraccarico dei muscoli masticatori",
            "Indicazioni, esercizi e dispositivi selezionati possono ridurre tensione e attività eccessiva dei muscoli durante riposo e funzione.",
          ),
        ],
      },
    ],
  },
  "/attivita/chirurgia-orale/": {
    id: "chirurgia-orale",
    formService: service(
      "chirurgia-orale",
      "Chirurgia orale",
      "Estrazioni e denti del giudizio",
      "chirurgia",
      10,
    ),
    eyebrow: "I trattamenti",
    title: "Interventi mirati per la salute della bocca",
    description:
      "Procedure chirurgiche pianificate in base alle condizioni della bocca e alle esigenze del percorso di cura.",
    sectionId: "trattamenti-chirurgia-orale",
    groups: [
      {
        title: "Estrazioni e denti inclusi",
        items: [
          chirurgia(
            "estrazioni-dentali",
            "Estrazioni dentali",
            "La rimozione del dente viene pianificata dopo aver valutato diagnosi, anatomia e alternative conservative disponibili.",
          ),
          chirurgia(
            "estrazione-di-denti-compromessi",
            "Estrazione di denti compromessi",
            "Un dente non recuperabile può essere rimosso con una tecnica scelta per rispettare osso e tessuti circostanti.",
          ),
          chirurgia(
            "estrazione-dei-denti-del-giudizio",
            "Estrazione dei denti del giudizio",
            "Posizione, rapporto con strutture vicine e sintomi guidano l’indicazione e la tecnica per rimuovere il terzo molare.",
          ),
          chirurgia(
            "estrazione-di-denti-inclusi",
            "Estrazione di denti inclusi",
            "Il dente che non è erotto viene raggiunto chirurgicamente dopo uno studio radiografico dei rapporti con radici, nervi e seno mascellare.",
          ),
          chirurgia(
            "disinclusione-chirurgica-dei-denti",
            "Disinclusione chirurgica dei denti",
            "Una parte del dente incluso viene esposta per favorirne il recupero, spesso in coordinamento con un trattamento ortodontico.",
          ),
        ],
      },
      {
        title: "Chirurgia endodontica",
        items: [
          chirurgia(
            "chirurgia-endodontica",
            "Chirurgia endodontica",
            "L’accesso chirurgico alla radice permette di trattare lesioni o problemi persistenti non gestibili adeguatamente attraverso il canale.",
          ),
          chirurgia(
            "apicectomia",
            "Apicectomia",
            "L’apice della radice e il tessuto patologico vicino vengono rimossi e l’estremità canalare viene sigillata quando indicato.",
          ),
          chirurgia(
            "rimozione-delle-lesioni-periapicali",
            "Rimozione delle lesioni periapicali",
            "Il tessuto alterato attorno alla punta della radice viene rimosso e analizzato nel contesto del trattamento del dente coinvolto.",
          ),
        ],
      },
      {
        title: "Cisti e lesioni del cavo orale",
        items: [
          chirurgia(
            "diagnosi-delle-lesioni-del-cavo-orale",
            "Diagnosi delle lesioni del cavo orale",
            "La visita valuta aspetto, sede e durata della lesione e stabilisce se siano necessari osservazione, esami o prelievo di tessuto.",
          ),
          chirurgia(
            "rimozione-di-cisti",
            "Rimozione di cisti",
            "La formazione viene rimossa o trattata con la tecnica indicata da dimensioni e sede, preservando per quanto possibile le strutture vicine.",
          ),
          chirurgia(
            "rimozione-di-neoformazioni",
            "Rimozione di neoformazioni",
            "La neoformazione viene asportata con margini e modalità definiti dalla valutazione clinica e sottoposta a esame quando necessario.",
          ),
          chirurgia(
            "biopsie-mirate",
            "Biopsie mirate",
            "Un campione rappresentativo di tessuto viene prelevato e inviato all’esame istologico per chiarire la natura della lesione.",
          ),
          chirurgia(
            "trattamento-delle-lesioni-delle-ossa-mascellari",
            "Trattamento delle lesioni delle ossa mascellari",
            "Immagini diagnostiche e, se indicato, analisi istologica guidano il trattamento chirurgico e il successivo monitoraggio della lesione.",
          ),
          chirurgia(
            "trattamento-delle-lesioni-delle-ghiandole-salivari",
            "Trattamento delle lesioni delle ghiandole salivari",
            "La gestione dipende da sede, origine e caratteristiche della lesione e può richiedere esami o consulenze specialistiche dedicate.",
          ),
        ],
      },
      {
        title: "Chirurgia ricostruttiva",
        items: [
          chirurgia(
            "chirurgia-preprotesica",
            "Chirurgia preprotesica",
            "Tessuti molli o ossei vengono rimodellati quando necessario per creare condizioni più adatte a una futura protesi.",
          ),
          chirurgia(
            "chirurgia-mucogengivale",
            "Chirurgia mucogengivale",
            "L’intervento modifica quantità o posizione dei tessuti gengivali per gestire recessioni, spessore o esigenze funzionali selezionate.",
          ),
          chirurgia(
            "chirurgia-parodontale",
            "Chirurgia parodontale",
            "L’accesso chirurgico consente di trattare tasche e difetti dei tessuti di sostegno non risolti con la sola terapia non chirurgica.",
          ),
          chirurgia(
            "innesti-ossei",
            "Innesti ossei",
            "Materiale da innesto viene collocato in una zona carente per ricostruire un volume osseo necessario al percorso pianificato.",
          ),
          chirurgia(
            "rigenerazione-ossea",
            "Rigenerazione ossea",
            "Membrane e biomateriali possono essere utilizzati per guidare la formazione di osso in difetti con caratteristiche favorevoli.",
          ),
          chirurgia(
            "chirurgia-ossea-ricostruttiva",
            "Chirurgia ossea ricostruttiva",
            "Tecniche chirurgiche dedicate ricostruiscono forma e volume dell’osso in preparazione a successive fasi riabilitative.",
          ),
          chirurgia(
            "tecniche-rigenerative-avanzate",
            "Tecniche rigenerative avanzate",
            "Procedure e biomateriali vengono combinati in casi selezionati sulla base dell’anatomia del difetto e degli obiettivi clinici.",
          ),
        ],
      },
      {
        title: "Frenuli",
        items: [
          chirurgia(
            "frenulectomia",
            "Frenulectomia",
            "Il frenulo viene rimosso quando limita movimenti, interferisce con i tessuti o ostacola un percorso ortodontico o protesico.",
          ),
          chirurgia(
            "frenulotomia",
            "Frenulotomia",
            "Un’incisione mirata modifica la tensione del frenulo mantenendone parte del tessuto, quando questa tecnica è clinicamente indicata.",
          ),
        ],
      },
    ],
  },
  "/attivita/pedodonzia/": {
    id: "pedodonzia",
    formService: service(
      "pedodonzia",
      "Pedodonzia",
      "Visita e cure per bambini",
      "pedodonzia",
      11,
    ),
    eyebrow: "I trattamenti",
    title: "Trattamenti per proteggere il sorriso dei bambini",
    description:
      "Prevenzione e cure dedicate ai denti da latte e ai primi denti permanenti, con un approccio adatto all’età del bambino.",
    sectionId: "trattamenti-pedodonzia",
    groups: [
      {
        title: "Prevenzione",
        items: [
          pedodonzia(
            "prima-visita-odontoiatrica-del-bambino",
            "Prima visita odontoiatrica del bambino",
            "Il primo incontro introduce il bambino all’ambiente odontoiatrico e permette di controllare denti, gengive, crescita e abitudini.",
          ),
          pedodonzia(
            "educazione-all-igiene-orale",
            "Educazione all’igiene orale",
            "Bambino e genitori ricevono indicazioni pratiche su spazzolino, dentifricio e assistenza dell’adulto adeguate all’età.",
          ),
          pedodonzia(
            "indicazioni-alimentari",
            "Indicazioni alimentari",
            "Vengono condivise abitudini alimentari utili a limitare l’esposizione frequente agli zuccheri e a sostenere la salute orale.",
          ),
          pedodonzia(
            "prevenzione-della-carie",
            "Prevenzione della carie",
            "Controlli, igiene, fluoro e sigillature vengono combinati in base all’età e al rischio individuale del bambino.",
          ),
          pedodonzia(
            "fluoroprofilassi",
            "Fluoroprofilassi",
            "Il fluoro viene utilizzato con modalità e quantità adatte all’età per sostenere la resistenza dello smalto quando indicato.",
          ),
          pedodonzia(
            "applicazioni-topiche-di-fluoro",
            "Applicazioni topiche di fluoro",
            "Gel o vernici al fluoro vengono applicati direttamente sui denti durante la seduta secondo il profilo di rischio del bambino.",
          ),
          pedodonzia(
            "sigillature-dei-solchi-dentali",
            "Sigillature dei solchi dentali",
            "Un sottile materiale protettivo chiude i solchi profondi dei molari per facilitarne la pulizia e ridurre l’accumulo di placca.",
          ),
        ],
      },
      {
        title: "Cura dei denti da latte",
        items: [
          pedodonzia(
            "cura-della-carie-nei-bambini",
            "Cura della carie nei bambini",
            "La parte cariata viene rimossa e il dente viene restaurato con tecniche adeguate a età, collaborazione e profondità della lesione.",
          ),
          pedodonzia(
            "otturazioni-dei-denti-da-latte",
            "Otturazioni dei denti da latte",
            "L’otturazione ripristina forma e funzione del dente deciduo e contribuisce a mantenerlo fino alla sua naturale sostituzione.",
          ),
          pedodonzia(
            "pulpotomia",
            "Pulpotomia",
            "La parte coronale della polpa infiammata viene rimossa mentre si conserva quella radicolare quando le condizioni del dente lo consentono.",
          ),
          pedodonzia(
            "pulpectomia",
            "Pulpectomia",
            "La polpa viene rimossa anche dai canali del dente da latte, che vengono detersi e riempiti con materiali adatti alla dentizione decidua.",
          ),
          pedodonzia(
            "devitalizzazione-dei-denti-da-latte",
            "Devitalizzazione dei denti da latte",
            "Il trattamento dei canali di un dente deciduo viene valutato per controllare l’infezione e conservarlo quando appropriato.",
          ),
          pedodonzia(
            "estrazione-dei-denti-da-latte",
            "Estrazione dei denti da latte",
            "Un dente deciduo viene rimosso quando non è recuperabile o ostacola l’eruzione, considerando sviluppo e spazio per i denti permanenti.",
          ),
          pedodonzia(
            "mantenitori-di-spazio",
            "Mantenitori di spazio",
            "Un piccolo dispositivo conserva lo spazio lasciato dalla perdita precoce di un dente da latte per guidare l’eruzione del permanente.",
          ),
        ],
      },
      {
        title: "Crescita e denti permanenti",
        items: [
          pedodonzia(
            "controllo-dell-eruzione-dentale",
            "Controllo dell’eruzione dentale",
            "Le visite seguono tempi, sequenza e posizione di comparsa dei denti per riconoscere eventuali deviazioni dalla crescita attesa.",
          ),
          pedodonzia(
            "controllo-dei-denti-permanenti-giovani",
            "Controllo dei denti permanenti giovani",
            "I primi denti permanenti vengono monitorati per smalto, carie, traumi e sviluppo delle radici durante la maturazione.",
          ),
          pedodonzia(
            "valutazione-ortodontica-precoce",
            "Valutazione ortodontica precoce",
            "La valutazione esamina crescita delle arcate, morso e spazio disponibile per stabilire se servano controlli o un intervento intercettivo.",
          ),
          pedodonzia(
            "controllo-delle-alterazioni-dello-smalto",
            "Controllo delle alterazioni dello smalto",
            "Macchie, difetti o fragilità dello smalto vengono esaminati per definire protezione, monitoraggio e possibili trattamenti conservativi.",
          ),
          pedodonzia(
            "gestione-dei-traumi-dentali-nei-bambini",
            "Gestione dei traumi dentali nei bambini",
            "Denti, gengive e tessuti vicini vengono valutati dopo il trauma per decidere cure immediate e controlli durante la crescita.",
          ),
        ],
      },
    ],
  },
};

const allCategories = Object.values(categoryTreatmentsByPath);
const allTreatments = allCategories.flatMap((category) =>
  category.groups.flatMap((group) => group.items),
);

export const generalRequestServiceOptions: readonly GeneralRequestServiceOption[] =
  allCategories
    .map((category) => category.formService)
    .sort((a, b) => a.order - b.order);

export const treatmentFormPresets: Readonly<Record<string, TreatmentFormPreset>> =
  Object.freeze(
    Object.fromEntries(
      allTreatments.map((item) => [
        item.id,
        {
          treatmentId: item.id,
          categoryId: item.categoryId,
          serviceSlug: item.categoryId,
          specificTreatmentValue: item.specificTreatmentValue,
        },
      ]),
    ),
  );

export const buildTreatmentRequestHref = (
  serviceSlug: TreatmentCategoryId,
  treatmentId: string,
): string =>
  `/richiesta-generale/?servizio=${encodeURIComponent(serviceSlug)}&trattamento=${encodeURIComponent(treatmentId)}`;

export const getTreatmentFormPreset = (
  treatmentId: string,
): TreatmentFormPreset | undefined => treatmentFormPresets[treatmentId];

export const getCategoryTreatments = (path: string): CategoryTreatmentsData | undefined =>
  categoryTreatmentsByPath[path];
