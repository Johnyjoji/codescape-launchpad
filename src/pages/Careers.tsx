import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const values = [
  { title: "Open Positions", desc: "We write tested, reviewed, documented code. No shortcuts." },
  { title: "Ownership Mentality", desc: "Every engineer owns their work — from architecture to deployment." },
  { title: "Continuous Learning", desc: "$3K annual learning budget, conference attendance, internal tech talks." },
  { title: "Work-Life Balance", desc: "Flexible hours, remote-first, no crunch culture." },
];

const positions = [
  { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time", team: "Web Engineering" },
  { title: "ML Engineer", location: "Remote / NYC", type: "Full-time", team: "AI Solutions" },
  { title: "DevOps / Platform Engineer", location: "Remote", type: "Full-time", team: "Cloud Architecture" },
  { title: "Senior React Engineer", location: "Remote / London", type: "Full-time", team: "Product Development" },
  { title: "Engineering Manager", location: "Remote", type: "Full-time", team: "Engineering Leadership" },
];

const Careers = () => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "", message: "" });

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="section-padding section-container">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">Careers</p>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-3xl animate-fade-up-delay-1">
            Build what matters
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
            Join a team where engineering excellence isn't a slogan — it's the standard.
            We're growing, and we're looking for people who care about the craft.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24 lg:pb-32">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-12">Join CODESCAPE</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60}>
                <div className="border border-border rounded-lg p-8 card-hover">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-12">Open positions</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {positions.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 40}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border rounded-lg p-6 lg:p-8 card-hover">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.team}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {p.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {p.type}</span>
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 lg:py-32">
        <div className="section-padding section-container">
          <div className="max-w-xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">Apply now</h2>
              <p className="text-muted-foreground mb-8">
                Don't see your role? We're always looking for exceptional engineers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-body font-medium text-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground block mb-2">Role of interest</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., Senior Full-Stack Engineer"
                  />
                </div>
                <div>
                  <label className="text-sm font-body font-medium text-foreground block mb-2">Tell us about yourself</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="What excites you about engineering? What have you built?"
                  />
                </div>
                <Button variant="cta" size="lg" type="submit">
                  Submit Application <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
