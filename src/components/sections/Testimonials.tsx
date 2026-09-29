"use client";

import dynamic from "next/dynamic";
import testimonialData from "@/data/testimonialdata";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Star } from "lucide-react";

// Dynamically import Marquee with no SSR to avoid hydration mismatch
const Marquee = dynamic(
  () => import("react-fast-marquee").then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => <div className="h-[300px]" />,
  }
);

export default function Testimonial() {
  return (
    <section className="bg-gradient-navy-accent text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Premium background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
            <div className="w-2 h-2 bg-gold-primary rounded-full" />
            <span className="text-gold-primary font-semibold text-sm tracking-wide">CUSTOMER STORIES</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Trusted by Thousands of
            <span className="block bg-gradient-gold bg-clip-text text-transparent">Satisfied Customers</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Real experiences from real customers. See why SM Associate is the preferred choice for finance and mobility.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with side fade gradient masks */}
      <div
        className="w-full relative py-6 pb-12"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <Marquee speed={36} pauseOnHover={true} gradient={false} className="py-4 overflow-visible">
          {testimonialData.map((item, index) => {
            const isEven = index % 2 === 1;
            const tiltClass = isEven ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";

            return (
              <article
                key={item.id}
                tabIndex={0}
                className={`group relative flex-none w-[320px] mx-3.5 bg-navy/50 backdrop-blur-sm rounded-2xl px-6 pt-6 pb-8 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/30 border border-gold-primary/20 hover:border-gold-primary/50 hover:-translate-y-2 transition-all duration-300 ${tiltClass}`}
              >
                {/* Header with label and rating */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gold-primary uppercase tracking-widest">
                      {item.category}
                    </p>
                    <p className="font-black text-lg text-white leading-snug">
                      {item.service}
                    </p>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-gold-primary text-gold-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent my-4" />

                {/* Amount Paid */}
                <div className="mb-4">
                  <p className="text-xs text-white/60 font-semibold mb-1">Amount Processed</p>
                  <p className="text-3xl font-black text-gold-primary">
                    {item.amount}
                  </p>
                </div>

                {/* Quote Message */}
                <blockquote className="m-0 mb-5 text-white/90 text-sm leading-relaxed font-medium min-h-[80px]">
                  &ldquo;{item.message}&rdquo;
                </blockquote>

                {/* Customer Details */}
                <div className="flex items-center gap-3 pt-4 border-t border-gold-primary/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-gold text-navy font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-white leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5 leading-tight truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            );
          })}
        </Marquee>
      </div>

      {/* Trust Metrics */}
      <div className="max-w-6xl mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-navy/40 backdrop-blur-sm rounded-2xl border border-gold-primary/20 text-white text-center hover:shadow-lg hover:shadow-gold-primary/20 transition-all">
            <p className="text-4xl font-black text-gold-primary mb-2">
              <AnimatedNumber value="500" />+
            </p>
            <p className="font-semibold text-white/90">Customers Served</p>
          </div>

          <div className="p-8 bg-navy/40 backdrop-blur-sm rounded-2xl border border-gold-primary/20 text-white text-center hover:shadow-lg hover:shadow-gold-primary/20 transition-all">
            <p className="text-4xl font-black text-gold-primary mb-2">
              <AnimatedNumber value="4.9" decimals={1} />
              <span className="text-2xl">/5</span>
            </p>
            <p className="font-semibold text-white/90">Average Rating</p>
          </div>

          <div className="p-8 bg-navy/40 backdrop-blur-sm rounded-2xl border border-gold-primary/20 text-white text-center hover:shadow-lg hover:shadow-gold-primary/20 transition-all">
            <p className="text-4xl font-black text-gold-primary mb-2">
              <AnimatedNumber value="24" />-48h
            </p>
            <p className="font-semibold text-white/90">Fast Approval</p>
          </div>

          <div className="p-8 bg-navy/40 backdrop-blur-sm rounded-2xl border border-gold-primary/20 text-white text-center hover:shadow-lg hover:shadow-gold-primary/20 transition-all">
            <p className="text-4xl font-black text-gold-primary mb-2">
              <AnimatedNumber value="0" />%
            </p>
            <p className="font-semibold text-white/90">Hidden Fees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
