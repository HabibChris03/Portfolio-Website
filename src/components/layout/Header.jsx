import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { SITE } from '../../data/site';
import logo from '../../assets/app-logo-light.png';



const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/skills', key: 'nav.skills' },
  { to: '/portfolio', key: 'nav.portfolio' },
  { to: '/experience', key: 'nav.experience' },
  { to: '/services', key: 'nav.services' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/certifications', key: 'nav.certs' },
  { to: '/media', key: 'nav.media' },
  { to: '/contact', key: 'nav.contact' },
];

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
         <img src={logo} alt={SITE.brand} height="40" width="40" />
          <span className="brand-mark__text">{SITE.brand}</span>
        </Link>

        <nav className="app-nav-desktop" aria-label="Primary">
          {navItems.slice(0, 6).map(({ to, key }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
              {t(key)}
            </NavLink>
          ))}
          <div className="nav-more">
            <button type="button" className="nav-link nav-more__trigger" aria-haspopup="true">
              More
            </button>
            <div className="nav-more__menu">
              {navItems.slice(6).map(({ to, key }) => (
                <NavLink key={to} to={to} className="nav-more__item">
                  {t(key)}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="app-header__actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            {['en', 'fr'].map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-toggle__btn ${lang === code ? 'is-active' : ''}`}
                onClick={() => setLang(code)}
              >
                {t(`lang.${code}`)}
              </button>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={SITE.cvPath} className="btn btn--ghost btn--sm hide-mobile" download>
            <Download size={16} />
            {t('nav.cv')}
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm hide-mobile">
            {t('nav.talk')}
          </Link>
          <button type="button" className="icon-btn show-mobile" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map(({ to, key }) => (
              <NavLink key={to} to={to} className="mobile-drawer__link" onClick={() => setOpen(false)}>
                {t(key)}
              </NavLink>
            ))}
            <a href={SITE.cvPath} className="btn btn--secondary" download onClick={() => setOpen(false)}>
              <Download size={16} />
              {t('nav.cv')}
            </a>
            <Link to="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
              {t('nav.talk')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
