import { Link } from 'react-router-dom';
import { Mic, Video, FileText } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { mediaItems } from '../data/media';

const typeIcon = { stream: Mic, video: Video, article: FileText };

export function MediaPage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.media')} description={t('media.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('media.eyebrow')} title={t('media.title')} intro={t('media.intro')} />
        <div className="grid-3">
          {mediaItems.map((item) => {
            const Icon = typeIcon[item.type];
            const inner = (
              <>
                <div className="service-card__icon">
                  <Icon size={20} />
                </div>
                <span className="chip chip--muted">{item.platform}</span>
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.descKey)}</p>
              </>
            );
            if (item.href.startsWith('/')) {
              return (
                <Link key={item.id} to={item.href} className="card card--interactive media-card">
                  {inner}
                </Link>
              );
            }
            return (
              <article key={item.id} className="card media-card">
                {inner}
              </article>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}
