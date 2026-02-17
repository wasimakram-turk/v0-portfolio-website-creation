"use client"

import Image from "next/image"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Ultimate Works (Enterprise HR & Payroll)",
    description:
      "Developed the front-end UI for a multi-module enterprise HR and payroll application. Designed dashboards and role-specific pages to streamline workforce management across the organization.",
    image: "/images/project-1.jpg",
    technologies: ["React.js", "Bootstrap", "Custom CSS"],
    liveUrl: "#",
  },
  {
    title: "Trillora (Power Pages Solution)",
    description:
      "Implemented the front-end UI for a packaging company's business data visualization platform. Customized Microsoft Power Pages with responsive layouts and clean data presentation.",
    image: "/images/project-2.jpg",
    technologies: ["Power Pages", "HTML", "CSS", "Bootstrap"],
    liveUrl: "#",
  },
  {
    title: "WindowNation (USA)",
    description:
      "Developed custom WordPress front-end pages for a leading US-based window and door company. Coordinated closely with backend developers to ensure seamless layout integration.",
    image: "/images/project-3.jpg",
    technologies: ["WordPress", "HTML", "CSS", "Bootstrap"],
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
      <div className="mb-14">
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
            className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Floating action on hover */}
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 lg:p-7">
              <h3 className="mb-2.5 text-lg font-semibold leading-snug text-foreground lg:text-xl">
                {project.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 hover:gap-2.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
