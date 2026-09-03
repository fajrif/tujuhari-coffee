import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeatureSection } from '@/components/feature-section'
import { MenuSection } from '@/components/menu-section'
import { LocationsSection } from '@/components/locations-section'
import { FlagshipStoreSection } from '@/components/flagship-store-section'
import { GallerySection } from '@/components/gallery-section'
import { PastEventsSection } from '@/components/past-events-section'
import { CollaborationSection } from '@/components/collaboration-section'
import { PartnersSection } from '@/components/partners-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <MenuSection />
        <LocationsSection />
        <FlagshipStoreSection />
        <GallerySection />
        <PastEventsSection />
        <CollaborationSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}
