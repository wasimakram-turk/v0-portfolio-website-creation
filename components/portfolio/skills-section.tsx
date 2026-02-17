"use client"

import { SectionWrapper } from "./section-wrapper"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap", level: 92 },
      { name: "JavaScript (ES6)", level: 70 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: "React.js", level: 60 },
      { name: "Microsoft Power Pages", level: 80 },
      { name: "WordPress (Themes & Plugins)", level: 85 },
      { name: "Contentstack CMS", level: 75 },
    ],
  },
  {
    title: "SEO & Performance",
    skills: [
      { name: "On-Page SEO", level: 85 },
      { name: "Technical SEO", level: 80 },
      { name: "Performance Optimization", level: 78 },
      { name: "Cross-Browser Compatibility", level: 90 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "VS Code", level: 92 },
      { name: "Git", level: 65 },
      { name: "Chrome DevTools", level: 88 },
      { name: "UI/UX Implementation", level: 82 },
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <SectionWrapper id="skills" className="bg-secondary/30">
      <div className="mb-14">
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

      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <div
            key={category.title}
            className="card-hover rounded-2xl border border-border bg-card p-6 lg:p-7"
            style={{
              transitionDelay: `${catIndex * 100}ms`,
            }}
          >
            <h3 className="mb-6 text-base font-semibold tracking-tight text-foreground lg:text-lg">
              {category.title}
            </h3>
            <div className="flex flex-col gap-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono tabular-nums text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-primary to-primary/70 ${
                        isVisible ? "animate-skill-fill" : ""
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        animationDelay: `${catIndex * 150 + skillIndex * 80}ms`,
                        animationFillMode: "forwards",
                      }}
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
