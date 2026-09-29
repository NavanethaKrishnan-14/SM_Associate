import type { Metadata } from 'next';
import SellVehicleContent from './SellVehicleContent';

export const metadata: Metadata = {
  title: 'Sell Your Vehicle in Tirunelveli | Start a Resale Enquiry',
  description: 'Submit your car or bike details to start a resale enquiry with SM Associate. We help you understand the information, documents and next steps involved.',
  keywords: 'sell vehicle online, vehicle submission form, car valuation, instant valuation',
  alternates: {
    canonical: 'https://www.smassociate.in/sell-vehicle',
  },
  openGraph: {
    title: 'Sell Your Vehicle | SM Associate',
    description: 'Start a vehicle resale enquiry with clear guidance on the next steps.',
    url: 'https://www.smassociate.in/sell-vehicle',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-sell-vehicle.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Your Vehicle at SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Vehicle | SM Associate',
    description: 'Start a vehicle resale enquiry with clear guidance on the next steps.',
    images: ['https://www.smassociate.in/sell-vehicle/og-sell-vehicle.jpg'],
  },
};

export default function SellVehiclePage() {
  return (
    <div id="sell-vehicle-page" className="site-page page-sell-vehicle">
      <SellVehicleContent />
    </div>
  );
}
