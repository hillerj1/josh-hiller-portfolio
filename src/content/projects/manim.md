---
title: "Manim Visualizations for Physics & Math"
category: "Educational Visualization"
summary: "Programmatic animations using Manim to explain math/physics concepts through code-defined scenes."
problem: "Static diagrams don’t convey dynamic phenomena well; editing animations by hand is slow and hard to reproduce."
solution: "I scripted Manim scenes so animations are reproducible, tweakable, and faithful to the underlying math."
techstack: ["Python", "Manim", "FFmpeg", "LaTeX (optional)", "Git"]
github: "https://github.com/hillerj1/manim"
demo: ""
image: "/assets/projects/manim.png"
date: "2025-02-10"
group: "Software"
---
## What I Did

- **Structured the repo for repeatable animation work**
  - Split scenes into focused modules (e.g., `scenes/linear_algebra.py`, `scenes/calculus.py`, `scenes/physics.py`).
  - Shared helpers for colors, fonts, axes, and labels (e.g., `utils/axes.py`, `utils/labels.py`) so scenes stay short and consistent.
  - Standardized export settings (16:9, 1080p) and output names to keep assets organized for reuse in slides.

- **Built a library of short, pedagogical animations (examples)**
  - *Linear algebra / transforms:* animate basis vectors, visualize matrix effects (rotation \(R_\theta\), shear), area scaling via \(|\det A|\), and eigenvectors/eigenvalues as invariant directions.
  - *Calculus:* Riemann sums morphing into integrals, tangent as the limit of secants, and parametric curve motion driven by a single time parameter.
  - *Classical mechanics:* mass–spring oscillator with a **ValueTracker** showing live energy bars; projectile motion with vector decomposition and trajectories under different launch angles.
  - *Chaos / dynamics (optional):* logistic map iterations and phase portraits using **always\_redraw** updaters for responsive traces.
  - *Fourier intuition (optional):* partial sums and epicycle-style phasor drawings to converge to a target curve or signal.

- **Manim techniques & patterns I used repeatedly**
  - **MathTex / Tex** for crisp equations; consistent font size/baselines for overlays on graphs.
  - **Updaters & ValueTracker** for time-dependent geometry (sliders, “live” labels, energy bars, error metrics).
  - **Axes / NumberPlane / Vector fields** to ground visuals; custom tick/label formatting for scientific units.
  - Core animations: `Create`, `Write`, `Transform`, `ReplacementTransform`, `FadeIn/FadeOut`, with tuned `run_time` and `lag_ratio` for pacing.
  - Camera control via `MovingCameraScene` (zoom/follow a mobject) and simple 3D camera sweeps when depth helps.
  - Exported both **MP4** and lightweight **GIF** versions for web embedding and slide decks.

- **Performance & quality**
  - Used **caching** where appropriate; precomputed slow backgrounds; kept scenes modular to render independently.
  - Chose quality flags intentionally: `-pqh` for quick previews, `-p --quality=high` / `-p --quality=uhd` for finals.
  - Pinned Manim CE version in requirements to keep outputs stable across machines.

## Preview

- Preview a single scene (quick):
![Three-Body Diagram](/assets/projects/manim-threebody.gif)
*Simple three-body diagram.*