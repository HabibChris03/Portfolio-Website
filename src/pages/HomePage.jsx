import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Shield, Layers, Rocket } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Seo } from '../components/ui/Seo';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { SITE } from '../data/site';

const pillarIcons = { build: Layers, secure: Shield, ship: Rocket };

export function HomePage() {
  const { t } = useLanguage();
  const featured = projects.slice(0, 2);

  return (
    <PageWrapper>
      <Seo
        description="Habib Chris — full-stack software engineer and cybersecurity practitioner. Case studies, services, and contact."
      />
      <section className="hero">
        <div className="hero__content">
          <p className="status-pill">
            <span className="status-pill__dot" />
            {t('home.available')}
          </p>
          <h1 className="hero__title">{t('home.headline')}</h1>
          <p className="hero__lead">{t('home.subhead')}</p>
          <div className="hero__actions">
            <Link to="/portfolio" className="btn btn--primary">
              {t('home.ctaWork')}
            </Link>
            <Link to="/about" className="btn btn--secondary">
              {t('home.ctaAbout')}
            </Link>
            <a href={SITE.cvPath} className="btn btn--ghost" download>
              <Download size={16} />
              {t('home.ctaCv')}
            </a>
          </div>
        </div>
        <aside className="hero__card card">
          <p className="hero__card-label">{SITE.legalName}</p>
          <p className="hero__card-role">{SITE.title}</p>
          <div className="hero__stats">
            <div>
              <span className="hero__stat-value">Full-stack</span>
              <span className="hero__stat-label">Web & mobile</span>
            </div>
            <div>
              <span className="hero__stat-value">Security</span>
              <span className="hero__stat-label">Lab & reviews</span>
            </div>
            <div>
              <span className="hero__stat-value">EN / FR</span>
              <span className="hero__stat-label">Bilingual</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="pillar-grid">
          {['build', 'secure', 'ship'].map((key) => {
            const Icon = pillarIcons[key];
            return (
              <div key={key} className="card pillar-card">
                <div className="pillar-card__icon">
                  <Icon size={20} />
                </div>
                <h2>{t(`home.pillars.${key}.title`)}</h2>
                <p>{t(`home.pillars.${key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-row">
          <div>
            <p className="section-eyebrow">{t('home.featured')}</p>
            <h2 className="section-title section-title--sm">{t('portfolio.title')}</h2>
          </div>
          <Link to="/portfolio" className="text-link">
            {t('home.viewAll')}
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-band card">
          <div>
            <h2>{t('services.title')}</h2>
            <p>{t('services.intro')}</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            {t('services.cta')}
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
