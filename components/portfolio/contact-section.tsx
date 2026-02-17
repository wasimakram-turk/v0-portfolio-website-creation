"use client"

import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <SectionWrapper id="contact">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Let{"'"}s work together
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground lg:text-lg">
          Have a project in mind or just want to chat? I{"'"}d love to hear from
          you. Drop me a message and I{"'"}ll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:w-[320px]">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:alex@example.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                alex@example.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Find Me Online
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-medium text-foreground">
              Currently open to
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Full-time positions, freelance projects, and consulting
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
