import React, { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Plane,
  MailQuestion,
  Sparkles,
  MapPin,
  Heart,
} from "lucide-react";

// =============================
// Update these two fields only
// =============================
const WEDDING_DATE_ISO = "2026-10-17T17:30:00-04:00"; // <-- Change to your wedding date/time (ISO string)
const COUPLE_LINE = "Iyleah & Partner"; // <-- Change the names
const LOCATION_LINE = "Location TBD"; // <-- Optional: e.g., "San Miguel de Allende" or "Cancún"

// =============================
// Theme tokens (easy to tweak)
// ============================= (easy to tweak)
// =============================
const theme = {
  // Watercolor / paper palette (soft marigold, rose, sage, sky)
  bg: "bg-[#fbf7f0]",
  ink: "text-neutral-900",
  muted: "text-neutral-700/80",
  // Simple, papery cards (less rounded, lighter borders)
  card: "border border-black/15 bg-white/70 shadow-[0_14px_45px_rgba(0,0,0,0.08)]",
  ring:
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7f0]",
  accent: "bg-gradient-to-r from-amber-500/90 via-rose-500/90 to-emerald-500/90",
  accentText: "text-amber-900/80",
};

// =============================
// Watercolor / paper texture
// =============================
const PAPER_SVG = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .55 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)' opacity='.35'/>
</svg>`);

const paperTextureStyle = {
  backgroundImage: `url("data:image/svg+xml,${PAPER_SVG}")`,
  backgroundSize: "260px 260px",
};

const watercolorWashStyle = {
  backgroundImage:
    "radial-gradient(900px 380px at 18% 18%, rgba(59,130,246,0.10), transparent 55%)," +
    "radial-gradient(760px 360px at 82% 28%, rgba(244,63,94,0.10), transparent 60%)," +
    "radial-gradient(820px 420px at 55% 88%, rgba(16,185,129,0.10), transparent 55%)," +
    "radial-gradient(700px 360px at 45% 55%, rgba(245,158,11,0.10), transparent 60%)",
};

// =============================
// Utilities
// =============================
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isDone: diff === 0 };
}

function format2(n) {
  return String(n).padStart(2, "0");
}

// =============================
// App Shell
// =============================
export default function App() {
  return (
    <BrowserRouter>
      <div className={`min-h-screen ${theme.bg} ${theme.ink} antialiased`}>
        <SiteBackground />
        <Header />

        <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel" element={<BlankPage title="Travel Information" icon={<Plane className="h-5 w-5" />} />} />
          <Route path="/rsvp" element={<BlankPage title="RSVP" icon={<MailQuestion className="h-5 w-5" />} />} />
          <Route path="/save-the-date" element={<BlankPage title="Save The Date" icon={<CalendarDays className="h-5 w-5" />} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// =============================
// Layout Components
// =============================
function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/travel", label: "Travel Information" },
    { to: "/rsvp", label: "RSVP" },
    { to: "/save-the-date", label: "Save The Date" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b border-black/10 bg-[#fbf7f0]/75 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.08)] ring-1 ring-black/10">
            <span className="text-lg">✶</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide font-serif">{COUPLE_LINE}</div>
            <div className="text-xs text-neutral-600">Wedding Website</div>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to}>
              {l.label}
            </NavItem>
          ))}
        </nav>

        <MobileNav links={links} />
      </div>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-xl px-3 py-2 text-sm font-medium transition",
          "hover:bg-white/60",
          isActive ? "bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/10" : "text-neutral-800/80",
          theme.ring,
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

function MobileNav({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`rounded-xl bg-white/70 px-3 py-2 text-sm font-medium shadow-[0_6px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/10 ${theme.ring}`}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-14 w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm shadow-[0_18px_55px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-col p-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-3 py-3 text-sm font-medium transition",
                      isActive ? "bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.06)] ring-1 ring-black/10" : "hover:bg-white/60",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#fbf7f0]/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-neutral-700/80 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Heart className="h-4 w-4" />
          <span>Made with love. Update the date and names at the top of this file.</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} {COUPLE_LINE}</div>
      </div>
    </footer>
  );
}

// =============================
// Pages
// =============================
function HomePage() {
  const target = new Date(WEDDING_DATE_ISO);

  return (
    <div className="space-y-10">
      <HeroSection target={target} />

      <section className="grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold font-serif">A celebration of two cultures</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Modern, colorful, and elegant—blending Mexican vibrance with Indian richness.
                This site is designed to stay simple now and scale later.
              </p>
            </div>
            <div className="hidden sm:block">
              <Badge>Mexican ✦ Indian</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoRow
              icon={<Sparkles className="h-5 w-5" />}
              title="Dress & vibe"
              text="Festive color, elevated details. Think marigold + papel picado + mehndi." 
            />
            <InfoRow
              icon={<MapPin className="h-5 w-5" />}
              title="Location"
              text="Add venue details here when ready. (Placeholder)" 
            />
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={paperTextureStyle} />
            <div className="pointer-events-none absolute inset-0 opacity-[0.55]" style={watercolorWashStyle} />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Quick update area</div>
                <div className="text-xs text-neutral-600">
                  Use this box for announcements: hotel blocks, schedule, RSVP launch date, etc.
                </div>
              </div>
              <span className="hidden rounded-xl bg-white/60 px-3 py-2 text-xs font-semibold text-amber-900/80 ring-1 ring-black/10 sm:inline">
                Coming soon
              </span>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-5">
          <h3 className="text-lg font-semibold font-serif">Explore</h3>
          <p className="mt-2 text-sm text-neutral-600">
            These sections are intentionally blank for now—so you can fill them in as you go.
          </p>

          <div className="mt-5 grid gap-3">
            <LinkCard
              to="/travel"
              title="Travel Information"
              desc="Flights, hotels, and local tips."
              icon={<Plane className="h-5 w-5" />}
            />
            <LinkCard
              to="/rsvp"
              title="RSVP"
              desc="Form will live here when you’re ready."
              icon={<MailQuestion className="h-5 w-5" />}
            />
            <LinkCard
              to="/save-the-date"
              title="Save The Date"
              desc="Details, calendar links, and shareable graphics."
              icon={<CalendarDays className="h-5 w-5" />}
            />
          </div>
        </Card>
      </section>

      <section>
        <div className="grid gap-6 lg:grid-cols-3">
          <MiniFeature
            title="Modular"
            text="Components are small and easy to edit—swap sections without breaking the layout."
          />
          <MiniFeature
            title="Mobile-first"
            text="Navigation collapses cleanly and spacing stays comfortable on small screens."
          />
          <MiniFeature
            title="Theme-ready"
            text="Motifs + palette are centralized so you can adjust the vibe in one place."
          />
        </div>
      </section>
    </div>
  );
}

function BlankPage({ title, icon }) {
  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            {icon}
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-neutral-600">
              This page is a placeholder. Add content when you’re ready.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white/60 p-4 ring-1 ring-black/5">
          <p className="text-sm text-neutral-700">
            Tip: Keep each section as its own component (like <code className="rounded bg-white px-1">TravelFAQ</code>,
            <code className="rounded bg-white px-1 ml-1">HotelList</code>, or <code className="rounded bg-white px-1 ml-1">RSVPForm</code>)
            so updates are fast.
          </p>
        </div>
      </Card>
    </div>
  );
}

// =============================
// Hero + Countdown
// =============================
function HeroSection({ target }) {
  const { days, hours, minutes, seconds, isDone } = useCountdown(WEDDING_DATE_ISO);
  const readableDate = useMemo(
    () =>
      target.toLocaleString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [target]
  );

  return (
    <section className="relative overflow-hidden rounded-lg border border-black/15 bg-white/55 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
      {/* Paper + watercolor */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]" style={watercolorWashStyle} />
      <HeroMotifs />

      <div className="relative grid gap-0 lg:grid-cols-12">
        {/* Left: “photo/illustration” canvas */}
        <div className="relative min-h-[22rem] lg:col-span-7">
          <div className="absolute inset-0">
            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            {/* Watercolor meadow vibe */}
            <div className="absolute inset-0 opacity-[0.9]" style={watercolorWashStyle} />
            <div className="absolute inset-0 opacity-[0.14]" style={paperTextureStyle} />
          </div>

          <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-4xl font-semibold tracking-tight font-serif text-neutral-900 drop-shadow-sm sm:text-5xl"
            >
              {COUPLE_LINE}
            </motion.h1>
            <div className="mt-2 text-sm text-neutral-900/75">
              We’re getting married!
            </div>
          </div>
        </div>

        {/* Right: invitation-style info panel */}
        <div className="relative lg:col-span-5">
          <div className="relative h-full border-t border-black/10 bg-[#fbf7f0]/70 p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="pointer-events-none absolute inset-0 opacity-[0.20]" style={paperTextureStyle} />

            <div className="relative">
              <div className="text-center">
                <div className="text-lg font-semibold font-serif text-neutral-900">{LOCATION_LINE}</div>
                <div className="mt-1 text-sm text-neutral-800/70">{readableDate}</div>
              </div>

              <div className="mt-6 text-center text-sm tracking-wide text-neutral-800/75">
                {isDone ? (
                  <span className="font-semibold">It’s wedding time!</span>
                ) : (
                  <span>
                    {days} Days&nbsp;&nbsp;{format2(hours)} Hrs&nbsp;&nbsp;{format2(minutes)} Min&nbsp;&nbsp;{format2(seconds)} Sec
                  </span>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <NavLink
                  to="/rsvp"
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center justify-center rounded-md border border-black/25 bg-white/70 px-6 py-2 text-sm font-semibold tracking-wide text-neutral-900 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition",
                      "hover:bg-white/90",
                      isActive ? "" : "",
                      theme.ring,
                    ].join(" ")
                  }
                >
                  RSVP
                </NavLink>
              </div>

              <div className="mt-6 text-center text-xs text-neutral-800/60">
                Update date in <code className="rounded bg-white/60 px-1">WEDDING_DATE_ISO</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimePill({ label, value }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white/70 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]" style={watercolorWashStyle} />
      <div className="relative">
        <div className="text-[11px] font-semibold tracking-wide text-neutral-700/80">{label}</div>
        <div className="mt-1 text-3xl font-semibold tabular-nums text-neutral-900">{value}</div>
      </div>
    </div>
  );
}

// =============================
// Visual Motifs (Mexican + Indian)
// =============================
function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* paper texture */}
      <div className="absolute inset-0 opacity-[0.22]" style={paperTextureStyle} />

      {/* watercolor washes (subtle) */}
      <div className="absolute inset-0 opacity-[0.9]" style={watercolorWashStyle} />

      {/* very subtle papel picado band */}
      <div className="absolute left-0 right-0 top-0 h-24 opacity-[0.10]">
        <PapelPicadoBand />
      </div>
    </div>
  );
}

function HeroMotifs() {
  return (
    <>
      {/* Rangoli-inspired corner */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 opacity-40">
        <Rangoli />
      </div>
      {/* Papel picado corner */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 opacity-35">
        <PapelPicadoTile />
      </div>
      {/* Glow ring */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl" />
      </div>
    </>
  );
}

function PapelPicadoBand() {
  // Simple repeating triangles; lightweight and editable
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
      {/* cutouts */}
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

// =============================
// Reusable UI bits
// =============================
function Card({ className = "", children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-6 sm:p-8 ${theme.card} ${className}`}
    >
      {/* paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={paperTextureStyle}
      />
      {/* soft watercolor pooling near edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={watercolorWashStyle}
      />
      {/* deckle-edge hint (subtle) */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold text-neutral-800/80 ring-1 ring-black/10">
      {children}
    </span>
  );
}

function InfoRow({ icon, title, text }) {
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

function LinkCard({ to, title, desc, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "group relative overflow-hidden rounded-md border border-black/15 bg-white/65 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition",
          "hover:bg-white/75",
          isActive ? "ring-1 ring-black/10" : "",
          theme.ring,
        ].join(" ")
      }
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
    </NavLink>
  );
}

function MiniFeature({ title, text }) {
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
