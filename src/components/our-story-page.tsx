import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { enduringIdeas, sampleStory, storyMilestones } from "@/content/story";

export function OurStoryPage() {
  return (
    <main className="our-story-page">
      <section className="page-hero story-hero">
        <div className="container story-hero-layout">
          <div className="story-hero-copy">
            <p className="eyebrow">Our story</p>
            <h1>Growth should feel considered, not mechanical.</h1>
            <p>
              We started Growth Orbits to bring research, relevance, and human judgement back to B2B growth.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#where-it-started">Read our story</ButtonLink>
              <ButtonLink href="/about/founder-team" variant="secondary">Meet the team</ButtonLink>
            </div>
          </div>

          <div className="story-orbit" aria-hidden="true">
            <span className="story-orbit-ring story-orbit-ring-one" />
            <span className="story-orbit-ring story-orbit-ring-two" />
            <div className="story-orbit-core">
              <span>One clear centre</span>
              <strong>Better buyer conversations</strong>
            </div>
            <span className="story-orbit-label story-orbit-label-one">Research</span>
            <span className="story-orbit-label story-orbit-label-two">Relevance</span>
            <span className="story-orbit-label story-orbit-label-three">Learning</span>
          </div>

          <div className="sample-content-note story-sample-note" role="note">
            <span>Sample story</span>
            <p>{sampleStory.note}</p>
          </div>
        </div>
      </section>

      <section className="content-section story-origin-section" id="where-it-started">
        <div className="container story-origin-layout">
          <header>
            <p className="eyebrow">Where it started</p>
            <h2>Built from a frustration with activity that went nowhere.</h2>
          </header>
          <div className="story-origin-copy">
            <p className="story-lead">{sampleStory.introduction}</p>
            {sampleStory.origin.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <blockquote className="story-quote">
            <span>“</span>
            <p>{sampleStory.quote}</p>
            <small>The founding idea</small>
          </blockquote>
        </div>
      </section>

      <section className="content-section story-timeline-section">
        <div className="container">
          <SectionHeading
            eyebrow="The journey so far"
            title="From a simple observation to a connected growth model."
            copy="A sample timeline showing how Growth Orbits could tell its company story. Every entry is stored as editable content."
          />
          <ol className="story-timeline">
            {storyMilestones.map((milestone, index) => (
              <li className="story-milestone" key={milestone.year}>
                <div className="story-milestone-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="story-milestone-date">
                  <strong>{milestone.year}</strong>
                  <span>{milestone.label}</span>
                </div>
                <div className="story-milestone-copy">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section story-beliefs-section">
        <div className="container">
          <SectionHeading
            eyebrow="What has not changed"
            title="Three ideas still guide every orbit."
            copy="The methods can evolve. These principles keep the work grounded."
            invert
          />
          <div className="story-beliefs-grid">
            {enduringIdeas.map((idea) => (
              <article className="story-belief" key={idea.number}>
                <span>{idea.number}</span>
                <h3>{idea.title}</h3>
                <p>{idea.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">The next chapter</p>
            <h2>Let’s build a better growth orbit together.</h2>
            <p>Start with the market, the problem, and the conversations worth creating.</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Book a strategy call</ButtonLink>
        </div>
      </section>
    </main>
  );
}
