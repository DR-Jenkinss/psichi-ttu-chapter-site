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

function orderForRole(role: string) {
  const r = role.toLowerCase();
  if (r.includes("president")) return 1;
  if (r.includes("vice")) return 2;
  if (r.includes("secretary")) return 3;
  if (r.includes("treasurer")) return 4;
  if (r.includes("membership")) return 10;
  if (r.includes("volunteer")) return 11;
  if (r.includes("social")) return 12;
  if (r.includes("faculty advisor")) return 99;
  return 50;
}

// Display tweak: remove " / SORC Representative" from any role text
function displayRole(role: string) {
  return role.replace(/\s*\/\s*SORC Representative\s*/i, "").trim();
}

function OfficerCard({ p }: { p: Officer }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-gray-900">
        {p.name}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-gray-700">
        {displayRole(p.role)}
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex gap-2">
          <span className="text-gray-600">Classification:</span>
          <span className="font-medium text-gray-900">{p.classification}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600">Major:</span>
          <span className="font-medium text-gray-900">{p.major}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600">Minor(s):</span>
          <span className="font-medium text-gray-900">{p.minor}</span>
        </div>
      </div>

      <div className="mt-5">
        <a
          href={`mailto:${p.email}`}
          className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
        >
          Email: {p.email}
        </a>
      </div>
    </div>
  );
}

function AdvisorCard({ p }: { p: Officer }) {
  // For the advisor, we intentionally do NOT show classification/major/minor.
  // We instead show a department line; we will derive it from your stored fields.
  // Recommendation: keep major="Department of Psychological Sciences" and minor="Texas Tech University" for advisor in JSON.
  const deptLine = [p.major, p.minor].filter(Boolean).join(" · ");

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-gray-900">
        {p.name}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-gray-700">
        {displayRole(p.role)}
      </p>

      {deptLine ? (
        <p className="mt-3 text-sm text-gray-700">{deptLine}</p>
      ) : null}

      <div className="mt-5">
        <a
          href={`mailto:${p.email}`}
          className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
        >
          Email: {p.email}
        </a>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle ? <p className="mt-1 text-gray-700">{subtitle}</p> : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function OfficersPage() {
  const cleaned = officers
    .filter((o) => o && o.name && o.role && o.email)
    .slice()
    .sort((a, b) => orderForRole(a.role) - orderForRole(b.role));

  const advisor = cleaned.filter((p) =>
    p.role.toLowerCase().includes("faculty advisor")
  );

  // Everything that's not the advisor is the "Officer Board"
  const board = cleaned.filter(
    (p) => !p.role.toLowerCase().includes("faculty advisor")
  );

  const emails = cleaned.map((p) => p.email).filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="rounded-2xl border bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Meet the Officers
        </h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          Officer Board and Faculty Advisor. Click any email to contact an
          officer directly.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="inline-flex items-center rounded-lg border bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              {email}
            </a>
          ))}
        </div>
      </header>

      <Section
        title="Officer Board"
        subtitle="Chapter leadership responsible for programming, operations, and member support."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((p) => (
            <OfficerCard key={`${p.email}-${p.role}`} p={p} />
          ))}
        </div>
      </Section>

      <Section
        title="Faculty Advisor"
        subtitle="Provides guidance, continuity, and institutional support for the chapter."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advisor.map((p) => (
            <AdvisorCard key={`${p.email}-${p.role}`} p={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}
