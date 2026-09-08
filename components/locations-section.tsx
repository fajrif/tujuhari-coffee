'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { locations } from '@/lib/locations'

export function LocationsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="locations" className="scroll-mt-20 py-16 lg:py-20">
      <h2 className="mb-8 px-5 font-title text-2xl uppercase tracking-wide text-brand-ink lg:px-16">
        Our Locations
      </h2>

      <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-3 lg:px-16">
        {locations.map((loc, i) => {
          const isOpen = loc.status === 'open'
          return (
            <Reveal key={loc.id} direction="up" delay={i * 100} className="h-full">
              <div className="flex h-full flex-col bg-brand-off-white p-4">
                <div
                  className="mb-4 aspect-[4/3] w-full overflow-hidden bg-brand-grey cursor-pointer"
                  onMouseEnter={() => isOpen && setHoveredId(loc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => isOpen && loc.mapsUrl && window.open(loc.mapsUrl, '_blank')}
                >
                  {loc.image && (
                    <motion.img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover"
                      animate={{ scale: hoveredId === loc.id ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-title text-xl font-bold text-brand-ink">{loc.name}</h3>
                    <PillButton href={isOpen ? loc.mapsUrl : undefined} variant={isOpen ? 'green' : 'disabled'} external className="shrink-0 px-10 py-1.5 text-xs">
                      Maps
                    </PillButton>
                  </div>
                  <div className="mb-10 space-y-0.5 text-base text-brand-ink/70">
                    {loc.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    {isOpen ? (
                      <>
                        <a href={loc.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                          <img src="/images/icons/whatsapp.png" alt="" className="h-8 w-8" />
                        </a>
                        <a href={loc.gofoodUrl} target="_blank" rel="noopener noreferrer" aria-label="GoFood">
                          <img src="/images/icons/gofood.png" alt="" className="h-8 w-8" />
                        </a>
                        <a href={loc.shopeefoodUrl} target="_blank" rel="noopener noreferrer" aria-label="ShopeeFood">
                          <img src="/images/icons/shopee-food.png" alt="" className="h-8 w-8" />
                        </a>
                        <a href={loc.grabfoodUrl} target="_blank" rel="noopener noreferrer" aria-label="GrabFood">
                          <img src="/images/icons/grab-food.png" alt="" className="h-8" />
                        </a>
                      </>
                    ) : (
                      <>
                        <img src="/images/icons/whatsapp.png" alt="" className="h-8 w-8 opacity-40" />
                        <img src="/images/icons/gofood.png" alt="" className="h-8 w-8 opacity-40" />
                        <img src="/images/icons/shopee-food.png" alt="" className="h-8 w-8 opacity-40" />
                        <img src="/images/icons/grab-food.png" alt="" className="h-8 opacity-40" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

