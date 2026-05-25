import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Factory,
  Home,
  Landmark,
  Layers3,
  ListChecks,
  Map,
  PackageCheck,
  Radar,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Workflow,
} from "lucide-react";
import type { CSSProperties } from "react";

const heroSignals = [
  ["Project confidence surface", "Preview mode"],
  ["Scope clarity visualization", "Guided intake"],
  ["Contractor alignment", "Partner review"],
  ["Renovation risk timeline", "Explainable"],
];

const partnerPanels = [
  "Local contractor network",
  "HELOC readiness partner",
  "Warranty pathway",
];

const engineStages = [
  {
    title: "Project Intake",
    insight: "Homeowner intent is translated into a clear renovation brief.",
    output: "Room goals, constraints, budget posture, decision timeline",
    icon: Home,
  },
  {
    title: "Scope Structuring",
    insight: "Ambiguity becomes organized workstreams and planning questions.",
    output: "Scope lanes, dependencies, assumptions, next-step gaps",
    icon: ClipboardCheck,
  },
  {
    title: "Trust & Risk Review",
    insight: "Trust signals and project risks are made visible in plain language.",
    output: "Readiness checks, risk flags, confidence explanations",
    icon: ShieldCheck,
  },
  {
    title: "Partner Coordination",
    insight: "Relevant partners receive cleaner context at the right moment.",
    output: "Contractor, financing, protection, and marketplace handoffs",
    icon: Workflow,
  },
  {
    title: "Renovation Confidence",
    insight: "The homeowner sees a coordinated path before committing.",
    output: "Decision brief, stakeholder map, action-ready plan",
    icon: CheckCircle2,
  },
];

const beforeStates = [
  "fragmented quotes",
  "contractor uncertainty",
  "budget anxiety",
  "hidden risk",
  "disconnected tools",
];

const afterStates = [
  "structured project clarity",
  "explainable workflows",
  "coordinated stakeholders",
  "guided decision confidence",
  "partner-assisted renovation flow",
];

const ecosystemNodes = [
  { label: "Homeowners", icon: Home, className: "node-homeowners" },
  { label: "Contractors", icon: Building2, className: "node-contractors" },
  { label: "Lenders", icon: Landmark, className: "node-lenders" },
  { label: "Insurers", icon: ShieldCheck, className: "node-insurers" },
  { label: "Real estate agents", icon: Users, className: "node-agents" },
  { label: "Property managers", icon: Layers3, className: "node-managers" },
  { label: "Material suppliers", icon: Factory, className: "node-suppliers" },
  { label: "Marketplaces", icon: Store, className: "node-marketplaces" },
];

const trustPanels = [
  {
    title: "Project risk indicators",
    body: "Potential scope ambiguity, timing pressure, and stakeholder gaps are displayed as public-safe placeholders.",
    icon: Radar,
  },
  {
    title: "Explainable checklist panels",
    body: "Homeowners see why a next step matters before they speak with a contractor or partner.",
    icon: ListChecks,
  },
  {
    title: "Renovation readiness",
    body: "The interface frames readiness as a transparent conversation, not a black-box verdict.",
    icon: BadgeCheck,
  },
  {
    title: "Contractor fit surfaces",
    body: "Fit is represented through sample alignment cues and partner review states.",
    icon: Building2,
  },
  {
    title: "Timeline uncertainty warnings",
    body: "Schedule sensitivity is shown with plain-language notices and calm decision paths.",
    icon: Clock3,
  },
  {
    title: "Permit/compliance placeholders",
    body: "Jurisdiction and compliance needs are presented as review cues for qualified partners.",
    icon: PackageCheck,
  },
];

const infrastructurePoints = [
  "structured renovation workflows",
  "standardized project understanding",
  "reusable trust signals",
  "partner coordination layer",
  "cross-stakeholder intelligence",
  "compounding renovation data network",
];

const excludedItems = [
  "ontology internals",
  "scoring logic",
  "prompts",
  "embeddings",
  "orchestration workflows",
  "private datasets",
];

