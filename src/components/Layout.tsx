import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/case-studies", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="section-padding section-container flex items-center justify-between h-16 lg:h-20">
          <img src="/logo.png" alt="Codescape Logo" className="h-[250px] w-[250px]" />
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-body font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-body font-medium py-2 transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="cta" className="mt-2 w-full" asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card">
        <div className="section-padding section-container py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <span className="font-heading text-xl font-bold text-foreground">CODESCAPE</span>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                Where Creativity Meets Technology. Engineering-first solutions that scale.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
              <div className="flex flex-col gap-3">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/case-studies", label: "Projects" },
                  { to: "/careers", label: "Careers" },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4 uppercase tracking-wider">Resources</h4>
              <div className="flex flex-col gap-3">
                {[
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" },
                  { to: "/privacy", label: "Privacy Policy" },
                  { to: "/terms", label: "Terms" },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="mailto:hello@codescape.dev" className="hover:text-primary transition-colors">hello@codescape.dev</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">X / Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} CODESCAPE. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Your Success is our Mission
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
