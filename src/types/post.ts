export type PostType = 'essay' | 'video' | 'podcast' | 'interview' | 'commentary';

export interface Post {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  summary: string;
  content: string;
  audioUrl?: string;
  audioLabel?: string;
  discussionUrl?: string;
  discussionLabel?: string;
  videoUrl?: string;
  videoLabel?: string;
  tags?: string[];
  draft?: boolean;
}

export interface PostMeta extends Omit<Post, 'content'> {}
