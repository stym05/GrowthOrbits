import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  collaborationModel,
  deliveryStandards,
  fitProfile,
  modelPrinciples,
  weeklyRhythm,
  workPhases,
} from "@/content/how-we-work";

export function HowWeWorkPage() {
  return (
    <main className="how-we-work-page">
      <section className="page-hero work-hero">
        <div className="container work-hero-layout">
          <div className="work-hero-copy">
            <p className="eyebrow">How we work · Why Growth Orbits</p>
            <h1>A clearer way to turn market focus into qualified pipeline.</h1>
            <p>
              Growth Orbits connects strategy, research, outreach, qualification, and sales feedback in one accountable system—so quality improves before activity scales.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#engagement-phases">See the process</ButtonLink>
              <ButtonLink href="/book-a-call" variant="secondary">Discuss a pilot</ButtonLink>
            </div>
          </div>

          <div className="work-loop" aria-label="Four connected stages in the Growth Orbits process">
            <div className="work-loop-core">
              <span>The difference</span>
              <strong>Quality + evidence</strong>
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

      <section className="content-section work-difference-section">
        <div className="container work-difference-layout">
          <div className="work-difference-heading">
            <p className="eyebrow">Why the model works</p>
            <h2>Better conversations begin long before the first message.</h2>
            <p>Most outbound problems are created upstream. These four principles keep market choices, execution quality, and sales outcomes connected.</p>
          </div>
          <div className="work-difference-list">
            {modelPrinciples.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.copy}</p><strong>{principle.signal}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section work-phases-section" id="engagement-phases">
        <div className="container">
          <SectionHeading
            eyebrow="The operating system"
            title="Four phases. Clear outputs. One learning loop."
            copy="Each phase answers a different campaign question and creates a usable output for the next. Nothing disappears into a black box."
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
            title="One programme, with clear ownership on both sides."
            copy="The strongest engagements feel like one connected team without making responsibility ambiguous."
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
            <h2>Campaign activity becomes useful when it changes a decision.</h2>
            <p>A steady feedback cadence keeps targeting, messages, qualification, and follow-up close to what the market is actually telling us.</p>
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
            title="The standards that protect quality as the campaign evolves."
            copy="The practical commitments behind the Growth Orbits difference."
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

      <section className="content-section work-fit-section">
        <div className="container">
          <SectionHeading eyebrow="Mutual fit" title="The model works best when the conditions are right." copy="A useful first conversation should clarify fit as quickly as it clarifies opportunity." />
          <div className="work-fit-board">
            <article>
              <span className="collaboration-label">Strong fit</span>
              <h3>You are ready to learn and act.</h3>
              <ul>{fitProfile.goodFit.map((item) => <li key={item}><Icon name="check" width={17} height={17} />{item}</li>)}</ul>
            </article>
            <article className="work-fit-caution">
              <span className="collaboration-label">Probably not yet</span>
              <h3>The foundations need attention first.</h3>
              <ul>{fitProfile.poorFit.map((item) => <li key={item}><span aria-hidden="true">—</span>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Start with the constraint</p>
            <h2>Bring us the market, the offer, and what is not working.</h2>
            <p>We’ll make the right starting scope, the trade-offs, and the first learning goal clear.</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Plan a pilot</ButtonLink>
        </div>
      </section>
    </main>
  );
}
