"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Mail, Phone, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      const form = e.target as HTMLFormElement
      form.classList.add("animate-pulse")
      setTimeout(() => form.classList.remove("animate-pulse"), 500)
      return
    }

    setIsLoading(true)

    try {
      // Send data to SheetDB API
      const SHEETDB_API = process.env.NEXT_PUBLIC_SHEETDB_API;
      if (SHEETDB_API) {
        await fetch(SHEETDB_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Name: formData.name,
                Email: formData.email,
                Phone: formData.phone,
              },
            ],
          }),
        })
      }
    } catch (error) {
      // Optionally handle error (e.g., show toast)
    }

    setIsLoading(false)
    router.push("/thank-you")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const getInputClassName = (field: string) => {
    const baseClasses =
      "pl-12 pr-4 py-3 text-base transition-all duration-300 border-2 rounded-xl focus:outline-none focus:ring-0"

    if (errors[field]) {
      return `${baseClasses} border-destructive bg-destructive/5 animate-pulse focus:border-destructive`
    }

    if (formData[field as keyof typeof formData]) {
      return `${baseClasses} border-chart-4 bg-chart-4/5 focus:border-chart-4 focus:shadow-lg focus:shadow-chart-4/20`
    }

    if (focusedField === field) {
      return `${baseClasses} border-primary bg-primary/5 focus:border-primary focus:shadow-lg focus:shadow-primary/20`
    }

    return `${baseClasses} border-border hover:border-muted-foreground focus:border-primary`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <FloatingElements density="low" colors={["primary", "secondary", "accent", "chart-4"]} />

      <Card
        className={`w-full max-w-lg shadow-2xl border-0 relative z-10 bg-card/95 backdrop-blur-sm smooth-transition ${isLoaded ? "animate-slide-in-scale" : "opacity-0 translate-y-8 scale-95"}`}
      >
        <CardHeader className="text-center pb-8 pt-8">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-chart-4 rounded-full animate-float" />
            </div>
          </div>

          <CardTitle className="text-3xl font-bold text-primary mb-3">Event Registration</CardTitle>
          <p className="text-lg text-muted-foreground text-pretty">Secure your spot at Google Developers 2025</p>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div
              className={`space-y-3 transition-all duration-500 delay-200 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}
            >
              <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                Full Name
              </Label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClassName("name")}
                />
                {formData.name && !errors.name && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-chart-4" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-destructive animate-fade-in-up flex items-center">
                  <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                  {errors.name}
                </p>
              )}
            </div>

            <div
              className={`space-y-3 transition-all duration-500 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}
            >
              <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClassName("email")}
                />
                {formData.email && !errors.email && /\S+@\S+\.\S+/.test(formData.email) && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-chart-4" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-destructive animate-fade-in-up flex items-center">
                  <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                  {errors.email}
                </p>
              )}
            </div>

            <div
              className={`space-y-3 transition-all duration-500 delay-400 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}
            >
              <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                Phone Number
              </Label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={getInputClassName("phone")}
                />
                {formData.phone && !errors.phone && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <CheckCircle className="w-5 h-5 text-chart-4" />
                  </div>
                )}
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive animate-fade-in-up flex items-center">
                  <span className="w-1 h-1 bg-destructive rounded-full mr-2" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div
              className={`transition-all duration-500 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}
            >
              <AnimatedButton
                type="submit"
                ripple={true}
                glow={true}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 loading-spinner mr-3" />
                    Registering...
                  </>
                ) : (
                  <>
                    Register Now
                    <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </>
                )}
              </AnimatedButton>
            </div>
          </form>

          <div
            className={`mt-8 text-center transition-all duration-500 delay-600 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}
          >
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to event details
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
