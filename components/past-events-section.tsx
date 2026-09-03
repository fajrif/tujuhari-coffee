'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { events } from '@/lib/event'

export function PastEventsSection() {
  return (
    <section id="past-events" className="scroll-mt-20 py-16 lg:py-20">
      <h2 className="mb-8 pl-5 font-title text-2xl uppercase tracking-wide text-brand-ink lg:pl-16">
        Past Events
      </h2>

      <Carousel opts={{ loop: true, align: 'start' }} className="pl-5 lg:pl-16">
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem key={event.id} className="basis-[85%] sm:basis-1/2 lg:basis-[38%]">
              <div className="aspect-[5/3] overflow-hidden bg-brand-grey/20">
                <img src={event.image} alt={event.alt} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-title text-lg font-bold text-brand-ink">{event.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-ink/70">{event.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:left-6" />
        <CarouselNext className="right-6 size-9 border-transparent bg-brand-ink/70 text-white hover:bg-brand-ink/90 hover:text-white/80 lg:right-10" />
      </Carousel>
    </section>
  )
}
