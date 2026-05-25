import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Home,
  Landmark,
  Layers3,
  ListChecks,
  Map,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

const dashboardCards = [
  {
    label: "Project Confidence",
    value: "Preview Only",
    detail: "Illustrative readiness snapshot for a public demo.",
    icon: CheckCircle2,
  },
  {
    label: "Scope Clarity",
    value: "Guided",
    detail: "Structured questions help shape a renovation plan.",
    icon: ClipboardCheck,
  },
  {
    label: "Contractor Fit",
    value: "Partner Review",
    detail: "Sample partner workflow for evaluating next steps.",
    icon: BadgeCheck,
  },
  {
    label: "Risk Flags",
    value: "Explainable Checklist",
    detail: "Plain-language placeholders, not live formulas.",
    icon: ListChecks,
  },
];

const journey = [
  {
    title: "Project idea",
    body: "A homeowner starts with a kitchen, bath, addition, repair, or whole-home goal.",
  },
  {
    title: "Structured intake",
    body: "CraftSure turns intent into organized project context and planning questions.",
  },
  {
    title: "Scope/risk review",
    body: "The demo surfaces public-safe examples of scope clarity and uncertainty.",
  },
  {
    title: "Contractor/partner options",
    body: "Partners can meet homeowners at the right decision point.",
  },
  {
    title: "Confident renovation decision",
    body: "The homeowner moves forward with clearer expectations and next steps.",
  },
];

const partners = [
  {
    title: "Contractor networks",
    icon: Building2,
    body: "Support qualified demand, cleaner project context, and more prepared homeowner conversations.",
  },
  {
    title: "Real estate agents",
    icon: Home,
    body: "Help buyers and sellers understand renovation feasibility before major decisions.",
  },
  {
    title: "Lenders / HELOC partners",
    icon: Landmark,
    body: "Connect financing moments to a better-defined project and homeowner intent.",
  },
  {
    title: "Insurers / warranty partners",
    icon: ShieldCheck,
    body: "Introduce protection workflows around renovation planning and project readiness.",
  },
  {
    title: "Property managers",
    icon: Layers3,
    body: "Organize repair and upgrade decisions across recurring property needs.",
  },
  {
    title: "Marketplaces",
    icon: Store,
    body: "Add a trust-oriented decision layer before high-consideration renovation purchases.",
  },
];

const publicItems = [
  "product vision",
  "sample workflow",
  "sanitized mock interface",
  "partner opportunity",
  "trust-layer positioning",
];

