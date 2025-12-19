import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"


// import SignatureMarqueeSection from "@/components/signature-marquee-section"

import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MasonryGallerySection from "@/components/masonry-gallery-section"
import Image from "next/image"

import { InteractiveSchedule } from "@/components/interactive-schedule"
import { CurveDivider } from "@/components/curve-divider"


export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <MissionSection />

        <CurveDivider topColor="#0a192f" bottomColor="#ffffff" />

        <MasonryGallerySection />

        <CurveDivider topColor="#ffffff" bottomColor="#0a192f" />

        <InteractiveSchedule />

        <CurveDivider topColor="#0a192f" bottomColor="#F5F1E8" />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
