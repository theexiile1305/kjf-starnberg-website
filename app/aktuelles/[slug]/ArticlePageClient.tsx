"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getArticleBySlug } from "@/lib/news-data"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePageClient({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <Layout>
      {/* Article Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link href="/aktuelles">
            <Button variant="ghost" className="mb-6 text-kjf-blue hover:text-kjf-blue/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-kjf-green/10 text-kjf-green text-sm font-medium rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{article.excerpt}</p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="text-kjf-blue hover:text-kjf-blue/80">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto prose prose-lg prose-gray max-w-none"
          >
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          </motion.article>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Read More Articles</h2>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <Link href="/aktuelles">
              <Button className="bg-kjf-blue hover:bg-kjf-blue/90 text-white">View All News</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
