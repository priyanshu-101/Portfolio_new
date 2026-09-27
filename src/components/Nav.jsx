import { useState } from 'react'
import { navItems } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/" className="font-mono text-[16px] font-bold tracking-tight">
          priyanshu<span className="text-accent">.dev</span>
        </a>

        <button
          className="rounded-md border border-line px-2.5 py-1.5 font-mono text-sm sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          menu
        </button>

        <div
          className={`font-mono text-[14px] sm:flex sm:gap-8 ${
            open
              ? 'fixed inset-x-0 top-16 flex flex-col gap-0 border-b border-line bg-bg px-6 pb-4'
              : 'hidden'
          }`}
        >
          {navItems.map((item) => {
            if (item.id === 'contact') {
              // only show the contact button inside the mobile menu when open
              return open ? (
                <a
                  key={item.id}
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-accent px-3 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
                >
                  {item.label}
                </a>
              ) : null
            }

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-muted transition-colors hover:text-accent focus-visible:text-accent sm:border-none sm:py-0"
              >
                {item.label}
              </a>
            )
          })}
        </div>
        <a href="/contact" className="ml-2 hidden rounded-md border border-accent px-3 py-1 font-mono text-sm transition-colors hover:bg-accent hover:text-bg sm:inline-block">
          Contact
        </a>
      </nav>
    </header>
  )
}
