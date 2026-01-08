import React from "react";

function renderInline(text: string) {
  // links: [text](url)
  const parts: React.ReactNode[] = [];
  let i = 0;
  const re = /\[([^\]]+)\]\(([^\)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const [full, label, href] = m;
    const start = m.index;
    if (start > i) parts.push(text.slice(i, start));
    parts.push(
      <a key={parts.length} href={href} className="text-blue-700 underline hover:no-underline">
        {label}
      </a>
    );
    i = start + full.length;
  }
  if (i < text.length) parts.push(text.slice(i));
  return parts;
}

export function Markdown({ content }: { content: string }) {
  const lines = content.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  function flushList() {
    if (list.length) {
      blocks.push(
        <ul key={blocks.length} className="list-disc pl-6 space-y-1">
          {list.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    const h3 = trimmed.match(/^###\s+(.*)$/);
    const h2 = trimmed.match(/^##\s+(.*)$/);
    const h1 = trimmed.match(/^#\s+(.*)$/);
    const li = trimmed.match(/^-\s+(.*)$/);

    if (h1) { flushList(); blocks.push(<h1 key={blocks.length} className="text-3xl font-semibold mt-2">{h1[1]}</h1>); continue; }
    if (h2) { flushList(); blocks.push(<h2 key={blocks.length} className="text-2xl font-semibold mt-6">{h2[1]}</h2>); continue; }
    if (h3) { flushList(); blocks.push(<h3 key={blocks.length} className="text-xl font-semibold mt-5">{h3[1]}</h3>); continue; }
    if (li) { list.push(li[1]); continue; }

    flushList();
    blocks.push(<p key={blocks.length} className="leading-7">{renderInline(trimmed)}</p>);
  }
  flushList();

  return <div className="prose max-w-none space-y-4">{blocks}</div>;
}
