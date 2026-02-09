import Link from "next/link";
import type { LibraryItem } from "../../lib/sanity/types";

export default function LibraryCard({ item }: { item: LibraryItem }) {
  const href = `/library/${item.slug || item._id}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white/80 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas">
        {item.thumbnailUrl ? (
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-charcoal/40">
            Thumbnail pending
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-royal">
          <span>{item.type}</span>
          <span className="text-charcoal/30">·</span>
          <span>{item.category}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-charcoal">
          {item.title}
        </h3>
        <p className="text-sm text-charcoal/70 line-clamp-2">
          {item.description || "A focused learning module designed for fast application."}
        </p>
      </div>
    </Link>
  );
}
