'use client'

import { useEffect, useRef, useState } from 'react'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCarousel({ project }: { project: Project }) {
    const { images, title } = project
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const total = images.length

    useEffect(() => {
        if (total <= 1 || paused) return
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % total)
        }, 3000)
        return () => clearInterval(id)
    }, [total, paused])

    // Respect reduced-motion preference.
    const reduceRef = useRef(false)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        reduceRef.current = mq.matches
        if (mq.matches) setPaused(true)
    }, [])

    return (
        <div
            className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(reduceRef.current)}
        >
            <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={src}
                        src={src || '/placeholder.svg'}
                        alt={`${title} screenshot ${i + 1}`}
                        className="size-full shrink-0 object-cover"
                    />
                ))}
            </div>

            {project.github === '#' && (
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-xs font-medium text-foreground shadow-sm backdrop-blur">
                    SCG · Private
                </span>
            )}

            {total > 1 && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                    {images.map((src, i) => (
                        <button
                            key={src}
                            type="button"
                            aria-label={`Show screenshot ${i + 1} of ${title}`}
                            aria-current={i === index}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === index
                                    ? 'w-5 bg-background'
                                    : 'w-1.5 bg-background/50 hover:bg-background/80'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}