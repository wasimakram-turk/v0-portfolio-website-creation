"use client"

import { SectionWrapper } from "./section-wrapper"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    companyUrl: "#",
    period: "2023 - Present",
    description:
      "Leading frontend architecture for a SaaS platform serving 50K+ users. Spearheaded migration from CRA to Next.js, improving performance scores by 40%. Built and maintained a shared component library used across 5 products.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    companyUrl: "#",
    period: "2021 - 2023",
    description:
      "Developed responsive web applications for enterprise clients across fintech, healthcare, and e-commerce. Implemented complex data visualization dashboards and optimized Core Web Vitals, achieving 95+ Lighthouse scores.",
    technologies: ["React", "TypeScript", "GraphQL", "Styled Components", "Jest"],
  },
  {
    role: "Junior Frontend Developer",
    company: "StartupHub",
    companyUrl: "#",
    period: "2019 - 2021",
    description:
      "Built consumer-facing features for a social platform with 100K+ MAU. Collaborated closely with designers to implement pixel-perfect UIs and contributed to establishing frontend best practices and code review processes.",
    technologies: ["React", "JavaScript", "Redux", "SCSS", "Cypress"],
  },
  {
    role: "Web Developer Intern",
    company: "CreativeStudio",
    companyUrl: "#",
    period: "2019 (6 months)",
    description:
      "Assisted in building responsive marketing websites and landing pages. Gained hands-on experience with modern JavaScript frameworks and version control workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Where I{"'"}ve worked
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          A timeline of my professional journey, from building my first
          components to leading frontend architecture.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[140px] md:block" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative flex flex-col gap-3 md:flex-row md:gap-12">
              {/* Period */}
              <div className="flex-shrink-0 md:w-[140px] md:text-right">
                <span className="text-sm font-mono text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 hidden h-[10px] w-[10px] rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary md:left-[136px] md:block" />

              {/* Content */}
              <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all group-hover:border-primary/30 group-hover:shadow-md">
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="hidden text-muted-foreground sm:inline">
                    {"·"}
                  </span>
                  <a
                    href={exp.companyUrl}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
