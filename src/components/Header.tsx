'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Home, Car, Coins, User, Briefcase, Shield, Phone, MessageCircle } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useTheme } from '@/contexts/ThemeContext';
import { getThemeForPath } from '@/config/pageThemes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { setTheme } = useTheme();

  // Auto-set theme based on current path
  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.split('/')[1] ? `/${pathname.split('/')[1]}` : '/';
    const theme = getThemeForPath(path);
    setTheme(theme);
  }, [pathname, setTheme]);

  const menuItems = useMemo(() => [
    { label: 'Home', href: ROUTES.HOME },
    {
      label: 'Services',
      href: ROUTES.LOANS,
      submenu: [
        { label: 'Home Loan', href: ROUTES.HOME_LOAN, icon: Home },
        { label: 'Car Loan', href: ROUTES.CAR_LOAN, icon: Car },
        { label: 'Gold Loan', href: ROUTES.GOLD_LOAN, icon: Coins },
        { label: 'Personal Loan', href: ROUTES.PERSONAL_LOAN, icon: User },
        { label: 'Business Loan', href: ROUTES.BUSINESS_LOAN, icon: Briefcase },
        { label: 'Two Wheeler Insurance', href: ROUTES.TWO_WHEELER_INSURANCE, icon: Shield },
      ],
    },
    { label: 'Vehicles', href: ROUTES.VEHICLES },
    { label: 'Sell Vehicle', href: ROUTES.CAR_RESALE },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Contact', href: ROUTES.CONTACT },
  ], []);

  return (
    <header
      className="sticky top-0 z-[9999] transition-all duration-300 w-full overflow-visible relative"
      style={{
        background: 'var(--header-bg)',
        color: 'var(--header-color)',
      }}
    >
      {/* Premium gradient overlays - matching Hero section */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{
          backgroundColor: 'var(--accent-color)',
        }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15" style={{
          backgroundColor: 'var(--accent-color)',
        }} />
      </div>

      {/* Premium grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(212,175,55,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-visible relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-3 flex-shrink-0 min-w-0">
            <div 
              className="w-11 h-11 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 font-black text-lg"
              style={{
                background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)',
                color: 'var(--primary-color)',
              }}
            >
              SM
            </div>
            <div className="hidden sm:block min-w-0">
              <h1 className="font-black text-lg transition-colors" style={{ color: 'var(--header-color)' }}>
                SM ASSOCIATE
              </h1>
              <p className="text-xs font-semibold opacity-90 tracking-wide" style={{ color: 'var(--accent-light)' }}>
                FINANCE & MOBILITY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group flex-shrink-0">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-semibold transition-all whitespace-nowrap text-sm px-4 py-2 rounded-lg"
                  style={{
                    color: 'var(--header-color)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--header-color)';
                  }}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} aria-hidden="true" />}
                </Link>

                {/* Premium Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div 
                      className="backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl divide-y w-max p-2"
                      style={{
                        backgroundColor: 'rgba(var(--primary-color-rgb, 7, 26, 43), 0.95)',
                        borderColor: 'var(--border-accent)',
                        borderWidth: '1px',
                      }}
                    >
                      <div className="grid grid-cols-2 gap-0">
                        {item.submenu.map((subitem) => {
                          const Icon = subitem.icon;
                          return (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="group/item flex items-center gap-3 px-5 py-4 transition-all duration-200 text-sm rounded-lg m-1"
                              style={{ color: 'var(--header-color)' }}
                            >
                              <div 
                                className="p-2.5 rounded-lg group-hover/item:transition-colors"
                                style={{
                                  backgroundColor: 'var(--primary-color)',
                                }}
                              >
                                {Icon && (
                                  <Icon 
                                    size={18} 
                                    className="group-hover/item:scale-110 transition-transform" 
                                    style={{ color: 'var(--accent-color)' }}
                                    aria-hidden="true" 
                                  />
                                )}
                              </div>
                              <span 
                                className="font-semibold group-hover/item:transition-colors"
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = 'var(--accent-color)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = 'var(--header-color)';
                                }}
                              >
                                {subitem.label}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Premium CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href="tel:+919790219874"
              className="p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center"
              style={{
                borderColor: 'var(--border-accent)',
                borderWidth: '1px',
                color: 'var(--accent-color)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a
              href="https://wa.me/919790219874"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center"
              style={{
                borderColor: 'var(--border-accent)',
                borderWidth: '1px',
                color: 'var(--accent-color)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="WhatsApp us"
            >
              <MessageCircle size={18} />
            </a>
            <Link href={ROUTES.CONTACT}>
              <button 
                className="px-6 py-2.5 font-bold rounded-xl transition-all text-sm whitespace-nowrap transform hover:scale-105"
                style={{
                  background: 'var(--button-bg)',
                  color: 'var(--button-text)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px var(--button-hover-shadow)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg transition-colors flex-shrink-0"
            style={{
              color: 'var(--accent-color)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-6 overflow-visible relative z-[9999]" style={{ borderTopColor: 'var(--border-accent)', borderTopWidth: '1px' }}>
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between font-semibold transition-colors"
                    style={{ color: 'var(--header-color)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--header-color)';
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--accent-color)' }}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full text-left px-4 py-3 flex items-center font-semibold transition-colors"
                    style={{ color: 'var(--header-color)' }}
                  >
                    <span onClick={() => setIsOpen(false)}>{item.label}</span>
                  </Link>
                )}

                {item.submenu && openSubmenu === item.label && (
                  <div 
                    className="pl-4 overflow-visible relative z-[9999] py-2"
                    style={{
                      backgroundColor: 'rgba(11, 34, 57, 0.5)',
                      borderLeftColor: 'var(--border-accent)',
                      borderLeftWidth: '2px',
                    }}
                  >
                    {item.submenu.map((subitem) => {
                      const Icon = subitem.icon;
                      return (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="group/mobile flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm"
                          style={{ color: 'var(--header-color)' }}
                        >
                          <Icon size={18} style={{ color: 'var(--accent-color)' }} aria-hidden="true" />
                          <span 
                            className="font-semibold"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--accent-color)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--header-color)';
                            }}
                          >
                            {subitem.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 mt-4 space-y-2">
              <a
                href="https://wa.me/919790219874"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 font-bold rounded-lg shadow-md transition-all"
                style={{
                  background: 'var(--button-bg)',
                  color: 'var(--button-text)',
                }}
              >
                WhatsApp Us
              </a>
              <Link
                href={ROUTES.CONTACT}
                className="block text-center w-full py-3 font-semibold rounded-lg transition-all"
                style={{
                  borderColor: 'var(--accent-color)',
                  borderWidth: '1px',
                  color: 'var(--accent-color)',
                }}
              >
                <span onClick={() => setIsOpen(false)}>Contact Us</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
