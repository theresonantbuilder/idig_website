# i-DIG.io — Website Build

React + TypeScript + Vite static site deployed on Vercel.  
The public face of the iDIG Protocol and The Resonant Builders.

---

## Deploy Pipeline

```
Local dev → GitHub (push) → Vercel (auto-deploy) → i-dig.io (live)
```

- Domain registered on GoDaddy, DNS pointed to Vercel
- Every push to `main` triggers an automatic Vercel build and deploy
- Build must pass TypeScript (`tsc -b`) before Vite bundles — TS errors will block the deploy

**Common commands:**
```bash
npm run dev        # local dev server at localhost:5173
npm run build      # production build (runs tsc first)
git add -A
git commit -m "message"
git push           # triggers Vercel deploy
```

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Routing | Wouter |
| Styling | Tailwind CSS + @tailwindcss/typography |
| Markdown | marked (render) + custom frontmatter parser |
| Sanitization | DOMPurify |
| Contact form | formsubmit.co (no backend required) |
| Hosting | Vercel |
| Media storage | Backblaze B2 |

---

## Content Management

All blog posts and essays live as Markdown files in:

```
content/posts/
  the-awakening.md
  the-new-architecture.md
  library-quest.md
```

### Frontmatter fields

```yaml
---
title: "Post Title"
date: "2026-04-14"
type: "essay"              # essay | interview
summary: "One paragraph summary shown on the index card."
audioUrl: "https://..."    # Backblaze B2 URL — essay reading
discussionUrl: "https://..." # Backblaze B2 URL — AI Discussion audio
videoUrl: "https://..."    # YouTube URL — embedded explainer video (coming)
tags: ["tag1", "tag2"]
---
```

Leave `audioUrl`, `discussionUrl`, or `videoUrl` out entirely if not yet recorded — the UI shows "Soon" gracefully.

---

## Media Hosting Strategy

### Philosophy — POSSE
**Publish on your Own Site, Syndicate Everywhere.**  
All media files are hosted sovereignly. Platforms (Spotify, Apple Podcasts) subscribe to our RSS feed — they never host the source files.

### Backblaze B2 — Primary Media Store

All audio and video files are stored in Backblaze B2.

- **Bucket:** `idigdemo`
- **Base URL:** `https://f004.backblazeb2.com/file/idigdemo/`
- Zero egress fees via Cloudflare integration
- Files are referenced directly by URL in post frontmatter

**To add a new audio file:**
1. Upload the MP3 to the `idigdemo` B2 bucket
2. Copy the public URL
3. Add `audioUrl:` or `discussionUrl:` to the post's frontmatter
4. Commit and push — Vercel deploys, player activates automatically

### Audio per Essay

Each essay supports two audio tracks via a headphone icon dropdown:

| Track | Field | Description |
|---|---|---|
| Listen to Essay | `audioUrl` | Personal narrative reading by J. Paul |
| AI Discussion | `discussionUrl` | NotebookLM AI deep-dive conversation |

The `AudioDropdown` component (`src/components/AudioDropdown.tsx`) handles both tracks with an inline scrub-bar player.

### Video per Essay (coming)

Each essay will support an embedded explainer video:

| Field | Source | Description |
|---|---|---|
| `videoUrl` | Backblaze B2 (MP4) | NotebookLM AI explainer video |

Videos will be served via native HTML5 `<video>` — no YouTube, no ads, no platform dependency. Files stored in Backblaze B2 alongside audio.

### Podcast Syndication

`public/podcast.xml` is an iTunes-compatible RSS feed that syndicates The Resonant Builders as a podcast.

- Episode `<enclosure>` URLs point to Backblaze B2 MP3 files
- Submit `podcast.xml` feed URL to Spotify for Podcasters, Apple Podcasts Connect, etc.
- Platforms poll the feed — changing hosts only requires updating the URLs in the feed

`public/feed.xml` is a standard RSS feed for article readers and feed aggregators.

---

## Site Structure

```
src/
  pages/
    HomeSignalDriven.tsx      # / — homepage
    AboutPaul.tsx             # /about
    TheResonantBuilders.tsx   # /theresonantbuilders — post index
    Post.tsx                  # /theresonantbuilders/:slug — single post
  components/
    AudioDropdown.tsx         # Headphone icon + inline audio player dropdown
    AudioPlayer.tsx           # Standalone audio player (legacy)
  lib/
    posts.ts                  # Markdown loader + frontmatter parser (browser-safe)
  types/
    post.ts                   # Post and PostMeta TypeScript interfaces

content/posts/                # Markdown source files for all essays
public/
  feed.xml                    # Article RSS
  podcast.xml                 # Podcast RSS (iTunes-compatible)
```

---

## Notes

- The frontmatter parser is a custom browser-safe implementation — `gray-matter` was removed because it depends on Node.js `Buffer` which is not available in the browser
- `vercel.json` contains a catch-all rewrite rule required for client-side SPA routing
- DOMPurify is configured with `ADD_ATTR: ['target', 'rel']` to allow `target="_blank"` links in markdown content
