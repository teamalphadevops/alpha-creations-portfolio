import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { useTimecode } from '../hooks.js'
import { CameraMark } from './Logo.jsx'

export default function Hero({ onReel }) {
  const tc = useTimecode()
  const [role, setRole] = useState(0)
  const [brandLead, ...brandRest] = profile.brand.split(' ')

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % profile.roles.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-bokeh" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>
      <div className="grain" aria-hidden="true" />

      {/* camera viewfinder overlay */}
      <div className="viewfinder" aria-hidden="true">
        <i className="vf-c vf-tl" /><i className="vf-c vf-tr" /><i className="vf-c vf-bl" /><i className="vf-c vf-br" />
        <div className="vf-top mono">
          <span className="rec"><b /> REC</span>
          <span>{tc}</span>
          <span className="hide-sm">4K · 24FPS · ISO 800</span>
        </div>
        <div className="vf-bottom mono">
          <span className="hide-sm">{profile.brand.toUpperCase().replaceAll(' ', '_')}_SHOWREEL.mp4</span>
          <span className="vf-battery"><b /><b /><b /><b /></span>
        </div>
      </div>

      <div className="hero-content container">
        <p className="eyebrow mono hero-anim" style={{ '--d': '0.1s' }}>
          <span className="dot" /> {profile.location}
        </p>

        <h1 className="hero-title">
          <span className="hero-script hero-anim" style={{ '--d': '0.25s' }}>{brandLead}</span>
          <CameraMark className="hero-camera" animate />
          <span className="hero-sub hero-anim" style={{ '--d': '0.5s' }}>{brandRest.join(' ')}</span>
        </h1>

        <div className="hero-roles hero-anim" style={{ '--d': '0.65s' }}>
          <span className="mono">I am a</span>
          <span className="role-window">
            {profile.roles.map((r, i) => (
              <span key={r} className={`role ${i === role ? 'is-active' : ''}`}>{r}</span>
            ))}
          </span>
        </div>

        <p className="hero-tagline hero-anim" style={{ '--d': '0.8s' }}>{profile.tagline}</p>

        <div className="hero-actions hero-anim" style={{ '--d': '0.95s' }}>
          <a href="#work" className="btn">View my work <span className="arrow">→</span></a>
          <button className="btn btn--ghost" onClick={onReel} data-cursor="Play">
            <span className="play-ico">▶</span> Watch showreel
          </button>
        </div>
      </div>

      <a href="#about" className="scroll-cue mono" aria-label="Scroll down">
        <span>SCROLL</span><i />
      </a>
    </section>
  )
}
