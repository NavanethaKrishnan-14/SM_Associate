'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '@/lib/constants';
import { getVisualThemeForPath } from '@/config/pageThemes';

const serviceLinks = [
  { label: 'Home Loan', href: ROUTES.HOME_LOAN },
  { label: 'Car Loan', href: ROUTES.CAR_LOAN },
  { label: 'Gold Loan', href: ROUTES.GOLD_LOAN },
  { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN },
  { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN },
  { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE },
];

const vehicleLinks = [
  { label: 'Browse Cars', href: `${ROUTES.VEHICLES}?type=car` },
  { label: 'Browse Bikes', href: `${ROUTES.VEHICLES}?type=bike` },
  { label: 'Sell Your Vehicle', href: ROUTES.CAR_RESALE },
  { label: 'EMI Calculator', href: ROUTES.EMI_CALCULATOR },
  { label: 'Finance Solutions', href: ROUTES.LOANS },
];

const companyLinks = [
  { label: 'About SM Associate', href: ROUTES.ABOUT },
  { label: 'Insights & Guides', href: ROUTES.BLOG },
  { label: 'Contact', href: ROUTES.CONTACT },
  { label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
  { label: 'Terms & Conditions', href: ROUTES.TERMS_CONDITIONS },
  { label: 'Disclaimer', href: ROUTES.DISCLAIMER },
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const footerTheme = getVisualThemeForPath(pathname);

  const footerStyle = {
    '--footer-accent': footerTheme.accent,
    '--footer-accent-soft': footerTheme.accentSoft,
    '--footer-accent-glow': footerTheme.accentGlow,
  } as CSSProperties;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`premium-footer premium-footer-theme-${footerTheme.name}`} style={footerStyle}>
      <div className="premium-footer-top">
        <div>
          <span className="premium-footer-kicker">READY FOR THE NEXT MOVE?</span>
          <h2>Good decisions start with a clear conversation.</h2>
          <p>Loans, vehicles, insurance or resale — tell us what you are planning and we will help you find the right starting point.</p>
        </div>
        <div className="premium-footer-cta-wrap">
          <Link href={ROUTES.CONTACT} className="premium-footer-cta">
            Talk to our team
          </Link>
          <span className="premium-footer-cta-note">Local support · Tirunelveli</span>
        </div>

      <div className="premium-footer-bottom">
        <span>© {year} SM Associate & Cars. All rights reserved.</span>
        <span>Finance · Mobility · Customer-first service</span>
        <button type="button" onClick={scrollToTop}>Back to top </button>
      </div>
    </footer>
  );
}
