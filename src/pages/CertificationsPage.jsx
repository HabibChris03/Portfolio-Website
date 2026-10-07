import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { achievements, certifications } from '../data/certifications';

export function CertificationsPage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.certs')} description={t('certs.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('certs.eyebrow')} title={t('certs.title')} intro={t('certs.intro')} />
        <div className="grid-2">
          {certifications.map((cert) => (
            <article key={cert.id} className="card">
              <span className="chip chip--muted">{cert.year}</span>
              <h3>{cert.title}</h3>
              <p className="timeline-item__org">{cert.issuer}</p>
              <p>{cert.detail}</p>
            </article>
          ))}
        </div>
        <h3 className="timeline-heading">{t('certs.achievements')}</h3>
        <div className="grid-2">
          {achievements.map((item) => (
            <article key={item.id} className="card">
              <h4>{t(item.titleKey)}</h4>
              <p>{t(item.descKey)}</p>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
