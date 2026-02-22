import type { PaymentProvider } from "./types";
import { mockPaymentProvider } from "./providers/mockPaymentProvider";
import { gumroadPaymentProvider } from "./providers/gumroadPaymentProvider";

const PROVIDER_MAP: Record<string, PaymentProvider> = {
  mock: mockPaymentProvider,
  gumroad: gumroadPaymentProvider,
};

export function getPaymentProvider(): PaymentProvider {
  const providerName =
    process.env.NEXT_PUBLIC_PAYMENT_PROVIDER ??
    process.env.PAYMENT_PROVIDER ??
    "mock";

  return PROVIDER_MAP[providerName] ?? mockPaymentProvider;
}

export type { PaymentProvider };
