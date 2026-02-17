"use client"

import Image from "next/image"
import { SectionWrapper } from "./section-wrapper"
import { Briefcase, Globe, Lightbulb, Users } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    label: "2+ Years Experience",
    description: "Delivering enterprise-grade front-end solutions",
  },
  {
    icon: Globe,
    label: "Hybrid & Remote",
    description: "Collaborating with on-site and distributed teams",
  },
  {
    icon: Lightbulb,
    label: "Multi-Platform",
    description: "WordPress, Power Pages, React.js, and CMS expertise",
  },
  {
    icon: Users,
    label: "Cross-Functional",
    description: "Partnering with designers and backend engineers",
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
          Building responsive, user-centered web interfaces
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
              <Image
                src="/images/wasim-profile.jpeg"
                alt="Wasim Akram"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Wasim Akram
              </p>
              <p className="text-xs text-muted-foreground">
                Associate Engineer at GuruGroup, Islamabad
              </p>
            </div>
          </div>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            I{"'"}m a Front-End Developer and Associate Engineer based in
            Islamabad, Pakistan, with a strong foundation in building
            responsive, mobile-first web interfaces. My journey started with
            HTML and CSS, and I{"'"}ve since expanded into JavaScript, Bootstrap,
            Tailwind CSS, React.js, and various CMS platforms.
          </p>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Currently at GuruGroup, I develop and maintain enterprise-grade UI
            solutions across multiple projects{"—"}from customizing Microsoft
            Power Pages components to building React.js interfaces and
            WordPress themes. I take pride in delivering cross-browser
            compatible, performance-optimized code that faithfully translates
            design intent into production.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            I{"'"}m passionate about writing clean, maintainable code and
            continuously expanding my skill set. Whether it{"'"}s implementing
            SEO best practices, optimizing page speed, or architecting
            reusable components, I{"'"}m always looking for ways to deliver
            better user experiences.
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
