import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutPaul() {
  useLocation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/paul@i-dig.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Message from ${form.name} via i-DIG.io`,
          _captcha: 'false',
          ...form,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an issue sending your message. Please try again.');
      }
    } catch {
      alert('There was an issue sending your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">

      <NavBar />

      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">About J. Paul</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 leading-tight">
              J. Paul <span className="font-semibold">Duplantis</span>
            </h1>
            <p className="text-lg text-slate-500">Builder. Signal chaser.</p>
          </div>

          {/* Story */}
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-14">
            <p>
              Nearly 20 years ago, I had a conviction I couldn't shake: that the tools people used to communicate were fundamentally misaligned with how meaning actually works. I believed there was a way to build technology that helped people <em>resonate</em> with information — not just retrieve it. I tried to build it. I failed. Not because the idea was wrong, but because I didn't yet have the language or the framework to pull it off.
            </p>
            <p>
              So I did what you do when you can't build the thing — I started writing about it. I published essays exploring the gap between communication and comprehension. I launched a podcast, interviewing thinkers and practitioners working at the edges of how we exchange ideas. And eventually I put the core of my thinking into a book: <strong className="text-slate-800">The Emergence: We Have a Communication Problem</strong> — an argument that the way we transmit information has outpaced our ability to make it meaningful.
            </p>
            <p>
              Two years ago, something shifted. The rise of large language models gave me a new kind of collaborator — one that could help me prototype, reason, and iterate at a pace that wasn't possible before. I decided to go back into the build. Just me and the models, working through the ideas I'd been carrying for two decades.
            </p>
            <p>
              That's when I stumbled onto <strong className="text-slate-800">Quantum Social Science</strong> — a field applying quantum mechanical principles to the structure of human meaning-making. And through it, <strong className="text-slate-800">Hilbert Space vectors</strong>: a mathematical framework for representing meaning not as a fixed point, but as a direction — shaped by context, interference, and resonance. It was the language I'd been missing.
            </p>
            <p>
              What I'm building now — <strong className="text-slate-800">i-DIG.io</strong> — is the applied expression of those ideas. A framework that treats communication signals as vectors in a shared semantic field, where alignment isn't computed by keyword matching but surfaced through geometry and resonance.
            </p>
            <p>
              I'm ready to move out of the lab. The next phase is launching iDIG as a <strong className="text-slate-800">protocol</strong> — a shared foundation others can build on — and using <strong className="text-slate-800">The Resonant Builders</strong> as the community space where those conversations begin. If you've been thinking about any of this, I'd like to hear from you.
            </p>
          </div>

          {/* LinkedIn */}
          <div className="mb-14">
            <a
              href="https://www.linkedin.com/in/paulduplantis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-lg hover:bg-[#004182] transition text-sm"
            >
              <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 mb-14"></div>

          {/* The iDIG Protocol */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-slate-900 mb-2">The iDIG Protocol</h2>
            <p className="text-slate-500 mb-8">A discovery engine designed to surface meaningful signals across people, needs, and decisions — especially where intent, authority, and context are easy to miss.</p>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Signal Visibility',        desc: 'Whether you\'re a person looking for work, a community surfacing unmet needs, or a builder finding collaborators — the signals driving a match stay open and readable. No black box. No score you can\'t interrogate.' },
                { label: 'Signal Stewardship',       desc: 'The people closest to an outcome — not the platform — define what signals matter. A hiring community, a neighborhood network, an individual: each shapes their own signal field and refines it through lived experience.' },
                { label: 'Relational Geometry',      desc: 'Resonance between a person and an opportunity, a community and a cause, or a reader and a story is modeled as geometry in a shared semantic field — not a ranked list optimized for clicks.' },
                { label: 'Deliberate Alignment',     desc: 'The protocol isn\'t designed to maximize engagement — it\'s designed to surface genuine alignment. Commercially, personally, and in communities, the goal is connection that actually fits, not attention captured at any cost.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="mt-0.5 text-indigo-500 text-lg shrink-0">◈</span>
                  <div>
                    <p className="font-semibold text-sm text-slate-800 mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Environment */}
          <div className="mb-14">
            <h2 className="text-2xl font-light text-slate-900 mb-6">Technical Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">Core Stack</p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li>TypeScript / React</li>
                  <li>Vite / Node.js</li>
                  <li>PostgreSQL / Vercel</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">Data &amp; AI</p>
                <ul className="text-sm text-slate-500 space-y-1.5">
                  <li>IndexedDB</li>
                  <li>OpenAI / Anthropic</li>
                  <li>Vector embeddings</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">Dev Ecosystem</p>
                <p className="text-sm text-slate-500 leading-relaxed">VS Code + MCP Servers, Trello, ChatGPT, NotebookLM</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 mb-14"></div>

          {/* Contact Form */}
          <div id="contact" className="mb-12">
            <h2 className="text-2xl font-light text-slate-900 mb-2">Get in touch</h2>
            <p className="text-slate-500 mb-8">Have a question, an idea, or just want to connect? Send me a note.</p>

            {submitted ? (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
                <p className="text-blue-700 font-medium text-lg mb-1">Message sent — thank you.</p>
                <p className="text-blue-500 text-sm">I'll be in touch shortly. You can also reach me at <a href="mailto:paul@i-dig.io" className="underline">paul@i-dig.io</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer variant="light" />

    </div>
  );
}
