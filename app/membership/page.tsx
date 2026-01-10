import settings from "@/content/settings.json";

export default function MembershipPage() {
  return (
    <main className="prose mx-auto px-4 py-10">
      <h1>Membership</h1>

      <h2>Apply to Psi Chi</h2>
      <p>
        Psi Chi membership is open to students who meet national and chapter
        eligibility requirements.
      </p>
      <ul>
        <li>
          <a
            href={settings.psiChiNationalApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply nationally
          </a>
        </li>
        <li>
          <a
            href={settings.handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Handbook (policies, dues, points)
          </a>
        </li>
      </ul>

      <h2>Join Psychology Club</h2>
      <p>Psychology Club is open to all students interested in psychology.</p>
      <ul>
        <li>
          <a
            href={settings.psychClubJoinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join form
          </a>
        </li>
      </ul>

      <h2>Membership status form</h2>
      <p>Already involved or exploring? Let us know your current status.</p>
      <ul>
        <li>
          <a
            href={settings.statusFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Status form
          </a>
        </li>
      </ul>

      <h2>Points tracking</h2>
      <p>We track points in a shared spreadsheet.</p>
      <ul>
        <li>
          <a
            href={settings.pointsSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Points sheet
          </a>
        </li>
      </ul>
    </main>
  );
}
