import { Link } from 'react-router-dom';
import { Layers, Shield, Smartphone, MessageSquare } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';

const iconMap = {
  layers: Layers,
  shield: Shield,
  smartphone: Smartphone,
  message: MessageSquare,
};

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.services')} description={t('services.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('services.eyebrow')} title={t('services.title')} intro={t('services.intro')} />
        <div className="grid-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article key={service.id} className="card card--interactive service-card">
                <div className="service-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
                <ul className="bullet-list bullet-list--compact">
                  {service.deliverables.map((d) => (
                    <li key={d}>{t(d)}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="cta-band card">
          <p>{t('contact.intro')}</p>
          <Link to="/contact" className="btn btn--primary">
            {t('services.cta')}
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
