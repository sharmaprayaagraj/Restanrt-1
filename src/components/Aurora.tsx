import { cx } from '../lib/cx'

// Slow-moving warm fields behind the hero and the closing call to action.
// Restaurant vibe: ember, flame and a little smoke, not a sterile gradient sky.
export function Aurora({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cx('pointer-events-none absolute inset-0 overflow-hidden', className)} style={{ opacity: intensity }}>
      <div className="round absolute left-1/2 top-[-30%] h-[80%] w-[80%] -translate-x-1/2 animate-aurora-a rounded-full bg-[radial-gradient(closest-side,rgb(255_80_40/0.5),rgb(255_120_50/0.18),transparent_60%)] blur-3xl" />
      <div className="round absolute left-[8%] top-[5%] h-[55%] w-[50%] animate-aurora-b rounded-full bg-[radial-gradient(closest-side,rgb(255_60_90/0.34),transparent)] blur-3xl" />
      <div className="round absolute right-[6%] top-[20%] h-[50%] w-[45%] animate-aurora-c rounded-full bg-[radial-gradient(closest-side,rgb(255_200_90/0.26),transparent)] blur-3xl" />
      <div className="absolute left-1/4 bottom-[-10%] h-1/2 w-2/3 animate-cursor-a rounded-full bg-[radial-gradient(closest-side,rgb(255_140_70/0.18),transparent)] blur-3xl" />
      <div className="absolute right-1/4 bottom-[-10%] h-1/2 w-2/3 animate-cursor-b rounded-full bg-[radial-gradient(closest-side,rgb(255_90_50/0.16),transparent)] blur-3xl" />
    </div>
  )
}
