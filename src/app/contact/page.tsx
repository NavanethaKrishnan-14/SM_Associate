import type { Metadata } from 'next';
import ContactHero from '@/components/heroes/ContactHero';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact SM Associate | Finance, Vehicle & Insurance Enquiries',
  description: 'Contact SM Associate in Tirunelveli for loan, vehicle, insurance and resale enquiries. Find our office details, call the team or send a message through the website.',
  keywords: 'SM Associate contact number, finance company customer support, loan enquiry contact form, SM Associate Tirunelveli office address, 24/7 live chat support finance',
  alternates: {
    canonical: 'https://www.smassociate.in/contact',
  },
  openGraph: {
    title: 'Contact SM Associate',
    description: 'Speak with the SM Associate team about finance, vehicles, insurance or resale.',
    url: 'https://www.smassociate.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SM Associate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SM Associate',
    description: 'Speak with the SM Associate team about finance, vehicles, insurance or resale.',
    images: ['https://www.smassociate.in/contact/og-contact.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div id="contact-page" className="site-page page-contact">
      <ContactHero />
      <ContactContent />
    </div>
  );
}
