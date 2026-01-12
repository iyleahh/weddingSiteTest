import { Card } from "../components/UI";

export function BlankPage({ title, icon }) {
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
              This page is a placeholder. Add content when you're ready.
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
