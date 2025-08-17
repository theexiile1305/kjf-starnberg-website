"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, Users, Heart, GraduationCap, MessageCircle } from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
  })

  const departments = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "lorem", label: "Lorem Ipsum Services", icon: Users },
    { value: "consectetur", label: "Consectetur Adipiscing", icon: Heart },
    { value: "seddo", label: "Sed Do Eiusmod", icon: GraduationCap },
    { value: "tempor", label: "Tempor Incididunt", icon: MessageCircle },
  ]

  const contactInfo = [
    {
      title: "Main Office",
      address: "Lorem Street 123, 12345 Lorem City",
      phone: "+49 8151 987 65 43",
      email: "info@lorem-organization.com",
      hours: "Mon-Fri 8:00-17:00",
    },
    {
      title: "Consultation Center",
      address: "Ipsum Avenue 45, 12345 Lorem City",
      phone: "+49 8151 987 65 46",
      email: "consultation@lorem-organization.com",
      hours: "Mon-Thu 9:00-18:00, Fri 9:00-15:00",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Contact Request: ${formData.subject || "General Inquiry"}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Department: ${departments.find((d) => d.value === formData.department)?.label || "Not specified"}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@lorem-organization.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send Message</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+49 123 456 789"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) => handleInputChange("department", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.value} value={dept.value}>
                                <div className="flex items-center space-x-2">
                                  <dept.icon className="w-4 h-4" />
                                  <span>{dept.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What is your message about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe your inquiry..."
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-kjf-green hover:bg-kjf-green/90 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-600">
                      * Required fields. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-kjf-blue">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-kjf-green mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Address</p>
                            <p className="text-gray-600">{info.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-kjf-green flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Phone</p>
                            <a href={`tel:${info.phone}`} className="text-kjf-blue hover:underline">
                              {info.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-kjf-green flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <a href={`mailto:${info.email}`} className="text-kjf-blue hover:underline">
                              {info.email}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-kjf-green mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Office Hours</p>
                            <p className="text-gray-600">{info.hours}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-red-800">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium text-red-800">Emergency Service: 0800 111 0 333</p>
                    <p className="font-medium text-red-800">Crisis Hotline: 0800 111 0 111</p>
                    <p className="text-red-600">Life-threatening emergency: 112</p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">Lorem Street 123, 12345 Lorem City</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="font-medium mb-2">Directions:</p>
                    <ul className="space-y-1">
                      <li>• Lorem transit line to Lorem Station, then 5 min walk</li>
                      <li>• Parking available directly in front of building</li>
                      <li>• Wheelchair accessible entrance available</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
