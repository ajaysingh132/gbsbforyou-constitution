# All News Truth Pipeline — Integration

## New files
- `source-discovery-provider.ts`
- `truth-api.ts`

## What this changes
The new endpoints create a real runtime path:

`authenticated request -> source discovery -> evidence -> fact-check/analysis -> AI reasoning -> human review`

The AI model is not allowed to act as the source of evidence.

## Environment variables
Required for live research:

- `ALL_NEWS_SOURCE_SEARCH_URL` — internal/provider endpoint that returns EvidenceItem-compatible JSON.
- `ALL_NEWS_SOURCE_SEARCH_TOKEN` — optional bearer token.
- `CLAUDE_API_KEY` — required for AI enrichment/analysis.
- `ALL_NEWS_AI_MODEL` — optional; defaults to `claude-sonnet-4-6`.

## Mounting
If your Express server imports `truthAiRouter`, mount it alongside the existing AI router:

`app.use("/ai", truthAiRouter);`

If the existing `/ai` router is retained, use a separate mount to avoid path collisions:

`app.use("/truth-ai", truthAiRouter);`

Then the endpoints are:

- `POST /truth-ai/truth/research`
- `POST /truth-ai/truth/fact-check`
- `POST /truth-ai/truth/analysis`

All routes require the existing `authenticate` middleware.

## Important
Do not expose the source-search provider directly to the public internet without authentication, rate limiting and logging.
Do not auto-publish any output from these endpoints.
