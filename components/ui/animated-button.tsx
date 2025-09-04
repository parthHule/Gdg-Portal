"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  ripple?: boolean
  glow?: boolean
  children: React.ReactNode
}

export function AnimatedButton({
  ripple = true,
  glow = false,
  className,
  children,
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [isRippling, setIsRippling] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 400)
    }
    onClick?.(e)
  }

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:scale-105 hover:-translate-y-1",
        glow && "hover:shadow-lg hover:shadow-primary/25",
        ripple && "ripple-container",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {isRippling && <span className="absolute inset-0 animate-button-ripple bg-white/20 rounded-full" />}
    </Button>
  )
}
