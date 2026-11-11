import { motion } from 'motion/react'
import { Calendar, MapPin, UtensilsCrossed, Clock } from 'lucide-react'

import { LogoMark } from './Logo'
import { cx } from '../lib/cx'

const dishes = [
  { name: 'Smoked brisket, charred onion, brisket jus', tag: 'Fire', hue: 12, tone: 'accent' },
  { name: 'Miso eggplant, sesame, pickled pepper', tag: 'Veg', hue: 170, tone: 'violet' },
  { name: 'Confit duck, bitter leaves, orange', tag: 'Duck', hue: 30, tone: 'teal' },
  { name: 'Roast bone marrow, hyper, pickles', tag: 'Marrow', hue: 20, tone: 'accent' },
  { name: 'Mussels, white wine, saffron foam', tag: 'Mussels', hue: 200, tone: 'violet' },
  { name: 'Yuzu cheesecake, honeycomb, citrus', tag: 'Dessert', hue: 45, tone: 'teal' },
]

const toneClass: Record<string, string> = {
  accent: 'bg-accent/15 text-accent',
  violet: 'bg-accent-3/15 text-accent-3',
  teal: 'bg-accent-2/15 text-accent-2',
}

export function KitchenMock() {
  return (
    <div className="depth relative flex aspect-[16/10] w-full overflow-hidden rounded-window bg-surface text-left shadow-glow sm:aspect-[16/9]">
      {/* Sidebar */}
      <aside className="hidden w-[200px] shrink-0 flex-col border-r border-line bg-bg/60 p-3 sm:flex">
        <div className="flex items-center gap-2 px-1.5 py-1">
          <LogoMark className="size-6 rounded-[8px]" />
          <span className="text-[12px] font-semibold">Resnart</span>
        </div>
        <ul className="mt-4 flex flex-col gap-0.5">
          {[
            { icon: UtensilsCrossed, label: 'The food', active: true },
            { icon: Calendar, label: 'Book', active: false },
            { icon: MapPin, label: 'Where', active: false },
            { icon: Clock, label: 'Hours', active: false },
          ].map(({ icon: Icon, label, active }) => (
            <li
              key={label}
              className={cx(
                'flex h-8 items-center gap-2 rounded-[10px] px-2 text-[12px]',
                active ? 'bg-white/[0.07] text-fg' : 'text-muted',
              )}
            >
              <Icon className="size-3.5" />
              <span className="flex-1">{label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 px-2 text-[11px] text-faint">From the kitchen tonight</p>
        <ul className="mt-1 flex flex-col gap-0.5">
          {dishes.map((d) => (
            <li key={d.name} className="flex h-7 items-center gap-2 rounded-[10px] px-2 text-[12px] text-muted">
              <span className="size-2 rounded-[3px]" style={{ background: `hsl(${d.hue} 80% 60%)` }} />
              <span className="truncate">{d.name}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-1.5 px-1.5">
          <span className="text-[11px] text-faint">Fire lit · 7pm open</span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center justify-between border-b border-line px-4">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-medium">Tonight's menu</span>
            <span className="hidden text-[12px] text-faint sm:inline">Friday · 7pm to late</span>
          </div>
          <div className="depth relative flex items-center gap-1 rounded-[10px] bg-white/[0.04] p-0.5 text-[11px]">
            <span className="rounded-[8px] bg-white/[0.08] px-2 py-1 text-fg">Tasting</span>
            <span className="px-2 py-1 text-muted">A la carte</span>
            <span className="px-2 py-1 text-muted">Bar</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-[auto_1fr] gap-3 p-4">
          {[
            { label: 'Fire lit', value: 'ON', delta: 'open', tone: 'text-accent' },
            { label: 'Tables left', value: '4', delta: 'now', tone: 'text-accent' },
            { label: 'Bar seats', value: '9', delta: 'walk-in', tone: 'text-accent-2' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="depth relative rounded-[14px] bg-white/[0.02] p-3"
            >
              <p className="text-[11px] text-muted">{kpi.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-[20px] font-semibold tracking-tight">{kpi.value}</span>
                <span className={cx('text-[11px]', kpi.tone)}>{kpi.delta}</span>
              </div>
            </motion.div>
          ))}

          <div className="depth relative col-span-3 flex flex-col rounded-[14px] bg-white/[0.02] p-3 md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-medium">Fire menu · tonight</p>
              <span className="text-[11px] text-faint">7 courses</span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {dishes.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.07, duration: 0.4 }}
                  className="flex items-center justify-between gap-3 rounded-[10px] bg-white/[0.02] px-3 py-2"
                >
                  <span className="min-w-0 flex-1 truncate text-[12px] text-fg/90">{d.name}</span>
                  <span className={cx('shrink-0 rounded-[6px] px-1.5 py-0.5 text-[10px]', toneClass[d.tone])}>{d.tag}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="depth relative col-span-3 hidden flex-col rounded-[14px] bg-white/[0.02] p-3 md:col-span-1 md:flex">
            <p className="text-[12px] font-medium">From the pass</p>
            <ul className="mt-2 flex flex-col gap-2">
              {dishes.slice(0, 6).map((d) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.09, duration: 0.4 }}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="min-w-0 flex-1 truncate text-[11px] text-fg/90">{d.name}</span>
                  <span className="shrink-0 text-[11px] text-faint">à la carte</span>
                </motion.div>
              ))}
            </ul>
            <div className="mt-auto border-t border-line pt-3 text-[11px] text-faint">
              Reservations end at 10pm. Walk-ins eat at the bar till late.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
