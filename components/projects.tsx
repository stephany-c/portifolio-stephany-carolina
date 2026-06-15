"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Layers, Code2 } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  github?: string
  live?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gestão Financeira Pro",
    description: "Sistema completo para controle de finanças pessoais e empresariais.",
    longDescription:
      "Uma aplicação Full Stack desenvolvida para facilitar o gerenciamento financeiro. Conta com controle de entradas/saídas e relatórios detalhados.",
    image: "/capa-gestao-financas.png",
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/stephany-c/Projeto-Full-Stack-Sistema-de-Gestao-Financeira",
    live: "https://projeto-full-stack-sistema-de-gesta-seven.vercel.app/login",
    featured: true,
  },
  {
    id: 2,
    title: "GymFlow - Treino Inteligente",
    description: "Plataforma para gestão de treinos e evolução em academia.",
    longDescription:
      "Aplicação para gerenciamento de treinos de musculação e exercícios físicos. Permite a criação de fichas de treino personalizadas e acompanhamento de cargas.",
    image: "/capa-academia.png",
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/stephany-c/Aplicativo-para-treino-de-academia",
    live: "https://aplicativo-para-treino-de-academia.vercel.app/login",
    featured: true,
  },
  {
    id: 3,
    title: "Landing Page Nutricionista",
    description: "Página institucional para profissionais de nutrição.",
    longDescription:
      "Design focado em conversão e apresentação de serviços especializados.",
    image: "/capa-nutricionista-alissia-rachel.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Next.js"],
    category: "Front-end",
    github: "https://github.com/stephany-c/Landing-Page-Nutricionista-Alissia-Rachel",
    live: "https://nutricionistaalissiarachel.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Landing Page Make-Up",
    description: "Página institucional para profissionais de maquiagem.",
    longDescription:
      "Design focado em conversão e apresentação de serviços especializados.",
    image: "/capa-make-up-larissa-oliveira.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Next.js"],
    category: "Front-end",
    github: "https://github.com/stephany-c/landing-page-make-up-larissa-oliveira",
    live: "https://larissa-maquiadora.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "SkyCast - Previsão do Tempo",
    description: "Aplicação em tempo real para consulta meteorológica.",
    longDescription:
      "Consumo de API de clima para fornecer dados precisos de temperatura, umidade e previsão para os próximos dias em qualquer cidade do mundo.",
    image: "/capa-previsao-do-tempo.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    category: "Front-end",
    github: "https://github.com/stephany-c/Previsao-Do-Tempo",
    live: "https://stephany-c.github.io/Previsao-Do-Tempo/",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-500">
        {/* Project number */}
        <div className="absolute top-6 left-6 z-20">
          <span className="text-8xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
            {project.category}
          </span>
        </div>

        {/* Image with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <motion.div
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary/80 text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border hover:border-accent/30 transition-colors text-xs font-semibold"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-background font-semibold text-xs hover:bg-accent-light transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Hover border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "inset 0 0 0 2px oklch(0.70 0.18 280 / 0.3), 0 0 60px oklch(0.70 0.18 280 / 0.15)"
              : "inset 0 0 0 1px oklch(0.20 0 0), 0 0 0 oklch(0.70 0.18 280 / 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
        {/* Image side */}
        <motion.div style={{ y }} className="relative">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-card border border-border group-hover:border-accent/30 transition-colors duration-500">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

            {/* Image content */}
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-card/40 via-transparent to-transparent opacity-60" />
            </div>


          </div>
        </motion.div>

        {/* Content side */}
        <div className="lg:py-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium uppercase tracking-widest text-accent border border-accent/30 bg-accent/5">
              {project.category}
            </span>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {project.title}
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/60 text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4">
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn flex items-center gap-3 px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-light transition-colors"
                >
                  <span>Ver Projeto Online</span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:border-accent/30 font-semibold transition-colors"
                >
                  <Github size={18} />
                  <span>Código Fonte</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("Full Stack")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filters = ["Todos", "Front-end", "Full Stack"]

  const filteredProjects = projects.filter(
    (p) => activeFilter === "Todos" || p.category === activeFilter
  )

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject()
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(timer)
  }, [currentIndex, filteredProjects.length])

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  return (
    <section
      id="projetos"
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-card/30 to-transparent"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-widest text-accent border border-accent/30 bg-accent/5"
          >
            Portfólio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Meus <span className="gradient-text-accent">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore meus trabalhos mais recentes navegando pelo carrossel abaixo
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? "bg-accent text-background"
                : "bg-secondary/60 text-muted-foreground hover:text-foreground border border-border hover:border-accent/30"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden px-4 -mx-4">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-6xl mx-auto">
                    <FeaturedProject project={project} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          {filteredProjects.length > 1 && (
            <>
              <div className="flex justify-center items-center gap-8 mt-12">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevProject}
                  className="p-4 rounded-full border border-border bg-secondary/40 hover:bg-accent/10 hover:border-accent/30 text-foreground transition-colors"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex gap-3">
                  {filteredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-accent w-8" : "bg-border hover:bg-accent/40"
                        }`}
                      aria-label={`Ir para projeto ${i + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextProject}
                  className="p-4 rounded-full border border-border bg-secondary/40 hover:bg-accent/10 hover:border-accent/30 text-foreground transition-colors"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </>
          )}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl glass border border-border">

            <p className="text-lg text-muted-foreground max-w-md">
              Novos projetos estão sendo desenvolvidos. Acompanhe meu GitHub para ver as
              últimas atualizações!
            </p>
            <motion.a
              href="https://github.com/stephany-c"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-accent/30 font-medium transition-colors"
            >
              <Github size={18} />
              <span>Ver GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
