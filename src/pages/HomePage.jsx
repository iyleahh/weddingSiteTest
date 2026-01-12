import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  CalendarDays,
  Plane,
  MailQuestion,
  Sparkles,
  MapPin,
} from "lucide-react";
import { WEDDING_DATE_ISO, LOCATION_LINE } from "../config";
import { useCountdown, format2 } from "../utils";
import { Card, Badge, InfoRow, LinkCard, MiniFeature } from "../components/UI";
import { HeroMotifs } from "../components/Background";
import { paperTextureStyle, watercolorWashStyle } from "../config";
import { NavLink } from "react-router-dom";

export function HomePage() {
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
              desc="Form will live here when you're ready."
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
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]" style={paperTextureStyle} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.55]" style={watercolorWashStyle} />
      <HeroMotifs />

      <div className="relative grid gap-0 lg:grid-cols-12">
        <div className="relative min-h-[22rem] lg:col-span-7">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
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
              Iyleah & Partner
            </motion.h1>
            <div className="mt-2 text-sm text-neutral-900/75">
              We're getting married!
            </div>
          </div>
        </div>

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
                  <span className="font-semibold">It's wedding time!</span>
                ) : (
                  <span>
                    {days} Days&nbsp;&nbsp;{format2(hours)} Hrs&nbsp;&nbsp;{format2(minutes)} Min&nbsp;&nbsp;{format2(seconds)} Sec
                  </span>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <NavLink
                  to="/rsvp"
                  className="inline-flex items-center justify-center rounded-md border border-black/25 bg-white/70 px-6 py-2 text-sm font-semibold tracking-wide text-neutral-900 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
                >
                  RSVP
                </NavLink>
              </div>

              <div className="mt-6 text-center text-xs text-neutral-800/60">
                Update date in <code className="rounded bg-white/60 px-1">src/config.js</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
