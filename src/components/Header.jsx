import { NavLink } from "react-router-dom";
import { theme } from "../config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
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
            <div className="text-sm font-semibold tracking-wide font-serif">Iyleah & Partner</div>
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
