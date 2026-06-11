'use client'

import { useState } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import type { Project } from '@/lib/portfolio-data'

export function ProjectLinks({ project }: { project: Project }) {
    const [open, setOpen] = useState(false)
    const isPrivate = !project.github || project.github === '#'

    return (
        <div className="relative flex items-center gap-1">
            {isPrivate ? (
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    onBlur={() => setOpen(false)}
                    aria-label={`${project.title} source code is private`}
                    aria-expanded={open}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                    <Lock className="size-4" />
                </button>
            ) : (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                    <GithubIcon className="size-4" />
                </a>
            )}

            {project.live && project.live !== '#' && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                    <ArrowUpRight className="size-4" />
                </a>
            )}

            {isPrivate && open && project.privateNote && (
                <div
                    role="status"
                    className="animate-fade-up absolute right-0 top-full z-10 mt-2 w-64 rounded-lg border border-border bg-popover p-3 text-xs leading-relaxed text-popover-foreground shadow-lg"
                >
                    <span className="mb-1 flex items-center gap-1.5 font-medium text-foreground">
                        <Lock className="size-3.5 text-primary" />
                        Private repository
                    </span>
                    <p className="text-pretty text-muted-foreground">
                        {project.privateNote}
                    </p>
                </div>
            )}
        </div>
    )
}
