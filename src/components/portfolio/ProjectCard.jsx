import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function ProjectCard({ project }) {
  const { t } = useLanguage();
  const statusLabel = t(`portfolio.status.${project.status}`);

  return (
    <article className="card card--interactive project-card">
      <div className="project-card__top">
        <span className="chip chip--muted">{statusLabel}</span>
        <span className="chip">{project.category}</span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__summary">{project.summary}</p>
      <ul className="tag-row">
        {project.stack.slice(0, 4).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link to={`/portfolio/${project.slug}`} className="text-link project-card__link">
        {t('portfolio.readCase')}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
