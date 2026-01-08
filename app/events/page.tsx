import { getEvents, getSettings } from "@/lib/content";
import { Section } from "@/components/Section";

export default function EventsPage() {
  const settings = getSettings();
  const events = getEvents();

  const featured = events.filter(e => e.featured);
  const upcoming = events.filter(e => !e.featured);

  return (
    <>
      <Section title="Events & Programming" subtitle="Upcoming events, semester schedule, and key documents">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold">Chapter handbook</div>
            <div className="mt-2 text-sm text-neutral-700">
              Policies, expectations, points, dues, and chapter operations.
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href={settings.handbookUrl}>Open handbook</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold">Semester schedule</div>
            <div className="mt-2 text-sm text-neutral-700">
              The most up-to-date schedule lives in our calendar.
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href={settings.calendarEmbedUrl}>Open calendar</a>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Featured events">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((e) => (
            <div key={e.title} className="rounded-2xl border p-5 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-wide text-neutral-500">{e.category}</div>
              <div className="mt-1 font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-neutral-700">{e.date} • {e.time ?? "TBD"} • {e.location ?? "TBD"}</div>
              {e.description && <div className="mt-2 text-sm text-neutral-700">{e.description}</div>}
              {e.rsvp && <div className="mt-3 text-sm"><a className="underline" href={e.rsvp}>RSVP</a></div>}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Calendar">
        <div className="rounded-2xl border overflow-hidden bg-white shadow-sm">
          <iframe
            title="Psi Chi Calendar"
            src={settings.calendarEmbedUrl}
            className="w-full"
            style={{ height: 720 }}
          />
        </div>
      </Section>

      <Section title="More events">
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((e) => (
            <div key={e.title} className="rounded-2xl border p-5 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-wide text-neutral-500">{e.category}</div>
              <div className="mt-1 font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-neutral-700">{e.date} • {e.time ?? "TBD"} • {e.location ?? "TBD"}</div>
              {e.description && <div className="mt-2 text-sm text-neutral-700">{e.description}</div>}
              {e.rsvp && <div className="mt-3 text-sm"><a className="underline" href={e.rsvp}>RSVP</a></div>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
