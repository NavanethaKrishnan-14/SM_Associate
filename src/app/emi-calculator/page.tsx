import type { Metadata } from 'next';
import EMICalculatorHero from '@/components/heroes/EMICalculatorHero';
import EMICalculatorContent from './EMICalculatorContent';

export const metadata: Metadata = {
  title: 'EMI Calculator for Home, Car & Personal Loans | SM Associate',
  description: 'Estimate your monthly EMI by changing the loan amount, interest rate and tenure. Use the calculator to plan a repayment amount that fits your budget.'s free EMI calculator to instantly calculate your monthly loan installment. Adjust loan amount & tenure and apply directly with your results.',
  keywords: 'loan EMI calculator, home loan EMI calculator, car loan EMI calculator, personal loan EMI calculator, monthly installment calculator',
  alternates: {
    canonical: 'https://www.smassociate.in/emi-calculator',
  },
  openGraph: {
    title: 'Loan EMI Calculator | SM Associate',
    description: 'Try different loan amounts, rates and tenures to understand your estimated monthly EMI.',
    url: 'https://www.smassociate.in/emi-calculator',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-emi-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'EMI Calculator from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan EMI Calculator | SM Associate',
    description: 'Try different loan amounts, rates and tenures to understand your estimated monthly EMI.',
    images: ['https://www.smassociate.in/emi-calculator/og-emi-calculator.jpg'],
  },
};

export default function EMICalculatorPage() {
  return (
    <div id="emi-page" className="site-page page-emi">
      <EMICalculatorHero />
      <EMICalculatorContent />
    </div>
  );
}
