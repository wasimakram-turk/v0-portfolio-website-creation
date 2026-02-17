"use client"

import { Code2, Linkedin, Heart } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wasim-akram-turk",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Info */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a
              href="#"
              className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold tracking-tight">
                Wasim Akram
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Front-End Developer & Associate Engineer
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
            {currentYear} Wasim Akram. Built with
            <Heart className="h-3 w-3 text-primary" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
