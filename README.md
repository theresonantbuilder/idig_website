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
  the-fractal-escape.md      # published
  the-awakening.md           # published
  library-quest.md           # draft: true — hidden from grid until ready
  the-new-architecture.md    # draft: true — hidden from grid until ready
```

### Frontmatter fields

```yaml
---
title: "Post Title"
date: "2026-04-28"
type: "essay"                  # essay | interview
summary: "One paragraph summary shown on the index card."
audioUrl: "https://..."        # Backblaze B2 URL — essay reading
discussionUrl: "https://..."   # Backblaze B2 URL — AI Discussion audio
videoUrl: "https://..."        # Backblaze B2 URL — MP4 explainer video
tags: ["tag1", "tag2"]
draft: true                    # omit or set false to publish; true hides from grid
---
```

- Leave `audioUrl`, `discussionUrl`, or `videoUrl` out entirely if not yet recorded — the media player will not render
- Add `draft: true` to hide a post from the blog grid while keeping it accessible by direct URL
- Posts are sorted newest-first by date

---

## Media Hosting Strategy

### Philosophy — POSSE
**Publish on your Own Site, Syndicate Everywhere.**  
All media files are hosted sovereignly on Backblaze B2. Platforms (Spotify, Apple Podcasts) subscribe to our RSS feed — they never host the source files.

### Backblaze B2 — Primary Media Store

- **Bucket:** `idigdemo`
- **Base URL:** `https://f004.backblazeb2.com/file/idigdemo/`
- Zero egress fees via Cloudflare integration
- Files are referenced directly by URL in post frontmatter

**To add a new audio or video file:**
1. Upload the file to the `idigdemo` B2 bucket
2. Copy the public URL
3. Add `audioUrl:`, `discussionUrl:`, or `videoUrl:` to the post's frontmatter
4. Also add the episode to `public/podcast.xml`
5. Commit and push — Vercel deploys, player activates automatically

### Audio Tools

| Use | Tool |
|---|---|
| Listen to Essay narration | piper.ttstool.com — voice: Piper hfc_female-medium English |
| AI Discussion | NotebookLM |
| Explainer Video | NotebookLM |

### Media per Essay

| Track | Frontmatter field | Format |
|---|---|---|
| Listen to Essay | `audioUrl` | .wav or .mp3 |
| AI Discussion | `discussionUrl` | .m4a |
| Explainer Video | `videoUrl` | .mp4 |

---

## Podcast

### Feed
- **Feed URL:** `https://i-dig.io/podcast.xml`
- **Feed file:** `public/podcast.xml`
- iTunes-compatible RSS; episode `<enclosure>` URLs point to Backblaze B2 files
- When adding a new essay, add two new `<item>` blocks to `podcast.xml`: one `full` (Listen to Essay) and one `bonus` (AI Discussion)
- Episode numbering is sequential across all essays

### Networks — Submission Status

| Platform | Status | Link |
|---|---|---|
| Spotify | ✅ Live | https://open.spotify.com/show/6ompRuMKyiXQZoboUzjAy5 |
| Apple Podcasts | ⏳ Processing | https://podcastsconnect.apple.com/my-podcasts/show/the-resonant-builders/7b9f36c6-3115-4af3-af65-8885d4f609fb |
| Amazon Music / Audible | ❌ Not submitted | https://music.amazon.com/podcasts/submit |
| YouTube Podcasts | ❌ Not submitted | Via YouTube Studio → Podcasts |
| iHeart Radio | ❌ Not submitted | https://www.iheart.com/content/submit-your-podcast |
| Podcast Index | ❌ Not submitted | https://podcastindex.org/add-feed — free, feeds into Pocket Casts, Overcast, Castro |
| Podchaser | ❌ Not submitted | https://www.podchaser.com/connect — aggregator, distributes to multiple directories |

**Recommended next steps:**
1. Wait for Apple Podcasts approval — grab the public listener URL from Podcasts Connect, add to site
2. Submit to Podcast Index — free, broad reach, feeds most independent apps automatically
3. Submit to Amazon Music
4. Submit to iHeart Radio
5. Podchaser Connect as a sweep for remaining directories

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
    MediaPlayer.tsx           # Inline audio/video player with track tabs
    AudioDropdown.tsx         # Legacy dropdown player (unused)
    AudioPlayer.tsx           # Legacy standalone player (unused)
  lib/
    posts.ts                  # Markdown loader + frontmatter parser (browser-safe)
  types/
    post.ts                   # Post and PostMeta TypeScript interfaces

content/posts/                # Markdown source files for all essays
public/
  feed.xml                    # Article RSS
  podcast.xml                 # Podcast RSS (iTunes-compatible)
  podcast-cover.jpg           # Podcast artwork (3000x3000 recommended for Apple)
```

---

## Notes

- The frontmatter parser is a custom browser-safe implementation — `gray-matter` was removed because it depends on Node.js `Buffer` which is not available in the browser
- `vercel.json` contains a catch-all rewrite rule required for client-side SPA routing
- DOMPurify is configured with `ADD_ATTR: ['target', 'rel']` to allow `target="_blank"` links in markdown content
- Homepage latest post widget auto-picks the most recent non-draft post by date
