import { Users, Car, Zap, CheckCircle } from 'lucide-react';
import { STATISTICS } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

const stats = [
  { icon: Users, label: 'Customers Trusted', value: STATISTICS.customersServed },
  { icon: Car, label: 'Vehicles Available', value: STATISTICS.vehiclesListed },
  { icon: Zap, label: 'Fast Approval', value: STATISTICS.processingTime },
  { icon: CheckCircle, label: 'Satisfaction Rate', value: STATISTICS.trustRating },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gold-light text-lg max-w-2xl mx-auto">
            Our numbers speak to our commitment to excellence and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-gold-primary/20 bg-gradient-to-br from-navy via-navy-royal/30 to-navy hover:border-gold-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-primary/20 hover:-translate-y-2"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                
                {/* Icon container */}
                <div className="relative z-10 w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-navy font-bold" />
                </div>

                {/* Value */}
                <div className="relative z-10 mb-3">
                  <p className="text-4xl md:text-5xl font-black text-gold-primary">
                    <AnimatedNumber value={stat.value} />
                  </p>
                </div>

                {/* Label */}
                <p className="text-white/90 font-semibold text-base">{stat.label}</p>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent max-w-2xl mx-auto" />
      </div>
    </section>
  );
}
