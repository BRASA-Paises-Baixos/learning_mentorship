import type { PaymentProvider } from "../types";

export const mockPaymentProvider: PaymentProvider = {
  getCheckoutUrl(productId: string) {
    return `/pricing?plan=${encodeURIComponent(productId)}`;
  },
  getEmbedSnippet(productId: string) {
    return {
      title: "Mock Checkout",
      description: `Checkout placeholder for ${productId}. Connect Gumroad to activate payments.`,
    };
  },
};
