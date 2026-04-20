# The Resonant Builders — Weekly Publish Checklist

Copy this checklist each week. Fill in the blanks at the top before you start.

---

## Week of: _______________
## Essay Title: _______________
## Slug (url-friendly, e.g. `library-quest`): _______________
## Publish Date (Monday): _______________

---

## PHASE 1 — WRITE  (~2–3 hrs)

- [ ] Write the essay in your editor of choice
- [ ] Proofread and finalize copy
- [ ] Create the post file: `content/posts/[slug].md`
- [ ] Fill in frontmatter:
  ```
  ---
  title: ""
  date: "YYYY-MM-DD"
  type: "essay"
  summary: ""
  tags: []
  ---
  ```
- [ ] Paste final essay body below the frontmatter
- [ ] Verify the post renders correctly at `/theresonantbuilders/[slug]`

---

## PHASE 2 — AUDIO & VIDEO  (~1.5–2 hrs)

### Listen to Essay (Your Voice)
- [ ] Record yourself reading the essay (one take is fine — personal is the point)
- [ ] Save as MP3 (name it clearly, e.g. `the-awakening-essay.mp3`)
- [ ] Upload to Backblaze B2 → copy the public URL
- [ ] Add to post frontmatter: `audioUrl: "[URL]"`

### AI Discussion (NotebookLM)
- [ ] Open NotebookLM and upload the final essay text as a source
- [ ] Generate Audio Overview
- [ ] Export — saves as `.m4a`
- [ ] Convert `.m4a` → `.mp3` (use Cloudconvert.com until script is ready)
- [ ] Upload to Backblaze B2 → copy the public URL
- [ ] Add to post frontmatter: `discussionUrl: "[URL]"`

### Explainer Video (NotebookLM)
- [ ] Generate Explainer Video in NotebookLM
- [ ] Download the video file
- [ ] Upload to YouTube (see Phase 5)
- [ ] Add YouTube URL to post frontmatter: `videoUrl: "[URL]"`

---

## PHASE 3 — PODCAST FEED  (~15 min)

- [ ] Open `public/podcast.xml`
- [ ] Add Episode 1 — Listen to Essay:
  ```xml
  <item>
    <title>[Essay Title] — Listen to Essay</title>
    <link>https://i-dig.io/theresonantbuilders/[slug]</link>
    <guid isPermaLink="true">https://i-dig.io/theresonantbuilders/[slug]-essay</guid>
    <pubDate>[Mon DD MMM YYYY 00:00:00 GMT]</pubDate>
    <description>[Summary]</description>
    <itunes:summary>[Summary]</itunes:summary>
    <itunes:duration>[M:SS]</itunes:duration>
    <itunes:episode>[#]</itunes:episode>
    <itunes:episodeType>full</itunes:episodeType>
    <enclosure url="[audioUrl]" length="0" type="audio/mpeg"/>
  </item>
  ```
- [ ] Add Episode 2 — AI Discussion:
  ```xml
  <item>
    <title>[Essay Title] — AI Discussion</title>
    <link>https://i-dig.io/theresonantbuilders/[slug]</link>
    <guid isPermaLink="true">https://i-dig.io/theresonantbuilders/[slug]-discussion</guid>
    <pubDate>[Mon DD MMM YYYY 00:00:00 GMT]</pubDate>
    <description>[Summary]</description>
    <itunes:summary>[Summary]</itunes:summary>
    <itunes:duration>[M:SS]</itunes:duration>
    <itunes:episode>[#]</itunes:episode>
    <itunes:episodeType>bonus</itunes:episodeType>
    <enclosure url="[discussionUrl]" length="0" type="audio/mpeg"/>
  </item>
  ```
- [ ] Verify feed is valid at https://www.castfeedvalidator.com

---

## PHASE 4 — DEPLOY TO iDIG  (~5 min)

- [ ] Final check — post renders correctly with media player showing all three tabs
- [ ] `git add .`
- [ ] `git commit -m "publish: [Essay Title]"`
- [ ] `git push` → Vercel auto-deploys
- [ ] Verify live at `https://i-dig.io/theresonantbuilders/[slug]`

---

## PHASE 5 — YOUTUBE  (~20 min)

- [ ] Go to YouTube Studio → Upload video
- [ ] Title: `[Essay Title] — Explainer`
- [ ] Description:
  ```
  An AI-generated explainer for the essay "[Essay Title]" 
  from The Resonant Builders by J. Paul Duplantis.

  Read the full essay: https://i-dig.io/theresonantbuilders/[slug]
  Subscribe to The Resonant Builders: https://i-dig.io/theresonantbuilders

  [Summary]
  ```
- [ ] Add tags: `iDIG, Resonant Builders, quantum, resonance, protocol, [essay tags]`
- [ ] Set thumbnail (screenshot from video or custom graphic)
- [ ] Publish and copy the YouTube URL
- [ ] Paste YouTube URL into post frontmatter `videoUrl` if not already done

---

## PHASE 6 — SUBSTACK  (~20 min)

- [ ] Create new post in Substack
- [ ] Title: `[Essay Title]`
- [ ] Paste essay body (copy from the .md file — remove markdown formatting)
- [ ] Add header: *"This essay was originally published on [The Resonant Builders](https://i-dig.io/theresonantbuilders)"*
- [ ] Add footer CTA:
  ```
  Listen to the essay, AI Discussion, and watch the Explainer Video at:
  https://i-dig.io/theresonantbuilders/[slug]
  ```
- [ ] Add cover image if available
- [ ] Schedule for publish date (Monday) or publish immediately
- [ ] Copy the Substack post URL for LinkedIn

---

## PHASE 7 — LINKEDIN  (~15 min)

- [ ] Write LinkedIn post using this format:
  ```
  I thought this might resonate.

  [Essay summary — 2-3 sentences max]

  Full essay + audio + AI discussion:
  https://i-dig.io/theresonantbuilders/[slug]

  #iDIG #ResonantBuilders #[relevant tags]
  ```
- [ ] Add a visual (screenshot of the post page, or a graphic)
- [ ] Post on publish day (Monday morning recommended)
- [ ] Drop the LinkedIn post URL in comments to boost reach

---

## PHASE 8 — WRAP UP  (~5 min)

- [ ] Update `content/posts/[next-slug].md` placeholder for next week's essay
- [ ] Archive this checklist with the week's date
- [ ] Note anything that slowed you down this week to improve the process

---

## ESTIMATED TOTAL TIME

| Phase | Task | Time |
|-------|------|------|
| 1 | Write | 2–3 hrs |
| 2 | Audio & Video | 1.5–2 hrs |
| 3 | Podcast Feed | 15 min |
| 4 | Deploy | 5 min |
| 5 | YouTube | 20 min |
| 6 | Substack | 20 min |
| 7 | LinkedIn | 15 min |
| 8 | Wrap Up | 5 min |
| **Total** | | **~5–7 hrs** |

---

*Tip: Phases 1–2 can happen earlier in the week. Phases 3–7 can all be done in one sitting on publish day.*
