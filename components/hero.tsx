'use client'

import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="animate-fade-up font-mono text-sm text-primary [animation-delay:0ms]">
          Hi, my name is
        </p>
        <h1 className="animate-fade-up mt-4 text-balance text-5xl font-semibold tracking-tight text-foreground [animation-delay:80ms] sm:text-7xl">
          {profile.name}.
        </h1>
        <h2 className="animate-fade-up mt-2 text-balance text-3xl font-semibold tracking-tight text-muted-foreground [animation-delay:160ms] sm:text-5xl">
          I build things for the web.
        </h2>
        <p className="animate-fade-up mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground [animation-delay:240ms]">
          {profile.tagline}
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:320ms]">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a href="#contact">
                <Mail className="size-4" />
                Contact me !
              </a>
            }
          />
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={
              <a href={profile.resume} download>
                <Download className="size-4" />
                Download Resume
              </a>
            }
          />
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
