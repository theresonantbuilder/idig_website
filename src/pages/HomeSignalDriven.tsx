import { ArrowRight, Database, Briefcase, CheckCircle2, Linkedin, Code2, Terminal, Layers, Lock, Sliders, GitMerge, BrainCircuit, Eye, Compass, Orbit, Scale } from 'lucide-react';
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
              I help growing businesses identify operational bottlenecks and apply practical technology solutions to improve workflow.
              <br /><br />
              With experience implementing CRM systems, evaluating POS platforms, and customizing recruiting tools, I work at the intersection of operations and technology — making systems clearer, simpler, and more aligned with how teams actually work.
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
                  <p>For over 20 years, I've worked inside business systems—ranging from construction licensing and dealership operations to technical recruiting for large enterprises—often embedded close enough to see where work actually breaks down. Across industries, I've seen the same pattern repeat: signal loss. Businesses accumulate data, tools, and process, but struggle to translate any of it into clear action because those systems don't reflect how decisions are really made.
</p>
                  <p>Most consultants work within the limits of existing software and workflows. I built a purpose-built discovery tool to expose where those limits hide opportunity and to give businesses more control over how opportunity is defined. Instead of relying on fixed reports or one-size-fits-all models, the tool is designed to surface insights by working from a business's own signals and understanding of its domain.
</p>
                </div>
              </div>


              <div className="md:col-span-5">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white z-0"></div>
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full p-1 border border-slate-200 shadow-sm mb-4">
                       <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img src={profilePic} alt="Paul Duplantis" className="w-full h-full object-cover" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
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
            <p className="text-base text-slate-500 italic mt-4">The result isn't more automation. <span className="ml-2">It's providing a clearer signal to surface opportunities where conventional tools might not look.</span></p>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mb-12">

         {/* Panel 1: Embedded Discovery */}
<div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition cursor-pointer group relative overflow-hidden">

<div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
    PHASE 1: RESEARCH
  </div>
  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
    <Briefcase className="text-blue-600" size={24} />
  </div>


  <h3 className="text-2xl font-semibold mb-3">Embedded Discovery</h3>


<p className="text-slate-600 leading-normal mb-4">
    I don't advise from the sidelines. I embed into real work to understand how opportunity is actually pursued—not how it's documented.
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
        <strong>Decision Context:</strong> I focus on how decisions are actually made in practice, not how they're described.
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


{/* Card 2: Applied Discovery */}
<div className="bg-white p-8 rounded-xl border-2 border-slate-100 hover:border-emerald-500 transition cursor-pointer group relative overflow-hidden">


  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
    PHASE 2: APPLY
  </div>


  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
    <Database className="text-emerald-600" size={24} />
  </div>


  <h3 className="text-2xl font-semibold mb-3">Applied Discovery</h3>


  <p className="text-sm text-slate-600 leading-normal mb-4">
    Once meaningful signals are surfaced, iDIG becomes a way to explore how people, needs, and opportunities could align more clearly.
    Rather than enforcing a single workflow, the tool adapts to different domains—helping businesses see connections that are often there, but rarely visible at the same time.
  </p>


  <ul className="space-y-3 text-sm text-slate-500">


    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/>
      <span>
       <strong>Managers ↔ Jobs:</strong> Identifying decision authority and role intent so talent aligns to the real need—not just the posted role.

      </span>
    </li>


    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Prospects ↔ Services:</strong> Identifying which prospects are best aligned with specific offerings, based on real signals instead of generic outreach.
      </span>
    </li>


    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Customers ↔ Products:</strong> Surfacing customers who may be ready for an upgrade or adjacent product by noticing timing, behavior, and context.
      </span>
    </li>


    <li className="flex items-start">
      <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/>
      <span>
        <strong>Consultants ↔ Projects:</strong> Mapping expertise and availability against active or emerging needs, making it easier to see where fit already exists.
      </span>
    </li>

<li className="flex items-start">
  <CheckCircle2 size={16} className="mr-2 text-emerald-500 mt-0.5 shrink-0"/>
  <span>
    <strong>Signals ↔ Decisions:</strong> Making the signals that influence decisions visible, so choices are grounded in real context rather than habit, hierarchy, or incomplete data.
  </span>
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
            </div>


            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div><h3 className="text-white text-lg font-medium mb-3">Background</h3><p className="text-lg leading-relaxed text-slate-400">This work didn't begin as a product idea. It grew out of two decades spent inside real operating environments—where decisions are made under pressure and intent often gets lost between people, tools, and process. Across industries, I saw the same pattern repeat: capable teams, plenty of data, and persistent misalignment. Through writing, experimentation, and many failed attempts to model what was actually happening beneath the surface, I learned what doesn't capture signal. Those lessons ultimately shaped the architecture behind iDIG.</p></div>
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
                       src="https://www.youtube.com/embed/Zn-gpLoYfDQ"
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
