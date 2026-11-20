import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4)
      setPct(Math.floor(p))
      if (p >= 100) {
        clearInterval(id)
        setTimeout(() => setLeaving(true), 450)
        setTimeout(onDone, 1250)
      }
    }, 110)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`}>
      <div className="loader-shutter loader-shutter--top" />
      <div className="loader-shutter loader-shutter--bottom" />
      <div className="loader-inner">
        <Logo size="lg" animate />
        <div className="loader-bar"><span style={{ width: `${pct}%` }} /></div>
        <div className="loader-meta mono">
          <span>RENDERING</span>
          <span>{String(pct).padStart(3, '0')}%</span>
        </div>
      </div>
    </div>
  )
}
