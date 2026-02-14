import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "why-we-test-everything": {
    title: "Why We Test Everything — And You Should Too",
    category: "Engineering",
    date: "Jan 15, 2025",
    readTime: "6 min",
    content: [
      "At CODESCAPE, testing isn't a phase that happens after development. It's woven into every line of code we write. This isn't dogma — it's a practice born from watching untested systems fail in production, costing real money and real trust.",
      "We've seen a pattern across hundreds of projects: teams that skip testing ship faster in week one, but slower by month three. The compounding cost of bugs, regressions, and fear-driven development creates a velocity ceiling that's hard to break through.",
      "Our approach is pragmatic. We don't chase 100% coverage for the sake of a metric. We test the paths that matter — the critical business logic, the edge cases that bite, the integrations that can fail silently.",
      "The result? We deploy multiple times per day with confidence. Our clients sleep well knowing their systems are validated at every layer. And our engineers move faster because they can refactor without fear.",
      "Testing is the foundation of engineering velocity. If you're not testing, you're not engineering — you're hoping.",
    ],
  },
  "scaling-postgres-beyond-1tb": {
    title: "Scaling PostgreSQL Beyond 1TB: Lessons Learned",
    category: "Architecture",
    date: "Dec 28, 2024",
    readTime: "8 min",
    content: [
      "PostgreSQL is remarkably capable. We've seen it handle workloads that many teams would reach for NoSQL solutions to address. But there's a point — usually around the 500GB mark — where you need to start thinking differently about how you manage data.",
      "The first lever is partitioning. Range partitioning by date is the most common pattern we implement, and it transforms query performance for time-series data. But the key insight is planning partitions before you need them.",
      "Connection pooling with PgBouncer is non-negotiable at scale. We've seen applications with 500+ connections grinding to a halt because each connection consumes significant memory. PgBouncer in transaction mode drops that to a manageable pool.",
      "Read replicas handle the read scaling, but the real challenge is managing replication lag in application logic. We build our read paths to be lag-tolerant and route critical reads to the primary.",
      "The honest truth: most scaling problems are query problems. Before adding infrastructure, profile your queries. We've achieved 100x improvements with proper indexing and query restructuring alone.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <section className="pt-32 lg:pt-40 pb-24">
        <div className="section-padding section-container">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Article coming soon</h1>
          <p className="text-muted-foreground">This article is being written. Check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
      <div className="section-padding section-container">
        <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>

        <article className="max-w-2xl">
          <header className="mb-12">
            <span className="text-xs font-body uppercase tracking-widest text-primary">{article.category}</span>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} read</span>
            </div>
          </header>

          <div className="space-y-6">
            {article.content.map((p, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <p className="text-foreground leading-relaxed">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
