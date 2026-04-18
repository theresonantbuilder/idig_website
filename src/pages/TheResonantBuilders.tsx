import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { getAllPostMeta } from '../lib/posts';
import type { PostMeta } from '../types/post';

function HeadphoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

type ContentFilter = 'all' | 'essay' | 'interview';
type MediaFilter  = 'all' | 'article' | 'video' | 'audio';

function getMediaType(post: PostMeta): 'video' | 'audio' | 'article' {
  if (post.videoUrl) return 'video';
  if (post.audioUrl) return 'audio';
  return 'article';
}

function getContentType(post: PostMeta): 'essay' | 'interview' {
  return post.type === 'interview' ? 'interview' : 'essay';
}

const CONTENT_BADGE: Record<'essay' | 'interview', string> = {
  essay:     'bg-blue-900/40 text-blue-300 border-blue-700/50',
  interview: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
};

const MEDIA_BADGE: Record<'article' | 'video' | 'audio', string> = {
  article: 'bg-slate-700/60 text-slate-400 border-slate-600/50',
  video:   'bg-red-900/40 text-red-300 border-red-700/50',
  audio:   'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
};

const MEDIA_ICONS: Record<'article' | 'video' | 'audio', string> = {
  article: '✦',
  video:   '▶',
  audio:   '♪',
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

export default function TheResonantBuilders() {
  const [, navigate] = useLocation();
  const [contentFilter, setContentFilter] = useState<ContentFilter>('all');
  const [mediaFilter, setMediaFilter]     = useState<MediaFilter>('all');
  const [openAudio, setOpenAudio]         = useState<string | null>(null);
  const audioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (audioRef.current && !audioRef.current.contains(e.target as Node)) {
        setOpenAudio(null);
      }
    }
    if (openAudio) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openAudio]);

  const allPosts = getAllPostMeta();

  const posts = allPosts.filter(post => {
    const contentMatch = contentFilter === 'all' || getContentType(post) === contentFilter;
    const mediaMatch   = mediaFilter === 'all'   || getMediaType(post)   === mediaFilter;
    return contentMatch && mediaMatch;
  });

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

          {/* Filters */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 mb-10 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest w-16 shrink-0">Content</span>
              <div className="flex flex-wrap gap-2">
                <FilterBtn active={contentFilter === 'all'}       onClick={() => setContentFilter('all')}>All</FilterBtn>
                <FilterBtn active={contentFilter === 'essay'}     onClick={() => setContentFilter('essay')}>Essays</FilterBtn>
                <FilterBtn active={contentFilter === 'interview'} onClick={() => setContentFilter('interview')}>Interviews</FilterBtn>
              </div>
            </div>

            <div className="hidden sm:block w-px bg-slate-700 self-stretch mx-1" />

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest w-16 shrink-0">Media</span>
              <div className="flex rounded-lg border border-slate-600 overflow-hidden text-xs font-semibold">
                {([['all', 'All'], ['article', '✦ Article'], ['video', '▶ Video'], ['audio', '♪ Audio']] as [MediaFilter, string][]).map(([val, label], i, arr) => (
                  <button
                    key={val}
                    onClick={() => setMediaFilter(val)}
                    className={`px-3 py-1.5 transition ${
                      mediaFilter === val
                        ? 'bg-slate-300 text-slate-900'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                    } ${i < arr.length - 1 ? 'border-r border-slate-600' : ''}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={audioRef}>
            {posts.map(post => {
              const contentType = getContentType(post);
              const mediaType   = getMediaType(post);
              const isAudioOpen = openAudio === post.slug;
              return (
                <div
                  key={post.slug}
                  onClick={() => { setOpenAudio(null); navigate(`/theresonantbuilders/${post.slug}`); }}
                  className="relative text-left bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-amber-600/50 hover:bg-slate-800 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${CONTENT_BADGE[contentType]}`}>
                        {contentType === 'essay' ? 'Essay' : 'Interview'}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${MEDIA_BADGE[mediaType]}`}>
                        {MEDIA_ICONS[mediaType]} {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
                      </span>
                      {/* Headphone audio dropdown */}
                      <div
                        className="relative"
                        onClick={e => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setOpenAudio(isAudioOpen ? null : post.slug)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs transition ${
                            isAudioOpen
                              ? 'bg-blue-900/50 border-blue-600/60 text-blue-300'
                              : 'bg-slate-700/40 border-slate-600/50 text-slate-400 hover:border-blue-600/50 hover:text-blue-300'
                          }`}
                          title="Audio options"
                        >
                          <HeadphoneIcon />
                        </button>
                        {isAudioOpen && (
                          <div className="absolute left-0 top-full mt-1.5 z-30 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl py-1 w-52">
                            <button
                              className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 transition text-left opacity-50 cursor-not-allowed"
                              disabled
                            >
                              <HeadphoneIcon />
                              <span>Listen to Essay</span>
                              <span className="ml-auto text-xs text-slate-600">Soon</span>
                            </button>
                            <button
                              className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 transition text-left opacity-50 cursor-not-allowed"
                              disabled
                            >
                              <HeadphoneIcon />
                              <span>AI Discussion</span>
                              <span className="ml-auto text-xs text-slate-600">Soon</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
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
                </div>
              );
            })}

            {/* Coming Soon placeholders */}
            {[
              { label: 'Essay',     icon: '✦ Article' },
              { label: 'Interview', icon: '▶ Video'   },
            ].map((item, i) => (
              <div
                key={i}
                className="text-left bg-slate-800/20 border border-slate-700/40 border-dashed rounded-xl p-6 flex flex-col justify-between opacity-60"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border bg-slate-700/30 text-slate-500 border-slate-600/40">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full border bg-slate-700/30 text-slate-600 border-slate-600/40">
                    {item.icon}
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
