import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { education, experience } from '../data/experience';

export function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.experience')} description={t('experience.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('experience.eyebrow')} title={t('experience.title')} intro={t('experience.intro')} />
        <h3 className="timeline-heading">{t('experience.work')}</h3>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.id} className="card timeline-item">
              <div className="timeline-item__meta">
                <span>{item.period}</span>
              </div>
              <div>
                <h4>{item.role}</h4>
                <p className="timeline-item__org">{item.org}</p>
                <ul className="bullet-list">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tag-row tag-row--wrap">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="timeline-heading">{t('experience.edu')}</h3>
        <div className="grid-2">
          {education.map((edu) => (
            <article key={edu.id} className="card">
              <span className="chip chip--muted">{edu.period}</span>
              <h4>{edu.title}</h4>
              <p className="timeline-item__org">{edu.institution}</p>
              <p>{edu.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
