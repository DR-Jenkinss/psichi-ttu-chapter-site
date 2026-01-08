import { Section } from "@/components/Section";
import { getSettings } from "@/lib/content";

export default function CommunityPage() {
  const s = getSettings();
  return (
    <>
      <Section
        title="Community"
        subtitle="Ask psychology questions in our forum and suggest activities for the semester."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold">Discussion forum (Q&A)</div>
            <div className="mt-2 text-sm text-neutral-700">
              Ask questions about psychology, careers, research, and student life. Please follow the community guidelines.
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href={s.forumUrl}>Open forum</a>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="font-semibold">Suggest an activity</div>
            <div className="mt-2 text-sm text-neutral-700">
              Recommend speakers, workshops, social events, volunteer opportunities, or other programming.
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href={s.activitySuggestionFormUrl}>Open suggestion form</a>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Forum embed">
        <div className="text-sm text-neutral-600 mb-3">
          If your forum platform supports embedding today's feed, replace the iframe URL below with the embed URL.
          For Discourse, you may prefer linking out or using an official embedding approach.
        </div>
        <div className="rounded-2xl border overflow-hidden bg-white shadow-sm">
          <iframe
            title="Chapter Forum"
            src={s.forumUrl}
            className="w-full"
            style={{ height: 820 }}
          />
        </div>
      </Section>

      <Section title="Community guidelines">
        <div className="rounded-2xl border bg-white p-5 shadow-sm text-sm text-neutral-700 space-y-2">
          <p><strong>Be respectful.</strong> Personal attacks, harassment, or discriminatory language are not permitted.</p>
          <p><strong>Protect privacy.</strong> Do not share private information about yourself or others.</p>
          <p><strong>No clinical advice.</strong> Do not solicit or provide diagnosis or treatment instructions. If you need urgent help, contact campus resources or emergency services.</p>
          <p><strong>Academic integrity.</strong> Do not request or share answer keys, exam content, or plagiarized materials.</p>
          <p><strong>Moderation.</strong> Posts may be removed and users may be suspended for violating guidelines.</p>
        </div>
      </Section>
    </>
  );
}
