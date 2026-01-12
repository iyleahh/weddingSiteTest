import { paperTextureStyle, watercolorWashStyle } from "../config";

export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.22]" style={paperTextureStyle} />
      <div className="absolute inset-0 opacity-[0.9]" style={watercolorWashStyle} />
      <div className="absolute left-0 right-0 top-0 h-24 opacity-[0.10]">
        <PapelPicadoBand />
      </div>
    </div>
  );
}

export function HeroMotifs() {
  return (
    <>
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 opacity-40">
        <Rangoli />
      </div>
      <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 opacity-35">
        <PapelPicadoTile />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
      </div>
    </>
  );
}

function PapelPicadoBand() {
  const flags = Array.from({ length: 18 });
  return (
    <svg viewBox="0 0 1200 120" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="10" fill="url(#pp)" />
      {flags.map((_, i) => {
        const x = i * 70;
        return (
          <g key={i}>
            <path
              d={`M ${x} 10 L ${x + 60} 10 L ${x + 30} 90 Z`}
              fill="url(#pp)"
              opacity="0.9"
            />
            <path
              d={`M ${x + 12} 22 L ${x + 48} 22 L ${x + 30} 70 Z`}
              fill="white"
              opacity="0.45"
            />
          </g>
        );
      })}
    </svg>
  );
}

function PapelPicadoTile() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="55%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d="M20 10h160v180H20z" fill="url(#tile)" opacity="0.85" />
      <g fill="white" opacity="0.45">
        <circle cx="60" cy="60" r="18" />
        <circle cx="140" cy="60" r="18" />
        <path d="M60 118c18 18 62 18 80 0v28H60z" />
        <path d="M40 30h120v10H40z" />
      </g>
      <path d="M20 10h160v180H20z" fill="none" stroke="white" opacity="0.35" strokeWidth="6" />
    </svg>
  );
}

function Rangoli() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="rg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#f43f5e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="120" fill="url(#rg)" />
      <g fill="none" stroke="white" opacity="0.5" strokeWidth="6">
        <circle cx="150" cy="150" r="92" />
        <circle cx="150" cy="150" r="64" />
        <circle cx="150" cy="150" r="36" />
      </g>
      <g fill="white" opacity="0.45">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 150 + Math.cos(a) * 92;
          const y = 150 + Math.sin(a) * 92;
          return <circle key={i} cx={x} cy={y} r={10} />;
        })}
      </g>
    </svg>
  );
}
