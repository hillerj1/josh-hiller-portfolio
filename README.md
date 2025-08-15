# Josh Hiller — Portfolio

> **Work in Progress.** This is my personal portfolio site built with Astro. I’m building it in public; expect frequent updates.

**Live URLs**
- Primary (custom domain): https://joshhiller.com *(once DNS is connected)*
- Preview (Netlify): https://<your-site>.netlify.app

---

## Tech Stack

- **Astro** (content collections)
- **TypeScript/JavaScript**
- **Markdown** for project case studies
- **Deployed on Netlify**
- Assets from `/public`

---

## Project Structure

.
├─ public/
│  ├─ assets/
│  │  ├─ hero-bg.jpg               # homepage hero background
│  │  └─ projects/
│  │     ├─ qiskit-certs.png
│  │     ├─ phy-310.png
│  │     └─ manim.png
│  └─ resume/
│     └─ Josh_Hiller_Resume.pdf
├─ src/
│  ├─ components/
│  │  └─ Welcome.astro             # hero section on Home
│  ├─ content/
│  │  ├─ config.ts                 # content collection schema
│  │  └─ projects/
│  │     ├─ qiskit-certs.md
│  │     ├─ phy-310.md
│  │     └─ manim.md
│  ├─ layouts/
│  │  └─ Layout.astro              # site-wide nav + shell
│  └─ pages/
│     ├─ index.astro               # Home (hero only)
│     ├─ about.astro
│     ├─ contact.astro
│     └─ projects/
│        ├─ index.astro            # Projects index (two categories)
│        └─ [slug].astro           # Dynamic project detail page
├─ package.json
└─ astro.config.mjs

---

## Content Model (Projects)

Defined in `src/content/config.ts`.  
Each project Markdown file must include this **frontmatter**:

```yaml
---
title: "Title of Project"
category: "Quantum Computing" # or "Computational Physics", etc.
summary: "One-sentence summary of what the project does."
problem: "What problem were you addressing?"
solution: "How you solved it / what you built."
techstack: ["Python", "Qiskit", "React", "AWS"]  # array of strings
github: "https://github.com/your/repo"
demo: ""        # optional: live demo / paper / video URL ("" if none)
image: "/assets/projects/<file>.png"   # path under /public
date: "2025-05-01"                     # optional, used for sorting
group: "Software"                      # or "Quantum" (required)
---
