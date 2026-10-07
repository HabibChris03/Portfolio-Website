import { Link } from 'react-router-dom';
import { Mail, Copy, Check, BookOpen, Target, Globe2 } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { useCopyEmail } from '../hooks/useCopyEmail';

export function AboutPage() {
  const { t } = useLanguage();
  const { copied, copy } = useCopyEmail();

  return (
    <PageWrapper>
      <Seo title={t('nav.about')} description={t('about.p1')} />
      <section className="section">
        <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} intro={t('about.role')} />
        <div className="about-layout">
          <div className="about-copy">
            <p className="lead">{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                <Mail size={16} />
                {t('about.reach')}
              </Link>
              <button type="button" className="btn btn--secondary" onClick={copy}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? t('about.copied') : t('about.copyEmail')}
              </button>
            </div>
          </div>
          <div className="about-facts">
            <div className="card fact-card">
              <BookOpen size={20} />
              <span className="fact-card__label">{t('about.learning')}</span>
              <strong>{t('about.learningValue')}</strong>
            </div>
            <div className="card fact-card">
              <Target size={20} />
              <span className="fact-card__label">{t('about.focus')}</span>
              <strong>{t('about.focusValue')}</strong>
            </div>
            <div className="card fact-card">
              <Globe2 size={20} />
              <span className="fact-card__label">{t('about.languages')}</span>
              <strong>{t('about.languagesValue')}</strong>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
