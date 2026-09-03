'use client'

import { motion } from 'motion/react'
import { navLinks } from '@/lib/site-config'

interface NavOverlayProps {
  onClose: () => void
}

export function NavOverlay({ onClose }: NavOverlayProps) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[80] bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        className="fixed inset-y-0 right-0 z-[90] flex w-full flex-col bg-brand-ink p-8 sm:w-[420px] sm:p-12"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <nav className="my-24 flex flex-col gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="font-title text-xl tracking-tight text-brand-off-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <img src="/images/logo-white.png" alt="Tu7uhari Coffee" className="w-36" />
      </motion.div>
    </>
  )
}
