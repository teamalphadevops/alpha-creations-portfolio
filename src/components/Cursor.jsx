import { useEffect, useRef } from 'react'

/** Viewfinder-style custom cursor (desktop / fine pointers only). */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('has-cursor')
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf
    const move = (e) => { x = e.clientX; y = e.clientY }
    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor]')
      ring.current?.classList.toggle('is-hover', !!t)
      ring.current?.setAttribute('data-label', t?.dataset.cursor || '')
    }
    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move)
    addEventListener('mouseover', over)
    loop()
    return () => {
      removeEventListener('mousemove', move)
      removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring"><i /><i /><i /><i /></div>
      <div ref={dot} className="cursor-dot" />
    </>
  )
}
