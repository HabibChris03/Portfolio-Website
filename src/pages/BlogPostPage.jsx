import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { getPostBySlug } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const body = t(post.bodyKey);

  return (
    <PageWrapper>
      <Seo title={t(post.titleKey)} description={t(post.excerptKey)} />
      <article className="section prose">
        <Link to="/blog" className="text-link case-study__back">
          <ArrowLeft size={16} />
          {t('blog.back')}
        </Link>
        <div className="blog-card__meta">
          <span className="chip">{post.category}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h1 className="section-title">{t(post.titleKey)}</h1>
        <p className="lead">{t(post.excerptKey)}</p>
        {body.split('\n\n').map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </article>
    </PageWrapper>
  );
}
