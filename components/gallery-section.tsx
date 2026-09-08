'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { galleryImages } from '@/lib/gallery'

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-20 pb-0 pt-16">
      <h2 className="mb-8 text-center font-title text-2xl uppercase tracking-wide text-brand-ink">
        Space Gallery
      </h2>

      <Carousel opts={{ loop: true, align: 'center' }}>
        <CarouselContent>
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="basis-[80%] sm:basis-[60%] lg:basis-[54%]">
              <div className="w-full overflow-hidden aspect-[16/9]">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:left-6" />
        <CarouselNext className="right-6 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:right-10" />
      </Carousel>
    </section>
  )
}
