import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CinematicHeroVideo } from "@/components/cinematic-hero-video";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  campaignQualityLoop,
  homeHero,
  sampleEngagementPresentation,
} from "@/content/home";
import {
  audiences,
  faqs,
  operatingPrinciples,
  processSteps,
  resources,
  sampleEngagements,
  services,
  siteConfig,
} from "@/content/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    email: siteConfig.email,
    areaServed: ["United Kingdom", "United States", "Canada", "Western Europe", "Australia", "New Zealand"],
    knowsAbout: ["B2B appointment setting", "B2B lead generation", "Account-based marketing"],
  };

  return (
    <main className="home-page">
      <section className="video-hero">
        <CinematicHeroVideo src={homeHero.video.src} />
        <div className="video-hero-overlay" aria-hidden="true" />
        <div className="container video-hero-inner">
          <div className="hero-copy video-hero-copy">
            <p className="eyebrow">{homeHero.eyebrow}</p>
            <h1>{homeHero.title}</h1>
            <p className="hero-lede">{homeHero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={homeHero.primaryAction.href}>{homeHero.primaryAction.label}</ButtonLink>
              <ButtonLink href={homeHero.secondaryAction.href} variant="secondary">{homeHero.secondaryAction.label}</ButtonLink>
            </div>
            <div className="hero-signal-flow" aria-label="Growth Orbits operating model">
              {homeHero.signalFlow.map((signal) => (
                <div key={signal.number}><span>{signal.number}</span><strong>{signal.label}</strong></div>
              ))}
            </div>
            <div className="hero-trust">
              <span>Designed for</span>
              {homeHero.designedFor.map((sector) => <strong key={sector}>{sector}</strong>)}
            </div>
          </div>
        </div>
      </section>

      <section className="principles-strip" aria-label="Operating principles">
        <div className="container principles-shell">
          <div className="principles-intro">
            <span>Our operating code</span>
            <strong>Quality at every handoff.</strong>
          </div>
          <div className="principles-grid">
            {operatingPrinciples.map((item, index) => (
              <div key={item.value}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="home-heading-row">
            <SectionHeading
              eyebrow="What we do"
              title="One connected system for B2B pipeline growth."
              copy="Choose a focused service or combine the capabilities into one accountable programme built around your market and sales motion."
            />
            <div className="home-section-note">
              <span>01 / Capabilities</span>
              <p>Strategy, research, outreach, and learning stay connected from first hypothesis to sales handoff.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link className={`service-card accent-${service.accent} ${index === 0 ? "service-card-featured" : ""}`} href={service.href} key={service.slug}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <Icon name="arrow" width={22} height={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-card-action">Explore service <Icon name="arrow" width={16} height={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <div className="proof-copy">
            <span className="home-section-index">02</span>
            <p className="eyebrow">{campaignQualityLoop.eyebrow}</p>
            <h2>{campaignQualityLoop.title}</h2>
            <p>{campaignQualityLoop.description}</p>
            <ButtonLink href="/about/why-us" variant="secondary">Why Growth Orbits</ButtonLink>
          </div>
          <div className="proof-panel">
            <div className="proof-panel-heading">
              <div className="proof-label">{campaignQualityLoop.label}</div>
              <span>{campaignQualityLoop.rhythm}</span>
            </div>
            <ol>
              {campaignQualityLoop.steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><strong>{step.title}</strong><p>{step.question}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="home-heading-row process-heading-row">
            <SectionHeading
              eyebrow="How it works"
              title="A clear route from market definition to campaign learning."
              copy="A compact operating model keeps targeting, data, messaging, outreach, and sales handoff connected."
            />
            <div className="home-section-note">
              <span>03 / The system</span>
              <p>Four deliberate stages. One shared learning loop. No disconnected campaign activity.</p>
            </div>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" data-step={step.number} key={step.number}>
                <div className="process-step-head">
                  <span>{step.number}</span>
                  <small>Campaign phase</small>
                </div>
                <div className="process-node" aria-hidden="true" />
                <div className="process-card-copy">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="process-action">
            <p><span>One connected workflow</span>Each phase informs the next—and every campaign creates evidence for the next cycle.</p>
            <ButtonLink href="/about/how-we-work">See how we work</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container audience-layout">
          <div className="audience-intro">
            <span className="home-section-index">04</span>
            <SectionHeading
              eyebrow="Who we serve"
              title="For teams selling valuable, considered B2B solutions."
              copy="The initial focus is on sectors where account selection, buying-group context, and conversation quality matter more than raw lead volume."
            />
            <div className="audience-signal"><span>Best fit</span><strong>Complex sale · Clear value · Defined market</strong></div>
          </div>
          <div className="audience-list">
            {audiences.map((audience, index) => (
              <article key={audience.title}>
                <span>0{index + 1}</span>
                <div><h3>{audience.title}</h3><p>{audience.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section engagements-section">
        <div className="container">
          <SectionHeading
            eyebrow={sampleEngagementPresentation.eyebrow}
            title={sampleEngagementPresentation.title}
            copy={sampleEngagementPresentation.description}
          />
          <div className="engagement-grid">
            {sampleEngagements.map((item, index) => (
              <article className="engagement-card" key={item.title}>
                <div className="engagement-card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="engagement-card-content">
                  <div className="engagement-card-meta"><small>{item.label}</small><span>Sample</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <strong><span>Future proof point</span>{item.outcome}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container">
          <div className="resources-heading-row">
            <div className="resources-heading-main">
              <span className="home-section-index">06 / Field notes</span>
              <SectionHeading eyebrow="Resources" title="Practical thinking for better outbound decisions." copy="Frameworks and field notes for teams that want more precision before adding more activity." />
            </div>
            <div className="resources-heading-action">
              <p>Built to be used—not saved for later and forgotten.</p>
              <ButtonLink href="/resources/insights" variant="secondary">Explore the library</ButtonLink>
            </div>
          </div>
          <div className="resource-grid">
            {resources.map((resource, index) => (
              <Link className={`resource-card ${index === 0 ? "resource-card-featured" : ""}`} href={resource.href} key={resource.title}>
                {index === 0 ? <div className="resource-card-orbit" aria-hidden="true"><span /><span /><i /></div> : null}
                <div className="resource-card-meta"><small>{resource.type}</small><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="resource-card-body">
                  {index === 0 ? <span className="resource-feature-label">Start here</span> : null}
                  <h3>{resource.title}</h3>
                  <p>{resource.excerpt}</p>
                </div>
                <div className="resource-card-footer">
                  <span>{resource.readTime}</span>
                  <strong>Read {resource.type.toLowerCase()} <Icon name="arrow" width={16} height={16} /></strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="home-section-index">07</span>
            <SectionHeading eyebrow="FAQ" title="Useful answers before the first call." copy="The final commercial, compliance, and delivery details will be updated as the company operating model is confirmed." />
            <Link className="faq-contact-link" href="/contact">Still have a question? <strong>Talk to us</strong><Icon name="arrow" width={16} height={16} /></Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-orbit" aria-hidden="true"><span /><span /></div>
          <div>
            <p className="eyebrow">Build the next orbit</p>
            <h2>Turn a clear market into better sales conversations.</h2>
            <p>Start with one focused growth hypothesis and a practical pilot plan.</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Book a strategy call</ButtonLink>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
