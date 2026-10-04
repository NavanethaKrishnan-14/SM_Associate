'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '@/lib/constants';
import { getVisualThemeForPath } from '@/config/pageThemes';

const serviceLinks = [
  { label: 'Home Loan', href: ROUTES.HOME_LOAN },
  { label: 'Car Loan', href: ROUTES.CAR_LOAN },
  { label: 'Gold Resale', href: ROUTES.GOLD_RESALE },
  { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN },
  { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN },
  { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE },
];

const vehicleLinks = [
  { label: 'Browse Cars', href: `${ROUTES.VEHICLES}?type=car` },
  { label: 'Sell Your Vehicle', href: ROUTES.SELL_VEHICLE },
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
  const year = 2026;
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

        <div className="premium-footer-signature" aria-label="SM Associate premium brand signature">
          <div className="premium-footer-signature-orbit premium-footer-signature-orbit-one" />
          <div className="premium-footer-signature-orbit premium-footer-signature-orbit-two" />
          <div className="premium-footer-signature-orbit premium-footer-signature-orbit-three" />

          <div className="premium-footer-signature-core">
            <span className="premium-footer-signature-glow">SM</span>
            <span className="premium-footer-signature-wordmark">ASSOCIATE</span>
          </div>

          <div className="premium-footer-signature-detail premium-footer-signature-detail-one">
            <span>01</span>
            <strong>FINANCE</strong>
          </div>
          <div className="premium-footer-signature-detail premium-footer-signature-detail-two">
            <span>02</span>
            <strong>MOBILITY</strong>
          </div>

          <div className="premium-footer-signature-axis" />
          <div className="premium-footer-signature-crosshair">
            <span />
            <i />
          </div>

          <div className="premium-footer-signature-bottom">
            <span>EST. TIRUNELVELI</span>
            <i />
            <span>MOVE WITH CLARITY</span>
          </div>
        </div>
      </div>

      <div className="premium-footer-grid">
        <div className="premium-footer-brand">
          <div className="premium-footer-logo">
            <Image
              src="/sm-associate-site-logo.png"
              alt="SM Associate"
              width={280}
              height={93}
              className="premium-brand-logo premium-footer-logo-image"
              loading="lazy"
            />
          </div>

          <p>{COMPANY_INFO.description}</p>

          <div className="premium-socials" aria-label="Social and contact links">
            <a
              href="https://www.facebook.com/profile.php?id=100057608980098"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SM Associate"
              title="Facebook"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.51-1.46h1.82V3.94c-.31-.04-1.37-.14-2.6-.14-2.58 0-4.35 1.58-4.35 4.49V10H7.25v3h2.63v8h3.62Z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SM Associate"
              title="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.split(',')[0].replace(/[^0-9+]/g, '')}`}
              aria-label="Call SM Associate"
              title="Call"
            >
              <Phone size={17} />
            </a>
            {COMPANY_INFO.supportEmail && (
              <a href={`mailto:${COMPANY_INFO.supportEmail}`} aria-label="Email SM Associate">
                <Mail size={17} />
              </a>
            )}
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
          <div className="premium-footer-contact-phone">
            <Phone size={16} />
            <span>
              <a href="tel:+919790219874">+91 97902 19874</a>
              <span aria-hidden="true">, </span>
              <a href="tel:+919047007720">+91 90470 07720</a>
            </span>
          </div>
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
