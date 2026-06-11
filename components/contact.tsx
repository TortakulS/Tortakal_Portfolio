'use client'

import { useState } from 'react'
import { Download, Mail, Send } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-primary">03.</span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Contract me
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
              Let&apos;s build something together.
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I hope that those who view my portfolio will be able to collaborate with me.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer">
                    <Mail className="size-4" />
                    {profile.email}
                  </a>
                }
              />
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="size-4" />
                    GitHub
                  </a>
                }
              />
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href={profile.resume} download>
                    <Download className="size-4" />
                    Resume
                  </a>
                }
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
