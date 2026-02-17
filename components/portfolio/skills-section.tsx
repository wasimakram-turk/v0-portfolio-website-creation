"use client"

import { SectionWrapper } from "./section-wrapper"

const skillCategories = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 93 },
      { name: "CSS-in-JS", level: 88 },
      { name: "Sass / SCSS", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Jest / RTL", level: 85 },
      { name: "Cypress / Playwright", level: 80 },
      { name: "Webpack / Vite", level: 85 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Node.js / Express", level: 78 },
      { name: "REST / GraphQL", level: 82 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Figma / Design", level: 75 },
    ],
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Skills
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Technologies I work with
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          A curated set of tools and technologies I use daily to build modern,
          performant web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
