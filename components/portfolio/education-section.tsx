"use client"

import { SectionWrapper } from "./section-wrapper"
import { GraduationCap, Award, CheckCircle2 } from "lucide-react"

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
  return (
    <SectionWrapper id="education" className="bg-secondary/30">
      <div className="mb-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Education
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Education & Core Competencies
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-base font-semibold text-foreground lg:text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            Academic Background
          </h3>
          <div className="flex flex-col gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-hover rounded-2xl border border-border bg-card p-6 hover:border-primary/30 lg:p-7"
              >
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-base font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <span className="rounded-lg bg-secondary/60 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-semibold text-primary">
                  {edu.institution}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-base font-semibold text-foreground lg:text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-4 w-4 text-primary" />
            </div>
            Core Competencies
          </h3>
          <div className="card-hover rounded-2xl border border-border bg-card p-6 hover:border-primary/30 lg:p-7">
            <ul className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/70" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
