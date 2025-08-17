"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  link?: string
  delay?: number
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  image = "/diverse-children-playing.png",
  link = "#",
  delay = 0,
}: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
        <a href={link} className="block h-full">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-kjf-green text-white">{category}</Badge>
            </div>
          </div>

          {/* Content */}
          <CardHeader className="pb-2">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
            <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-kjf-blue transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">{excerpt}</CardDescription>
          </CardContent>
        </a>
      </Card>
    </motion.div>
  )
}
