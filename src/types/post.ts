export type PostType = 'essay' | 'video' | 'podcast' | 'interview';

export interface Post {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  summary: string;
  content: string;
  audioUrl?: string;
  discussionUrl?: string;
  videoUrl?: string;
  tags?: string[];
}

export interface PostMeta extends Omit<Post, 'content'> {}
