# Alpha Creations — Portfolio

React + Vite portfolio for a video editor / After Effects motion designer / web developer.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in /dist (deploy to Netlify, Vercel, GitHub Pages…)
```

## Make it yours

Everything you need to edit is in **`src/data.js`**:

- `profile` – your name, email, phone, socials, and `showreel` (a YouTube embed link like `https://www.youtube.com/embed/VIDEO_ID`)
- `projects` – your work. Each one can have `video` (embed URL), `link` (live site) or `image` (a file in `/public`, e.g. `'/work/monsoon.jpg'`)
- `services`, `stats`, `process`, `tools`, `testimonials`

**Your photo:** put it in `/public` and replace the placeholder in `src/components/About.jsx` with `<img src="/me.jpg" alt="Your name" />`.

**Contact form:** for now it opens the visitor's email app. To send from the page itself, connect Formspree or EmailJS in `src/components/Contact.jsx`.

## Logo

The logo is rebuilt as SVG + fonts (`src/components/Logo.jsx`), so it's transparent, sharp at any size, and animated.
Your original artwork is kept at `public/alpha-logo-original.webp`.

## Structure

```
src/
  data.js            ← all content
  styles.css         ← design system (colours at the top in :root)
  hooks.js           ← scroll reveal, count-up, timecode
  components/        ← Loader, Navbar, Hero, About, Services, Work, Modal,
                       Process, Tools, Testimonials, Contact, Footer, Logo, Cursor
```
