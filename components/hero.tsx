"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Mehr erfahren",
  ctaLink = "#angebote",
  backgroundImage = "/sunny-playground-fun.png",
}: HeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt=""
          className="w-full h-full object-cover"
          role="presentation"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-100">{subtitle}</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-kjf-green hover:bg-kjf-green/90 text-white px-8 py-4 text-lg font-semibold group"
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
