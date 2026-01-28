import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectDetailView from "@/components/project-detail-view"
import { ansysProjects } from "@/lib/cad-data"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return ansysProjects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function AnsysProjectPage({ params }: PageProps) {
    const { slug } = await params
    const project = ansysProjects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="bg-[#151921]"> {/* Consistent background wrapper */}
            <Header />
            <ProjectDetailView
                project={project}
                backLink="/projects/ansys" // Or section anchor if prefered
                backLabel="Ansys Projects"
            />
            <Footer />
        </main>
    )
}
