import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { servicesOverviewContent } from "@/content/services-overview";

export function ServicesOverviewPage() {
  const { hero, services, outcomes, comparison, foundations, decision } = servicesOverviewContent;

  return (
    <main className="services-overview-page">
      <section className="services-overview-hero">
        <div className="container services-overview-hero-grid">
          <div className="services-overview-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink>
            </div>
            <div className="services-hero-proof"><span>Designed for</span><strong>Complex offers</strong><strong>Defined markets</strong><strong>Considered sales</strong></div>
          </div>
          <div className="services-system" aria-label="Three services connected to qualified pipeline">
            <div className="services-system-ring services-system-ring-one" />
            <div className="services-system-ring services-system-ring-two" />
            <div className="services-system-core"><span>{hero.centre.label}</span><strong>{hero.centre.value}</strong></div>
            {hero.orbit.map((item, index) => (
              <div className={`services-system-card services-system-card-${index + 1}`} key={item.number}>
                <span>{item.number}</span><strong>{item.label}</strong><small>{item.detail}</small>
              </div>
            ))}
            <i className="services-system-dot services-system-dot-one" /><i className="services-system-dot services-system-dot-two" /><i className="services-system-dot services-system-dot-three" />
          </div>
        </div>
      </section>

      <nav className="services-route-nav" aria-label="Services on this page">
        <div className="container">
          <span>Choose a starting route</span>
          <div>
            {services.map((service) => (
              <Link href={`#service-${service.number}`} key={service.number}>
                <small>{service.number}</small>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="services-catalog-section section" id="service-options">
        <div className="container">
          <div className="services-catalog-heading">
            <SectionHeading eyebrow="Service options" title="Three ways to create commercial momentum." copy="Each offer has a clear job. Combine them only when the market and sales motion justify it." />
            <span>Explore the detail ↓</span>
          </div>
          <div className="services-catalog">
            {services.map((service) => (
              <article className="services-catalog-row" id={`service-${service.number}`} key={service.number}>
                <div className="services-catalog-index"><span>{service.number}</span><small>{service.eyebrow}</small></div>
                <div className="services-catalog-main"><h2>{service.title}</h2><p>{service.copy}</p><ButtonLink href={service.href} variant="secondary">Explore {service.title}</ButtonLink></div>
                <div className="services-catalog-fit"><span>Best for</span><p>{service.bestFor}</p><strong>{service.outcome}</strong></div>
                <ul>{service.capabilities.map((item) => <li key={item}><Icon name="check" width={16} height={16} />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-outcomes-section section">
        <div className="container services-outcomes-layout">
          <div className="services-outcomes-intro">
            <p className="eyebrow">{outcomes.eyebrow}</p>
            <h2>{outcomes.title}</h2>
            <p>{outcomes.description}</p>
            <div className="services-outcome-orbit" aria-hidden="true"><span /><span /><i /></div>
          </div>
          <div className="services-outcomes-list">
            {outcomes.items.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div><small>{item.label}</small><h3>{item.title}</h3><p>{item.copy}</p></div>
                <Icon name="arrow" width={19} height={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-comparison-section section">
        <div className="container">
          <SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} copy={comparison.description} />
          <p className="services-comparison-hint">Swipe sideways to compare every service <span>→</span></p>
          <div className="services-comparison-scroll">
            <div className="services-comparison-table" role="table" aria-label="Service comparison">
              <div className="services-comparison-head" role="row">
                <span role="columnheader">Compare by</span>
                {services.map((service) => <Link role="columnheader" href={service.href} key={service.number}><small>{service.number}</small>{service.title}<Icon name="arrow" width={15} height={15} /></Link>)}
              </div>
              {comparison.rows.map((row) => (
                <div className="services-comparison-row" role="row" key={row.label}>
                  <strong role="rowheader">{row.label}</strong>
                  {row.values.map((value) => <span role="cell" key={value}>{value}</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-foundations-section section">
        <div className="container">
          <SectionHeading eyebrow={foundations.eyebrow} title={foundations.title} copy={foundations.description} invert />
          <div className="services-foundations-grid">
            {foundations.items.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="services-decision-section">
        <div className="container services-decision-card">
          <div className="services-decision-orbit" aria-hidden="true"><span /><span /></div>
          <div><p className="eyebrow">{decision.eyebrow}</p><h2>{decision.title}</h2><p>{decision.copy}</p></div>
          <ButtonLink href={decision.action.href} variant="light">{decision.action.label}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
