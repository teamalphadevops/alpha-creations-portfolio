// ─────────────────────────────────────────────────────────────
//  Kamalesh B M — site content
//  Edit everything here: text, projects, links. No need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  brand: 'Kamalesh B M',
  name: 'Kamalesh B M',
  roles: ['Video Editor', 'Motion Designer', 'Web Developer', 'Logo Designer'],
  tagline:
    'I cut stories that keep people watching, animate brands that move, and build fast React websites to put it all on.',
  location: 'Available worldwide · Remote',
  email: 'hello@alphacreations.com', // ← replace
  phone: '+00 000 000 0000', // ← replace
  showreel: '', // ← YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'YouTube', url: 'https://youtube.com/' },
    { label: 'Behance', url: 'https://behance.net/' },
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
}

export const stats = [
  { value: 250, suffix: '+', label: 'Videos edited' },
  { value: 80, suffix: '+', label: 'Motion projects' },
  { value: 40, suffix: '+', label: 'Websites shipped' },
  { value: 6, suffix: ' yrs', label: 'In the timeline' },
]

export const services = [
  {
    id: 'edit',
    code: 'V1',
    title: 'Video Editing',
    text: 'Story-first cuts for YouTube, reels, ads, weddings and brand films. Pacing, sound design and colour grading included.',
    items: ['Long-form & YouTube', 'Reels / Shorts / TikTok', 'Colour grading', 'Sound design & mix'],
  },
  {
    id: 'motion',
    code: 'V2',
    title: 'After Effects Motion',
    text: 'Kinetic typography, logo reveals, explainers and VFX compositing that give your brand a heartbeat.',
    items: ['Logo animation', 'Kinetic typography', 'Explainer videos', 'VFX & compositing'],
  },
  {
    id: 'web',
    code: 'W1',
    title: 'Web Development',
    text: 'Custom React websites and landing pages — fast, responsive and designed to show off video beautifully.',
    items: ['React / Vite / Next.js', 'Portfolio & landing pages', 'Animations & interactions', 'SEO & performance'],
  },
  {
    id: 'brand',
    code: 'G1',
    title: 'Logo & Branding',
    text: 'Logos and visual identities built to animate — so your brand looks just as good in motion as it does in print.',
    items: ['Logo design', 'Brand kits', 'Social templates', 'Animated logo packs'],
  },
]

// Categories: 'video' | 'motion' | 'web' | 'brand'
// thumb: two colours used for the generated cover art (or set `image` to a file in /public)
// video: optional YouTube/Vimeo embed URL shown in the project popup
export const projects = [
  {
    title: 'Monsoon — Brand Film',
    category: 'video',
    client: 'Lifestyle brand',
    year: '2026',
    duration: '01:32',
    description: 'A 90-second brand film cut from 6 hours of footage, graded warm-to-teal with custom sound design.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
    thumb: ['#2f4a1a', '#c6d84a'],
    video: '',
  },
  {
    title: 'Kinetic Type Pack',
    category: 'motion',
    client: 'Personal',
    year: '2026',
    duration: '00:45',
    description: '40 animated title templates built in After Effects with expressions-driven controls.',
    tools: ['After Effects', 'Illustrator'],
    thumb: ['#1b2b3a', '#7fd1c7'],
    video: '',
  },
  {
    title: 'Studio Portfolio Site',
    category: 'web',
    client: 'Photography studio',
    year: '2025',
    duration: 'React',
    description: 'A React + Vite gallery site with lazy-loaded video, smooth transitions and a 98 Lighthouse score.',
    tools: ['React', 'Vite', 'CSS'],
    thumb: ['#3a1f2b', '#f2a65a'],
    link: '',
  },
  {
    title: 'Wedding Highlights',
    category: 'video',
    client: 'Private',
    year: '2025',
    duration: '04:10',
    description: 'Cinematic highlight film with music-synced cuts, speed ramps and filmic grade.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    thumb: ['#40321a', '#f5d68a'],
    video: '',
  },
  {
    title: 'Logo Reveal — Tech Co.',
    category: 'motion',
    client: 'SaaS startup',
    year: '2025',
    duration: '00:08',
    description: 'Particle-based logo reveal with 3D camera move and glitch transition.',
    tools: ['After Effects', 'Element 3D', 'Trapcode'],
    thumb: ['#16213a', '#8f7bff'],
    video: '',
  },
  {
    title: 'Café Rebrand',
    category: 'brand',
    client: 'Local café',
    year: '2025',
    duration: 'Identity',
    description: 'Logo, colour palette, menu design and an animated logo sting for socials.',
    tools: ['Illustrator', 'After Effects'],
    thumb: ['#2b1a12', '#e08a5c'],
    video: '',
  },
  {
    title: 'Creator Shorts Series',
    category: 'video',
    client: 'YouTuber · 1.2M',
    year: '2026',
    duration: '00:59',
    description: '30 vertical shorts with animated captions, zooms and sound effects — 18M combined views.',
    tools: ['Premiere Pro', 'After Effects'],
    thumb: ['#1a2f2a', '#5fe0a0'],
    video: '',
  },
  {
    title: 'Agency Landing Page',
    category: 'web',
    client: 'Marketing agency',
    year: '2026',
    duration: 'React',
    description: 'Scroll-driven landing page with background video hero and a contact funnel.',
    tools: ['React', 'Framer Motion', 'Node'],
    thumb: ['#1e1e2e', '#c6d84a'],
    link: '',
  },
]

export const process = [
  { step: '01', title: 'Brief', text: 'We talk goals, audience, references and deadlines.', track: 'V1', len: 18 },
  { step: '02', title: 'Rough Cut', text: 'Story structure first — the skeleton of the edit or site.', track: 'V1', len: 26 },
  { step: '03', title: 'Motion & Polish', text: 'Graphics, transitions, colour, sound, interactions.', track: 'V2', len: 30 },
  { step: '04', title: 'Delivery', text: 'Exports for every platform, or a deployed live website.', track: 'A1', len: 26 },
]

export const tools = [
  { name: 'Premiere Pro', abbr: 'Pr', level: 95, color: '#9999ff' },
  { name: 'After Effects', abbr: 'Ae', level: 92, color: '#9999ff' },
  { name: 'DaVinci Resolve', abbr: 'Dv', level: 85, color: '#ff6b5b' },
  { name: 'Photoshop', abbr: 'Ps', level: 88, color: '#31a8ff' },
  { name: 'Illustrator', abbr: 'Ai', level: 86, color: '#ff9a00' },
  { name: 'React', abbr: 'Re', level: 90, color: '#61dafb' },
  { name: 'JavaScript', abbr: 'Js', level: 90, color: '#f7df1e' },
  { name: 'Figma', abbr: 'Fg', level: 84, color: '#a259ff' },
]

export const testimonials = [
  {
    quote: 'Kamalesh B M turned our raw footage into something we still can’t stop rewatching. Fast, communicative, and genuinely creative.',
    name: 'Client Name',
    role: 'Founder, Lifestyle brand',
  },
  {
    quote: 'Got a logo, an animated intro AND a website from one person — and it all feels like the same brand. Massive time saver.',
    name: 'Client Name',
    role: 'Owner, Café',
  },
  {
    quote: 'Our shorts retention jumped from 41% to 68% after switching editors. The captions and pacing are on another level.',
    name: 'Client Name',
    role: 'YouTube creator',
  },
]
