import type { Metadata } from 'next';
import TwoWheelerInsuranceHero from '@/components/heroes/TwoWheelerInsuranceHero';
import TwoWheelerInsuranceContent from './TwoWheelerInsuranceContent';

export const metadata: Metadata = {
  title: 'Two Wheeler Insurance in Tirunelveli | Insurance Support',
  description: 'Explore two wheeler insurance options, renewal requirements and coverage considerations with SM Associate. Get clear guidance before choosing a policy.',
  keywords: 'bike insurance online, two wheeler insurance renewal, comprehensive bike insurance, zero depreciation bike insurance, cashless bike insurance claim',
  alternates: {
    canonical: 'https://www.smassociate.in/two-wheeler-insurance',
  },
  openGraph: {
    title: 'Two Wheeler Insurance | SM Associate',
    description: 'Straightforward guidance for two wheeler insurance and renewal.',
    url: 'https://www.smassociate.in/two-wheeler-insurance',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Two Wheeler Insurance Online - SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Wheeler Insurance | SM Associate',
    description: 'Straightforward guidance for two wheeler insurance and renewal.',
    images: ['https://www.smassociate.in/og-image.jpg'],
  },
};

export default function TwoWheelerInsurancePage() {
  return (
    <div id="two-wheeler-insurance-page" className="site-page page-insurance">
      <TwoWheelerInsuranceHero />
      <TwoWheelerInsuranceContent />
    </div>
  );
}
