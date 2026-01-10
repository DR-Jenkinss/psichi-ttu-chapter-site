import officersData from "@/content/officers.json";

type Officer = {
  name: string;
  role: string;
  classification: string;
  major: string;
  minor: string;
  email: string;
};

const officers = officersData as Officer[];

function roleGroup(role: string) {
  const r = role.toLowerCase();
  if (r.includes("faculty advisor")) return "Faculty Advisor";
  if (
    r.includes("president") ||
    r.includes("vice") ||
    r.includes("secretary") ||
    r.includes("treasurer")
  ) {
    return "Executive Board";
  }
  return "Chairs";
}

function sortOrder(role: string) {
  const r = role.toLowerCase();
  if (r.includes("faculty advisor")) return 99;

  if (r.includes("president")) return 1;
  if (r.includes("vice")) return 2;
  if (r.includes("secretary")) return 3;
  if (r.includes("treasurer")) return 4;

  if (r.includes("membership")) return 10;
  if (r.includes("volunteer")) return 11;
  if (r.includes("social")) return 12;

  return 50;
}

function MailtoLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
    >
      {email}
      <span className="text-gray-500">↗</span>
    </a>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
      <div className="text-gray-600">{label}</div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}

function OfficerCard({ person }: { person: Officer }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            {person.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-gray-700">
            {person.role}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <InfoRow label="Classification:" value={person.classification} />
        <InfoRow label="Major:" value={person.major} />
        <InfoRow label="Minor(s):" value={person.minor} />
      </div>

      <div className="mt-5">
        <a
          href={`mailto:${person.email}`}
          className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
        >
          Email: {person.email}
        </a>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  people,
}: {
  title: string;
  subtitle?: string;
  people: Officer[];
}) {
  if (!people.length) return null;

  return (
    <section className="mt-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>
        {subtitle ? <p className="text-gray-700">{subtitle}</p> : null}
      </div>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <OfficerCard key={`${p.email}-${p.role}`} person={p} />
        ))}
      </div>
    </section>
  );
}

export default function OfficersPage() {
  // Normalize + sort
  const cleaned = officers
    .filter((o) => o?.name && o?.role && o?.email)
    .slice()
    .sort((a, b) => sortOrder(a.role) - sortOrder(b.role));

  const exec = cleaned.filter((p) => roleGroup(p.role) === "Executive Board");
  const chairs = cleaned.filter((p) => roleGroup(p.role) === "Chairs");
  const advisor = cleaned.filter((p) => roleGroup(p.role) === "Faculty Advisor");

  const allEmails = cleaned
    .map((p) => p.email)
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="rounded-2xl border bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Meet the Officers
        </h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          Executive Board and Faculty Advisor(s). For general questions, email
          the appropriate officer directly. Emails open in your default mail
          client.
        </p>

        {/* Quick contact chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {allEmails.map((email) => (
            <MailtoLink key={email} email={email} />
          ))}
        </div>
      </header>

      {/* Sections */}
      <Section
        title="Executive Board"
        subtitle="Core leadership responsible for chapt
