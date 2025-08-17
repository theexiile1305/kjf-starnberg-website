import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: "Legal Notice - Lorem Organization",
  description: "Lorem ipsum legal notice and imprint information",
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-kjf-blue hover:text-kjf-green transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Homepage</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Notice</h1>
          <p className="text-gray-600">Lorem ipsum legal information</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Organization Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Organization Name:</strong> Lorem Organization e.V.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Address:</strong> Lorem Street 123, 12345 Lorem City, Germany
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Phone:</strong> +49 8151 987 65 43
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Email:</strong> info@lorem-organization.com
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Registration:</strong> Lorem Registry Court, Registration Number: VR 12345
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Tax ID:</strong> DE123456789
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Responsible Person</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Name:</strong> Lorem Ipsum Director
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Position:</strong> Executive Director
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Email:</strong> director@lorem-organization.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Disclaimer</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Link Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Copyright</h3>
            <p className="text-gray-700 leading-relaxed">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Data Protection Officer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est, 
              qui dolorem ipsum quia dolor sit amet.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Name:</strong> Lorem Data Protection Officer
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Email:</strong> datenschutz@lorem-organization.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Phone:</strong> +49 8151 987 65 44
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lorem Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
              aliquam quaerat voluptatem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
              ex ea commodi consequatur.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
