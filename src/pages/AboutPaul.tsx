import { useLocation } from 'wouter';

export default function AboutPaul() {
  const [, navigate] = useLocation();

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

      {/* Main content */}
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">About J. Paul</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Coming <span className="font-semibold text-blue-600">Soon</span>
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            More about J. Paul Duplantis — his background, thinking, and the journey behind i-DIG.io — coming shortly.
          </p>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition text-sm"
          >
            ← Back to i-DIG.io
          </button>
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
