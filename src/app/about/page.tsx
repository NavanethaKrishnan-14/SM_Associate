import type { Metadata } from 'next';
import AboutHero from '@/components/heroes/AboutHero';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About SM Associate | Finance & Mobility Support in Tirunelveli',
  description: 'Learn about SM Associate, a Tirunelveli-based finance and mobility business helping customers explore loans, vehicle resale and related services with clear guidance.',
  keywords: 'SM Associate about us, finance company history India, trusted loan provider story, SM Associate company profile, finance and mobility company Tirunelveli',
  alternates: {
    canonical: 'https://www.smassociate.in/about',
  },
  openGraph: {
    title: 'About SM Associate',
    description: 'Get to know SM Associate, our local approach and the services we provide across finance and mobility.',
    url: 'https://www.smassociate.in/about',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SM Associate',
    description: 'Get to know SM Associate, our local approach and the services we provide across finance and mobility.',
    images: ['https://www.smassociate.in/about/og-about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div id="about-page" className="site-page page-about w-full overflow-x-hidden">
      <AboutHero />
      <AboutContent />
    </div>
  );
}
