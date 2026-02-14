import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const blogCategories = ["All", "Engineering", "AI", "Architecture", "Culture"];

const posts = [
  {
    slug: "why-we-test-everything",
    title: "Why We Test Everything — And You Should Too",
    excerpt: "Testing isn't overhead. It's engineering discipline. Here's how comprehensive testing saved a client $2M in potential downtime.",
    category: "Engineering",
    date: "Jan 15, 2025",
    readTime: "6 min",
  },
  {
    slug: "scaling-postgres-beyond-1tb",
    title: "Scaling PostgreSQL Beyond 1TB: Lessons Learned",
    excerpt: "Practical strategies for horizontal scaling, partitioning, and query optimization when your database outgrows a single node.",
    category: "Architecture",
    date: "Dec 28, 2024",
    readTime: "8 min",
  },
  {
    slug: "llms-in-production",
    title: "Running LLMs in Production: What They Don't Tell You",
    excerpt: "Cost management, latency optimization, and reliability patterns for production AI systems. No hype, just engineering.",
    category: "AI",
    date: "Dec 10, 2024",
    readTime: "10 min",
  },
  {
    slug: "engineering-culture-at-codescape",
    title: "How We Built an Engineering Culture That Ships",
    excerpt: "Culture isn't ping pong tables. It's code review standards, blameless postmortems, and ownership. Here's our playbook.",
    category: "Culture",
    date: "Nov 22, 2024",
    readTime: "7 min",
  },
  {
    slug: "event-driven-architecture",
    title: "Event-Driven Architecture: When and Why",
    excerpt: "Not every system needs events. But when it does, getting the patterns right matters. A practical guide from real projects.",
    category: "Architecture",
    date: "Nov 5, 2024",
    readTime: "9 min",
  },
  {
    slug: "technical-debt-is-a-choice",
    title: "Technical Debt Is a Choice — Make It Intentionally",
    excerpt: "All code has trade-offs. The difference between good engineering and bad engineering is making those trade-offs consciously.",
    category: "Engineering",
    date: "Oct 18, 2024",
    readTime: "5 min",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="section-padding section-container">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">Blog</p>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up-delay-1">
            Engineering insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
            Practical perspectives on building reliable technology. No fluff, no marketing speak.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding section-container">
          <div className="flex gap-2 mb-12 flex-wrap">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-sm font-body font-medium rounded-md border transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block border border-border rounded-lg p-8 h-full card-hover group"
                >
                  <span className="text-xs font-body uppercase tracking-widest text-primary">{post.category}</span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-3 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
