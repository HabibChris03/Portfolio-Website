import { useEffect } from 'react';
import { SITE } from '../../data/site';

export function Seo({ title, description }) {
  const fullTitle = title ? `${title} · ${SITE.brand}` : `${SITE.brand} — ${SITE.title}`;

  useEffect(() => {
    document.title = fullTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [fullTitle, description]);

  return null;
}
