'use client'

import { motion } from 'motion/react'
import { heroCopy } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20 px-5 pb-5 pt-20 lg:px-16 lg:pb-10 lg:pt-24">
      <div className="relative flex aspect-[1397/737] w-full items-end overflow-hidden">
        <motion.img
          src="/images/hero-banner.png"
          alt="Stacked Tu7uhari Coffee branded paper cups"
          className="absolute inset-0 h-full w-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <motion.div
          className="relative z-10 max-w-3xl p-5 lg:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-body text-base leading-relaxed text-white/90">{heroCopy}</p>
        </motion.div>
      </div>
    </section>
  )
}
