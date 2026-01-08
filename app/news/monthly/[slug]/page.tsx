import { getPost } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Section } from "@/components/Section";

export default function MonthlyPostPage({ params }: { params: { slug: string } }) {
  const post = getPost("monthly", params.slug);
  return (
    <Section title={post.frontmatter.title} subtitle={post.frontmatter.date}>
      <Markdown content={post.content} />
    </Section>
  );
}
