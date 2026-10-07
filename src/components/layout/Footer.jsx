import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import { SITE } from '../../data/site';
import { Github, Linkedin, TwitterX } from '../icons/BrandIcons';
import logo from '../../assets/app-logo-light.png';

const footerLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/portfolio', key: 'nav.portfolio' },
  { to: '/services', key: 'nav.services' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/contact', key: 'nav.contact' },
];

export function Footer() {
  const { t } = useLanguage();
  const { copied, copy } = useCopyEmail();
  const [email, setEmail] = useState('');
  const [newsletterState, setNewsletterState] = useState('idle');

  const onNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterState('loading');
    try {
      const res = await fetch(`${SITE.apiBase}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setNewsletterState('done');
        setEmail('');
      } else {
        setNewsletterState('done');
        setEmail('');
      }
    } catch {
      setNewsletterState('done');
      setEmail('');
    }
  };

  return (
    <footer className="app-footer">
      <div className="app-footer__grid">
        <div>
          <div className="brand-mark brand-mark--footer">
            <img src={logo} alt={SITE.brand} height="40" width="40" />
            <span className="brand-mark__text">{SITE.brand}</span>
          </div>
          <p className="app-footer__tagline">{t('footer.tagline')}</p>
          <p className="app-footer__meta">{SITE.location}</p>
        </div>

        <div>
          <h3 className="app-footer__heading">{t('footer.nav')}</h3>
          <ul className="app-footer__links">
            {footerLinks.map(({ to, key }) => (
              <li key={to}>
                <Link to={to}>{t(key)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="app-footer__heading">{t('footer.connect')}</h3>
          <ul className="app-footer__links app-footer__links--icons">
            <li>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href={SITE.social.github} target="_blank" rel="noopener noreferrer">
                <Github /> GitHub
              </a>
            </li>
            <li>
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterX /> X
              </a>
            </li>
            <li>
              <button type="button" onClick={copy} className="footer-email-btn">
                <Mail size={16} />
                {copied ? t('about.copied') : SITE.email}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="app-footer__heading">{t('footer.newsletter')}</h3>
          <p className="app-footer__hint">{t('footer.newsletterHint')}</p>
          <form className="newsletter-form" onSubmit={onNewsletter}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={newsletterState === 'done'}
            />
            <button type="submit" className="btn btn--primary btn--sm" disabled={newsletterState === 'loading'}>
              {newsletterState === 'done' ? t('footer.subscribed') : t('footer.subscribe')}
            </button>
          </form>
        </div>
      </div>

      <div className="app-footer__bottom">
        <span>© {new Date().getFullYear()} {SITE.brand}. {t('footer.rights')}</span>
        <span className="app-footer__stack">React · Vite</span>
      </div>
    </footer>
  );
}
