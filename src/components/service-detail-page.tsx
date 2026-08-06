import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { serviceDetails, type ServiceDetailKey } from "@/content/service-details";

export function ServiceDetailPage({ serviceKey }: { serviceKey: ServiceDetailKey }) {
  const service = serviceDetails[serviceKey];
  const related = (Object.entries(serviceDetails) as [ServiceDetailKey, (typeof serviceDetails)[ServiceDetailKey]][])
    .filter(([key]) => key !== serviceKey);

  return (
    <main className={`service-detail-page service-detail-${serviceKey}`}>
      <section className="service-detail-hero">
        <div className="container service-detail-hero-grid">
          <div className="service-detail-hero-copy">
            <Link className="service-detail-back" href="/services"><span>←</span> All services</Link>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="service-detail-lede">{service.description}</p>
            <div className="hero-actions">
              <ButtonLink href="/book-a-call">Discuss a pilot</ButtonLink>
              <ButtonLink href="#service-scope" variant="secondary">See what’s included</ButtonLink>
            </div>
            <div className="service-detail-signals" aria-label="Service qualities">
              {service.signals.map((signal, index) => (
                <span key={signal}><small>{String(index + 1).padStart(2, "0")}</small>{signal}</span>
              ))}
            </div>
          </div>

          <div className="service-detail-system" aria-label={`${service.eyebrow} operating system`}>
            <div className="service-detail-system-top"><span>Service {service.number}</span><small>Growth Orbits</small></div>
            <div className="service-detail-rings" aria-hidden="true"><span /><span /><i /><i /></div>
            <div className="service-detail-core"><small>Shared outcome</small><strong>{service.visual.centre}</strong></div>
            {service.visual.nodes.map((node, index) => (
              <div className={`service-detail-node service-detail-node-${index + 1}`} key={node}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong>
              </div>
            ))}
            <p>Market focus <span>→</span> relevant engagement <span>→</span> commercial action</p>
          </div>
        </div>
      </section>

      <section className="service-snapshot-section">
        <div className="container service-snapshot-grid">
          {service.snapshot.map((item, index) => (
            <article key={item.value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-challenge-section section">
        <div className="container service-challenge-grid">
          <div className="service-challenge-copy">
            <p className="eyebrow">{service.challenge.eyebrow}</p>
            <h2>{service.challenge.title}</h2>
            <p>{service.challenge.copy}</p>
            <blockquote>{service.challenge.answer}</blockquote>
          </div>
          <div className="service-friction-list">
            <span>Common signs</span>
            {service.challenge.points.map((point, index) => (
              <article key={point}><small>{String(index + 1).padStart(2, "0")}</small><p>{point}</p><i aria-hidden="true" /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-scope-section section" id="service-scope">
        <div className="container">
          <div className="service-detail-heading-row">
            <div><p className="eyebrow">{service.scope.eyebrow}</p><h2>{service.scope.title}</h2></div>
            <p>{service.scope.description}</p>
          </div>
          <div className="service-scope-grid">
            {service.scope.items.map((item) => (
              <article key={item.number}>
                <div><span>{item.number}</span><i aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section section">
        <div className="container">
          <div className="service-detail-heading-row">
            <div><p className="eyebrow">Delivery rhythm</p><h2>One connected path from focus to evidence.</h2></div>
            <p>The exact campaign shape changes by service. The operating rhythm stays deliberate, visible, and designed to improve.</p>
          </div>
          <ol className="service-process-track">
            {service.process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-handoff-section section">
        <div className="container service-handoff-grid">
          <div className="service-handoff-copy">
            <p className="eyebrow">{service.handoff.eyebrow}</p>
            <h2>{service.handoff.title}</h2>
            <p>{service.handoff.copy}</p>
            <ul>{service.handoff.includes.map((item) => <li key={item}><Icon name="check" width={16} height={16} />{item}</li>)}</ul>
          </div>
          <div className="service-handoff-card">
            <div className="service-handoff-card-top"><span>{service.handoff.cardLabel}</span><small>Sample · editable</small></div>
            <div className="service-handoff-card-orbit" aria-hidden="true"><span /><span /><i /></div>
            <div><small>Output</small><h3>{service.handoff.cardTitle}</h3><p>{service.handoff.cardCopy}</p></div>
            <footer><span>Context</span><i /><span>Qualification</span><i /><span>Next action</span></footer>
          </div>
        </div>
      </section>

      <section className="service-related-section section">
        <div className="container">
          <div className="service-related-heading"><div><p className="eyebrow">Explore the system</p><h2>Other ways to build pipeline.</h2></div><ButtonLink href="/services" variant="secondary">Compare all services</ButtonLink></div>
          <div className="service-related-grid">
            {related.map(([key, item]) => (
              <Link href={`/services/${key}`} key={key}>
                <span>{item.number}</span><div><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.description}</p></div><Icon name="arrow" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta-section">
        <div className="container service-detail-cta-card">
          <div className="service-detail-cta-orbit" aria-hidden="true"><span /><span /><i /></div>
          <div><p className="eyebrow">Build the next orbit</p><h2>{service.cta.title}</h2><p>{service.cta.copy}</p></div>
          <ButtonLink href="/book-a-call" variant="light">Plan a focused pilot</ButtonLink>
        </div>
      </section>
    </main>
  );
}
