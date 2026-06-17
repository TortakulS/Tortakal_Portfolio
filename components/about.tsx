import { Reveal } from '@/components/reveal'

const stack = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Tailwind CSS',
  
  'PostgreSQL',
  'MMSQL',
  
  'Git',
  'Cloudflare',
  'IIS Server',
  'Raspberry Pi 4',
  'Airflow',
  'BigQuery',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-10 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              About me
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                Computer Engineering graduate with a 3.84 GPA from KMITL and 6 months of full-stack internship experience at SCG. 
                Proficient in building production-grade web applications using React, Next.js, TypeScript, and Node.js  
                including a platform currently serving 200+ active users. Comfortable working across the full stack 
                from database design to frontend UI, with additional exposure to IoT systems and real-time data pipelines.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={120}>
            <p className="font-mono text-sm text-foreground">
              Tech I work with:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
