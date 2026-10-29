import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { formatInsightDate, getInsight, insightTopics, insights } from "../../data/insights";
import "./Insights.css";

function ArticleList({ articles, headingLevel = 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="insight-list">
      {articles.map((article) => (
        <article className="insight-row" key={article.slug}>
          <div className="insight-row-meta">
            <span>{article.topic.label}</span>
            <time dateTime={article.date}>{formatInsightDate(article.date)}</time>
          </div>
          <a href={article.href} className="insight-row-link" data-cursor="Read article">
            <div>
              <Heading>{article.title}</Heading>
              <p>{article.excerpt}</p>
              <span className="insight-reading-time">{article.readingMinutes} min read</span>
            </div>
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}

function EmptyInsights({ filtered = false, topic }) {
  return (
    <div className="insights-empty">
      <span className="insights-empty-label">{filtered ? topic : "A space for ideas as they develop"}</span>
      <p>{filtered ? <>No articles in this topic <em>yet.</em></> : <>The first article is <em>still to come.</em></>}</p>
      <div>{filtered ? "Published articles in this topic will appear here." : "I’m making room for writing about entrepreneurship, technology, product building, design, agriculture, and the lessons of developing startups."}</div>
    </div>
  );
}

export function InsightsPreview() {
  return (
    <section className="insights-preview page-padding" id="insights" aria-labelledby="insights-preview-heading">
      <div className="insights-section-topline"><span>IDEAS & OBSERVATIONS</span><span>JOURNAL</span></div>
      <div className="insights-preview-heading">
        <h2 id="insights-preview-heading">Thinking <em>out loud.</em></h2>
        <p>A journal for the questions, decisions, and lessons that come with building.</p>
      </div>
      {insights.length > 0 ? <ArticleList articles={insights.slice(0, 3)} /> : <EmptyInsights />}
      <div className="insights-preview-bottom">
        <div className="insights-topic-line" aria-label="Writing topics">{insightTopics.map((topic) => <span key={topic.id}>{topic.label}</span>)}</div>
        <a className="text-link" href="/insights/" data-cursor="Explore">Explore insights <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export function InsightsIndex() {
  const [category, setCategory] = useState("all");
  const filtered = category === "all" ? insights : insights.filter((article) => article.category === category);
  const topic = insightTopics.find((item) => item.id === category);


  return (
    <main className="insights-page page-padding" id="main-content">
      <a href="/" className="insights-back"><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</a>
      <header className="insights-archive-heading">
        <h1>Insights</h1>
        <p>Entrepreneurship, technology, product building, design, agriculture, and the lessons of developing startups.</p>
      </header>
      {insights.length > 0 && <div className="insights-filters" role="group" aria-label="Filter articles by topic">
        <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>All topics</button>
        {insightTopics.map((item) => <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}
      </div>}
      <div role="status" className="sr-only">{filtered.length} {filtered.length === 1 ? "article" : "articles"}{topic ? ` in ${topic.label}` : " across all topics"}.</div>
      {filtered.length > 0 ? <ArticleList articles={filtered} headingLevel={2} /> : <EmptyInsights filtered={category !== "all"} topic={topic?.label} />}
      {insights.length > 0 && <aside className="insights-topic-guide" aria-label="Topics I plan to explore">
        <span className="section-label">TOPICS I PLAN TO EXPLORE</span>
        <div>{insightTopics.map((item) => <div key={item.id}><h2>{item.label}</h2><p>{item.description}</p></div>)}</div>
      </aside>}
    </main>
  );
}

const markdownComponents = {
  // The page title is the single h1, even if an author uses # inside Markdown.
  h1: ({ children }) => <h2>{children}</h2>,
  img: ({ alt, src, title }) => <img alt={alt || ""} src={src} title={title} loading="lazy" decoding="async" />,
};

export function InsightArticle({ slug }) {
  const article = getInsight(slug);
  const related = article ? insights.filter((item) => item.slug !== slug).slice(0, 2) : [];


  if (!article) {
    return (
      <main className="insights-page insights-not-found page-padding" id="main-content">
        <a href="/insights/" className="insights-back"><ArrowLeft size={16} aria-hidden="true" /> Back to insights</a>
        <span className="section-label">ARTICLE NOT FOUND</span>
        <h1>This page hasn’t<br /><em>been published.</em></h1>
        <p>The link may be incorrect, or the article may no longer be available.</p>
        <a href="/insights/" className="text-link">Browse published articles <ArrowUpRight size={16} aria-hidden="true" /></a>
      </main>
    );
  }

  return (
    <main className="insights-page insight-article-page page-padding" id="main-content">
      <a href="/insights/" className="insights-back"><ArrowLeft size={16} aria-hidden="true" /> All insights</a>
      <article>
        <header className="insight-article-heading">
          <span className="section-label">{article.topic.label.toUpperCase()}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="insight-article-byline"><span>By Jude Rafael Alayacyac</span><time dateTime={article.date}>{formatInsightDate(article.date)}</time><span>{article.readingMinutes} min read</span></div>
        </header>
        <div className="insight-prose"><ReactMarkdown components={markdownComponents} skipHtml>{article.body}</ReactMarkdown></div>
      </article>
      <div className="insight-article-end"><span>Thanks for reading.</span><a href="/insights/" className="text-link">Back to insights <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      {related.length > 0 && <aside className="insight-related" aria-label="More articles"><h2>More to <em>think about.</em></h2><ArticleList articles={related} /></aside>}
    </main>
  );
}
