import settings from "@/content/settings.json";

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="rounded-2xl border bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Psi Chi vs. Psychology Club
        </h1>
        <p className="mt-2 max-w-3xl text-gray-700">
          Two connected organizations—one honor society and one open-access
          club—working together to support students interested in psychology.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Psi Chi
          </h2>
          <p className="mt-2 text-gray-700">
            Psi Chi is the International Honor Society in Psychology. Membership
            is selective and recognizes students who have demonstrated academic
            excellence in psychology coursework, strong overall academic
            standing, and a sustained commitment to the discipline.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-4">
            <div className="text-sm font-medium text-gray-900">
              Best fit if you:
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Meet eligibility requirements</li>
              <li>Want honor society recognition</li>
              <li>Plan to pursue research, leadership, or graduate study</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Psychology Club
          </h2>
          <p className="mt-2 text-gray-700">
            Psychology Club is open to any student interested in psychology.
            Membership is not restricted by major, GPA, or academic standing. It
            is an excellent way to get involved, meet other students, and learn
            about opportunities in the field.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-4">
            <div className="text-sm font-medium text-gray-900">
              Best fit if you:
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Are exploring psychology</li>
              <li>Want to attend events and meet people</li>
              <li>May pursue Psi Chi later</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How they work together */}
      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          How they work together at Texas Tech
        </h2>
        <p className="mt-2 text-gray-700">
          At Texas Tech, Psi Chi and Psychology Club operate collaboratively and
          share many events and meetings. The key distinction is{" "}
          <span className="font-medium text-gray-900">
            eligibility and recognition
          </span>
          : Psi Chi is an honor society with academic requirements, while
          Psychology Club is open-access and designed for broad participation.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold text-gray-900">
              Stay connected
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Complete the membership status form so we can route you to the
              appropriate communications.
            </div>
          </div>

          <a
            href={settings.statusFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Membership Status Form
          </a>
        </div>
      </div>
    </section>
  );
}
