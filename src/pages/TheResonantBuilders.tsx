import { useState } from 'react';
import { useLocation } from 'wouter';
import { getAllPostMeta } from '../lib/posts';
import type { PostType } from '../types/post';

const TYPE_LABELS: Record<PostType | 'all', string> = {
  all: 'All',
  essay: 'Essays',
  video: 'Video',
  podcast: 'Podcast',
  interview: 'Interviews',
};

const TYPE_COLORS: Record<PostType, string> = {
  essay: 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  video: 'bg-red-900/40 text-red-300 border-red-700/50',
  podcast: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  interview: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function TheResonantBuilders() {
  const [, navigate] = useLocation();
  const [filter, setFilter] = useState<PostType | 'all'>('all');

  const allPosts = getAllPostMeta();
  const posts = filter === 'all' ? allPosts : allPosts.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-blue-900">

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => navigate('/')} className="flex items-center cursor-pointer select-none group">
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800 group-hover:opacity-80 transition">
              i-DIG<span className="text-blue-600">.io</span>
            </div>
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-300 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-600">
            <button onClick={() => navigate('/about')} className="hover:text-blue-600 transition">About J. Paul</button>
            <button className="text-amber-500 cursor-default">The Resonant Builders</button>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-amber-900/30 border border-amber-700/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">The Resonant Builders</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Essays, Conversations & Ideas</h1>
            <p className="text-lg text-slate-400 max-w-2xl">Exploring how quantum-informed signal models can reshape the way we communicate — commercially, socially, and culturally.</p>
          </div>

          {/* RSS links */}
          <div className="flex gap-4 mb-10 text-xs">
            <a href="/feed.xml" className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 transition" target="_blank" rel="noopener noreferrer">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
              Article RSS
            </a>
            <a href="/podcast.xml" className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 transition" target="_blank" rel="noopener noreferrer">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/></svg>
              Podcast RSS
            </a>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {(Object.keys(TYPE_LABELS) as (PostType | 'all')[]).map(key => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  filter === key
                    ? 'bg-amber-500 text-slate-900 border-amber-500'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                }`}
              >
                {TYPE_LABELS[key]}
              </button>
            ))}
          </div>

          {/* Post grid */}
          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-20">No posts yet in this category.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <button
                  key={post.slug}
                  onClick={() => navigate(`/theresonantbuilders/${post.slug}`)}
                  className="text-left bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-600/50 hover:bg-slate-800 transition group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${TYPE_COLORS[post.type]}`}>
                      {TYPE_LABELS[post.type]}
                    </span>
                    <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-white font-medium text-lg leading-snug mb-3 group-hover:text-amber-300 transition">{post.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{post.summary}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs text-slate-600 bg-slate-700/50 px-2 py-0.5 rounded">#{tag}</span>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
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
