"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Download } from "lucide-react"

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    let currentIndex = 0

    const timeoutId = setTimeout(() => {
      setShowCursor(true)
      intervalId = setInterval(() => {
        currentIndex++
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
        } else {
          clearInterval(intervalId)
          setIsTypingComplete(true)
        }
      }, 80)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, delay])

  return (
    <span className="relative inline-flex items-baseline">
      <span>{displayedText}</span>
      {showCursor && !isTypingComplete && (
        <span className="typewriter-cursor ml-1" />
      )}
    </span>
  )
}

function FloatingParticle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute bg-accent rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [0, 1.5, 0],
        y: [0, -120],
        x: [0, (Math.random() - 0.5) * 60],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeInOut"
      }}
    />
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 6 + 2, // Tamanhos entre 2px e 8px
  }))

  return (
    <section
      ref={ref}
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.70 0.18 280 / 0.15) 0%, transparent 70%)",
            y,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.20 280 / 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            size={particle.size}
            x={particle.x}
            y={particle.y}
          />
        ))}

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="70%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="100%"
            y1="20%"
            x2="0%"
            y2="80%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.70 0.18 280 / 0)" />
              <stop offset="50%" stopColor="oklch(0.70 0.18 280 / 0.5)" />
              <stop offset="100%" stopColor="oklch(0.70 0.18 280 / 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div style={{ opacity }} className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-accent/30 text-accent text-sm font-medium">
            Desenvolvedora Web

          </span>
        </motion.div>

        {/* Name with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Olá, sou a
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground">
            <TypewriterText text="Stephany Carolina" delay={500} />
          </h1>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-6"
        >
          <MapPin size={16} className="text-accent" />
          <span className="text-sm">Belo Horizonte, MG - Brasil</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformando ideias em <span className="text-foreground font-medium">experiências digitais</span> elegantes
          e funcionais. Especializada em criar interfaces modernas com foco em{" "}
          <span className="text-accent font-medium">usabilidade</span> e{" "}
          <span className="text-accent font-medium">performance</span>.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/stephany-c", label: "GitHub" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/stephany-carolina-de-souza-1056b81a6/",
              label: "LinkedIn",
            },
            { icon: Mail, href: "mailto:ster.carolinas@hotmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 2.8 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 rounded-2xl bg-secondary/80 border border-border hover:border-accent/50 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={22} className="transition-colors group-hover:text-accent" />
              <div className="absolute inset-0 rounded-2xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent-light transition-colors glow"
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="/Curriculo-Stephany-Carolina.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-accent bg-accent/10 hover:bg-accent/20 text-accent font-semibold text-sm tracking-wide transition-colors"
          >
            <Download size={18} />
            Baixar Currículo
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border border-border hover:border-accent/50 font-medium text-sm tracking-wide transition-colors"
          >
            Entrar em Contato
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-border"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section >
  )
}
