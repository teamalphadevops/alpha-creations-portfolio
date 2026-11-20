import { services } from '../data.js'

const icons = {
  edit: (
    <svg viewBox="0 0 48 48"><rect x="5" y="11" width="38" height="26" rx="3" /><path d="M5 18h38M5 30h38M13 11v7M21 11v7M29 11v7M37 11v7M13 30v7M21 30v7M29 30v7M37 30v7" /><path d="M21 21.5l6 2.5-6 2.5z" className="fill" /></svg>
  ),
  web: (
    <svg viewBox="0 0 48 48"><rect x="5" y="8" width="38" height="32" rx="3" /><path d="M5 16h38" /><circle cx="10" cy="12" r="1" className="fill" /><circle cx="14" cy="12" r="1" className="fill" /><path d="M19 23l-5 5 5 5M29 23l5 5-5 5M26 21l-4 14" /></svg>
  ),
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow mono" data-reveal>02 — Services</p>
          <h2 className="section-title" data-reveal>What I <em>create</em></h2>
          <p className="section-lead" data-reveal>
            Two disciplines, one consistent creative voice. Hire me for video or web projects.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.id} className="service-card" data-reveal style={{ '--delay': `${i * 0.08}s` }}>
              <div className="service-top">
                <span className="service-icon">{icons[s.id]}</span>
                <span className="track-tag mono">{s.code}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <div className="service-wave" aria-hidden="true">
                {Array.from({ length: 28 }).map((_, k) => (
                  <i key={k} style={{ '--h': `${20 + Math.abs(Math.sin(k * 1.7 + i)) * 80}%` }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
