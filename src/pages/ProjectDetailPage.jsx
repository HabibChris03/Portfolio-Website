import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <PageWrapper>
      <Seo title={project.title} description={project.summary} />
      <section className="section case-study">
        <Link to="/portfolio" className="text-link case-study__back">
          <ArrowLeft size={16} />
          {t('portfolio.back')}
        </Link>
        <p className="section-eyebrow">{t(`portfolio.status.${project.status}`)}</p>
        <h1 className="section-title">{project.title}</h1>
        <p className="lead">{project.subtitle}</p>
        <p className="case-study__summary">{project.summary}</p>

        <div className="case-study__grid">
          <div className="card">
            <h2>{t('portfolio.stack')}</h2>
            <ul className="tag-row tag-row--wrap">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>{t('portfolio.role')}</h2>
            <p>{project.role}</p>
          </div>
        </div>

        <div className="card">
          <h2>{t('portfolio.outcomes')}</h2>
          <ul className="bullet-list">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="case-study__actions">
          {project.links?.demo && (
            <a href={project.links.demo} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              {t('portfolio.liveSite')}
            </a>
          )}
          <Link to="/contact" className="btn btn--secondary">
            {t('portfolio.cta')}
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
