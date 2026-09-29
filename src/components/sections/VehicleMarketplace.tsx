import { Car, Bike, Sparkles, PlusCircle, ChevronRight, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const categories = [
  {
    title: 'Pre-Owned Cars',
    desc: 'Sedans, Hatchbacks & Luxury vehicles inspected on 150+ checkpoints',
    icon: Car,
    count: '60+ Available',
    href: `${ROUTES.VEHICLES}?type=car`,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Pre-Owned Two Wheelers',
    desc: 'Bikes & Scooters certified with service history and warranty options',
    icon: Bike,
    count: '40+ Available',
    href: `${ROUTES.VEHICLES}?type=bike`,
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Sell Your Vehicle',
    desc: 'Instant online valuation and fair price purchase with same-day payment',
    icon: PlusCircle,
    count: 'Instant Cash Offer',
    href: ROUTES.SELL_VEHICLE,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function VehicleMarketplace() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
            <Sparkles size={16} className="text-gold-primary" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">BUY, SELL &amp; FINANCE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Find Your Next Vehicle or Sell Yours</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Explore verified cars and bikes with guaranteed documentation, easy financing, and instant resale assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 bg-navy/40 backdrop-blur-sm border border-gold-primary/20 hover:border-gold-primary/50 hover:shadow-xl hover:shadow-gold-primary/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-navy mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="font-bold" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <span className="text-xs font-bold text-navy bg-gradient-gold px-2.5 py-1 rounded-full">{cat.count}</span>
                  </div>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{cat.desc}</p>
                </div>

                <Link
                  href={cat.href}
                  className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-gold-primary text-navy font-semibold text-sm hover:shadow-lg hover:shadow-gold-primary/50 transition-all group/link shadow-md transform hover:scale-105"
                >
                  <span>Explore Now</span>
                  <ArrowUpRight size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-gradient-navy-accent p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gold-primary/20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-gold-primary text-sm font-bold mb-2">
              <ShieldCheck size={18} /> Direct Sale &amp; RC Transfer Included
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Looking to Sell Your Used Car or Bike?</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Get an instant valuation online, doorstep vehicle inspection, free RC transfer, and instant payment into your bank account.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <Link
              href={ROUTES.SELL_VEHICLE}
              className="px-6 py-3 bg-gradient-gold text-navy font-bold rounded-xl hover:shadow-lg hover:shadow-gold-primary/50 transition-all text-center text-sm inline-flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <span>Instant Valuation</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              href={ROUTES.CAR_RESALE}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-center text-sm border border-gold-primary/30 hover:border-gold-primary/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
