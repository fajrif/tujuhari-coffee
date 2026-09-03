import { partners } from '@/lib/partners'

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-20 py-16 lg:py-20">
      <div className="px-5 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
            {partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.image}
                alt={partner.name}
                className="h-auto max-h-18 w-full object-contain object-center"
              />
            ))}
          </div>
          <p className="text-lg leading-relaxed text-brand-ink/80 px-4 lg:px-6">
            Our B2B white-label solutions are fully customizable to match your taste preferences and business needs.
            Tailored with your company brand identity or campaign, our products are crafted to deliver quality,
            convenience, and a seamless brand experience.
          </p>
        </div>
      </div>
    </section>
  )
}
