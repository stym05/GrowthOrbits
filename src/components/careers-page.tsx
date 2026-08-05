import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { careersContent } from "@/content/careers";

export function CareersPage() {
  const { hero, culture, experience, futureRoles, hiring, openApplication } = careersContent;

  return (
    <main className="careers-page">
      <section className="careers-hero">
        <div className="container careers-hero-grid">
          <div className="careers-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="careers-hero-lede">{hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink>
            </div>
            <div className="careers-hero-signals" aria-label="Our working environment">
              {hero.signals.map((signal, index) => (
                <span key={signal}><small>{String(index + 1).padStart(2, "0")}</small>{signal}</span>
              ))}
            </div>
          </div>
          <div className="careers-hero-visual">
            <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="(max-width: 1080px) 100vw, 56vw" />
            <div className="careers-image-caption"><span>Inside the orbit</span><strong>Curiosity in company</strong></div>
          </div>
        </div>
      </section>

      <section className="careers-manifesto-section section">
        <div className="container careers-manifesto-grid">
          <div className="careers-culture-visual">
            <Image src={culture.image} alt={culture.imageAlt} fill sizes="(max-width: 720px) 100vw, 42vw" />
            <blockquote>“{culture.quote}”</blockquote>
          </div>
          <div className="careers-culture-copy">
            <SectionHeading eyebrow={culture.eyebrow} title={culture.title} copy={culture.description} />
            <div className="careers-principles">
              {culture.principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <div><h3>{principle.title}</h3><p>{principle.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="careers-experience-section section">
        <div className="container">
          <div className="careers-heading-row">
            <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />
            <p>{experience.note}</p>
          </div>
          <div className="careers-experience-grid">
            {experience.items.map((item, index) => (
              <article key={item.title}>
                <div><span>{item.meta}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-roles-section section" id="future-roles">
        <div className="container careers-roles-layout">
          <div className="careers-roles-intro">
            <SectionHeading eyebrow={futureRoles.eyebrow} title={futureRoles.title} copy={futureRoles.description} invert />
            <div className="sample-content-note"><strong>Sample roadmap</strong><span>Replace these cards when vacancies are approved.</span></div>
          </div>
          <div className="careers-role-list">
            {futureRoles.roles.map((role, index) => (
              <article key={role.title}>
                <div className="careers-role-topline"><span>{role.discipline}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
                <h3>{role.title}</h3>
                <p>{role.copy}</p>
                <ul>{role.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-hiring-section section">
        <div className="container">
          <SectionHeading eyebrow={hiring.eyebrow} title={hiring.title} />
          <ol className="careers-hiring-steps">
            {hiring.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="careers-open-section">
        <div className="container careers-open-card">
          <div className="careers-open-orbit" aria-hidden="true"><span /><span /></div>
          <div>
            <p className="eyebrow">{openApplication.status}</p>
            <h2>{openApplication.title}</h2>
            <p>{openApplication.copy}</p>
          </div>
          <ButtonLink href={openApplication.action.href} variant="light">
            {openApplication.action.label}
          </ButtonLink>
          <Icon className="careers-open-arrow" name="arrow" width={34} height={34} />
        </div>
      </section>
    </main>
  );
}
