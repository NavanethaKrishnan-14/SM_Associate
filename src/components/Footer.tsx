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
        <div className="premium-footer-visual">
          <div className="premium-footer-temple" aria-hidden="true">
            <svg viewBox="0 0 360 260" role="img">
              <defs>
                <linearGradient id="templeGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b9892f" />
                  <stop offset="52%" stopColor="#e0bd67" />
                  <stop offset="100%" stopColor="#91681f" />
                </linearGradient>
                <linearGradient id="templeStone" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#cfc8b8" />
                  <stop offset="100%" stopColor="#f5f0e7" />
                </linearGradient>
              </defs>
              <path d="M30 218h300v14H30z" fill="#ddd4c1" />
              <path d="M44 204h272v16H44z" fill="#c8baa0" />
              <path d="M62 192h236v14H62z" fill="url(#templeStone)" />
              <path d="M82 82h196l-13 28H95z" fill="url(#templeGold)" />
              <path d="M92 110h176v82H92z" fill="#f1eadf" stroke="#cfbb93" />
              <path d="M70 82h220l-12-20H82z" fill="#b98b38" />
              <path d="M93 59h174l-8-16H101z" fill="#d8b35a" />
              <path d="M112 42h136l-8-14H120z" fill="#c99d43" />
              <path d="M134 28h92l-6-13h-80z" fill="#b88931" />
              <path d="M159 15h42v-7h-42z" fill="#a57422" />
              <path d="M177 8v-8h6v8z" fill="#8f651f" />
              <path d="M151 68h58l-7 10h-44z" fill="#f2d77e" opacity=".9" />
              <path d="M150 122h60v70h-60z" fill="#e9e1d4" />
              <path d="M167 192v-45h26v45z" fill="#8c6a39" />
              <path d="M118 128v64h18v-64zM224 128v64h18v-64z" fill="#d5c7ae" />
              <path d="M112 118h136v11H112z" fill="#bda06b" />
              <g fill="#d8b35a">
                <circle cx="123" cy="70" r="5" />
                <circle cx="145" cy="63" r="5" />
                <circle cx="215" cy="63" r="5" />
                <circle cx="237" cy="70" r="5" />
              </g>
              <g fill="#a77a2b" opacity=".85">
                <path d="M106 138h8v7h-8zM246 138h8v7h-8zM106 158h8v7h-8zM246 158h8v7h-8zM106 178h8v7h-8zM246 178h8v7h-8z" />
              </g>
            </svg>
          </div>
          <div className="premium-footer-visual-actions">
            <Link href={ROUTES.CONTACT} className="premium-footer-cta">
              Talk to our team
            </Link>
            <span className="premium-footer-cta-note">Local support · Tirunelveli</span>
          </div>
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
