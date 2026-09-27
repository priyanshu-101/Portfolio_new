import { experience } from '../data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-16">
      <SectionHeading index="02" label="where I've worked" title="Experience" />
      {experience.map((job, i) => (
        <div
          key={job.title}
          className={`py-5 ${i > 0 ? 'border-t border-line' : 'pt-0'}`}
        >
          <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="font-bold">{job.title}</span> ·{' '}
              <span className="font-semibold text-accent">{job.org}</span>
            </div>
            <div className="whitespace-nowrap font-mono text-[12.5px] text-muted">{job.meta}</div>
          </div>
          <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[14.5px] text-muted marker:text-accent">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
