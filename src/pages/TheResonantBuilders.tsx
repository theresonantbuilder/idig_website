import { useState } from 'react';
import { useLocation } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { getAllPostMeta } from '../lib/posts';
import type { PostMeta } from '../types/post';

type ContentFilter = 'all' | 'essay' | 'interview' | 'commentary';

function getContentType(post: PostMeta): 'essay' | 'interview' | 'commentary' {
  if (post.type === 'interview') return 'interview';
  if (post.type === 'commentary') return 'commentary';
  return 'essay';
}

const CONTENT_BADGE: Record<'essay' | 'interview' | 'commentary', string> = {
  essay:      'bg-blue-50 text-blue-700 border-blue-200',
  interview:  'bg-purple-50 text-purple-700 border-purple-200',
  commentary: 'bg-teal-50 text-teal-700 border-teal-200',
};

const CONTENT_LABEL: Record<'essay' | 'interview' | 'commentary', string> = {
  essay:      'Essay',
  interview:  'Interview',
  commentary: 'Commentary',
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
          ? 'bg-amber-500 text-white border-amber-500'
          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'
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
  const [subOpen,   setSubOpen]   = useState(false);
  const [subEmail,  setSubEmail]  = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus('sending');
    try {
      const res = await fetch('https://api.beehiiv.com/v2/forms/de9e33f8-2ecf-4b3c-973d-bf9dc69eb2ac/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail }),
      });
      setSubStatus(res.ok ? 'done' : 'error');
    } catch {
      setSubStatus('error');
    }
  }

  const allPosts = getAllPostMeta();
  const posts = allPosts.filter(post =>
    !post.draft && (contentFilter === 'all' || getContentType(post) === contentFilter)
  );

  return (
    <div className="min-h-screen font-sans text-slate-900">

      <NavBar />

      <main className="pt-20">

        {/* ══ HERO — dark ═══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
          padding: '3.5rem 2rem 5rem',
        }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(rgba(129,140,248,0.07) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }} />
          <div className="absolute pointer-events-none" style={{
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: '700px', height: '350px',
            background: 'radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 70%)',
          }} />

          <div className="relative">
            <div className="inline-flex items-center gap-2 border rounded-full px-5 py-1.5 mb-6"
              style={{ borderColor: 'rgba(217,119,6,0.4)', background: 'rgba(217,119,6,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" style={{ boxShadow: '0 0 8px #F59E0B' }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-amber-400">
                The Resonant Builders
              </span>
            </div>

            <h1 className="font-extrabold text-white mb-4 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', letterSpacing: '-0.03em' }}>
              Essays, Conversations &amp; Ideas
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1rem,2vw,1.15rem)' }}>
              Exploring how quantum-informed signal models can reshape the way we communicate —
              commercially, socially, and culturally.
            </p>
          </div>
        </section>

        {/* ══ FILTERS + GRID — white ════════════════════════════════════════ */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-6xl mx-auto">

            {/* Filter row */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">Filter</span>
                <div className="flex flex-wrap gap-2">
                  <FilterBtn active={contentFilter === 'all'}        onClick={() => setContentFilter('all')}>All</FilterBtn>
                  <FilterBtn active={contentFilter === 'essay'}      onClick={() => setContentFilter('essay')}>Essays</FilterBtn>
                  <FilterBtn active={contentFilter === 'interview'}  onClick={() => setContentFilter('interview')}>Interviews</FilterBtn>
                  <FilterBtn active={contentFilter === 'commentary'} onClick={() => setContentFilter('commentary')}>Commentary</FilterBtn>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs items-center">
                <button
                  onClick={() => { setSubOpen(o => !o); setSubStatus('idle'); setSubEmail(''); }}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-white border border-amber-500 transition shrink-0"
                >
                  Subscribe
                </button>
                <a href="/feed.xml" className="flex items-center gap-1.5 text-slate-400 hover:text-amber-600 transition" target="_blank" rel="noopener noreferrer">
                  <RssIcon /> Article RSS
                </a>
                <a href="/podcast.xml" className="flex items-center gap-1.5 text-slate-400 hover:text-amber-600 transition" target="_blank" rel="noopener noreferrer">
                  <RssIcon /> Podcast RSS
                </a>
                <a
                  href="https://open.spotify.com/show/6ompRuMKyiXQZoboUzjAy5"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-600 transition"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>

            {/* Collapsible subscribe form */}
            {subOpen && (
              <div className="mb-6 flex justify-end">
                {subStatus === 'done' ? (
                  <p className="text-amber-600 text-sm font-medium">You're in. We'll signal you when the next post drops.</p>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="email" required autoFocus placeholder="your@email.com"
                      value={subEmail} onChange={e => setSubEmail(e.target.value)}
                      className="flex-1 sm:w-64 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
                    />
                    <button
                      type="submit" disabled={subStatus === 'sending'}
                      className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-lg transition disabled:opacity-50 shrink-0"
                    >
                      {subStatus === 'sending' ? 'Sending…' : 'Subscribe'}
                    </button>
                  </form>
                )}
                {subStatus === 'error' && (
                  <p className="text-red-500 text-xs mt-2">Something went wrong — try again or email paul@i-dig.io directly.</p>
                )}
              </div>
            )}

            {/* Post grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => {
                const contentType = getContentType(post);
                const isUpcoming  = new Date(post.date) > new Date();
                return (
                  <div
                    key={post.slug}
                    onClick={() => navigate(`/theresonantbuilders/${post.slug}`)}
                    className="relative text-left bg-white border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-amber-200 transition group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${CONTENT_BADGE[contentType]}`}>
                        {CONTENT_LABEL[contentType]}
                      </span>
                      <div className="flex items-center gap-2">
                        {isUpcoming && (
                          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wide">Coming Soon</span>
                        )}
                        <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <h2 className="text-slate-900 font-medium text-lg leading-snug mb-3 group-hover:text-amber-600 transition">{post.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{post.summary}</p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Coming Soon placeholders */}
              {[{ label: 'Essay' }, { label: 'Interview' }].map((item, i) => (
                <div
                  key={i}
                  className="text-left bg-slate-50 border border-dashed border-slate-200 rounded-xl p-6 flex flex-col justify-between opacity-60"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border bg-white text-slate-400 border-slate-200">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-6 text-center">
                    <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer variant="light" />

    </div>
  );
}
