import React from 'react';
import { ArrowRight, Activity, Search, ShieldCheck, Database, LayoutTemplate, Cpu, User, Briefcase, ChevronRight, CheckCircle2, Linkedin, FileText, Download, Code2, Terminal, Layers, Play, Lock, Zap, Sliders, GitMerge, BrainCircuit } from 'lucide-react';

export default function HomeSignalDriven() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">

      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-bold text-xl tracking-tight text-slate-800 hover:opacity-80 transition cursor-pointer select-none"
          >
            i-dig<span className="text-blue-600">.io</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About Paul</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-blue-600 transition">How I Work</button>
            <button onClick={() => scrollToSection('lab')} className="hover:text-blue-600 transition">The Lab</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        <div className="max-w-6xl mx-auto px-6 mb-20 pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Paul Duplantis | Senior Technical Recruiter & Builder</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 leading-tight">
              I am a Recruiter <br />
              <span className="font-semibold text-slate-900">who builds.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              Hiring has a noise problem. I can help teams —whether by running your search, auditing your workflow, or identifying/building the tools to reduce the noise in the signal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition shadow-lg shadow-slate-200/50"
              >
                Work With Me
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition"
              >
                My Background
              </button>
            </div>
          </div>
        </div>

        <section id="about" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 prose prose-lg prose-slate">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">The Practitioner</h3>
                <h2 className="text-3xl font-light text-slate-900 mb-6">Context comes first.</h2>
                <div className="space-y-6 text-lg text-slate-600">
                  <p>I’m not a career consultant. I’m a <strong>Technical Recruiter and Workflow Catalyst</strong> who has spent over 20 years inside real business systems.</p>
                  <p>From <strong>Technical Recruiting</strong> to <strong>Construction Licensing</strong>, <strong>PEO Services</strong>, and <strong>Dealership Operations</strong>, I’ve worked at the intersection of people, process, and systems.</p>
                  <p>I saw a pattern everywhere I went: <strong>Signal Loss.</strong></p>
                  <p>Teams drowning in data but starved for insight. That frustration drove me to become a builder—creating <em>i-dig.io</em> to solve the problems standard software ignored.</p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white"></div>
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full p-1 border border-slate-200 shadow-sm mb-4">
                       <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                          <User size={64} className="text-slate-300" />
                       </div>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mb-1">Paul Duplantis</h4>
                    <p className="text-blue-600 font-medium text-sm mb-6">Senior Technical Recruiter, Builder, and Workflow Catalyst</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 px-2">Based in Phoenix, AZ. Bridging the gap between human intuition and technical signal for over 20 years.</p>

                    <div className="space-y-3">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition font-medium text-sm group">
                        <Linkedin size={18} className="mr-2" /> Connect on LinkedIn <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition font-medium text-sm">
                        <FileText size={18} className="mr-2 text-slate-500" /> Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="work" className="pt-24 pb-10 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">How I Can Help</h2>
            <p className="text-lg text-slate-600">I engage with teams in two ways: as an embedded recruiter, and/or as a strategic workflow partner.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition cursor-pointer group relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CONTRACT</div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6"><Briefcase className="text-blue-600" size={24} /></div>
              <h3 className="text-2xl font-semibold mb-3">Senior Technical Recruiter</h3>
              <p className="text-slate-600 leading-relaxed mb-6">I work upstream of traditional recruiting—partnering with leaders to clarify role intent and reduce noise before engagement. I combine full-cycle expertise with AI-assisted workflows to accelerate insight generation.</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/> <span><strong>Talent Alignment:</strong> Clarifying "Role Intent" upstream to reduce sourcing noise.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/> <span><strong>BIM & Construction Tech:</strong> Specialized in building teams for Tesla, Brycon Construction, and Delta Diversified.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/> <span><strong>Strategic Placements:</strong> Successfully placed talent with Intel, TriWest, Wells Fargo, Ford Motors, and Circle K.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/> <span><strong>AI-Assisted Workflows:</strong> Using modern tools to streamline discovery (Human-in-the-Loop).</span></li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-emerald-500 transition cursor-pointer group">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6"><Database className="text-emerald-600" size={24} /></div>
              <h3 className="text-2xl font-semibold mb-3">Workflow Catalyst</h3>
              <p className="text-slate-600 leading-relaxed mb-6">For teams looking to optimize their discovery process. I review your current implementation to determine where the bottleneck lies, then help you select the appropriate AI/Tech to address the specific concern.</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> <span><strong>Bottleneck Analysis:</strong> Mapping your intake and sourcing process to identify where signal is lost to noise.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> <span><strong>AI/Tech Selection:</strong> Cutting through the marketing hype to select tools that solve specific workflow problems.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> <span><strong>Discovery Gap Analysis:</strong> Tuning search queries and prompts to uncover the talent you are currently missing.</span></li>
                <li className="flex items-start"><CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> <span><strong>Implementation & Calibration:</strong> Helping teams adopt new tools and calibrating filters to match reality.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="lab" className="bg-slate-900 text-slate-300 pt-10 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-700 pb-8">
              <div><h3 className="text-blue-400 font-bold tracking-widest text-sm mb-2">MY LAB</h3><h2 className="text-3xl text-white font-light">The i-DIG Framework</h2></div>
              <div className="mt-4 md:mt-0"><span className="inline-flex items-center px-3 py-1 rounded bg-blue-900/50 border border-blue-700 text-blue-200 text-xs font-mono">CURRENT STATUS: R&D</span></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div><h3 className="text-white text-lg font-medium mb-3">Background</h3><p className="text-lg leading-relaxed text-slate-400">This isn't a startup pivot. It is the culmination of 20 years of observation. I have a library of written essays and a graveyard of "failed" prototypes that paved the way for iDIG. Every broken build taught me what <em>doesn't</em> work in signal detection, leading to the architecture I use today.</p></div>
                <div><h3 className="text-white text-lg font-medium mb-3">Philosophy</h3><p className="text-lg leading-relaxed text-slate-400"><strong>i-dig.io</strong> is my personal "skunkworks" project. It is a Progressive Web App (PWA) built to test how LLMs can structure unstructured candidate data. This research keeps me honest—ensuring I understand the difference between marketing hype and actual signal.</p></div>
                <div><h3 className="text-white text-lg font-medium mb-3">Methodology</h3><p className="text-base leading-relaxed text-slate-400">I am a <strong>"vibe coder"</strong> who leans heavily on spec-driven development. I use Trello to manage sprints and NotebookLM to maintain deep context. By bringing <strong>Claude Code</strong> and <strong>Gemini AI</strong> directly into VS Code via MCP servers, I treat the IDE as a collaborative partner, not just a text editor.</p></div>
                
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
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden group hover:border-blue-500/50 transition duration-300">
                  <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center"><div className="flex items-center space-x-2"><Zap size={16} className="text-amber-400" /><span className="text-slate-200 font-medium text-sm">Research Tool Demo</span></div><span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">Chrome Extension</span></div>
                  <div className="aspect-video bg-slate-900 relative flex items-center justify-center cursor-pointer">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                     <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition duration-300 z-10"><Play fill="white" className="text-white ml-1" size={24} /></div>
                     <p className="absolute bottom-4 text-slate-400 text-xs">Click to watch demo (1:15)</p>
                  </div>
                  <div className="p-4 bg-slate-800/80"><p className="text-slate-400 text-sm"><strong>Proof of Build:</strong> A custom Chrome Extension demonstrating multi-color DOM highlighting and "microlinking"—enabling precise context sharing across unstructured web data.</p></div>
                </div>

                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col items-start justify-between opacity-90 h-full">
                   <div className="flex w-full justify-between items-center mb-4"><div className="flex items-center space-x-2"><Lock size={16} className="text-slate-500" /><h4 className="text-slate-300 font-medium">Signal-Driven Framework</h4></div><div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-blue-400 font-mono">COMING SOON</div></div>
                   
                   {/* IMAGE PLACEHOLDER - Ensure image_0.png is in /public folder */}
                   <div className="w-full border border-slate-700 rounded-md mb-6 overflow-hidden">
                     <img src="image_0.png" alt="iDIG Signal-Driven Discovery Interface" className="w-full object-cover opacity-80"/>
                   </div>

                   <div className="space-y-4 w-full">
                      <p className="text-slate-400 text-sm leading-relaxed">The core discovery engine designed to align unstructured profile data with complex job requirements.</p>
                      <div className="border-t border-slate-700/50 pt-4 space-y-3">
                        <div className="flex items-start"><Sliders size={16} className="text-blue-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Dynamic Tuning:</strong> Adjustable signal thresholds allow for "fuzzy" matching based on signal strength rather than binary keywords.</p></div>
                        <div className="flex items-start"><GitMerge size={16} className="text-purple-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Multi-Source Alignment:</strong> Triangulating data between [My Profile], [Candidates], and [Job Requirements] to find hidden overlaps.</p></div>
                         <div className="flex items-start"><BrainCircuit size={16} className="text-emerald-500 mt-1 mr-3 shrink-0" /><p className="text-sm text-slate-500"><strong>Vector-Based Logic:</strong> Moving beyond text matching to semantic understanding of skills and experience context.</p></div>
                      </div>
                   </div>
                   <div className="mt-6 pt-4 border-t border-slate-700/50 w-full"><p className="text-slate-500 text-xs italic">* I am in the final phases of wrapping up the initial live demo of the Signal-Driven Framework.</p></div>
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