'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Coins, Award } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/lib/constants';
import Testimonials from '@/components/sections/Testimonials';
import VaultContactSection from '@/components/sections/VaultContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function GoldLoanContent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goldLoan = {
    icon: Coins,
    title: 'Gold Loan',
    subtitle: 'Turn Your Gold into Instant Cash',
    description: 'Get fair market value for your gold jewellery with quick approvals, transparent valuation, and instant cash disbursal.',
    features: [
      'Fair market-based valuation',
      'Quick cash disbursal within hours',
      'Transparent process with no hidden charges',
      'Simple and hassle-free documentation',
      'Secure storage of your gold',
      'Option to redeem anytime',
      'Flexible loan tenure options',
      'Competitive interest rates'
    ],
    eligibility: [
      'Age between 18-70 years',
      'Indian citizen or NRI',
      'Valid identity proof (Aadhaar, PAN, Passport)',
      'Ownership of gold jewellery',
      'No income restrictions',
      'Both salaried and self-employed eligible',
      'No employment verification needed',
      'Simple and quick verification process'
    ],
    documents: [
      'Valid ID proof (Aadhaar, Passport, Driving License)',
      'Address proof (Utility bill, Rental agreement)',
      'PAN card (optional but recommended)',
      'Recent passport-sized photographs',
      'Your gold jewellery for valuation',
      'Bank account details for fund transfer',
      'Contact information',
    ],
    benefits: [
      'Instant cash without selling your gold',
      'Transparent valuation based on current market rate',
      'No credit score impact',
      'Flexible repayment tenure',
      'Option to buy more gold during the tenure',
      'Expert valuation by trained professionals',
      'Secure vault storage with insurance',
      'Same-day approval and disbursal possible',
    ]
  };

  return (
    <>
      <section className="py-20 bg-white">
      <div className="container-padded max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Coins size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-navy mb-2">{goldLoan.title}</h1>
                <p className="text-xl text-amber-600 font-semibold">{goldLoan.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{goldLoan.description}</p>
            <div className="mt-6 p-5 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="text-gray-700 font-semibold">
                Need instant cash without selling your precious gold? SM Associate offers transparent gold loan services with fair market valuation, quick approvals, and flexible repayment options. Get cash within hours and keep your gold secure with us. Whether you need funds for personal needs or business, our gold loan is the smart financial solution.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {goldLoan.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={isMounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMounted ? { delay: idx * 0.05, duration: 0.3 } : { duration: 0 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Benefits Highlight */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} className="text-amber-600" />
              <h2 className="text-2xl font-bold text-navy">Why Choose SM Gold Services?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goldLoan.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility & Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Eligibility */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            >
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200 h-full">
                <h2 className="text-2xl font-bold text-navy mb-6">Eligibility Criteria</h2>
                <ul className="space-y-3">
                  {goldLoan.eligibility.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMounted ? { delay: 0.1, duration: 0.5 } : { duration: 0 }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200 h-full">
                <h2 className="text-2xl font-bold text-navy mb-6">Documents Required</h2>
                <ul className="space-y-3">
                  {goldLoan.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMounted ? { duration: 0.5 } : { duration: 0 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200 text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-navy mb-4">Ready to Turn Your Gold into Cash?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get fair market value for your gold jewellery with transparent valuation, quick approvals, and instant cash disbursal. No hidden charges, no complications.
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mx-auto"
            >
              Apply for Gold Loan
              <ChevronRight size={20} />
            </Link>
          </motion.div>

          {/* Other Loan Types */}
          <div className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-navy mb-8">Explore Other Loan Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href={ROUTES.HOME_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-amber-700 transition-colors">Home Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Build your dream home</p>
              </Link>
              <Link
                href={ROUTES.CAR_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-amber-700 transition-colors">Car Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Finance your dream car</p>
              </Link>
              <Link
                href={ROUTES.PERSONAL_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-amber-700 transition-colors">Personal Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Quick personal funds</p>
              </Link>
              <Link
                href={ROUTES.BUSINESS_LOAN}
                className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all group"
              >
                <h3 className="font-bold text-navy group-hover:text-amber-700 transition-colors">Business Loan</h3>
                <p className="text-sm text-gray-600 mt-1">Grow your business</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact Section */}
    <VaultContactSection
      theme="amber-gold"
      brandTag="SM Associate · Gold Services Desk"
      title={
        <>
          Get <em>instant cash</em> for your gold with fair market valuation.
        </>
      }
      subtitle="Turn your precious gold into liquid cash within hours. Transparent valuation, secure storage, flexible repayment, and zero hidden charges."
      stats={[
        { label: 'Gold Loans Approved', target: 1500, suffix: '+' },
        { label: 'Valuation Speed', target: '30 Mins', isStatic: true },
        { label: 'Instant Disbursal', target: '100%', isStatic: true },
      ]}
      formEyebrow="Gold Loan Desk"
      formTitle="Get instant cash for your gold today."
      formSubtitle="Tell us about your gold jewellery — we'll give you the best valuation and quick disbursal."
      reasonLabel="Gold Service Type"
      reasonOptions={[
        { value: 'gold_resale', label: 'Gold Resale' },
        { value: 'gold_loan', label: 'Gold Loan Against Pledge' },
        { value: 'redemption', label: 'Gold Loan Redemption' },
        { value: 'consultation', label: 'Price Consultation' },
      ]}
      defaultReason="gold_loan"
      valueLabel="Approximate Gold Weight / Value"
      valuePlaceholder="e.g. 10 grams or ₹50,000"
      phoneLabel="Phone Number"
      phonePlaceholder="+91 97902 19874"
      messagePlaceholder="Describe your gold items (jewellery type, weight estimate, purity), or any questions about valuation..."
      submitButtonText="Submit Gold Loan Request"
    />

    {/* FAQ Section */}
    <FAQSection category="loans" />

    {/* Testimonials Section */}
    <Testimonials />
    </>
  );
}
