import { useState } from 'react';
import { Check, Send, ChevronRight } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { useCopyEmail } from '../hooks/useCopyEmail';
import { SITE } from '../data/site';
import { Github, Linkedin, TwitterX } from '../components/icons/BrandIcons';

export function ContactPage() {
  const { t } = useLanguage();
  const { copied, copy } = useCopyEmail();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${SITE.apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Unable to send message.');
      }
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Seo title={t('nav.contact')} description={t('contact.intro')} />
      <section className="section">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          intro={t('contact.intro')}
          align="center"
        />
        <div className="contact-grid">
          <div className="card contact-form-card">
            {success ? (
              <div className="contact-success">
                <Check size={32} />
                <p>{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="contact-form">
                {error && <p className="form-error">{error}</p>}
                <div className="form-row">
                  <label>
                    {t('contact.form.name')}
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      disabled={loading}
                    />
                  </label>
                  <label>
                    {t('contact.form.email')}
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      disabled={loading}
                    />
                  </label>
                </div>
                <label>
                  {t('contact.form.subject')}
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    disabled={loading}
                  />
                </label>
                <label>
                  {t('contact.form.message')}
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={loading}
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
                  <Send size={16} />
                  {loading ? t('contact.form.sending') : t('contact.form.send')}
                </button>
              </form>
            )}
          </div>

          <aside className="contact-aside">
            <div className="card">
              <h3>{t('contact.direct')}</h3>
              <ul className="contact-links">
                <li>
                  <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin /> LinkedIn <ChevronRight size={16} />
                  </a>
                </li>
                <li>
                  <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer">
                    <TwitterX /> X <ChevronRight size={16} />
                  </a>
                </li>
                <li>
                  <a href={SITE.social.github} target="_blank" rel="noopener noreferrer">
                    <Github /> GitHub <ChevronRight size={16} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card email-card">
              <span className="fact-card__label">{t('contact.emailLabel')}</span>
              <button type="button" onClick={copy} className="email-card__btn">
                {SITE.email}
                {copied && <Check size={16} />}
              </button>
            </div>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}
