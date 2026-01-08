# Psi Chi Chapter Website (Build-Ready)

This repo is a Next.js + Tailwind site with content stored in `/content` and a Decap CMS admin at `/admin`.

## 1) Quick start (local)
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 2) Fill in configuration
Edit:
- `content/settings.json` (all links/handles)
- `content/officers.json`
- `content/events.json`

## 3) Forum + points
- Forum: set `forumUrl` in `content/settings.json`
- Points sheet: set `pointsSheetUrl` in `content/settings.json`

## 4) Deploy (Netlify)
- Create a GitHub repo and push this code
- In Netlify: “New site from Git” → select repo
- Build command: `npm run build`
- Publish directory: handled by Netlify Next.js plugin
- Enable Identity + Git Gateway if you want Decap CMS editing:
  - Site settings → Identity → Enable
  - Identity → Services → Git Gateway → Enable
  - Add yourself as an Identity user

Then open:
- https://YOUR_SITE.netlify.app/admin

## Notes
- The markdown renderer is intentionally minimal to avoid dependencies.
- If you want richer markdown (tables, anchors), we can swap in `remark` later.
