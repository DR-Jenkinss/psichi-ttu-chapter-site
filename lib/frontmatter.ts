export type Frontmatter = Record<string, any>;

export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  // Very small YAML-ish parser for simple key/value + nested objects via indentation.
  // This is intentionally minimal to keep dependencies at zero.
  if (!raw.startsWith("---")) return { frontmatter: {}, content: raw };

  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: {}, content: raw };

  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trimStart();

  const lines = fmBlock.split(/\r?\n/);
  const obj: any = {};
  const stack: { indent: number; target: any }[] = [{ indent: -1, target: obj }];

  function setKV(target: any, key: string, value: any) {
    target[key] = value;
  }

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const indent = line.match(/^\s*/)?.[0].length ?? 0;
    const trimmed = line.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
    const current = stack[stack.length - 1].target;

    const m = trimmed.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let valRaw = m[2] ?? "";

    // object start
    if (valRaw === "") {
      const child: any = {};
      setKV(current, key, child);
      stack.push({ indent, target: child });
      continue;
    }

    // booleans
    if (valRaw === "true" || valRaw === "false") {
      setKV(current, key, valRaw === "true");
      continue;
    }

    // quoted string
    const q = valRaw.match(/^"(.*)"$/);
    if (q) {
      setKV(current, key, q[1]);
      continue;
    }

    setKV(current, key, valRaw);
  }

  return { frontmatter: obj, content: body };
}
