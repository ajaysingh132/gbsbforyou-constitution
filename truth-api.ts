import { Router, Response } from "express";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { authenticate, AuthRequest } from "./auth";
import { ResearchEngine } from "./research-engine";
import { factCheckClaim } from "./fact-check-engine";
import { buildAnalysis } from "./analysis-engine";
import { editorialSystemPrompt, EvidenceItem, ClaimRecord } from "./all-news-editorial-core";
import { HttpSourceDiscoveryProvider } from "./source-discovery-provider";

const router = Router();
router.use(authenticate);

const provider = new HttpSourceDiscoveryProvider();
const researchEngine = new ResearchEngine(provider);
const claude = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });
const MODEL = process.env.ALL_NEWS_AI_MODEL || "claude-sonnet-4-6";

async function callEditorialAI(instruction: string, data: unknown, maxTokens = 2500): Promise<unknown> {
  if (!process.env.CLAUDE_API_KEY) throw new Error("CLAUDE_API_KEY is not configured");
  const result = await claude.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: `${editorialSystemPrompt()}\n\nकेवल उपलब्ध evidence पर reasoning करें। स्रोत, उद्धरण या तथ्य न गढ़ें।\nकेवल JSON दें।`,
    messages: [{ role: "user", content: `${instruction}\n\nDATA:\n${JSON.stringify(data)}` }],
  });
  const text = result.content.find((item) => item.type === "text");
  if (!text || text.type !== "text") throw new Error("AI returned no text");
  return JSON.parse(text.text.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim());
}

const researchSchema = z.object({
  topic: z.string().min(3).max(500),
  language: z.string().default("hi"),
  limit: z.number().int().min(1).max(20).default(10),
});

router.post("/truth/research", async (req: AuthRequest, res: Response) => {
  const parsed = researchSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid research request" });

  try {
    const research = await researchEngine.run(parsed.data);
    const enrichment = research.status === "evidence_ready"
      ? await callEditorialAI(
          "स्रोतों से केवल evidence-grounded claims, perspectives, timeline और contradictions निकालें। हर item को source id से जोड़ें।",
          research,
          3500,
        )
      : null;

    return res.json({
      success: true,
      protocol: research.researchProtocolVersion,
      research,
      aiEnrichment: enrichment,
      status: research.status,
      humanReviewRequired: true,
    });
  } catch (error) {
    return res.status(502).json({ error: "Truth research failed", detail: String(error) });
  }
});

const factSchema = z.object({
  id: z.string().min(1),
  claim: z.string().min(3).max(2000),
  madeBy: z.string().max(500).optional(),
  evidence: z.array(z.object({
    id: z.string(), title: z.string(), url: z.string().url().optional(), sourceType: z.string(),
    publisher: z.string().optional(), publishedAt: z.string().optional(), retrievedAt: z.string().optional(),
    excerpt: z.string().optional(), supportsClaim: z.boolean().optional(),
    reliability: z.enum(["high", "medium", "low", "disputed", "unverified"]).optional(),
  })).max(100),
});

router.post("/truth/fact-check", async (req: AuthRequest, res: Response) => {
  const parsed = factSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid fact-check request" });

  try {
    const result = factCheckClaim(parsed.data);
    return res.json({ success: true, data: result, humanReviewRequired: true });
  } catch (error) {
    return res.status(500).json({ error: "Fact check failed", detail: String(error) });
  }
});

const analysisSchema = z.object({
  topic: z.string().min(3).max(500),
  context: z.string().max(10000).optional(),
  claims: z.array(z.object({
    id: z.string(), text: z.string(), madeBy: z.string().optional(),
    classification: z.enum(["fact", "official_statement", "claim", "documented_evidence", "unverified", "misleading", "false", "partially_true", "analysis", "opinion"]),
    evidenceIds: z.array(z.string()), counterEvidenceIds: z.array(z.string()), confidence: z.number().min(0).max(1), verdict: z.string(),
  })).max(200),
  evidence: z.array(z.object({
    id: z.string(), title: z.string(), url: z.string().url().optional(), sourceType: z.string(), publisher: z.string().optional(),
    publishedAt: z.string().optional(), retrievedAt: z.string().optional(), excerpt: z.string().optional(), supportsClaim: z.boolean().optional(),
    reliability: z.enum(["high", "medium", "low", "disputed", "unverified"]).optional(),
  })).max(300),
});

router.post("/truth/analysis", async (req: AuthRequest, res: Response) => {
  const parsed = analysisSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Invalid analysis request" });

  try {
    const deterministic = buildAnalysis(parsed.data);
    const aiAnalysis = await callEditorialAI(
      "इस evidence-backed dataset पर All News analysis तैयार करें। लाभ, हानि, हित, जनता/शिक्षा/रोजगार/उद्योग/अर्थव्यवस्था/समुदाय/पर्यावरण/मानव गरिमा-स्वतंत्रता-सुरक्षा और दीर्घकालिक प्रभावों को evidence और स्पष्ट inference के साथ अलग रखें। रोड़े की खुदाई करें, लेकिन व्यक्ति या समुदाय पर हमला न करें।",
      deterministic,
      3500,
    );
    return res.json({ success: true, deterministic, aiAnalysis, humanReviewRequired: true });
  } catch (error) {
    return res.status(502).json({ error: "Analysis failed", detail: String(error) });
  }
});

export { router as truthAiRouter };
export default router;
