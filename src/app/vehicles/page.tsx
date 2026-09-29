import type { Metadata } from 'next';
import VehiclesHero from '@/components/heroes/VehiclesHero';
import VehiclesContent from './VehiclesContent';

export const metadata: Metadata = {
  title: 'Used Cars & Bikes in Tirunelveli | SM Associate Vehicle Marketplace',
  description: 'Browse available pre-owned cars and bikes from SM Associate. Review vehicle details, pricing and finance options, then contact the team for the next step.',
  keywords: 'used car marketplace India, buy second hand cars online, verified pre-owned vehicles, used bike for sale, vehicle marketplace Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/vehicles',
  },
  openGraph: {
    title: 'Pre-owned Vehicles | SM Associate',
    description: 'Explore cars and bikes listed through the SM Associate vehicle marketplace.',
    url: 'https://www.smassociate.in/vehicles',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-vehicles.jpg',
        width: 1200,
        height: 630,
        alt: 'Pre-owned Vehicles from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-owned Vehicles | SM Associate',
    description: 'Explore cars and bikes listed through the SM Associate vehicle marketplace.',
    images: ['https://www.smassociate.in/vehicles/og-vehicles.jpg'],
  },
};

export default function VehiclesPage() {
  return (
    <div id="vehicle-marketplace-page" className="site-page page-vehicles">
      <VehiclesHero />
      <VehiclesContent />
    </div>
  );
}
