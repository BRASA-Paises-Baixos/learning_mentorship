import type { LibraryItem } from "../../lib/sanity/types";
import LibraryCard from "./LibraryCard";

export default function LibraryGrid({ items }: { items: LibraryItem[] }) {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-charcoal/10 bg-white/80 p-8 text-center text-sm text-charcoal/60">
        No items yet. Add content in Sanity to populate the library.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <LibraryCard key={item._id} item={item} />
      ))}
    </div>
  );
}
