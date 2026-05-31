import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

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

export default function IDIGMovies() {
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
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border rounded-full px-5 py-1.5 mb-10"
              style={{ borderColor: 'rgba(129,140,248,0.35)', background: 'rgba(79,70,229,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" style={{ boxShadow: '0 0 8px #818CF8' }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#A5B4FC]">
                Actively in Development — First Node of the iDIG Protocol
              </span>
            </div>

            <h1 className="font-extrabold text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em' }}>
              Cinema as a Proof of Concept<br />for Human Resonance
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem,2.2vw,1.25rem)' }}>
              iDIG Movies is the first living laboratory for the iDIG Protocol — exploring
              whether Hilbert Space vectors can surface the films that genuinely resonate
              with who you are right now, not just what the crowd clicked last week.
            </p>

            <p className="text-slate-700 text-sm italic">
              Led by J. Paul Duplantis — version 0.1 of an ongoing experiment.
            </p>
          </div>
        </section>

        {/* ══ EXPERIMENT DISCLAIMER BAR ═════════════════════════════════════ */}
        <div className="bg-orange-50 border-b border-orange-200 py-3 px-8 text-center">
          <p className="m-0 text-[0.83rem] text-orange-900 leading-relaxed">
            <strong>This is an active build.</strong> iDIG Movies is under active development
            as the first proof-of-concept node for the iDIG Protocol. The concepts here are
            working hypotheses — not a finished product. We are building in the open.
          </p>
        </div>

        {/* ══ THE DISCOVERY PROBLEM ═════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Tag color="#7C3AED">The Problem Space</Tag>
              <h2 className="font-extrabold text-slate-900 mb-5 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Recommendation engines don't know you.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Every major streaming platform runs the same playbook: popularity signals,
                watch history, and demographic buckets. The result is a feed that reflects
                the crowd — not the observer sitting in front of it.
              </p>
            </div>

            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
              {[
                {
                  label: 'Today', symbol: '⊗', accent: '#EF4444',
                  title: 'Popularity Over Resonance',
                  body: 'Streaming algorithms surface what the largest number of people finished watching. They mistake completion for resonance and trending for truth. The film that would genuinely move you is buried under what moved the masses.',
                },
                {
                  label: 'The Constraint', symbol: '≈', accent: '#D97706',
                  title: 'Genre Is a Lossy Format',
                  body: 'Tagging a film as "Drama" or "Thriller" strips away everything that actually matters — the specific emotional texture, the underlying archetype, the thematic vector that makes it resonate with a particular person at a particular moment.',
                },
                {
                  label: 'The Hypothesis', symbol: '◎', accent: '#4F46E5',
                  title: 'Cinema as Resonance Space',
                  body: 'If films are mapped not as tagged items but as vectors of narrative texture and emotional geometry — and if the observer\'s current state of curiosity is similarly mapped — genuine alignment becomes discoverable for the first time.',
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

        {/* ══ THE CINEMA STAT ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
        }}>
          <DotGrid glowW="700px" glowH="400px" />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-[0.78rem] font-bold tracking-[0.22em] uppercase text-slate-600 mb-3">
              The Texture Problem
            </p>
            <h2 className="font-black leading-none mb-7" style={{
              fontSize: 'clamp(4rem,12vw,9rem)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #FFFFFF 35%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              500K+
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)' }}>
              Over half a million films have been catalogued in human history.
              Every one of them reduced, on most platforms, to a{' '}
              <em>star rating and a genre tag.</em>
            </p>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-10 text-lg">
              This was never a <em>catalog</em> problem. It is a{' '}
              <strong className="text-slate-200 font-semibold">language and alignment</strong>{' '}
              problem — and flat metadata is the reason genuine discovery stalls.
            </p>
            <div className="inline-block rounded-xl p-5 max-w-xl text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed italic">
                "Movies are more than entertainment. They are complex clusters of human
                emotion, archetypes, and narrative resonance. If the iDIG protocol can
                successfully align a person's current state of curiosity with the deep
                thematic vibe of a film, we will have proven the math works for human
                connection at large."
              </p>
              <p className="mt-2.5 mb-0 text-[0.78rem] text-slate-600">
                — J. Paul Duplantis,{' '}
                <a href="/theresonantbuilders/the-awakening"
                  className="text-[#818CF8] no-underline italic">
                  The Awakening ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ══ THREE VECTORS ═════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Tag color="#4F46E5">The iDIG Protocol — Applied to Cinema</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Every film is a vector. Every viewer is an observer.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                iDIG Movies maps cinematic content across three dimensions of human
                experience — moving past genre tags into the actual geometry of a story.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <ExperimentBadge>
                <strong>Experimental framework — actively in development.</strong> The
                three-vector model below is the working hypothesis powering the iDIG Movies
                build. This is a live research project, not a shipped product.
              </ExperimentBadge>
            </div>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
              {[
                {
                  number: '01', label: 'Narrative Vector', accent: '#0EA5E9',
                  title: 'The Texture of the Plot',
                  body: 'Rather than only matching genre labels, the narrative vector parses the deep prose of a film\'s story — extracting archetypes, tension structures, and the specific emotional mechanics of how a plot moves. This is the geometry of what actually happens on screen.',
                },
                {
                  number: '02', label: 'Thematic Vector', accent: '#7C3AED',
                  title: 'The Ideas Behind the Images',
                  body: 'Every film argues something about the world. The thematic vector surfaces the underlying values, philosophical tensions, and worldview embedded in the story — moving past surface plot into the ideas that give a film its lasting resonance.',
                },
                {
                  number: '03', label: 'Emotional Vector', accent: '#10B981',
                  title: 'The Feeling It Leaves Behind',
                  body: 'Not mood tags like "dark" or "uplifting" — the emotional vector captures the specific psychological undertones and affective arc of a film: the particular quality of defiance, grief, wonder, or catharsis that defines the viewing experience.',
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
                From Wikipedia synopsis to resonance map.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                The raw data of cinema — synopses, credits, genres — is a "lossy" format.
                It tells you what happened on screen. It says nothing about why it matters,
                what it feels like, or who it will move.
              </p>
              <p className="text-slate-500 leading-relaxed m-0">
                iDIG Movies uses LLMs to enrich this raw data into a trail of semantic
                breadcrumbs — parsing narrative prose into high-dimensional vectors that
                capture the actual thematic and emotional signature of each film.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  color: '#0EA5E9', label: 'Deep Narrative Parsing',
                  desc: 'LLMs analyze full plot descriptions — not loglines — to extract the specific archetypes, structural tensions, and character dynamics that define how a story moves.',
                },
                {
                  color: '#7C3AED', label: 'Psychological Undertone Extraction',
                  desc: 'Surface the emotional subtext beneath the genre tag: the specific quality of isolation in a thriller, the particular brand of hope in a drama, the texture of moral ambiguity in a crime film.',
                },
                {
                  color: '#10B981', label: 'Observer State Alignment',
                  desc: 'Map the viewer\'s current curiosity — expressed as a prompt, a feeling, or a reference film — onto the same vector space as the enriched catalog, and surface what actually aligns.',
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
                <strong>Active build.</strong> Narrative enrichment and vector alignment are
                currently in development. The pipeline runs against a growing catalog of
                films sourced from public data.
              </ExperimentBadge>
            </div>
          </div>
        </section>

        {/* ══ THE OBSERVER MOMENT ═══════════════════════════════════════════ */}
        <section className="py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #1E1040 100%)',
        }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
                The Observer at the Center
              </span>
              <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.02em' }}>
                Discovery shaped by who you are<br />right now — not who you were last month.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
                Watch history tells a platform who you were. iDIG Movies is designed
                around a different question: what is the state of your curiosity
                in this moment, and what film is waiting to meet it?
              </p>
            </div>

            <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#818CF8] shrink-0"
                    style={{ boxShadow: '0 0 12px #818CF8' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8]">The Prompt</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Curiosity as the entry point.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  Instead of browsing a catalog, the observer expresses a state — a feeling,
                  a theme, a film that moved them, a question they're sitting with. That
                  expression becomes the vector against which the entire catalog is aligned.
                </p>
              </div>

              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"
                    style={{ boxShadow: '0 0 12px #10B981' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-emerald-500">The Resonance</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Films that meet you where you are.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  The protocol surfaces films whose narrative, thematic, and emotional
                  vectors align with the observer's current state — not the most-watched,
                  not the highest-rated, but the most resonant for this person, at this moment.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(129,140,248,0.3)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed">
                <strong>In development.</strong> The observer-state matching engine is the
                core build currently underway. Initial testing is running against a curated
                catalog of films with fully enriched vector profiles.
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
              "A film isn't a genre — it is a signal.<br />
              The protocol's job is to find who it was made for."
            </blockquote>
          </div>
        </section>

        {/* ══ WHY CINEMA FIRST ══════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Why Cinema First</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', letterSpacing: '-0.02em' }}>
                A sandbox rich enough<br />to prove the math.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Cinema was chosen as the first node of the iDIG Protocol deliberately.
                Films are complex, emotionally rich, culturally layered — and the data
                is rich enough and public enough to build against at scale.
              </p>
              <p className="text-sm text-slate-400 italic m-0">
                If vector alignment works here, it works anywhere — talent, social
                services, civic life, education. Cinema is the proof.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { color: '#0EA5E9', label: 'Rich Public Data',        desc: 'Wikipedia plot descriptions, cast data, and critical writing provide a deep corpus for LLM enrichment without proprietary data dependencies.' },
                { color: '#7C3AED', label: 'Emotionally Complex',     desc: 'Films are dense with the kind of nuanced human signal that flat metadata can\'t capture — making them an ideal stress test for the vector model.' },
                { color: '#10B981', label: 'Universally Relatable',   desc: 'Everyone has experienced a film that resonated inexplicably. That shared intuition is the protocol\'s target — and its most powerful proof point.' },
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
              Follow the Build
            </span>
            <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
              style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', letterSpacing: '-0.02em' }}>
              We're building in the open.<br />Come find what resonates.
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              iDIG Movies is the first node of the iDIG Media Protocol — a broader framework
              that will extend resonance-first discovery to books, comic books, and magazines.
              Cinema is where we prove the math. If you're a film lover, a builder, or someone
              curious about what this could look like across all of media — we'd like to hear from you.
            </p>
            <ContactForm subject="iDIG Movies Inquiry" />
            <p className="mt-6 text-xs text-slate-700 italic">
              This is version 0.1 of an ongoing experiment. Nothing here is final.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-5 px-10 flex items-center justify-center gap-1.5"
        style={{ background: '#0A1628', borderColor: 'rgba(255,255,255,0.06)' }}>
        <span className="text-xs text-slate-600 tracking-wide">Powered by</span>
        <a href="/" className="text-xs font-bold text-[#818CF8] tracking-wide hover:text-indigo-300 transition">
          i-DIG.io
        </a>
      </footer>

    </div>
  );
}
