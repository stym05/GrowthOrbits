import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { OrbitVisual } from "@/components/orbit-visual";
import { SectionHeading } from "@/components/section-heading";
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
    <main>
      <section className="hero-section">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">B2B pipeline development</p>
            <h1>Turn the right accounts into qualified sales conversations.</h1>
            <p className="hero-lede">
              Growth Orbits combines targeted research, personalized outreach, and appointment setting to help B2B teams build a more predictable pipeline.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/book-a-call">Book a strategy call</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore our services</ButtonLink>
            </div>
            <div className="hero-trust">
              <span>Designed for</span>
              <strong>B2B SaaS</strong>
              <strong>Technology</strong>
              <strong>Cybersecurity</strong>
              <strong>Professional services</strong>
            </div>
          </div>
          <OrbitVisual />
        </div>
      </section>

      <section className="principles-strip" aria-label="Operating principles">
        <div className="container principles-grid">
          {operatingPrinciples.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="One connected system for B2B pipeline growth."
            copy="Choose a focused service or combine the capabilities into one accountable programme built around your market and sales motion."
          />
          <div className="services-grid">
            {services.map((service) => (
              <Link className={`service-card accent-${service.accent}`} href={service.href} key={service.slug}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <Icon name="arrow" width={22} height={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <div className="proof-copy">
            <p className="eyebrow">Built for signal, not noise</p>
            <h2>Your sales team needs context, not another spreadsheet.</h2>
            <p>
              Growth Orbits is designed to move from precise account selection to relevant buyer engagement and a useful sales handoff. Activity is only valuable when it creates learning or opportunity.
            </p>
            <ButtonLink href="/about/why-us" variant="secondary">Why Growth Orbits</ButtonLink>
          </div>
          <div className="proof-panel">
            <div className="proof-label">Campaign quality loop</div>
            <ol>
              <li><span>01</span><div><strong>Fit</strong><p>Is this account worth pursuing?</p></div></li>
              <li><span>02</span><div><strong>Relevance</strong><p>Why should this buyer care now?</p></div></li>
              <li><span>03</span><div><strong>Qualification</strong><p>Is there a real reason to meet?</p></div></li>
              <li><span>04</span><div><strong>Learning</strong><p>What should change next?</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="A clear route from market definition to campaign learning."
            copy="A compact operating model keeps targeting, data, messaging, outreach, and sales handoff connected."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="process-action">
            <ButtonLink href="/about/how-we-work">See how we work</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container audience-layout">
          <SectionHeading
            eyebrow="Who we serve"
            title="For teams selling valuable, considered B2B solutions."
            copy="The initial focus is on sectors where account selection, buying-group context, and conversation quality matter more than raw lead volume."
          />
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
            eyebrow="Engagement examples"
            title="Show the commercial story without inventing proof."
            copy="These cards demonstrate the future case-study format and are explicitly marked as illustrative until verified customer evidence is available."
          />
          <div className="engagement-grid">
            {sampleEngagements.map((item) => (
              <article className="engagement-card" key={item.title}>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <strong>{item.outcome}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container">
          <div className="resources-heading-row">
            <SectionHeading eyebrow="Resources" title="Practical thinking for better outbound decisions." />
            <ButtonLink href="/resources/insights" variant="secondary">View all resources</ButtonLink>
          </div>
          <div className="resource-grid">
            {resources.map((resource) => (
              <Link className="resource-card" href={resource.href} key={resource.title}>
                <small>{resource.type}</small>
                <h3>{resource.title}</h3>
                <p>{resource.excerpt}</p>
                <span>Read more <Icon name="arrow" width={16} height={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <SectionHeading eyebrow="FAQ" title="Useful answers before the first call." copy="The final commercial, compliance, and delivery details will be updated as the company operating model is confirmed." />
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
