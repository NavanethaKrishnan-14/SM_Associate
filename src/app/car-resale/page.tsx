import type { Metadata } from 'next';
import CarResaleHero from '@/components/heroes/CarResaleHero';
import CarResaleContent from './CarResaleContent';

export const metadata: Metadata = {
  title: 'Sell Your Car or Bike in Tirunelveli | Vehicle Resale Support',
  description: 'Thinking about selling a used car or bike? Share your vehicle details with SM Associate and get practical guidance on valuation, documents and the resale process.'s marketplace. Get top valuation for your pre-owned car or bike with no middleman & instant approval.',
  keywords: 'sell used car online, sell my bike online, car resale value calculator, vehicle resale marketplace, sell car for best price India',
  alternates: {
    canonical: 'https://www.smassociate.in/car-resale',
  },
  openGraph: {
    title: 'Vehicle Resale | SM Associate',
    description: 'A practical way to start a used vehicle resale enquiry in Tirunelveli.',
    url: 'https://www.smassociate.in/car-resale',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/car-resale/og-car-resale.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Your Car at SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Resale | SM Associate',
    description: 'A practical way to start a used vehicle resale enquiry in Tirunelveli.',
    images: ['https://www.smassociate.in/car-resale/og-car-resale.jpg'],
  },
};

export default function CarResalePage() {
  return (
    <div id="car-resale-page" className="site-page page-car-resale">
      <CarResaleHero />
      <CarResaleContent />
    </div>
  );
}
