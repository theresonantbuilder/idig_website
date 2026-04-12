import { useLocation } from 'wouter';

export default function TheResonantBuilders() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-blue-900">

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer select-none group"
          >
            <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-200 group-hover:opacity-80 transition">
              i-DIG<span className="text-blue-400">.io</span>
            </div>
            <span className="hidden md:block ml-6 pl-6 border-l-2 border-slate-700 text-lg text-slate-500 font-medium">
              Signal-Driven Discovery & Matching
            </span>
          </div>

          <div className="hidden md:flex space-x-8 text-base font-medium text-slate-400">
            <button onClick={() => navigate('/')} className="hover:text-blue-400 transition">About Paul</button>
            <button className="text-amber-400 cursor-default">The Resonant Builders</button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <div className="inline-flex items-center space-x-2 bg-amber-900/30 border border-amber-700/40 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">The Resonant Builders</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Blog & Podcast<br />
            <span className="text-amber-400 font-semibold">Coming Soon</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            A space to explore how quantum-informed signal models can reshape the way we communicate — commercially, socially, and culturally. Essays, conversations, and ideas for those who want to build a more resonant future.
          </p>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-slate-300 border border-slate-700 font-medium rounded-lg hover:bg-slate-700 transition text-sm"
          >
            ← Back to i-DIG.io
          </button>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-400">i-DIG.io</span>
            <p className="text-slate-600 text-sm mt-1">Signal-Driven Discovery & Matching</p>
          </div>
          <div className="text-sm text-slate-600">&copy; 2026 i-DIG.io. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
