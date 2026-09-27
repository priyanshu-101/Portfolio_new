export default function SectionHeading({ index, label, title }) {
  return (
    <>
      <p className="mb-3 font-mono text-sm text-accent">
        {index} — {label}
      </p>
      <h2 className="mb-7 text-[22px] font-bold">{title}</h2>
    </>
  )
}
