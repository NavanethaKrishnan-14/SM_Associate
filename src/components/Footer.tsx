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
    <footer
      className={`premium-footer premium-footer-theme-${footerTheme.name}`}
      style={footerStyle}
    >
      <div className="premium-footer-top">
        <div className="premium-footer-cta-content">
          <span className="premium-footer-kicker">READY FOR THE NEXT MOVE?</span>
          <h2>Good decisions start with a clear conversation.</h2>
          <p>
            Loans, vehicles, insurance or resale — tell us what you are planning and we will
            help you find the right starting point.
          </p>
          <div className="premium-footer-cta-wrap">
            <Link href={ROUTES.CONTACT} className="premium-footer-cta">
              Talk to our team
            </Link>
            <span className="premium-footer-cta-note">Local support · Tirunelveli</span>
          </div>
        </div>

        <div className="premium-footer-landmark" aria-label="Nellaiappar Temple inspired line-art illustration">
          <div className="premium-footer-landmark-halo" />
          <svg className="premium-footer-landmark-svg" viewBox="0 0 620 340" fill="none" aria-hidden="true">
            <path className="landmark-main-line" d="M94 276H526" />
            <path className="landmark-main-line" d="M112 262H508" />
            <path className="landmark-main-line" d="M134 248H486" />
            <path className="landmark-main-line" d="M150 248V178H470V248" />
            <path className="landmark-main-line" d="M168 178V158H452V178" />
            <path className="landmark-main-line" d="M185 158V140H435V158" />

            <path className="landmark-accent-line" d="M196 140L205 122L214 140M406 140L415 122L424 140" />
            <path className="landmark-accent-line" d="M215 122L225 104L235 122M385 122L395 104L405 122" />
            <path className="landmark-accent-line" d="M240 104L250 86L260 104M360 104L370 86L380 104" />

            <path className="landmark-main-line" d="M266 86L276 68L286 86M334 86L344 68L354 86" />
            <path className="landmark-accent-line" d="M290 68L300 48L310 68M310 48L320 30L330 48M330 48L340 30L350 48" />

            <path className="landmark-main-line" d="M300 30H340" />
            <path className="landmark-main-line" d="M320 30V16" />
            <circle className="landmark-accent-dot" cx="320" cy="12" r="4" />

            <path className="landmark-main-line" d="M172 248V202H208V248M412 248V202H448V248" />
            <path className="landmark-main-line" d="M268 248V204C268 190 279 178 294 178C309 178 320 190 320 204V248" />
            <path className="landmark-main-line" d="M320 248V204C320 190 331 178 346 178C361 178 372 190 372 204V248" />

            <path className="landmark-main-line" d="M146 230H474" />
            <path className="landmark-accent-line" d="M156 216H464M165 201H455" />
            <path className="landmark-accent-line" d="M185 182H225M395 182H435" />

            <path className="landmark-secondary-line" d="M74 282C138 268 190 292 252 282C314 272 370 292 432 282C482 274 530 286 562 276" />
            <path className="landmark-secondary-line" d="M82 296C150 284 206 306 268 296C330 286 390 306 452 296C500 288 536 298 556 292" />
          </svg>

          <div className="premium-footer-landmark-label">
            <span>NELLAIAPPAR TEMPLE</span>
            <i />
            <span>TIRUNELVELI</span>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">SERVICES</span>
          {serviceLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">AUTOMOTIVE</span>
          {vehicleLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="premium-footer-col">
          <span className="premium-footer-label">COMPANY</span>
          {companyLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="premium-footer-col premium-footer-contact">
          <span className="premium-footer-label">CONTACT</span>
          <a href="tel:+919790219874">
            <Phone size={16} />
            +91 97902 19874
          </a>
          {COMPANY_INFO.supportEmail && (
            <a href={`mailto:${COMPANY_INFO.supportEmail}`}>
              <Mail size={16} />
              {COMPANY_INFO.supportEmail}
            </a>
          )}
          <div className="premium-footer-address">
            <MapPin size={16} />
            <span>{COMPANY_INFO.address}</span>
          </div>
        </div>
      </div>

      <div className="premium-footer-bottom">
        <span>© {year} SM Associate & Cars. All rights reserved.</span>
        <span>Finance · Mobility · Customer-first service</span>
        <button type="button" onClick={scrollToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
}
