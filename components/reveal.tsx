'use client'

import { useRef, useEffect, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass = {
    up: 'slide-in-from-bottom-8',
    down: 'slide-in-from-top-8',
    left: 'slide-in-from-right-8',
    right: 'slide-in-from-left-8',
    fade: '',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-in fade-in ${dirClass}` : 'opacity-0'} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
