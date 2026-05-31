import { useState } from 'react';
import { useLocation } from 'wouter';

// ── Reusable sub-components ───────────────────────────────────────────────────

function DotGrid({ glowW = '700px', glowH = '400px' }: { glowW?: string; glowH?: string }) {
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
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)',
      }} />
    </>
  );
}

function Tag({ children, color = '#4F46E5' }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase mb-3" style={{ color }}>
      {children}
    </span>
  );
}

function ExperimentBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-indigo-50 border border-indigo-200 rounded-xl p-3.5">
      <span className="text-sm leading-none mt-0.5 shrink-0">🔬</span>
      <p className="m-0 text-[0.82rem] text-indigo-800 leading-relaxed">{children}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HiringSignals() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900">

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
            <button onClick={() => navigate('/theresonantbuilders')} className="hover:text-blue-600 transition">The Resonant Builders</button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
            <button onClick={() => { navigate('/about'); setMobileMenuOpen(false); }} className="text-left text-base font-medium text-slate-700 hover:text-blue-600 transition py-1">About J. Paul</button>
            <button onClick={() => { navigate('/theresonantbuilders'); setMobileMenuOpen(false); }} className="text-left text-base font-medium text-slate-700 hover:text-blue-600 transition py-1">The Resonant Builders</button>
          </div>
        )}
      </nav>

      <main className="pt-20">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
          padding: '3rem 2rem 8rem',
        }}>
          <DotGrid glowW="600px" glowH="400px" />

          <div className="relative">
            {/* Experiment badge */}
            <div className="inline-flex items-center gap-2 border rounded-full px-5 py-1.5 mb-10"
              style={{ borderColor: 'rgba(129,140,248,0.35)', background: 'rgba(79,70,229,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" style={{ boxShadow: '0 0 8px #818CF8' }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#A5B4FC]">
                An Open Experiment in Talent Alignment
              </span>
            </div>

            <h1 className="font-extrabold text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em' }}>
              The New Architecture<br />of Talent Alignment
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem,2.2vw,1.25rem)' }}>
              HiringSignals.ai is a living laboratory exploring how open-source
              protocols can more effectively align human potential with opportunity —
              by treating talent as a signal to be discovered, not a resource to be siloed.
            </p>

            <p className="text-slate-700 text-sm italic">
              Led by J. Paul Duplantis — version 0.1 of an ongoing experiment.
            </p>
          </div>
        </section>

        {/* ══ EXPERIMENT DISCLAIMER BAR ═════════════════════════════════════ */}
        <div className="bg-orange-50 border-b border-orange-200 py-3 px-8 text-center">
          <p className="m-0 text-[0.83rem] text-orange-900 leading-relaxed">
            <strong>This site is an active experiment.</strong> The concepts and
            protocols described here are working hypotheses under research — not
            shipped products. We are asking questions, not selling answers.
          </p>
        </div>

        {/* ══ THE ALIGNMENT PROBLEM ═════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Tag color="#7C3AED">The Problem Space</Tag>
              <h2 className="font-extrabold text-slate-900 mb-5 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Walled gardens degrade the signal.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                When human potential is fragmented across proprietary silos,
                discovery becomes noise. The architecture of today's hiring market
                was designed for platform engagement — not resonance.
              </p>
            </div>

            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
              {[
                {
                  label: 'Today', symbol: '⊗', accent: '#EF4444',
                  bg: '#FEF2F2', border: '#FECACA',
                  title: 'Fragmented & Siloed',
                  body: 'Candidate data lives in a dozen proprietary systems. Talent signals are locked behind walls. The most capable individuals never enter the field of discovery because the cost of being seen is too high.',
                },
                {
                  label: 'The Constraint', symbol: '≈', accent: '#D97706',
                  bg: '#FFFBEB', border: '#FDE68A',
                  title: 'Platform Incentive Mismatch',
                  body: 'Platforms are incentivized to maximize engagement within their walls — not to facilitate genuine alignment. The candidate becomes a commodity, not an observer with agency.',
                },
                {
                  label: 'The Hypothesis', symbol: '◎', accent: '#4F46E5',
                  bg: '#EEF2FF', border: '#C7D2FE',
                  title: 'Open Resonance Protocol',
                  body: 'If talent data is treated as a personal asset governed by open standards — discoverable by resonance, not by platform participation — alignment becomes possible for the first time.',
                },
              ].map((card, i) => (
                <div key={i} className="rounded-2xl p-8" style={{ background: card.bg, border: `1px solid ${card.border}` }}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span style={{ fontSize: '1.1rem', color: card.accent }}>{card.symbol}</span>
                    <span className="text-[0.68rem] font-extrabold tracking-[0.18em] uppercase" style={{ color: card.accent }}>{card.label}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed m-0">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ THE 10 TB REALITY ═════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
        }}>
          <DotGrid glowW="700px" glowH="400px" />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-[0.78rem] font-bold tracking-[0.22em] uppercase text-slate-600 mb-3">
              The 10-Terabyte Reality
            </p>
            <h2 className="font-black leading-none mb-7" style={{
              fontSize: 'clamp(5rem,14vw,10rem)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #FFFFFF 35%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              10 TB.
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)' }}>
              If every active professional resume in the United States were parsed
              into clean, structured data, the entire collection would fit on a{' '}
              <em>single consumer hard drive.</em>
            </p>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-10 text-lg">
              This was never a <em>Big Data</em> problem. It is an{' '}
              <strong className="text-slate-200 font-semibold">access and alignment</strong>{' '}
              problem — and proprietary silos are the reason signal degrades.
            </p>
            <div className="inline-block rounded-xl p-5 max-w-xl text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed italic">
                "If parsed into clean, structured data, the collective professional
                potential of an entire nation fits on a single consumer-grade drive.
                The challenge of modern hiring isn't a Big Data problem — it is an
                access and alignment problem."
              </p>
              <p className="mt-2.5 mb-0 text-[0.78rem] text-slate-600">
                — J. Paul Duplantis,{' '}
                <a href="https://www.i-dig.io/theresonantbuilders/the-new-architecture"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[#818CF8] no-underline italic">
                  The New Architecture of Talent Alignment ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ══ THREE VECTORS ═════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Tag color="#4F46E5">The iDIG Protocol — Experimental Framework</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Mapping resonance across three dimensions.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Rather than matching keywords, the iDIG experiment explores how
                professional identity can be expressed and discovered across three
                fundamental vectors.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <ExperimentBadge>
                <strong>Experimental concept — not yet implemented.</strong> The
                three-vector model below represents our working hypothesis for how
                talent resonance might be measured. This framework is under active
                research and remains a proposal, not a product.
              </ExperimentBadge>
            </div>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
              {[
                {
                  number: '01', label: 'Social Vector', accent: '#0EA5E9',
                  title: 'The Network of Trust',
                  body: 'Who vouches for you? Where do you contribute? The social vector captures community resonance — the signals of trust that emerge from how a professional engages with their field beyond a job title.',
                },
                {
                  number: '02', label: 'Semantic Vector', accent: '#7C3AED',
                  title: 'The Language of Capability',
                  body: 'Not just keywords — conceptual frameworks. The semantic vector uses LLM-enriched breadcrumbs to understand the actual depth of a professional\'s knowledge, surfacing latent capabilities that static resumes systematically miss.',
                },
                {
                  number: '03', label: 'Experiential Vector', accent: '#10B981',
                  title: 'The Temporal Journey',
                  body: 'A career is not a list — it is a trajectory. The experiential vector maps the mechanics of a professional journey over time, capturing how context and challenge have shaped the observer.',
                },
              ].map(v => (
                <div key={v.number} className="bg-white rounded-2xl p-8 shadow-sm"
                  style={{ border: '1px solid rgba(15,23,42,0.08)', borderTop: `3px solid ${v.accent}` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[0.72rem] font-extrabold font-mono tracking-[0.1em]" style={{ color: v.accent }}>{v.number}</span>
                    <span className="text-[0.68rem] font-extrabold tracking-[0.18em] uppercase" style={{ color: v.accent }}>{v.label}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed m-0">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ENRICHED BREADCRUMBS ══════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-start"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Enriched Breadcrumbs</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.02em' }}>
                Reimagining the language of capability.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Traditional resumes and job descriptions are "lossy" formats. They
                strip away intent, nuance, and the reality of day-to-day mechanics.
              </p>
              <p className="text-slate-500 leading-relaxed m-0">
                The iDIG hypothesis proposes using LLMs to enrich vectors from
                both candidate and hiring manager — generating a trail of breadcrumbs
                that captures the unspoken requirements of a role and the unstated
                depth of a career.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  color: '#0EA5E9', label: 'Dynamic Stack Ranking',
                  desc: 'Skills are no longer binary checkboxes. They are ranked by frequency and depth across a professional\'s actual project history.',
                },
                {
                  color: '#7C3AED', label: 'Latent Capability Discovery',
                  desc: 'Surface problem-solving approaches and collaboration styles that wouldn\'t appear in any resume — by analyzing resonance between candidate narrative and actual role intent.',
                },
                {
                  color: '#10B981', label: 'Contextual Cross-Domain Alignment',
                  desc: 'Understand that experience in one domain may have high-dimensional alignment with a seemingly unrelated challenge — moving past keyword limitations entirely.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl"
                  style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                  <span style={{ color: item.color, fontSize: '1.1rem', marginTop: '2px' }}>◈</span>
                  <div>
                    <p className="m-0 mb-1 font-bold text-sm text-slate-900">{item.label}</p>
                    <p className="m-0 text-[0.82rem] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <ExperimentBadge>
                <strong>Proposed model.</strong> Breadcrumb enrichment is a conceptual
                approach we are designing toward. It is not yet implemented as a
                working system.
              </ExperimentBadge>
            </div>
          </div>
        </section>

        {/* ══ THE OBSERVER PROBLEM ══════════════════════════════════════════ */}
        <section className="py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #1E1040 100%)',
        }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
                Preserving Superposition
              </span>
              <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.02em' }}>
                The moment a candidate signals availability,<br />
                they risk everything.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
                In today's market, "available" means exposed. Privacy is compromised,
                professional standing is at risk, and the most talented individuals
                never enter the field of discovery because the cost of being seen
                is too high.
              </p>
            </div>

            <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#818CF8] shrink-0"
                    style={{ boxShadow: '0 0 12px #818CF8' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8]">Latent State</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Signal visible. Identity protected.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  A candidate marks themselves as resonance-ready. Their professional
                  vectors become discoverable to aligned opportunities — but their
                  identity remains in superposition. They cannot be seen until they
                  choose to be.
                </p>
              </div>

              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"
                    style={{ boxShadow: '0 0 12px #10B981' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-emerald-500">Disclosed State</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Sovereign disclosure.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  When the candidate observes a resonant signal from an aligned
                  opportunity, they choose to collapse the wave function. Identity
                  is revealed on their terms, at their moment of readiness.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(129,140,248,0.3)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed">
                <strong>Proposed model — not yet implemented.</strong> This describes
                our hypothesis for how talent protocols might handle the
                privacy/visibility balance. It is one of the central questions this
                experiment is designed to explore.
              </p>
            </div>
          </div>
        </section>

        {/* ══ PULL QUOTE ════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 px-8 text-center border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-slate-400 mb-7">
              The Thesis
            </p>
            <blockquote className="font-light italic text-slate-900 leading-relaxed m-0"
              style={{ fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', letterSpacing: '-0.01em' }}>
              "Talent is no longer a resource to be siloed —<br />
              it is a signal to be discovered."
            </blockquote>
          </div>
        </section>

        {/* ══ DATA SOVEREIGNTY ══════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Built toward Open Standards</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', letterSpacing: '-0.02em' }}>
                Your data.<br />Your dominion.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The iDIG Protocol is designed to align with W3C standards —
                specifically the Solid Pod protocol — so that professional
                identity remains sovereign. Data is never shared or modified
                without explicit permission.
              </p>
              <p className="text-sm text-slate-400 italic m-0">
                We are in the early days of a transition from platform ownership
                to personal orchestration.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { color: '#0EA5E9', label: 'W3C Solid Pod',               desc: 'Personal data stores under individual control — a proposed foundation layer' },
                { color: '#7C3AED', label: 'IndexedDB Storage',            desc: 'Encrypted on-device storage as an alternative — no server required' },
                { color: '#10B981', label: 'Zero sharing without consent', desc: 'The protocol would match; the individual decides disclosure' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 bg-white rounded-xl"
                  style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                  <span style={{ color: item.color, fontSize: '1.1rem', marginTop: '2px' }}>◈</span>
                  <div>
                    <p className="m-0 mb-0.5 font-bold text-sm text-slate-900">{item.label}</p>
                    <p className="m-0 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-8 text-center" style={{
          background: 'linear-gradient(150deg, #0A1628 0%, #0D1B35 100%)',
        }}>
          <div className="max-w-lg mx-auto">
            <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
              Join the Experiment
            </span>
            <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
              style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', letterSpacing: '-0.02em' }}>
              We're asking questions,<br />not selling answers.
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              HiringSignals.ai is an open conversation about what talent alignment
              could look like. If these ideas resonate — whether you're a candidate,
              a hiring manager, or a fellow builder — we'd like to hear from you.
            </p>
            <a
              href="mailto:paul@i-dig.io"
              className="inline-block px-11 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition text-sm tracking-wide"
            >
              Start a Conversation
            </a>
            <p className="mt-8 text-xs text-slate-700 italic">
              This is version 0.1 of an ongoing experiment. Nothing here is final.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-5 px-10 flex items-center justify-center gap-1.5"
        style={{ background: '#0A1628', borderColor: 'rgba(255,255,255,0.06)' }}>
        <span className="text-xs text-slate-600 tracking-wide">Powered by</span>
        <button onClick={() => navigate('/')} className="text-xs font-bold text-[#818CF8] tracking-wide hover:text-indigo-300 transition">
          i-DIG.io
        </button>
      </footer>

    </div>
  );
}
