import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Lorem Organization",
  description: "Lorem ipsum privacy policy and data protection information",
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: Lorem ipsum 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Lorem Ipsum Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Lorem Information Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Adipiscing elit sed do eiusmod tempor</li>
              <li>Incididunt ut labore et dolore magna</li>
              <li>Aliqua ut enim ad minim veniam</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Lorem Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Lorem User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Lorem Contact Information</h3>
              <p className="text-gray-700">
                Email: privacy@lorem-organization.com
                <br />
                Phone: +49 8151 987 65 43
                <br />
                Address: Lorem Street 123, 12345 Lorem City
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Lorem Cookies Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Lorem Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
