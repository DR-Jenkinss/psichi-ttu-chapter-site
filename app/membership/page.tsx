import settings from "@/content/settings.json";

function ActionLink({
  href,
  label,
  sublabel,
}: {
  href: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
    >
      <div>
        <div className="font-medium text-gray-900 group-hover:underline">
          {label}
        </div>
        {sublabel ? (
          <div className="mt-0.5 text-sm text-gray-600">{sublabel}</div>
        ) : null}
      </div>
      <div className="shrink-0 rounded-lg border px-3 py-1 text-sm text-gray-700 transition group-hover:bg-gray-50">
        Open
      </div>
    </a>
  );
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

export default function MembershipPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <header className="rounded-2xl border bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Membership
        </h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          Use the links below to apply to Psi Chi, join Psychology Club, submit
          your status, or view point tracking. All forms open in a new tab.
        </p>
      </header>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <SectionCard
          title="Apply to Psi Chi"
          description="Psi Chi membership is open to students who meet national and chapter eligibility requirements."
        >
          <ActionLink
            href={settings.psiChiNationalApplyUrl}
            label="Apply to Psi Chi (National)"
            sublabel="Submit your application through the national Psi Chi portal."
          />
          <ActionLink
            href={settings.handbookUrl}
            label="Chapter Handbook"
            sublabel="Policies, dues, point requirements, and expectations."
          />
        </SectionCard>

        <SectionCard
          title="Join Psychology Club"
          description="Psychology Club is open to all Texas Tech students interested in psychology."
        >
          <ActionLink
            href={settings.psychClubJoinFormUrl}
            label="Join Psychology Club Form"
            sublabel="Add yourself to our roster and receive updates."
          />
        </SectionCard>

        <SectionCard
          title="Membership Status"
          description="Already involved or exploring? Tell us your status so we can communicate the right information."
        >
          <ActionLink
            href={settings.statusFormUrl}
            label="Membership Status Form"
            sublabel="Psi Chi member, Psychology Club member, interested, or alumni."
          />
        </SectionCard>

        <SectionCard
          title="Points Tracking"
          description="Psi Chi members earn points through meetings, volunteering, fundraising, and socials."
        >
          <ActionLink
            href={settings.pointsSheetUrl}
            label="View Points Sheet"
            sublabel="View-only spreadsheet for current point totals."
          />
          <p className="text-sm text-gray-600">
            Note: If you cannot access the sheet, confirm you are logged into
            your TTU Google account or request access from the officer board.
          </p>
        </SectionCard>
      </div>
    </main>
  );
}
