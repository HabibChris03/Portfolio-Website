import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

export function AppShell() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="app-shell__backdrop" aria-hidden />
      <Header />
      <main className="app-main">
        <div className="app-main__panel">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
