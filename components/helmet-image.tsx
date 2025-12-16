"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"

export default function HelmetImage() {
    // Mouse position state
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring animation for rotation
    // Adjusting ranges to match the subtle 3D effect: ~15 degrees tilt
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 50, damping: 20 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 50, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            // Normalize mouse position from -0.5 to 0.5
            const newX = (e.clientX / windowWidth) - 0.5
            const newY = (e.clientY / windowHeight) - 0.5

            x.set(newX)
            y.set(newY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [x, y])

    return (
        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative w-[80%] h-[80%] md:w-full md:h-full flex items-center justify-center"
            >
                <div className="relative w-full h-full max-w-[400px] max-h-[400px] md:max-w-[500px] md:max-h-[500px]">
                    <Image
                        src="/images/4.png"
                        alt="Faheem Ali Helmet"
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    )
}
