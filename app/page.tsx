import { getEvents, getMonthlyPosts, getPage, getSettings, getWeeklyPosts } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Section } from "@/components/Section";
import { ButtonLink, Card } from "@/components/Cards";
import Link from "next/link";

export default function HomePage() {
  const settings = getSettings();
  const home = getPage("home");
  const events = getEvents().filter(e => e.featured).slice(0, 2);
  const weekly = getWeeklyPosts()[0];
  const monthly = getMonthlyPosts()[0];

  return (
    <>
      <section className="mx-auto max-w-content px-4 py-14">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="text-sm text-neutral-600">{home.frontmatter.subtitle}</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{home.frontmatter.title}</h1>
          <div className="mt-5 text-neutral-700">
            <Markdown content={home.content} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={home.frontmatter.cta?.primaryHref ?? "/membership"}>{home.frontmatter.cta?.primaryText ?? "Apply"}</ButtonLink>
            <ButtonLink variant="secondary" href={home.frontmatter.cta?.secondaryHref ?? "/membership"}>{home.frontmatter.cta?.secondaryText ?? "Join"}</ButtonLink>
            <ButtonLink variant="secondary" href="/events">View Events</ButtonLink>
          </div>
        </div>
      </section>

      <Section title="Quick links">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Psi Chi vs Psychology Club" href="/psi-chi-vs-psychology-club">
            Clear eligibility guidance and how the two groups work together.
          </Card>
          <Card title="Upcoming events" href="/events">
            View featured events and the semester schedule.
          </Card>
          <Card title="Membership" href="/membership">
            Apply to Psi Chi, join Psychology Club, and access forms.
          </Card>
        </div>
      </Section>

      <Section title="Featured events">
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl border p-5 bg-white shadow-sm">
              <div className="text-xs uppercase tracking-wide text-neutral-500">{e.category}</div>
              <div className="mt-1 font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-neutral-700">{e.date} • {e.time ?? "TBD"} • {e.location ?? "TBD"}</div>
              {e.description && <div className="mt-2 text-sm text-neutral-700">{e.description}</div>}
              {e.rsvp && <div className="mt-3 text-sm"><a className="underline" href={e.rsvp}>RSVP</a></div>}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm">
          <Link className="underline" href="/events">See all events</Link>
        </div>
      </Section>

      <Section title="Latest updates">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title={weekly?.frontmatter?.title ?? "Weekly newsletter"} href="/news/weekly">
            {weekly?.frontmatter?.summary ?? "Read the latest chapter newsletter."}
          </Card>
          <Card title={monthly?.frontmatter?.title ?? "Monthly feature"} href="/news/monthly">
            {monthly?.frontmatter?.summary ?? "Read the latest monthly essay."}
          </Card>
        </div>
      </Section>

      <Section title="Community">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Ask a psychology question" href="/community">
            Post your question in the chapter forum.
          </Card>
          <Card title="Suggest an activity" href="/community">
            Recommend events, speakers, workshops, and more.
          </Card>
        </div>
      </Section>
    </>
  );
}
