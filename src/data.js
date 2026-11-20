// ─────────────────────────────────────────────────────────────
//  Kamalesh B M — site content
//  Edit everything here: text and links. No need to touch components.
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
    title: 'Motion Graphics',
    text: 'Kinetic typography, logo reveals, explainers and animated graphics that give your brand a heartbeat.',
    items: ['Logo animation', 'Kinetic typography', 'Explainer videos', 'Animated graphics'],
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

export const process = [
  { step: '01', title: 'Brief', text: 'We talk goals, audience, references and deadlines.', track: 'V1', len: 18 },
  { step: '02', title: 'Rough Cut', text: 'Story structure first — the skeleton of the edit or site.', track: 'V1', len: 26 },
  { step: '03', title: 'Motion & Polish', text: 'Graphics, transitions, colour, sound, interactions.', track: 'V2', len: 30 },
  { step: '04', title: 'Delivery', text: 'Exports for every platform, or a deployed live website.', track: 'A1', len: 26 },
]

export const tools = [
  { name: 'Premiere Pro', abbr: 'Pr', level: 95, color: '#9999ff' },
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
