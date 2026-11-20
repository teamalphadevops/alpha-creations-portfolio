import { useMemo, useState } from 'react'
import { projects } from '../data.js'
import Thumb from './Thumb.jsx'

const filters = [
  ['all', 'All work'],
  ['video', 'Video editing'],
  ['motion', 'Motion / AE'],
  ['web', 'Web dev'],
  ['brand', 'Branding'],
]

export default function Work({ onOpen }) {
  const [filter, setFilter] = useState('all')
  const list = useMemo(
    () => projects.filter((p) => filter === 'all' || p.category === filter),
    [filter]
  )

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <p className="eyebrow mono" data-reveal>03 — Selected work</p>
            <h2 className="section-title" data-reveal>The <em>reel</em> so far</h2>
          </div>
          <div className="filters" data-reveal role="tablist">
            {filters.map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                className={`filter ${filter === key ? 'is-active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
                <sup className="mono">
                  {key === 'all' ? projects.length : projects.filter((p) => p.category === key).length}
                </sup>
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid" key={filter}>
          {list.map((p, i) => (
            <article
              key={p.title}
              className={`work-card ${i % 5 === 0 ? 'is-wide' : ''}`}
              style={{ '--delay': `${i * 0.06}s` }}
              onClick={() => onOpen(p)}
              data-cursor={p.category === 'web' ? 'View' : 'Play'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpen(p)}
            >
              <div className="work-media">
                <Thumb project={p} />
                <span className="work-duration mono">{p.duration}</span>
                <span className="work-play">{p.category === 'web' ? '↗' : '▶'}</span>
                <div className="work-scrub"><i /></div>
              </div>
              <div className="work-info">
                <div>
                  <h3>{p.title}</h3>
                  <p className="mono">{p.client} · {p.year}</p>
                </div>
                <span className={`cat-pill cat-pill--${p.category}`}>{p.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
