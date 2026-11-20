import { tools } from '../data.js'
import { useInView } from '../hooks.js'

export default function Tools() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <section className="section tools">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow mono" data-reveal>05 — Toolkit</p>
          <h2 className="section-title" data-reveal>Timeline <em>&</em> terminal</h2>
        </div>
        <div className={`tools-grid ${inView ? 'is-in' : ''}`} ref={ref}>
          {tools.map((t, i) => (
            <div className="tool" key={t.name} style={{ '--c': t.color, '--lvl': `${t.level}%`, '--delay': `${i * 0.07}s` }} data-reveal>
              <span className="tool-icon">{t.abbr}</span>
              <div className="tool-info">
                <div className="tool-row">
                  <span>{t.name}</span>
                  <span className="mono">{t.level}%</span>
                </div>
                <div className="tool-bar"><i /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
