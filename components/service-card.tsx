"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link?: string
  delay?: number
}

export default function ServiceCard({ title, description, icon: Icon, link = "#", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-kjf-blue/10 rounded-full flex items-center justify-center group-hover:bg-kjf-blue/20 transition-colors">
            <Icon className="w-8 h-8 text-kjf-blue" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-gray-600 mb-6 leading-relaxed">{description}</CardDescription>
          <Button
            variant="outline"
            className="border-kjf-green text-kjf-green hover:bg-kjf-green hover:text-white group/btn bg-transparent"
            asChild
          >
            <a href={link}>
              Mehr erfahren
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
