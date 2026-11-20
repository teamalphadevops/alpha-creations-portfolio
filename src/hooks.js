import { useEffect, useRef, useState } from 'react'

/** Adds `is-visible` to elements with [data-reveal] when they scroll into view. */
export function useRevealAll(enabled = true) {
  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const check = () => {
      raf = 0
      const limit = innerHeight * 0.9
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add('is-visible')
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check) }
    check()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    const id = setInterval(check, 800) // catches content that changes size or anchor jumps
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      clearInterval(id)
      cancelAnimationFrame(raf)
    }
  }, [enabled])
}

/** True once the element has been seen. */
export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

/** Animated number count-up. */
export function useCountUp(target, start, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return val
}

/** Running SMPTE-style timecode HH:MM:SS:FF at 24fps. */
export function useTimecode() {
  const [tc, setTc] = useState('00:00:00:00')
  useEffect(() => {
    const t0 = performance.now()
    let raf
    const pad = (n) => String(n).padStart(2, '0')
    const tick = (now) => {
      const totalFrames = Math.floor(((now - t0) / 1000) * 24)
      const f = totalFrames % 24
      const s = Math.floor(totalFrames / 24)
      setTc(`${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return tc
}
