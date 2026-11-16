import { EXPLORING_ORIGIN } from '../lib/site';

// Header and menu copied from iDIG Exploring (idig_exploring/dev_server/build_pages.py + build_home.py) so the blog looks the same.
// Exploring's pages are plain links (real page loads); only The Resonant Builders is this site.
const MENU = [
  { label: 'About',                 href: `${EXPLORING_ORIGIN}/about/` },
  { label: 'Settings & usage',      href: `${EXPLORING_ORIGIN}/settings/` },
  { label: 'Export',                href: `${EXPLORING_ORIGIN}/explorations/?export=1` },
  { label: 'Import',                href: `${EXPLORING_ORIGIN}/explorations/?import=1` },
  { label: 'The Resonant Builders', href: '/theresonantbuilders' },
  { label: 'License the Engine',    href: `${EXPLORING_ORIGIN}/license/` },
];

const CSS = `
.site-nav{border-bottom:1px solid #e2e8f0;background:#fff;font:18px/1.6 ui-sans-serif,system-ui,sans-serif;color:#16202e}
.site-nav *{box-sizing:border-box}
.site-nav-inner{max-width:1224px;margin:0 auto;height:80px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;position:relative}
.site-nav .logo{font-weight:700;font-size:1.5rem;letter-spacing:-.025em;color:#1e293b;text-decoration:none;white-space:nowrap}
.site-nav .logo span{color:#2563eb}
@media(min-width:900px){.site-nav .logo{font-size:1.875rem}}
@media(max-width:520px){.site-nav .logo{font-size:1.3rem}}
.site-nav .hdr-tagline{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;white-space:nowrap;text-align:center;font-size:1rem;font-weight:600;letter-spacing:.01em;color:#5b6676}
@media(max-width:700px){.site-nav .hdr-tagline{display:none}}
.site-nav details.menu{position:relative}
.site-nav details.menu summary{list-style:none;cursor:pointer;width:40px;height:40px;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;border-radius:8px}
.site-nav details.menu summary::-webkit-details-marker{display:none}
.site-nav details.menu summary:hover{background:#f1f5f9}
.site-nav details.menu summary span{display:block;width:20px;height:2px;background:#334155}
.site-nav details.menu nav{position:absolute;right:0;top:100%;margin-top:8px;width:224px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 20px 25px -5px rgba(0,0,0,.1);z-index:50}
.site-nav details.menu nav a{display:block;padding:14px 20px;font-size:14px;font-weight:500;color:#334155;text-decoration:none}
.site-nav details.menu nav a:hover{background:#f8fafc}
`;

export default function NavBar() {
  return (
    <header className="site-nav">
      <style>{CSS}</style>
      <div className="site-nav-inner">
        <div className="nav-left">
          <a className="logo" href={`${EXPLORING_ORIGIN}/`}>i-DIG<span>.io</span></a>
        </div>
        <p className="hdr-tagline">Optimized for Intention, not Attention</p>
        <details className="menu">
          <summary aria-label="Menu"><span /><span /><span /></summary>
          <nav>
            {MENU.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
