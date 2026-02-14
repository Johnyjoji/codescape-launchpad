import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const serviceData: Record<string, {
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  outcomes: string[];
}> = {
  "web-engineering": {
    title: "Web Engineering",
    problem: "Modern web applications need to handle growing traffic, complex state management, and rapid feature iteration — all while maintaining performance and code quality.",
    approach: "We build with component-driven architecture, comprehensive testing, and CI/CD pipelines. Every application is designed for maintainability and scale from the first commit.",
    tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "Tailwind CSS", "Vite"],
    outcomes: ["40% faster load times", "99.9% uptime SLA", "50% reduction in bug reports", "Modular codebase for rapid iteration"],
  },
  "ai-solutions": {
    title: "AI Solutions",
    problem: "Organizations sit on valuable data but lack the engineering expertise to transform it into actionable intelligence or automated workflows.",
    approach: "We build production-grade ML systems — not prototypes. From data pipelines to model deployment, we engineer AI that integrates into your existing infrastructure.",
    tools: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Kubernetes", "Apache Kafka", "MLflow"],
    outcomes: ["3x improvement in processing efficiency", "Real-time prediction capabilities", "Automated decision support systems", "Measurable ROI within 90 days"],
  },
  "cloud-architecture": {
    title: "Cloud Architecture",
    problem: "Cloud environments grow complex fast. Without proper architecture, teams face spiraling costs, security gaps, and unreliable systems.",
    approach: "We design infrastructure as code, implement zero-trust security models, and optimize for both performance and cost. Every architecture decision is documented and justified.",
    tools: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    outcomes: ["40% infrastructure cost reduction", "Zero-downtime deployments", "Automated scaling policies", "Comprehensive monitoring and alerting"],
  },
  "product-development": {
    title: "Product Development",
    problem: "Taking a product from idea to market requires more than code — it demands strategic thinking, rapid validation, and disciplined execution.",
    approach: "We run lean, iterative development cycles. We validate assumptions early, ship MVPs fast, and scale what works. Every sprint delivers user-facing value.",
    tools: ["React Native", "Flutter", "Node.js", "PostgreSQL", "Redis", "Stripe", "Firebase", "Figma"],
    outcomes: ["MVP to market in 8-12 weeks", "User-validated feature prioritization", "Scalable architecture from day one", "Continuous deployment pipeline"],
  },
  "ui-ux-engineering": {
    title: "UI/UX Engineering",
    problem: "Beautiful designs fail when engineering execution is poor. Design systems become inconsistent, accessibility is an afterthought, and performance suffers.",
    approach: "We bridge design and engineering. Our team builds pixel-perfect, accessible, performant interfaces backed by robust design systems and component libraries.",
    tools: ["Figma", "Storybook", "Radix UI", "Framer Motion", "Tailwind CSS", "Chromatic", "Playwright", "Axe"],
    outcomes: ["WCAG 2.1 AA compliance", "Design system with 200+ components", "60% faster UI development", "Consistent cross-platform experience"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16">
        <div className="section-padding section-container">
          <Link to="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> All Services
          </Link>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <ScrollReveal>
                <div>
                  <h2 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">The Problem</h2>
                  <p className="text-foreground leading-relaxed">{service.problem}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <h2 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Our Approach</h2>
                  <p className="text-foreground leading-relaxed">{service.approach}</p>
                </div>
              </ScrollReveal>
            </div>
            <div className="space-y-12">
              <ScrollReveal delay={150}>
                <div>
                  <h2 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-md border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <h2 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Business Outcomes</h2>
                  <div className="space-y-3">
                    {service.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-foreground">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="section-padding section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to get started with {service.title}?
            </h2>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Start a Project <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
