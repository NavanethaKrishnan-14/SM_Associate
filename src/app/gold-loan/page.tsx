import type { Metadata } from 'next';
import GoldLoanHero from '@/components/heroes/GoldLoanHero';
import GoldLoanContent from './GoldLoanContent';

export const metadata: Metadata = {
  title: 'Gold Loan & Gold Resale – Turn Your Gold into Instant Cash | SM Associate',
  description: 'Get fair market value for your gold jewellery or borrow against pledged gold. Quick approvals, transparent valuation, instant cash disbursal. Gold resale and redemption loans in Tirunelveli.',
  keywords: 'gold loan, gold resale, gold valuation, gold pawn, instant cash for gold, buy gold jewellery, gold loan online',
  alternates: {
    canonical: 'https://www.smassociate.in/gold-loan',
  },
  openGraph: {
    title: 'Gold Loan & Gold Resale Services',
    description: 'Fair market value for your gold jewellery with quick approvals and transparent valuation',
    url: 'https://www.smassociate.in/gold-loan',
    type: 'website',
    images: [
      {
        url: 'https://smassociate.com/og-gold-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Loan Services from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Loan & Gold Resale Services',
    description: 'Fair market value for your gold jewellery with quick approvals and transparent valuation',
    images: ['https://smassociate.com/og-gold-loan.jpg'],
  },
};

export default function GoldLoanPage() {
  return (
    <>
      <GoldLoanHero />
      <GoldLoanContent />
    </>
  );
}
