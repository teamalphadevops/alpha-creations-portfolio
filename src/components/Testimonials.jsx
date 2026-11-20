import { useEffect, useState } from 'react'
import { testimonials } from '../data.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [i])

  return (
    <section className="section testimonials">
      <div className="container">
        <p className="eyebrow mono center" data-reveal>06 — Kind words</p>
        <div className="quote-stage" data-reveal>
          <span className="quote-mark">“</span>
          {testimonials.map((t, k) => (
            <figure key={k} className={`quote ${k === i ? 'is-active' : ''}`}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span className="mono">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="quote-nav">
          {testimonials.map((_, k) => (
            <button key={k} aria-label={`Testimonial ${k + 1}`} className={k === i ? 'is-active' : ''} onClick={() => setI(k)}>
              <i />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
