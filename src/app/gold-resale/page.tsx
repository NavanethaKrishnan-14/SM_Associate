import type { Metadata } from 'next';
import GoldResaleHero from '@/components/heroes/GoldResaleHero';
import GoldResaleContent from './GoldResaleContent';

export const metadata: Metadata = {
  title: 'Gold Resale in Tirunelveli | Clear Valuation Guidance',
  description: 'Thinking about selling gold? SM Associate provides a straightforward gold resale experience with clear valuation guidance, verification and local support in Tirunelveli.',
  keywords:
    'gold resale Tirunelveli, sell gold Tirunelveli, gold valuation, gold jewellery resale, sell gold jewellery, gold buyer Tirunelveli',
  alternates: {
    canonical: 'https://www.smassociate.in/gold-resale',
  },
  openGraph: {
    title: 'Gold Resale | SM Associate',
    description: 'A clear, local approach to gold valuation and resale.',
    url: 'https://www.smassociate.in/gold-resale',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-gold-resale.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Resale Services from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Resale | SM Associate',
    description: 'A clear, local approach to gold valuation and resale.',
    images: ['https://www.smassociate.in/og-gold-resale.jpg'],
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
