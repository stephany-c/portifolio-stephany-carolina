"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for the spotlight movement
  const springConfig = { damping: 40, stiffness: 200, mass: 0.2 }
  const spotlightX = useSpring(mouseX, springConfig)
  const spotlightY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractive = target.closest("a, button, [role='button'], .cursor-pointer")
    setIsHovered(!!isInteractive)
  }, [])

  useEffect(() => {
    setMounted(true)
    
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Background Spotlight - Follows with inertia */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          background: isHovered 
            ? "radial-gradient(circle, oklch(0.70 0.18 280 / 0.25) 0%, transparent 70%)" 
            : "radial-gradient(circle, oklch(0.70 0.18 280 / 0.1) 0%, transparent 70%)",
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Tiny precision dot that follows exactly (behind the real cursor) */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent rounded-full blur-[1px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </div>
  )
}

