import type { PaymentProvider } from "../types";
import { getGumroadProductUrl } from "../../gumroad/config";

export const gumroadPaymentProvider: PaymentProvider = {
  getCheckoutUrl() {
    return getGumroadProductUrl();
  },
  getEmbedSnippet(productId: string) {
    return {
      title: "Gumroad Checkout",
      description: `Plan "${productId}" redirects to Gumroad purchase checkout.`,
    };
  },
};
