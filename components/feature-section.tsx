'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { features } from '@/lib/features'

export function FeatureSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="signature" className="scroll-mt-20 py-16">
      <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-3 lg:gap-6 lg:px-16">
        {features.map((feature, i) => (
          <Reveal key={feature.id} direction="up" delay={i * 100}>
            <div
              className="relative min-h-[400px] overflow-hidden group lg:min-h-0 lg:h-[420px] lg:overflow-hidden lg:cursor-pointer"
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.img
                src={feature.image}
                alt={feature.alt}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ scale: hoveredId === feature.id ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute left-4 top-4 py-2.5 font-title text-xl uppercase tracking-wide text-white lg:text-2xl z-10">
                {feature.label}
              </span>
              {/* Mobile: Always full overlay */}
              <div className="lg:hidden aspect-[4/3] absolute inset-x-0 bottom-0 bg-black/70 p-6">
                <p className="text-sm leading-relaxed text-white/90">
                  {feature.body}
                </p>
              </div>
              {/* Desktop: Animated overlay */}
              <motion.div
                className="hidden lg:flex absolute inset-x-0 bottom-0 bg-black/70 p-6 items-end overflow-hidden"
                animate={{ height: hoveredId === feature.id ? 'auto' : 80 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-sm leading-relaxed text-white/90 transition-all duration-300 ${
                  hoveredId === feature.id ? '' : 'line-clamp-2'
                }`}>
                  {feature.body}
                </p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