const privateItems = [
  "ontology internals",
  "scoring logic",
  "data models",
  "prompts",
  "embeddings",
  "orchestration workflows",
  "internal datasets",
];

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CraftSure home">
          <span className="brand-mark">CS</span>
          <span>CraftSure</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#demo-flow">Demo Flow</a>
          <a href="#partners">Partners</a>
          <a href="#thesis">Thesis</a>
          <a href="#private">Private</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Investor Demo</span>
          <h1>Renovation trust infrastructure for homeowners and ecosystem partners.</h1>
          <p>
            CraftSure is an AI-assisted renovation intelligence demo that shows how
            homeowners can move from project uncertainty to structured, partner-ready
            renovation decisions.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="mailto:partners@craftsure.ai?subject=CraftSure%20Partner%20Demo%20Request"
            >
              Request Partner Demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#demo-flow">
              View Demo Flow
              <Map size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="product-shell" aria-label="CraftSure demo dashboard preview">
          <div className="mock-window">
            <div className="window-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-header">
              <div>
                <span className="mock-kicker">Demo dashboard</span>
                <h2>Project Readiness Preview</h2>
              </div>
              <span className="demo-badge">Public-safe</span>
            </div>
            <div className="mock-summary">
              <div>
                <strong>Kitchen remodel</strong>
                <span>Sample homeowner journey</span>
              </div>
              <Sparkles size={22} aria-hidden="true" />
            </div>
            <div className="dashboard-grid">
              {dashboardCards.map(({ label, value, detail, icon: Icon }) => (
                <article className="metric-card" key={label}>
                  <Icon size={19} aria-hidden="true" />
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
            <p className="mock-disclaimer">
              Demo placeholders only. This interface does not show live evaluation
              methods or confidential product systems.
            </p>
          </div>
        </aside>
      </section>

      <section className="section dashboard-section" id="dashboard">
        <div className="section-heading">
          <span className="eyebrow">Demo dashboard mockup</span>
          <h2>Readable signals for a public preview, not exposed product logic.</h2>
          <p>
            The cards below are sanitized placeholders designed to communicate product
            direction without revealing private implementation details.
          </p>
        </div>
        <div className="wide-card-grid">
          {dashboardCards.map(({ label, value, detail, icon: Icon }) => (
            <article className="signal-card" key={label}>
              <div className="signal-icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section journey-section" id="demo-flow">
        <div className="section-heading">
          <span className="eyebrow">Homeowner journey</span>
          <h2>From early idea to a renovation decision a homeowner can stand behind.</h2>
          <p>
            The public demo focuses on the visible homeowner experience: organizing
            needs, clarifying decisions, and preparing the next partner conversation.
          </p>
        </div>
        <div className="journey-flow" aria-label="Five-step homeowner journey">
          {journey.map((step, index) => (
            <article className="journey-step" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section partner-section" id="partners">
        <div className="section-heading">
          <span className="eyebrow">Partner pitch</span>
          <h2>A neutral trust layer for businesses already touching renovation decisions.</h2>
          <p>
            CraftSure can improve handoffs between homeowners, service providers,
            financing, protection, and property workflows.
          </p>
        </div>
        <div className="partner-grid">
          {partners.map(({ title, icon: Icon, body }) => (
            <article className="partner-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section thesis" id="thesis">
        <div className="thesis-panel">
          <span className="eyebrow">Investor thesis</span>
          <h2>
            CraftSure is positioned as a renovation trust layer that can sit between
            homeowners, contractors, and partners.
          </h2>
        </div>
        <div className="thesis-copy">
          <p>
            Renovation decisions are expensive, fragmented, and hard for consumers to
            evaluate. CraftSure gives the market a structured public-facing experience
            for project clarity, partner coordination, and decision confidence.
          </p>
          <div className="thesis-points">
            <span>Consumer decision support</span>
            <span>Partner-ready workflow</span>
            <span>Trust-layer positioning</span>
          </div>
        </div>
      </section>

      <section className="section moat-section">
        <div className="moat-card">
          <span className="eyebrow">Moat, safely stated</span>
          <p>
            “CraftSure is powered by a proprietary structured knowledge layer for
            organizing renovation entities, workflows, trust signals, and project risks.
            This public demo shows the product vision only; proprietary ontology,
            scoring logic, prompts, embeddings, orchestration workflows, and internal
            datasets remain private.”
          </p>
        </div>
      </section>

      <section className="section privacy-section" id="private">
        <div className="section-heading">
          <span className="eyebrow">What is intentionally private</span>
          <h2>The demo boundary is part of the product story.</h2>
          <p>
            This page is designed for public review. It communicates the opportunity
            while keeping confidential systems out of view.
          </p>
        </div>
        <div className="privacy-grid">
          <article>
            <h3>Public Demo Shows:</h3>
            <ul>
              {publicItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Private System Contains:</h3>
            <ul>
              {privateItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="cta-section section">
        <span className="eyebrow">Partner with CraftSure</span>
        <h2>Help homeowners make better renovation decisions before the expensive mistakes happen.</h2>
        <div className="hero-actions">
          <a
            className="button primary"
            href="mailto:partners@craftsure.ai?subject=CraftSure%20Partner%20Demo%20Request"
          >
            Request Partner Demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href="#demo-flow">
            View Demo Flow
            <Map size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>CraftSure Investor Demo</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
