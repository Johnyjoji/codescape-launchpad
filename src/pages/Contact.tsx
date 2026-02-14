import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="section-padding section-container">
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4 animate-fade-up">Contact</p>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-3xl animate-fade-up-delay-1">
            Let's build together
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up-delay-2">
            Tell us about your project. We'll respond within one business day with a clear next step.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-2">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-2">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-2">Budget range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full h-11 px-4 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select range</option>
                        <option value="25-50k">$25K – $50K</option>
                        <option value="50-100k">$50K – $100K</option>
                        <option value="100-250k">$100K – $250K</option>
                        <option value="250k+">$250K+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground block mb-2">Tell us about your project *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="What are you building? What challenges are you facing?"
                      required
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit">
                    Send Message <ArrowRight className="ml-2" size={18} />
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">Direct Contact</h3>
                    <div className="space-y-4">
                      <a href="mailto:hello@codescape.dev" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={16} /> contact@thecodescape.in
                      </a>
                      <a href="tel:+1-555-0123" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone size={16} /> +91 8921258262
                      </a>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin size={16} className="shrink-0 mt-0.5" />
                        <span>548 Market St, Suite 300<br />San Francisco, CA 94104</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="border border-border rounded-lg overflow-hidden">
                    <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="text-muted-foreground mx-auto mb-2" size={24} />
                        <p className="text-sm text-muted-foreground">Map integration</p>
                        <p className="text-xs text-muted-foreground/60">Google Maps embed placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
