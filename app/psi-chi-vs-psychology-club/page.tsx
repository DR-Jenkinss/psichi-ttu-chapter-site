import { getPage } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Section } from "@/components/Section";

export default function Page() {
  const page = getPage("compare");
  return (
    <Section title={page.frontmatter.title}>
      <Markdown content={page.content} />
    </Section>
  );
}
