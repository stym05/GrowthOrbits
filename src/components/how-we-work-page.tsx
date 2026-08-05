import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  collaborationModel,
  deliveryStandards,
  weeklyRhythm,
  workPhases,
} from "@/content/how-we-work";

export function HowWeWorkPage() {
  return (
    <main className="how-we-work-page">
      <section className="page-hero work-hero">
        <div className="container work-hero-layout">
          <div className="work-hero-copy">
            <p className="eyebrow">How we work</p>
            <h1>Clear direction. Close collaboration. Better learning.</h1>
            <p>
              One accountable operating rhythm connects discovery, research, outreach, qualification, and pipeline feedback.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#engagement-phases">See the process</ButtonLink>
              <ButtonLink href="/book-a-call" variant="secondary">Discuss a pilot</ButtonLink>
            </div>
          </div>

          <div className="work-loop" aria-label="Four connected stages in the Growth Orbits process">
            <div className="work-loop-core">
              <span>Shared centre</span>
              <strong>Market evidence</strong>
            </div>
            {workPhases.map((phase, index) => (
              <div className={`work-loop-step work-loop-step-${index + 1}`} key={phase.number}>
                <span>{phase.number}</span>
                <strong>{phase.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section work-phases-section" id="engagement-phases">
        <div className="container">
          <SectionHeading
            eyebrow="The engagement"
            title="Four phases, connected by one learning loop."
            copy="Each phase creates a clear output for the next. Nothing disappears into a black box."
          />

          <ol className="work-phases">
            {workPhases.map((phase) => (
              <li className="work-phase" key={phase.number}>
                <div className="work-phase-index">
                  <span>{phase.number}</span>
                  <small>{phase.timing}</small>
                </div>
                <div className="work-phase-copy">
                  <h3>{phase.title}</h3>
                  <p>{phase.copy}</p>
                  <ul aria-label={`${phase.title} activities`}>
                    {phase.activities.map((activity) => <li key={activity}>{activity}</li>)}
                  </ul>
                </div>
                <div className="work-phase-outcome">
                  <span>Phase outcome</span>
                  <p>{phase.outcome}</p>
                  <Icon name="arrow" width={20} height={20} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section collaboration-section">
        <div className="container">
          <SectionHeading
            eyebrow="Working together"
            title="Clear ownership keeps the work moving."
            copy="The best programmes feel like one connected team with distinct responsibilities."
          />

          <div className="collaboration-board">
            <article className="collaboration-column">
              <span className="collaboration-label">Your team brings</span>
              <h3>Context and customer truth.</h3>
              <ul>
                {collaborationModel.client.map((item) => (
                  <li key={item}><Icon name="check" width={18} height={18} />{item}</li>
                ))}
              </ul>
            </article>

            <div className="collaboration-join" aria-hidden="true">
              <span>+</span>
            </div>

            <article className="collaboration-column collaboration-column-accent">
              <span className="collaboration-label">Growth Orbits owns</span>
              <h3>Execution and learning.</h3>
              <ul>
                {collaborationModel.growthOrbits.map((item) => (
                  <li key={item}><Icon name="check" width={18} height={18} />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section work-rhythm-section">
        <div className="container work-rhythm-layout">
          <div className="work-rhythm-heading">
            <p className="eyebrow">The weekly rhythm</p>
            <h2>A steady cadence turns activity into insight.</h2>
            <p>Short feedback loops keep decisions close to what the market is actually telling us.</p>
          </div>
          <ol className="work-rhythm">
            {weeklyRhythm.map((moment, index) => (
              <li key={moment.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{moment.label}</small>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section delivery-standards-section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery standards"
            title="Built to be rigorous without becoming rigid."
            copy="The operating principles that protect quality as a campaign evolves."
            invert
          />
          <div className="delivery-standards-grid">
            {deliveryStandards.map((standard) => (
              <article className="delivery-standard" key={standard.number}>
                <span>{standard.number}</span>
                <h3>{standard.title}</h3>
                <p>{standard.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Start with alignment</p>
            <h2>Bring us the market you want to understand.</h2>
            <p>We’ll turn it into a focused first campaign and a practical learning plan.</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Plan a pilot</ButtonLink>
        </div>
      </section>
    </main>
  );
}
