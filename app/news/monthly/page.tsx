import Link from "next/link";
import { getMonthlyPosts } from "@/lib/content";
import { Section } from "@/components/Section";

export default function MonthlyIndex() {
  const posts = getMonthlyPosts();
  return (
    <Section title="Monthly Feature Essays">
      <div className="space-y-3">
        {posts.map((p) => (
          <div key={p.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs text-neutral-500">{p.frontmatter.date}</div>
            <div className="mt-1 font-semibold">{p.frontmatter.title}</div>
            <div className="mt-2 text-sm text-neutral-700">{p.frontmatter.summary}</div>
            <div className="mt-3 text-sm">
              <Link className="underline" href={`/news/monthly/${p.slug}`}>Read</Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
