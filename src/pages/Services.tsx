import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Layers, Zap, Shield, Palette, ArrowRight } from "lucide-react";

const services = [
  { slug: "web-engineering", icon: Code2, title: "Web Engineering", desc: "High-performance web applications built with React, Node.js, and modern tooling. We architect for scale from day one." },
  { slug: "ai-solutions", icon: Zap, title: "AI Solutions", desc: "From ML pipelines to intelligent automation — we build AI systems that integrate seamlessly into your operations." },
  { slug: "cloud-architecture", icon: Layers, title: "Cloud Architecture", desc: "AWS, GCP, Azure — we design infrastructure that's resilient, secure, and cost-optimized for your workload." },
  { slug: "product-development", icon: Shield, title: "Product Development", desc: "End-to-end product engineering. We take ideas from concept through MVP to market-ready products." },
  { slug: "ui-ux-engineering", icon: Palette, title: "UI/UX Engineering", desc: "Design systems, component libraries, and interfaces that are both beautiful and technically rigorous." },
];

const Services = () => (
  <>
    <section className="pt-32 lg:pt-40 pb-20">
      <div className="section-padding section-container">
        <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">Services</p>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-3xl animate-fade-up-delay-1">
          Engineering capabilities built for impact
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
          We don't just build software — we engineer solutions. Every service is grounded in
          technical rigor and designed to deliver measurable business outcomes.
        </p>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="section-padding section-container">
        <div className="grid gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 60}>
              <Link
                to={`/services/${s.slug}`}
                className="flex flex-col md:flex-row md:items-center gap-6 border border-border rounded-lg p-8 lg:p-10 card-hover group"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" size={20} />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="section-padding section-container text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Not sure which service fits?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's discuss your technical challenges. We'll map the right approach together.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Services;
