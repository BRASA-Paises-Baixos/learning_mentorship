This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Subscription-Gated Reader (Sanity + Gumroad)

Pricing plan buttons now route to an in-platform reader:

- `studio` -> `/library/reader/studio`
- `mentor` -> `/library/reader/mentor`
- `collective` -> `/library/reader/collective`

Default mock subscription URL:

- `https://brasapaises.gumroad.com/l/rlkcsc`

Reader content is managed in Sanity (`subscriptionContent` documents) and unlocked by Gumroad
entitlement (`email + product_id`).

## Sanity CMS (Non-Technical Editing)

Content now defaults to the `sanity` provider (`mock` is fallback only).

Set these env vars in the Next.js app (server-side):

```bash
SANITY_PROJECT_ID="your_project_id"
SANITY_DATASET="production"
SANITY_API_TOKEN="your_sanity_api_token"
NEXT_PUBLIC_CONTENT_PROVIDER="sanity"
```

Run the Sanity Studio:

```bash
cd sanity
npm run dev
```

Create and maintain these documents in Studio:

- `siteShell` with `slug = "default"` (header + footer)
- `homePage` with `slug = "home"` (homepage sections)
- `pricingPage` with `slug = "pricing"` (pricing page sections)
- `libraryItem` (library catalog entries)
- `subscriptionContent` (gated reader assets tied to `gumroadProductId`)

## Clerk Authentication

App Router auth is now powered by Clerk. Protected routes require sign-in and APIs resolve
identity from Clerk `userId` + primary email.

Required env vars:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
CLERK_SECRET_KEY="..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/library"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/library"
```

Middleware-protected routes:

- `/library(.*)`
- `/reader(.*)`
- `/api/gumroad/content(.*)`

Public webhook:

- `/api/payments/webhook`

## Gumroad Entitlement API

Use Gumroad for payment entitlement only. Serve PDF/video from your own storage URLs.

### Environment variables

```bash
GUMROAD_PRODUCT_ID="your_gumroad_product_id"
GUMROAD_WEBHOOK_SHARED_SECRET="your_webhook_secret"
SANITY_PROJECT_ID="your_project_id"
SANITY_DATASET="production"
SANITY_API_TOKEN="your_sanity_api_token"
```

### API routes

- `GET /api/content/unlock?productId=...`
  - Auth required
  - Checks entitlement (`email + product_id`)
  - Fetches `subscriptionContent` from Sanity by `gumroadProductId`
  - Returns content metadata and asset URLs

- `GET /api/media/proxy?productId=...&src=...`
  - Auth required
  - Re-checks entitlement before streaming media bytes
  - Supports range headers (video streaming)

- `POST /api/payments/webhook`
  - Gumroad webhook endpoint to grant/revoke entitlements by buyer email
  - Optional shared secret via `?secret=...` or `x-webhook-secret` header

- `POST /api/gumroad/testing/grant` (temporary testing flow)
  - Enabled only when `NEXT_PUBLIC_ENABLE_GUMROAD_TESTING=true`
  - Body: `email`, optional `product_id`
  - Grants instant test entitlement and sets testing auth cookies

- `POST /api/gumroad/testing/mock-purchase` (automatic mock purchase)
  - Enabled only when `NEXT_PUBLIC_ENABLE_GUMROAD_TESTING=true`
  - Uses current authenticated/dev-bypass session identity
  - Body: optional `product_id`
  - Grants test entitlement after checkout tab closes in pricing flow

### Security notes

- Gumroad is used only for purchase entitlement.
- Content assets are served from your own storage (Sanity/S3/CDN) through `/api/media/proxy`.
- Replace `src/lib/auth/session.ts` with your real auth provider integration.

### Real purchase flow

1. Buyer purchases on Gumroad.
2. Gumroad calls `/api/payments/webhook` with buyer email + product id.
3. Backend stores entitlement for that email.
4. Reader calls `/api/content/unlock` to check unlock state and load Sanity content metadata.
5. Reader embeds PDF/video using `/api/media/proxy` (entitlement enforced server-side).

### Mock purchase flow (development)

1. Set `NEXT_PUBLIC_ENABLE_GUMROAD_TESTING=true`.
2. Click pricing purchase button (opens Gumroad in a new tab).
3. Close the tab after simulated checkout.
4. App calls `/api/gumroad/testing/mock-purchase` and redirects to the reader.
5. Reader embeds internal PDF + video URLs when entitlement is present.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
