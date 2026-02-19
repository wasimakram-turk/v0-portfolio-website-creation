"use client"

import Image from "next/image"
import { ArrowDown, FileText, Mail } from "lucide-react"
import { withBasePath } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 pt-24 pb-16">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur opacity-0 animate-fade-in-up sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-up animation-delay-200 md:text-5xl lg:text-6xl text-balance">
              Hi, I{"'"}m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Wasim Akram
              </span>
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
                aria-label="Jump to selected projects section"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                aria-label="Jump to contact section"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
              <a
                href="#"
                aria-label="Download CV"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="group relative flex-shrink-0 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/60 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 md:h-96 md:w-96">
              <Image
                src={withBasePath("/images/hero-illustration.jpg")}
                alt="Frontend developer workspace illustration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 h-72 w-72 rounded-3xl border border-primary/20 md:h-96 md:w-96" />
          </div>
        </div>
      </div>
    </section>
  )
}
