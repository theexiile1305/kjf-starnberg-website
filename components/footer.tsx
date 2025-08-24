import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-kjf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LO</span>
              </div>
              <span className="font-bold text-kjf-blue">Lorem Organization</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Access</h3>
            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Footer Navigation">
              <Link href="/angebote" className="text-gray-600 hover:text-kjf-blue transition-colors text-sm">
                Our Services
              </Link>
              <Link href="/aktuelles" className="text-gray-600 hover:text-kjf-blue transition-colors text-sm">
                Latest News
              </Link>
              <Link href="/kontakt" className="text-gray-600 hover:text-kjf-blue transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/spenden" className="text-gray-600 hover:text-kjf-blue transition-colors text-sm">
                Support & Donations
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-kjf-green mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p>Lorem Street 123</p>
                  <p>12345 Lorem City</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-kjf-green flex-shrink-0" />
                <a href="tel:+4981519876543" className="text-sm text-gray-600 hover:text-kjf-blue transition-colors">
                  +49 8151 987 65 43
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-kjf-green flex-shrink-0" />
                <a
                  href="mailto:info@lorem-organization.com"
                  className="text-sm text-gray-600 hover:text-kjf-blue transition-colors"
                >
                  info@lorem-organization.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/loremorganization"
                className="text-gray-600 hover:text-kjf-blue transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/loremorganization"
                className="text-gray-600 hover:text-kjf-blue transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/loremorganization"
                className="text-gray-600 hover:text-kjf-blue transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e. V..</p>
          <nav className="flex space-x-6" role="navigation" aria-label="Legal Navigation">
            <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-kjf-blue transition-colors">
              Datenschutzerklärung
            </Link>
            <Link href="/impressum" className="text-sm text-gray-600 hover:text-kjf-blue transition-colors">
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
