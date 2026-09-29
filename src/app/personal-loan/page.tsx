import type { Metadata } from 'next';
import PersonalLoanHero from '@/components/heroes/PersonalLoanHero';
import PersonalLoanContent from './PersonalLoanContent';

export const metadata: Metadata = {
  title: 'Personal Loan in Tirunelveli | Flexible Finance Options',
  description: 'Explore personal loan options for planned expenses or urgent needs. SM Associate helps you understand eligibility, documents, repayment and the next steps.',
  keywords: 'personal loan online, instant personal loan approval, no collateral personal loan, emergency micro loan, personal loan for salaried and self employed',
  alternates: {
    canonical: 'https://www.smassociate.in/personal-loan',
  },
  openGraph: {
    title: 'Personal Loan Options | SM Associate',
    description: 'Clear guidance for comparing personal loan options before you apply.',
    url: 'https://www.smassociate.in/personal-loan',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/personal-loan/og-personal-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Personal Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Options | SM Associate',
    description: 'Clear guidance for comparing personal loan options before you apply.',
    images: ['https://www.smassociate.in/personal-loan/og-personal-loan.jpg'],
  },
};

export default function PersonalLoanPage() {
  return (
    <div id="personal-loan-page" className="site-page page-personal-loan">
      <PersonalLoanHero />
      <PersonalLoanContent />
    </div>
  );
}
