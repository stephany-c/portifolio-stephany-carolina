"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { MapPin, Calendar, GraduationCap, Briefcase, Code2, Heart } from "lucide-react"


const highlights = [
  { icon: Code2, text: "Desenvolvimento Front-end & Back-end" },
  { icon: Heart, text: "Paixão por UI/UX Design" },
  { icon: Briefcase, text: "Experiência em Agência" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-widest text-accent border border-accent/30 bg-accent/5"
          >
            Sobre mim
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Conheça minha{" "}
            <span className="gradient-text-accent">trajetória</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl" />

              {/* Main container */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-secondary via-card to-secondary border border-border overflow-hidden">
                {/* Profile image filling the entire container */}
                <div className="absolute inset-0">
                  <Image
                    src="/profile.jpeg"
                    alt="Stephany Carolina"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Elegant overlay to blend with design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 border-[8px] border-accent/5 rounded-3xl pointer-events-none" />
                </div>



              </div>

            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border"
                >
                  <item.icon size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou uma{" "}
                <span className="text-foreground font-semibold">
                  Desenvolvedora Web
                </span>{" "}
                apaixonada por criar experiências digitais que combinam{" "}
                <span className="text-accent">design elegante</span> com funcionalidade robusta.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente trabalho na <span className="text-foreground">Uaify</span> como Desenvolvedora Front-end, onde desenvolvo
                landing pages, portais institucionais e interfaces web.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha formação em{" "}
                <span className="text-foreground">Sistemas de Informação pela PUC Minas</span> me
                proporcionou uma base técnica sólida, enquanto minha experiência prática me ensinou a
                importância de código limpo, acessibilidade e performance.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-accent/10">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Localização</p>
                  <p className="text-foreground font-medium">Belo Horizonte, MG</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-accent/10">
                  <Calendar size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Nascimento</p>
                  <p className="text-foreground font-medium">14/02/2000</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="sm:col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-accent/10">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Formação</p>
                  <p className="text-foreground font-medium">
                    Bacharelado em Sistemas de Informação - PUC Minas
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
