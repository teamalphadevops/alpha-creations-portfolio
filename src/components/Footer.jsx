import Logo from './Logo.jsx'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo size="md" />
        <p className="mono">© {new Date().getFullYear()} {profile.brand}. Edited, animated & coded by hand.</p>
        <a href="#top" className="to-top mono">Back to top ↑</a>
      </div>
    </footer>
  )
}
