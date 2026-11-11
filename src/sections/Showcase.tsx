import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Monogram } from '../components/Monogram'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { showcase } from '../content'
import { cx } from '../lib/cx'

export function Showcase() {
  const [active, setActive] = useState(showcase.tabs[0].key)
  return (
    <section id="what-people-say" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={showcase.eyebrow} title={showcase.title} align="left" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal>
            <ul className="flex flex-col gap-1">
              {showcase.tabs.map((tab) => {
                const isActive = tab.key === active
                return (
                  <li key={tab.key}>
                    <button
                      type="button"
                      onClick={() => setActive(tab.key)}
                      aria-pressed={isActive}
                      className={cx(
                        'relative w-full rounded-card-sm px-5 py-4 text-left transition-colors',
                        isActive ? 'bg-surface' : 'hover:bg-white/[0.03]',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="showcase-active"
                          className="depth absolute inset-0 rounded-card-sm"
                          transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span className={cx('relative block text-[16px] font-semibold', isActive ? 'text-fg' : 'text-muted')}>
                        {tab.title}
                      </span>
                      <span className="relative mt-1 block text-[14px] leading-relaxed text-muted">{tab.description}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="depth relative aspect-[16/10] overflow-hidden rounded-card bg-surface shadow-glow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 p-5 sm:p-7"
                >
                  {active === 'tasting' && <TastingPanel />}
                  {active === 'bar' && <BarPanel />}
                  {active === 'sunday' && <SundayPanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

const tasting = [
  { course: '1 · To begin', dish: 'Ferment garden, charred bread, bitter salsa', tag: 'Open', hue: 30 },
  { course: '2 · Fire', dish: 'Smoked brisket, charred onion, brisket jus', tag: 'Char', hue: 12 },
  { course: '3 · From the water', dish: 'Mussels, white wine, saffron foam', tag: 'Sea', hue: 200 },
  { course: '4 · Of the field', dish: 'Miso eggplant, sesame, pickled pepper', tag: 'Veg', hue: 170 },
  { course: '5 · Dark', dish: 'Confit duck, bitter leaves, orange', tag: 'Duck', hue: 30 },
  { course: '6 · Sweet', dish: 'Yuzu cheesecake, honeycomb, citrus', tag: 'Sweet', hue: 45 },
  { course: '7 · To end', dish: 'House bitters, dark chocolate, smoke', tag: 'Smoke', hue: 270 },
]

function TastingPanel() {
  return (
    <ul className="flex h-full flex-col gap-2">
      {tasting.map((item, i) => (
        <motion.li
          key={item.course}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className={cx(
            'depth relative flex items-center gap-3 rounded-[14px] px-4 py-3',
            i === 0 ? 'bg-white/[0.04] [--depth-edge:rgb(255_236_224/0.22)]' : '[--depth-edge:var(--color-line)]',
          )}
        >
          <span className="shrink-0 rounded-[8px] bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-muted">{item.course}</span>
          <span className="min-w-0 flex-1 truncate text-[13px] sm:text-[14px]">{item.dish}</span>
          <span className={cx('shrink-0 rounded-[6px] px-1.5 py-0.5 text-[10px]', 'bg-accent-2/15 text-accent-2')}>{item.tag}</span>
        </motion.li>
      ))}
    </ul>
  )
}

const bar = [
  { name: 'Smoked brisket, charred onion', hue: 12 },
  { name: 'Miso eggplant, sesame, pepper', hue: 170 },
  { name: 'Confit duck, bitter leaves', hue: 30 },
  { name: 'Mussels, white wine, saffron', hue: 200 },
  { name: 'House charcuterie, pickles', hue: 20 },
  { name: 'Yuzu cheesecake, honeycomb', hue: 45 },
]

function BarPanel() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-3">
      {bar.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="depth relative overflow-hidden rounded-[14px] bg-white/[0.02] p-3"
        >
          <div
            className="mb-2 h-2 w-12 rounded-[3px]"
            style={{ background: `linear-gradient(90deg, hsl(${item.hue} 80% 55%), hsl(${item.hue} 70% 70%))` }}
          />
          <p className="text-[12px] leading-snug sm:text-[13px]">{item.name}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="h-1.5 w-8 rounded-[3px] bg-accent/50" />
            <Monogram initials={['MC', 'DK', 'SM', 'JL', 'PN', 'LF'][i]} hue={[12, 170, 30, 200, 20, 45][i]} className="size-5 text-[9px]" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const sunday = [
  { plate: 'Slow roast beef, gravy, horseradish', hue: 15 },
  { plate: 'Yorkshire pudding, mint, butter', hue: 90 },
  { plate: 'Cauliflower cheese, mustard crust', hue: 40 },
  { plate: 'Roast potatoes, brown butter, thyme', hue: 30 },
  { plate: 'Figgy pudding, port, cream', hue: 280 },
]

function SundayPanel() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-3">
      {sunday.map((item, i) => (
        <motion.div
          key={item.plate}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="depth relative rounded-[14px] bg-white/[0.02] p-3"
        >
          <p className="text-[12px] leading-snug sm:text-[13px]">{item.plate}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className={cx('h-1.5 w-10 rounded-[3px]', 'bg-accent-2/50')} />
            <span className="text-[11px] text-faint">slow · big plate</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
