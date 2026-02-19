"use client"

import Image from "next/image"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Ultimate Works (Enterprise HR & Payroll)",
    description:
      "Developed the front-end UI for a multi-module enterprise HR and payroll application. Designed dashboards and role-specific pages to streamline workforce management across the organization.",
    image: "/images/Ultimate-works/Dashboard.png",
    technologies: ["React.js", "Bootstrap", "Custom CSS"],
    liveUrl: "#",
  },
  {
    title: "Trillora (Power Pages Solution)",
    description:
      "Implemented the front-end UI for a packaging company's business data visualization platform. Customized Microsoft Power Pages with responsive layouts and clean data presentation.",
    image: "/images/Trillora/Home.png",
    technologies: ["Power Pages", "HTML", "CSS", "Bootstrap"],
    liveUrl: "#",
  },
  {
    title: "WindowNation (USA)",
    description:
      "Developed custom WordPress front-end pages for a leading US-based window and door company. Coordinated closely with backend developers to ensure seamless layout integration.",
    image: "/images/WindowNation.png",
    technologies: ["WordPress", "HTML", "CSS"],
    liveUrl: "#",
  },
  {
    title: "Corporate Websites Portfolio",
    description:
      "Built and maintained corporate websites for international clients including CecilHub (Australia) and Crystal Consulting Group (UAE), as well as multiple marketing sites across the GuruGroup network.",
    image: "/images/project-4.jpg",
    technologies: ["WordPress", "HTML", "CSS", "Bootstrap", "Tailwind"],
    liveUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Projects
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Selected work
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          Enterprise applications, CMS platforms, and corporate websites
          delivered for clients across the USA, Australia, and the UAE.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-card to-muted/40 shadow-sm opacity-0 animate-fade-in-up animation-delay-200 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary/40"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-muted/60">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
            </div>

            {/* Project Info */}
            <div className="p-6 lg:p-7">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  aria-label={`View project: ${project.title}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
