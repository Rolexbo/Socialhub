import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import AIChat from "@/components/ai-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Social Hub 360 - Espacio multifuncional en Santa Cruz",
  description:
    "Social Hub 360 es un espacio dinámico y flexible que funciona durante todo el día y la noche, adaptándose a las diferentes demandas de los clientes.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
