<div align="center">

<img src="public/icon.svg" width="72" height="72" alt="Blinkit icon"/>

# Blinkit — Concept Landing Page

A pixel-perfect, fully-animated Next.js concept recreation of the **Blinkit** instant-delivery experience. Dark theme, lime accents, interactive modal system, and responsive across every device.

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-c9ff3d?logoColor=black)](#license)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

[Live Demo](#) · [Report Bug](https://github.com/shubh791/blinkit/issues) · [Connect](#author)

</div>

---

## Overview

This project is a **UI concept** — not affiliated with the real Blinkit / Zomato. It demonstrates modern front-end techniques: scroll-reveal animations, floating card physics, a fully interactive modal system, responsive mobile-first layout, and a clean component architecture built with the Next.js App Router.

---

## Features

- **10-minute delivery aesthetic** — animated rider stage, floating product cards, live ETA badge
- **Interactive modal system** — every button and link opens a contextually relevant modal overlay (developer card, product info, coming-soon)
- **Scroll-reveal animations** — IntersectionObserver-driven fade-in for each section
- **Infinite marquee ticker** — CSS animation with hover-pause
- **Animated step badges** — cycling highlight across the "How it works" section
- **Mobile-first responsive** — hamburger drawer, stacked layouts, scaled stage at every breakpoint (380 → 1440px)
- **Footer with icon links** — every footer nav item carries an SVG icon and opens a modal
- **Developer connect card** — social links open a styled developer profile modal
- **PWA-ready** — `site.webmanifest`, SVG icon, theme-color meta
- **Full Next.js App Router** — JSX only, no `src/`, no TypeScript

---

## Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Framework   | Next.js 15 (App Router)     |
| UI Library  | React 19                    |
| Styling     | Plain CSS (no preprocessor) |
| Fonts       | Sora · Space Grotesk · JetBrains Mono via Google Fonts |
| Icons       | Custom inline SVGs          |
| Deployment  | Vercel                      |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/shubh791/blinkit.git
cd blinkit

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
blinkit/
├── app/
│   ├── globals.css          # All styles — design tokens, components, responsive
│   ├── layout.jsx           # Root layout — metadata, OG tags, Google Fonts
│   ├── page.jsx             # Entry point — renders <App />
│   └── not-found.jsx        # Custom 404 page
│
├── components/
│   ├── icons.jsx            # Shared SVG icon library
│   ├── Modal.jsx            # Reusable modal overlay (dev card + info card)
│   ├── App.jsx              # Root component — modal state + scroll-reveal
│   ├── Nav.jsx              # Sticky navbar + mobile hamburger drawer
│   ├── Hero.jsx             # Hero section + animated RiderStage
│   ├── Marquee.jsx          # Infinite-scroll product ticker
│   ├── Categories.jsx       # 12-col photo grid with hover effects
│   ├── StatsBand.jsx        # 4-metric headline band
│   ├── HowItWorks.jsx       # 3-step explainer with cycling badge animation
│   ├── AppShowcase.jsx      # Phone mockup + feature list
│   ├── Partners.jsx         # Partner profiles + perks grid
│   ├── CTA.jsx              # Full-width call-to-action banner
│   └── Footer.jsx           # Footer with icon nav links + developer card
│
├── public/
│   ├── assets/rider.png     # Delivery rider photo
│   ├── icon.svg             # App icon (lime lightning bolt)
│   └── site.webmanifest     # PWA manifest
│
├── next.config.js
└── package.json
```

---

## Design Tokens

The entire color palette and spacing system lives in CSS custom properties:

```css
--bg:        #07080a   /* page background      */
--lime:      #c9ff3d   /* primary accent        */
--ink:       #f5f6f7   /* primary text          */
--ink-3:     #8a8f99   /* muted text            */
--font-display: "Sora"
--font-ui:      "Space Grotesk"
--font-mono:    "JetBrains Mono"
```

---

## Responsive Breakpoints

| Breakpoint | Target                     |
|------------|----------------------------|
| ≥ 980px    | Desktop (full layout)       |
| ≤ 980px    | Tablet — hamburger menu, single-column hero |
| ≤ 768px    | Large phone — stacked showcase, smaller padding |
| ≤ 600px    | Phone — clipped stage, hidden floats, stacked CTAs |
| ≤ 380px    | Small phone — tighter shell, scaled typography |

---

## Author

**Shubham Panghal** — Full-stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubham-panghal/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&logoColor=white)](https://github.com/shubh791)

---

## License

This project is open source under the [MIT License](LICENSE).

> **Disclaimer:** This is an independent concept design. Blinkit™ and its branding are trademarks of Zomato Ltd. This project is not affiliated with, endorsed by, or connected to Blinkit or Zomato in any way.
