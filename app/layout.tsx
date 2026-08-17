import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono, Silkscreen } from "next/font/google"
import localFont from "next/font/local"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const geistPixel = localFont({
  src: "../public/fonts/GeistPixel-Regular-VariableFont_ELSH.ttf",
  variable: "--font-geist-pixel",
  display: "swap",
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Faheem Ali - Mechanical Engineer",
  description:
    "Portfolio of Faheem Ali, Mechanical Engineer specializing in CAD design, FEA structural analysis, precision manufacturing, and hardware prototyping.",
  keywords: [
    "Faheem Ali",
    "Mechanical Engineer",
    "CAD Design",
    "SolidWorks",
    "ANSYS",
    "FEA Analysis",
    "Precision Machining",
    "Embedded Systems",
    "NUST",
  ],
  authors: [{ name: "Faheem Ali" }],
  openGraph: {
    title: "Faheem Ali - Mechanical Engineer",
    description:
      "Portfolio of Faheem Ali, Mechanical Engineer specializing in CAD design, FEA structural analysis, precision manufacturing, and hardware prototyping.",
    url: "https://faheemali.site/",
    siteName: "Faheem Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faheem Ali - Mechanical Engineer",
    description: "Portfolio of Faheem Ali, Mechanical Engineer specializing in CAD design, FEA analysis, and hardware prototyping.",
    creator: "@Faheem2641",
  },
}

import AccentThemePicker from "@/components/accent-theme-picker"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`bg-[#d8d8d8] text-[#1f2937] font-sans antialiased selection:bg-stone-400 selection:text-stone-900 ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${geistPixel.variable} ${silkscreen.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <AccentThemePicker />
      </body>
    </html>
  )
}
