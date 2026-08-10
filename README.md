# GBSBFORYOU Outreach OS v1.0

Permanent parliamentary, government, media and community outreach system.

## Identity
Presented by: GBSBFORYOU Multiple Platform
Direction & responsibility: Founder — Ajay Singh Chouhan
Basis: public-interest citizen communication.

This wording does not claim to legally represent all citizens or the entire Banjara community.

## GitHub Pages
`index.html` is the public/mobile frontend.

## Private backend
`Code.gs` is intended for a Google Sheet Apps Script deployment. Do NOT publish private contact databases, OAuth credentials, API keys or Gmail tokens in this repository.

## Workflow
Contact Master → Letter → Campaign → Human Review → Gmail Delivery → Delivery Log → Response/Follow-up.

## Contact groups
Government, Parliament, Lok Sabha MP, Rajya Sabha MP, Media, Community, Other.

## Fixed hashtags
#GorBoli #Banjara #FCRA #Sansad #Parliament #Loktantra #AapniGorBoli #BLE

## Deployment
1. Replace the repository's `index.html` with this version.
2. Commit to `main`.
3. GitHub Pages will publish it.
4. For Gmail: create a private Google Sheet, paste `Code.gs` into Apps Script, deploy as Web App, authorize Gmail/Sheets, and keep the Web App access restricted as far as your account/workflow permits.
5. Paste the Web App URL into Settings in the frontend.
6. Test connection before any real delivery.

The backend sample limits one request to 10 recipients. Test first and comply with applicable Gmail/Workspace sending and anti-spam rules.
