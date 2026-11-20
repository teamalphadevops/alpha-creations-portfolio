import { process } from '../data.js'
import { useInView } from '../hooks.js'

const tracks = ['V2', 'V1', 'A1']

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.35 })
  let offset = 0
  const clips = process.map((p) => {
    const c = { ...p, left: offset }
    offset += p.len
    return c
  })

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow mono" data-reveal>04 — Process</p>
          <h2 className="section-title" data-reveal>From brief to <em>final export</em></h2>
          <p className="section-lead" data-reveal>Every project runs on the same timeline — clear steps, no surprises.</p>
        </div>

        <div data-reveal>
        <div className={`timeline ${inView ? 'is-playing' : ''}`} ref={ref}>
          <div className="tl-toolbar mono">
            <span className="tl-dots"><i /><i /><i /></span>
            <span>Sequence 01 — Your Project</span>
            <span className="hide-sm">00:00:00:00 / 00:01:40:00</span>
          </div>
          <div className="tl-ruler mono">
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} style={{ left: `${i * 10}%` }}>{`00:${String(i * 10).padStart(2, '0')}`}</span>
            ))}
          </div>
          <div className="tl-tracks">
            {tracks.map((t) => (
              <div className="tl-track" key={t}>
                <span className="tl-label mono">{t}</span>
                <div className="tl-lane">
                  {clips.filter((c) => c.track === t).map((c) => (
                    <div
                      key={c.step}
                      className={`tl-clip tl-clip--${t.toLowerCase()}`}
                      style={{ left: `${c.left}%`, width: `${c.len}%`, '--delay': `${c.left / 60}s` }}
                    >
                      <b className="mono">{c.step}</b> {c.title}
                    </div>
                  ))}
                  {t === 'A1' && (
                    <div className="tl-audio">
                      {Array.from({ length: 90 }).map((_, i) => (
                        <i key={i} style={{ '--h': `${10 + Math.abs(Math.sin(i * 0.45) * Math.sin(i * 0.13)) * 90}%` }} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="tl-playhead"><span /></div>
          </div>
        </div>
        </div>

        <div className="process-steps">
          {process.map((p, i) => (
            <div className="process-step" key={p.step} data-reveal style={{ '--delay': `${i * 0.1}s` }}>
              <span className="mono">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
