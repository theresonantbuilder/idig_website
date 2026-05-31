import { useState } from 'react';

interface Props {
  subject: string;
}

export default function ContactForm({ subject }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/paul@i-dig.io', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: `${subject} — ${form.name}`, _captcha: 'false', ...form }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="max-w-lg mx-auto rounded-2xl p-8 text-center"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(129,140,248,0.3)' }}>
        <p className="text-2xl mb-3">✦</p>
        <p className="text-white font-medium text-lg mb-1">Message received.</p>
        <p className="text-slate-400 text-sm">J. Paul will be in touch shortly.</p>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-lg text-sm text-slate-200 placeholder-slate-500 bg-slate-800 border border-slate-600 focus:outline-none focus:border-indigo-500 transition";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Name</label>
          <input
            type="text" required placeholder="Your name"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email</label>
          <input
            type="email" required placeholder="you@example.com"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
        <textarea
          required rows={4} placeholder="Share your thoughts, questions, or what you're working on…"
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`}
        />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-xs">Something went wrong — try again or email paul@i-dig.io directly.</p>
      )}
      <button
        type="submit" disabled={status === 'sending'}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-lg transition text-sm tracking-wide"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
