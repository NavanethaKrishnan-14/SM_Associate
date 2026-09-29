'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Coins, Scale, ShieldCheck } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

export default function GoldResaleHero() {
  return (
    <section className="gold-resale-hero">
      <div className="gold-resale-hero-grid" aria-hidden="true" />
      <div className="gold-resale-hero-glow gold-resale-hero-glow-one" aria-hidden="true" />
      <div className="gold-resale-hero-glow gold-resale-hero-glow-two" aria-hidden="true" />

      <div className="gold-resale-hero-shell">
        <motion.div
          className="gold-resale-hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="gold-resale-eyebrow">
            <span className="gold-resale-eyebrow-dot" />
            SM ASSOCIATE · GOLD RESALE
          </div>

          <h1>
            Turn your gold
            <span>into clear value.</span>
          </h1>

          <p>
            A straightforward way to explore the resale value of eligible gold items with
            transparent valuation, clear communication, and local support in Tirunelveli.
          </p>

          <div className="gold-resale-hero-actions">
            <Link href={ROUTES.CONTACT} className="gold-resale-primary-cta">
              Start Gold Valuation
              <ArrowUpRight size={17} />
            </Link>
            <Link href={ROUTES.CONTACT} className="gold-resale-secondary-cta">
              Talk to our team
            </Link>
          </div>

          <div className="gold-resale-hero-notes">
            <span>
              <Scale size={15} />
              Valuation-led process
            </span>
            <span>
              <ShieldCheck size={15} />
              Clear & secure handling
            </span>
          </div>
        </motion.div>

        <motion.div
          className="gold-resale-hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          <div className="gold-resale-visual-frame">
            <div className="gold-resale-visual-ring gold-resale-visual-ring-one" />
            <div className="gold-resale-visual-ring gold-resale-visual-ring-two" />

            <motion.div
              className="gold-resale-coin"
              animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Coins size={116} strokeWidth={1.2} />
            </motion.div>

            <div className="gold-resale-visual-copy">
              <span>GOLD RESALE</span>
              <strong>Value the metal.<br />Understand the offer.</strong>
              <small>
                Bring your eligible gold items for a transparent valuation discussion before
                completing a sale.
              </small>
            </div>

            <div className="gold-resale-visual-pillar gold-resale-visual-pillar-one">
              <span>01</span>
              <strong>ASSESS</strong>
            </div>
            <div className="gold-resale-visual-pillar gold-resale-visual-pillar-two">
              <span>02</span>
              <strong>REVIEW</strong>
            </div>
            <div className="gold-resale-visual-pillar gold-resale-visual-pillar-three">
              <span>03</span>
              <strong>SELL</strong>
            </div>

            <div className="gold-resale-visual-line" />
            <div className="gold-resale-visual-mark">SM</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
