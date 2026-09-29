'use client';

import Link from 'next/link';
import { ArrowRight, Check, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

const trustPoints = [
  'Transparent guidance from application to approval',
  'Multiple finance & mobility solutions in one place',
  'Local support from our Tirunelveli team',
];

function ThreeDScene() {
  return (
    <div className="premium-hero-3d" aria-hidden="true">
      <div className="premium-orb premium-orb-a" />
      <div className="premium-orb premium-orb-b" />
      <div className="premium-orbit premium-orbit-a" />
      <div className="premium-orbit premium-orbit-b" />
      <div className="premium-card premium-card-back">
        <div className="premium-card-topline">
          <span>SM ASSOCIATE</span>
          <span>01</span>
        </div>
        <div className="premium-card-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="premium-card premium-card-front">
        <div className="premium-card-chip">
          <ShieldCheck size={18} />
        </div>
        <div className="premium-card-title">FINANCE</div>
        <div className="premium-card-number">••••  9790</div>
        <div className="premium-card-meta">
          <span>TRUST</span>
          <span>MOBILITY</span>
          <span>24/7</span>
        </div>
      </div>
      <div className="premium-floating-badge premium-badge-one">
        <span className="premium-badge-dot" />
        Fast &amp; clear
      </div>
      <div className="premium-floating-badge premium-badge-two">
        <Check size={14} />
        Secure process
      </div>
      <div className="premium-scene-base" />
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#06111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(214,179,90,0.20),transparent_26%),radial-gradient(circle_at_18%_80%,rgba(25,198,178,0.12),transparent_26%),linear-gradient(135deg,#06111f_0%,#0a1b2f_48%,#07121f_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b35a]/70 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold tracking-[0.16em] text-[#e6ca7c] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#d6b35a] shadow-[0_0_18px_rgba(214,179,90,.8)]" />
            FINANCE • MOBILITY • LOCAL TRUST
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Finance made
            <span className="block bg-gradient-to-r from-[#f7e4a7] via-[#d6b35a] to-[#8fe3d6] bg-clip-text text-transparent">
              simpler. Mobility made smarter.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            A premium, local-first platform for loans, vehicle buying and selling, insurance, and financial guidance — designed around real people, not paperwork.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.LOANS}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d6b35a] to-[#f0d98d] px-7 py-4 text-sm font-extrabold text-[#07111f] shadow-[0_18px_50px_rgba(214,179,90,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(214,179,90,.32)]"
            >
              Explore Finance
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={ROUTES.VEHICLES}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-extrabold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#d6b35a]/50 hover:bg-white/[0.08]"
            >
              Explore Vehicles
            </Link>
          </div>

          <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ['500+', 'customers served'],
              ['100+', 'vehicles listed'],
              ['24–48h', 'fast processing'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 space-y-2">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d6b35a]/12 text-[#e6ca7c]">
                  <Check size={12} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+919790219874" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:text-white">
              <Phone size={16} className="text-[#d6b35a]" />
              +91 97902 19874
            </a>
            <a href="https://wa.me/919790219874" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:text-white">
              <MessageCircle size={16} className="text-[#8fe3d6]" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hidden min-h-[620px] lg:block">
          <ThreeDScene />
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 md:flex">
        <span className="h-px w-10 bg-white/15" />
        Scroll to explore
        <span className="h-px w-10 bg-white/15" />
      </div>
    </section>
  );
}
