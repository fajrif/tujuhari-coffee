'use client'

import { motion } from 'motion/react'
import { heroCopy } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20 px-5 pb-5 pt-20 lg:px-16 lg:pb-10 lg:pt-24">
      <div className="w-full overflow-hidden">
        <motion.img
          src="/images/hero-mobile-banner.png"
          alt="Stacked Tu7uhari Coffee branded paper cups with description"
          className="w-full lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="/images/hero-banner.png"
          alt="Stacked Tu7uhari Coffee branded paper cups"
          className="hidden w-full lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <motion.p
        className="mt-6 font-body text-base leading-relaxed text-brand-ink lg:text-center lg:mx-auto lg:max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {heroCopy}
      </motion.p>
    </section>
  )
}
