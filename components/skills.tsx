"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaWordpress,
  FaJava,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiSwagger,
  SiSpring,
} from "react-icons/si"
import { Database, Server, Code2, Palette, Wrench, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    icon: Server,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    ],
  },
  {
    title: "Estilização",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Sass", icon: FaSass, color: "#CC6699" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "REST APIs", icon: Globe, color: "#9333EA" },
    ],
  },
  {
    title: "CMS & Plataformas",
    icon: Database,
    skills: [
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      { name: "Sitecore", icon: Globe, color: "#EB1F1F" },
      { name: "SharePoint", icon: Globe, color: "#0078D4" },
    ],
  },
]

const additionalSkills = [
  "SQL",
  "UI/UX Design",
  "Responsividade",
  "SEO",
  "Performance",
  "Acessibilidade",
  "Scrum",
  "Kanban",
]

function SkillCard({
  skill,
  index,
  categoryIndex,
}: {
  skill: { name: string; icon: React.ElementType; color: string }
  index: number
  categoryIndex: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.02,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group"
    >
      <div className="relative flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 h-full">
        {/* Icon */}
        <div
          className="p-2 rounded-lg transition-all duration-300"
          style={{
            backgroundColor: `${skill.color}15`,
          }}
        >
          <skill.icon
            size={26}
            className="transition-all duration-300"
            style={{ color: skill.color }}
          />
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center line-clamp-1">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="habilidades" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />
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
            Tecnologias
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Minhas{" "}
            <span className="gradient-text-accent">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ferramentas e tecnologias que utilizo para transformar ideias em realidade
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <category.icon size={18} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/80">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-lg font-medium text-muted-foreground mb-6">
            Também possuo conhecimento em
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-secondary/60 border border-border hover:border-accent/40 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
