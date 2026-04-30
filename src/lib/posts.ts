import { marked } from 'marked';
import type { Post, PostMeta } from '../types/post';

// Vite glob import — pulls all .md files in content/posts as raw strings at build time
const rawFiles = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

// Lightweight browser-safe frontmatter parser (replaces gray-matter)
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlStr = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of yamlStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      // Inline array: ["a", "b"] or [a, b]
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      // Strip surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  }

  return { data, content };
}

function parsePost(raw: string, slug: string): Post {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title:    (data.title    as string)   ?? 'Untitled',
    date:     (data.date     as string)   ?? '',
    type:     (data.type     as Post['type']) ?? 'essay',
    summary:  (data.summary  as string)   ?? '',
    content:  marked(content) as string,
    audioUrl:      data.audioUrl      as string | undefined,
    discussionUrl: data.discussionUrl as string | undefined,
    videoUrl:      data.videoUrl      as string | undefined,
    tags:     (data.tags     as string[]) ?? [],
    draft:    data.draft === 'true' || data.draft === true,
  };
}

export function getAllPosts(): Post[] {
  return Object.entries(rawFiles)
    .map(([path, raw]) => {
      const slug = path.replace('/content/posts/', '').replace('.md', '');
      return parsePost(raw, slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug);
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}
