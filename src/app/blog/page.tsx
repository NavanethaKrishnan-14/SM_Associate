import type { Metadata } from 'next';
import BlogHero from '@/components/heroes/BlogHero';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Finance, Loan & Vehicle Guides | SM Associate',
  description: 'Read practical guides on loans, EMIs, vehicle buying and resale. Simple explanations from SM Associate to help you prepare before making a financial or vehicle decision.',
  keywords: 'finance blog India, loan tips and insights, vehicle buying guide blog, SM Associate news, financial literacy articles',
  alternates: {
    canonical: 'https://www.smassociate.in/blog',
  },
  openGraph: {
    title: 'Finance, Loan & Vehicle Guides | SM Associate',
    description: 'Practical articles for understanding finance, loans, EMIs and vehicle decisions.',
    url: 'https://www.smassociate.in/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.smassociate.in/blog/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'SM Associate Financial Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finance, Loan & Vehicle Guides | SM Associate',
    description: 'Practical articles for understanding finance, loans, EMIs and vehicle decisions.',
    images: ['https://www.smassociate.in/blog/og-blog.jpg'],
  },
};

export default function BlogPage() {
  return (
    <div id="blog-page" className="site-page page-blog">
      <BlogHero />
      <BlogContent />
    </div>
  );
}
