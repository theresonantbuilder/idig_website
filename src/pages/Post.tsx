import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import DOMPurify from 'dompurify';
import { getPostBySlug } from '../lib/posts';
import type { Post as PostType } from '../types/post';
import AudioPlayer from '../components/AudioPlayer';
import AudioDropdown from '../components/AudioDropdown';

const TYPE_COLORS: Record<string, string> = {
  essay: 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  video: 'bg-red-900/40 text-red-300 border-red-700/50',
  podcast: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  interview: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getYouTubeEmbedUrl(url: string) {
  if (url.includes('embed/')) return url;
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function Post() {
  const [, navigate] = useLocation();
  const params = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (params.slug) {
      const found = getPostBySlug(params.slug);
      setPost(found ?? null);
    }
  }, [params.slug]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-slate-500">Post not found.</p>
      </div>
    );
  }

  const html = DOMPurify.sanitize(post.content, { ADD_ATTR: ['target', 'rel'] });

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-blue-900">

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => navigate('/')} className="flex items-center cursor-pointer select-none group">
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-200 group-hover:opacity-80 transition">
              i-DIG<span className="text-blue-400">.io</span>
            </div>
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-700 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-400">
            <button onClick={() => navigate('/about')} className="hover:text-blue-400 transition">About J. Paul</button>
            <button onClick={() => navigate('/theresonantbuilders')} className="hover:text-amber-400 transition text-amber-400">The Resonant Builders</button>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Back link */}
          <button
            onClick={() => navigate('/theresonantbuilders')}
            className="flex items-center text-slate-500 hover:text-amber-400 transition text-sm mb-8"
          >
            ← Back to The Resonant Builders
          </button>

          {/* Post header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${TYPE_COLORS[post.type]}`}>
                {post.type}
              </span>
              <AudioDropdown audioUrl={post.audioUrl} discussionUrl={post.discussionUrl} />
              <span className="text-sm text-slate-500">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-4">{post.title}</h1>
            <p className="text-lg text-slate-400">{post.summary}</p>
          </div>

          {/* Video embed (video or interview) */}
          {post.videoUrl && (
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 border border-slate-700">
              <iframe
                className="w-full h-full"
                src={getYouTubeEmbedUrl(post.videoUrl)}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Audio player (podcast or interview with audio) */}
          {post.audioUrl && (
            <div className="mb-8">
              <AudioPlayer src={post.audioUrl} />
            </div>
          )}

          {/* Rendered markdown */}
          <article
            className="prose prose-invert prose-slate prose-lg max-w-none mb-12
              prose-headings:text-white prose-headings:font-light
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-slate-200
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-li:text-slate-400
              prose-hr:border-slate-700
              prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-400"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          )}

          {/* Share bar */}
          <div className="border-t border-slate-700 pt-8 flex items-center gap-4">
            <span className="text-sm text-slate-500 mr-2">Share:</span>
            <button
              onClick={copyLink}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-400 hover:text-white hover:border-slate-500 transition"
            >
              {copied ? 'Copied!' : 'Copy link'}
            </button>
            <button
              onClick={shareLinkedIn}
              className="px-4 py-2 bg-[#0A66C2] rounded-lg text-sm text-white hover:bg-[#004182] transition"
            >
              Share on LinkedIn
            </button>
          </div>

        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-400">i-DIG.io</span>
            <p className="text-slate-600 text-sm mt-1">Signal-Driven Discovery & Matching</p>
          </div>
          <div className="text-sm text-slate-600">&copy; 2026 i-DIG.io. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
