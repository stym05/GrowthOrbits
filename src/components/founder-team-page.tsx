import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { sampleFounder, sampleTeam, teamPrinciples } from "@/content/team";

export function FounderTeamPage() {
  return (
    <main className="founder-team-page">
      <section className="page-hero founder-team-hero">
        <div className="container founder-hero-layout">
          <div className="founder-hero-copy">
            <p className="eyebrow">Founder & team</p>
            <h1>A specialist team, close to the work.</h1>
            <p>
              Strategy, account intelligence, and campaign execution connected through one shared learning loop.
            </p>
          </div>

          <div className="team-hero-collage" aria-label="Sample founder and team portraits">
            <div className="collage-founder-image">
              <Image
                src={sampleFounder.image}
                alt={`Sample portrait for ${sampleFounder.name}, fictional founder profile`}
                fill
                priority
                sizes="(max-width: 900px) 82vw, 38vw"
                style={{ objectPosition: sampleFounder.imagePosition }}
              />
            </div>
            <div className="collage-team-strip">
              {sampleTeam.map((member) => (
                <div className="collage-team-image" key={member.name}>
                  <Image
                    src={member.image}
                    alt={`Sample portrait for ${member.name}, fictional ${member.role} profile`}
                    fill
                    sizes="(max-width: 900px) 22vw, 10vw"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>
              ))}
            </div>
            <div className="collage-caption">
              <strong>One connected team</strong>
              <span>Strategy · Research · Delivery</span>
            </div>
          </div>

          <div className="sample-content-note" role="note">
            <span>Sample content</span>
            <p>Names, biographies, roles, and portraits are placeholders designed to be replaced before launch.</p>
          </div>
        </div>
      </section>

      <section className="content-section editorial-founder-section">
        <div className="container editorial-founder-story">
          <header>
            <p className="eyebrow">The founder’s view</p>
            <span className="editorial-index">01 / 04</span>
            <h2>{sampleFounder.name}</h2>
            <p className="founder-role">{sampleFounder.role}</p>
          </header>

          <div className="founder-narrative">
            <p className="founder-introduction">{sampleFounder.introduction}</p>
            {sampleFounder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className="founder-focus" aria-label="Founder areas of focus">
              {sampleFounder.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <blockquote>
            <span>“</span>
            {sampleFounder.quote}
            <small>{sampleFounder.location}</small>
          </blockquote>
        </div>
      </section>

      <section className="content-section editorial-team-section">
        <div className="container">
          <SectionHeading
            eyebrow="The specialist team"
            title="Three disciplines moving in the same direction."
            copy="Each role owns a distinct part of the work while staying connected to the same market evidence and campaign decisions."
          />

          <div className="editorial-team-roster">
            {sampleTeam.map((member, index) => (
              <article className="editorial-team-row" key={member.name}>
                <span className="editorial-index">0{index + 2} / 04</span>
                <div className="editorial-team-image">
                  <Image
                    src={member.image}
                    alt={`Sample portrait for ${member.name}, fictional ${member.role} profile`}
                    fill
                    sizes="(max-width: 720px) 100vw, 34vw"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>
                <div className="editorial-team-copy">
                  <p>{member.role}</p>
                  <h3>{member.name}</h3>
                  <div>{member.bio}</div>
                  <ul aria-label={`${member.name} areas of focus`}>
                    {member.focus.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section team-model-section">
        <div className="container">
          <SectionHeading
            eyebrow="How the team works"
            title="A senior, flexible model built around the campaign."
            copy="The operating model stays intentionally compact, bringing in the right depth without creating distance from the work."
            invert
          />
          <div className="team-principles">
            {teamPrinciples.map((principle) => (
              <article className="team-principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Bring the team a focused growth question.</h2>
            <p>We’ll help turn it into a practical market and campaign plan.</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Book a strategy call</ButtonLink>
        </div>
      </section>
    </main>
  );
}
