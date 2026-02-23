import type { PaymentProvider } from "../types";
import { getPlanReaderUrl } from "../../gumroad/config";

export const mockPaymentProvider: PaymentProvider = {
  getCheckoutUrl(productId: string) {
    return getPlanReaderUrl(productId);
  },
  getEmbedSnippet(productId: string) {
    return {
      title: "Fake Subscription",
      description: `Plan "${productId}" currently routes to an in-platform PDF reader.`,
    };
  },
};
