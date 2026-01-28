import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectDetailView from "@/components/project-detail-view"
import { inventorProjects } from "@/lib/cad-data"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return inventorProjects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function InventorProjectPage({ params }: PageProps) {
    const { slug } = await params
    const project = inventorProjects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="bg-[#151921]"> {/* Consistent background wrapper */}
            <Header />
            <ProjectDetailView
                project={project}
                backLink="/projects/autodesk-inventor" // Or section anchor
                backLabel="Inventor Projects"
            />
            <Footer />
        </main>
    )
}
