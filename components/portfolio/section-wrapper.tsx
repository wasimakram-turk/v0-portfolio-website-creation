"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-20 md:py-28 transition-all duration-700",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  )
}
