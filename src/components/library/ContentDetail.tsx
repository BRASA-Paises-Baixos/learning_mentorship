import type { LibraryItem } from "../../lib/content/models";
import Button from "../ui/Button";
import Link from "next/link";

export default function ContentDetail({ item }: { item: LibraryItem }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
          <span>{item.type}</span>
          <span className="text-foreground/30">·</span>
          <span>{item.category}</span>
        </div>
        <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
          {item.title}
        </h1>
        <p className="text-lg leading-relaxed text-foreground/70">
          {item.description ||
            "A concise module designed to move your work forward. Use this as a guided studio session."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="secondary" size="md">
            <Link href="/library">Back to library</Link>
          </Button>
          <Button asChild variant="primary" size="md">
            <Link href="/apply">Apply for access</Link>
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-foreground/10 bg-surface-2/80 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Viewer
          </div>
          <div className="mt-4 flex h-48 items-center justify-center rounded-2xl border border-dashed border-foreground/20 bg-surface text-sm text-foreground/50">
            Interactive viewer placeholder
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {(item.galleryUrls?.length ? item.galleryUrls : [undefined, undefined]).map(
            (url, index) => (
              <div
                key={`${item.id}-thumb-${index}`}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10 bg-surface"
              >
                {url ? (
                  <img
                    src={url}
                    alt={`${item.title} preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-foreground/40">
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
