"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import NewsCard from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
import { getAllArticles } from "@/lib/news-data"

export default function AktuellesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Lorem", "Ipsum", "Dolor", "Consectetur", "Adipiscing"]

  const allNews = getAllArticles().map((article) => ({
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    category: article.category,
    link: `/aktuelles/${article.slug}`,
    image: article.image,
  }))

  const filteredNews = allNews.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-kjf-green text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-kjf-blue hover:bg-kjf-blue/90"
                      : "border-kjf-blue text-kjf-blue hover:bg-kjf-blue hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredNews.length} {filteredNews.length === 1 ? "article found" : "articles found"}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <NewsCard
                  key={`${article.title}-${index}`}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  category={article.category}
                  image={article.image}
                  link={article.link}
                  delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600 mb-6">Try different search terms or select a different category.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="border-kjf-blue text-kjf-blue hover:bg-kjf-blue hover:text-white"
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't Miss Any Updates</h2>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button className="bg-kjf-green hover:bg-kjf-green/90 text-white">Subscribe Newsletter</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
