import type { LibraryItem } from "../../lib/sanity/types";
import Button from "../ui/Button";

export default function ContentDetail({ item }: { item: LibraryItem }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-royal">
          <span>{item.type}</span>
          <span className="text-charcoal/30">·</span>
          <span>{item.category}</span>
        </div>
        <h1 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          {item.title}
        </h1>
        <p className="text-lg leading-relaxed text-charcoal/70">
          {item.description ||
            "A concise module designed to move your work forward. Use this as a guided studio session."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/library" variant="secondary" size="md">
            Back to library
          </Button>
          <Button href="/pricing" variant="primary" size="md">
            Unlock full access
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-charcoal/10 bg-white/80 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            Viewer
          </div>
          <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-charcoal/20 bg-canvas text-sm text-charcoal/50">
            Interactive viewer placeholder
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {(item.galleryUrls?.length ? item.galleryUrls : [undefined, undefined]).map(
            (url, index) => (
              <div
                key={`${item._id}-thumb-${index}`}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/10 bg-canvas"
              >
                {url ? (
                  <img src={url} alt={`${item.title} preview ${index + 1}`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-charcoal/40">
                    Preview pending
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
