import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Home,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Store,
} from "lucide-react";

const productCards = [
  {
    title: "Project Intake Intelligence",
    body: "Guided intake turns homeowner intent, property context, and project scope into organized planning inputs.",
    icon: ClipboardCheck,
  },
  {
    title: "Contractor Trust Layer",
    body: "Public-safe trust organization helps homeowners compare credentials, expectations, and decision readiness.",
    icon: BadgeCheck,
  },
  {
    title: "Risk & Scope Checklist",
    body: "Structured review surfaces common renovation uncertainty before a homeowner commits to a path.",
    icon: ShieldCheck,
  },
  {
    title: "Partner Marketplace Workflow",
    body: "Partner-ready flows connect homeowners with relevant renovation services without exposing private systems.",
    icon: Network,
  },
];

const partnerCards = [
  ["Contractor Networks", Building2],
  ["Real Estate Agents & Brokerages", Home],
  ["Lenders / HELOC / Financing Partners", Landmark],
  ["Insurers / Warranty Partners", ShieldCheck],
  ["Property Managers", Layers3],
  ["Home Improvement Marketplaces", Store],
] as const;

const defensibility = [
  "structured renovation knowledge layer",
  "workflow data model",
  "trust signal organization",
  "repeatable decision flows",
  "partner distribution surface",
  "compounding product intelligence",
];

const workflow = [
  "Homeowner Project",
  "Structured Intake",
  "Risk & Scope Review",
  "Contractor / Partner Match",
  "Confident Decision",
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
          <a href="#vision">Vision</a>
          <a href="#partners">Partners</a>
          <a href="#boundary">Boundary</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">AI-assisted renovation intelligence</span>
          <h1>CraftSure helps homeowners make renovation decisions with confidence.</h1>
          <p>
            An AI-assisted renovation intelligence platform that structures project scope,
            contractor trust, risk signals, and partner workflows.
          </p>
          <a className="button primary" href="mailto:partners@craftsure.ai?subject=CraftSure%20Investor%20%2F%20Partner%20Demo">
            Request Investor / Partner Demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-panel" aria-label="CraftSure workflow preview">
          <div className="panel-topline">
            <span>Structured Decision Flow</span>
            <CheckCircle2 size={18} aria-hidden="true" />
          </div>
          <div className="decision-stack">
            {workflow.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="confidence-band">Partner-ready renovation clarity</div>
        </div>
      </section>

      <section className="thesis section">
        <div className="section-heading">
          <span className="eyebrow">Investor thesis</span>
          <h2>A trust and workflow layer for a fragmented renovation market.</h2>
        </div>
        <p>
          Renovation is high-cost, fragmented, stressful, and difficult to evaluate.
          CraftSure can become a trust and workflow layer across the renovation ecosystem
          by turning homeowner uncertainty into structured decisions, trusted workflows,
          and partner-ready intelligence.
        </p>
      </section>

      <section className="section" id="vision">
        <div className="section-heading">
          <span className="eyebrow">Product vision</span>
          <h2>Public-safe product modules for renovation decision support.</h2>
        </div>
        <div className="card-grid product-grid">
          {productCards.map(({ title, body, icon: Icon }) => (
            <article className="card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow-section">
        <div className="section-heading">
          <span className="eyebrow">Public-safe workflow</span>
          <h2>From project idea to confident decision.</h2>
        </div>
        <div className="workflow" aria-label="CraftSure public workflow">
          {workflow.map((item, index) => (
            <div className="workflow-step" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="partners">
        <div className="section-heading">
          <span className="eyebrow">Partner opportunities</span>
          <h2>Built for ecosystem partners around the homeowner journey.</h2>
        </div>
        <div className="card-grid partner-grid">
          {partnerCards.map(([title, Icon]) => (
            <article className="partner-card" key={title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section defensibility">
        <div className="section-heading">
          <span className="eyebrow">Defensibility</span>
          <h2>High-level advantages without exposing the private layer.</h2>
        </div>
        <div className="pill-grid">
          {defensibility.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section boundary" id="boundary">
        <div className="section-heading">
          <span className="eyebrow">Demo boundary</span>
          <h2>What this public site shows, and what remains unpublished.</h2>
        </div>
        <div className="boundary-grid">
          <article>
            <h3>Public site</h3>
            <p>Vision, narrative, sanitized flow.</p>
          </article>
          <article>
            <h3>Private layer</h3>
            <p>Ontology, schemas, scoring logic, prompts, embeddings, orchestration, datasets.</p>
          </article>
        </div>
        <p className="ip-note">
          CraftSure is powered by a proprietary structured knowledge layer for organizing
          renovation entities, workflows, trust signals, and project risks. This public demo
          shows the product vision only; proprietary ontology, scoring logic, prompts,
          embeddings, orchestration workflows, and internal datasets remain private.
        </p>
      </section>

      <section className="cta section">
        <span className="eyebrow">Partner with CraftSure</span>
        <h2>Bring structure and confidence to renovation decisions.</h2>
        <div className="cta-actions">
          <a className="button primary" href="mailto:investors@craftsure.ai?subject=CraftSure%20Investor%20Inquiry">
            Investor inquiry
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href="mailto:partners@craftsure.ai?subject=CraftSure%20Strategic%20Demo%20Request">
            Strategic demo request
          </a>
        </div>
      </section>
    </main>
  );
}
