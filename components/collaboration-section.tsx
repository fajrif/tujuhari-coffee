export function CollaborationSection() {
  return (
    <section id="collaboration" className="scroll-mt-20 pt-16 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="px-5 lg:pl-16">
          <h2 className="mb-6 font-title text-2xl uppercase tracking-wide text-brand-ink">Collaborations</h2>
          <p className="max-w-lg text-lg leading-relaxed text-brand-ink/80">
            Our brand continues to grow through an active presence at community and industry events, where we
            serve fresh beverages through pop-ups and catering services for your events and celebrations. These
            activations help us reach new audiences, strengthen existing relationships, and build meaningful
            visibility while creating additional engagement.
          </p>
        </div>
        <div className="aspect-[3/2] w-full overflow-hidden">
          <img src="/images/img-collaboration.png" alt="Barista serving coffee at a catering pop-up" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
