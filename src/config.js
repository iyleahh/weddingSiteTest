// =============================
// Configuration & Constants
// =============================

// Update these two fields only
export const WEDDING_DATE_ISO = "2026-10-17T17:30:00-04:00";
export const COUPLE_LINE = "Iyleah & Partner";
export const LOCATION_LINE = "Location TBD";

// Theme tokens (easy to tweak)
export const theme = {
  bg: "bg-[#fbf7f0]",
  ink: "text-neutral-900",
  muted: "text-neutral-700/80",
  card: "border border-black/15 bg-white/70 shadow-[0_14px_45px_rgba(0,0,0,0.08)]",
  ring: "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7f0]",
  accent: "bg-gradient-to-r from-amber-500/90 via-rose-500/90 to-emerald-500/90",
  accentText: "text-amber-900/80",
};

// Watercolor / paper texture SVG
const PAPER_SVG = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)' opacity='.35'/>
</svg>`);

export const paperTextureStyle = {
  backgroundImage: `url("data:image/svg+xml,${PAPER_SVG}")`,
  backgroundSize: "260px 260px",
};

export const watercolorWashStyle = {
  backgroundImage:
    "radial-gradient(900px 380px at 18% 18%, rgba(59,130,246,0.10), transparent 55%)," +
    "radial-gradient(760px 360px at 82% 28%, rgba(244,63,94,0.10), transparent 60%)," +
    "radial-gradient(820px 420px at 55% 88%, rgba(16,185,129,0.10), transparent 55%)," +
    "radial-gradient(700px 360px at 45% 55%, rgba(245,158,11,0.10), transparent 60%)",
};
