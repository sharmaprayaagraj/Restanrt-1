import { Hono } from 'hono'

// The Worker in front of the static site. Add API routes here; everything
// else falls through to the built assets (single-page-application mode).
type Env = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Simple menu snapshot for the showcase panels, so the page never shows a
// blank mock. Replace with a real menu feed or D1 table when you have one.
const MENU = [
  { course: '1 · To begin', dish: 'Ferment garden, charred bread, bitter salsa', tag: 'Open' },
  { course: '2 · Fire', dish: 'Smoked brisket, charred onion, brisket jus', tag: 'Char' },
  { course: '3 · From the water', dish: 'Mussels, white wine, saffron foam', tag: 'Sea' },
  { course: '4 · Of the field', dish: 'Miso eggplant, sesame, pickled pepper', tag: 'Veg' },
  { course: '5 · Dark', dish: 'Confit duck, bitter leaves, orange', tag: 'Duck' },
  { course: '6 · Sweet', dish: 'Yuzu cheesecake, honeycomb, citrus', tag: 'Sweet' },
  { course: '7 · To end', dish: 'House bitters, dark chocolate, smoke', tag: 'Smoke' },
]

app.get('/api/menu', (c) => c.json({ menu: MENU }))

// Table reservation capture. Wire this to your booking system or a D1 table;
// it currently just acknowledges the request.
app.post('/api/reserve', async (c) => {
  const body = await c.req.json<{ name?: string; date?: string; people?: number }>().catch(() => ({}) as { name?: string; date?: string; people?: number })
  const name = body.name?.trim() ?? ''
  const date = body.date?.trim() ?? ''
  const people = Math.max(1, Math.min(12, Number(body.people) || 2))
  if (!name) {
    return c.json({ error: 'Tell us your name so we know who is coming.' }, 400)
  }
  if (!date) {
    return c.json({ error: 'Pick a night.' }, 400)
  }
  return c.json({ ok: true, reservation: { name, date, people } })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
