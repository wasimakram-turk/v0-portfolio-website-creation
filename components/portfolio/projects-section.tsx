"use client"

import Image from "next/image"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "ShopFlow",
    description:
      "A modern e-commerce platform with real-time inventory management, dynamic filtering, and a seamless checkout flow. Built for performance with SSR and optimistic UI updates.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "InsightDash",
    description:
      "Analytics dashboard for SaaS metrics with interactive charts, real-time data streaming, and customizable widget layouts. Features dark mode and responsive design.",
    image: "/images/project-2.jpg",
    technologies: ["React", "D3.js", "WebSocket", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ConnectHub",
    description:
      "Social platform with real-time messaging, user feeds, and content discovery. Implements infinite scroll, image optimization, and accessibility-first design.",
    image: "/images/project-3.jpg",
    technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TaskBoard Pro",
    description:
      "Kanban-style project management app with drag-and-drop, real-time collaboration, and team workspaces. Built with a focus on smooth animations and keyboard navigation.",
    image: "/images/project-4.jpg",
    technologies: ["React", "TypeScript", "DnD Kit", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
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
          A selection of projects that showcase my approach to building
          thoughtful, well-crafted digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-foreground">
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
