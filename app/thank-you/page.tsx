"use client"

import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FloatingElements } from "@/components/ui/floating-elements"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, MapPin, Users, ArrowLeft, Sparkles, Trophy, Gift } from "lucide-react"
import { useState, useEffect } from "react"

export default function ThankYouPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Trigger confetti animation after page loads
    const timer = setTimeout(() => setShowConfetti(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Floating Elements Background */}
      <FloatingElements density="high" colors={["primary", "secondary", "accent", "chart-4"]} className="opacity-60" />

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  ["bg-primary", "bg-secondary", "bg-accent", "bg-chart-4"][Math.floor(Math.random() * 4)]
                }`}
              />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Success Icon with Animation */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isLoaded ? "animate-bounce-in scale-100" : "scale-0"}`}>
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-glow-pulse">
                <CheckCircle className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
              {/* Pulsing rings around success icon */}
              <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-ping" />
              <div
                className="absolute inset-0 rounded-full border-4 border-green-400/20 animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
              You're{" "}
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
                In
              </span>
              !
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 text-pretty font-light leading-relaxed">
              Welcome to Google Developers Event 2025
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
              Your registration is confirmed! Get ready for an incredible journey of innovation, learning, and
              connection.
            </p>
          </div>

          {/* Event Details Cards */}
          <div
            className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <Card className="group hover-lift border-0 shadow-xl hover:shadow-2xl bg-card/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">Event Dates</h3>
                <p className="text-muted-foreground text-lg font-semibold relative z-10">March 15-16, 2025</p>
                <p className="text-muted-foreground text-sm mt-2 relative z-10">Two full days of innovation</p>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 shadow-xl hover:shadow-2xl bg-card/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">Location</h3>
                <p className="text-muted-foreground text-lg font-semibold relative z-10">Google Campus</p>
                <p className="text-muted-foreground text-sm mt-2 relative z-10">Mountain View, CA</p>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 shadow-xl hover:shadow-2xl bg-card/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">Your Spot</h3>
                <p className="text-muted-foreground text-lg font-semibold relative z-10">#248 of 500</p>
                <p className="text-muted-foreground text-sm mt-2 relative z-10">Confirmed attendee</p>
              </CardContent>
            </Card>
          </div>

          {/* What's Next Section */}
          <div
            className={`bg-gradient-to-r from-muted/50 to-muted/30 rounded-3xl p-12 mb-16 backdrop-blur-sm border border-border/50 transition-all duration-1000 delay-900 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">What's Next?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Check Your Email</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  We've sent you a confirmation with all the details and your digital ticket.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Save the Date</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  Add the event to your calendar and start planning your journey to innovation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Get Ready</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  Follow us on social media for updates, speaker announcements, and exclusive content.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1100 ${isLoaded ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <Link href="/">
              <AnimatedButton
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 hover:bg-muted/50 rounded-xl font-semibold"
              >
                <ArrowLeft className="mr-3 w-5 h-5" />
                Back to Home
              </AnimatedButton>
            </Link>

            <AnimatedButton
              size="lg"
              ripple={true}
              glow={true}
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl rounded-xl font-semibold"
            >
              <Calendar className="mr-3 w-5 h-5" />
              Add to Calendar
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  )
}
