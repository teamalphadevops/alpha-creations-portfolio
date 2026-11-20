import { profile, stats } from '../data.js'
import { useCountUp, useInView } from '../hooks.js'

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
            <div className="film-frame-inner">
              <img src={`${import.meta.env.BASE_URL}KBM_Pic.jpg`} alt={`Portrait of ${profile.name}`} />
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
            One creator. <em>Every frame</em> of your story.
          </h2>
          <p data-reveal>
            Hi, I'm <strong>{profile.name}</strong>, a video editor and web developer. I take your ideas from an initial edit
            to a finished video or responsive website.
          </p>
          <p data-reveal>
            That means fewer hand-offs and one person to handle both the edit and the website.
          </p>

          <div className="stats" ref={ref} data-reveal>
            {stats.map((s) => <Stat key={s.label} {...s} start={inView} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
