'use client';

import { motion } from 'framer-motion';
import { Car, ChevronRight, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function CarLoanHero() {
  const highlights = [
    { icon: Zap, label: 'Instant Approval', value: 'on eligible applications' },
    { icon: Clock, label: 'Quick Disbursal', value: 'after approval' },
    { icon: Car, label: 'Any Vehicle', value: 'new or pre-owned' },
  ];

  return (
    <section 
      className="relative min-h-[480px] h-auto text-white overflow-hidden pt-4 pb-2"
      style={{
        background: 'var(--hero-gradient)',
      }}
    >
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            backgroundColor: 'var(--accent-color)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            backgroundColor: 'var(--accent-color)',
          }}
        />
      </div>

      {/* Premium grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-6 sm:py-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <Car size={18} style={{ color: 'var(--accent-color)' }} />
              <span className="font-semibold text-sm" style={{ color: 'var(--accent-color)' }}>Premium Car Financing</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Get Behind
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)`,
                  backgroundClip: 'text',
                }}
              >
                The Wheel
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl font-semibold mb-3" style={{ color: 'var(--accent-light)' }}>Drive Your Dream Car Today.</p>
            </motion.div>

            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
              Finance your dream car with competitive rates, flexible tenure, and instant approval. Whether new or pre-owned, we make car ownership affordable and accessible.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl transition-all border hover:border-[var(--accent-color)]"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      borderColor: 'var(--border-accent)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--accent-color)', marginBottom: '12px' }} />
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    <p className="font-semibold text-sm text-white">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Interest Rate Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 p-6 backdrop-blur border rounded-xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Starting Interest Rate</p>
                  <div 
                    className="text-4xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)`,
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedNumber value="7.2%" decimals={1} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>No prepayment penalty</p>
                  <p className="font-semibold" style={{ color: 'var(--accent-color)' }}>EMI-friendly terms</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 font-semibold rounded-xl transition-all flex items-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_30px_var(--button-hover-shadow)]"
                style={{
                  background: 'var(--button-bg)',
                  color: 'var(--button-text)',
                }}
              >
                Apply for Car Loan
              </Link>
              <Link
                href={ROUTES.EMI_CALCULATOR}
                className="px-8 py-4 border-2 font-semibold rounded-xl transition-all flex items-center gap-2 text-lg hover:bg-[var(--accent-soft)]"
                style={{
                  borderColor: 'var(--accent-color)',
                  color: 'var(--accent-color)',
                }}
              >
                <span>Check Eligibility</span>
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Car Dashboard Style */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* Car silhouette container */}
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative w-full aspect-square"
            >
              {/* Main card with car visualization */}
              <div 
                className="w-full h-full rounded-3xl p-12 flex flex-col justify-center items-center relative overflow-hidden border-2"
                style={{
                  background: `linear-gradient(to bottom right, var(--accent-soft), rgba(0, 0, 0, 0.3))`,
                  borderColor: 'var(--border-accent)',
                }}
              >
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" style={{ color: 'var(--accent-color)' }} />
                  </svg>
                </div>

                {/* Car visualization */}
                <motion.div
                  animate={{ x: [0, 20, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative z-10 mb-8"
                >
                  <Car size={120} style={{ color: 'var(--accent-color)' }} />
                </motion.div>

                {/* Stats */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Premium Car Financing</h3>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div 
                      className="p-3 rounded-lg border"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'var(--border-accent)',
                      }}
                    >
                      <p className="font-bold" style={{ color: 'var(--accent-color)' }}><AnimatedNumber value="7.2%" decimals={1} /></p>
                      <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Interest Rate</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg border"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'var(--border-accent)',
                      }}
                    >
                      <p className="font-bold" style={{ color: 'var(--accent-color)' }}><AnimatedNumber value="7" suffix=" Years" /></p>
                      <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Max Tenure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  borderWidth: '2px',
                  borderColor: 'var(--border-accent)',
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}