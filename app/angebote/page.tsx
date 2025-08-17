"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, GraduationCap, MessageCircle, Clock, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react"

export default function AngebotePage() {
  const services = [
    {
      id: "jugendhilfe",
      title: "Lorem Ipsum Services",
      icon: Users,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      longDescription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      features: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
        "Ut labore et dolore magna aliqua",
        "Ut enim ad minim veniam",
        "Quis nostrud exercitation ullamco",
      ],
      targetGroup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      contact: {
        phone: "+49 8151 987 65 43",
        email: "lorem@lorem-organization.com",
        hours: "Mon-Fri 8:00-17:00",
      },
    },
    {
      id: "inklusion",
      title: "Consectetur Adipiscing",
      icon: Heart,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      longDescription:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      features: [
        "Sunt in culpa qui officia",
        "Deserunt mollit anim id est",
        "Laborum sed ut perspiciatis",
        "Unde omnis iste natus error",
        "Sit voluptatem accusantium",
        "Doloremque laudantium totam",
      ],
      targetGroup: "Sed do eiusmod tempor incididunt ut labore et dolore",
      contact: {
        phone: "+49 8151 987 65 44",
        email: "consectetur@lorem-organization.com",
        hours: "Mon-Fri 8:00-16:00",
      },
    },
    {
      id: "schulen",
      title: "Sed Do Eiusmod",
      icon: GraduationCap,
      description:
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      longDescription:
        "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      features: [
        "Qui officia deserunt mollit",
        "Anim id est laborum sed",
        "Ut perspiciatis unde omnis",
        "Iste natus error sit",
        "Voluptatem accusantium doloremque",
        "Laudantium totam rem aperiam",
      ],
      targetGroup: "Tempor incididunt ut labore et dolore magna aliqua",
      contact: {
        phone: "+49 8151 987 65 45",
        email: "seddo@lorem-organization.com",
        hours: "Mon-Fri 7:30-16:00",
      },
    },
    {
      id: "beratung",
      title: "Tempor Incididunt",
      icon: MessageCircle,
      description:
        "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      longDescription:
        "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      features: [
        "Deserunt mollit anim id",
        "Est laborum sed ut",
        "Perspiciatis unde omnis iste",
        "Natus error sit voluptatem",
        "Accusantium doloremque laudantium",
        "Totam rem aperiam eaque",
      ],
      targetGroup: "Ut labore et dolore magna aliqua ut enim ad minim",
      contact: {
        phone: "+49 8151 987 65 46",
        email: "tempor@lorem-organization.com",
        hours: "Mon-Thu 9:00-18:00, Fri 9:00-15:00",
      },
    },
  ]

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-kjf-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-20"
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Service Header */}
                    <div className="bg-gradient-to-br from-kjf-blue to-kjf-green text-white p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                          <Badge className="bg-white/20 text-white mt-2">Core Service</Badge>
                        </div>
                      </div>
                      <p className="text-lg text-white/90 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Service Content */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Service</h3>
                          <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Offerings</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-kjf-green flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Group</h3>
                          <p className="text-gray-600 mb-6">{service.targetGroup}</p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-kjf-blue" />
                              <a href={`tel:${service.contact.phone}`} className="text-kjf-blue hover:underline">
                                {service.contact.phone}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-kjf-blue" />
                              <a href={`mailto:${service.contact.email}`} className="text-kjf-blue hover:underline">
                                {service.contact.email}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-kjf-blue" />
                              <span className="text-gray-600">{service.contact.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Services?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Button size="lg" className="bg-kjf-green hover:bg-kjf-green/90 text-white" asChild>
              <a href="/kontakt">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
