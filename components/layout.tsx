import type { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
