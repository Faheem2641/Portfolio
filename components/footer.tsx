"use client"



import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { motion } from "framer-motion"
import Helmet3DModel from "./helmet-3d-model"
import InfiniteLogoSlider from "./infinite-logo-slider"

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial color="#1a1f1a" wireframe />
    </mesh>
  )
}





export default function Footer() {
  return (
    <footer className="bg-lorenzo-accent pt-0 px-4 md:px-8 min-h-[600px] flex flex-col justify-end relative pb-5">
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#f5f1e8] to-lorenzo-accent z-0" />

      {/* Main Dark Card Container */}
      <div className="relative flex-1 flex flex-col w-full max-w-[1688px] mx-auto mt-6 z-10">
        {/* SVG Background Mask */}
        <div
          className="relative w-full h-full z-0 bg-[#0a192f] overflow-hidden"
          style={{
            maskImage: 'url("/images/footer-mask.svg")',
            WebkitMaskImage: 'url("/images/footer-mask.svg")',
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* <AnimatedTextureCanvas /> */}


          <div
            className="absolute inset-0 w-full h-full opacity-60"
            style={{
              backgroundImage: `url("/images/curveb.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Increased padding-x to push content inwards away from mask edges, and added padding-bottom to prevent overflow */}
          <div className="relative z-20 flex flex-col h-full px-8 md:px-24 py-8 md:py-12 md:pb-12 md:pl-0 md:pr-0">
            {/* Main Content Grid */}
            <div className="flex-1 flex flex-col items-center justify-center mt-0">
              {/* Center Column - Helmet & Title */}
              <div className="flex flex-col items-center justify-center relative w-full">
                {/* Typography Overlay - Increased top margin for more spacing */}
                <div className="absolute top-0 left-0 right-0 z-0 text-center transform -translate-y-1/4 md:-translate-y-0 mt-24">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-lorenzo-text-light mix-blend-overlay opacity-90"
                  >
                    <span className="font-sans block">ALWAYS
                      <span className="font-brier text-lorenzo-accent"> BRINGING</span>
                    </span>
                    <span className="font-sans block">
                      THE <span className="font-brier text-lorenzo-accent">FIGHT.</span>
                    </span>
                  </motion.h2>
                </div>

                {/* 3D Helmet Removed */}
                <div className="relative w-full h-[200px] md:h-[300px] z-10 mt-12 md:mt-12 flex items-center justify-center">
                  {/* Placeholder or empty space if needed, or just remove the content */}
                </div>
              </div>
            </div>

            {/* Partners Row */}
            {/* Added mb-8 to ensure logos don't touch the bottom edge of the mask */}
            <div className="border-lorenzo-text-light/10 border-t-0 mb-0 mt-8 pt-0">
              <InfiniteLogoSlider />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col md:flex-row justify-center items-center text-lorenzo-dark text-xs font-bold tracking-wider uppercase">
          <p className="text-xs mt-7 opacity-40 font-medium leading-4 text-center">
            This project was developed by Faheem ali as a portfolio website as a Mechanical Engineer . Inspired by the website of racing
            driver Lando Norris.
          </p>
        </div>
      </div>
    </footer>
  )
}
