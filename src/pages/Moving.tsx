import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Shown at / (and for any address this site no longer has) while i-dig.io moves to its new home.
export default function Moving() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: '#16202e', font: '18px/1.6 ui-sans-serif,system-ui,sans-serif' }}>
      <NavBar />
      <main className="flex-1 flex items-center justify-center px-6 text-center">
        <div style={{ maxWidth: 560, padding: '64px 0' }}>
          <h1 style={{ fontSize: '2.1rem', lineHeight: 1.2, fontWeight: 700, margin: '0 0 14px' }}>
            i-DIG.io is moving to a new home
          </h1>
          <p style={{ margin: '0 0 22px', color: '#5b6676', fontSize: '1.05rem' }}>
            Thank you for your patience.
          </p>
          <a
            href="/theresonantbuilders"
            style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'none' }}
          >
            Read The Resonant Builders &rarr;
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
