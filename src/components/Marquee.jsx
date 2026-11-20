const words = ['Video Editing', 'Web Development', 'Colour Grading', 'Sound Design', 'Content Editing', 'Website Design']

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
