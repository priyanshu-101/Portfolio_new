import { projects } from '../data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-16">
      <SectionHeading index="03" label="things I've built" title="Projects" />
      {projects.map((p, i) => (
        <div key={p.title} className={`py-5 ${i > 0 ? 'border-t border-line' : 'pt-0'}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="font-bold">{p.title}</span>
            <span className="font-mono text-[12.5px] text-muted">{p.meta}</span>
          </div>
          <p className="mb-2.5 mt-1.5 font-mono text-xs text-accent">{p.stack}</p>
          <ul className="list-disc space-y-1.5 pl-5 text-[14.5px] text-muted marker:text-accent">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
