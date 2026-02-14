import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Linkedin } from "lucide-react";

const milestones = [
  { year: "2018", event: "CODESCAPE founded with a team of 4 engineers" },
  { year: "2019", event: "First enterprise client — delivered a complete platform rebuild" },
  { year: "2020", event: "Expanded to 15 engineers, launched cloud architecture practice" },
  { year: "2021", event: "Opened second office, 50+ projects delivered" },
  { year: "2022", event: "Launched AI Solutions division" },
  { year: "2023", event: "Crossed 100+ projects, 40+ engineers" },
  { year: "2024", event: "Expanded into 12 countries, strategic partnerships established" },
];

const leaders = [
  { name: "Alex Mercer", role: "CEO & Founder", initials: "AM", bio: "15+ years in software engineering. Previously led engineering at two YC-backed startups." },
  { name: "Priya Sharma", role: "CTO", initials: "PS", bio: "Ex-Google. Specializes in distributed systems and cloud architecture." },
  { name: "David Okonkwo", role: "VP Engineering", initials: "DO", bio: "Former Amazon principal engineer. Focuses on engineering culture and delivery excellence." },
  { name: "Lisa Tanaka", role: "Head of Design", initials: "LT", bio: "Award-winning design leader. Bridges design thinking with engineering execution." },
  { name: "James Kowalski", role: "Head of AI", initials: "JK", bio: "PhD in Machine Learning. Built ML systems serving millions of users at Meta." },
  { name: "Maria Santos", role: "Head of Operations", initials: "MS", bio: "Operations expert with a track record of scaling engineering organizations efficiently." },
];

const About = () => (
  <>
    <section className="pt-32 lg:pt-40 pb-20">
      <div className="section-padding section-container">
        <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">About Us</p>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-3xl animate-fade-up-delay-1">
          Engineering-first. Always.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
          CODESCAPE was built on a simple belief: great technology comes from great engineering.
          Not shortcuts. Not templates. Rigorous, thoughtful, human-driven engineering.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="pb-24 lg:pb-32">
      <div className="section-padding section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CODESCAPE started in 2018 with four engineers and a shared frustration:
                  too many technology companies prioritize speed over quality, leaving clients
                  with fragile systems and mounting technical debt.
                </p>
                <p>
                  We set out to build a different kind of technology partner — one that treats
                  engineering as a craft, not a commodity. Every line of code we write is tested,
                  reviewed, and built to last.
                </p>
                <p>
                  Today, CODESCAPE is a team of 40+ engineers serving clients across 12 countries.
                  We've delivered 150+ projects without compromising the engineering discipline
                  that defines us.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To deliver value through innovation, technological excellence and quality, ensuring
                  every CODESCAPE solution is reliable, scalable, and impactful.
                </p>
              </div>
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Vision</h3>
                <p className="text-foreground leading-relaxed">
                  To be a leading and trusted technology partner, recognized for innovation, quality,
                  and an enduring passion for excellence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="section-padding section-container">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-16">Growth milestones</h2>
        </ScrollReveal>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 60}>
              <div className="flex gap-6 lg:gap-12 py-6 border-b border-border/50">
                <span className="text-2xl font-heading font-bold text-primary/40 w-16 shrink-0">{m.year}</span>
                <p className="text-foreground">{m.event}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-24 lg:py-32">
      <div className="section-padding section-container">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-16">Leadership team</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 60}>
              <div className="border border-border rounded-lg p-8 card-hover">
                <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-4">
                  <span className="text-lg font-heading font-bold text-muted-foreground">{l.initials}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{l.name}</h3>
                <p className="text-sm text-primary mt-1">{l.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{l.bio}</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-4"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="section-padding section-container text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Want to work with us?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Start a Project <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default About;
