import { useState } from 'react';
import { useLocation } from 'wouter';
import { getAllPostMeta } from '../lib/posts';
import MediaPlayer from '../components/MediaPlayer';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function DotGrid({ glowW = '800px', glowH = '500px' }: { glowW?: string; glowH?: string }) {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(129,140,248,0.07) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: glowW, height: glowH,
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.16) 0%, transparent 70%)',
      }} />
    </>
  );
}

const PROJECTS = [
  {
    accent: '#0EA5E9',
    status: 'Active Build — iDIG Media Protocol',
    title: 'iDIG Movies',
    description: 'Cinema as the first proof of concept for the iDIG Protocol. Films mapped as vectors of narrative texture, emotional resonance, and thematic depth — surfacing what genuinely aligns with who you are right now.',
    path: '/idigmovies',
    cta: 'Explore iDIG Movies →',
  },
  {
    accent: '#7C3AED',
    status: 'Open Experiment — Talent Alignment',
    title: 'HiringSignals.ai',
    description: 'Treating talent as a signal to be discovered, not a resource to be siloed. An open-source protocol for resonant talent alignment that maps professional identity across three dimensions.',
    path: '/hiringsignals',
    cta: 'Explore HiringSignals →',
  },
  {
    accent: '#10B981',
    status: 'Pilot Design — Avondale, AZ',
    title: 'Mental Health Pathways',
    description: 'Moving community funding directly to the people who need it — bypassing administrative extraction to connect residents to care faster, with radical financial transparency and absolute resident privacy.',
    path: '/mentalhealthpathways',
    cta: 'Explore the Pilot →',
  },
];

