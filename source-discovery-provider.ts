import { EvidenceItem } from "./all-news-editorial-core";

export interface SourceSearchResponse {
  results?: EvidenceItem[];
  data?: EvidenceItem[];
}

/**
 * Provider-neutral HTTP adapter.
 * The external source/search service must return EvidenceItem-compatible records.
 * AI models are never treated as the source of evidence.
 */
export class HttpSourceDiscoveryProvider {
  constructor(
    private readonly endpoint = process.env.ALL_NEWS_SOURCE_SEARCH_URL,
    private readonly token = process.env.ALL_NEWS_SOURCE_SEARCH_TOKEN,
  ) {}

  async search(query: string, options?: { limit?: number; language?: string }): Promise<EvidenceItem[]> {
    if (!this.endpoint) {
      throw new Error("ALL_NEWS_SOURCE_SEARCH_URL is not configured");
    }

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(this.token ? { authorization: `Bearer ${this.token}` } : {}),
      },
      body: JSON.stringify({
        query,
        limit: Math.min(Math.max(options?.limit ?? 10, 1), 50),
        language: options?.language ?? "hi",
      }),
    });

    if (!response.ok) {
      throw new Error(`Source search failed: HTTP ${response.status}`);
    }

    const payload = (await response.json()) as SourceSearchResponse | EvidenceItem[];
    const results = Array.isArray(payload) ? payload : (payload.results ?? payload.data ?? []);

    return results.filter((item) => item && typeof item.id === "string" && typeof item.title === "string");
  }
}
