# Growth Orbits

A production-oriented B2B marketing website starter based on the supplied sitemap and visual guide.

## Stack

- Next.js App Router
- React and strict TypeScript
- Compact custom CSS design system
- Zod server-side form validation
- Upstash-compatible distributed rate limiting
- Resend-compatible contact delivery
- Vitest and Playwright test scaffolding

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production configuration

Set these variables in the hosting platform:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL=Growth Orbits <website@your-domain.com>
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

The contact route validates input, checks same-origin requests, limits body size, applies rate limiting, uses a honeypot field, sends plain-text notification content, and returns non-cacheable responses.

## Content model

Most company content and all secondary pages are centralized in `src/content/site.ts`. The catch-all App Router page renders the sitemap from one typed registry instead of duplicating templates across many route folders.

## Before launch

1. Replace all `.example` contact details.
2. Add the real legal entity, privacy terms, GDPR process, and counsel-reviewed policies.
3. Replace illustrative engagements with verified evidence.
4. Configure email delivery and distributed rate limiting.
5. Add the actual scheduling link or CRM workflow.
6. Run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run test:e2e`.
7. Perform accessibility, load, security-header, and production monitoring checks.

## Reference files

The supplied sitemap PDF and visual guide screenshot are preserved in `docs/` for implementation traceability.
