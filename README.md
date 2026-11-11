# Resnart

A dark, ember-lit restaurant page for Resnart — fire on the plate, done right.
Hero, menu cloud, the food, the story, a tabbed tasting/bar/sunday showcase,
metrics, testimonials, a menu-priced come-through section, FAQ and a table
reservation form. Every section is its own component and all copy lives in one
file. A small Cloudflare Worker behind it serves the menu snapshot and captures
table reservations.

## Run it

```sh
npm install
npm run dev         # http://localhost:3000 (Vite + the Worker in workerd)
npm run build       # dist/client (assets) + dist/restanrt/index.js (Worker)
```

`bun` also works if it is installed and healthy on your machine; the project is
a standard Vite + React + Cloudflare Worker setup and builds with any JS runtime.

## Edit it

- `src/content.ts` holds every string, price and link. Start there.
- `src/sections/*` are the page sections. `src/App.tsx` stacks them; delete or
  reorder lines there to remove or move a section.
- `src/components/*` are the shared pieces: Logo, Aurora, KitchenMock, Monogram,
  Button, Container, Reveal, SectionHeading.
- `src/styles.css` holds the design tokens (colours, radii, fonts, keyframes).
  Everything rounded is a squircle via `corner-shape`; true circles use `.round`.
  Bordered surfaces use the `depth` utility instead of a border: an inset edge
  plus a top highlight, the same treatment as the Freebuff desktop app. The
  element must be positioned; recolour the edge with `--depth-edge`.
- `src/worker/index.ts` is the Cloudflare Worker. `/api/menu` returns the tasting
  menu snapshot, `/api/reserve` captures a table request, and `/api/subscribe` is
  a leftover email capture you can wire to a provider or D1.

## Deploy with Freebuff Sites

`deploy.json` already points at the build output. After `npm run build`, deploy
it with the `sites_deploy` tool (or the Sites API) from this directory.
