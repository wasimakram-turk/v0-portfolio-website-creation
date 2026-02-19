"use client"

import { SectionWrapper } from "./section-wrapper"
import { Building2, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const experiences = [
  {
    role: "Associate Engineer",
    company: "GuruGroup",
    period: "April 2024 - Present",
    description:
      "Developing and maintaining responsive, mobile-first web interfaces for enterprise clients across multiple concurrent projects.",
    highlights: [
      "Build and maintain responsive, mobile-first web interfaces using HTML5, CSS3, and Bootstrap, ensuring UI consistency across all devices",
      "Customize and style Microsoft Power Pages components to support low-code business solutions",
      "Contribute to React.js component development, handling state management and building reusable UI modules",
      "Ensure cross-browser compatibility across Chrome, Firefox, and Edge for all deliverables",
      "Collaborate closely with designers and backend teams to translate UI requirements into production-ready code",
      "Work in a hybrid setup, coordinating with remote and on-site teams across multiple projects simultaneously",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <SectionWrapper id="experience">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Professional journey
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          Building enterprise-grade front-end solutions and delivering
          high-quality web experiences for diverse clients.
        </p>
      </div>

      <div className="relative" ref={ref}>
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-8" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative flex gap-6 md:gap-10">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:h-16 md:w-16">
                <Building2 className="h-3.5 w-3.5 text-primary md:h-6 md:w-6" />
              </div>

              {/* Content card */}
              <div
                className={cn(
                  "flex-1 rounded-xl border border-border bg-card p-6 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
