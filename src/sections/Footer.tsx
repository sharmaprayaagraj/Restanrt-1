import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { footer } from '../content'

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{footer.blurb}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-fg">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-muted transition-colors hover:text-fg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">{footer.legal}</p>
          {footer.socials && (
            <div className="flex items-center gap-1">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-[11px] text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}

