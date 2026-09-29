import type { Metadata } from 'next';
import BusinessLoanHero from '@/components/heroes/BusinessLoanHero';
import BusinessLoanContent from './BusinessLoanContent';

export const metadata: Metadata = {
  title: 'Business Loan in Tirunelveli | Working Capital & Growth Finance',
  description: 'Need finance for working capital, expansion or a new business requirement? Explore business loan options with practical guidance from SM Associate.',
  keywords: 'business loan online, SME business finance, working capital loan, small business loan India, business growth financing',
  alternates: {
    canonical: 'https://www.smassociate.in/business-loan',
  },
  openGraph: {
    title: 'Business Loan Guidance | SM Associate',
    description: 'Understand business finance options, documentation and the application journey.',
    url: 'https://www.smassociate.in/business-loan',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-business-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loan Guidance | SM Associate',
    description: 'Understand business finance options, documentation and the application journey.',
    images: ['https://www.smassociate.in/og-business-loan.jpg'],
  },
};

export default function BusinessLoanPage() {
  return (
    <div id="business-loan-page" className="site-page page-business-loan">
      <BusinessLoanHero />
      <BusinessLoanContent />
    </div>
  );
}
