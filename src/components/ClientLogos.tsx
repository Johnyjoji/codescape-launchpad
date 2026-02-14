const logos = [
  "NEXTERA", "VAULTIX", "SYNTHWAVE", "ORBITALQ", "DATAPRIME",
  "CLOUDNINE", "AXIOMLAB", "SPECTRA", "QUANTUMX", "NOVAFLOW",
];

const ClientLogos = () => (
  <section className="py-16 border-y border-border/50 overflow-hidden">
    <div className="section-padding section-container mb-8">
      <p className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by engineering teams worldwide
      </p>
    </div>
    <div className="relative">
      <div className="flex animate-marquee w-max gap-16 items-center">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={i}
            className="text-xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
