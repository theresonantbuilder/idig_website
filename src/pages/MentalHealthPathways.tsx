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

export default function MentalHealthPathways() {
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
              style={{ borderColor: 'rgba(129,140,248,0.35)', background: 'rgba(79,70,229,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" style={{ boxShadow: '0 0 8px #818CF8' }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#A5B4FC]">
                Avondale, AZ Pilot — An iDIG Open Protocol Deployment
              </span>
            </div>

            <h1 className="font-extrabold text-white mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em' }}>
              The Missing Link Between<br />Funding and Care
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem,2.2vw,1.25rem)' }}>
              Mental Health Pathways is a citizen-powered navigation protocol that moves
              community funding directly to the people who need it — bypassing the
              administrative maze that delays care at the moment people can least afford to wait.
            </p>

            <p className="text-slate-700 text-sm italic">
              Led by J. Paul Duplantis — Working White Paper v0.3 — Active pilot design phase.
            </p>
          </div>
        </section>

        {/* ══ DISCLAIMER BAR ════════════════════════════════════════════════ */}
        <div className="bg-orange-50 border-b border-orange-200 py-3 px-8 text-center">
          <p className="m-0 text-[0.83rem] text-orange-900 leading-relaxed">
            <strong>Active pilot protocol.</strong> Mental Health Pathways is in the design and
            community-engagement phase ahead of a six-month Avondale, AZ pilot. This is a working
            framework, not a launched service. Safety architecture and legal review precede deployment.
          </p>
        </div>

        {/* ══ THE PROBLEM ═══════════════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Tag color="#7C3AED">The Problem Space</Tag>
              <h2 className="font-extrabold text-slate-900 mb-5 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                The system demands the most from people at their lowest.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Community mental health resources exist. The gap is not resources — it is the
                routing friction between a person in need and the help that is already there.
              </p>
            </div>

            <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
              {[
                {
                  label: 'Today', symbol: '⊗', accent: '#EF4444',
                  title: 'Peak Burden at Peak Vulnerability',
                  body: 'Before reaching care, a person in crisis must navigate insurance rules, Medicaid eligibility, waitlists, intake requirements, and transportation gaps — demanding peak executive functioning at the exact moment their capacity is lowest.',
                },
                {
                  label: 'The Constraint', symbol: '≈', accent: '#D97706',
                  title: 'Funding Gets Absorbed, Not Deployed',
                  body: 'City, state, and philanthropic dollars intended for community mental health routinely disappear into administrative overhead, billing infrastructure, and institutional gatekeeping before they reach the person who needs them.',
                },
                {
                  label: 'The Hypothesis', symbol: '◎', accent: '#4F46E5',
                  title: 'A Direct Line from Funding to Services',
                  body: 'A citizen-powered navigation layer — asset-light, radically transparent, and bypass-capable — can route people to existing resources faster while moving community funding directly to the outcomes it was meant to achieve.',
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

        {/* ══ THE EXTRACTION STAT ═══════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-center py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #0F1E3C 55%, #131040 100%)',
        }}>
          <DotGrid glowW="700px" glowH="400px" />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-[0.78rem] font-bold tracking-[0.22em] uppercase text-slate-600 mb-3">
              The Extraction Problem
            </p>
            <h2 className="font-black leading-none mb-7" style={{
              fontSize: 'clamp(4rem,12vw,9rem)',
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #FFFFFF 35%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              $0 in.
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)' }}>
              When a corporate network sits between a community funder and a person in crisis,
              the administrative layers extract value at every step —{' '}
              <em>before a single dollar reaches care.</em>
            </p>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-10 text-lg">
              This is not a funding shortage. It is a{' '}
              <strong className="text-slate-200 font-semibold">routing and compression</strong>{' '}
              failure — and the protocol is designed as a bypass valve around it.
            </p>
            <div className="inline-block rounded-xl p-5 max-w-xl text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.25)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed italic">
                "If an administrative component does not directly compress the distance between
                a resident in crisis and their stability, it is bypassed. The protocol is a
                human bypass valve around corporate infrastructure."
              </p>
              <p className="mt-2.5 mb-0 text-[0.78rem] text-slate-600">
                — Mental Health Pathways, Working White Paper v0.3
              </p>
            </div>
          </div>
        </section>

        {/* ══ THREE LAYERS ══════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-24 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Tag color="#4F46E5">The Protocol Architecture</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
                Three layers. No new bureaucracy.
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-lg">
                Rather than building a new organization, Mental Health Pathways operates as
                a headless civic utility — a civic middleware between existing resources and
                the people who need them.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <ExperimentBadge>
                <strong>Active design — Avondale pilot pending.</strong> The three-layer
                architecture below is the operational framework under development. Legal review
                and clinical supervisor onboarding precede launch.
              </ExperimentBadge>
            </div>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
              {[
                {
                  number: '01', label: 'Civic Navigator Layer', accent: '#0EA5E9',
                  title: 'The Citizen Tribune',
                  body: 'Vetted community members — retired social workers, first responders, and peer-support specialists — who help residents locate and access existing resources. Advocates navigate and connect. They never diagnose, prescribe, or counsel. Scope of practice is anchored in Arizona\'s recognized Community Health Worker role.',
                },
                {
                  number: '02', label: 'iDIG Protocol Layer', accent: '#7C3AED',
                  title: 'Alignment, Not Assignment',
                  body: 'The iDIG open protocol handles advocate authentication, referral tracking, and resident-to-navigator matching based on alignment vectors — not corporate contracts or billing codes. Practitioners and advocates opt in by publishing their availability and specialties. The match is relational, not institutional.',
                },
                {
                  number: '03', label: 'Open Collective Funding Layer', accent: '#10B981',
                  title: 'Money Public. People Private.',
                  body: 'Municipal allocations, grants, crowdfunding, and philanthropic capital flow into an Open Collective escrow — publicly auditable in real time. Every dollar disbursed is visible. Resident identities are never published. Funds move to outcomes: transportation, bridge therapy sessions, medication gaps.',
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

        {/* ══ THE BRIDGE ════════════════════════════════════════════════════ */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-start"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">The Bridge Layer</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', letterSpacing: '-0.02em' }}>
                Buying time until the system catches up.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Arizona's crisis infrastructure — 988, Solari's mobile teams, the Central Arizona
                Crisis Line — already works. The protocol routes immediately into it when a
                resident is in acute crisis. That is not the gap this fills.
              </p>
              <p className="text-slate-500 leading-relaxed m-0">
                The gap is the weeks between crisis and an available AHCCCS slot. During that
                window, a transportation barrier, a missed session, or a medication gap can
                derail recovery entirely. The bridge layer deploys community funds to close
                that window — directly, without the insurance layer extracting value from it.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  color: '#0EA5E9', label: 'Connection',
                  desc: 'An iDIG-aligned advocate — matched on lived experience and communication style — stays with the resident through the navigation process, not just the intake moment.',
                },
                {
                  color: '#7C3AED', label: 'Stabilization',
                  desc: 'Community funds cover bridge therapy sessions at direct cash rates, medication gaps, and transportation to appointments during the AHCCCS waitlist period — bypassing insurance entirely until the person is stable.',
                },
                {
                  color: '#10B981', label: 'Safety',
                  desc: 'When an advocate perceives acute risk, the interaction stops. The job becomes: stay with the person and warm-transfer to 988 or the Central Arizona Crisis Line. Advocates recognize and route. They never evaluate or manage.',
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
                <strong>The pitch to Avondale.</strong> We are not building another crisis line.
                What's missing is the bridge: the weeks a resident waits for a care slot, when
                a single gap can derail recovery. We fill that bridge with a secure,
                zero-overhead routing utility.
              </ExperimentBadge>
            </div>
          </div>
        </section>

        {/* ══ SAFETY + TRANSPARENCY ═════════════════════════════════════════ */}
        <section className="py-24 px-8" style={{
          background: 'linear-gradient(150deg, #080F1E 0%, #1E1040 100%)',
        }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8] mb-3">
                The Non-Negotiables
              </span>
              <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.02em' }}>
                Safety before navigation.<br />Money public. People private.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
                Two commitments that are operationalized throughout the protocol — not
                merely stated as principles.
              </p>
            </div>

            <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(129,140,248,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#818CF8] shrink-0"
                    style={{ boxShadow: '0 0 12px #818CF8' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-[#818CF8]">Safety Architecture</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Crisis routes out immediately.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  A resident in acute crisis is not a navigation case. The moment an advocate
                  perceives acute risk — active suicidality, psychosis, immediate danger —
                  the interaction stops being navigation. Warm handoff to 988 or the Central
                  Arizona Crisis Line. No clinical assessment. No improvising. A scripted
                  procedure, a licensed clinical supervisor on retainer, and mandatory-reporting
                  obligations reviewed by counsel before launch.
                </p>
              </div>

              <div className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.3)' }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"
                    style={{ boxShadow: '0 0 12px #10B981' }} />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-emerald-500">Financial Transparency</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">Every dollar is visible. No resident ever is.</h4>
                <p className="text-sm text-slate-400 leading-relaxed m-0">
                  The Open Collective ledger is public and real time. City council, municipal
                  auditors, and community members see every disbursement — transportation,
                  bridge sessions, medication support — as it happens. Resident identities
                  and clinical details never touch the public ledger. Outcomes are published
                  only as de-identified aggregates. If administrative overhead exceeds 10%
                  for three consecutive months, new admin spending freezes automatically.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(129,140,248,0.3)' }}>
              <p className="m-0 text-sm text-[#818CF8] leading-relaxed">
                <strong>Capture-resistant by design.</strong> No advocate holds permanent or
                exclusive routing authority. Stewardship rotates. The ledger is open. The
                design survives where institutional models fail by keeping the human layer
                decentralized and the financial layer visible.
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
              "For many people, the first need is not treatment.<br />
              It is help finding treatment."
            </blockquote>
          </div>
        </section>

        {/* ══ THE PILOT ═════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 px-8">
          <div className="max-w-4xl mx-auto grid gap-12 items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
            <div>
              <Tag color="#0EA5E9">Avondale, AZ — Pilot Design</Tag>
              <h2 className="font-extrabold text-slate-900 mb-4 leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', letterSpacing: '-0.02em' }}>
                25 residents.<br />Six months. Prove the bridge.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The pilot targets the specific gap in Maricopa County's otherwise
                developed crisis network: residents who are past acute crisis but facing
                multi-week AHCCCS waitlists with no bridge support.
              </p>
              <p className="text-sm text-slate-400 italic m-0">
                The primary metric is not "time to first appointment" — institutional
                waitlists are outside the advocate's control. It is "time to stable
                placement or interim support." The protocol succeeds when the bridge holds.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { color: '#0EA5E9', label: 'No new 501(c)(3)',         desc: 'Funds route to an established fiscal host on Open Collective. No new nonprofit, no new department, no expanded payroll.' },
                { color: '#7C3AED', label: 'Asset-light MOU',          desc: 'The instrument is a City Council Resolution or Memorandum of Understanding — authorizing iDIG-authenticated citizens as Civic Navigators.' },
                { color: '#10B981', label: 'Horizontal scale path',    desc: 'If validated in Avondale, the protocol deploys across other civic pressure points: veteran support, housing navigation, addiction recovery, and senior services.' },
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
              Join the Pilot
            </span>
            <h2 className="font-extrabold text-white mb-5 leading-snug tracking-tight"
              style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', letterSpacing: '-0.02em' }}>
              If you work in mental health,<br />civic funding, or community advocacy —<br />we want to hear from you.
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Mental Health Pathways is designed for practitioners willing to operate
              outside the insurance maze, city officials who want funding to reach
              people directly, and builders who believe civic middleware can close
              the gap that institutions leave open.
            </p>
            <ContactForm subject="Mental Health Pathways Inquiry" />
            <p className="mt-6 text-xs text-slate-700 italic">
              Working White Paper v0.3 — Safety architecture and legal review precede any deployment.
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