export default function HomeSignalDriven() {
  const [, navigate] = useLocation();

  const today = new Date().toISOString().split('T')[0];
  const latestPost = getAllPostMeta()
    .filter(p => !p.draft && p.date <= today)
    .at(0) ?? null;

  const [trbEmail, setTrbEmail] = useState('');
  const [trbSubStatus, setTrbSubStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleTrbSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!trbEmail) return;
    setTrbSubStatus('sending');
    try {
      const res = await fetch('https://api.beehiiv.com/v2/forms/de9e33f8-2ecf-4b3c-973d-bf9dc69eb2ac/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trbEmail }),
      });
      setTrbSubStatus(res.ok ? 'done' : 'error');
    } catch {
      setTrbSubStatus('error');
    }
  }

  return (
    <div className="min-h-screen font-sans text-slate-900">

      <NavBar />

      <main className="pt-20">

        {/* ══ HERO — dark ═══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
          padding: '4rem 2rem 7rem',
        }}>
          <DotGrid />

          <div className="relative max-w-3xl mx-auto mb-10">
            <style>{`@keyframes signalSweep { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }`}</style>
            <div style={{
              background: 'linear-gradient(90deg, #080F1E, #4F46E5, #0EA5E9, #4F46E5, #080F1E)',
              backgroundSize: '300% 100%',
              animation: 'signalSweep 5s linear infinite',
              borderRadius: '999px',
              padding: '1px',
              display: 'inline-block',
            }}>
              <div className="rounded-full px-6 py-2" style={{ background: '#080F1E' }}>
                <span className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-white">
                  An Open Protocol for Human Resonance
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <h1 className="font-extrabold text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.2rem,5.5vw,4rem)', letterSpacing: '-0.03em' }}>
              Turn Information Noise<br />Into Signal —{' '}
              <span className="text-[#818CF8]">Guided By You.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1rem,2.2vw,1.2rem)' }}>
              i-DIG.io is an applied experiment in mapping human communication as Hilbert Space
              vectors — where meaning is defined by resonance, not extraction.
              Three active nodes. One open protocol.
            </p>
          </div>
        </section>

        {/* ══ THREE PROJECT CARDS — white ═══════════════════════════════════ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-extrabold tracking-[0.2em] uppercase text-indigo-500 mb-3">
                The Protocol Nodes
              </span>
              <h2 className="font-extrabold text-slate-900 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.02em' }}>
                Three experiments. One architecture.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS.map(p => (
                <button
                  key={p.path}
                  onClick={() => { window.scrollTo(0, 0); navigate(p.path); }}
                  className="text-left bg-white rounded-2xl p-7 hover:shadow-md transition-all duration-200"
                  style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${p.accent}` }}
                >
                  <span className="inline-block text-xs font-extrabold tracking-[0.18em] uppercase mb-4" style={{ color: p.accent }}>
                    {p.status}
                  </span>
                  <h3 className="font-bold text-slate-900 text-2xl mb-3">{p.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed mb-6">{p.description}</p>
                  <span className="text-sm font-semibold" style={{ color: p.accent }}>{p.cta}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT IS iDIG — dark ═══════════════════════════════════════════ */}
        <section className="py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #1E1040 100%)',
        }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
                The Core Idea
              </span>
              <h2 className="font-extrabold text-white mb-6 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.02em' }}>
                Resonance, not retrieval.
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Every dominant discovery system — streaming recommendations, hiring platforms,
                  social feeds — is built around the same assumption: that what the crowd
                  clicked is a proxy for what you need. It isn't.
                </p>
                <p>
                  The iDIG Protocol is built around a different premise. Meaning is not a fixed
                  point — it is a <strong className="text-slate-200">direction</strong>. Shaped by
                  context, interference, and the specific state of the person observing it.
                  Quantum Social Science and Hilbert Space mathematics give us the geometry to
                  model this — and LLMs give us the language enrichment to apply it at scale.
                </p>
                <p>
                  The result is a framework where alignment between a person and an opportunity,
                  a film, or a resource is surfaced not by keyword matching, but by resonance
                  in a shared semantic field.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { color: '#818CF8', label: 'Observer-First Discovery',   desc: 'The person\'s current state of curiosity, need, or intent is the entry point — not a demographic profile or a search keyword.' },
                { color: '#38BDF8', label: 'Vectors, Not Tags',          desc: 'Content, talent, and community resources are mapped as high-dimensional vectors — capturing nuance that flat metadata systematically strips away.' },
                { color: '#A78BFA', label: 'Open Protocol Architecture', desc: 'iDIG is transitioning to a nonprofit open protocol — a neutral layer anyone can build on, designed to let genuine resonance outpace algorithmic noise.' },
                { color: '#34D399', label: 'Asset-Light Deployment',     desc: 'Each node proves the protocol in a real-world domain. The math that works for cinema works for hiring, and for navigating a mental health system.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="mt-0.5 text-lg shrink-0" style={{ color: item.color }}>◈</span>
                  <div>
                    <p className="font-bold text-sm text-slate-200 mb-0.5">{item.label}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ THE RESONANT BUILDERS — white ═════════════════════════════════ */}
        <section className="bg-slate-50 py-20 px-8 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-amber-600 mb-3">
                The Resonant Builders
              </span>
              <h2 className="font-extrabold text-slate-900 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.02em' }}>
                Essays, conversations, and ideas<br />from the build.
              </h2>
            </div>

            {/* Latest post card */}
            <div className="bg-white border border-amber-200 rounded-2xl overflow-hidden mb-5 shadow-sm">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Latest Signal</span>
                <button onClick={() => navigate('/theresonantbuilders')}
                  className="text-xs text-slate-400 hover:text-amber-600 transition">
                  All Essays →
                </button>
              </div>

              {latestPost ? (
                <div className="px-6 py-6">
                  <h3 className="text-slate-900 font-medium text-lg leading-snug mb-1">{latestPost.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">{formatDate(latestPost.date)}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{latestPost.summary}</p>
                  <MediaPlayer
                    audioUrl={latestPost.audioUrl}          audioLabel={latestPost.audioLabel}
                    discussionUrl={latestPost.discussionUrl} discussionLabel={latestPost.discussionLabel}
                    videoUrl={latestPost.videoUrl}           videoLabel={latestPost.videoLabel}
                    light
                  />
                  <button
                    onClick={() => navigate(`/theresonantbuilders/${latestPost.slug}`)}
                    className="mt-3 text-xs font-semibold text-amber-600 hover:text-amber-500 transition"
                  >
                    Read the full essay →
                  </button>
                </div>
              ) : (
                <div className="px-6 py-5">
                  <p className="text-sm text-slate-400">First essay drops soon.</p>
                </div>
              )}
            </div>

            {/* Subscribe strip */}
            <div className="rounded-2xl px-6 py-6 bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-800 font-medium text-base mb-1">Stay in the signal. Subscribe to the Resonant Builders newsletter.</p>
              <p className="text-xs text-slate-400 mb-4">No noise, just signal.</p>
              {trbSubStatus === 'done' ? (
                <p className="text-amber-600 text-xs font-medium">You're in. We'll signal you when the next essay drops.</p>
              ) : (
                <form onSubmit={handleTrbSubscribe} className="flex gap-2">
                  <input
                    type="email" required placeholder="your@email.com"
                    value={trbEmail} onChange={e => setTrbEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
                  />
                  <button
                    type="submit" disabled={trbSubStatus === 'sending'}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-xs font-semibold rounded-lg transition disabled:opacity-50 shrink-0"
                  >
                    {trbSubStatus === 'sending' ? '…' : 'Subscribe'}
                  </button>
                </form>
              )}
              {trbSubStatus === 'error' && (
                <p className="text-red-500 text-xs mt-2">Something went wrong — try again or email paul@i-dig.io directly.</p>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer variant="light" />

    </div>
  );
}
