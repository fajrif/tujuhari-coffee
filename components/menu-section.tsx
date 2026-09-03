'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { PillButton } from '@/components/ui/pill-button'
import { menuImages } from '@/lib/menu'
import { externalLinks } from '@/lib/site-config'

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 py-16 lg:py-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 px-5 lg:flex-row lg:items-center lg:px-16">
        <h2 className="font-title text-2xl uppercase tracking-wide text-brand-ink">Explore Our Menu</h2>
        <PillButton href={externalLinks.menuUrl} external className="hidden lg:inline-block">
          What&apos;s On The Menu
        </PillButton>
      </div>

      <Carousel opts={{ loop: true, align: 'start' }}>
        <CarouselContent>
          {menuImages.map((image) => (
            <CarouselItem key={image.id} className="basis-full sm:basis-1/2 lg:basis-1/4">
              <div className="aspect-square overflow-hidden bg-brand-grey/20">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:left-6" />
        <CarouselNext className="right-2 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:right-6" />
      </Carousel>

      <div className="mt-8 flex justify-center px-5 lg:hidden">
        <PillButton href={externalLinks.menuUrl} external>
          What&apos;s On The Menu
        </PillButton>
      </div>
    </section>
  )
}
