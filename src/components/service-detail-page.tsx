import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FAQAccordion } from "@/components/faq-accordion";
import { Icon } from "@/components/icons";
import { appointmentSettingAudience, appointmentSettingFaq, appointmentSettingPilot, appointmentSettingProblem, b2bLeadGenerationPage, serviceDetails, type ServiceDetailKey } from "@/content/service-details";

function B2BLeadGenerationPage() {
  return (
    <main className="service-detail-page service-detail-b2b-lead-generation lead-generation-page">
      <section className="lead-generation-hero">
        <div className="lead-generation-hero-orbits" aria-hidden="true"><span /><span /><i /><i /></div>
        <div className="container lead-generation-hero-copy">
          <p className="eyebrow">{b2bLeadGenerationPage.eyebrow}</p>
          <h1>{b2bLeadGenerationPage.title}</h1>
          <p>{b2bLeadGenerationPage.description}</p>
          <ButtonLink href="#lead-generation-included">See what&apos;s included</ButtonLink>
        </div>
      </section>

      <section className="section lead-generation-delivers-section">
        <div className="container lead-generation-delivers-layout">
          <div className="lead-generation-delivers-copy">
            <p className="eyebrow">Built for sales readiness</p>
            <h2>{b2bLeadGenerationPage.deliverables.title}</h2>
            <p>{b2bLeadGenerationPage.deliverables.description}</p>
          </div>
          <div className="lead-generation-deliverables">
            {b2bLeadGenerationPage.deliverables.items.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon name="check" width={17} height={17} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-generation-problem-section">
        <div className="container lead-generation-problem-layout">
          <div>
            <p className="eyebrow">{b2bLeadGenerationPage.problem.eyebrow}</p>
            <h2>{b2bLeadGenerationPage.problem.title}</h2>
          </div>
          <p>{b2bLeadGenerationPage.problem.description}</p>
        </div>
      </section>

      <section className="section lead-generation-included-section" id="lead-generation-included">
        <div className="container">
          <div className="lead-generation-included-heading">
            <p className="eyebrow">{b2bLeadGenerationPage.included.eyebrow}</p>
            <h2>{b2bLeadGenerationPage.included.title}</h2>
          </div>
          <ol className="lead-generation-steps">
            {b2bLeadGenerationPage.included.items.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

function AppointmentDeliverableIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="14" width="44" height="40" rx="5" />
        <path d="M10 25h44M21 9v10M43 9v10M22 39l7 7 14-16" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="28" cy="23" r="9" />
        <path d="M11 52c1.5-11 7.5-17 17-17s15.5 6 17 17M48 13l2.4 4.8L56 19l-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-1.2L48 13Z" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M15 9h26l9 9v37H15V9Z" />
        <path d="M41 9v10h9M23 29h19M23 37h19M23 45h11" />
        <circle cx="18" cy="18" r="8" />
        <path d="m14.5 18 2.3 2.3 4.7-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="9" y="10" width="46" height="44" rx="5" />
      <path d="M18 44V33h7v11M29 44V25h7v19M40 44V18h7v26M17 48h31" />
      <path d="m18 27 9-7 8 2 12-9" />
    </svg>
  );
}

function AppointmentIndustryIcon({ index }: { index: number }) {
  const icons = [
    <path key="saas" d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.3 8.5 4.8 4.8 0 0 0 7 18Z" />,
    <g key="technology"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M8 10h8" /></g>,
    <g key="security"><path d="M12 3 20 6v5c0 5.2-3.4 8.5-8 10-4.6-1.5-8-4.8-8-10V6l8-3Z" /><rect x="9" y="10" width="6" height="5" rx="1" /><path d="M10 10V8.5a2 2 0 0 1 4 0V10" /></g>,
    <g key="finance"><path d="M4 20h16M6 17v-5M11 17V8M16 17v-3" /><path d="m5 9 5-4 4 2 5-4M16 3h3v3" /></g>,
    <g key="manufacturing"><path d="M3 21V9l6 3V8l6 4V5h6v16H3Z" /><path d="M7 16h2M12 16h2M17 16h2" /></g>,
    <g key="healthcare"><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z" /><path d="M12 9v6M9 12h6" /></g>,
    <g key="professional"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" /></g>,
    <g key="logistics"><path d="M3 6h11v11H3zM14 10h4l3 4v3h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></g>,
    <g key="marketing"><path d="m4 13 12-5v8L4 11v2ZM16 10l4-2v8l-4-2M6 13l2 6h4l-2-5" /></g>,
    <g key="telecom"><path d="M12 4v16M8 20h8M9 15l3-7 3 7" /><path d="M6.5 5.5a8 8 0 0 0 0 11M17.5 5.5a8 8 0 0 1 0 11" /></g>,
    <g key="staffing"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c.5-5 2.5-7 6-7s5.5 2 6 7M15 14c3.5 0 5.5 2 6 6" /></g>,
    <g key="retail"><path d="M5 8h14l-1 13H6L5 8ZM9 8V6a3 3 0 0 1 6 0v2" /><path d="M9 13h6" /></g>,
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

export function ServiceDetailPage({ serviceKey }: { serviceKey: ServiceDetailKey }) {
  if (serviceKey === "b2b-lead-generation") return <B2BLeadGenerationPage />;

  const service = serviceDetails[serviceKey];
  const isAppointmentSetting = serviceKey === "appointment-setting";
  const related = (Object.entries(serviceDetails) as [ServiceDetailKey, (typeof serviceDetails)[ServiceDetailKey]][])
    .filter(([key]) => key !== serviceKey);

  return (
    <main className={`service-detail-page service-detail-${serviceKey}`}>
      <section className="service-detail-hero">
        {isAppointmentSetting && (
          <div className="appointment-hero-orbits" aria-hidden="true">
            <span /><span /><span />
            <i /><i /><i /><i />
          </div>
        )}
        <div className="container service-detail-hero-grid">
          <div className="service-detail-hero-copy">
            {!isAppointmentSetting && <Link className="service-detail-back" href="/services"><span>←</span> All services</Link>}
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="service-detail-lede">{service.description}</p>
            <div className="hero-actions">
              {isAppointmentSetting ? (
                <ButtonLink href="#service-scope">See how it works</ButtonLink>
              ) : (
                <>
                  <ButtonLink href="/book-a-call">Discuss a pilot</ButtonLink>
                  <ButtonLink href="#service-scope" variant="secondary">See what’s included</ButtonLink>
                </>
              )}
            </div>
            {!isAppointmentSetting && (
              <div className="service-detail-signals" aria-label="Service qualities">
                {service.signals.map((signal, index) => (
                  <span key={signal}><small>{String(index + 1).padStart(2, "0")}</small>{signal}</span>
                ))}
              </div>
            )}
          </div>

          {!isAppointmentSetting && (
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
          )}
        </div>
      </section>

      {!isAppointmentSetting && (
        <>
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
        </>
      )}

      <section className={`service-scope-section section${isAppointmentSetting ? " appointment-deliverables-section" : ""}`} id="service-scope">
        <div className={`container${isAppointmentSetting ? " appointment-deliverables-layout" : ""}`}>
          {isAppointmentSetting ? (
            <>
              <div className="appointment-deliverables-intro">
                <p className="eyebrow">{service.scope.eyebrow}</p>
                <h2>{service.scope.title}</h2>
                <p>{service.scope.description}</p>
              </div>
              <div className="appointment-deliverables-grid">
                {service.scope.items.map((item, index) => (
                  <article key={item.number}>
                    <AppointmentDeliverableIcon index={index} />
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>

      <section className={`service-process-section section${isAppointmentSetting ? " appointment-problem-section" : ""}`}>
        <div className="container">
          {isAppointmentSetting ? (
            <div className="appointment-problem-layout">
              <div className="appointment-problem-copy">
                <p className="eyebrow">{appointmentSettingProblem.eyebrow}</p>
                <h2>{appointmentSettingProblem.title}</h2>
                <p>{appointmentSettingProblem.description}</p>
                <p>{appointmentSettingProblem.answer}</p>
              </div>
              <div className="appointment-problem-image">
                <Image
                  src={appointmentSettingProblem.image}
                  alt={appointmentSettingProblem.imageAlt}
                  fill
                  sizes="(max-width: 720px) 100vw, 52vw"
                />
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>

      {!isAppointmentSetting && (
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
      )}

      <section className={`service-related-section section${isAppointmentSetting ? " appointment-pilot-section" : ""}`}>
        <div className="container">
          {isAppointmentSetting ? (
            <div className="appointment-pilot-content">
              <h2>{appointmentSettingPilot.title}</h2>
              <p>
                {appointmentSettingPilot.descriptionStart}
                <strong>{appointmentSettingPilot.descriptionEmphasis}</strong>
                {appointmentSettingPilot.descriptionEnd}
              </p>
              <ButtonLink href={appointmentSettingPilot.action.href}>{appointmentSettingPilot.action.label}</ButtonLink>
            </div>
          ) : (
            <>
              <div className="service-related-heading"><div><p className="eyebrow">Explore the system</p><h2>Other ways to build pipeline.</h2></div><ButtonLink href="/services" variant="secondary">Compare all services</ButtonLink></div>
              <div className="service-related-grid">
                {related.map(([key, item]) => (
                  <Link href={`/services/${key}`} key={key}>
                    <span>{item.number}</span><div><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.description}</p></div><Icon name="arrow" width={20} height={20} />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {isAppointmentSetting && (
        <section className="appointment-industries-section section">
          <div className="container">
            <div className="appointment-industries-heading">
              <p className="eyebrow">{appointmentSettingAudience.eyebrow}</p>
              <h2>{appointmentSettingAudience.title}</h2>
              <p>{appointmentSettingAudience.description}</p>
            </div>
            <div className="appointment-industries-scroll">
              <ol className="appointment-industries-track" aria-label="Industries we serve">
                <svg className="appointment-industries-line" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 160C25 160 25 142 50 142S125 178 150 178 225 142 250 142 325 178 350 178 425 142 450 142 525 178 550 178 625 142 650 142 725 178 750 178 825 142 850 142 925 178 950 178 1025 142 1050 142 1125 178 1150 178 1175 160 1200 160" />
                </svg>
                {appointmentSettingAudience.industries.map((industry, index) => (
                  <li key={industry.name}>
                    <div className="appointment-industry-copy">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{industry.name}</strong>
                    </div>
                    <div className="appointment-industry-node" aria-hidden="true">
                      <AppointmentIndustryIcon index={index} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {isAppointmentSetting && (
        <section className="appointment-faq-section section">
          <div className="container appointment-faq-layout">
            <div className="appointment-faq-intro">
              <p className="eyebrow">FAQs</p>
              <h2>Questions about appointment setting?</h2>
              <p>Have more questions? We&apos;d be happy to answer them.</p>
              <ButtonLink href="/book-a-call" variant="secondary">Get in touch</ButtonLink>
            </div>
            <FAQAccordion items={appointmentSettingFaq} />
          </div>
        </section>
      )}

      <section className={`service-detail-cta-section${isAppointmentSetting ? " appointment-final-cta-section" : ""}`}>
        <div className={`container service-detail-cta-card${isAppointmentSetting ? " appointment-final-cta-card" : ""}`}>
          <div className="service-detail-cta-orbit" aria-hidden="true"><span /><span /><i /></div>
          <div>{!isAppointmentSetting && <p className="eyebrow">Build the next orbit</p>}<h2>{service.cta.title}</h2><p>{service.cta.copy}</p></div>
          <ButtonLink href="/book-a-call" variant="light">{isAppointmentSetting ? "Let’s connect" : "Plan a focused pilot"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
