import { getSettings } from "@/lib/content";

export function SiteFooter() {
  const s = getSettings();
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-content px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">{s.chapterName}</div>
          <div className="text-sm text-neutral-600 mt-1">{s.departmentName}</div>
          <div className="text-sm text-neutral-600">{s.universityName}</div>
        </div>
        <div>
          <div className="font-semibold">Connect</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a className="underline" href={s.social.instagram}>Instagram</a></li>
            <li><a className="underline" href={s.social.x}>X</a></li>
            <li><a className="underline" href={s.social.facebook}>Facebook</a></li>
            <li><a className="underline" href={s.social.ttuConnect}>Texas Tech Connect</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm text-neutral-700">{s.generalEmail}</div>
          <div className="mt-3 text-sm text-neutral-600">
            Mailing list embed placeholder (Mailchimp/other).
          </div>
        </div>
      </div>
      <div className="text-xs text-neutral-500 px-4 pb-8 mx-auto max-w-content">
        © {new Date().getFullYear()} {s.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
