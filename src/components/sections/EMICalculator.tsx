'use client';

import { useState, useCallback, memo, useEffect } from 'react';
import { calculateEMI, formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const EMICalculator = memo(function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7.5);
  const [tenure, setTenure] = useState(60);
  // isMounted prevents Intl.NumberFormat locale formatting from running during
  // SSR, where Node.js ICU slim builds can produce different output than the
  // browser, causing a hydration mismatch.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const handlePrincipalChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrincipal(Number(e.target.value));
  }, []);

  const handleRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  }, []);

  const handleTenureChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTenure(Number(e.target.value));
  }, []);

  const emi = calculateEMI(principal, rate, tenure);
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - principal;

  // Deterministic fallback used on the server (and first client render before
  // hydration) so server and client HTML always match.
  const fmt = (n: number) => isMounted ? formatCurrency(n) : `₹${n}`;

  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Premium background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-primary rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <div>
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30">
                <div className="w-2 h-2 bg-gold-primary rounded-full" />
                <span className="text-gold-primary font-semibold text-sm tracking-wide">CALCULATOR</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white">Loan EMI Calculator</h2>
            </div>

            <form className="space-y-6">
              {/* Loan Amount */}
              <fieldset>
                <label htmlFor="principal" className="block text-sm font-semibold text-white/80 mb-2">
                  Loan Amount: {fmt(principal)}
                </label>
                <input
                  id="principal"
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="w-full h-2 bg-navy-royal rounded-lg appearance-none cursor-pointer"
                  aria-label="Select loan amount"
                />
                <input
                  type="number"
                  value={principal}
                  onChange={handlePrincipalChange}
                  className="w-full mt-2 px-4 py-2 border border-gold-primary/30 rounded-lg bg-navy/40 text-white placeholder-white/50"
                  aria-label="Enter loan amount manually"
                />
              </fieldset>

              {/* Interest Rate */}
              <fieldset>
                <label htmlFor="rate" className="block text-sm font-semibold text-white/80 mb-2">
                  Interest Rate: {rate.toFixed(2)}% p.a.
                </label>
                <input
                  id="rate"
                  type="range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={rate}
                  onChange={handleRateChange}
                  className="w-full h-2 bg-navy-royal rounded-lg appearance-none cursor-pointer"
                  aria-label="Select interest rate"
                />
              </fieldset>

              {/* Tenure */}
              <fieldset>
                <label htmlFor="tenure" className="block text-sm font-semibold text-white/80 mb-2">
                  Loan Tenure: {tenure} months ({(tenure / 12).toFixed(1)} years)
                </label>
                <input
                  id="tenure"
                  type="range"
                  min="12"
                  max="360"
                  step="12"
                  value={tenure}
                  onChange={handleTenureChange}
                  className="w-full h-2 bg-navy-royal rounded-lg appearance-none cursor-pointer"
                  aria-label="Select loan tenure"
                />
              </fieldset>

              {/* Submit Button */}
              <Link
                href={ROUTES.CONTACT}
                className="w-full mt-8 py-3 bg-gradient-gold text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-primary/50 transition-all block text-center transform hover:scale-105"
              >
                Get Personalized Assistance
              </Link>
            </form>
          </div>

          {/* Results */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {/* EMI Box */}
                <div
                  className="p-6 bg-gradient-to-br from-gold-primary/20 to-gold-primary/10 rounded-xl border-2 border-gold-primary/40"
                  role="region"
                  aria-label="Monthly EMI result"
                >
                  <p className="text-white/70 text-sm mb-2">Monthly EMI</p>
                  <p className="text-4xl font-bold text-gold-primary">{fmt(emi)}</p>
                </div>

                {/* Total Interest */}
                <div
                  className="p-6 bg-gradient-to-br from-navy-royal/30 to-navy-royal/10 rounded-xl border border-gold-primary/20"
                  role="region"
                  aria-label="Total interest amount"
                >
                  <p className="text-white/70 text-sm mb-2">Total Interest</p>
                  <p className="text-3xl font-bold text-gold-light">{fmt(totalInterest)}</p>
                </div>

                {/* Total Payable */}
                <div
                  className="p-6 bg-gradient-to-br from-navy/40 to-navy/20 rounded-xl border border-gold-primary/20"
                  role="region"
                  aria-label="Total payable amount"
                >
                  <p className="text-white/70 text-sm mb-2">Total Payable Amount</p>
                  <p className="text-3xl font-bold text-white">{fmt(totalPayable)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

EMICalculator.displayName = 'EMICalculator';
export default EMICalculator;
