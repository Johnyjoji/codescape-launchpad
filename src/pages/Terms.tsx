import { Link } from "react-router-dom";

const Terms = () => (
  <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
    <div className="section-padding section-container">
      <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-8">Terms and Conditions</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: January 1, 2025</p>

      <div className="max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Services</h2>
          <p>CODESCAPE provides software engineering, consulting, and technology services as agreed upon in individual service agreements. All work is subject to the specific terms outlined in project contracts.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing, all intellectual property created during a project engagement is transferred to the client upon full payment. CODESCAPE retains the right to use general knowledge and techniques gained during the engagement.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. Confidentiality</h2>
          <p>Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This obligation survives the termination of any agreement.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Payment Terms</h2>
          <p>Payment terms are defined in individual service agreements. Standard terms are net-30 from invoice date. Late payments may incur interest at 1.5% per month.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
          <p>CODESCAPE's total liability for any claim arising from services provided shall not exceed the total fees paid by the client for the specific engagement in question.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of the State of California. Any disputes shall be resolved through arbitration in San Francisco, CA.</p>
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:legal@codescape.dev" className="text-primary hover:underline">legal@codescape.dev</a> or visit our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Terms;
