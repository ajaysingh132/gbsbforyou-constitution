# Digital Parliament — Repository Consolidation Register

**Master repository:** `ajaysingh132/gbsbforyou-constitution`  
**Purpose:** Keep one canonical, mobile-friendly Digital Parliament project while preserving the original repositories as traceable sources until each migration is verified.

## Consolidation policy

- This register is an inventory and migration tracker, not a claim that every related repository has already been merged.
- Do not delete or archive a source repository until its files, history, deployment dependencies, secrets/configuration boundaries, and license have been reviewed.
- Preserve original attribution and source links.
- Avoid overwriting files with the same name without comparing their contents.
- Do not copy secrets, access tokens, private member records, or Supabase service-role keys into the frontend.
- Roles, representative status, membership, election results, and decision authority must never be fabricated by the UI or assigned from an untrusted client.
- AI may summarize and analyze; human governance processes retain decision authority.

## Known source repositories and current status

| Source repository | Relevant material identified | Status in master repository |
|---|---|---|
| [gbsbforyou-constitution](https://github.com/ajaysingh132/gbsbforyou-constitution) | Existing Digital Parliament UI pages, dashboards and governance screens | **Master UI repository** |
| [GBSB4U/digital-parliament-core](https://github.com/GBSB4U/digital-parliament-core) | Community governance model, parliament structure, decision model, proposal lifecycle, AI-assistance rules | Core Markdown documents copied under `docs/core/` |
| [GBSB4U/digital-parliament-ui](https://github.com/GBSB4U/digital-parliament-ui) | UI architecture, role permissions, API boundary, governance white paper and UI implementation | Selected specifications and white paper copied under `docs/ui-specs/`; source UI code still needs file-by-file comparison |
| [Gbsb4usabha](https://github.com/ajaysingh132/Gbsb4usabha) | Separate Sabha application with HTML/CSS/JavaScript and Node files | **Not yet merged**; requires dependency and behavior review |
| [Gbsb4upc](https://github.com/ajaysingh132/Gbsb4upc) | Android project structure | **Not yet merged**; assess whether it is a companion app or separate product |
| [GBSBFORYOU-Platform](https://github.com/ajaysingh132/GBSBFORYOU-Platform) | Platform governance, repository registry, architecture and project management documents | **Reference candidate**; only Digital Parliament-specific material should be migrated |
| [Charter of the Banjara Community of India](https://github.com/ajaysingh132/Charter-of-the-Banjara-Community-of-India-) | Community charter draft | **Reference candidate**; requires content review before inclusion |
| [NST repository](https://github.com/ajaysingh132/Samadhi-NST-gbsbforyou-gbsbforyou-) | Nomadic Sahakari Tantra proposal, regional Banjara Nayak leadership, annual convention and cooperative enterprise framework | **Related project, not a UI component**; integrate by documented interface and links, not indiscriminate code copying |
| [Banjara Language Engine](https://github.com/ajaysingh132/Banjara-Language-Engine-BLE-v1.0) | Banjara language digital resource | **Related service**; possible future language/localization integration, not merged |
| [Nomadic-and-Denotified-Communities-Cooperative-Code-2026](https://github.com/ajaysingh132/Nomadic-and-Denotified-Communities-Cooperative-Code-2026) | Proposed cooperative policy/code work | **Related policy project**, not merged |

## Migration phases

### Phase A — governance specifications
- [x] Import core governance model.
- [x] Import decision model and proposal lifecycle.
- [x] Import parliament structure and AI-assistance rules.
- [x] Import UI architecture, role permissions and API boundary specifications.
- [x] Import the existing governance white paper with source attribution.
- [ ] Compare overlapping rules and resolve conflicts explicitly; do not silently rewrite approved source documents.

### Phase B — source inventory
- [ ] Locate and review all approximately 35 repositories the project owner identifies as Digital Parliament-related.
- [ ] Record each repository URL, branch, technology, entry point, deployment, database/auth dependency, license, and migration decision.
- [ ] Classify each as: merge into master, keep as independent service, reference-only, duplicate/obsolete, or archive after verification.
- [ ] Compare duplicate files before selecting the canonical implementation.

### Phase C — application integration
- [ ] Compare current master UI pages with the UI source repository.
- [ ] Consolidate shared navigation, responsive layout, design tokens and common components.
- [ ] Separate frontend, governance rules, backend/API, database schema, and deployment configuration.
- [ ] Add meeting/annual convention, regional representative reports, proposals, decisions, cooperative enterprise reports, and public accountability views as verified modules.
- [ ] Test mobile layouts and core flows before changing the live deployment.

### Phase D — security and release
- [ ] Verify authentication and role-based access enforcement on the backend.
- [ ] Verify Supabase Row Level Security (RLS), if Supabase is used.
- [ ] Ensure no secret/service-role key is shipped to the browser.
- [ ] Add accessibility, error handling, audit logs, backups, and deployment checks.
- [ ] Publish a release checklist and rollback procedure.

## Annual convention and NST integration target

The Digital Parliament should support community meetings, regional reports, agenda items, proposals, reasoned decisions, action items and follow-up status. NST can consume or link to the relevant records for regional cooperative work, enterprise progress, annual accounts and government submissions.

This is a proposed integration target. Live data exchange, shared login, or a common database is **not** implied until implemented and tested.

## Completion criteria

The consolidation is complete only when:
1. All approximately 35 source repositories have been accounted for.
2. Every source has a documented migration decision.
3. Required code and assets have been migrated with attribution and license compatibility.
4. One canonical build/deployment path is documented.
5. Core user journeys work on mobile and are tested.
6. Authentication, permissions, database rules, and secret handling are reviewed.
7. The original source repositories are retained until migration is verified.

**Status:** Initial consolidation register. Repository inventory is partial; the full set of ~35 repositories must be matched against the owner's intended list before declaring the consolidation complete.
