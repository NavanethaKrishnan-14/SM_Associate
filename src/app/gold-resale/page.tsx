import type { Metadata } from 'next';
import GoldResaleHero from '@/components/heroes/GoldResaleHero';
import GoldResaleContent from '@/app/gold-loan/GoldResaleContent';

export const metadata: Metadata = {
  title: 'Gold Resale in Tirunelveli | Transparent Gold Valuation | SM Associate',
  description:
    'Explore gold resale with SM Associate in Tirunelveli. Get clear valuation guidance, straightforward verification, and support through the gold sale process.',
  keywords:
    'gold resale Tirunelveli, sell gold Tirunelveli, gold valuation, gold jewellery resale, sell gold jewellery, gold buyer Tirunelveli',
  alternates: {
    canonical: 'https://www.smassociate.in/gold-resale',
  },
  openGraph: {
    title: 'Gold Resale Services | SM Associate',
    description:
      'A clear, valuation-led gold resale service with local support in Tirunelveli.',
    url: 'https://www.smassociate.in/gold-resale',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-gold-resale.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Resale Services from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Resale Services | SM Associate',
    description:
      'A clear, valuation-led gold resale service with local support in Tirunelveli.',
    images: ['https://smassociate.com/og-gold-resale.jpg'],
  },
};

export default function GoldResalePage() {
  return (
    <div id="gold-resale-page" className="site-page page-gold-resale">
      <GoldResaleHero />
      <GoldResaleContent />
    </div>
  );
}
