import { useState } from 'react';
import { useLocation } from 'wouter';
import { getAllPostMeta } from '../lib/posts';
import type { PostMeta } from '../types/post';

type ContentFilter = 'all' | 'essay' | 'interview';

function getContentType(post: PostMeta): 'essay' | 'interview' {
  return post.type === 'interview' ? 'interview' : 'essay';
}

const CONTENT_BADGE: Record<'essay' | 'interview', string> = {
  essay:     'bg-blue-900/40 text-blue-300 border-blue-700/50',
  interview: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function FilterBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
        active
          ? 'bg-amber-500 text-slate-900 border-amber-500'
          : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300'
      }`}
    >
      {children}
    </button>
  );
}

function RssIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
    </svg>
  );
}

export default function TheResonantBuilders() {
  const [, navigate] = useLocation();
  const [contentFilter, setContentFilter] = useState<ContentFilter>('all');

  const allPosts = getAllPostMeta();

  const posts = allPosts.filter(post =>
    contentFilter === 'all' || getContentType(post) === contentFilter
  );

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-blue-900">

      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-slate-200 z-50">
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
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="inline-flex items-center bg-amber-900/30 border border-amber-700/40 rounded-full px-4 py-1.5 shrink-0">
                <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">The Resonant Builders</span>
              </div>
              <h1 className="text-xl md:text-2xl font-light text-white">Essays, Conversations & Ideas</h1>
            </div>
            <p className="text-base text-slate-400">Exploring how quantum-informed signal models can reshape the way we communicate — commercially, socially, and culturally.</p>
          </div>

          {/* Filter row + RSS links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">Content</span>
              <div className="flex flex-wrap gap-2">
                <FilterBtn active={contentFilter === 'all'}       onClick={() => setContentFilter('all')}>All</FilterBtn>
                <FilterBtn active={contentFilter === 'essay'}     onClick={() => setContentFilter('essay')}>Essays</FilterBtn>
                <FilterBtn active={contentFilter === 'interview'} onClick={() => setContentFilter('interview')}>Interviews</FilterBtn>
              </div>
            </div>

            <div className="flex gap-4 text-xs">
              <a href="/feed.xml" className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 transition" target="_blank" rel="noopener noreferrer">
                <RssIcon /> Article RSS
              </a>
              <a href="/podcast.xml" className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 transition" target="_blank" rel="noopener noreferrer">
                <RssIcon /> Podcast RSS
              </a>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => {
              const contentType = getContentType(post);
              const isUpcoming  = new Date(post.date) > new Date();
              return (
                <div
                  key={post.slug}
                  onClick={() => navigate(`/theresonantbuilders/${post.slug}`)}
                  className="relative text-left bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-600/50 hover:bg-slate-800 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${CONTENT_BADGE[contentType]}`}>
                      {contentType === 'essay' ? 'Essay' : 'Interview'}
                    </span>
                    <div className="flex items-center gap-2">
                      {isUpcoming && (
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">Coming Soon</span>
                      )}
                      <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                    </div>
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
                </div>
              );
            })}

            {/* Coming Soon placeholders */}
            {[
              { label: 'Essay' },
              { label: 'Interview' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-left bg-slate-800/20 border border-slate-700/40 border-dashed rounded-xl p-6 flex flex-col justify-between opacity-60"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border bg-slate-700/30 text-slate-500 border-slate-600/40">
                    {item.label}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center py-6 text-center">
                  <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">Coming Soon</p>
                </div>
              </div>
            ))}
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
