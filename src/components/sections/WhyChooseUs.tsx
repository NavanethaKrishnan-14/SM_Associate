import { Eye, Award, Zap, Users, Headphones, CheckCircle } from 'lucide-react';

const reasons = [
  { 
    icon: Eye, 
    title: 'Transparent Rates', 
    description: 'Complete clarity on all charges with no hidden fees or surprises' 
  },
  { 
    icon: Award, 
    title: 'Quality Verified', 
    description: 'All vehicles & services carefully inspected for your peace of mind' 
  },
  { 
    icon: Zap, 
    title: 'Fast Processing', 
    description: 'Quick approval and disbursal in just 24-48 hours' 
  },
  { 
    icon: Users, 
    title: 'Expert Team', 
    description: 'Professional guidance every step of your financial journey' 
  },
  { 
    icon: Headphones, 
    title: 'Dedicated Support', 
    description: 'Round-the-clock customer service ready to help you' 
  },
  { 
    icon: CheckCircle, 
    title: 'Customer First', 
    description: 'Every solution tailored to meet your specific needs' 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
            <div className="w-2 h-2 bg-gold-primary rounded-full" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">WHY CHOOSE US</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Why SM Associate is Your
            <span className="block bg-gradient-gold bg-clip-text text-transparent">Perfect Partner</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We combine transparency, expertise, and customer care to deliver financial solutions you can trust
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-gold-primary/20 bg-navy/40 backdrop-blur-sm hover:border-gold-primary/50 hover:shadow-2xl hover:shadow-gold-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold-primary/50 transition-all">
                    <Icon size={28} className="text-navy font-bold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white group-hover:text-gold-primary transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed font-medium">
                    {reason.description}
                  </p>

                  {/* Accent dot */}
                  <div className="w-1 h-1 bg-gold-primary rounded-full" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
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
