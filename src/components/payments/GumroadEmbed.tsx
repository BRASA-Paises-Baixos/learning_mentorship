import type { PaymentProvider } from "../../lib/payments/types";

type GumroadEmbedProps = {
  productId: string;
  provider: PaymentProvider;
};

export default function GumroadEmbed({ productId, provider }: GumroadEmbedProps) {
  const snippet = provider.getEmbedSnippet?.(productId);

  return (
    <div className="rounded-3xl border border-foreground/10 bg-surface/80 p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {snippet?.title ?? "Checkout"}
      </div>
      <div className="mt-4 flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-foreground/20 bg-surface-2 text-sm text-foreground/60">
        {snippet?.description ?? "Payment embed placeholder"}
      </div>
    </div>
  );
}
