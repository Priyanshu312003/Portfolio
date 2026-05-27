# Priyanshu Maurya — Developer Portfolio

> Terminal-style personal portfolio with a holographic/futuristic aesthetic.  
> Built with React, TypeScript, and Tailwind CSS v4.

---

## Live Demo
🔗 _Coming soon (Vercel deployment)_

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | TanStack Router |
| Build Tool | Vite |
| Package Manager | npm |

---

## Features

- **Live IST clock** in navbar with pulsing LIVE indicator
- **Animated hero** — typing animation cycling through roles, rotating wireframe 3D shape, floating particles
- **Horizontal scroll project archive** with scan-line animations on cards
- **Interactive radar/spider chart** for skills with hover detail panel
- **Scroll-triggered reveal animations** on all sections
- **Terminal-style UI** — monospace labels, `$` command lines, `//` comments throughout
- **Fully responsive** — mobile to desktop

---

## Sections

1. **Hero** — Name, role, tagline, CTA buttons, 3D wireframe graphic
2. **Projects** — Horizontal scroll archive with `/PROJ_01`, `/PROJ_02`, `/PROJ_03`
3. **Skills** — Radar chart + skill bars with proficiency percentages
4. **Experience** — Timeline: Accenture (AASE), Palo Alto Networks (Cybersecurity Intern)
5. **Education** — B.Tech (AI & ML), Google Cloud Certifications, schooling
6. **Writing & Logs** — Build logs, backend notes, daily dev journal
7. **Contact** — Terminal-style form + social links

---

## Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Timeline.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── HoloCursor.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── SectionHeader.tsx
│   └── ui/            # shadcn/ui components
├── hooks/
├── lib/
├── routes/
└── styles.css
```

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/Priyanshu312003/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Primary Accent | `#00FF94` (acid green) |
| Name Gradient | cyan → purple → blue (animated) |
| Font (UI/labels) | JetBrains Mono |
| Font (body) | Inter / Geist |

---

## Deployment

Deployed on **Vercel**.

```bash
npm install -g vercel
vercel
```

---

## About

Built as a vibe coding project using **Lovable**, then refined manually.  
Part of an ongoing build-in-public series on [X/Twitter](https://twitter.com/).

---

© 2026 Priyanshu Maurya · All Systems Nominal