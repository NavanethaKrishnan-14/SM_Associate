import { CheckCircle, FileText, Headphones, Zap } from 'lucide-react';

const steps = [
  { number: '01', title: 'Choose Your Service', description: 'Select a loan or vehicle', icon: CheckCircle },
  { number: '02', title: 'Submit Your Details', description: 'Provide basic information', icon: FileText },
  { number: '03', title: 'Get Assistance', description: 'Our team reviews and guides', icon: Headphones },
  { number: '04', title: 'Complete Transaction', description: 'Finalize your deal', icon: Zap },
];

export default function HowItWorks() {
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
            <div className="w-2 h-2 bg-gold-primary rounded-full" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">PROCESS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">How It Works</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Simple 4-step process to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-primary/30 to-gold-primary/10 border border-gold-primary/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-gold-primary/50 transition-all">
                    <Icon size={24} className="text-gold-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-gradient-to-r from-gold-primary/50 to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
