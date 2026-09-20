/* Battle of Britain presentation
   Restrained briefing style: navy, steel grey, one light-blue signal colour. */

:root {
  --navy-900: #0b1626;
  --navy-800: #10223a;
  --navy-700: #193353;
  --navy-500: #52657f;
  --steel-300: #a9b6c7;
  --steel-100: #e6eaf0;
  --paper: #f3f4f6;
  --ink: #141c28;
  --muted: #4a5a70;
  --signal: #8db3e0;

  --serif: Georgia, "Iowan Old Style", "Times New Roman", serif;
  --sans: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  --gutter: clamp(1rem, 4vw, 3rem);
}

*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4.5rem;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.0625rem;
  line-height: 1.65;
}

a { color: inherit; }

:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}

/* ---------- Header ---------- */

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem var(--gutter);
  background: var(--navy-900);
  color: var(--steel-100);
  font-family: var(--sans);
  font-size: 0.95rem;
}

.brand {
  font-weight: 600;
  text-decoration: none;
}

.site-header nav {
  display: flex;
  gap: 1.5rem;
}

.site-header nav a {
  color: var(--steel-300);
  text-decoration: none;
}

.site-header nav a:hover { color: #fff; }

/* ---------- Cover ---------- */

.hero {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: flex-end;
  min-height: 78vh;
  padding: clamp(2rem, 6vw, 5rem) var(--gutter);
  background: var(--navy-800);
  color: #fff;
}

/* Optional photo: save it as images/cover.jpg. If it is missing, the plain navy shows. */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background: url("images/cover.jpg") center / cover no-repeat;
  filter: grayscale(1) contrast(1.15);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to top, rgba(11, 22, 38, 0.96), rgba(16, 34, 58, 0.78));
}

.hero-text {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.6rem, 8vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.lede {
  max-width: 36ch;
  margin: 1.25rem 0 0;
  font-size: clamp(1.15rem, 2.4vw, 1.5rem);
  line-height: 1.4;
  color: var(--steel-100);
}

.presenter {
  margin: 2.5rem 0 0;
  font-family: var(--sans);
  font-size: 0.95rem;
  color: var(--steel-300);
}

/* ---------- Sections ---------- */

.section {
  padding: clamp(3rem, 7vw, 5.5rem) var(--gutter);
}

.section-light { background: var(--paper); }
.section-white { background: #fff; }
.section-dark  { background: var(--navy-900); color: var(--steel-100); }

.wrap {
  max-width: 1100px;
  margin: 0 auto;
}

.section h2 {
  margin: 0 0 1.75rem;
  font-size: clamp(1.9rem, 4vw, 2.7rem);
  font-weight: 600;
  line-height: 1.15;
}

.note,
.intro {
  margin: -0.75rem 0 2rem;
  font-family: var(--sans);
  font-size: 0.95rem;
  color: var(--muted);
}

.intro { color: var(--steel-300); }

/* ---------- Background ---------- */

.background-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.prose h3,
.glance h3 {
  margin: 2rem 0 0.4rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.prose h3:first-child { margin-top: 0; }

.prose p {
  margin: 0;
  max-width: 66ch;
}

.glance {
  padding-left: 1.5rem;
  border-left: 3px solid var(--navy-700);
}

.glance h3 { margin-top: 0; }

.glance dl { margin: 1rem 0 0; }

.glance dt {
  font-family: var(--sans);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--muted);
}

.glance dd {
  margin: 0.1rem 0 1.1rem;
  font-size: 1rem;
  line-height: 1.5;
}

/* ---------- Key events ---------- */

.phase { margin-top: 3rem; }
.phase:first-of-type { margin-top: 0; }

.phase h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.phase-dates {
  margin: 0.15rem 0 0.75rem;
  font-family: var(--sans);
  font-size: 0.95rem;
  color: var(--muted);
}

.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline li {
  display: grid;
  grid-template-columns: 10rem minmax(0, 1fr);
  gap: 0.5rem 1.5rem;
  padding: 0.9rem 0.75rem;
  border-top: 1px solid #d5dae2;
}

.timeline li:last-child { border-bottom: 1px solid #d5dae2; }

.timeline li.turning {
  background: var(--steel-100);
  border-top-color: var(--navy-700);
}

.timeline time {
  font-family: var(--sans);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--navy-700);
}

.timeline h4 {
  margin: 0 0 0.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.35;
}

.timeline p {
  margin: 0;
  max-width: 64ch;
}

/* ---------- Resources ---------- */

.media-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.media-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--navy-500);
  border-radius: 2px;
  background: transparent;
  color: var(--steel-100);
  font-family: var(--sans);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;
}

