# Josh Hiller — Portfolio

> **🚧 Work in Progress** — Building in public with frequent updates

A modern, responsive portfolio website showcasing my work in quantum computing, computational physics, and software development. Built with Astro for optimal performance and developer experience.

## 🌐 Live Sites

- **Primary Domain**: [josh-hiller.com](https://josh-hiller.com) *(DNS configuration pending)*
- **Preview**: [josh-hiller-portfolio.netlify.app](https://josh-hiller-portfolio.netlify.app)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) with content collections
- **Language**: TypeScript/JavaScript
- **Content**: Markdown for project case studies
- **Styling**: Modern CSS with responsive design
- **Deployment**: Netlify with automatic builds
- **Assets**: Optimized images and documents in `/public`

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── hero-bg.jpg              # Homepage hero background
│   │   └── projects/                # Project screenshots
│   │       ├── qiskit-certs.png
│   │       ├── phy-310.png
│   │       └── manim.png
│   └── resume/
│       └── Josh_Hiller_Resume.pdf
├── src/
│   ├── components/
│   │   └── Welcome.astro            # Homepage hero component
│   ├── content/
│   │   ├── config.ts                # Content collection schema
│   │   └── projects/                # Project markdown files
│   │       ├── qiskit-certs.md
│   │       ├── phy-310.md
│   │       └── manim.md
│   ├── layouts/
│   │   └── Layout.astro             # Site-wide navigation & shell
│   └── pages/
│       ├── index.astro              # Homepage
│       ├── about.astro              # About page
│       ├── contact.astro            # Contact form
│       └── projects/
│           ├── index.astro          # Projects overview
│           └── [slug].astro         # Dynamic project pages
├── package.json
└── astro.config.mjs
```

## 📝 Content Schema

Projects are defined using a structured frontmatter schema in `src/content/config.ts`. Each project file requires:

```yaml
---
title: "Project Title"
category: "Quantum Computing"           # Project category
summary: "One-sentence project summary"
problem: "Problem statement"
solution: "Solution description"
techstack: ["Python", "Qiskit", "React", "AWS"]
github: "https://github.com/username/repo"
demo: ""                               # Optional demo URL
image: "/assets/projects/filename.png" # Project screenshot
date: "2025-01-01"                    # Optional, for sorting
group: "Software"                      # Required: "Software" or "Quantum"
---
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/hillerj/josh-hiller-portfolio.git
   cd josh-hiller-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📚 Project Categories

- **Quantum Computing**: Qiskit implementations, quantum algorithms
- **Computational Physics**: Numerical simulations, data analysis
- **Software Development**: Web applications, APIs, tools

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome! Feel free to open an issue or reach out directly.

## 📄 License

Personal project - all rights reserved.

---

**Connect**: [LinkedIn](https://linkedin.com/in/joshhiller) | [GitHub](https://github.com/hillerj) | [Email](mailto:josh@josh-hiller.com)
