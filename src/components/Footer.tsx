'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="text-white transition-colors duration-300 w-full overflow-x-hidden relative"
      style={{
        background: 'var(--footer-bg)',
        color: 'var(--footer-color)',
      }}
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            backgroundColor: 'var(--accent-color)',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg font-black text-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)',
                  color: 'var(--primary-color)',
                }}
              >
                SM
              </div>
              <div>
                <h2 className="font-black text-lg" style={{ color: 'var(--footer-color)' }}>SM ASSOCIATE</h2>
                <p className="text-xs font-semibold tracking-wide" style={{ color: 'var(--accent-light)' }}>FINANCE & MOBILITY</p>
              </div>
            </div>
            <p className="leading-relaxed text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
              Your trusted partner for finance and mobility solutions in Tirunelveli, Tamil Nadu. Transparent rates, fast approval, and customer-first approach.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {[
                { href: 'https://facebook.com', label: 'Visit our Facebook page', Icon: Facebook },
                { href: 'https://linkedin.com', label: 'Visit our LinkedIn page', Icon: Linkedin },
                { href: 'https://twitter.com', label: 'Visit our Twitter page', Icon: Twitter },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--border-accent)',
                    borderWidth: '1px',
                    color: 'var(--accent-color)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                    e.currentTarget.style.color = 'var(--primary-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--accent-color)' }}>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />
              Loans & Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home Loan', href: ROUTES.HOME_LOAN },
                { label: 'Car Loan', href: ROUTES.CAR_LOAN },
                { label: 'Gold Loan', href: ROUTES.GOLD_LOAN },
                { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN },
                { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN },
                { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors flex items-center gap-2 group font-medium text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--accent-color)' }}>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />
              Vehicles
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Buy Cars', href: `${ROUTES.VEHICLES}?type=car` },
                { label: 'Buy Bikes', href: `${ROUTES.VEHICLES}?type=bike` },
                { label: 'Sell Vehicle', href: ROUTES.CAR_RESALE },
                { label: 'Featured Vehicles', href: ROUTES.VEHICLES },
                { label: 'EMI Calculator', href: ROUTES.EMI_CALCULATOR },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors flex items-center gap-2 group font-medium text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--accent-color)' }}>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: ROUTES.HOME },
                { label: 'About Us', href: ROUTES.ABOUT },
                { label: 'Blog & News', href: ROUTES.BLOG },
                { label: 'Contact Us', href: ROUTES.CONTACT },
                { label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
                { label: 'Terms & Conditions', href: ROUTES.TERMS_CONDITIONS },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors flex items-center gap-2 group font-medium text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2" style={{ color: 'var(--accent-color)' }}>
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent-color)' }}
              />
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919790219874"
                className="flex items-start gap-3 group p-3 rounded-lg transition-all"
                style={{ color: 'var(--footer-color)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Phone size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent-color)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Phone</p>
                  <p className="font-bold group-hover:transition-colors" style={{ color: 'var(--footer-color)' }}>
                    +91 9790219874
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.supportEmail}`}
                className="flex items-start gap-3 group p-3 rounded-lg transition-all"
                style={{ color: 'var(--footer-color)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Mail size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent-color)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Email</p>
                  <p className="font-bold text-sm break-all" style={{ color: 'var(--footer-color)' }}>
                    {COMPANY_INFO.supportEmail}
                  </p>
                </div>
              </a>
              <div 
                className="flex items-start gap-3 p-3 rounded-lg"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  borderColor: 'var(--border-accent)',
                  borderWidth: '1px',
                }}
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent-color)' }} />
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Location</p>
                  <p className="font-bold text-sm" style={{ color: 'var(--footer-color)' }}>
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px bg-gradient-to-r from-transparent via-current to-transparent mb-8"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, var(--accent-color), transparent)`,
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="text-center md:text-left" style={{ color: 'var(--text-secondary)' }}>
            © 2026 SM Associate & Cars. All Rights Reserved.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl transition-all flex items-center gap-2 hover:scale-110"
            style={{
              backgroundColor: 'var(--accent-soft)',
              borderColor: 'var(--border-accent)',
              borderWidth: '1px',
              color: 'var(--accent-color)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-color)';
              e.currentTarget.style.color = 'var(--primary-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
              e.currentTarget.style.color = 'var(--accent-color)';
            }}
            aria-label="Scroll to top"
          >
            <span className="font-semibold text-sm">Back to Top</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Legal Links */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-end" style={{ color: 'var(--text-secondary)' }}>
            <Link href={ROUTES.PRIVACY_POLICY} className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
              Privacy
            </Link>
            <span>•</span>
            <Link href={ROUTES.DISCLAIMER} className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
