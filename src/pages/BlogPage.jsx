import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  const { t, lang } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.blog')} description={t('blog.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('blog.eyebrow')} title={t('blog.title')} intro={t('blog.intro')} />
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card card--interactive blog-card">
              <div className="blog-card__meta">
                <span className="chip">{post.category}</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <span>
                  {post.readMinutes} {t('blog.minRead')}
                </span>
              </div>
              <h3>{t(post.titleKey)}</h3>
              <p>{t(post.excerptKey)}</p>
              <Link to={`/blog/${post.slug}`} className="text-link">
                {t('blog.read')}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
