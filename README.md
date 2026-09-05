# GBSB4U Digital Parliament UI
## Community Governance UI Package v1.0

This package implements the approved community governance UI model:

General Members -> Circle -> Local Governance Team -> District Representation -> Main Governance Team -> Team Leader

This is a frontend foundation. It does not invent live membership, election results, roles, or governance authority.

### Important
- Do not place Supabase service-role or secret keys in frontend files.
- The existing publishable Supabase key may be configured separately.
- Backend tables/RLS must be finalized before enabling live mutations.
- Roles and elected positions must be assigned by the governed backend, never by a login dropdown.
- AI remains assistive and cannot make governance decisions.

### Pages
- index.html
- dashboard.html
- circles.html
- representatives.html
- governance.html
- meetings.html
- elections.html
- login.html

### Deployment
Upload the contents of this package to the `GBSB4U/digital-parliament-ui` repository, preserving the directory structure.
