import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Web", "AI", "Cloud", "Product"];

const projects = [
  {
    title: "NexTera Platform Rebuild",
    category: "Web",
    client: "NexTera Systems",
    problem: "Legacy monolith with 8-second load times and frequent outages.",
    strategy: "Microservices migration with React frontend and event-driven architecture.",
    result: "Sub-second load times, 99.99% uptime, 60% dev velocity increase.",
    tags: ["React", "Node.js", "AWS", "Microservices"],
  },
  {
    title: "DataPrime ML Pipeline",
    category: "AI",
    client: "DataPrime Analytics",
    problem: "Manual data processing taking 72+ hours per cycle.",
    strategy: "Automated ML pipeline with real-time anomaly detection.",
    result: "Processing time reduced to 4 hours. 95% anomaly detection accuracy.",
    tags: ["Python", "TensorFlow", "Apache Kafka", "GCP"],
  },
  {
    title: "Orbitalq Cloud Migration",
    category: "Cloud",
    client: "Orbitalq",
    problem: "$2M+ annual cloud spend with no autoscaling or cost optimization.",
    strategy: "Multi-region Kubernetes architecture with Terraform IaC.",
    result: "40% cost reduction. Zero-downtime deployments. Full observability.",
    tags: ["AWS", "Kubernetes", "Terraform", "Prometheus"],
  },
  {
    title: "Vaultix Security Dashboard",
    category: "Product",
    client: "Vaultix Corp",
    problem: "No centralized view of security posture across 200+ services.",
    strategy: "Real-time security dashboard with automated compliance checks.",
    result: "Incident response time reduced by 70%. SOC 2 compliance achieved.",
    tags: ["React", "Go", "PostgreSQL", "Grafana"],
  },
  {
    title: "SynthWave E-Commerce Platform",
    category: "Web",
    client: "SynthWave Audio",
    problem: "Shopify limitations blocking custom checkout and subscription features.",
    strategy: "Custom headless commerce platform with Stripe integration.",
    result: "35% increase in conversion rate. Subscription revenue grew 4x.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
  {
    title: "CloudNine Predictive Maintenance",
    category: "AI",
    client: "CloudNine Industrial",
    problem: "Unexpected equipment failures costing $500K+ per incident.",
    strategy: "IoT sensor integration with predictive ML models.",
    result: "80% reduction in unplanned downtime. $3M annual savings.",
    tags: ["Python", "PyTorch", "Azure IoT", "Time Series DB"],
  },
];

const CaseStudies = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="section-padding section-container">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">Projects</p>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-3xl animate-fade-up-delay-1">
            Engineering impact, delivered
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
            Real problems. Real solutions. Measurable results.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding section-container">
          {/* Filters */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {categories.map((c) => (
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <div className="border border-border rounded-lg p-8 lg:p-10 h-full flex flex-col card-hover">
                  <span className="text-xs font-body uppercase tracking-widest text-primary mb-4">{p.category}</span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.client}</p>
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Challenge</p>
                      <p className="text-sm text-foreground">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Solution</p>
                      <p className="text-sm text-foreground">{p.strategy}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary mb-1">Impact</p>
                      <p className="text-sm text-foreground font-medium">{p.result}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="section-padding section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Your project could be next
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary font-heading font-semibold hover:underline"
            >
              Let's talk <ArrowRight className="ml-2" size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
