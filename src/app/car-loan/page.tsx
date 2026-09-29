import type { Metadata } from 'next';
import CarLoanHero from '@/components/heroes/CarLoanHero';
import CarLoanContent from './CarLoanContent';

export const metadata: Metadata = {
  title: 'Car Loan in Tirunelveli | New & Used Car Finance Guidance',
  description: 'Planning to buy a new or pre-owned car? Explore car loan options with SM Associate and get practical guidance on eligibility, documents, EMI and the application process.',
  keywords: 'car loan interest rate, new car loan, used car loan finance, car loan EMI calculator, car finance company Tamil Nadu',
  alternates: {
    canonical: 'https://www.smassociate.in/car-loan',
  },
  openGraph: {
    title: 'Car Loan Guidance | SM Associate',
    description: 'Understand car finance options for new and pre-owned vehicles with clear local guidance.',
    url: 'https://www.smassociate.in/car-loan',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/car-loan/og-car-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Loans from SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Guidance | SM Associate',
    description: 'Understand car finance options for new and pre-owned vehicles with clear local guidance.',
    images: ['https://www.smassociate.in/car-loan/og-car-loan.jpg'],
  },
};

export default function CarLoanPage() {
  return (
    <div id="car-loan-page" className="site-page page-car-loan">
      <CarLoanHero />
      <CarLoanContent />
    </div>
  );
}
