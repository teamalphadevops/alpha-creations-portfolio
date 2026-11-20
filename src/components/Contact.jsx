import { useState } from 'react'
import { profile } from '../data.js'

const types = ['Video editing', 'Website', 'Full package']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: types[0], message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // Opens the visitor's email app with the message pre-filled.
  // Swap this for Formspree / EmailJS / your own API if you want in-page sending.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project: ${form.type} — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-text">
          <p className="eyebrow mono" data-reveal>07 — Contact</p>
          <h2 className="section-title big" data-reveal>
            Let's make<br /><span className="script">something</span> that moves.
          </h2>
          <p data-reveal>Tell me about your video or website project. I usually reply within 24 hours.</p>
          <ul className="contact-list" data-reveal>
            <li><span className="mono">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="mono">Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            <li><span className="mono">Based</span><span>{profile.location}</span></li>
          </ul>
          <div className="socials" data-reveal>
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} data-reveal>
          <div className="field">
            <input id="name" required value={form.name} onChange={set('name')} placeholder=" " />
            <label htmlFor="name">Your name</label>
          </div>
          <div className="field">
            <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder=" " />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="chips">
            <span className="mono">I need</span>
            {types.map((t) => (
              <button type="button" key={t} className={`chip ${form.type === t ? 'is-active' : ''}`} onClick={() => setForm({ ...form, type: t })}>
                {t}
              </button>
            ))}
          </div>
          <div className="field">
            <textarea id="message" rows="5" required value={form.message} onChange={set('message')} placeholder=" " />
            <label htmlFor="message">Tell me about your project</label>
          </div>
          <button className="btn btn--full" type="submit">Send message <span className="arrow">→</span></button>
        </form>
      </div>
    </section>
  )
}
