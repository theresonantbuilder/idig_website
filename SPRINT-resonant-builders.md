# Sprint: The Resonant Builders — Blog & Podcast

**Goal:** Build a self-hosted blog and podcast platform within i-DIG.io, with article and podcast RSS syndication. No external publishing platform. No comments.

---

## Dependencies to Install

- [ ] `gray-matter` — parse markdown frontmatter
- [ ] `marked` — render markdown to HTML
- [ ] `dompurify` — sanitize rendered HTML

---

## Phase 1 — Content Structure

- [ ] Create `/content/posts/` directory at project root
- [ ] Define post frontmatter schema (title, date, type, slug, summary, audioUrl, videoUrl, tags)
- [ ] Write a post type definition in TypeScript (`Post` interface)
- [ ] Write a content loader utility (`src/lib/posts.ts`) that reads and parses all markdown files
- [ ] Create one sample post for each type (essay, video, podcast, interview) for testing

---

## Phase 2 — Pages & Routing

- [ ] Add routes in `App.tsx`:
  - `/theresonantbuilders` — post index
  - `/theresonantbuilders/:slug` — single post
- [ ] Build post index page (`TheResonantBuilders.tsx`)
  - Grid/list of post cards
  - Filter bar: All | Essays | Video | Podcast | Interviews
  - Card shows: title, date, type badge, summary
- [ ] Build single post page (`Post.tsx`)
  - Essay: rendered markdown
  - Video: YouTube embed + text
  - Podcast: audio player + text
  - Interview: video embed + optional audio player + text
- [ ] Build reusable `AudioPlayer` component (play/pause, scrub bar, time display)
- [ ] Build reusable `PostCard` component for the index

---

## Phase 3 — RSS Syndication

- [ ] Create `/public/feed.xml` generator — Article RSS 2.0 feed
  - Title, link, description, pubDate per post
- [ ] Create `/public/podcast.xml` generator — iTunes/Spotify-compatible podcast RSS
  - `<enclosure>` tags with audio URLs
  - `<itunes:*>` tags (author, summary, image, category, explicit)
  - `<channel>` level podcast metadata
- [ ] Add `<link rel="alternate">` tags in page `<head>` pointing to both feeds
- [ ] Document how to submit `podcast.xml` to Apple Podcasts and Spotify

---

## Phase 4 — Audio Hosting

- [ ] Set up Vercel Blob Storage for audio file uploads
- [ ] Document the upload process (how to get a stable URL for frontmatter)
- [ ] Test audio playback from Blob URL in the AudioPlayer component

---

## Phase 5 — Sharing

- [ ] Add share bar to single post page (copy link, LinkedIn share)
- [ ] Add Open Graph meta tags per post (title, description, image) for link previews
- [ ] Add Twitter/X card meta tags

---

## Phase 6 — Polish & Nav

- [ ] Update nav on all pages to link correctly to `/theresonantbuilders`
- [ ] Style the index and post pages to match the dark slate aesthetic of the site
- [ ] Ensure mobile responsiveness across all new pages
- [ ] Add "Back to The Resonant Builders" link on single post pages

---

## Out of Scope (This Sprint)

- Comment section
- Search
- Email subscription / newsletter
- Admin UI (publishing = commit + push for now)
- Author profiles (single author: J. Paul)

---

## Notes

- Audio hosted on Vercel Blob — no third-party podcast host needed
- Video stays on YouTube — embed only, no self-hosting video
- Podcast RSS submitted once to Apple/Spotify; they poll it automatically after that
- All content lives in `/content/posts/` — markdown files committed to the repo
