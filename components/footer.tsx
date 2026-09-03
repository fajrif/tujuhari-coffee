import { Reveal } from '@/components/reveal'
import { locations } from '@/lib/locations'
import { socialLinks, contactInfo, photoCredits } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="bg-black pb-8 pt-16 text-brand-off-white">
      <div className="px-5 lg:px-16">
        <Reveal direction="up" duration={700}>
          <img src="/images/logo-icon.png" alt="Tu7uhari Coffee" className="mb-14 h-16 w-16 lg:h-20 lg:w-20" />
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-10 max-w-4xl">
          <Reveal direction="up" delay={100} duration={700}>
            <div>
              <h4 className="mb-6 font-title text-lg font-bold uppercase tracking-wide text-white">Contact Us</h4>
              <ul className="space-y-4 text-base text-brand-off-white/80">
                <li>
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {contactInfo.whatsappLabel}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200} duration={700}>
            <div>
              <h4 className="mb-6 font-title text-lg font-bold uppercase tracking-wide text-white">Locations</h4>
              <ul className="space-y-4 text-base text-brand-off-white/80">
                {locations
                  .filter((loc) => loc.status === 'open')
                  .map((loc) => (
                    <li key={loc.id}>
                      <a href={loc.footerMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        {loc.name === 'Our Flagship: Wijaya' ? 'Wijaya' : loc.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={300} duration={700}>
            <div>
              <h4 className="mb-6 font-title text-lg font-bold uppercase tracking-wide text-white">Follow Us</h4>
              <ul className="space-y-4 text-base text-brand-off-white/80">
                <li>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal direction="fade" delay={400} duration={700}>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-white pt-6 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-brand-off-white/80">{photoCredits}</p>
            <p className="shrink-0 text-sm text-brand-off-white/80">All rights reserved</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
