import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

export const metadata: Metadata = {
  title: 'SM Associate | Finance & Vehicle Marketplace in Tirunelveli, Tamil Nadu',
  description: 'SM Associate offers home, car, bike, personal & business loans plus a trusted vehicle marketplace to buy or sell cars & bikes. Finance, insurance and local assistance in Tirunelveli.',
  keywords: 'finance company Tirunelveli, home loan Tirunelveli, car loan Tirunelveli, used cars Tirunelveli, vehicle marketplace, SM Associate',
  alternates: { canonical: 'https://www.smassociate.in' },
  openGraph: {
    title: 'SM Associate - Finance & Mobility',
    description: 'Finance, vehicles and insurance through one trusted local platform.',
    url: 'https://www.smassociate.in',
    type: 'website',
    images: [{ url: 'https://www.smassociate.in/og-image.jpg', width: 1200, height: 630, alt: 'SM Associate - Finance & Mobility' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Associate - Finance & Mobility',
    description: 'Finance, vehicles and insurance through one trusted local platform.',
    images: ['https://www.smassociate.in/og-image.jpg'],
  },
};

export default function Home() {
  return <HomePage />;
}
