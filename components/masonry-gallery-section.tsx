"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { galleryImages } from "@/lib/gallery-data"

// Gallery section with fixed spacing to prevent overlap

export default function MasonryGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Y Movement: Move grid up to reveal all images
  // Starts at 0vh and moves up to -80vh to show bottom images
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-80vh"])

  const column1 = galleryImages.filter((_, i) => i % 3 === 0)
  const column2 = galleryImages.filter((_, i) => i % 3 === 1)
  const column3 = galleryImages.filter((_, i) => i % 3 === 2)

  return (
    <section
      ref={sectionRef}
      id="masonry-gallery"
      className="relative"
      style={{
        maxHeight: "120vh",
      }}
    >
      <div className="sticky top-0 h-auto w-full overflow-hidden bg-white">
        <motion.div style={{ y }} className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-2 pb-12">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              {column1.map((image, index) => (
                <MasonryCard key={`col1-${index}`} image={image} index={index * 3} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              {column2.map((image, index) => (
                <MasonryCard key={`col2-${index}`} image={image} index={index * 3 + 1} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              {column3.map((image, index) => (
                <MasonryCard key={`col3-${index}`} image={image} index={index * 3 + 2} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MasonryCard({ image, index }: { image: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ${image.title === "CLUBS & SOCIETIES" ? "bg-white" : "bg-gray-900/20"} border-2 border-transparent w-full ${image.aspect} group`}
    >
      <Link href={`/projects/${image.slug}`} className="block w-full h-full">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`${image.title === "CLUBS & SOCIETIES" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={95}
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
          <p className="text-white text-sm font-medium tracking-wide uppercase">{image.title}</p>
        </div>
      </Link>
    </motion.div>
  )
}
