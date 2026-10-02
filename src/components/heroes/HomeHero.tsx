'use client';

import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function HomeHero() {
  return (
    <section 
      className="relative min-h-screen text-white overflow-hidden pt-8 pb-0"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-2">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  borderColor: 'var(--border-accent)',
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'var(--accent-color)',
                  }}
                />
                <span 
                  className="font-semibold text-sm tracking-wide"
                  style={{
                    color: 'var(--accent-color)',
                  }}
                >
                  WELCOME TO PREMIUM FINANCE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                Your Trusted Partner for
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--accent-color) 0%, var(--accent-light) 100%)`,
                    backgroundClip: 'text',
                  }}
                >
                  Finance & Mobility
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl max-w-xl leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
              Access home loans, car financing, personal loans, gold resale, and premium pre-owned vehicles through one trusted platform. Fast approval in 24-48 hours with transparent rates and minimal paperwork.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                { stat: '500+', label: 'Happy Customers' },
                { stat: '100+', label: 'Vehicles Listed' },
                { stat: '24-48h', label: 'Fast Approval' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl border bg-white/5 backdrop-blur-sm"
                  style={{
                    borderColor: 'var(--border-accent)',
                  }}
                >
                  <p className="text-3xl font-black" style={{ color: 'var(--accent-color)' }}>{item.stat}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={ROUTES.LOANS} className="group relative overflow-hidden">
                <button 
                  className="relative px-8 py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:scale-105 hover:shadow-[0_0_30px_var(--button-hover-shadow)]"
                  style={{
                    background: 'var(--button-bg)',
                    color: 'var(--button-text)',
                  }}
                >
                  Get Started Today
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href={ROUTES.VEHICLES} className="group">
                <button 
                  className="px-8 py-4 border-2 font-bold rounded-xl hover:bg-[var(--accent-soft)] transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                  style={{
                    borderColor: 'var(--accent-color)',
                    color: 'var(--accent-color)',
                  }}
                >
                  Explore Vehicles
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Contact Quick Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80">
                <Phone size={17} style={{ color: 'var(--accent-color)' }} />
                <a href="tel:+919790219874" className="font-semibold">+91 97902 19874</a>
                <span aria-hidden="true">, </span>
                <a href="tel:+919047007720" className="font-semibold">+91 90470 07720</a>
              </span>
              <a
                href="https://wa.me/919790219874"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-white transition-all hover:bg-[var(--accent-soft)] hover:border-[var(--accent-color)]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'var(--border-accent)',
                }}
              >
                <MessageCircle size={18} style={{ color: 'var(--accent-color)' }} />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual - Premium Hero Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center relative h-[600px]">
            <div 
              className="absolute inset-0 rounded-3xl blur-2xl"
              style={{
                backgroundColor: 'var(--accent-light)',
                opacity: 0.2,
              }}
            />
            
            {/* Premium card container */}
            <div 
              className="relative w-full max-w-md h-96 rounded-3xl overflow-hidden shadow-2xl border backdrop-blur-sm"
              style={{
                borderColor: 'var(--border-accent)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              
              {/* Placeholder for premium image - replace with actual image */}
              <div 
                className="w-full h-full flex flex-col items-center justify-center space-y-4 p-8"
                style={{
                  background: `linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%)`,
                }}
              >
                <div className="space-y-4 w-full">
                  <div 
                    className="h-32 rounded-2xl border flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      borderColor: 'var(--border-accent)',
                    }}
                  >
                    <div className="text-center">
                      <p className="font-black text-3xl" style={{ color: 'var(--accent-color)' }}>PREMIUM</p>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Finance Solutions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-6">
                    <div className="h-4 rounded-full w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <div className="h-4 rounded-full w-5/6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <div className="h-4 rounded-full w-4/6" style={{ backgroundColor: 'var(--accent-soft)' }} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    {[
                      { title: 'Fast', desc: 'Quick Approval' },
                      { title: 'Secure', desc: '100% Safe' },
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-lg border"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'var(--border-accent)',
                        }}
                      >
                        <p className="font-bold" style={{ color: 'var(--accent-color)' }}>{item.title}</p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-10"
                style={{
                  backgroundColor: 'var(--accent-color)',
                }}
              />
              <div 
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-10"
                style={{
                  backgroundColor: 'var(--accent-color)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 animate-bounce-soft">
        <p className="text-sm font-semibold" style={{ color: 'var(--accent-light)' }}>Scroll to explore</p>
        <div 
          className="w-6 h-10 rounded-full flex justify-center p-2"
          style={{
            borderWidth: '2px',
            borderColor: 'var(--accent-light)',
          }}
        >
          <div 
            className="w-1 h-2 rounded-full animate-pulse"
            style={{
              backgroundColor: 'var(--accent-color)',
            }}
          />
        </div>
      </div>
    </section>
  );
}