const cssVars = (vars: Record<string, string>) => vars as CSSProperties;

const contactLinks = {
  general: "mailto:hello@craftsure.net?subject=CraftSure%20General%20Inquiry",
  partners: "mailto:partners@craftsure.net?subject=CraftSure%20Partner%20Inquiry",
  investors: "mailto:investors@craftsure.net?subject=CraftSure%20Strategic%20Demo%20Request",
  social: "mailto:social@craftsure.net?subject=CraftSure%20Media%20%2F%20Collaboration%20Inquiry",
};

export function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CraftSure home">
          <span className="brand-mark">CS</span>
          <span>CraftSure</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#engine">Engine</a>
          <a href="#story">Story</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#trust">Trust</a>
          <a href="#boundary">Boundary</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <span className="eyebrow">Renovation intelligence platform</span>
          <h1>Renovation decisions deserve intelligence infrastructure.</h1>
          <p>
            CraftSure transforms renovation uncertainty into structured workflows,
            explainable trust signals, and partner-ready decision intelligence.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={contactLinks.investors}>
              Request Strategic Demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#engine">
              Explore Product Vision
              <Map size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-visual reveal" aria-label="Simulated CraftSure product interface">
          <div className="intelligence-console">
            <div className="console-topbar">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>Live demo simulation</span>
            </div>
            <div className="project-brief">
              <div>
                <span className="micro-label">Homeowner project summary</span>
                <strong>Kitchen refresh + wall opening</strong>
                <p>Permit sensitivity, budget clarity, and contractor readiness require guided review.</p>
              </div>
              <div className="confidence-orbit" aria-hidden="true">
                <span>Preview</span>
              </div>
            </div>
            <div className="signal-grid">
              {heroSignals.map(([label, value]) => (
                <article className="signal-tile" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <span className="micro-label">Renovation risk timeline</span>
                <span>Placeholder insight path</span>
              </div>
              <div className="timeline-track" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="timeline-labels">
                <span>Intake</span>
                <span>Scope</span>
                <span>Review</span>
                <span>Decision</span>
              </div>
            </div>
            <div className="partner-recs">
              <span className="micro-label">Partner recommendation panels</span>
              {partnerPanels.map((panel) => (
                <div className="partner-rec" key={panel}>
                  <Sparkles size={15} aria-hidden="true" />
                  <span>{panel}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section engine-section" id="engine">
        <div className="section-heading reveal">
          <span className="eyebrow">Renovation intelligence engine</span>
          <h2>A public-safe workflow map for the renovation decision lifecycle.</h2>
          <p>
            The demo shows how visible product states can coordinate homeowners and
            partners without revealing confidential execution systems.
          </p>
        </div>
        <div className="engine-map" aria-label="Renovation intelligence stages">
          <div className="connection-line" aria-hidden="true" />
          {engineStages.map(({ title, insight, output, icon: Icon }, index) => (
            <article className="engine-card reveal" key={title} style={cssVars({ "--delay": `${index * 90}ms` })}>
              <div className="stage-index">{String(index + 1).padStart(2, "0")}</div>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{insight}</p>
              <span>{output}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section transformation-section" id="story">
        <div className="section-heading reveal">
          <span className="eyebrow">Homeowner transformation story</span>
          <h2>From renovation anxiety to coordinated confidence.</h2>
          <p>
            CraftSure reframes a high-stress purchase into a structured, human-centered
            decision journey.
          </p>
        </div>
        <div className="before-after">
          <article className="story-panel before reveal">
            <span className="micro-label">Before CraftSure</span>
            <h3>Every decision feels isolated.</h3>
            <ul>
              {beforeStates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <div className="story-divider" aria-hidden="true">
            <ArrowRight size={26} />
          </div>
          <article className="story-panel after reveal">
            <span className="micro-label">After CraftSure</span>
            <h3>The renovation path becomes legible.</h3>
            <ul>
              {afterStates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section ecosystem-section" id="ecosystem">
        <div className="section-heading reveal">
          <span className="eyebrow">Partner ecosystem visualization</span>
          <h2>CraftSure sits between the stakeholders renovation already depends on.</h2>
          <p>
            The platform concept is a neutral coordination surface for homeowner intent,
            partner readiness, and trust-centered renovation decisions.
          </p>
        </div>
        <div className="ecosystem-map" aria-label="Renovation ecosystem map">
          <div className="ecosystem-rings" aria-hidden="true" />
          <div className="center-node">
            <Sparkles size={26} aria-hidden="true" />
            <strong>CraftSure</strong>
            <span>renovation intelligence infrastructure</span>
          </div>
          {ecosystemNodes.map(({ label, icon: Icon, className }) => (
            <article className={`ecosystem-node ${className}`} key={label}>
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section" id="trust">
        <div className="section-heading reveal">
          <span className="eyebrow">Trust / risk experience</span>
          <h2>Transparent interfaces for the moments where homeowners need clarity.</h2>
          <p>
            The public product vision emphasizes explainable placeholder insights,
            structured review states, and partner-assisted next steps.
          </p>
        </div>
        <div className="trust-workbench">
          <div className="readiness-panel reveal">
            <span className="micro-label">Renovation readiness</span>
            <h3>Decision brief generated for partner conversation</h3>
            <div className="readiness-bars" aria-hidden="true">
              <span style={cssVars({ "--bar": "88%" })} />
              <span style={cssVars({ "--bar": "68%" })} />
              <span style={cssVars({ "--bar": "76%" })} />
            </div>
            <p>
              Simulated readiness surfaces show what a homeowner may need to clarify
              before contractor selection, financing, or protection workflows.
            </p>
          </div>
          <div className="trust-grid">
            {trustPanels.map(({ title, body, icon: Icon }, index) => (
              <article className="trust-card reveal" key={title} style={cssVars({ "--delay": `${index * 70}ms` })}>
                <Icon size={21} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section infrastructure-section" id="thesis">
        <div className="infrastructure-copy reveal">
          <span className="eyebrow">Why this becomes infrastructure</span>
          <h2>Renovation needs a shared decision layer before the transaction.</h2>
          <p>
            CraftSure can become infrastructure by standardizing how projects are
            understood, how trust is communicated, and how partners coordinate around
            the homeowner journey.
          </p>
        </div>
        <div className="infrastructure-grid">
          {infrastructurePoints.map((point, index) => (
            <article className="infrastructure-card reveal" key={point} style={cssVars({ "--delay": `${index * 80}ms` })}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{point}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section boundary-section" id="boundary">
        <div className="boundary-card reveal">
          <span className="eyebrow">Demo boundary / IP protection</span>
          <p>
            “CraftSure is powered by a proprietary structured knowledge layer for
            organizing renovation entities, workflows, trust signals, and project risks.
            This public demo shows the product vision only; proprietary ontology,
            scoring logic, prompts, embeddings, orchestration workflows, and internal
            datasets remain private.”
          </p>
        </div>
        <div className="excluded-card reveal">
          <h2>Public demo intentionally excludes:</h2>
          <ul>
            {excludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-section section">
        <span className="eyebrow">Strategic demo</span>
        <h2>The future renovation interface is calmer, clearer, and more coordinated.</h2>
        <div className="hero-actions">
          <a className="button primary" href={contactLinks.investors}>
            Request Strategic Demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button tertiary" href={contactLinks.partners}>
            Partner Inquiry
            <Building2 size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href="#engine">
            Explore Product Vision
            <Map size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>CraftSure Investor Demo</span>
        <div className="footer-links" aria-label="CraftSure public contact links">
          <a href={contactLinks.general}>hello@craftsure.net</a>
          <a href={contactLinks.partners}>partners@craftsure.net</a>
          <a href={contactLinks.investors}>investors@craftsure.net</a>
          <a href={contactLinks.social}>social@craftsure.net</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
