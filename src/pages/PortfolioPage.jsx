import { useMemo, useState } from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { PROJECT_CATEGORIES, projects } from '../data/projects';

export function PortfolioPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <PageWrapper>
      <Seo title={t('nav.portfolio')} description={t('portfolio.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('portfolio.eyebrow')} title={t('portfolio.title')} intro={t('portfolio.intro')} />
        <div className="filter-bar" role="tablist">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              className={`filter-bar__btn ${filter === cat.id ? 'is-active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>
        <div className="grid-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
