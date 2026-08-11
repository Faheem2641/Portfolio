import PortfolioNavbar from "@/components/portfolio-clone/navbar"
import PortfolioHero from "@/components/portfolio-clone/hero"
import PortfolioAbout from "@/components/portfolio-clone/about"
import PortfolioExperience from "@/components/portfolio-clone/experience"
import PortfolioProjects from "@/components/portfolio-clone/projects"
import PortfolioSkills from "@/components/portfolio-clone/skills"
import PortfolioContact from "@/components/portfolio-clone/contact"
import PortfolioFooter from "@/components/portfolio-clone/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d8d8d8] text-[#1f2937] selection:bg-stone-400 selection:text-stone-900 overflow-x-hidden p-3 sm:p-6 md:pl-28 lg:pl-32 space-y-6">
      <PortfolioNavbar />
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioContact />
      <PortfolioFooter />
    </main>
  )
}
