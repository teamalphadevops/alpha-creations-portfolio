import { useCallback, useState } from 'react'
import { profile } from './data.js'
import { useRevealAll } from './hooks.js'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Tools from './components/Tools.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const done = useCallback(() => setLoading(false), [])
  const close = useCallback(() => setModal(null), [])

  useRevealAll(!loading)

  return (
    <>
      {loading && <Loader onDone={done} />}
      <Cursor />
      <div className={`app ${loading ? 'is-loading' : 'is-ready'}`}>
        <Navbar />
        <main>
          <Hero onReel={() => setModal({ type: 'reel', url: profile.showreel })} />
          <Marquee />
          <About />
          <Services />
          <Work />
          <Process />
          <Tools />
          <Contact />
        </main>
        <Footer />
      </div>
      {modal && <Modal item={modal} onClose={close} />}
    </>
  )
}
