import { education } from '../data'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-16">
      <SectionHeading index="04" label="education" title="Education" />
      {education.map((e, i) => (
        <div
          key={e.school}
          className={`flex flex-wrap justify-between gap-4 py-4 ${
            i > 0 ? 'border-t border-line' : ''
          }`}
        >
          <div>
            <div className="font-bold">{e.school}</div>
            <div className="text-sm text-muted">{e.detail}</div>
          </div>
          <div className="text-right font-mono text-[12.5px] text-muted">
            {e.meta}
            <br />
            {e.extra}
          </div>
        </div>
      ))}
    </section>
  )
}
