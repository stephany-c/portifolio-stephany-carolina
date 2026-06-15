"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Send, Copy, Check, Sparkles } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ster.carolinas@hotmail.com",
    href: "mailto:ster.carolinas@hotmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(31) 98449-2984",
    href: "tel:+5531984492984",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Belo Horizonte, MG",
    href: null,
    copyable: false,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/stephany-c",
    username: "@stephany-c",
    color: "#181717",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stephany-carolina-de-souza-1056b81a6/",
    username: "Stephany Carolina",
    color: "#0A66C2",
  },
]

function ContactCard({
  item,
  index,
}: {
  item: (typeof contactInfo)[0]
  index: number
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (item.copyable) {
      await navigator.clipboard.writeText(item.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
        <item.icon size={22} className="text-accent" />
      </div>

      <div className="relative z-10 flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {item.label}
        </p>
        <p className="text-foreground font-medium">{item.value}</p>
      </div>

      {item.copyable && (
        <button
          onClick={(e) => {
            e.preventDefault()
            handleCopy()
          }}
          className="relative z-10 p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Copiar"
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <Copy size={18} className="text-muted-foreground" />
          )}
        </button>
      )}

      {item.href && (
        <ArrowUpRight
          size={18}
          className="relative z-10 text-muted-foreground group-hover:text-accent transition-colors"
        />
      )}
    </motion.div>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    )
  }

  return CardContent
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="py-32 px-4 sm:px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] -translate-x-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Contato
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Vamos{" "}
            <span className="gradient-text-accent">trabalhar juntos</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold mb-8"
            >
              Informações de Contato
            </motion.h3>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <ContactCard key={item.label} item={item} index={index} />
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `${social.color}10` }}
                    />
                    <social.icon size={24} className="relative z-10 transition-colors group-hover:text-accent" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="sticky top-32">
              {/* Main CTA Card */}
              <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-card" />
                <div className="absolute inset-0 glass-strong" />

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl gradient-border opacity-50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">

                    <div>
                      <h3 className="text-xl font-bold text-foreground">Disponível para oportunidades</h3>
                      <p className="text-sm text-muted-foreground">Pronta para novos desafios</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Estou em busca de projetos desafiadores que me permitam crescer como profissional
                    e contribuir com soluções criativas e eficientes. Se você tem uma oportunidade
                    interessante, vamos conversar!
                  </p>

                  <div className="space-y-4">


                    <motion.a
                      href="https://www.linkedin.com/in/stephany-carolina-de-souza-1056b81a6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl border border-border hover:border-accent/30 font-medium transition-colors"
                    >
                      <Linkedin size={18} />
                      <span>Conectar no LinkedIn</span>
                    </motion.a>
                  </div>


                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
