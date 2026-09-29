'use client';

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
      </div>

      <div className="premium-footer-grid">
        <div className="premium-footer-brand">
          <div className="premium-footer-logo">
            <span className="premium-brand-mark">SM</span>
            <div>
              <strong>SM ASSOCIATE</strong>
              <small>FINANCE · MOBILITY</small>
            </div>
          </div>
          <p>{COMPANY_INFO.description}</p>
          <div className="premium-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={17} /></a>
          </div>
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">SERVICES</span>
          {serviceLinks.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">AUTOMOTIVE</span>
          {vehicleLinks.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">COMPANY</span>
          {companyLinks.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <div className="premium-footer-col premium-footer-contact">
          <span className="premium-footer-label">CONTACT</span>
          <a href="tel:+919790219874"><Phone size={16} />+91 97902 19874</a>
          {COMPANY_INFO.supportEmail && <a href={`mailto:${COMPANY_INFO.supportEmail}`}><Mail size={16} />{COMPANY_INFO.supportEmail}</a>}
          <div className="premium-footer-address"><MapPin size={16} /><span>{COMPANY_INFO.address}</span></div>
        </div>
      </div>

      <div className="premium-footer-bottom">
        <span>© {year} SM Associate & Cars. All rights reserved.</span>
        <span>Finance · Mobility · Customer-first service</span>
        <button type="button" onClick={scrollToTop}>Back to top </button>
      </div>
    </footer>
  );
}
