const DEFAULT_GUMROAD_PRODUCT_URL = "https://brasapaises.gumroad.com/l/rlkcsc";

export function getGumroadProductUrl() {
  return process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL || DEFAULT_GUMROAD_PRODUCT_URL;
}

export function getConfiguredGumroadProductUrl() {
  return process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL || DEFAULT_GUMROAD_PRODUCT_URL;
}

const PLAN_CONFIG = {
  studio: {
    name: "Studio",
    pdfEnvVar: "NEXT_PUBLIC_GUMROAD_STUDIO_PDF_URL",
    videoEnvVar: "NEXT_PUBLIC_GUMROAD_STUDIO_VIDEO_URL",
  },
  mentor: {
    name: "Mentor",
    pdfEnvVar: "NEXT_PUBLIC_GUMROAD_MENTOR_PDF_URL",
    videoEnvVar: "NEXT_PUBLIC_GUMROAD_MENTOR_VIDEO_URL",
  },
  collective: {
    name: "Collective",
    pdfEnvVar: "NEXT_PUBLIC_GUMROAD_COLLECTIVE_PDF_URL",
    videoEnvVar: "NEXT_PUBLIC_GUMROAD_COLLECTIVE_VIDEO_URL",
  },
} as const;

export type SubscriptionPlanId = keyof typeof PLAN_CONFIG;

export function isSupportedSubscriptionPlan(planId: string): planId is SubscriptionPlanId {
  return planId in PLAN_CONFIG;
}

export function getPlanReaderUrl(planId: string) {
  return `/library/reader/${encodeURIComponent(planId)}`;
}

export function getPlanDisplayName(planId: SubscriptionPlanId) {
  return PLAN_CONFIG[planId].name;
}

export function getPlanPdfEnvVarName(planId: SubscriptionPlanId) {
  return PLAN_CONFIG[planId].pdfEnvVar;
}

export function getPlanVideoEnvVarName(planId: SubscriptionPlanId) {
  return PLAN_CONFIG[planId].videoEnvVar;
}

export function getPlanPdfUrl(planId: SubscriptionPlanId) {
  const planPdfUrl = process.env[PLAN_CONFIG[planId].pdfEnvVar];
  const fallbackPdfUrl =
    process.env.NEXT_PUBLIC_GUMROAD_PDF_FALLBACK_URL || DEFAULT_GUMROAD_PRODUCT_URL;

  return planPdfUrl ?? fallbackPdfUrl;
}

export function getPlanVideoUrl(planId: SubscriptionPlanId) {
  const planVideoUrl = process.env[PLAN_CONFIG[planId].videoEnvVar];
  const fallbackVideoUrl = process.env.NEXT_PUBLIC_GUMROAD_VIDEO_FALLBACK_URL || null;

  return planVideoUrl ?? fallbackVideoUrl;
}

export function getGumroadProductId() {
  const explicit = process.env.GUMROAD_PRODUCT_ID?.trim();
  if (explicit) {
    return explicit;
  }

  const productUrl = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL?.trim() || DEFAULT_GUMROAD_PRODUCT_URL;
  try {
    const parsed = new URL(productUrl);
    const slug = parsed.pathname.split("/").filter(Boolean).pop();
    return slug || "";
  } catch {
    return "";
  }
}

export function isGumroadTestingEnabled() {
  const value = process.env.NEXT_PUBLIC_ENABLE_GUMROAD_TESTING;
  return value === "1" || value === "true";
}

export function getMediaProxyAllowedHosts() {
  const defaults = ["cdn.sanity.io"];
  const raw = process.env.MEDIA_PROXY_ALLOWED_HOSTS;
  if (!raw) {
    return defaults;
  }

  const configuredHosts = raw
    .split(",")
    .map((value) =>
      value
        .trim()
        .replace(/^['"]|['"]$/g, "")
        .replace(/\.$/, "")
        .toLowerCase(),
    )
    .filter(Boolean);

  return Array.from(new Set([...defaults, ...configuredHosts]));
}
