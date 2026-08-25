import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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

export default function SubjectExplorer() {
  return (
    <div className="min-h-screen font-sans text-slate-900">

      <NavBar />

      <main className="pt-20">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
          padding: '3rem 2rem 8rem',
        }}>
          <DotGrid glowW="600px" glowH="400px" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 border rounded-full px-5 py-1.5 mb-10"
              style={{ borderColor: 'rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" style={{ boxShadow: '0 0 8px #F59E0B' }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#FCD34D]">
                A Concept — Not Yet in Development
              </span>
            </div>

            <h1 className="font-extrabold text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em' }}>
              Discover Any Subject<br />the Way You Discover a Movie
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem,2.2vw,1.25rem)' }}>
              Subject Explorer applies the iDIG Semantic Engine to any body of
              knowledge — Generative AI, the War of 1812, plumbing — mapping it
              as a field of themes and building enriched trails that deepen
              meaning and understanding as you explore.
            </p>

            <p className="text-slate-700 text-sm italic">
              Led by J. Paul Duplantis — early concept design.
            </p>
          </div>
        </section>

        {/* ══ CONCEPT DISCLAIMER BAR ════════════════════════════════════════ */}
        <div className="bg-orange-50 border-b border-orange-200 py-3 px-8 text-center">
          <p className="m-0 text-[0.83rem] text-orange-900 leading-relaxed">
            <strong>This is a concept, not a product.</strong> Subject Explorer is
            not yet in active development. It builds on the same Semantic Engine
            proving itself in iDIG Movies, and is next on the roadmap.
          </p>
        </div>

        {/* ══ THE PROBLEM SPACE ═════════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Tag color="#7C3AED">The Problem Space</Tag>
              <h2 className="font-extrabold text-slate-900 mb-5 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Search returns results. It doesn't build understanding.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Typing a subject into a search bar produces a ranked list of
                disconnected pages — not a map of what the subject actually means,
                or how its parts relate to one another.
              </p>
            </div>

            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
              {[
                {
                  label: 'Today', symbol: '⊗', accent: '#EF4444',
                  title: 'Ranked Links, Not Understanding',
                  body: 'Search engines rank pages by popularity and keyword match, not by thematic depth. The result is a flat list — no sense of what matters most, or why.',
                },
                {
                  label: 'The Constraint', symbol: '≈', accent: '#D97706',
                  title: 'Depth Takes Manual Excavation',
                  body: 'Real understanding of a subject still requires hours of cross-referencing sources, following citations, and manually connecting ideas that no single page lays out for you.',
                },
                {
                  label: 'The Hypothesis', symbol: '◎', accent: '#4F46E5',
                  title: 'The Semantic Engine, Applied to Any Subject',
                  body: 'The same vector-mapping that surfaces resonant films can map the internal architecture of a subject — its themes, its throughlines, and the ideas adjacent to it.',
                },
              ].map((card, i) => (
                <div key={i} className="rounded-2xl p-8 bg-white" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
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

        {/* ══ ANY SUBJECT ═══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
        }}>
          <DotGrid glowW="700px" glowH="400px" />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-[0.78rem] font-bold tracking-[0.22em] uppercase text-slate-600 mb-3">
              The Range of the Idea
            </p>
            <h2 className="font-black leading-none mb-7" style={{
              fontSize: 'clamp(3rem,9vw,6.5rem)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #FFFFFF 35%, #FCD34D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Any Subject.
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)' }}>
              Generative AI. The War of 1812.{' '}
              <em>Plumbing.</em>
            </p>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-10 text-lg">
              If a subject has themes, causes, tensions, and adjacent ideas —
              and nearly every subject does — Subject Explorer is designed to
              map it the same way.
            </p>
            <div className="inline-block rounded-xl p-5 max-w-xl text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.25)' }}>
              <p className="m-0 text-sm text-[#FCD34D] leading-relaxed italic">
                "A trail through the War of 1812 and a trail through plumbing are
                built the same way — by mapping themes and their relationships,
                not by indexing keywords."
              </p>
              <p className="mt-2.5 mb-0 text-[0.78rem] text-slate-600">
                — Subject Explorer, early concept notes
              </p>
            </div>
          </div>
        </section>

        {/* ══ THREE LAYERS ══════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Tag color="#4F46E5">The Semantic Engine — Applied</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                How Subject Explorer maps a subject.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Rather than indexing pages, the concept explores how a subject can
                be expressed and explored across three layers.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <ExperimentBadge>
                <strong>Concept phase — not yet implemented.</strong> The
                three-layer model below is a working hypothesis for how a subject's
                structure might be mapped. It is a proposal, not a working system.
              </ExperimentBadge>
            </div>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
              {[
                {
                  number: '01', label: 'Thematic Layer', accent: '#0EA5E9',
                  title: 'The Core Themes',
                  body: 'Identifies the recurring ideas, tensions, and throughlines within a subject — what it is actually about, beneath the surface facts.',
                },
                {
                  number: '02', label: 'Contextual Layer', accent: '#7C3AED',
                  title: 'The Surrounding Field',
                  body: 'Maps how a subject connects to adjacent domains, causes, and events — showing why it matters beyond its own boundaries.',
                },
                {
                  number: '03', label: 'Trail Layer', accent: '#10B981',
                  title: 'The Enriched Trail',
                  body: 'Sequences discovery into a guided path, where each step increases meaning and understanding — rather than a flat list of links.',
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

        {/* ══ ENRICHED TRAILS ═══════════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-start"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Enriched Trails</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.02em' }}>
                From flat facts to a guided trail.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                A search results page is a "lossy" format. It strips away the
                relationships between ideas and leaves the reader to reconstruct
                them alone.
              </p>
              <p className="text-slate-500 leading-relaxed m-0">
                Subject Explorer proposes treating each subject as a landscape,
                not a page — a trail that carries a person from a first question
                to genuine depth, one resonant step at a time.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  color: '#0EA5E9', label: 'Cross-Domain Bridges',
                  desc: 'Surfaces the unexpected connection between a modern debate and a historical one, or between a trade skill and the science behind it.',
                },
                {
                  color: '#7C3AED', label: 'Depth Without Overwhelm',
                  desc: 'Sequences a subject\'s ideas from accessible to advanced, so a newcomer and an expert can walk the same trail at different depths.',
                },
                {
                  color: '#10B981', label: 'Format-Agnostic Sources',
                  desc: 'Draws from articles, primary sources, video, and audio alike — matched to the theme, not confined to one medium.',
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
                <strong>Proposed model.</strong> Enriched trails are a conceptual
                approach we are designing toward. They are not yet implemented as
                a working system.
              </ExperimentBadge>
            </div>
          </div>
        </section>

        {/* ══ SEARCH VS. TRAIL ══════════════════════════════════════════════ */}
        <section className="py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #1E1040 100%)',
        }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
                A Different Starting Point
              </span>
              <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.02em' }}>
                A list of links versus<br />a trail of meaning.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
                The shift Subject Explorer is designed around — from ranking
                pages to mapping understanding.
              </p>
            </div>

            <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(148,163,184,0.25)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-slate-400">Search, Today</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Keyword matched. Context lost.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  Results are ranked by popularity and keyword overlap. Every page
                  stands alone — the relationships between ideas are left for the
                  reader to discover, if they discover them at all.
                </p>
              </div>

              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shrink-0"
                    style={{ boxShadow: '0 0 12px #F59E0B' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#FCD34D]">Subject Explorer, Proposed</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Theme mapped. Context preserved.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  Themes are ranked by resonance to what a person is actually
                  trying to understand, and sequenced into a trail — so context
                  compounds instead of resetting with every click.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(245,158,11,0.3)' }}>
              <p className="m-0 text-sm text-[#FCD34D] leading-relaxed">
                <strong>Proposed model — not yet implemented.</strong> This
                describes the hypothesis Subject Explorer is designed to test once
                development begins.
              </p>
            </div>
          </div>
        </section>

        {/* ══ PULL QUOTE ════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 px-8 text-center border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-[0.72rem] font-bold tracking-[0.25em] uppercase text-slate-400 mb-7">
              The Core Premise
            </p>
            <blockquote className="font-light italic text-slate-900 leading-relaxed m-0"
              style={{ fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', letterSpacing: '-0.01em' }}>
              "A subject isn't a list of facts.<br />
              It's a landscape of meaning waiting to be walked."
            </blockquote>
          </div>
        </section>

        {/* ══ ROADMAP ═══════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Status — Concept Phase</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', letterSpacing: '-0.02em' }}>
                Not yet in development.<br />Next after the Semantic Engine matures.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Subject Explorer builds directly on the same Semantic Engine
                architecture proving itself in iDIG Movies. It moves from concept
                toward active build once that core infrastructure is further along.
              </p>
              <p className="text-sm text-slate-400 italic m-0">
                Nothing on this page is a commitment to a timeline — it is a
                record of where the idea stands today.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { color: '#0EA5E9', label: 'Built on proven infrastructure', desc: 'Reuses the same vector-mapping engine already running in the iDIG Movies proof of concept, rather than starting from zero.' },
                { color: '#7C3AED', label: 'Domain-agnostic by design',      desc: 'The architecture is not built for one subject — it is meant to generalize across any field of knowledge, from history to trade skills.' },
                { color: '#10B981', label: 'Open to early conversations',    desc: 'If this resonates with a subject area, dataset, or use case you care about, we want to hear about it now — before development begins.' },
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
              Follow the Concept
            </span>
            <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
              style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', letterSpacing: '-0.02em' }}>
              If a subject you care about<br />deserves a better trail —<br />we want to hear from you.
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Subject Explorer is not yet in development. If you're an educator,
              a lifelong learner, or a builder who sees where this could go,
              tell us what subject you'd want to explore first.
            </p>
            <ContactForm subject="Subject Explorer Inquiry" />
            <p className="mt-6 text-xs text-slate-700 italic">
              Concept phase — not yet in active development. Nothing here is final.
            </p>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}
