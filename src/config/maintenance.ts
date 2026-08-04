export const MAINTENANCE_MODE_ENV = "PUBLIC_MAINTENANCE_MODE";

export const isMaintenanceModeEnabled = (value: unknown): boolean =>
  String(value ?? "").toLowerCase() === "true";
