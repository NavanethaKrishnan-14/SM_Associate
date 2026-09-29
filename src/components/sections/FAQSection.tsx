'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
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

  const [openIndex, setOpenIndex] = useState(0);

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
    <section id={id} className={`faq-unified-section ${className}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="faq-unified-glow faq-unified-glow-one" aria-hidden="true" />
      <div className="faq-unified-glow faq-unified-glow-two" aria-hidden="true" />

      <div className="faq-unified-container">
        {(eyebrow || displayTitle || displaySubtitle) && (
          <div className="faq-unified-heading">
            {eyebrow && (
              <div className="faq-unified-eyebrow">
                <span />
                {eyebrow}
              </div>
            )}
            <h2>{displayTitle}</h2>
            {displaySubtitle && <p>{displaySubtitle}</p>}
          </div>
        )}

        <div className="faq-unified-grid">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={`${faq.question}-${index}`} className={`faq-unified-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-unified-number">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{faq.question}</strong>
                  <ChevronDown size={18} className={isOpen ? 'faq-unified-chevron is-open' : 'faq-unified-chevron'} />
                </button>

                <div
                  className={`faq-unified-answer-wrap ${isOpen ? 'is-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-unified-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-unified-footer">
          {footerNote ? (
            footerNote
          ) : (
            <p>
              Still have questions?{' '}
              <Link href={ROUTES.CONTACT}>
                Talk to our expert team <ArrowRight size={15} />
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