.media-btn:hover { border-color: var(--steel-300); }

.media-btn[aria-expanded="true"] {
  border-color: var(--signal);
  background: var(--signal);
  color: var(--navy-900);
  font-weight: 600;
}

.count {
  margin-left: 0.35rem;
  opacity: 0.75;
}

.count:empty { display: none; }

.media-hint {
  margin: 1.5rem 0 0;
  font-family: var(--sans);
  color: var(--steel-300);
}

.media-hint[hidden] { display: none; }

.panel { margin-top: 2rem; }
.panel[hidden] { display: none; }

.empty p {
  max-width: 60ch;
  margin: 0;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--navy-700);
  background: var(--navy-800);
  font-family: var(--sans);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--steel-100);
}

.empty code {
  padding: 0.1rem 0.35rem;
  background: var(--navy-900);
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.9em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
}

.grid-video { grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); }

.tile { margin: 0; }

.thumb {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: zoom-in;
}

.thumb img,
.doc-tile {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--navy-800);
}

.thumb img { object-fit: cover; }

.doc-tile {
  display: grid;
  place-items: center;
  padding: 1rem;
  background: var(--navy-700);
  text-align: center;
  font-size: 1.1rem;
}

.thumb:hover img,
.thumb:hover .doc-tile { filter: brightness(1.12); }

.tile figcaption {
  margin-top: 0.5rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--steel-300);
}

.tile video,
.tile iframe {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  background: #000;
}

/* Booklet */

.booklet-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-family: var(--sans);
  font-size: 0.95rem;
}

.booklet-bar button,
.booklet-bar a {
  padding: 0.5rem 1rem;
  border: 1px solid var(--navy-500);
  border-radius: 2px;
  background: transparent;
  color: var(--steel-100);
  font: inherit;
  text-decoration: none;
  cursor: pointer;
}

.booklet-bar button:hover,
.booklet-bar a:hover { border-color: var(--steel-300); }

.booklet-bar button[aria-current="true"] {
  border-color: var(--signal);
  color: var(--signal);
}

.booklet-frame iframe {
  display: block;
  width: 100%;
  height: min(80vh, 900px);
  border: 0;
  background: #fff;
}

.booklet-frame img {
  display: block;
  max-width: 100%;
  max-height: 80vh;
  margin: 0 auto;
}

/* ---------- Footer ---------- */

.site-footer {
  padding: 1.5rem var(--gutter);
  background: #08111e;
  color: var(--steel-300);
  font-family: var(--sans);
  font-size: 0.9rem;
}

.site-footer p { max-width: 1100px; margin: 0 auto; }

/* ---------- Viewer ---------- */

#viewer {
  width: min(96vw, 1200px);
  height: min(92vh, 900px);
  max-width: none;
  max-height: none;
  padding: 0;
  border: 0;
  background: var(--navy-900);
  color: #fff;
}

#viewer[open] {
  display: flex;
  flex-direction: column;
}

#viewer::backdrop { background: rgba(5, 10, 18, 0.88); }

.viewer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--navy-700);
  font-family: var(--sans);
  font-size: 0.95rem;
}

.viewer-bar p { margin: 0; }

.viewer-actions { display: flex; gap: 0.5rem; }

.viewer-actions button {
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--navy-500);
  border-radius: 2px;
  background: transparent;
  color: #fff;
  font: inherit;
  cursor: pointer;
}

.viewer-actions button:hover { border-color: var(--steel-300); }
.viewer-actions button[hidden] { display: none; }

#viewer-body {
  flex: 1;
  min-height: 0;
  display: grid;
  place-items: center;
  overflow: auto;
}

#viewer-body img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

#viewer-body iframe {
  width: 100%;
  height: 100%;
  border: 0;
  background: #fff;
}

/* ---------- Small screens ---------- */

@media (max-width: 800px) {
  .background-grid { grid-template-columns: 1fr; }

  .timeline li {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}

@media (max-width: 520px) {
  .site-header nav { gap: 1rem; }
  .brand { display: none; }
}
