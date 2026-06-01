import { useState } from 'react';
import { useLocation } from 'wouter';

const NAV_ITEMS = [
  { label: 'About J. Paul',        path: '/about' },
  { label: 'The Resonant Builders', path: '/theresonantbuilders' },
  { label: 'iDIG Movies',          path: '/idigmovies' },
  { label: 'HiringSignals.ai',          path: '/hiringsignals' },
  { label: 'Mental Health Pathways',    path: '/mentalhealthpathways' },
];

export default function NavBar() {
  const [location, navigate] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center cursor-pointer select-none group"
        >
          <div className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800 group-hover:opacity-80 transition">
            i-DIG<span className="text-blue-600">.io</span>
          </div>
        </div>

        {/* Tagline — absolutely centered */}
        <span className="hidden md:block absolute left-1/2 -translate-x-1/2 text-lg text-slate-500 font-medium pointer-events-none select-none">
          Signal-Driven Discovery &amp; Matching
        </span>

        {/* Hamburger — always visible on the right */}
        <div className="relative">
          <button
            onClick={() => setOpen(o => !o)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Dropdown */}
          {open && (
            <>
              {/* Click-away overlay */}
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-20">
                {NAV_ITEMS.map(item => {
                  const active = location === item.path ||
                    (item.path !== '/' && location.startsWith(item.path));
                  return (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setOpen(false); }}
                      className={`w-full text-left px-5 py-3.5 text-sm font-medium transition
                        ${active
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}
