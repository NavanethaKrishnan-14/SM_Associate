'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '@/lib/constants';

const services = [
  ['Home Loan', ROUTES.HOME_LOAN],
  ['Car Loan', ROUTES.CAR_LOAN],
  ['Gold Loan', ROUTES.GOLD_LOAN],
  ['Personal Loan', ROUTES.PERSONAL_LOAN],
  ['Business Loan', ROUTES.BUSINESS_LOAN],
  ['Two Wheeler Insurance', ROUTES.TWO_WHEELER_INSURANCE],
] as const;

const company = [
  ['About Us', ROUTES.ABOUT],
  ['Vehicles', ROUTES.VEHICLES],
  ['Sell Vehicle', ROUTES.CAR_RESALE],
  ['EMI Calculator', ROUTES.EMI_CALCULATOR],
  ['Blog & News', ROUTES.BLOG],
  ['Contact Us', ROUTES.CONTACT],
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(214,179,90,.10),transparent_28%),radial-gradient(circle_at_8%_92%,rgba(25,198,178,.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.8fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0d98d] via-[#d6b35a] to-[#9a7830] text-sm font-black text-[#07111f]">SM</span>
              <div>
                <div className="text-sm font-black tracking-[0.16em]">SM ASSOCIATE</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">Finance &amp; Mobility</div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              A trusted local platform for finance and mobility solutions in Tirunelveli — built to make borrowing, buying, and selling simpler.
            </p>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-3">
              {[
                ['500+', 'Customers'],
                ['100+', 'Vehicles'],
                ['24–48h', 'Processing'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
                  <div className="text-lg font-black text-white">{value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#e6ca7c]">Services</h3>
            <div className="mt-5 space-y-2">
              {services.map(([label, href]) => (
                <Link key={label} href={href} className="group flex items-center justify-between rounded-lg py-1.5 text-sm text-white/50 transition hover:text-white">
                  {label}
                  <ArrowUpRight size={14} className="text-[#d6b35a] opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#e6ca7c]">Explore</h3>
            <div className="mt-5 space-y-2">
              {company.map(([label, href]) => (
                <Link key={label} href={href} className="group flex items-center justify-between rounded-lg py-1.5 text-sm text-white/50 transition hover:text-white">
                  {label}
                  <ArrowUpRight size={14} className="text-[#d6b35a] opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#e6ca7c]">Talk to us</h3>
            <div className="mt-5 space-y-3">
              <a href="tel:+919790219874" className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition hover:border-[#d6b35a]/30">
                <Phone size={18} className="mt-0.5 text-[#d6b35a]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">Phone</div>
                  <div className="mt-1 text-sm font-bold text-white/80">+91 97902 19874</div>
                </div>
              </a>
              <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition hover:border-[#d6b35a]/30">
                <Mail size={18} className="mt-0.5 text-[#d6b35a]" />
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">Email</div>
                  <div className="mt-1 break-all text-sm font-bold text-white/80">{COMPANY_INFO.supportEmail}</div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                <MapPin size={18} className="mt-0.5 text-[#8fe3d6]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">Visit</div>
                  <div className="mt-1 text-sm font-bold leading-6 text-white/70">{COMPANY_INFO.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-4 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <div>© 2026 SM Associate &amp; Cars. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={ROUTES.PRIVACY_POLICY} className="transition hover:text-white/70">Privacy</Link>
            <Link href={ROUTES.TERMS_CONDITIONS} className="transition hover:text-white/70">Terms</Link>
            <Link href={ROUTES.DISCLAIMER} className="transition hover:text-white/70">Disclaimer</Link>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-lg border border-white/10 px-3 py-2 font-bold text-white/60 transition hover:border-white/20 hover:text-white">
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
