"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/angebote" },
    { name: "News", href: "/aktuelles" },
    { name: "Contact", href: "/kontakt" },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Lorem Organization Homepage">
            <div className="w-10 h-10 bg-kjf-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LO</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-kjf-blue">Lorem Organization</span>
              <p className="text-sm text-kjf-green">Professional Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-kjf-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-kjf-green hover:bg-kjf-green/90 text-white">Donate</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-kjf-blue hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-kjf-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-kjf-green hover:bg-kjf-green/90 text-white mt-4 w-full">Donate</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
