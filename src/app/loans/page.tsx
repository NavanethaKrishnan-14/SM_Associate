import type { Metadata } from 'next';
import LoansHero from '@/components/heroes/LoansHero';
import LoansContent from './LoansContent';

export const metadata: Metadata = {
  title: 'Loans in Tirunelveli | Home, Car, Personal & Business Finance',
  description: 'Explore home, car, personal and business loan options with practical guidance on eligibility, documents, EMI and the next steps before you apply.',
  keywords: 'types of loans, loan comparison, personal finance, financial solutions, different loans, best loans',
  alternates: {
    canonical: 'https://www.smassociate.in/loans',
  },
  openGraph: {
    title: 'Loan Options | SM Associate',
    description: 'Explore loan categories and understand the information you should compare before applying.',
    url: 'https://www.smassociate.in/loans',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/loans/og-loans.jpg',
        width: 1200,
        height: 630,
        alt: 'Loan Types from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Options | SM Associate',
    description: 'Explore loan categories and understand the information you should compare before applying.',
    images: ['https://www.smassociate.in/loans/og-loans.jpg'],
  },
};

export default function LoansPage() {
  return (
    <div id="loans-page" className="site-page page-loans">
      <LoansHero />
      <LoansContent />
    </div>
  );
}
