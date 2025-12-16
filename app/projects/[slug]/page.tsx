import { galleryImages } from "@/lib/gallery-data"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EducationSection from "@/components/education-section"
import VolunteerSection from "@/components/volunteer-section"
import ClubsSocietiesSection from "@/components/clubs-societies-section"
import ResearchSection from "@/components/research-section"
import WebDevelopmentSection from "@/components/web-development-section"
import InventorSection from "@/components/inventor-section"
import Image from "next/image"
import { notFound } from "next/navigation"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return galleryImages.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = galleryImages.find(
        (p) => p.slug === slug
    )

    if (!project) {
        notFound()
    }

    // Special handling for education page
    if (slug === "education") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <EducationSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Special handling for volunteer page
    if (slug === "volunteer") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <VolunteerSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Special handling for clubs and societies page
    if (slug === "clubs-and-societies") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <ClubsSocietiesSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Special handling for research page
    if (slug === "research") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <ResearchSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Special handling for web development page
    if (slug === "web-development") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <WebDevelopmentSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Special handling for autodesk inventor page
    if (slug === "autodesk-inventor") {
        return (
            <main className="relative bg-lorenzo-dark min-h-screen">
                <Header />

                <div className="pt-20">
                    <InventorSection />
                </div>

                <Footer />
            </main>
        )
    }

    // Default project page layout
    return (
        <main className="relative bg-lorenzo-dark min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl">
                        <Image
                            src={project.src}
                            alt={project.alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-6 text-lorenzo-text-light">
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
                            {project.title}
                        </h1>

                        <div className="h-1 w-20 bg-lorenzo-accent" />

                        <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                            {project.description || "No description available for this project."}
                        </p>

                        <div className="mt-8">
                            <a
                                href="/#masonry-gallery"
                                className="inline-flex items-center gap-2 text-lorenzo-accent font-bold uppercase tracking-wider hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
