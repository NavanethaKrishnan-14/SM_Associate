import {
  Home,
  Car,
  Coins,
  Wallet,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Purchase, Construction & Renovation',
    items: ['Easy Approval', 'Flexible Terms', 'Competitive Rates'],
    cta: 'Explore',
    href: ROUTES.HOME_LOAN,
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'New & Used Vehicle Finance',
    items: ['Instant Processing', 'Best Rates', 'Quick Disbursal'],
    cta: 'Apply Now',
    href: ROUTES.CAR_LOAN,
  },
  {
    icon: Coins,
    title: 'Gold Loan',
    description: 'Gold Resale & Redemption',
    items: ['Fair Valuation', 'Quick Cash', 'Transparent Rates'],
    cta: 'Get Valuation',
    href: ROUTES.GOLD_LOAN,
  },
  {
    icon: Wallet,
    title: 'Personal Loan',
    description: 'Quick Personal Funds',
    items: ['No Collateral', 'Instant Disbursal', 'Flexible Terms'],
    cta: 'Check Eligibility',
    href: ROUTES.PERSONAL_LOAN,
  },
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Growth & Working Capital',
    items: ['Business Expansion', 'Working Capital', 'Equipment Finance'],
    cta: 'Learn More',
    href: ROUTES.BUSINESS_LOAN,
  },
  {
    icon: ShieldCheck,
    title: 'Two-Wheeler Insurance',
    description: 'Comprehensive Coverage',
    items: ['Instant Policy', 'Cashless Claims', 'Affordable Premiums'],
    cta: 'Get Insured',
    href: ROUTES.TWO_WHEELER_INSURANCE,
  },
];

export default function FinancialServices() {
  return (
    <section className="py-20 bg-gradient-navy-accent relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
            <div className="w-2 h-2 bg-gold-primary rounded-full" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">OUR SERVICES</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Financial Solutions for
            <span className="block bg-gradient-gold bg-clip-text text-transparent">Every Need</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Choose from our comprehensive range of trusted financial products designed to meet your unique requirements with transparency and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <Link key={service.title} href={service.href}>
                <div
                  className="group h-full p-8 bg-navy/40 backdrop-blur-sm rounded-2xl border border-gold-primary/20 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Premium background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold-primary/50 transition-all">
                      <Icon size={32} className="text-navy font-bold" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-gold-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 font-medium mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-white/70 flex items-center gap-3 font-medium"
                        >
                          <div className="w-1.5 h-1.5 bg-gold-primary rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10 mt-auto pt-4 border-t border-gold-primary/20">
                    <button className="w-full py-3 px-4 font-bold text-gold-primary rounded-lg text-center flex items-center justify-between gap-2 group/cta hover:text-gold-light transition-colors mt-4">
                      <span className="text-base">{service.cta}</span>
                      <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent max-w-2xl mx-auto" />
      </div>
    </section>
  );
}