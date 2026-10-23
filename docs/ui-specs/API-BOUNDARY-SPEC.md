<!-- Consolidated from GBSB4U/digital-parliament-ui/API-BOUNDARY-SPEC.md; source kept unchanged for traceability. -->

# API Boundary Specification – GBSB4U
## (v1.0)

This document defines the technical and ethical boundaries governing all APIs
used within the GBSB4U Digital Parliament ecosystem.

Its purpose is to ensure that:
- No software system overrides constitutional authority
- AI remains an assistant, never a decision-maker
- All actions are auditable, reversible, and accountable

---

## 1. Core Principle

**Authority belongs only to verified human roles operating under the GBSB4U Constitution.**

APIs exist to:
- Read
- Analyze
- Assist
- Record

APIs do **not** exist to:
- Decide
- Enforce
- Punish
- Override

---

## 2. API Classification

### 2.1 Read APIs (Allowed)

These APIs may:
- Fetch proposals
- Fetch debates and transcripts
- Fetch voting records
- Fetch public metadata
- Fetch anonymized analytics

Restrictions:
- No write capability
- No data mutation
- No hidden prioritization

---

### 2.2 Analysis APIs (Allowed)

These APIs may:
- Summarize content
- Highlight logical inconsistencies
- Provide statistical insights
- Detect policy conflicts
- Offer comparative references

Restrictions:
- Output must be advisory
- No prescriptive language
