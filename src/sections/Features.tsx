import { motion } from 'motion/react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Monogram } from '../components/Monogram'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  fire: FireVisual,
  veg: VegVisual,
  dough: DoughVisual,
  ferment: FermentVisual,
}

export function Features() {
  return (
    <section id="the-food" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(255_236_224/0.22)]">
                  <div className="relative flex-1 overflow-hidden">
                    <Visual />
                  </div>
                  {/* Fixed height so dividers line up across a row regardless of copy length. */}
                  <div className="relative h-[96px] border-t border-line px-6 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

const tongues = [
  { name: 'MC', hue: 12, x: 18, y: 30, anim: 'animate-cursor-a' },
  { name: 'DK', hue: 170, x: 62, y: 18, anim: 'animate-cursor-b' },
]

function FireVisual() {
  return (
    <div className="absolute inset-0 p-6 pb-0">
      <div className="depth relative h-[calc(100%+2px)] overflow-hidden rounded-t-[16px] bg-bg/50 p-5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-28 rounded-[4px] bg-glow" />
          <div className="ml-auto flex">
            <Monogram initials="MC" hue={12} className="ring-2 ring-surface" />
            <Monogram initials="DK" hue={170} className="-ml-2 ring-2 ring-surface" />
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-2 w-[92%] rounded-[4px] bg-white/[0.08]" />
          <div className="h-2 w-[76%] rounded-[4px] bg-white/[0.08]" />
          <div className="h-2 w-[84%] rounded-[4px] bg-accent/30" />
          <div className="h-2 w-[60%] rounded-[4px] bg-white/[0.08]" />
          <div className="h-2 w-[70%] rounded-[4px] bg-white/[0.08]" />
        </div>
        <div className="depth absolute bottom-5 left-5 inline-flex max-w-[260px] items-start gap-2 rounded-[12px] bg-surface-2 p-2.5">
          <Monogram initials="MC" hue={12} className="size-5 text-[9px]" />
          <p className="text-[11px] leading-snug text-muted">Brisket is charred and not sad. Stop apologising for the smoke.</p>
        </div>
        {tongues.map((t) => (
          <div key={t.name} className={cx('absolute', t.anim)} style={{ left: `${t.x}%`, top: `${t.y}%` }}>
            <span
              className="ml-3 mt-3 rounded-[8px] px-1.5 py-0.5 text-[11px] font-medium text-bg"
              style={{ background: `hsl(${t.hue} 80% 60%)` }}
            >
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const char = [
  { label: 'Rest the steak 10 min', color: '#ff7a45' },
  { label: 'Sear, then reverse-sear', color: '#ff4d6d' },
  { label: 'Crust is the point', color: '#ffb547' },
]

function VegVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <ol className="relative flex w-full max-w-[260px] flex-col gap-6">
        <svg aria-hidden className="absolute left-[19px] top-6 h-[calc(100%-48px)] w-px overflow-visible">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 6" className="animate-dash" strokeLinecap="round" />
        </svg>
        {char.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="depth relative flex h-11 items-center gap-3 rounded-[14px] bg-bg/60 pl-3 pr-4 text-[13px] backdrop-blur"
          >
            <span className="round size-3 shrink-0 ring-4 ring-surface" style={{ background: step.color, boxShadow: `0 0 16px ${step.color}66` }} />
            {step.label}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

const heights = [40, 58, 72, 52, 86, 68, 94, 78, 88, 100]

function DoughVisual() {
  return (
    <div className="absolute inset-0 flex items-end p-6">
      <div className="flex h-[78%] w-full items-end gap-2">
        {heights.map((b, i) => (
          <motion.div
            key={i}
            className="flex-1 origin-bottom rounded-[6px] bg-gradient-to-t from-accent-2/30 to-accent-2"
            style={{ height: `${b}%` }}
            initial={{ scaleY: 0.1, opacity: 0.4 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          />
        ))}
      </div>
      <div className="depth absolute left-6 top-6 rounded-[10px] bg-surface-2 px-2.5 py-1.5 text-[11px] text-muted">
        Crumb <span className="ml-1 text-accent-2">open</span>
      </div>
    </div>
  )
}

const jars = [
  { name: 'Kimchi', hue: 10, sat: 70 },
  { name: 'Garum', hue: 25, sat: 50 },
  { name: 'Koji', hue: 35, sat: 65 },
  { name: 'Vinegar', hue: 8, sat: 40 },
  { name: 'Funk', hue: 290, sat: 55 },
  { name: 'Brine', hue: 190, sat: 50 },
]

function FermentVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid grid-cols-6 gap-3">
        {jars.map((j, i) => (
          <div
            key={j.name}
            title={j.name}
            className="depth relative grid size-13 place-items-center rounded-[16px] animate-float"
            style={{
              animationDelay: `${(i % 6) * 0.4}s`,
              color: `hsl(${j.hue} ${j.sat}% 80%)`,
              background: `linear-gradient(180deg, hsl(${j.hue} ${j.sat}% 45% / 0.18), hsl(${j.hue} ${j.sat}% 25% / 0.06))`,
            }}
          >
            <span className="font-semibold">{j.name[0]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
