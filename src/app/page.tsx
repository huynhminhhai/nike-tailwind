import {
  CustomerReviewSection,
  HeroSection,
  PopularProductsSection,
  ServicesSection,
  SpecialOfferSection,
  SuperQualitySection
} from '@/components'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularProductsSection />
      <SuperQualitySection />
      <ServicesSection />
      <SpecialOfferSection />
      <CustomerReviewSection />
    </main>
  )
}
