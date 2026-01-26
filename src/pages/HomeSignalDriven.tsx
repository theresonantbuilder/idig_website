import { ArrowRight, Database, Briefcase, CheckCircle2, Linkedin, Code2, Terminal, Layers, Lock, Zap, Sliders, GitMerge, BrainCircuit } from 'lucide-react';
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
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About Paul</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-blue-600 transition">My Process</button>
            <button onClick={() => scrollToSection('lab')} className="hover:text-blue-600 transition">The Lab</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 mb-20 pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">Paul Duplantis | Consultant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Cut the noise <br />
              <span className="font-semibold text-slate-900">Amplify the signal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
             Businesses can operate in functional silos that make it hard to see where work, decisions, and opportunities are getting stuck.<br></br>

I work alongside them to understand real bottlenecks, then use a purpose-built discovery tool I created to surface patterns, relationships, and opportunities that are easy to miss in day-to-day work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition shadow-lg shadow-slate-200/50"
              >
                See My Process
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

        {/* BIO / DEFINITION SECTION */}
        <section id="about" className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 prose prose-lg prose-slate">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">The Definition</h3>
                <h2 className="text-3xl font-light text-slate-900 mb-6">What does a consultant like this actually do?
</h2>
                <div className="space-y-6 text-lg text-slate-600">
                  <p>It sits at the intersection of real-world operations and discovery-driven tooling.</p>
                  <p>For over 20 years, I’ve worked inside business systems—ranging from construction licensing and dealership operations to technical recruiting for large enterprises—often embedded close enough to see where work actually breaks down. Across industries, I’ve seen the same pattern repeat: signal loss. Businesses accumulate data, tools, and process, but struggle to translate any of it into clear action because those systems don’t reflect how decisions are really made.
</p>
                  <p>Most consultants work within the limits of existing software and workflows. I built a purpose-built discovery tool to expose where those limits hide opportunity and to give businesses more control over how opportunity is defined. Instead of relying on fixed reports or one-size-fits-all models, the tool is designed to surface insights by working from a business’s own signals and understanding of its domain.
</p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white"></div>
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full p-1 border border-slate-200 shadow-sm mb-4">
                       <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img src={profilePic} alt="Paul Duplantis" className="w-full h-full object-cover" />
                       </div>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mb-1">Paul Duplantis</h4>
                    <p className="text-blue-600 font-medium text-sm mb-6">Consultant</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 px-2">Based in Phoenix, AZ. Helping businesses surface the signals that drive opportunity.</p>

                    <div className="space-y-3">
                      <a href="https://www.linkedin.com/in/paulduplantis/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition font-medium text-sm group">
                        <Linkedin size={18} className="mr-2" /> Connect on LinkedIn <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="pt-24 pb-10 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">How I Deliver Value</h2>
            <p className="text-lg text-slate-600">My process is circular: I step into the work to uncover where opportunity breaks down, then apply the right technology to remove friction and recover signal.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
         {/* Panel 1: Embedded Discovery */}
<div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition cursor-pointer group relative overflow-hidden">

  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
    <Briefcase className="text-blue-600" size={24} />
  </div>

  <h3 className="text-2xl font-semibold mb-3">Embedded Discovery</h3>

<p className="text-slate-600 leading-normal mb-4">
    I don’t advise from the sidelines. I embed into real work to understand how opportunity is actually pursued—not how it’s documented.
    By working directly inside live processes, I stay close to the work as it unfolds, noticing where things lose clarity or momentum.
    iDIG is the discovery tool I use to help surface those patterns and reflect them back in a way the business can engage with and act on.
  </p>

  <ul className="space-y-3 text-sm text-slate-500">
    
    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Signal Surfacing:</strong> I stay close to real work to notice where meaningful signals appear—and where they quietly disappear.
        iDIG helps capture those moments so hidden patterns can be explored together.
      </span>
    </li>

    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Decision Context:</strong> I focus on how decisions are actually made in practice, not how they’re described.
        iDIG reflects those contexts back so assumptions and noise are easier to see.
      </span>
    </li>

    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Working the Edges:</strong> I pay attention to where work feels awkward or uncertain—the edges where things tend to break down.
        iDIG helps hold onto those moments so nothing important slips by.
      </span>
    </li>

    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Signal Reality Check:</strong> When outcomes stall, I help separate market conditions from internal methods.
        Looking at surfaced signals together makes it easier to adjust with intent instead of guesswork.
      </span>
    </li>

  </ul>
</div>


            {/* Card 2: The Build */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-emerald-500 transition cursor-pointer group">
               <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PHASE 2: BUILD</div>
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6"><Database className="text-emerald-600" size={24} /></div>
              <h3 className="text-2xl font-semibold mb-3">Technical Implementation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Once the gaps are identified, I identify solutions to bridge the gap between Recruiting and Engineering to select, configure, and build the tools necessary to automate discovery and recover signal.</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> 
                  <span><strong>Technology Selection:</strong> Identifying exactly where your standard tools are failing and selecting the specific, high-leverage software solutions to fill those gaps.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> 
                  <span><strong>Workflow Architecture:</strong> Designing the data flow between your systems to ensure candidate context is preserved, moving beyond simple keyword matching.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> 
                  <span><strong>Stack Rationalization:</strong> Cutting through the marketing hype to eliminate redundant tools and select the *right* tech for your specific workflow.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/> 
                  <span><strong>Signal Calibration:</strong> Tuning your discovery parameters to block noise upstream, ensuring your team only reviews high-probability profiles.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* LAB SECTION */}
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
                
                {/* YOUTUBE VIDEO CARD */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden group hover:border-blue-500/50 transition duration-300">
                  <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Zap size={16} className="text-amber-400" />
                      <span className="text-slate-200 font-medium text-sm">Research Tool Demo</span>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">Chrome Extension</span>
                  </div>

                  <div className="aspect-video bg-slate-900 relative overflow-hidden group">
                     <iframe 
                       className="w-full h-full absolute inset-0"
                       src="https://www.youtube.com/embed/BBAg-98_UBU" 
                       title="Research Tool Demo"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                     ></iframe>
                  </div>

                  <div className="p-4 bg-slate-800/80">
                    <p className="text-slate-400 text-sm">
                      <strong>Proof of Build:</strong> A custom Chrome Extension demonstrating multi-color DOM highlighting and "microlinking"—enabling precise context sharing across unstructured web data.
                    </p>
                  </div>
                </div>

                {/* SIGNAL DRIVEN FRAMEWORK CARD - WITH NEW IMAGE */}
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col items-start justify-between opacity-90 h-full">
                   <div className="flex w-full justify-between items-center mb-4"><div className="flex items-center space-x-2"><Lock size={16} className="text-slate-500" /><h4 className="text-slate-300 font-medium">Signal-Driven Framework</h4></div><div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-blue-400 font-mono">COMING SOON</div></div>
                   
                   {/* UPDATED IMAGE TAG */}
                   <div className="w-full border border-slate-700 rounded-md mb-6 overflow-hidden">
                     <img src={idigPreview} alt="iDIG Signal-Driven Discovery Interface" className="w-full object-cover opacity-80"/>
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