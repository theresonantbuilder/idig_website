import { useState } from 'react';
import { useLocation, useParams } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import DOMPurify from 'dompurify';
import { getPostBySlug } from '../lib/posts';
import MediaPlayer from '../components/MediaPlayer';

const TYPE_COLORS: Record<string, string> = {
  essay: 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  video: 'bg-red-900/40 text-red-300 border-red-700/50',
  podcast: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  interview: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
  commentary: 'bg-teal-900/40 text-teal-300 border-teal-700/50',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function ShareIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function ArticleShare({ summary }: { summary: string }) {
  const [open, setOpen]   = useState(false);
  const [copied, setCopied] = useState(false);

  function shareText() {
    const url = window.location.href;
    return `I thought this might resonate.\n\n${summary}\n\n${url}`;
  }

  function copy() {
    navigator.clipboard.writeText(shareText());
    setCopied(true);
    setTimeout(() => { setCopied(false); setOpen(false); }, 1800);
  }

  function linkedin() {
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(shareText())}`,
      '_blank'
    );
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-400 border border-slate-700 rounded-lg hover:text-white hover:border-slate-500 transition bg-slate-800/50"
      >
        <ShareIcon />
        Share
      </button>

      {open && (
        <>
          {/* Click-away overlay */}
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-20 min-w-[180px]">
            <button
              onClick={copy}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-2"
            >
              <CopyIcon />
              {copied ? 'Copied!' : 'Copy link'}
            </button>
            <button
              onClick={linkedin}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-2"
            >
              <LinkedInIcon />
              Share on LinkedIn
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function SubscribeCallout() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.beehiiv.com/v2/forms/de9e33f8-2ecf-4b3c-973d-bf9dc69eb2ac/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="my-12 bg-amber-900/20 border border-amber-700/40 rounded-xl p-6 md:p-8">
      <div className="max-w-lg">
        <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">The Resonant Builders</p>
        <h3 className="text-xl font-light text-white mb-2">Stay in the signal.</h3>
        <p className="text-slate-400 text-sm mb-5">
          New essays drop every Monday. Subscribe to receive a notification when the next one lands — no noise, just signal.
        </p>
        {status === 'done' ? (
          <p className="text-amber-400 text-sm font-medium">You're in. We'll signal you when the next essay drops.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold rounded-lg transition disabled:opacity-50 shrink-0"
            >
              {status === 'sending' ? 'Sending…' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2">Something went wrong — try again or email paul@i-dig.io directly.</p>
        )}
      </div>
    </div>
  );
}

export default function Post() {
  const [, navigate] = useLocation();
  const params = useParams<{ slug: string }>();
  const post = params.slug ? (getPostBySlug(params.slug) ?? null) : null;

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

      <NavBar />

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
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${TYPE_COLORS[post.type]}`}>
                  {post.type}
                </span>
                <span className="text-sm text-slate-500">{formatDate(post.date)}</span>
              </div>
              <ArticleShare summary={post.summary} />
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-white leading-tight mb-4">{post.title}</h1>
            {post.summary && post.type !== 'commentary' && <p className="text-lg text-slate-400 mb-8">{post.summary}</p>}
          </div>

          {/* Inline media player — renders only when audio or video exists */}
          <MediaPlayer
            audioUrl={post.audioUrl}      audioLabel={post.audioLabel}
            discussionUrl={post.discussionUrl} discussionLabel={post.discussionLabel}
            videoUrl={post.videoUrl}      videoLabel={post.videoLabel}
          />

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

          {/* iDIG Movies demo callout */}
          {post.slug === 'the-geometry-of-stories-and-discovery' && (
            <div className="my-12 bg-indigo-900/20 border border-indigo-700/40 rounded-xl p-6 md:p-8">
              <div className="max-w-lg">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">iDIG Movies</p>
                <h3 className="text-xl font-light text-white mb-2">Experience the live demo.</h3>
                <p className="text-slate-400 text-sm mb-5">
                  Explore the discovery space described in this essay. Choose your trails, rotate the dimensions, and see what resonates.
                </p>
                <a
                  href="https://idig-movies-production-demo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition no-underline"
                >
                  Access the Live Demo
                </a>
              </div>
            </div>
          )}

          {/* Subscribe callout */}
          <SubscribeCallout />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          )}

          {/* Bottom share bar */}
          <div className="border-t border-slate-700 pt-8 flex items-center gap-3">
            <span className="text-sm text-slate-500 mr-1">Share this {post.type}:</span>
            <ArticleShare summary={post.summary} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
