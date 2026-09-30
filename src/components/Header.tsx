'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  Briefcase,
  Car,
  ChevronDown,
  Coins,
  Home,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
  X,
} from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { getVisualThemeForPath } from '@/config/pageThemes';

type NavigationItem = {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
    icon: LucideIcon;
  }>;
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = useMemo<NavigationItem[]>(() => [
    { label: 'Home', href: ROUTES.HOME },
    {
      label: 'Services',
      href: ROUTES.LOANS,
      submenu: [
        { label: 'Home Loan', href: ROUTES.HOME_LOAN, icon: Home },
        { label: 'Car Loan', href: ROUTES.CAR_LOAN, icon: Car },
        { label: 'Gold Resale', href: ROUTES.GOLD_RESALE, icon: Coins },
        { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN, icon: User },
        { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN, icon: Briefcase },
        { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE, icon: ShieldCheck },
      ],
    },
    { label: 'Vehicles', href: ROUTES.VEHICLES },
    { label: 'Sell Vehicle', href: ROUTES.CAR_RESALE },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Contact', href: ROUTES.CONTACT },
  ], []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(false);
  }, [pathname]);

  const isHome = pathname === ROUTES.HOME;
  const pageTheme = getVisualThemeForPath(pathname);

  const themeStyle = {
    '--header-accent': pageTheme.accent,
    '--header-accent-soft': pageTheme.soft,
  } as CSSProperties;

  return (
    <header
      className={[
        'premium-header',
        isHome ? 'premium-header-home' : 'premium-header-page',
        isScrolled ? 'premium-header-scrolled' : 'premium-header-top',
        `premium-header-theme-${pageTheme.name}`,
      ].join(' ')}
      style={themeStyle}
    >
      <div className="premium-header-inner">
        <Link href={ROUTES.HOME} className="premium-brand" aria-label="SM Associate home">
          <img
            src="/sm-associate-exact.webp"
            alt="SM Associate"
            width="210"
            height="53"
            className="premium-brand-logo premium-header-logo"
            fetchPriority="high"
          />
        </Link>

        <nav className="premium-desktop-nav" aria-label="Primary navigation">
          {menuItems.map((item) => (
            <div key={item.label} className="premium-nav-item">
              <Link
                href={item.href}
                className="premium-nav-link"
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
                {item.submenu && <ChevronDown size={15} aria-hidden="true" />}
              </Link>

              {item.submenu && (
                <div className="premium-nav-dropdown">
                  <div className="premium-nav-dropdown-head">
                    <span>FINANCE & MOBILITY</span>
                    <span>06 SERVICES</span>
                  </div>
                  <div className="premium-nav-dropdown-grid">
                    {item.submenu.map((subitem) => {
                      const Icon = subitem.icon;
                      return (
                        <Link key={subitem.label} href={subitem.href} className="premium-nav-subitem">
                          <span className="premium-nav-subicon"><Icon size={17} aria-hidden="true" /></span>
                          <span>
                            <strong>{subitem.label}</strong>
                            <small>Explore service</small>
                          </span>
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="premium-header-actions">
          <a className="premium-icon-link" href="tel:+919790219874" aria-label="Call SM Associate">
            <Phone size={17} />
          </a>
          <a className="premium-icon-link" href="https://wa.me/919790219874" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SM Associate">
            <MessageCircle size={17} />
          </a>
          <Link href={ROUTES.CONTACT} className="premium-header-cta">
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          className="premium-mobile-toggle"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="premium-mobile-panel">
          <div className="premium-mobile-nav">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className="premium-mobile-link premium-mobile-parent"
                      onClick={() => setOpenSubmenu((current) => !current)}
                      aria-expanded={openSubmenu}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={17} className={openSubmenu ? 'rotate-180' : ''} />
                    </button>
                    {openSubmenu && (
                      <div className="premium-mobile-submenu">
                        {item.submenu.map((subitem) => {
                          const Icon = subitem.icon;
                          return (
                            <Link key={subitem.label} href={subitem.href} className="premium-mobile-subitem">
                              <Icon size={17} />
                              <span>{subitem.label}</span>
                              <ArrowUpRight size={14} />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="premium-mobile-link">
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="premium-mobile-actions">
            <a href="tel:+919790219874" className="premium-mobile-action">
              <Phone size={17} /> Call
            </a>
            <a href="https://wa.me/919790219874" target="_blank" rel="noopener noreferrer" className="premium-mobile-action">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <Link href={ROUTES.CONTACT} className="premium-mobile-primary">
              Contact SM Associate <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
