"use client"

import Image from "next/image"
import { ArrowDown, FileText, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground opacity-0 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-up animation-delay-200 md:text-5xl lg:text-6xl text-balance">
              Hi, I{"'"}m{" "}
              <span className="text-primary">Wasim Akram</span>
            </h1>

            <p className="mb-4 text-xl font-medium text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200 md:text-2xl">
              Associate Engineer & Front-End Developer
            </p>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animation-delay-400 lg:text-lg">
              I build responsive, high-performance web interfaces that deliver
              seamless user experiences across every device. With 2+ years of
              hands-on expertise in HTML5, CSS3, Bootstrap, JavaScript, and
              React.js, I turn designs into pixel-perfect, production-ready
              solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex-shrink-0 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border shadow-2xl md:h-96 md:w-96">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Frontend developer workspace illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 h-72 w-72 rounded-2xl border border-primary/20 md:h-96 md:w-96" />
          </div>
        </div>
      </div>
    </section>
  )
}
