import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { FileX } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FileX className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. The article you're looking for doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/aktuelles">
                <Button className="bg-kjf-blue hover:bg-kjf-blue/90 text-white">Back to News</Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-kjf-blue text-kjf-blue hover:bg-kjf-blue hover:text-white bg-transparent"
                >
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
