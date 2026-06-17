import { Reveal } from '@/components/reveal'
import { ProjectLinks } from '@/components/project-links'
import { ProjectCarousel } from '@/components/project-carousel'
import { projects ,projectsdata } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 ">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Full-Stack Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <ProjectCarousel project={project} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <ProjectLinks project={project} />
                  </div>

                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-10">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Data Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projectsdata.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <ProjectCarousel project={project} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <ProjectLinks project={project} />
                  </div>

                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
