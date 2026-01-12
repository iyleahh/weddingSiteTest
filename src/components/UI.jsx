import { paperTextureStyle, watercolorWashStyle, theme } from "../config";

export function Card({ className = "", children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-6 sm:p-8 ${theme.card} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={paperTextureStyle}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={watercolorWashStyle}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold text-neutral-800/80 ring-1 ring-black/10">
      {children}
    </span>
  );
}

export function InfoRow({ icon, title, text }) {
  return (
    <div className="relative flex gap-3 rounded-md border border-black/15 bg-white/65 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.07)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={watercolorWashStyle} />
      <div className="relative grid h-10 w-10 flex-none place-items-center rounded-md bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/10">
        {icon}
      </div>
      <div className="relative">
        <div className="text-sm font-semibold font-serif">{title}</div>
        <div className="mt-1 text-sm text-neutral-800/75">{text}</div>
      </div>
    </div>
  );
}

export function LinkCard({ to, title, desc, icon, onClick }) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-md border border-black/15 bg-white/65 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition hover:bg-white/75 ${theme.ring}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={watercolorWashStyle} />

      <div className="relative flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/10">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold font-serif">{title}</div>
            <span className="text-xs text-neutral-700/60 opacity-0 transition group-hover:opacity-100">→</span>
          </div>
          <div className="mt-1 text-sm text-neutral-800/75">{desc}</div>
        </div>
      </div>
    </a>
  );
}

export function MiniFeature({ title, text }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-black/15 bg-white/55 p-6 shadow-[0_16px_44px_rgba(0,0,0,0.07)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={watercolorWashStyle} />
      <div className="relative">
        <div className="text-base font-semibold font-serif">{title}</div>
        <div className="mt-2 text-sm text-neutral-800/75">{text}</div>
      </div>
    </div>
  );
}
