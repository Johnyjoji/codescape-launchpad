import { Link } from "react-router-dom";

const Privacy = () => (
  <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
    <div className="section-padding section-container">
      <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: January 1, 2025</p>

      <div className="max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, including name, email address, company name, and project details when you contact us through our forms. We also collect usage data through analytics tools to improve our website experience.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide services, send relevant communications (with your consent), and improve our website. We never sell your personal data to third parties.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. All communications are encrypted via TLS, and we follow security best practices in our infrastructure.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Cookies</h2>
          <p>We use essential cookies for site functionality and analytics cookies to understand how visitors interact with our website. You can disable non-essential cookies through your browser settings.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time. Contact us at privacy@codescape.dev for any data-related requests.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:privacy@codescape.dev" className="text-primary hover:underline">privacy@codescape.dev</a> or visit our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Privacy;
