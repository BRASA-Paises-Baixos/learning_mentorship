import type { PaymentProvider } from "../types";

export const gumroadPaymentProvider: PaymentProvider = {
  getCheckoutUrl() {
    return "https://gumroad.com";
  },
  getEmbedSnippet(productId: string) {
    return {
      title: "Gumroad Embed",
      description: `Gumroad embed placeholder for ${productId}.`,
    };
  },
};
