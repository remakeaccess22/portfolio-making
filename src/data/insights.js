import { parseInsightSources } from "./insight-parser.js";
export { insightTopics } from "./insight-parser.js";

// Drafts live in a separate folder and are deliberately excluded from this glob.
// This keeps unpublished writing out of the production JavaScript bundle.
const publishedSources = import.meta.glob("../content/insights/published/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const insights = parseInsightSources(publishedSources);

export function getInsight(slug) {
  return insights.find((article) => article.slug === slug);
}

export function formatInsightDate(date) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
