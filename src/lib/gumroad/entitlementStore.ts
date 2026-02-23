import { existsSync, readFileSync, writeFileSync } from "node:fs";

export type StoredEntitlement = {
  productId: string;
  userId: string;
  purchaseEmail?: string;
  createdAt: number;
  updatedAt: number;
  source: "webhook" | "testing";
};

const STORE_PATH = process.env.GUMROAD_ENTITLEMENTS_PATH || "/tmp/gumroad-entitlements.json";

function normalizeEmail(email?: string) {
  return email?.trim().toLowerCase() || "";
}

function safeReadStore(): StoredEntitlement[] {
  try {
    if (!existsSync(STORE_PATH)) {
      return [];
    }

    const raw = readFileSync(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is StoredEntitlement => {
      return (
        Boolean(item) &&
        typeof item === "object" &&
        typeof (item as StoredEntitlement).productId === "string" &&
        typeof (item as StoredEntitlement).userId === "string"
      );
    });
  } catch {
    return [];
  }
}

function safeWriteStore(items: StoredEntitlement[]) {
  try {
    writeFileSync(STORE_PATH, JSON.stringify(items), "utf8");
  } catch {
    // Non-fatal in development.
  }
}

export function upsertEntitlement(input: {
  productId: string;
  userId: string;
  purchaseEmail?: string;
  source: "webhook" | "testing";
}) {
  const now = Date.now();
  const next: StoredEntitlement = {
    productId: input.productId,
    userId: input.userId,
    purchaseEmail: normalizeEmail(input.purchaseEmail) || undefined,
    source: input.source,
    createdAt: now,
    updatedAt: now,
  };

  const current = safeReadStore();
  const idx = current.findIndex(
    (item) => item.productId === input.productId && item.userId === input.userId
  );

  if (idx >= 0) {
    const existing = current[idx];
    current[idx] = {
      ...existing,
      ...next,
      createdAt: existing.createdAt,
      updatedAt: now,
    };
  } else {
    current.push(next);
  }

  safeWriteStore(current);
  return next;
}

export function revokeEntitlement(input: { productId: string; userId: string }) {
  const current = safeReadStore();

  const filtered = current.filter((item) => {
    return !(item.productId === input.productId && item.userId === input.userId);
  });

  safeWriteStore(filtered);
}

export function getEntitlementForUser(userId: string, productId: string) {
  const items = safeReadStore();
  return items.find((item) => item.productId === productId && item.userId === userId) || null;
}
