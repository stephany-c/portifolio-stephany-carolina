"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight, ChevronDown } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Desenvolvedora Front-end",
    company: "Uaify – Agência de Performance e Lançamentos",
    location: "Belo Horizonte, MG",
    period: "Janeiro 2022 - Atual",
    description:
      "Desenvolvimento e manutenção de landing pages, portais institucionais e blogs com foco em performance e conversão.",
    achievements: [
      "Desenvolvimento e manutenção de landing pages, portais institucionais e blogs",
      "Criação de interfaces web utilizando HTML, CSS e JavaScript (Bootstrap, React e Vue.js)",
      "Implementação de layouts responsivos seguindo boas práticas de UI/UX",
      "Integração de páginas com APIs e serviços externos",
      "Gestão de conteúdo em CMS (Sitecore, SharePoint e WordPress)",
    ],
    technologies: ["React", "Vue.js", "JavaScript", "HTML/CSS", "WordPress", "Sitecore"],
  },
]

const education = [
  {
    type: "education",
    title: "Bacharelado em Sistemas de Informação",
    company: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
    location: "Belo Horizonte, MG",
    period: "Março 2021 - Dezembro 2024",
    description: "Formação completa em desenvolvimento de software, engenharia de sistemas e gestão de projetos de TI.",
    highlights: ["Desenvolvimento de Software", "Engenharia de Sistemas", "Banco de Dados", "Gestão de Projetos"],
  },
  {
    type: "education",
    title: "Ensino Médio Integrado - Técnico em Eletrônica",
    company: "Centro Federal de Tecnologia (CEFET-MG)",
    location: "Belo Horizonte, MG",
    period: "Fevereiro 2016 - Dezembro 2019",
    description: "Formação técnica em eletrônica com foco em circuitos, programação e automação.",
    highlights: ["Circuitos Eletrônicos", "Programação", "Automação", "Projetos Técnicos"],
  },
]

function TimelineItem({
  item,
  index,
  type,
}: {
  item: (typeof experiences)[0] | (typeof education)[0]
  index: number
  type: "work" | "education"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(type === "work")

  const Icon = type === "work" ? Briefcase : GraduationCap

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className={`absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
          type === "work"
            ? "bg-accent border-accent glow-sm"
            : "bg-card border-accent"
        }`}
      />

      {/* Content card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group relative p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                <Icon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-accent font-medium">{item.company}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                {item.period}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

          {/* Expandable content for work */}
          {"achievements" in item && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mb-4"
              >
                <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 mb-6">
                  {item.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <ArrowRight size={14} className="text-accent mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}

          {/* Technologies or Highlights */}
          <div className="flex flex-wrap gap-2">
            {("technologies" in item ? item.technologies : item.highlights).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/60 text-muted-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiencia" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-card/30 via-transparent to-card/30" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 -translate-x-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            Trajetória
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Minha{" "}
            <span className="gradient-text-accent">Experiência</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma visão da minha jornada profissional e formação acadêmica
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
              <Briefcase size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Experiência Profissional</h3>
              <p className="text-sm text-muted-foreground">Onde aplico meu conhecimento</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </motion.div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} type="work" />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
              <GraduationCap size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Formação Acadêmica</h3>
              <p className="text-sm text-muted-foreground">Base do meu conhecimento</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
          </motion.div>

          <div className="relative">
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} index={index} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
