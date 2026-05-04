"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 px-6 border-t border-border bg-card/50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#inicio"
              className="text-2xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-foreground">Stephany</span>
              <span className="text-accent">.</span>
            </motion.a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Desenvolvido com{" "}
              <Heart size={14} className="text-accent fill-accent" /> em 2024
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/stephany-c", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/stephany-carolina-de-souza-1056b81a6/",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:ster.carolinas@hotmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-secondary/60 border border-border hover:border-accent/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/60 border border-border hover:border-accent/30 text-sm text-muted-foreground hover:text-foreground transition-all"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Stephany Carolina de Souza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
