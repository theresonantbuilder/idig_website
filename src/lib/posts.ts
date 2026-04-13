import matter from 'gray-matter';
import type { Post, PostMeta } from '../types/post';

// Vite glob import — pulls all .md files in content/posts as raw strings at build time
const rawFiles = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parsePost(raw: string, slug: string): Post {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    type: data.type ?? 'essay',
    summary: data.summary ?? '',
    content,
    audioUrl: data.audioUrl,
    videoUrl: data.videoUrl,
    tags: data.tags ?? [],
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
