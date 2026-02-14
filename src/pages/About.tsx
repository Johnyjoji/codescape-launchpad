import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import founderVideo from "@/assets/founder.mp4";
import { ArrowRight, Linkedin } from "lucide-react";

const milestones = [
  { year: "2020", event: "Founded with a vision to deliver impactful digital solutions." },
  { year: "2022", event: "Delivered key projects and expanded operations." },
  { year: "2023", event: "Launched Cloud and AI solutions while growing the engineering team." },
  { year: "2025", event: "Crossed 50+ projects, 40+ engineers" },
  { year: "2026", event: "Expanded and formed strategic partnerships." },
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
                  CODESCAPE began in 2020, not in a corporate office, but in the mind of a young dreamer. At the time, Samuel was a mechanical engineering student driven by curiosity and a deep fascination with innovation and technology. While many followed conventional paths, he spent countless late nights exploring how ideas could become meaningful digital solutions. 
                </p>
                <p>
                What began as curiosity soon turned into a clear vision: to build technology that doesn’t just work, but truly makes a difference.With limited resources and unlimited determination, CODESCAPE was born — focused on creating experiences, solving real problems, and empowering businesses through technology.
                </p>
                <p>
                
                Today, CODESCAPE crafts captivating websites, seamless e-commerce platforms, and cutting-edge application solutions. Every project carries the same spirit that sparked the journey in 2020 — precision, creativity, and an engineering-first mindset. We believe code is only the beginning. By deeply understanding our clients’ goals, we build reliable, scalable, and future-ready solutions. We don’t work for our clients — we work with them as trusted digital partners. At CODESCAPE, your success is not just a goal; it’s our commitment.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
  <div className="space-y-8">

    {/* Mission */}
    <div className="border border-border rounded-lg p-8">
      <h3 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">
        Mission
      </h3>
      <p className="text-foreground leading-relaxed">
        "To deliver value through innovation, technological excellence and quality, ensuring every
        CODESCAPE solution is reliable, scalable, and impactful."
      </p>
    </div>

    {/* Vision */}
    <div className="border border-border rounded-lg p-8">
      <h3 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">
        Vision
      </h3>
      <p className="text-foreground leading-relaxed">
        "To be a leading and trusted technology partner, recognized for innovation, quality,
        and an enduring passion for excellence."
      </p>
    </div>
        {/* Founder Video */}
        <div className="rounded-xl overflow-hidden border border-border bg-black ">
        <video
          src={founderVideo}
  className="w-full h-full object-cover"
  poster="/thumbnail.jpg"
  autoPlay
  controls
  loop
  playsInline
/>

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
