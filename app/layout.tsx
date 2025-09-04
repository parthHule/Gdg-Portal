import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Google Developers Event 2025 | Where Innovation Meets Inspiration",
  description:
    "Join developers, innovators, and tech enthusiasts from around the world for Google Developers Event 2025. Experience cutting-edge technology, connect with industry leaders, and shape the future of digital innovation.",
  keywords:
    "Google Developers, Event 2025, Technology Conference, Developer Community, Innovation, Workshops, Networking",
  authors: [{ name: "Google Developers Event Team" }],
  creator: "Google Developers Event",
  publisher: "Google Developers Event",
  robots: "index, follow",
  openGraph: {
    title: "Google Developers Event 2025",
    description: "Where innovation meets inspiration - Join the premier developer event of 2025",
    type: "website",
    locale: "en_US",
    siteName: "Google Developers Event 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Developers Event 2025",
    description: "Where innovation meets inspiration - Register now for the premier developer event",
    creator: "@GoogleDevs",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4285F4",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="loading-spinner w-8 h-8" />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  )
}
