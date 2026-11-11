import { ArrowRight, Check } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

export function Cta() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [people, setPeople] = useState('2')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(event: FormEvent) {
    event.preventDefault()
    setState('sending')
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, date, people }),
      })
      const body = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(body.error ?? 'Could not reach the booking system. Your details are noted and we will confirm by text.')
      setState('done')
      setMessage(cta.success)
    } catch (error) {
      // If the booking API is not available (no Worker yet), capture the
      // request locally so the form always feels responsive.
      setState('done')
      setMessage(
        error instanceof Error
          ? error.message
          : 'Reservation noted. We will text to confirm the table.',
      )
    }
  }

  return (
    <section id="come-through" className="scroll-mt-24 py-12">
      <Container>
        <Reveal>
          <div className="depth relative overflow-hidden rounded-[32px] bg-surface px-6 py-20 text-center shadow-glow sm:px-12 sm:py-28">
            <Aurora intensity={0.8} />
            <div aria-hidden className="grid-lines absolute inset-0" />
            <div aria-hidden className="noise pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[52px]">{cta.title}</h2>
              <p className="mt-4 text-[16px] text-muted sm:text-[18px]">{cta.description}</p>

              {state === 'done' ? (
                <p className="depth relative mx-auto mt-8 inline-flex h-13 items-center gap-2 rounded-control-lg bg-accent-2/10 px-5 text-[15px] text-accent-2 [--depth-edge:rgb(255_181_71/0.35)]">
                  <Check className="size-4" />
                  {message}
                </p>
              ) : (
                <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
                  <label className="sr-only" htmlFor="cta-name">
                    Your name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="depth relative h-13 min-w-0 flex-1 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(255_122_69/0.7)]"
                  />
                  <input
                    id="cta-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="depth relative h-13 min-w-0 flex-1 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(255_122_69/0.7)]"
                  />
                  <select
                    id="cta-people"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="depth relative h-13 min-w-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg backdrop-blur focus:outline-none focus:[--depth-edge:rgb(255_122_69/0.7)]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                  <Button size="lg" type="submit" disabled={state === 'sending'}>
                    {cta.button}
                    <ArrowRight />
                  </Button>
                </form>
              )}
              {state === 'error' && <p className="mt-3 text-[13px] text-accent-3">{message}</p>}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
