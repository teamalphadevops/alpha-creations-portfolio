/** Generated cover art for a project (used when no `image` is set in data.js). */
export default function Thumb({ project }) {
  const [a, b] = project.thumb || ['#2f4a1a', '#c6d84a']
  if (project.image) {
    return <img className="thumb-img" src={project.image} alt={project.title} loading="lazy" />
  }
  return (
    <div className={`thumb thumb--${project.category}`} style={{ '--a': a, '--b': b }}>
      <div className="thumb-glow" />
      {project.category === 'video' && (
        <div className="thumb-wave">
          {Array.from({ length: 36 }).map((_, i) => (
            <i key={i} style={{ '--h': `${15 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.3)) * 85}%` }} />
          ))}
        </div>
      )}
      {project.category === 'motion' && (
        <div className="thumb-shapes">
          <i className="s1" /><i className="s2" /><i className="s3" />
        </div>
      )}
      {project.category === 'web' && (
        <div className="thumb-browser">
          <div className="tb-bar"><i /><i /><i /></div>
          <div className="tb-body">
            <span className="tb-hero" />
            <span className="tb-line" /><span className="tb-line short" />
            <div className="tb-cards"><span /><span /><span /></div>
          </div>
        </div>
      )}
      {project.category === 'brand' && (
        <div className="thumb-brand">
          <span>{project.title.split(' ')[0]}</span>
        </div>
      )}
    </div>
  )
}
