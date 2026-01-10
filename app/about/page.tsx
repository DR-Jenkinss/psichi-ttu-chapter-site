import settings from "@/content/settings.json";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="rounded-2xl border bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          About the Chapter
        </h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          The Texas Tech Psi Chi Chapter is a local unit of Psi Chi, the
          International Honor Society in Psychology. Our chapter works in close
          collaboration with the Texas Tech Department of Psychological Sciences
          and the College of Arts and Sciences.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Mission */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-700">
            We advance student development in psychology through scholarship,
            research, and community engagement.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Encourage academic excellence in psychology",
              "Promote research and scholarly engagement",
              "Support professional and graduate school preparation",
              "Foster leadership, service, and community",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Documents */}
        <aside className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Key Documents
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Chapter policies and governance documents (opens in a new tab).
          </p>

          <div className="mt-5 space-y-3">
            <a
              href={settings.handbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm transition hover:bg-gray-50"
            >
              <div>
                <div className="font-medium text-gray-900 group-hover:underline">
                  Chapter Handbook
                </div>
                <div className="text-sm text-gray-600">
                  Policies, dues, points, and expectations
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">Open</span>
            </a>

            <a
              href={settings.constitutionBylawsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm transition hover:bg-gray-50"
            >
              <div>
                <div className="font-medium text-gray-900 group-hover:underline">
                  Constitution &amp; Bylaws
                </div>
                <div className="text-sm text-gray-600">
                  Chapter governance and procedures
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">Open</span>
            </a>
          </div>

          <div className="mt-5 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            If you have questions about eligibility, dues, or points, start with
            the handbook.
          </div>
        </aside>
      </div>
    </main>
  );
}
