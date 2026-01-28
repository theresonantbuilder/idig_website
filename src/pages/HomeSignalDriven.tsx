import {
  ArrowRight,
  Linkedin,
  Code2,
  Terminal,
  Layers,
  Lock,
  Sliders,
  GitMerge,
  BrainCircuit
} from 'lucide-react';

import idigPreview from '../assets/idig_attractor_preview.png';
import profilePic from '../assets/paul_idig_profile.jpg';

export default function HomeSignalDriven() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">

      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer select-none group"
          >
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800 group-hover:opacity-80 transition">
              i-dig<span className="text-blue-600">.io</span>
            </div>

            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-300 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About Paul</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-blue-600 transition">My Process</button>
            <button onClick={() => scrollToSection('lab')} className="hover:text-blue-600 transition">The Lab</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">

        {/* HERO */}
        <div className="max-w-6xl mx-auto px-6 mb-20 pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
              <span className="text-xs font-semibold text-blue-600 uppercase">Paul Duplantis | Consultant</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Cut the noise <br />
              <span className="font-semibold">Amplify the signal</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              Businesses often operate in silos that obscure where work, decisions, and opportunity stall.
              <br /><br />
              I embed alongside teams to surface real bottlenecks, then use a purpose-built discovery tool to reveal patterns and alignment that are easy to miss in day-to-day work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
              >
                See My Process
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
              >
                My Background
              </button>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-7 prose prose-lg prose-slate">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">The Definition</h3>
              <h2 className="text-3xl font-light mb-6">What does a consultant like this actually do?</h2>

              <p>
                For over 20 years, I’ve worked inside operating environments where decisions are made under pressure and signal is easily lost between people, tools, and process.
              </p>

              <p>
                Across industries, the pattern repeats: capable teams, abundant data, and persistent misalignment.
                iDIG emerged from years of experimentation and failed attempts to model what was really happening beneath the surface.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white p-8 rounded-2xl border shadow-xl text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src={profilePic} alt="Paul Duplantis" className="w-full h-full object-cover" />
                </div>

                <h4 className="text-2xl font-bold">Paul Duplantis</h4>
                <p className="text-blue-600 text-sm mb-4">Consultant</p>
                <p className="text-sm text-slate-600 mb-6">
                  Based in Phoenix, AZ — helping teams surface the signals that drive opportunity.
                </p>

                <a
                  href="https://www.linkedin.com/in/paulduplantis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#0A66C2] text-white px-4 py-3 rounded-lg hover:bg-[#004182] transition"
                >
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LAB */}
        <section id="lab" className="bg-slate-900 text-slate-300 pt-10 pb-24">
          <div className="max-w-6xl mx-auto px-6">

            <div className="flex justify-between items-end border-b border-slate-700 pb-8 mb-12">
              <div>
                <h3 className="text-blue-400 text-sm font-bold tracking-widest">MY LAB</h3>
                <h2 className="text-3xl text-white font-light">The i-DIG Framework</h2>
              </div>
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-blue-400 font-mono">
                LIVE DEMO
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

              {/* LEFT COLUMN */}
              <div className="space-y-8">
                <p className="text-lg text-slate-400">
                  i-dig.io is built on the belief that opportunity is lost not due to missing data,
                  but because meaningful signals in communication are flattened by traditional tools.
                </p>

                <p className="text-lg text-slate-400">
                  AI is used here to surface intent, authority, timing, and context —
                  supporting human judgment rather than replacing it.
                </p>

                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-blue-400 text-xs font-bold uppercase mb-4">Technical Environment</h3>

                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="flex items-center mb-2">
                        <Code2 size={16} className="mr-2 text-blue-500" />
                        <strong>Core Stack</strong>
                      </div>
                      <ul className="ml-6 space-y-1 text-slate-500">
                        <li>TypeScript / React / Vite</li>
                        <li>Node.js</li>
                        <li>PostgreSQL / Vercel</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Layers size={16} className="mr-2 text-emerald-500" />
                        <strong>Data & AI</strong>
                      </div>
                      <ul className="ml-6 space-y-1 text-slate-500">
                        <li>IndexedDB</li>
                        <li>GenAI APIs</li>
                        <li>React APIs</li>
                      </ul>
                    </div>

                    <div className="col-span-2">
                      <div className="flex items-center mb-2">
                        <Terminal size={16} className="mr-2 text-purple-500" />
                        <strong>Dev Ecosystem</strong>
                      </div>
                      <p className="ml-6 text-slate-500">
                        VS Code + MCP (Claude / Gemini), Trello, NotebookLM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN — SIGNAL FRAMEWORK CARD */}
              <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Lock size={16} className="text-slate-500" />
                    <h4 className="text-slate-300 font-medium">Signal-Driven Framework</h4>
                  </div>
                </div>

                {/* VIDEO EMBED */}
                <div className="aspect-video bg-slate-900 rounded-md border border-slate-700 overflow-hidden mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Zn-gpLoYfDQ"
                    title="Signal-Driven Framework Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* IMAGE */}
                <div className="border border-slate-700 rounded-md overflow-hidden mb-6">
                  <img src={idigPreview} alt="iDIG Interface" className="w-full opacity-80" />
                </div>

                <div className="space-y-3 text-sm text-slate-500">
                  <div className="flex">
                    <Sliders size={16} className="mr-3 text-blue-500" />
                    <p><strong>Dynamic Tuning:</strong> Adjustable thresholds enable fuzzy matching by signal strength.</p>
                  </div>
                  <div className="flex">
                    <GitMerge size={16} className="mr-3 text-purple-500" />
                    <p><strong>Multi-Source Alignment:</strong> Triangulates profiles, candidates, and needs.</p>
                  </div>
                  <div className="flex">
                    <BrainCircuit size={16} className="mr-3 text-emerald-500" />
                    <p><strong>Vector-Based Logic:</strong> Semantic understanding beyond keywords.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white py-12 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <div>
              <span className="font-bold">i-DIG.io</span>
              <p className="text-sm text-slate-500">Signal-Driven Discovery & Matching</p>
            </div>
            <div className="text-sm text-slate-500">&copy; 2026 i-DIG.io</div>
          </div>
        </footer>

      </main>
    </div>
  );
}
