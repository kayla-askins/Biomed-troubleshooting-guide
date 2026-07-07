```markdown
# Biomedical Equipment Troubleshooting Guide
### Built from Real Clinical Field Experience

## Overview
Developed from hands-on clinical field service experience maintaining and repairing Fresenius 2008T hemodialysis systems across multiple clinical sites in a CMS-regulated healthcare environment.

It captures recurring failure patterns, root cause analysis findings, and step-by-step
resolution procedures drawn from over 600 real work orders. The goal is to turn tribal
knowledge into a structured, searchable reference that any biomedical technician can use.

## What This Includes
- Common error codes and what they actually mean in practice
- Failure pattern documentation by component type (flow errors, conductivity, pressure)
- Root cause analysis workflow for systematic troubleshooting
- Quick-check first steps for the most frequently occurring failures
- PM checklist aligned to CMS regulatory documentation requirements

## Tools Used
- Microsoft Excel (multi-sheet knowledge base structure)
- Fresenius TMS (work order and failure data source)
- Tableau (failure trend visualization and analysis)

## Why This Exists
Most biomedical troubleshooting knowledge lives in someone's head and disappears
when they leave. This project captures that knowledge in a structured format that
can be handed off, trained from, and continuously improved.

## Author
**Kayla Askins**
Biomedical Equipment Technician I | Fresenius Medical Care
A.S. Engineering Technology, Biomedical Specialization | Broward College
B.S. Information Technology (in progress) | Florida International University

[LinkedIn](https://linkedin.com/in/kayla-askins-b105b4177)

---
*Note: All patient data and proprietary system information has been removed.
This guide reflects general troubleshooting logic and failure pattern analysis only.*
```

---

# README 2 — BioMed CMMS Pro (Case Study / Excel Workbook)

Copy this into the README.md file in your `biomed-case-study` repository.

---

```markdown
# BioMed CMMS Pro
### A Professional Computerized Maintenance Management System Built in Excel

## Overview
BioMed CMMS Pro is a 10-sheet professional Excel workbook designed to fill a
real operational gap: most small-to-mid-size dialysis clinics and biomedical
departments lack affordable CMMS software. This workbook replicates core CMMS
functionality using tools already available in any healthcare environment.

Built as both a working clinical tool and a demonstration of technical
documentation and systems thinking applied to a real operational problem.

## What This Includes

| Sheet | Purpose |
|---|---|
| Dashboard | KPI summary and at-a-glance operational status |
| Equipment Inventory | Full asset register with location and status tracking |
| PM Tracker | Preventive maintenance schedule with EDATE-based due dates |
| Repair Log | Repair history by machine with failure categorization |
| Work Orders | Active and completed work order management |
| Parts Inventory | Parts stock levels and reorder tracking |
| Vendor Contacts | Vendor database with contact and contract information |
| Compliance Tracker | CMS-required documentation status by machine |
| Monthly KPI Report | Auto-calculated performance metrics and trend analysis |
| Instructions | User guide for non-technical staff |

## Technical Highlights
- 115 verified formulas across all sheets
- Zero circular reference errors
- EDATE-based PM scheduling for cross-version Excel compatibility
- FormulaRule-based conditional formatting for visual status indicators
- aRGB tab color coding for quick navigation
- Designed for non-technical clinical staff with embedded instructions

## Tools Used
- Microsoft Excel (advanced formulas, conditional formatting, data validation)
- Python with openpyxl (workbook generation and formula injection)

## The Problem It Solves
Field biomedical technicians are often expected to track equipment status,
parts inventory, vendor contacts, PM schedules, and compliance documentation
across multiple systems or paper logs. This workbook centralizes all of that
into one accessible file that requires no special software or IT support.

## Author
**Kayla Askins**
Biomedical Equipment Technician I | Fresenius Medical Care
A.S. Engineering Technology, Biomedical Specialization | Broward College
B.S. Information Technology (in progress) | Florida International University

[LinkedIn](https://linkedin.com/in/kayla-askins-b105b4177)
```

---

# README 3 — FlowState ADHD Focus App

Copy this into the README.md file in your `flowstate-adhd-app` repository.

---

```markdown
# FlowState
### A Focus and Task Management Progressive Web App for Neurodivergent Users

## Overview
FlowState is a Progressive Web App (PWA) designed specifically for people who
struggle with focus, task initiation, and dopamine regulation — including those
with ADHD and other executive function challenges.

Most productivity apps are built for neurotypical users. FlowState takes a
different approach: it uses XP-based gamification, short task framing, and
calm visual design to make starting and completing tasks feel rewarding
instead of overwhelming.

## Live Demo
[View FlowState on Netlify](#) *(add your Netlify link here)*

## Features
- Task management with priority and time estimates
- Focus timer with session tracking
- XP and badge gamification system for task completion
- Push notifications for reminders and focus prompts
- Offline capability via service worker
- Mobile-first, responsive design
- Local storage for persistent task data across sessions
- Installable as a home screen app on iOS and Android

## Design Philosophy
FlowState was built around one core principle: reduce the friction between
thinking about a task and actually starting it. Every design decision,
from the color palette to the notification timing, was made with
neurodivergent users in mind.

Color scheme: Teal and purple, chosen for calm focus without overstimulation.

## Tech Stack
- HTML5
- CSS3 (custom properties, flexbox, responsive design)
- Vanilla JavaScript (ES6+)
- Web App Manifest (PWA installability)
- Service Worker (offline support and push notifications)
- Local Storage (persistent data)

## How to Run Locally
1. Clone this repository
2. Open `index.html` in your browser
3. Or serve with any local server (Live Server extension in VS Code works great)

## Project Background
This app grew out of a real personal need and a genuine interest in how
technology can be designed to work with different brain types instead of
against them. It is also a practical demonstration of frontend development
skills applied to a meaningful problem.

## Author
**Kayla Askins**
A.S. Engineering Technology, Biomedical Specialization | Broward College
B.S. Information Technology (in progress) | Florida International University

[LinkedIn](https://linkedin.com/in/kayla-askins-b105b4177) |
[GitHub](https://github.com/kayla-askins)
```

---

## Quick Upload Checklist

For each project, here is exactly what to do:

**Biomed Troubleshooting Guide repo:**
- [ ] Create repo named `biomed-troubleshooting-guide`
- [ ] Paste README above into README.md
- [ ] Upload your Excel or Word troubleshooting file
- [ ] Make sure no patient data is in the file before uploading

**BioMed CMMS Pro repo:**
- [ ] Create repo named `biomed-cmms-pro`
- [ ] Paste README above into README.md
- [ ] Upload your Excel workbook file

**FlowState App repo:**
- [ ] Create repo named `flowstate-adhd-app`
- [ ] Paste README above into README.md
- [ ] Upload all HTML, CSS, JS files
- [ ] Upload manifest.json and service worker file
- [ ] Add your live Netlify link to the README where it says add your Netlify link here
