import { profile } from '../data'

export default function Hero() {
  return (
    <section className="border-b border-line py-16 sm:py-22">
      <p className="mb-4 font-mono text-sm text-muted">// software engineer</p>
      <h1 className="mb-5 max-w-[18ch] text-[34px] font-extrabold leading-tight tracking-tight sm:text-[44px]">
        {profile.tagline}
      </h1>
      <p className="mb-8 max-w-[56ch] text-[17px] text-muted">
        {profile.name}. {profile.summary}
      </p>

      <div className="flex flex-wrap gap-3 font-mono text-[13px]">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          GitHub ↗
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn ↗
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          Email
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="rounded-md border border-line px-4 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          {profile.phone}
        </a>
      </div>

      <div className="mt-7 flex items-center gap-2 font-mono text-[13px] text-muted">
        <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
        {profile.status}
      </div>
    </section>
  )
}
