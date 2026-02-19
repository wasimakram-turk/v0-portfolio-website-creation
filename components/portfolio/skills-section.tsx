"use client"

import { SectionWrapper } from "./section-wrapper"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "JavaScript (ES6)", level: 30 },
      { name: "Tailwind CSS", level: 50 },
    ],
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: "React.js", level: 35 },
      { name: "Microsoft Power Pages", level: 60 },
      { name: "WordPress (Themes & Plugins)", level: 85 },
      { name: "Contentstack CMS", level: 75 },
    ],
  },
  {
    title: "SEO & Performance",
    skills: [
      { name: "On-Page SEO", level: 75 },
      { name: "Technical SEO", level: 70 },
      { name: "Performance Optimization", level: 70 },
      { name: "Cross-Browser Compatibility", level: 90 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Git", level: 65 },
      { name: "Chrome DevTools", level: 88 },
      { name: "UI/UX Implementation", level: 95 },
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

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

      <div
        ref={ref}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={cn(
              "rounded-xl border border-border bg-card p-6 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${index * 120}ms` }}
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
                      style={{
                        width: isVisible ? `${skill.level}%` : 0,
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
