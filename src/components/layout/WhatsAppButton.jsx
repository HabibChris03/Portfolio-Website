import { SITE } from '../../data/site';
import { WhatsApp } from '../icons/BrandIcons';

export function WhatsAppButton() {
  if (!SITE.whatsapp) return null;

  const href = `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hi Habib — I found your portfolio and would like to connect.',
  )}`;

  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <WhatsApp />
    </a>
  );
}
