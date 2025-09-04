"use client"

import { cn } from "@/lib/utils"

interface FloatingElementsProps {
  className?: string
  density?: "low" | "medium" | "high"
  colors?: ("primary" | "secondary" | "accent" | "chart-4")[]
}

export function FloatingElements({
  className,
  density = "medium",
  colors = ["primary", "secondary", "accent", "chart-4"],
}: FloatingElementsProps) {
  const elementCount = density === "low" ? 4 : density === "medium" ? 8 : 12

  const elements = Array.from({ length: elementCount }, (_, i) => {
    const color = colors[i % colors.length]
    const size = Math.random() * 60 + 20 // 20-80px
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 4
    const duration = 4 + Math.random() * 4 // 4-8s

    return {
      id: i,
      color,
      size,
      top,
      left,
      delay,
      duration,
      blur: Math.random() > 0.5,
    }
  })

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={cn(
            `absolute rounded-full bg-${element.color}/10`,
            element.blur && "blur-sm",
            "animate-float-slow",
          )}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            top: `${element.top}%`,
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        />
      ))}

      {/* Floating lines */}
      <div
        className="absolute w-px h-24 bg-gradient-to-b from-primary/20 to-transparent animate-float"
        style={{ top: "20%", left: "15%", animationDelay: "1s" }}
      />
      <div
        className="absolute w-px h-32 bg-gradient-to-b from-secondary/20 to-transparent animate-float"
        style={{ top: "60%", right: "20%", animationDelay: "2.5s" }}
      />
      <div
        className="absolute w-px h-20 bg-gradient-to-b from-accent/20 to-transparent animate-float"
        style={{ top: "40%", left: "80%", animationDelay: "0.5s" }}
      />
    </div>
  )
}
