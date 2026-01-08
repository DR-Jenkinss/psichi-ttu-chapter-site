import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter } from "./frontmatter";

const ROOT = process.cwd();

export type Settings = {
  chapterName: string;
  shortName: string;
  universityName: string;
  departmentName: string;
  generalEmail: string;
  handbookUrl: string;
  constitutionBylawsUrl: string;
  psiChiNationalApplyUrl: string;
  psychClubJoinFormUrl: string;
  statusFormUrl: string;
  activitySuggestionFormUrl: string;
  pointsSheetUrl: string;
  calendarEmbedUrl: string;
  forumUrl: string;
  social: { instagram: string; x: string; facebook: string; ttuConnect: string };
};

export function getSettings(): Settings {
  const p = path.join(ROOT, "content", "settings.json");
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function interpolate(template: string, settings: any) {
  return template.replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, expr) => {
    const parts = String(expr).split(".");
    let cur: any = settings;
    for (const part of parts) cur = cur?.[part];
    return cur ?? "";
  });
}

export function getPage(slug: string) {
  const settings = getSettings();
  const p = path.join(ROOT, "content", "pages", `${slug}.md`);
  const raw = fs.readFileSync(p, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return {
    frontmatter,
    content: interpolate(content, settings),
  };
}

export type Officer = {
  name: string; role: string; email?: string; bio?: string; image?: string; order?: number;
};

export function getOfficers(): Officer[] {
  const p = path.join(ROOT, "content", "officers.json");
  const items: Officer[] = JSON.parse(fs.readFileSync(p, "utf-8"));
  return items.sort((a,b)=>(a.order??999)-(b.order??999));
}

export type EventItem = {
  title: string; date: string; time?: string; location?: string; category?: string;
  featured?: boolean; description?: string; rsvp?: string;
};

export function getEvents(): EventItem[] {
  const p = path.join(ROOT, "content", "events.json");
  const items: EventItem[] = JSON.parse(fs.readFileSync(p, "utf-8"));
  return items.sort((a,b)=> String(a.date).localeCompare(String(b.date)));
}

export type Post = { slug: string; frontmatter: any; content: string };

function getPosts(dir: string): Post[] {
  const settings = getSettings();
  const full = path.join(ROOT, "content", "posts", dir);
  const files = fs.readdirSync(full).filter(f=>f.endsWith(".md"));
  const posts = files.map((f) => {
    const raw = fs.readFileSync(path.join(full,f), "utf-8");
    const { frontmatter, content } = parseFrontmatter(raw);
    const slug = f.replace(/\.md$/, "");
    return { slug, frontmatter, content: interpolate(content, settings) };
  });
  return posts.sort((a,b)=> String(b.frontmatter?.date ?? "").localeCompare(String(a.frontmatter?.date ?? "")));
}

export function getWeeklyPosts() { return getPosts("weekly"); }
export function getMonthlyPosts() { return getPosts("monthly"); }

export function getPost(kind: "weekly"|"monthly", slug: string): Post {
  const settings = getSettings();
  const p = path.join(ROOT, "content", "posts", kind, `${slug}.md`);
  const raw = fs.readFileSync(p, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return { slug, frontmatter, content: interpolate(content, settings) };
}
