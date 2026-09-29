import type { Metadata } from 'next';
import HomeLoanHero from '@/components/heroes/HomeLoanHero';
import HomeLoanContent from './HomeLoanContent';

export const metadata: Metadata = {
  title: 'Home Loan in Tirunelveli | Housing Finance Guidance',
  description: 'Planning to buy, build or renovate a home? Explore home loan options with SM Associate and get clear guidance on eligibility, documents, EMI and the application process.',
  keywords: 'home loan interest rates, home loan online apply, affordable housing loan India, home loan eligibility calculator, low interest home loan Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/home-loan',
  },
  openGraph: {
    title: 'Home Loan Guidance | SM Associate',
    description: 'Practical support for understanding home loan options, documents and the application journey.',
    url: 'https://www.smassociate.in/home-loan',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-home-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Loan Guidance | SM Associate',
    description: 'Practical support for understanding home loan options, documents and the application journey.',
    images: ['https://www.smassociate.in/og-home-loan.jpg'],
  },
};

export default function HomeLoanPage() {
  return (
    <div id="home-loan-page" className="site-page page-home-loan">
      <HomeLoanHero />
      <HomeLoanContent />
    </div>
  );
}
