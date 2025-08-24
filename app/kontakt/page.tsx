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
import { CircleUser, MapPin, Calendar, Phone, Mail, Camera, Gift, Send, Users, HelpCircle, MessageSquare, UserPlus } from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const categories = [
    { value: "general", label: "Allgemeine Fragen", icon: HelpCircle },
    { value: "membership", label: "Mitgliedschaft / Anmeldung", icon: UserPlus },
    { value: "parents", label: "Elternanfragen", icon: Users },
    { value: "events", label: "Veranstaltungen", icon: Calendar },
    { value: "donations", label: "Spenden / Unterstützung", icon: Gift },
    { value: "press", label: "Presse / Medien", icon: Camera },
    { value: "feedback", label: "Feedback / Verbesserungsvorschläge", icon: MessageSquare },
  ]

  const emeergencies = [
    {
      title: "Feuerwehr und Rettungsdienst",
      phone: "112",
    },
    {
      title: "Polizei",
      phone: "110",
    },
    {
      title: "Giftnotruf",
      phone: "089 192 40",
    },
    {
      title: "Ärztlicher Bereitschaftsdienst (bei Erkrankungen außerhalb der Praxiszeiten)",
      phone: "116 117",
    },
    {
      title: "Telefonseelsorge (rund um die Uhr, kostenfrei & anonym)",
      phone: "116 123",
    },
    {
      title: "Hilfetelefon \"Nummer gegen Kummer\" (für Kinder & Jugendliche)",
      phone: "116 111",
    },
    {
      title: "Krisendienst Bayern (psychische Krisen, Beratung & Hilfe)",
      phone: "0800 655 3000",
    }
  ]

  const contactInfo = [
    {
      title: "Kreisjugendfeuerwehrwart",
      person: "Dr. Franz Matheis",
      address: "Buttlerweg 10, 82327 Traubing",
      phone: "+49123456789",
      email: "mail@example.com"
    },
    {
      title: "Kreisbrandrat",
      person: "Helmut Schweickart",
      address: "Kreisbrandinspektion Starnberg, Strandbadstraße 2, 82319 Starnberg",
      phone: "+49123456789",
      email: "mail@example.com"
    },
    {
      title: "Verbandsvorsitzende",
      person: "Michael Polednik",
      address: "Reineckestr., 11, 82211 Herrsching",
      phone: "+49123456789",
      email: "mail@example.com"
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Kontaktanfrage: ${formData.subject || "Kontaktanfrage"}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Kategorie: ${categories.find((d) => d.value === formData.category)?.label || "Nicht ausgewählt"}

Nachricht:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@kjf-sta.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt zur Kreisjugendfeuerwehr Starnberg</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Du hast Fragen zu unseren Angeboten oder möchtest Teil der Jugendfeuerwehr werden? Schreib uns - wir helfen dir gerne weiter und melden uns schnellstmöglich!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
              >
              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Nachricht senden</CardTitle>
                  <CardDescription>
                    Deine Fragen, deine Anmeldung - direkt an die Kreisjugendfeuerwehr Starnberg
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name*</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Dein Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="jane.doe@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+49 123 456 789"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Kategorie</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("department", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Wähle eine Kategorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                <div className="flex items-center space-x-2">
                                  <cat.icon className="w-4 h-4" />
                                  <span>{cat.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht*</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Beschreibe dein Anliegen..."
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-kjf-green hover:bg-kjf-green/90 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </Button>

                    <p className="text-sm text-gray-600">
                      Die mit * gekennzeichneten Felder sind Pflichtfelder und müssen ausgefüllt werden, damit wir deine Anfrage bearbeiten können.
                    </p>
                  </form>
                </CardContent>
              </Card>
               {/* Emergency Contact */}
               <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-red-800">Notfallkontakte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-3">
                    Falls Sie sich in einer akuten Notlage befinden, wenden Sie sich bitte direkt an die folgenden Stellen:
                  </p>
                  <div className="space-y-2 text-sm">
                    {emeergencies.map((emeergency, index) => (
                      <p className="font-medium text-red-800">
                        <a href={`tel:${emeergency.phone}`}>{emeergency.title}: {emeergency.phone}</a></p>
                    ))}
                  </div>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-kjf-blue">{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CircleUser className="w-5 h-5 text-kjf-green mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Name</p>
                            <p className="text-gray-600">{info.person}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-kjf-green mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Adresse</p>
                            <p className="text-gray-600">{info.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-kjf-green flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Telefonnummer</p>
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
