'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { NavOverlay } from '@/components/nav-overlay'

// Classic 3-bar hamburger that morphs into an X: top/bottom bars rotate ±45°
// and converge to the middle, middle bar fades out.
function MenuToggleIcon({ open }: { open: boolean }) {
  const reduce = useReducedMotion()
  const transition = reduce ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }

  return (
    <span className="relative block h-4 w-5">
      <motion.span
        className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-0 bottom-0 h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={transition}
      />
    </span>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-white">
      <div className="relative flex h-20 w-full items-center justify-between px-5 lg:px-16">
        <Link href="#hero" aria-label="Tu7uhari Coffee home" className="flex items-center">
          <img src="/images/logo.png" alt="Tu7uhari Coffee" className="h-8 w-auto lg:h-9" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="relative z-[110] flex h-10 w-10 items-center justify-center text-brand-ink"
        >
          <MenuToggleIcon open={isOpen} />
        </button>
      </div>

      <AnimatePresence>{isOpen && <NavOverlay onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </header>
  )
}
