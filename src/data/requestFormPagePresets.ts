import {
  treatmentFormPresets,
  type TreatmentCategoryId,
} from "./categoryTreatments";
import {
  generalRequestSecondStepProfiles,
  type GeneralRequestSecondStepProfileId,
} from "./generalRequestSecondStep";

export type RequestFormPagePath = `/${string}/`;
export type RequestFormTreatmentId = `${TreatmentCategoryId}--${string}`;

export type RequestFormPagePreset = {
  serviceId: TreatmentCategoryId;
  treatmentId?: RequestFormTreatmentId;
  initialStep: 1 | 2;
  sourcePage: RequestFormPagePath;
  secondStepProfileId?: GeneralRequestSecondStepProfileId;
};

const defineRequestFormPagePresets = <
  const T extends Readonly<Record<RequestFormPagePath, RequestFormPagePreset>>,
>(presets: T): Readonly<T> => {
  for (const [path, preset] of Object.entries(presets) as Array<
    [RequestFormPagePath, RequestFormPagePreset]
  >) {
    if (preset.sourcePage !== path) {
      throw new Error(
        `Preset modulo non valido per ${path}: sourcePage non corrispondente.`,
      );
    }

    if (preset.treatmentId) {
      const treatment = treatmentFormPresets[preset.treatmentId];
      if (!treatment) {
        throw new Error(
          `Preset modulo non valido per ${path}: trattamento sconosciuto ${preset.treatmentId}.`,
        );
      }
      if (treatment.serviceSlug !== preset.serviceId) {
        throw new Error(
          `Preset modulo non valido per ${path}: il trattamento ${preset.treatmentId} non appartiene a ${preset.serviceId}.`,
        );
      }
    }

    if (
      preset.secondStepProfileId &&
      !generalRequestSecondStepProfiles[preset.secondStepProfileId]
    ) {
      throw new Error(
        `Preset modulo non valido per ${path}: profilo step 2 sconosciuto ${preset.secondStepProfileId}.`,
      );
    }
  }

  return Object.freeze(presets);
};

export const requestFormPagePresets = defineRequestFormPagePresets({
  "/implantologia/impianto-singolo/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--sostituire-un-solo-dente",
    initialStep: 2,
    sourcePage: "/implantologia/impianto-singolo/",
  },
  "/implantologia/denti-fissi/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--ritrovare-denti-fissi",
    initialStep: 2,
    sourcePage: "/implantologia/denti-fissi/",
  },
  "/implantologia/ponte-su-impianti/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--sostituire-piu-denti",
    initialStep: 2,
    sourcePage: "/implantologia/ponte-su-impianti/",
  },
  "/implantologia/protesi-instabile/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--stabilizzare-una-protesi-mobile",
    initialStep: 2,
    sourcePage: "/implantologia/protesi-instabile/",
  },
  "/implantologia/carico-immediato/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--carico-immediato",
    initialStep: 2,
    sourcePage: "/implantologia/carico-immediato/",
  },
  "/implantologia/poco-osso/": {
    serviceId: "implantologia",
    treatmentId: "implantologia--soluzioni-in-caso-di-poco-osso",
    initialStep: 2,
    sourcePage: "/implantologia/poco-osso/",
  },
  "/implantologia/manutenzione-impianti/": {
    serviceId: "implantologia",
    initialStep: 2,
    sourcePage: "/implantologia/manutenzione-impianti/",
    secondStepProfileId: "implantologia-last-check",
  },
});

export type ConfiguredRequestFormPagePath =
  keyof typeof requestFormPagePresets;

export const getRequestFormPagePreset = (
  path: string,
): RequestFormPagePreset | undefined =>
  Object.prototype.hasOwnProperty.call(requestFormPagePresets, path)
    ? requestFormPagePresets[path as ConfiguredRequestFormPagePath]
    : undefined;
