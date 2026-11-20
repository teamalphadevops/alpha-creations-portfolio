import { useEffect } from 'react'
import Thumb from './Thumb.jsx'
import { CameraMark } from './Logo.jsx'

/** Popup for a project or the showreel. */
export default function Modal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isReel = item.type === 'reel'
  const video = isReel ? item.url : item.video

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-media">
          {video ? (
            <iframe src={video} title={isReel ? 'Showreel' : item.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          ) : isReel ? (
            <div className="modal-empty">
              <CameraMark className="modal-mark" animate />
              <p className="mono">Add your showreel link to <b>profile.showreel</b> in src/data.js</p>
            </div>
          ) : (
            <Thumb project={item} />
          )}
        </div>

        {!isReel && (
          <div className="modal-body">
            <div>
              <span className={`cat-pill cat-pill--${item.category}`}>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <dl className="modal-meta mono">
              <div><dt>Client</dt><dd>{item.client}</dd></div>
              <div><dt>Year</dt><dd>{item.year}</dd></div>
              <div><dt>Tools</dt><dd>{item.tools.join(', ')}</dd></div>
              {item.link && (
                <div><dt>Live</dt><dd><a href={item.link} target="_blank" rel="noreferrer">Visit site ↗</a></dd></div>
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}
