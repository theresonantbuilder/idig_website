import { Code2, Terminal, Layers, Lock, Sliders, GitMerge, BrainCircuit, Eye, Compass, Orbit, Scale, Users } from 'lucide-react';
import { useLocation } from 'wouter';


export default function HomeSignalDriven() {

  const [, navigate] = useLocation();


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">


     {/* Navigation - Increased height to h-20 and font sizes */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO & TAGLINE */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer select-none group"
          >
            {/* Logo increased to text-2xl (mobile) and text-3xl (desktop) */}
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800 group-hover:opacity-80 transition">
              i-DIG<span className="text-blue-600">.io</span>
            </div>

            {/* Tagline increased to text-lg */}
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-300 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>


          {/* Menu Links increased to text-base (16px) */}
          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-600">
            <button onClick={() => navigate('/about')} className="hover:text-blue-600 transition">About J. Paul</button>
            <button onClick={() => navigate('/theresonantbuilders')} className="hover:text-blue-600 transition">The Resonant Builders</button>
          </div>
        </div>
      </nav>


      <main className="pt-20 pb-20">

        {/* LAB SECTION */}
        <section id="lab" className="bg-slate-900 text-slate-300 pt-10 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 border-b border-slate-700 pb-8">
              <h2 className="text-white font-light leading-tight text-center" style={{ fontSize: 'clamp(1rem, 3vw, 2.5rem)' }}>
                iDIG turns information noise into signal — <span className="text-blue-400 font-medium">guided by you.</span>
              </h2>
            </div>


            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="text-base leading-relaxed text-slate-400 space-y-4">
                  <p>For over 20 years I've been drawn to a central question: why do the tools people use to communicate so rarely give them a sense of agency over what they're actually saying — or resonance with who they're saying it to?</p>
                  <p>That question led me toward <strong className="text-slate-300">Quantum Social Science</strong> — a field exploring how concepts from quantum mechanics, including superposition, entanglement, and interference, map onto the way meaning actually behaves in human communication. Unlike classical models that treat language as fixed data, quantum-inspired frameworks treat it as something alive: context-dependent, relational, and irreducibly ambiguous until observed.</p>
                  <p>That discovery became the foundation for <strong className="text-slate-300">i-DIG.io</strong> — an applied experiment in representing communication signals as Hilbert space vectors, where meaning isn't extracted but modeled as direction, magnitude, and interference across a shared semantic field.</p>
                  <p><strong className="text-slate-300">iDIG Movies</strong> extends this into a new dimension: exploring how people engage with passages of moving content — testing whether the signals embedded in film and narrative can create the same kind of resonance the framework is designed to surface in text and data.</p>
                  <p>I'm also exploring what it would mean to move iDIG beyond a product and into a <strong className="text-slate-300">protocol</strong> — a shared layer others could build on to help surface resonance in the tools and systems where human communication already lives.</p>
                </div>

                {/* THE RESONANT BUILDERS CARD */}
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center mb-3">
                    <Users size={14} className="mr-2 text-amber-400" />
                    <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest">The Resonant Builders</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 mb-3">I'm building iDIG because I believe a quantum-informed model of communication signals can create real impact — commercially, in how organizations discover and align with opportunity, and socially, in how communities surface the people and needs that traditional systems overlook.</p>
                  <ul className="text-sm text-slate-400 space-y-2 mb-3 ml-1">
                    <li className="flex items-start"><span className="text-amber-500 mr-2 mt-0.5 shrink-0">→</span><span>Aligning social workers with first responders to surface the right support for the right person at the right moment</span></li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 mt-0.5 shrink-0">→</span><span>Cutting hiring noise by matching talent to opportunity through signal — not keyword filters</span></li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 mt-0.5 shrink-0">→</span><span>Helping people resonate with stories — through film, books, and content that genuinely reflects who they are</span></li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 mt-0.5 shrink-0">→</span><span>Giving people real agency over the products and services they engage with, rather than being matched by opaque algorithms</span></li>
                  </ul>
                  <p className="text-sm leading-relaxed text-slate-500">I'll be exploring these ideas — and inviting others to build alongside — through the <strong className="text-slate-400">TheResonantBuilders</strong> blog, coming to this site. If this resonates with you, the conversation is open.</p>
                </div>

              </div>

              <div className="flex flex-col gap-6">

                {/* SIGNAL DRIVEN FRAMEWORK CARD - WITH YOUTUBE VIDEO */}
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col items-start justify-between opacity-90">
                   <div className="flex w-full justify-between items-center mb-4"><div className="flex items-center space-x-2"><Lock size={16} className="text-slate-500" /><h4 className="text-slate-300 font-medium">Signal-Driven Framework</h4></div></div>

                   {/* YOUTUBE CHANNEL CARD */}
                   <a
                     href="https://www.youtube.com/@i-DIG-framework"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full aspect-video bg-slate-900 rounded-md mb-6 overflow-hidden flex flex-col items-center justify-center group border border-slate-700 hover:border-red-500/60 transition-colors duration-300 cursor-pointer relative"
                   >
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-80"></div>
                     <div className="relative z-10 flex flex-col items-center text-center px-6">
                       <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-900/40">
                         <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M8 5v14l11-7z"/>
                         </svg>
                       </div>
                       <p className="text-white font-medium text-base mb-1">Follow the Build on YouTube</p>
                       <p className="text-slate-400 text-sm leading-relaxed mb-3">Updates, experiments, and thinking-out-loud as i-DIG takes shape.</p>
                       <span className="inline-flex items-center text-xs font-semibold text-red-400 group-hover:text-red-300 transition-colors tracking-wide uppercase">
                         Visit the Channel →
                       </span>
                     </div>
                   </a>


                   <div className="space-y-4 w-full">
                      <p className="text-slate-400 text-sm leading-relaxed">A discovery engine designed to surface meaningful signals across people, needs, and decisions—especially where intent, authority, and context are easy to miss.</p>
                      <div className="border-t border-slate-700/50 pt-4 space-y-3">
                        <div className="flex items-start"><Sliders size={16} className="text-blue-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Signal Tuning:</strong> Instead of binary matches, signals can be adjusted and explored based on strength, relevance, and timing—allowing nuance to emerge where rigid criteria usually flatten it.</p></div>
                        <div className="flex items-start"><GitMerge size={16} className="text-purple-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Contextual Alignment:</strong> Signals are examined across multiple perspectives—profiles, roles, opportunities, and stated needs—making it easier to see where real alignment exists beneath surface descriptions.</p></div>
                        <div className="flex items-start"><BrainCircuit size={16} className="text-emerald-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Semantic Understanding:</strong> Rather than relying on keywords alone, the framework works with meaning—capturing how experience, intent, and capability show up in context, not just in text.</p></div>
                      </div>
                   </div>
                </div>

                {/* THE iDIG DIFFERENCE CARD */}
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
                   <div className="flex items-center space-x-2 mb-6">
                     <Scale size={16} className="text-amber-500" />
                     <h4 className="text-slate-300 font-medium">The iDIG Difference</h4>
                   </div>

                   <div className="space-y-4">
                     <div className="flex items-start">
                       <Eye size={16} className="text-blue-400 mt-1 mr-3 shrink-0" />
                       <p className="text-sm text-slate-500"><strong className="text-slate-400">Signal Visibility:</strong> Rather than collapsing inputs into a single score, signals remain visible and inspectable—allowing teams to understand alignment, tension, and absence before decisions are made.</p>
                     </div>
                     <div className="flex items-start">
                       <Compass size={16} className="text-emerald-400 mt-1 mr-3 shrink-0" />
                       <p className="text-sm text-slate-500"><strong className="text-slate-400">Signal Stewardship:</strong> Signals are defined and refined by the teams responsible for outcomes, evolving deliberately over time based on real observer experience—not opaque algorithmic retraining.</p>
                     </div>
                     <div className="flex items-start">
                       <Orbit size={16} className="text-purple-400 mt-1 mr-3 shrink-0" />
                       <p className="text-sm text-slate-500"><strong className="text-slate-400">Relational Geometry:</strong> Signals behave as vectors in a relational space, where meaning emerges from interaction, reinforcement, and interference—not isolated features weighted in isolation.</p>
                     </div>
                     <div className="flex items-start">
                       <Scale size={16} className="text-amber-400 mt-1 mr-3 shrink-0" />
                       <p className="text-sm text-slate-500"><strong className="text-slate-400">Deliberate Decision-Making:</strong> Unlike BI dashboards that surface metrics without modeling alignment, the framework exposes underlying signals so teams can reason through alignment before acting.</p>
                     </div>
                   </div>
                </div>


              </div>


            </div>

            {/* TECHNICAL ENVIRONMENT - FULL WIDTH */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 text-center">Technical Environment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center text-slate-200 mb-3"><Code2 size={16} className="mr-2 text-blue-500" /><strong>Core Stack</strong></div>
                  <ul className="text-slate-500 space-y-1 ml-6"><li>TypeScript / React / Vite</li><li>Node.js / Express</li><li>PostgreSQL / Vercel</li></ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center text-slate-200 mb-3"><Layers size={16} className="mr-2 text-emerald-500" /><strong>Data & AI</strong></div>
                  <ul className="text-slate-500 space-y-1 ml-6"><li>IndexedDB (Local State)</li><li>GenAI APIs (OpenAI/Anthropic)</li><li>React APIs</li></ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center text-slate-200 mb-3"><Terminal size={16} className="mr-2 text-purple-500" /><strong>Dev Ecosystem</strong></div>
                  <p className="text-slate-500 ml-6">VS Code + MCP Servers (Claude/Gemini), Trello, ChatGPT, NotebookLM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white py-12 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0"><span className="font-bold text-slate-900">i-DIG.io</span><p className="text-slate-500 text-sm mt-1">Signal-Driven Discovery & Matching</p></div>
            <div className="text-sm text-slate-500">&copy; 2026 i-DIG.io. All rights reserved.</div>
          </div>
        </footer>


      </main>
    </div>
  );
}
