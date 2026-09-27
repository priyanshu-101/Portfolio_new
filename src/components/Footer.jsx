import { profile } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="py-14 sm:py-16">
      <p className="mb-3 font-mono text-sm text-accent">05 — get in touch</p>
      <h2 className="mb-3.5 text-[22px] font-bold">Let's work together</h2>
      <p className="mb-6 max-w-[50ch] text-muted">
        Open to SDE-1, frontend, backend, and full-stack roles. Fastest way to reach me is email.
      </p>

      <div className="flex flex-wrap gap-3 font-mono text-[13px]">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-accent bg-accent px-4.5 py-2.5 font-bold text-bg"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="rounded-md border border-line px-4.5 py-2.5 transition-colors hover:border-accent hover:text-accent"
        >
          {profile.phone}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-4.5 py-2.5 transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-4.5 py-2.5 transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-10 font-mono text-xs text-[#556170]">
        Built with React + Tailwind CSS.
      </p>
    </footer>
  )
}
