```markdown
# Compass

A mobile-first field reference app for Fresenius 2008T dialysis machines,
built on top of the troubleshooting guide below.

## What's in the app

- **Troubleshoot** — describe a symptom and machine number, get a matched
  response in QUICK / DETAIL / TRAINME format, drawn from the failure
  patterns documented in this repo.
- **TMS Note** — fill in service details, get a formatted, copyable work
  order note.
- **EOD Report** — log machines serviced during a shift, generate a
  copyable end-of-day summary.
- **Lessons Learned** — log Machine / Symptom / Root Cause / Corrective
  Action / Reviewed By; saved locally on the device.

The troubleshooting logic is a static, rule-based matcher (no external API,
no login, no AI branding) so it works offline and deploys as a plain
static site.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

This repo is Netlify-ready out of the box via `netlify.toml`
(`npm run build`, publish `dist`). Connect the repo in Netlify and deploy —
no environment variables or backend functions are required.

---

# Biomedical Equipment Troubleshooting Guide
### Built from Real Clinical Field Experience

## Overview
Developed from hands-on clinical field service experience maintaining and repairing Fresenius 2008T hemodialysis systems across multiple clinical sites in a CMS-regulated healthcare environment.

It captures recurring failure patterns, root cause analysis findings, and step-by-step resolution procedures drawn from real clinical work orders and field troubleshooting experience.

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
