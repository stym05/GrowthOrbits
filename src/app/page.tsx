import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { FAQAccordion } from "@/components/faq-accordion";
import { HeroOrbitAnimation } from "@/components/hero-orbit-animation";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  campaignQualityLoop,
  homeHero,
  homeProcess,
  homeResources,
  homeServices,
  homeTestimonials,
} from "@/content/home";
import {
  audiences,
  faqs,
  operatingPrinciples,
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
      <section className="orbit-hero">
        <div className="orbit-hero-background" aria-hidden="true" />
        <HeroOrbitAnimation />
        <div className="container orbit-hero-inner">
          <div className="hero-copy orbit-hero-copy">
            <p className="eyebrow">{homeHero.eyebrow}</p>
            <h1>{homeHero.title}</h1>
            <p className="hero-lede">{homeHero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={homeHero.primaryAction.href}>{homeHero.primaryAction.label}</ButtonLink>
              <ButtonLink href={homeHero.secondaryAction.href} variant="secondary">{homeHero.secondaryAction.label}</ButtonLink>
            </div>
            {/* <div className="hero-trust">
              <span>Designed for</span>
              {homeHero.designedFor.map((sector) => <strong key={sector}>{sector}</strong>)}
            </div> */}
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
          <div className="services-showcase-heading">
            <p className="eyebrow">What we do</p>
            <h2>{homeServices.titleLead} <span>{homeServices.titleAccent}</span></h2>
            <p>{homeServices.description}</p>
          </div>
          <div className="services-showcase-grid">
            {homeServices.items.map((service, index) => (
              <Link className={`services-showcase-card ${index === 1 ? "is-raised" : ""}`} href={service.href} key={service.number}>
                <div className="services-showcase-image">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 720px) 100vw, 34vw" />
                </div>
                <div className="services-showcase-content">
                  <span className="services-showcase-number">{service.number} / Solution</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="services-showcase-link">Learn More <Icon name="arrow" width={16} height={16} /></span>
                </div>
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
            <ButtonLink href="/about/how-we-work" variant="secondary">How and why we work</ButtonLink>
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
          <div className="process-showcase-heading">
            <p className="eyebrow">How it works</p>
            <h2>{homeProcess.title}</h2>
            <p>{homeProcess.description}</p>
          </div>
          <div className="process-showcase-grid">
            {homeProcess.steps.map((step) => (
              <article className="process-showcase-card" key={step.number} tabIndex={0}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="process-showcase-action">
            <p>Built as one connected workflow, not four disconnected activities.</p>
            <Link className="process-showcase-cta" href="/about/our-story">
              Why Growth Orbits? <Icon name="arrow" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container audience-layout">
          <div className="audience-intro">
            <SectionHeading
              title="Industries We Help Grow"
              copy="We help B2B companies across technology and service industries build stronger pipelines, connect with the right decision-makers, and create new growth opportunities."
            />
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
          <div className="testimonials-heading">
            <p className="eyebrow">Client stories</p>
            <h2>{homeTestimonials.title}</h2>
            <p>{homeTestimonials.description}</p>
          </div>
          <div className="testimonials-grid">
            {homeTestimonials.items.map((item) => (
              <figure className="testimonial-card" key={item.name}>
                <blockquote>
                  <p>“{item.quote}”</p>
                </blockquote>
                <div className="testimonial-portrait">
                  <Image src={item.image} alt={`AI-generated portrait representing ${item.name}`} fill sizes="120px" />
                </div>
                <figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container resources-showcase">
          <div className="resources-showcase-intro">
            <p className="eyebrow">Resources</p>
            <h2>{homeResources.title}</h2>
            <p>{homeResources.description}</p>
            <span>Featured Blogs</span>
          </div>
          <div className="resources-showcase-list">
            {homeResources.items.map((resource, index) => (
              <Link className="resource-showcase-card" href={resource.href} key={resource.title}>
                <div className={`resource-showcase-art art-${index + 1}`} aria-hidden="true">
                  <span /><span /><i />
                </div>
                <div className="resource-showcase-copy">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <strong>Read More <Icon name="arrow" width={15} height={15} /></strong>
                </div>
                <Icon className="resource-showcase-arrow" name="arrow" width={22} height={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <SectionHeading title="Frequently Asked Questions" copy="Find answers to common questions about our appointment setting, lead generation, and B2B growth services." />
            <Link className="faq-contact-link" href="/contact"><strong>Still have questions? Let’s talk</strong><Icon name="arrow" width={16} height={16} /></Link>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-orbit" aria-hidden="true"><span /><span /></div>
          <div>
            <p className="eyebrow">Ready to grow?</p>
            <h2>Ready to fill your calendar with qualified meetings?</h2>
            <p>Book a 30-minute strategy call. We’ll map your ICP and show you exactly how we can book meetings for your team.</p>
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
