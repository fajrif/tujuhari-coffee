import { PillButton } from '@/components/ui/pill-button'
import { externalLinks } from '@/lib/site-config'

export function FlagshipStoreSection() {
  return (
    <section id="flagship-store" className="scroll-mt-20 bg-brand-grey/25 pb-10 pt-16 lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div>
          <h2 className="mb-6 font-title text-2xl uppercase tracking-wide text-brand-ink">Our Flagship Store</h2>
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
          <video src="https://res.cloudinary.com/sawybqwk/video/upload/fvc:vcodec.h264/v1788446327/space-modules-video.mp4" poster="/images/img-layout.png" className="aspect-square w-full" autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  )
}
