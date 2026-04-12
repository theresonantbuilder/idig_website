import { Code2, Terminal, Layers, Lock, Sliders, GitMerge, BrainCircuit, Eye, Compass, Orbit, Scale } from 'lucide-react';


export default function HomeSignalDriven() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
              i-dig<span className="text-blue-600">.io</span>
            </div>

            {/* Tagline increased to text-lg */}
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-300 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>


          {/* Menu Links increased to text-base (16px) */}
          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-600">
            <button onClick={() => scrollToSection('lab')} className="hover:text-blue-600 transition">The Lab</button>
          </div>
        </div>
      </nav>


      <main className="pt-20 pb-20">

        {/* LAB SECTION */}
        <section id="lab" className="bg-slate-900 text-slate-300 pt-10 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-700 pb-8">
              <div><h3 className="text-blue-400 font-bold tracking-widest text-sm mb-2">MY LAB</h3><h2 className="text-3xl text-white font-light">The i-DIG Framework</h2></div>
            </div>


            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-lg font-medium mb-3">Background</h3>
                  <div className="text-lg leading-relaxed text-slate-400 space-y-4">
                    <p>iDIG did not begin as a product idea. It emerged from years of observing how capable teams struggle with misalignment between intent, tools, and decision-making.</p>
                    <p>After working inside operational systems across multiple industries, I began experimenting with structured models to better understand where workflow clarity breaks down — and how emerging AI tools might responsibly help surface what traditional systems miss.</p>
                    <p>Many iterations failed. Some revealed meaningful insight. Those lessons evolved into the iDIG framework — an ongoing applied research effort that informs how I analyze workflow, test assumptions, and explore thoughtful uses of AI within my consulting work.</p>
                  </div>
                </div>
                <div><h3 className="text-white text-lg font-medium mb-3">Philosophy</h3><p className="text-lg leading-relaxed text-slate-400"><strong>i-dig.io</strong> is built around a simple belief: most opportunity is lost not because of missing data, but because meaningful signals in communication are overlooked or flattened by traditional tools.

I use AI to help surface those signals—patterns of intent, timing, authority, and context that exist across conversations, content, and workflows, but rarely show up cleanly in systems or reports. <br></br>Rather than replacing human judgment, the framework is designed to support it, giving people a clearer view of what's already happening so better decisions can emerge naturally.</p></div>
                <div><h3 className="text-white text-lg font-medium mb-3">Methodology</h3><p className="text-base leading-relaxed text-slate-400">My work blends intuition with structure. I build iteratively, staying close to real signals as they emerge, while anchoring decisions in spec-driven development and clear validation loops. I use Trello to manage sprints and NotebookLM to maintain deep context. By bringing Claude Code and Gemini AI directly into VS Code via MCP servers, I treat the IDE as a collaborative partner, not just a text editor.</p></div>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Technical Environment</h3>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div><div className="flex items-center text-slate-200 mb-2"><Code2 size={16} className="mr-2 text-blue-500" /><strong>Core Stack</strong></div><ul className="text-slate-500 space-y-1 ml-6"><li>TypeScript / React / Vite</li><li>Node.js / Express</li><li>PostgreSQL / Vercel</li></ul></div>
                    <div><div className="flex items-center text-slate-200 mb-2"><Layers size={16} className="mr-2 text-emerald-500" /><strong>Data & AI</strong></div><ul className="text-slate-500 space-y-1 ml-6"><li>IndexedDB (Local State)</li><li>GenAI APIs (OpenAI/Anthropic)</li><li>React APIs</li></ul></div>
                    <div className="col-span-2"><div className="flex items-center text-slate-200 mb-2"><Terminal size={16} className="mr-2 text-purple-500" /><strong>Dev Ecosystem</strong></div><p className="text-slate-500 ml-6">VS Code + MCP Servers (Claude/Gemini), Trello, ChatGPT, NotebookLM</p></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">

                {/* SIGNAL DRIVEN FRAMEWORK CARD - WITH YOUTUBE VIDEO */}
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col items-start justify-between opacity-90">
                   <div className="flex w-full justify-between items-center mb-4"><div className="flex items-center space-x-2"><Lock size={16} className="text-slate-500" /><h4 className="text-slate-300 font-medium">Signal-Driven Framework</h4></div></div>

                   {/* YOUTUBE VIDEO */}
                   <div className="w-full aspect-video bg-slate-900 rounded-md mb-6 overflow-hidden">
                     <iframe
                       className="w-full h-full"
                       src="https://www.youtube.com/embed/vC8IAOuTczg"
                       title="Signal-Driven Framework Demo"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                     ></iframe>
                   </div>


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
