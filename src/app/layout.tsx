import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ThemeProvider } from '@/contexts/ThemeContext';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SM Associate | Finance & Vehicle Marketplace in Tirunelveli, Tamil Nadu',
  description: 'SM Associate offers home, car, bike, personal and business finance solutions, vehicle resale, insurance and local assistance in Tirunelveli.',
  keywords: 'finance company Tirunelveli, home loan Tirunelveli, car loan Tirunelveli, used cars Tirunelveli, vehicle marketplace, SM Associate',
  icons: { icon: '/sm-associate-site-logo.png' },
  openGraph: {
    title: 'SM Associate — Finance & Mobility',
    description: 'Finance, vehicles and insurance through one trusted local platform.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.smassociate.in',
    siteName: 'SM Associate',
    images: [{ url: 'https://www.smassociate.in/og-image.jpg', width: 1200, height: 630, alt: 'SM Associate — Finance & Mobility' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SM Associate — Finance & Mobility',
    description: 'Finance, vehicles and insurance through one trusted local platform.',
    images: ['https://www.smassociate.in/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#0a1522',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SM Associate',
    description: 'Finance and vehicle marketplace providing loans, insurance and pre-owned vehicles in Tirunelveli',
    url: 'https://www.smassociate.in',
    telephone: '+91-9790219874',
    email: process.env.CONTACT_TO_EMAIL || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 183 E4, Nellaiapper High Road, Thirunagar',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      postalCode: '627001',
      addressCountry: 'IN',
    },
    image: 'https://www.smassociate.in/og-image.jpg',
    areaServed: { '@type': 'Region', name: 'Tirunelveli, Tamil Nadu, India' },
    priceRange: '₹',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    }],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9790219874',
      email: process.env.CONTACT_TO_EMAIL || '',
    },
  };

  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  ...organizationSchema,
                  '@id': 'https://www.smassociate.in/#organization',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.smassociate.in/#website',
                  name: 'SM Associate',
                  url: 'https://www.smassociate.in',
                  publisher: {
                    '@id': 'https://www.smassociate.in/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={manrope.className}>
        <ThemeProvider>
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
