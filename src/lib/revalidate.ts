const DEFAULT_REVALIDATE_SECONDS = 60;

export function getRevalidateSeconds() {
  const raw = process.env.NEXT_PUBLIC_REVALIDATE_SECONDS ?? process.env.REVALIDATE_SECONDS;
  const parsed = raw ? Number(raw) : Number.NaN;
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_REVALIDATE_SECONDS;
  }
  return parsed;
}
