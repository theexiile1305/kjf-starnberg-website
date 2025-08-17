"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import Hero from "@/components/hero"
import ServiceCard from "@/components/service-card"
import NewsCard from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, GraduationCap, MessageCircle, ArrowRight, Target, Handshake, Shield } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Lorem Ipsum Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Users,
      link: "/angebote#jugendhilfe",
    },
    {
      title: "Consectetur Adipiscing",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: Heart,
      link: "/angebote#inklusion",
    },
    {
      title: "Sed Do Eiusmod",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: GraduationCap,
      link: "/angebote#schulen",
    },
    {
      title: "Tempor Incididunt",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      icon: MessageCircle,
      link: "/angebote#beratung",
    },
  ]

  const news = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      excerpt:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "March 15, 2024",
      category: "Lorem",
      link: "/aktuelles/lorem-ipsum-2024",
    },
    {
      title: "Consectetur Adipiscing Elit",
      excerpt:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      date: "March 8, 2024",
      category: "Ipsum",
      link: "/aktuelles/consectetur-2024",
    },
    {
      title: "Sed Do Eiusmod Tempor",
      excerpt:
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      date: "March 1, 2024",
      category: "Dolor",
      link: "/aktuelles/sed-do-eiusmod",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Handshake,
      title: "Our Values",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Shield,
      title: "Our Promise",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Lorem Ipsum Dolor Sit Amet"
        subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        ctaText="Learn More"
        ctaLink="#angebote"
      />

      {/* Services Section */}
      <section id="angebote" className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="news-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="news-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((article, index) => (
              <NewsCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                link={article.link}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-kjf-blue text-kjf-blue hover:bg-kjf-blue hover:text-white bg-transparent"
              asChild
            >
              <a href="/aktuelles">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-kjf-green/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-kjf-green" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-kjf-blue text-white" aria-labelledby="donation-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 id="donation-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Support & Donations
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-kjf-green hover:bg-kjf-green/90 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="/spenden">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-kjf-blue px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <a href="/kontakt">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
