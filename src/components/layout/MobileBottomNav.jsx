import { Briefcase, Code2, Home, Mail, Wrench } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const mobileNavItems = [
  { to: '/', key: 'nav.home', icon: Home, end: true },
  { to: '/portfolio', key: 'nav.portfolio', icon: Briefcase },
  { to: '/skills', key: 'nav.skills', icon: Code2 },
  { to: '/services', key: 'nav.services', icon: Wrench },
  { to: '/contact', key: 'nav.contact', icon: Mail },
];

export function MobileBottomNav() {
  const { t } = useLanguage();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile primary">
      <div className="mobile-bottom-nav__inner">
        {mobileNavItems.map(({ to, key, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `mobile-bottom-nav__link ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={20} aria-hidden="true" strokeWidth={2.2} />
            <span>{t(key)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
