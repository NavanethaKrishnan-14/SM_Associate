'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Hand,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

const resaleBenefits = [
  {
    icon: Scale,
    title: 'Transparent valuation',
    description: 'Understand the valuation factors and the offer before you decide to proceed.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear communication',
    description: 'A simple process with the important details explained in plain language.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure handling',
    description: 'Your gold is handled carefully throughout the assessment and transaction process.',
  },
  {
    icon: Hand,
    title: 'Resale-focused support',
    description: 'Guidance built around selling gold—not taking a loan against it.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Share the details',
    description: 'Tell us what you have, the approximate weight, and what kind of support you need.',
  },
  {
    number: '02',
    title: 'Get a valuation',
    description: 'Our team reviews the eligible gold items and explains the relevant valuation factors.',
  },
  {
    number: '03',
    title: 'Review the offer',
    description: 'Go through the valuation and transaction details clearly before making a decision.',
  },
  {
    number: '04',
    title: 'Complete the sale',
    description: 'Once you are comfortable with the terms, complete the required verification and sale formalities.',
  },
];

const preparationItems = [
  'Gold jewellery or other eligible gold items for assessment',
  'A valid identity document for verification',
  'Basic ownership or purchase information, where available',
  'Bank details if electronic payment is agreed for the transaction',
];

export default function GoldResaleContent() {
  return (
    <>
      <section className="gold-resale-section">
        <div className="gold-resale-container">
          <div className="gold-resale-intro">
            <div className="gold-resale-section-label">
              <span />
              A CLEARER WAY TO SELL GOLD
            </div>
            <h2>Sell gold with clarity, not guesswork.</h2>
            <p>
              Gold resale is different from a gold loan. You are choosing to sell eligible gold
              items rather than pledge them as security. SM Associate helps you understand the
              valuation journey, required verification, and transaction steps before you proceed.
            </p>
          </div>

          <div className="gold-resale-benefit-grid">
            {resaleBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="gold-resale-benefit-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="gold-resale-card-icon">
                    <Icon size={20} />
                  </div>
                  <span className="gold-resale-card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gold-resale-section gold-resale-section-alt">
        <div className="gold-resale-container">
          <div className="gold-resale-heading-row">
            <div>
              <div className="gold-resale-section-label">
                <span />
                HOW GOLD RESALE WORKS
              </div>
              <h2>A simple four-step journey.</h2>
            </div>
            <p>
              The goal is straightforward: help you understand the resale process before you
              commit to a transaction.
            </p>
          </div>

          <div className="gold-resale-process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="gold-resale-process-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div className="gold-resale-process-top">
                  <span>{step.number}</span>
                  <ArrowRight size={16} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gold-resale-section">
        <div className="gold-resale-container">
          <div className="gold-resale-prep-grid">
            <div className="gold-resale-prep-copy">
              <div className="gold-resale-section-label">
                <span />
                BEFORE YOU VISIT
              </div>
              <h2>Come prepared for a smoother valuation.</h2>
              <p>
                Having a few basic details ready can make the assessment conversation easier. The
                exact documents or verification steps may vary depending on the transaction.
              </p>
              <Link href={ROUTES.CONTACT} className="gold-resale-inline-cta">
                Ask about your valuation
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="gold-resale-prep-card">
              <div className="gold-resale-prep-card-head">
                <div className="gold-resale-card-icon">
                  <FileCheck2 size={20} />
                </div>
                <div>
                  <span>WHAT TO BRING</span>
                  <strong>Basic details for assessment</strong>
                </div>
              </div>
              <div className="gold-resale-prep-list">
                {preparationItems.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gold-resale-section gold-resale-section-dark">
        <div className="gold-resale-container">
          <div className="gold-resale-callout">
            <div className="gold-resale-callout-mark">
              <Sparkles size={20} />
            </div>
            <div>
              <span>IMPORTANT DISTINCTION</span>
              <h2>Resale means you sell the gold. A gold loan means you pledge it.</h2>
              <p>
                This page is dedicated to resale enquiries. Our team can explain the transaction
                route, valuation factors, and required verification so you can decide how you want
                to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VaultContactSection
        theme="amber-gold"
        brandTag="SM Associate · Gold Resale Desk"
        title={
          <>
            Start with a <em>clear gold valuation</em>.
          </>
        }
        subtitle="Share a few details about your gold items and our team can guide you through the resale enquiry."
        stats={[
          { label: 'Valuation Approach', target: 'Clear', isStatic: true },
          { label: 'Transaction Route', target: 'Resale', isStatic: true },
          { label: 'Local Support', target: 'Tirunelveli', isStatic: true },
        ]}
        formEyebrow="Gold Resale Enquiry"
        formTitle="Tell us what you would like to sell."
        formSubtitle="Share the approximate weight, item type, and your preferred way to connect."
        reasonLabel="Enquiry Type"
        reasonOptions={[
          { value: 'gold_resale', label: 'Gold Resale' },
          { value: 'valuation', label: 'Valuation Enquiry' },
          { value: 'purity_check', label: 'Purity / Assessment Question' },
          { value: 'consultation', label: 'General Consultation' },
        ]}
        defaultReason="gold_resale"
        valueLabel="Approximate Weight / Expected Value"
        valuePlaceholder="e.g. 10 grams or ₹50,000"
        phoneLabel="Phone Number"
        phonePlaceholder="+91 97902 19874"
        messagePlaceholder="Describe your gold items (for example: jewellery type, approximate weight, purity if known) and any questions you have."
        submitButtonText="Request Gold Valuation"
      />

      <FAQSection category="goldResale" />
      <Testimonials />
    </>
  );
}
