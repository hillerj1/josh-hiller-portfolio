---
title: "Qiskit Certification Practice & Automation Scripts"
category: "Quantum Computing"
summary: "Python scripts & Jupyter notebooks used to study for and pass IBM’s Qiskit certifications."
problem: "Certification prep lacked a structured, exam-aligned set of practical exercises and utilities."
solution: "Built organized notebooks and helper scripts to implement circuits, simulate/run on IBM backends, and rapidly debug against the exam objectives."
techstack: ["Qiskit", "Python", "Jupyter", "IBM Quantum API", "Git"]
github: "https://github.com/hillerj1/qiskit-certs"
demo: ""
image: "/assets/projects/qiskit-certs.png"
group: "Quantum"
---
## What I Did

- **Completed three Qiskit/quantum tracks (Feb 2025)**:  
  [Basics of Quantum Information](<https://www.credly.com/badges/f7d418f7-22c7-4f73-a44b-0fa342049193>) ·
  [Practical Introduction to Quantum-Safe Cryptography](<https://www.credly.com/badges/8de69c79-7bf2-428e-85b2-d55c39942e49>) ·
  [Variational Algorithm Design](<https://www.credly.com/badges/3b471ca1-d1de-4b65-85f9-3322d911a2ff>)

- **Implemented foundational circuits in Qiskit** and verified behavior with statevector + shot histograms:
  Bell state / entanglement checks, teleportation, Deutsch–Jozsa, Grover, and a small QFT.

- **Transpiled and optimized circuits for real devices**:
  experimented with layout/routing and transpiler optimization levels; compared depth, 2-qubit counts, and estimated error.

- **Simulated device noise with Aer** to anticipate hardware behavior:
  ran circuits under realistic noise models and documented divergences vs. ideal simulation.

- **Ran jobs on IBM Quantum backends (where available)**:
  tuned shots/seeds, captured results, and recorded quick notes on fidelity/accuracy vs. simulator runs.

- **Designed and tuned variational workflows** (VQE/QAOA-style):
  built parameterized ansätze, defined cost functions, compared optimizers (e.g., COBYLA/SPSA/SLSQP), and tracked convergence curves.

- **Applied basic error-mitigation techniques**:
  measurement calibration/readout correction and simple circuit-folding experiments to gauge zero-noise style extrapolation.

- **Quantum-safe crypto study & demos**:
  summarized PQC vs. QKD at a high level; drafted Python examples of hybrid key exchange & signature verification flows; noted trade-offs (key sizes, latency, compatibility).

- **Reusable helpers & docs**:
  structured notebooks, plotting utilities, and “mini-checklists” for running the same circuit across simulator vs. hardware for consistent comparisons.

## Results / Artifacts

- **Certificates (Feb 2025)**:  
  • Basics of Quantum Information — [View certificate](<ADD_LINK>)  
  • Practical Intro to Quantum-Safe Cryptography — [View certificate](<ADD_LINK>)  
  • Variational Algorithm Design — [View certificate](<ADD_LINK>)

- **Repository**: source notebooks/scripts with step-by-step commentary and saved plots.  
- **Takeaways**: clearer intuition for parameterized circuits & optimizer behavior; practical sense of transpilation/ noise impacts; a starting toolkit for quantum-safe migration conversations.

