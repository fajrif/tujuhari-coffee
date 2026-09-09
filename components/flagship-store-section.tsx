'use client'

import { useEffect, useRef } from 'react'
import { PillButton } from '@/components/ui/pill-button'
import { externalLinks } from '@/lib/site-config'

export function FlagshipStoreSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // iOS Safari sometimes ignores the declarative autoplay attribute (shows a
    // play button instead) unless muted is also set as a JS property and play()
    // is called imperatively after mount.
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <section id="flagship-store" className="scroll-mt-20 bg-[#BDBFBF] py-10">
      <div className="grid grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div className="lg:ml-20">
          <h2 className="mb-6 font-title text-2xl uppercase tracking-wide text-brand-ink">Our Space</h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-brand-ink/80">
            Our flagship store is a modular coffee space designed to support productivity, connection, and
            creativity. With a mini-amphitheater, working area, artist wall, small stage, DJ booth, and curated
            books and records, the space is made to move with every kind of moment.
          </p>
          <PillButton href={externalLinks.reservationUrl} external>
            Inquiries &amp; Reservation
          </PillButton>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/sawybqwk/video/upload/v1788870502/space-modules-video-2.mp4"
            poster="/images/img-layout.png"
            className="aspect-square w-full"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
          />
        </div>
      </div>
    </section>
  )
}
