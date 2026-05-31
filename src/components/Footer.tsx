const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/idig-protocol/?viewAsMember=true',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Substack',
    href: 'https://theresonantbuilders.substack.com/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@i-DIG-framework',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

interface Props {
  variant?: 'light' | 'dark';
}

export default function Footer({ variant = 'dark' }: Props) {
  const dark = variant === 'dark';

  return (
    <footer
      className={`border-t py-7 px-6 ${dark ? 'bg-[#0A1628] border-white/[0.06]' : 'bg-white border-slate-200'}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Left — branding */}
        <div className="text-center md:text-left">
          <a href="/" className={`font-bold text-sm ${dark ? 'text-slate-400 hover:text-[#818CF8]' : 'text-slate-900 hover:text-blue-600'} transition`}>
            i-DIG.io
          </a>
          <p className={`text-xs mt-0.5 ${dark ? 'text-slate-600' : 'text-slate-500'}`}>
            Signal-Driven Discovery &amp; Matching
          </p>
        </div>

        {/* Center — Follow the Build */}
        <div className="flex flex-col items-center gap-2">
          <span className={`text-[0.6rem] font-extrabold tracking-[0.22em] uppercase ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            Follow the Build
          </span>
          <div className="flex items-center gap-5">
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`transition ${dark ? 'text-slate-500 hover:text-[#818CF8]' : 'text-slate-400 hover:text-slate-700'}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — copyright */}
        <p className={`text-xs ${dark ? 'text-slate-600' : 'text-slate-500'}`}>
          &copy; 2026 i-DIG.io. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
