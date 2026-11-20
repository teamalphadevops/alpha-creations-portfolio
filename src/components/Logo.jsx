/**
 * Alpha Creations logo, rebuilt as SVG + web fonts so it stays crisp,
 * transparent and animatable anywhere on the site.
 * The original artwork is kept at /public/alpha-logo-original.webp.
 */
export function CameraMark({ className = '', animate = false }) {
  return (
    <svg className={`camera-mark ${animate ? 'is-animated' : ''} ${className}`} viewBox="0 0 120 104" aria-hidden="true">
      {/* sparkle drops */}
      <g className="cm-spark" fill="currentColor">
        <path d="M95 2c2.2 0 3 2 2.6 4.4L95.6 20c-.2 1-1.4 1-1.6 0L92.4 6.4C92 4 92.8 2 95 2z" />
        <path d="M113.5 8.6c1.6 1.5 1 3.6-.8 5L102 21.4c-.8.6-1.8-.2-1.3-1.1l6.6-11.3c1.2-2 3.8-2.9 6.2-.4z" transform="translate(-2 2)" />
        <path d="M117.4 26c.4 2.2-1.3 3.5-3.6 3.8l-12.6 1.4c-1 .1-1.3-1.1-.4-1.5l11.7-5c2.1-.9 4.5-.8 4.9 1.3z" transform="translate(-2 0)" />
      </g>
      {/* body brackets */}
      <g className="cm-body" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength="1" d="M34 30H12a5 5 0 0 0-5 5v52a5 5 0 0 0 5 5h22" />
        <path pathLength="1" d="M82 30h22a5 5 0 0 1 5 5v52a5 5 0 0 1-5 5H82" />
      </g>
      <rect className="cm-button" x="36" y="22" width="15" height="7" rx="1.6" fill="currentColor" />
      {/* lens */}
      <circle className="cm-ring" pathLength="1" cx="58" cy="61" r="24" fill="none" stroke="currentColor" strokeWidth="3.4" />
      <circle className="cm-lens" cx="58" cy="61" r="14.5" fill="currentColor" />
    </svg>
  )
}

export default function Logo({ size = 'md', animate = false, className = '' }) {
  return (
    <div className={`logo logo--${size} ${animate ? 'logo--animate' : ''} ${className}`} aria-label="Alpha Creations">
      <span className="logo-alpha">Alpha</span>
      <CameraMark className="logo-camera" animate={animate} />
      <span className="logo-creations">Creations</span>
    </div>
  )
}
