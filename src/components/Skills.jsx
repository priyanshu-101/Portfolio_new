import { skills } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16">
      <SectionHeading index="01" label="capabilities" title="Skills" />
      <dl className="grid grid-cols-1 gap-x-5 gap-y-3.5 text-[14.5px] sm:grid-cols-[140px_1fr]">
        {skills.map((s) => (
          <div key={s.label} className="contents">
            <dt className="pt-0.5 font-mono text-[12.5px] text-muted sm:pt-0.5">{s.label}</dt>
            <dd className="mb-2 sm:mb-0">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
