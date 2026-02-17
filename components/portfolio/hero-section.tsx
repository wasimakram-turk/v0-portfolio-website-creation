"use client"

import Image from "next/image"
import { ArrowDown, FileText, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20">
      {/* Refined background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 right-0 h-[700px] w-[700px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.02] blur-[80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary opacity-0 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-in-up animation-delay-200 md:text-5xl lg:text-6xl text-balance">
              Hi, I{"'"}m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Wasim Akram
              </span>
            </h1>

            <p className="mb-5 text-lg font-semibold tracking-tight text-foreground/80 opacity-0 animate-fade-in-up animation-delay-200 md:text-xl lg:text-2xl">
              Associate Engineer & Front-End Developer
            </p>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 lg:mx-0 lg:text-lg">
              I build responsive, high-performance web interfaces that deliver
              seamless user experiences across every device. With 2+ years of
              hands-on expertise in HTML5, CSS3, Bootstrap, JavaScript, and
              React.js, I turn designs into pixel-perfect, production-ready
              solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex-shrink-0 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="animate-float relative h-72 w-72 overflow-hidden rounded-2xl border border-border/80 shadow-2xl shadow-foreground/5 md:h-96 md:w-96">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Frontend developer workspace illustration"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle image overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-72 w-72 rounded-2xl border-2 border-primary/15 md:h-96 md:w-96" />
            {/* Decorative dot pattern */}
            <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 opacity-20">
              <svg viewBox="0 0 100 100" className="h-full w-full text-primary" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={(i % 5) * 24 + 4}
                    cy={Math.floor(i / 5) * 24 + 4}
                    r="2.5"
                    fill="currentColor"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center opacity-0 animate-fade-in animation-delay-800 lg:mt-20">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-current p-1">
              <div className="h-1.5 w-1 animate-bounce rounded-full bg-current" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
