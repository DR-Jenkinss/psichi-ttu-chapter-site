import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Cards";

export default function NewsHubPage() {
  return (
    <Section title="News & Essays" subtitle="Weekly newsletters and monthly feature essays">
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Weekly Newsletter" href="/news/weekly">
          Chapter updates, deadlines, opportunities, and event reminders.
        </Card>
        <Card title="Monthly Feature Essays" href="/news/monthly">
          Longer-form, accessible essays on topics in psychology.
        </Card>
      </div>
      <div className="mt-6 text-sm text-neutral-600">
        Want to contribute? Contact the officers through the Contact page.
      </div>
    </Section>
  );
}
