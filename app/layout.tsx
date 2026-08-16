import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono, Pixelify_Sans, Silkscreen } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "block",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "block",
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "block",
  weight: ["400", "500", "600", "700"],
})

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-geist-pixel",
  display: "block",
  weight: ["400", "500", "600", "700"],
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "block",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Faheem Ali - Full Stack AI Engineer | React TypeScript Next.js Developer",
  description:
    "Full Stack AI Engineer specializing in React, TypeScript, Next.js, Python, and LangChain. NUST graduate building innovative full-stack and AI applications.",
  keywords: [
    "Faheem Ali",
    "Full Stack AI Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Python",
    "LangChain",
    "NUST Islamabad",
  ],
  authors: [{ name: "Faheem Ali" }],
  openGraph: {
    title: "Faheem Ali - Full Stack AI Engineer | React TypeScript Developer",
    description:
      "Full Stack AI Engineer specializing in React, TypeScript, Next.js, Python, and LangChain. NUST graduate building innovative apps.",
    url: "https://faheemali.dev/",
    siteName: "Faheem Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faheem Ali - Full Stack AI Engineer",
    description: "Full Stack AI Engineer specializing in React, TypeScript, Next.js, Python, and LangChain.",
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
        className={`bg-[#d8d8d8] text-[#1f2937] font-sans antialiased selection:bg-stone-400 selection:text-stone-900 ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pixelifySans.variable} ${silkscreen.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <AccentThemePicker />
      </body>
    </html>
  )
}
