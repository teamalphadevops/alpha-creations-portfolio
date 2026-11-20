import { profile, stats } from '../data.js'
import { useCountUp, useInView } from '../hooks.js'
import { CameraMark } from './Logo.jsx'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <strong>{n}<span>{suffix}</span></strong>
      <small>{label}</small>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-visual" data-reveal>
          <div className="film-frame">
            {/* Replace with <img src="/your-photo.jpg" alt="..." /> to show your portrait */}
            <div className="film-frame-inner">
              <CameraMark className="about-mark" />
              <span className="mono">YOUR_PHOTO.jpg</span>
            </div>
            <div className="sprockets sprockets--l" />
            <div className="sprockets sprockets--r" />
          </div>
          <div className="about-badge mono">
            <span className="rec"><b /></span> Open for projects
          </div>
        </div>

        <div className="about-text">
          <p className="eyebrow mono" data-reveal>01 — About</p>
          <h2 className="section-title" data-reveal>
            One creator. <em>Every frame</em> of your brand.
          </h2>
          <p data-reveal>
            Hi, I'm <strong>{profile.name}</strong>, the person behind <strong>Alpha Creations</strong>.
            I'm a video editor and After Effects motion designer who also writes code — so I can take an idea
            from a logo sketch, to an animated intro, to a finished edit, to the React website it lives on.
          </p>
          <p data-reveal>
            That means fewer hand-offs, a brand that feels consistent everywhere, and someone who understands
            both the timeline and the codebase.
          </p>

          <div className="stats" ref={ref} data-reveal>
            {stats.map((s) => <Stat key={s.label} {...s} start={inView} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
