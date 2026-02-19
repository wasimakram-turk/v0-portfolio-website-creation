"use client"

import { SectionWrapper } from "./section-wrapper"
import { GraduationCap, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const education = [
  {
    degree: "BS in Computer Science",
    institution: "Federal Urdu University, Islamabad, Pakistan",
    period: "2011",
    description:
      "Majored in Software Systems. Final year project: Medical Information Exchange (MIE) built with .NET Framework 4.0 using ASP.NET and C#.NET.",
  },
]

const certifications = [
  "Responsive Web Design & Mobile-First Development",
  "Cross-Browser Compatibility Testing & Optimization",
  "On-Page & Technical SEO Implementation",
  "UI/UX Implementation & Design Collaboration",
]

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <SectionWrapper id="education" className="bg-secondary/30">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Education
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Education & Core Competencies
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {/* Education */}
          <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            Academic Background
          </h3>
          <div className="flex flex-col gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-xl border border-border bg-card p-6 transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-base font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary">
                  {edu.institution}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
          <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Award className="h-5 w-5 text-primary" />
            Core Competencies
          </h3>
          <div>
            <div
              className={cn(
                "rounded-xl border border-border bg-card p-6 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: "180ms" }}
            >
              <ul className="flex flex-col gap-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
