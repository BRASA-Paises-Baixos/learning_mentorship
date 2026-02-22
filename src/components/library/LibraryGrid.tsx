import type { LibraryItem } from "../../lib/content/models";
import LibraryCard from "./LibraryCard";

export default function LibraryGrid({ items }: { items: LibraryItem[] }) {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-foreground/10 bg-surface-2/80 p-8 text-center text-sm text-foreground/60">
        No items yet. Add content in the CMS to populate the library.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <LibraryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
