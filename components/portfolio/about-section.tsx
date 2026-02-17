"use client"

import { SectionWrapper } from "./section-wrapper"
import { Briefcase, Globe, Lightbulb, Users } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    label: "5+ Years Experience",
    description: "Building production-grade web applications",
  },
  {
    icon: Globe,
    label: "Remote-First",
    description: "Collaborated with distributed teams worldwide",
  },
  {
    icon: Lightbulb,
    label: "Problem Solver",
    description: "Turning complex requirements into elegant solutions",
  },
  {
    icon: Users,
    label: "Team Player",
    description: "Mentoring juniors and leading frontend teams",
  },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          About Me
        </p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Passionate about crafting exceptional web experiences
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <p className="mb-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            I{"'"}m a senior frontend developer with a deep passion for building
            interfaces that are not only beautiful but also accessible,
            performant, and scalable. My journey started with vanilla HTML and
            CSS, and I{"'"}ve since become proficient in the modern React
            ecosystem.
          </p>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Currently, I work as a Senior Frontend Engineer where I lead the
            development of component libraries, implement design systems, and
            optimize web performance. I believe great software comes from
            empathy{"—"}understanding both user needs and developer experience.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            When I{"'"}m not coding, you{"'"}ll find me contributing to
            open-source projects, writing technical articles, or exploring new
            frontend technologies. I{"'"}m always looking for interesting
            challenges and opportunities to grow.
          </p>
        </div>

        <div className="grid flex-shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[380px]">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <item.icon className="mb-3 h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <p className="mb-1 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
