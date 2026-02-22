export type PaymentProvider = {
  getCheckoutUrl: (productId: string) => string;
  getEmbedSnippet?: (productId: string) => { title: string; description: string };
};
