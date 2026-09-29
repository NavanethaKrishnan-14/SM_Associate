import Link from 'next/link';
import { ArrowRight, Home, Phone } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

export default function NotFound() {
  return (
    <main className="premium-404">
      <div className="premium-404-orbit" aria-hidden="true" />
      <div className="premium-404-card">
        <span className="premium-404-kicker">SM ASSOCIATE · PAGE NOT FOUND</span>
        <div className="premium-404-number">404</div>
        <h1>This page is no longer where you expected it to be.</h1>
        <p>The destination may have moved. Use one of the links below to continue with finance, vehicles or support.</p>
        <div className="premium-404-actions">
          <Link href={ROUTES.HOME}><Home size={16} /> Back to Home</Link>
          <Link href={ROUTES.LOANS}><ArrowRight size={16} /> Explore Services</Link>
          <a href="tel:+919790219874"><Phone size={16} /> Call Support</a>
        </div>
      </div>
    </main>
  );
}
