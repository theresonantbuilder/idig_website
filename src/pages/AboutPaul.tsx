import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Linkedin } from 'lucide-react';

export default function AboutPaul() {
  const [, navigate] = useLocation();
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

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer select-none group"
          >
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800 group-hover:opacity-80 transition">
              i-DIG<span className="text-blue-600">.io</span>
            </div>
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-300 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-600">
            <button className="text-blue-600 cursor-default">About J. Paul</button>
            <button onClick={() => navigate('/theresonantbuilders')} className="hover:text-blue-600 transition">The Resonant Builders</button>
          </div>
        </div>
      </nav>

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
            <p className="text-lg text-slate-500">Builder. Thinker. Signal chaser.</p>
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
              <Linkedin size={18} className="mr-2" />
              Connect on LinkedIn
            </a>
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

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-900">i-DIG.io</span>
            <p className="text-slate-500 text-sm mt-1">Signal-Driven Discovery & Matching</p>
          </div>
          <div className="text-sm text-slate-500">&copy; 2026 i-DIG.io. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
