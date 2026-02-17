"use client"

import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"
import { Mail, MapPin, Send, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wasim-akram-turk",
  },
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
      <div className="mb-14">
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
                className="mb-2 block text-sm font-medium text-foreground"
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
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
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
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
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
                className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
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
        <div className="flex flex-col gap-5 lg:w-[340px]">
          <div className="card-hover rounded-2xl border border-border bg-card p-6 hover:border-primary/30">
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:eng.wasimakram@live.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                eng.wasimakram@live.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                Islamabad, Pakistan
              </div>
            </div>
          </div>

          <div className="card-hover rounded-2xl border border-border bg-card p-6 hover:border-primary/30">
            <h3 className="mb-4 text-base font-semibold text-foreground">
              Find Me Online
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-foreground">
              Currently open to
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Full-time positions, contract roles, and freelance front-end
              development projects.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
