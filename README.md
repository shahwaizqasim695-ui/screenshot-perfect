# Dimitri Flynn — LALALAND: A Hard Look

An editorial, cinematic author website built with React, TanStack Start, Tailwind v4, Lucide, and Framer Motion. The supported Lovable routing and TypeScript bootstrap are retained.

## Content and integrations

Edit verified author details, retailer URLs, other works, contact details and excerpt passages in `src/data/site-config.ts`. The uploaded cover is preserved unchanged; generated scenery is illustrative, not historical photography. Media lives in CDN asset pointers.

Purchase and author-collection links are pending. Contact and newsletter forms validate input but do not send, store or simulate successful submissions. Connecting a delivery service requires a separate integration; enabling a configuration flag alone is not sufficient.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

`npm run build` builds for deployment; `npm test` runs tests. Required pages: `/`, `/about`, `/books`, `/books/lalaland`, `/excerpt`, `/contact`, `/privacy-policy`, `/terms`.

Publish after verified contact and retailer details are ready. No production domain is configured, so a domain-specific sitemap or social image URL is intentionally not fabricated. The legal pages reflect the current unconnected forms and should be reviewed before collecting personal data.
