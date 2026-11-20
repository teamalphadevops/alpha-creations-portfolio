const words = ['Video Editing', 'Motion Graphics', 'React JS', 'Colour Grading', 'Logo Design', 'Web Development', 'Sound Design']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>{w}<em>✦</em></span>
        ))}
      </div>
    </div>
  )
}
