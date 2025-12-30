import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoupleSection } from "@/components/couple-section"
import { InvitationSection } from "@/components/invitation-section"
import { CeremonySection } from "@/components/ceremony-section"
import { ConfirmationSection } from "@/components/confirmation-section"
import { GiftsSection } from "@/components/gifts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CoupleSection />
      <InvitationSection />
      <CeremonySection />
      <ConfirmationSection />
      <GiftsSection />
      <Footer />
    </main>
  )
}
