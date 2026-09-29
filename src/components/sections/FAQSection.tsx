'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_DATA, FAQCategory, FAQItem } from '@/data/faqData';
import { ROUTES } from '@/lib/constants';

interface FAQSectionProps {
  category?: FAQCategory;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  items?: FAQItem[];
  footerNote?: React.ReactNode;
  id?: string;
  className?: string;
  includeSchema?: boolean;
}

export default function FAQSection({
  category = 'home',
  eyebrow,
  title,
  subtitle,
  items,
  footerNote,
  id = 'faq',
  className = '',
  includeSchema = true,
}: FAQSectionProps) {
  const categoryConfig = FAQ_DATA[category] || FAQ_DATA.home;
  const faqItems = items || categoryConfig.items;
  const displayTitle = title ?? categoryConfig.title ?? 'Frequently Asked Questions';
  const displaySubtitle =
    subtitle ?? categoryConfig.subtitle ?? 'Got questions? We have got clear answers.';

  // Track flipped card indexes
  const [flippedIndices, setFlippedIndices] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id={id}
      className={`relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-navy-accent ${className}`}
    >
      {/* Premium background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
              <div className="w-2 h-2 bg-gold-primary rounded-full" />
              <span className="text-gold-primary font-semibold text-sm tracking-wide uppercase">{eyebrow}</span>
            </div>
          )}
          <h2 className="text-5xl md:text-6xl font-black text-white">
            {displayTitle}
          </h2>
          <p className="text-xl md:text-xl text-white/80 max-w-2xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* FAQ Flip Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-5 md:gap-y-3">
          {faqItems.map((faq, index) => {
            const isFlipped = !!flippedIndices[index];
            const formattedIdx = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className={`faq-item faq-flip-card bg-navy/40 backdrop-blur-sm border border-gold-primary/20 hover:border-gold-primary/50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold-primary/20 ${
                  isFlipped ? 'flipped' : ''
                }`}
              >
                <div className="faq-flip-inner">
                  {/* Front Face (Question) */}
                  <div className="faq-flip-face">
                    <button
                      type="button"
                      onClick={() => toggleFlip(index)}
                      aria-expanded={isFlipped}
                      aria-label={`Question: ${faq.question}. Click to see answer.`}
                      className="w-full bg-transparent border-none cursor-pointer flex items-start gap-3 p-4 text-left text-white rounded-2xl group focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-4 hover:bg-gold-primary/5 transition-colors"
                    >
                      <span className="text-sm font-bold text-gold-primary w-6 flex-none pt-1">
                        {formattedIdx}
                      </span>
                      <span className="flex-1 pt-0.5 text-white group-hover:text-gold-light transition-colors duration-200 leading-snug font-semibold text-lg">
                        {faq.question}
                      </span>
                      <span className="w-7 h-7 flex-none flex items-center justify-center mt-1 flex-shrink-0">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="w-5 h-5 transition-transform duration-350 ease-out"
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Back Face (Answer) */}
                  <div className="faq-flip-face faq-flip-back">
                    <button
                      type="button"
                      onClick={() => toggleFlip(index)}
                      aria-expanded={isFlipped}
                      aria-label={`Answer for: ${faq.question}. Click to return to question.`}
                      className="w-full bg-transparent border-none cursor-pointer flex items-start gap-3 p-4 text-left rounded-2xl group focus-visible:outline-2 focus-visible:outline-gold-primary focus-visible:outline-offset-4 hover:bg-gold-primary/5 transition-colors"
                      style={{ transform: 'rotateX(-180deg)' }}
                    >
                      <span className="text-sm text-gold-primary font-bold w-6 flex-none pt-1">
                        {formattedIdx}
                      </span>
                      <span className="flex-1 pt-0.5 text-white/90 font-normal text-base leading-relaxed">
                        {faq.answer}
                      </span>
                      <span className="w-7 h-7 flex-none flex items-center justify-center mt-1 flex-shrink-0">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="w-5 h-5 transition-transform duration-350 ease-out rotate-180"
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Prompt */}
        <div className="text-center mt-12 text-base text-white/80">
          {footerNote ? (
            footerNote
          ) : (
            <p className="m-0">
              Still have questions?{' '}
              <Link
                href={ROUTES.CONTACT}
                className="text-gold-light hover:text-gold-primary font-semibold transition-colors underline"
              >
                Talk to our expert team
              </Link>{' '}
              — we are always here to help.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
