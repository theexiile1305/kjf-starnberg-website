import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Jugendfeuerwehr im Landkreis Starnberg",
  description: "Erfahren Sie mehr über die Kreisjugendfeuerwehr Landkreis Starnberg: Aktivitäten, Termine, Jugendpokal und Kontaktmöglichkeiten für Jugendliche und Eltern.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
