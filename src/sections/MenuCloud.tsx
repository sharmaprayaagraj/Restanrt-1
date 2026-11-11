import { Container } from '../components/Container'
import type { ReactElement } from 'react'
import { Reveal } from '../components/Reveal'
import { logos } from '../content'

const marks: Record<string, ReactElement> = {
  Resnart: <><path d="M4 18 L10 6 L14 14 L20 8" /><circle cx="17" cy="8.5" r="1.4" fill="currentColor" stroke="none" /></>,
  Fathom: <path d="M12 4v16M6 10c0 4 3 6 6 6s6-2 6-6" strokeLinecap="round" />,
  Slack: <path d="M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />,
  Northwind: <circle cx="12" cy="12" r="7" />,
  Vertex: <path d="M12 4 20 19H4z" strokeLinecap="round" strokeLinejoin="round" />,
  Lumen: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" strokeLinecap="round" strokeLinejoin="round" />,
}

export function MenuCloud() {
  const doubled = [...logos, ...logos]
  return (
    <section className="py-10">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] text-faint">Fire, then the rest. A few nights we cook for:</p>
        </Reveal>
        <div className="section-mask relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
            {doubled.map((name, i) => (
              <li key={`${name}-${i}`} className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-fg/45">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {marks[name]}
                </svg>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
