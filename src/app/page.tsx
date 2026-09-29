import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

export const metadata: Metadata = {
  title: 'SM Associate | Finance & Vehicle Support in Tirunelveli',
  description: 'Explore finance, vehicle resale, insurance and practical guidance from SM Associate in Tirunelveli. Compare options, understand your next steps and speak with our local team.',
  keywords:
    'finance company Tirunelveli, home loan Tirunelveli, car loan Tirunelveli, used cars Tirunelveli, vehicle marketplace, SM Associate',
  alternates: { canonical: 'https://www.smassociate.in' },
  openGraph: {
    title: 'SM Associate | Finance & Mobility in Tirunelveli',
    description: 'Finance, vehicles and insurance with clear local guidance from SM Associate.',
    url: 'https://www.smassociate.in',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Associate - Finance & Mobility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Associate | Finance & Mobility in Tirunelveli',
    description: 'Finance, vehicles and insurance with clear local guidance from SM Associate.',
    images: ['https://www.smassociate.in/og-image.jpg'],
  },
};

export default function Home() {
  return <HomePage />;
}
