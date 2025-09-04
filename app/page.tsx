"use client"

import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Lightbulb, Code, Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-16 md:py-20 flex items-center justify-center">
        <FloatingElements density="medium" colors={["primary", "secondary", "accent", "chart-4"]} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-2xl hover-scale-subtle animate-glow-pulse">
                  <Code className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                {/* Floating accent dots around logo */}
                <div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-chart-4 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
                Google Developers Event{" "}
                <span
                  className="bg-clip-text text-transparent animate-gradient-shift"
                  style={{
                    background:
                      "linear-gradient(45deg, oklch(0.55 0.15 264), oklch(0.55 0.22 27), oklch(0.75 0.15 85), oklch(0.55 0.15 142))",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  2025
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
                Where innovation meets inspiration
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
            >
              <Link href="/register">
                <AnimatedButton
                  size="lg"
                  ripple={true}
                  glow={true}
                  className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl rounded-2xl font-semibold"
                >
                  Register Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Join 500+ Developers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Two days of learning, networking, and building the future together with industry leaders and Google
              engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="group hover-lift border-0 shadow-lg hover:shadow-xl scroll-reveal stagger-1 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Networking</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  Connect with developers from 50+ countries
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 shadow-lg hover:shadow-xl scroll-reveal stagger-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                  <Code className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">50+ Sessions</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  Hands-on workshops with latest technologies
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 shadow-lg hover:shadow-xl scroll-reveal stagger-3 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  Cutting-edge tech shaping the future
                </p>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 shadow-lg hover:shadow-xl scroll-reveal stagger-4 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-chart-4/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-chart-4/20 transition-all duration-300 group-hover:scale-110">
                  <Star className="w-8 h-8 text-chart-4" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Expert Speakers</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                  Google engineers and industry pioneers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
        <FloatingElements
          density="medium"
          colors={["primary", "secondary", "accent", "chart-4"]}
          className="opacity-40"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Ready to{" "}
              <span
                className="bg-clip-text text-transparent animate-gradient-shift"
                style={{
                  background:
                    "linear-gradient(45deg, oklch(0.55 0.15 264), oklch(0.55 0.22 27), oklch(0.75 0.15 85), oklch(0.55 0.15 142))",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Innovate
              </span>
              ?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              March 15-16, 2025 • Two days of learning, building, and connecting
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register">
                <AnimatedButton
                  size="lg"
                  ripple={true}
                  glow={true}
                  className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl rounded-2xl font-semibold"
                >
                  Register Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </AnimatedButton>
              </Link>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-background" />
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full border-2 border-background" />
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-chart-4 rounded-full border-2 border-background" />
                </div>
                <span className="text-sm">Join 247 registered developers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-muted/80 to-muted/60 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Google Developers Event</h3>
                  <p className="text-muted-foreground">2025</p>
                </div>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed max-w-md">
                Join us for an unforgettable experience of learning, innovation, and connection with the global
                developer community.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Event</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Venue
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors smooth-transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">© 2025 Google Developers Event. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-muted-foreground">Made with</span>
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">by the community</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
