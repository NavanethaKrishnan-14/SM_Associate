'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Heart, Shield, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import AnimatedNumber from '@/components/AnimatedNumber';

export default function AboutHero() {
  const coreValues = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Your financial goals are our mission',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Industry-leading data protection',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Latest fintech solutions for you',
      color: 'from-blue-500 to-slate-600',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent and honest dealings',
      color: 'from-slate-600 to-teal-500',
    },
  ];

  const milestones = [
    { year: '01', text: 'Understand your requirement' },
    { year: '02', text: 'Review the available options' },
    { year: '03', text: 'Prepare the required details' },
    { year: '04', text: 'Move ahead with clarity' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden pt-4 pb-2">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-fuchsia-500" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-fuchsia-500 to-purple-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Financial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                Freedom Together
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              SM Associate is a Tirunelveli-based finance and mobility business focused on making everyday financial and vehicle decisions easier to understand. We keep the conversation practical, explain the important details and help customers choose their next step with confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Company Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Story Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Journey</h2>
              <p className="text-slate-300 leading-relaxed">
                Our approach is simple: start with the customer’s actual requirement, explain the available route clearly and avoid unnecessary complexity. We support enquiries across finance, vehicle resale and related mobility services.
              </p>
              <p className="text-slate-300 leading-relaxed">
                From our base in Tirunelveli, we work with customers who want straightforward guidance before they apply, buy, sell or compare options. The goal is not to make every decision for you; it is to make the information easier to understand so you can make the decision that fits your situation.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-6">
              {[
                { number: '50K+', label: 'Customers' },
                { number: '500M+', label: 'Loans Disbursed' },
                { number: '100+', label: 'Team Members' },
                { number: '50+', label: 'Cities Covered' },
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                    <AnimatedNumber value={stat.number} />
                  </p>
                  <p className="text-sm text-slate-300 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Journey Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                src: '/about/journey/journey-01.jpg',
                alt: 'Professional business meeting in a modern office',
              },
              {
                src: '/about/journey/journey-02.jpg',
                alt: 'Business team reviewing financial strategy together',
              },
              {
                src: '/about/journey/journey-03.jpg',
                alt: 'Professionals collaborating on business planning',
              },
              {
                src: '/about/journey/journey-04.jpg',
                alt: 'Professional team working together in an office',
              },
            ].map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60 shadow-lg group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline/Milestones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20 pt-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12">
            Our Milestones
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-500/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 relative">
                    {milestone.year}
                  </p>
                  <p className="text-slate-300 mt-3 relative">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-12 border-t border-slate-700/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12">
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                  </div>

                  {/* Border Accent */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${value.color} bg-clip-border opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 pt-12 border-t border-slate-700/50"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Have a finance, vehicle or resale requirement? Tell us what you are planning and we will help you understand the practical next steps.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={ROUTES.LOANS}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all inline-block"
              >
                Apply Now
              </Link>
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-3 rounded-lg border border-slate-600 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all inline-block"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
