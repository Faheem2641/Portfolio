import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono, Silkscreen } from "next/font/google"
import localFont from "next/font/local"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import AccentThemePicker from "@/components/accent-theme-picker"

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
  weight: "100 900",
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
  weight: ["400", "700"],
})

const siteUrl = "https://faheemali.site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faheem Ali | Mechanical Engineer",
    template: "%s | Faheem Ali",
  },
  description:
    "Official portfolio of Faheem Ali, Mechanical Engineer & Hardware Developer specializing in CAD design, FEA structural analysis, precision manufacturing, embedded IoT systems, and rapid prototyping.",
  keywords: [
    "Faheem Ali",
    "Faheem Ali Portfolio",
    "Faheem Ali Mechanical Engineer",
    "Faheem Ali NUST",
    "Faheem Ali SolidWorks",
    "Faheem Ali CAD",
    "Faheem Ali Islamabad",
    "Faheem Ali Pakistan",
    "faheemali.site",
    "Faheem Ali Mechanical",
    "Mechanical Engineer Portfolio",
    "CAD Design",
    "SolidWorks",
    "ANSYS FEA",
    "Precision Machining",
    "Embedded IoT Systems",
    "Robotics",
  ],
  authors: [{ name: "Faheem Ali", url: siteUrl }],
  creator: "Faheem Ali",
  publisher: "Faheem Ali",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Faheem Ali | Mechanical Engineer & Hardware Innovator",
    description:
      "Official portfolio of Faheem Ali, Mechanical Engineer specializing in CAD design, FEA structural analysis, precision manufacturing, and embedded IoT systems.",
    url: siteUrl,
    siteName: "Faheem Ali Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Faheem",
    lastName: "Ali",
    username: "Faheem2641",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faheem Ali | Mechanical Engineer",
    description:
      "Official portfolio of Faheem Ali, Mechanical Engineer specializing in CAD design, FEA structural analysis, and hardware prototyping.",
    creator: "@Faheem2641",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google71ade6ad4d96497d",
  },
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Faheem Ali",
      givenName: "Faheem",
      familyName: "Ali",
      url: siteUrl,
      email: "faheemali3724@gmail.com",
      jobTitle: "Mechanical Engineer",
      description:
        "Mechanical Engineer specializing in CAD design, FEA structural analysis, precision manufacturing, embedded IoT systems, and rapid prototyping.",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "National University of Sciences and Technology (NUST)",
        sameAs: "https://nust.edu.pk/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressCountry: "Pakistan",
      },
      sameAs: [
        "https://www.linkedin.com/in/faheem-ali-b87293373/",
        "https://github.com/Faheem2641",
        siteUrl,
      ],
      knowsAbout: [
        "Mechanical Engineering",
        "CAD Design & SolidWorks",
        "FEA Analysis",
        "Precision Machining",
        "3D Printing & Additive Manufacturing",
        "Internet of Things (IoT)",
        "Control Engineering",
        "Thermal Systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Faheem Ali Portfolio",
      description: "Official Portfolio of Faheem Ali - Mechanical Engineer & Hardware Innovator",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Faheem Ali - Mechanical Engineer Portfolio",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`bg-[#d8d8d8] text-[#1f2937] font-sans antialiased selection:bg-stone-400 selection:text-stone-900 ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${geistPixel.variable} ${silkscreen.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <AccentThemePicker />
      </body>
    </html>
  )
}

