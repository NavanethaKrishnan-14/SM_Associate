'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Home, Car, Coins, User, Briefcase, Shield, Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useTheme } from '@/contexts/ThemeContext';
import { getThemeForPath } from '@/config/pageThemes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    const path = pathname === '/' ? '/' : `/${pathname.split('/')[1] || ''}`;
    setTheme(getThemeForPath(path));
    setIsOpen(false);
    setOpenSubmenu(null);
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
      className="sticky top-0 z-[9999] border-b border-white/10 backdrop-blur-2xl"
      style={{ background: 'color-mix(in srgb, var(--header-bg) 88%, transparent)', color: 'var(--header-color)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.07),transparent_60%)]" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <Link href={ROUTES.HOME} className="group flex min-w-0 items-center gap-3">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0d98d] via-[#d6b35a] to-[#9a7830] text-sm font-black text-[#07111f] shadow-[0_8px_28px_rgba(214,179,90,.2)]">
            SM
          </span>
          <span className="hidden sm:block min-w-0">
            <span className="block text-sm font-black tracking-[0.16em]">SM ASSOCIATE</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Finance &amp; Mobility</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white/72 transition hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
                {item.submenu && <ChevronDown size={15} className="text-white/35 transition group-hover:rotate-180" />}
              </Link>

              {item.submenu && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[420px] rounded-2xl border border-white/10 bg-[#081521]/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,.42)] backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-1">
                      {item.submenu.map((subitem) => {
                        const Icon = subitem.icon;
                        return (
                          <Link key={subitem.label} href={subitem.href} className="group/item flex items-center gap-3 rounded-xl p-3 text-sm text-white/75 transition hover:bg-white/[0.06] hover:text-white">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04]">
                              <Icon size={17} className="text-[#d6b35a]" />
                            </span>
                            <span className="flex-1">{subitem.label}</span>
                            <ArrowUpRight size={14} className="opacity-0 transition group-hover/item:opacity-100" />
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

        <div className="hidden items-center gap-2 md:flex">
          <a href="tel:+919790219874" aria-label="Call us" className="rounded-xl border border-white/10 p-2.5 text-white/60 transition hover:border-[#d6b35a]/40 hover:bg-white/[0.05] hover:text-[#e6ca7c]">
            <Phone size={17} />
          </a>
          <a href="https://wa.me/919790219874" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" className="rounded-xl border border-white/10 p-2.5 text-white/60 transition hover:border-[#d6b35a]/40 hover:bg-white/[0.05] hover:text-[#e6ca7c]">
            <MessageCircle size={17} />
          </a>
          <Link href={ROUTES.CONTACT} className="ml-1 rounded-xl bg-gradient-to-r from-[#d6b35a] to-[#f0d98d] px-5 py-2.5 text-sm font-extrabold text-[#07111f] shadow-[0_12px_32px_rgba(214,179,90,.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(214,179,90,.28)]">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-2.5 text-white/75 transition hover:bg-white/[0.05] lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="relative border-t border-white/10 bg-[#07121f]/98 px-4 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-white/6 last:border-0">
                {item.submenu ? (
                  <>
                    <button type="button" onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)} className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-white/80">
                      {item.label}
                      <ChevronDown size={16} className={openSubmenu === item.label ? 'rotate-180 text-[#e6ca7c]' : 'text-white/35'} />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="grid grid-cols-1 gap-1 pb-2">
                        {item.submenu.map((subitem) => {
                          const Icon = subitem.icon;
                          return (
                            <Link key={subitem.label} href={subitem.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white">
                              <Icon size={16} className="text-[#d6b35a]" />
                              {subitem.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center py-3.5 text-sm font-semibold text-white/80 transition hover:text-white">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href={ROUTES.CONTACT} onClick={() => setIsOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d6b35a] to-[#f0d98d] px-5 py-3 text-sm font-extrabold text-[#07111f]">
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
