import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(scrollY > 40)
      const h = document.documentElement.scrollHeight - innerHeight
      setProgress(h > 0 ? scrollY / h : 0)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" onClick={close}>
          <Logo size="sm" />
        </a>
        <nav className="nav-links">
          {links.map(([label, href], i) => (
            <a key={href} href={href} onClick={close} style={{ '--i': i }}>
              <span className="mono">0{i + 1}</span>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--small nav-cta" onClick={close}>
            Hire me
          </a>
        </nav>
        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  )
}
