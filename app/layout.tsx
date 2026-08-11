import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`bg-[#d8d8d8] text-[#1f2937] font-sans antialiased selection:bg-stone-400 selection:text-stone-900 ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
