import { cx } from '../lib/cx'

export function Monogram({ initials, hue, className }: { initials: string; hue: number; className?: string }) {
  return (
    <span
      className={cx('round grid size-6 shrink-0 place-items-center text-[10px] font-semibold text-white', className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 62%), hsl(${hue + 40} 70% 48%))`,
      }}
    >
      {initials}
    </span>
  )
}
