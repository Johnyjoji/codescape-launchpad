import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ClientLogos from "@/components/ClientLogos";
import heroBg from "@/hero.mp4";


import { ArrowRight, Code2, Layers, Zap, Shield, Quote } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "40+", label: "Engineers" },
  { value: "12", label: "Countries Served" },
];

const services = [
  { icon: Code2, title: "Web Engineering", desc: "Scalable, performant web applications built with modern frameworks and best practices." },
  { icon: Layers, title: "Cloud Architecture", desc: "Infrastructure designed for resilience, security, and cost efficiency at any scale." },
  { icon: Zap, title: "AI Solutions", desc: "Machine learning pipelines and intelligent systems that drive real business outcomes." },
  { icon: Shield, title: "Product Development", desc: "End-to-end product engineering from ideation through launch and iteration." },
];

const testimonials = [
  { quote: "CODESCAPE transformed our platform architecture. The team's technical depth and discipline is unmatched.", author: "Sarah Chen", role: "CTO, NexTera Systems" },
  { quote: "They don't just write code — they engineer solutions. Our infrastructure costs dropped 40% after their optimization work.", author: "Marcus Webb", role: "VP Engineering, DataPrime" },
  { quote: "The most reliable engineering partner we've worked with. They deliver on time, every time.", author: "Elena Vasquez", role: "Product Director, Orbitalq" },
];

const team = [
  { name: "Samuel Saji", role: "Founder", image: "/samuelsaji.jpeg" },
  { name: "Joel Saji", role: "Frontend Developer", image: "/joel.jpeg" },
  { name: "Jithin MP", role: "Backend Developer", image: "/jithin.jpeg" },
  { name: "Eldho G Blayil", role: "Head of Design", image: "/blayil.jpeg" },
];



const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
        <video
  className="w-full h-full object-cover opacity-40"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/hero.mp4" type="video/mp4" />
</video>

          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 section-padding section-container w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl">
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-6 animate-fade-up">
              Engineering-First Technology Partner
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-[1.08] mb-6 animate-fade-up-delay-1">
            Where Creativity Meets {" "}
              <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-up-delay-2">
              CODESCAPE delivers reliable, scalable, and impactful solutions through innovation
              and technical excellence. Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border/50">
        <div className="section-padding section-container py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <ScrollReveal key={s.label}>
                <div className="text-center lg:text-left">
                  <p className="text-3xl lg:text-4xl font-heading font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-24 lg:py-32">
        <div className="section-padding section-container">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Our Approach</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 max-w-2xl">
              Engineering solutions, not just software
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
              Every engagement starts with understanding the problem. We combine rigorous engineering
              methodology with creative problem-solving to deliver systems that last.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: "01", title: "Discover & Define", desc: "We analyze your technical landscape, identify constraints, and define clear engineering objectives." },
              { step: "02", title: "Architect & Build", desc: "Our engineers design resilient architectures and build with clean, tested, maintainable code." },
              { step: "03", title: "Ship & Scale", desc: "We deploy with confidence and ensure your systems perform reliably as demands grow." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="border border-border rounded-lg p-8 card-hover">
                  <span className="text-4xl font-heading font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mt-4 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Preview */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="section-padding section-container">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">What We Do</p>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground max-w-xl">
                  Technical capabilities that deliver impact
                </h2>
              </div>
              <Button variant="outline-light" className="mt-6 lg:mt-0" asChild>
                <Link to="/services">All Services <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <Link
                  to={`/services/${s.title.toLowerCase().replace(/ /g, "-")}`}
                  className="block border border-border rounded-lg p-8 card-hover group"
                >
                  <s.icon className="text-primary mb-4" size={28} />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="section-padding section-container">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Social Proof</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-16 max-w-xl">
              What our partners say
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border border-border rounded-lg p-8 h-full flex flex-col card-hover">
                  <Quote className="text-primary/30 mb-4" size={24} />
                  <p className="text-sm text-foreground leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="section-padding section-container">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Leadership</p>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">Meet the team</h2>
              </div>
              <Button variant="outline-light" className="mt-6 lg:mt-0" asChild>
                <Link to="/about">About Us <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <div className="text-center group">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border border-border mx-auto mb-4 group-hover:border-primary/40 transition-colors">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  />
                </div>

                  <p className="font-heading font-semibold text-foreground text-sm">{m.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="section-padding section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to build something{" "}
              <span className="text-gradient">exceptional</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Let's talk about your next project. Our engineers are ready to turn your vision into reliable, scalable technology.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
