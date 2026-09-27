import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import SectionHeading from './components/SectionHeading'

function Home() {
  return (
    <main className="mx-auto max-w-[1100px] px-6">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  )
}

function Contact() {
  return (
    <main className="mx-auto max-w-[900px] px-6 py-16">
      <SectionHeading index="05" label="contact" title="Get in touch" />
      <div className="mt-6 rounded-lg border border-line bg-surface p-6">
        <p className="mb-4 text-muted">Open to roles — fastest way to reach me is email.</p>
        <a
          href={`mailto:${'priyanshuagarwal1008@gmail.com'}`}
          className="inline-block rounded-md bg-accent px-4 py-2 font-bold text-bg"
        >
          Email me
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div id="top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="mx-auto max-w-[1100px] px-6">
        <Footer />
      </div>
    </div>
  )
}
