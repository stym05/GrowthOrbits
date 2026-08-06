import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";

const callAgenda = [
  {
    number: "01",
    title: "Understand the context",
    copy: "Your offer, ideal customer, target market, sales motion, and the commercial goal behind the conversation.",
  },
  {
    number: "02",
    title: "Locate the friction",
    copy: "Where targeting, data, messaging, outreach, qualification, or handoff is limiting pipeline today.",
  },
  {
    number: "03",
    title: "Define a sensible next step",
    copy: "A focused recommendation—whether that is a pilot, more discovery, internal preparation, or simply not proceeding.",
  },
];

const preparationPoints = [
  "The offer or service you want to grow",
  "Priority sectors, roles, regions, or accounts",
  "What you have already tried and learned",
  "The outcome that would make a pilot worthwhile",
];

export function BookCallPage() {
  return (
    <main className="book-call-page">
      <section className="book-call-hero">
        <div className="container book-call-hero-grid">
          <div className="book-call-hero-copy">
            <p className="eyebrow">Strategy conversation</p>
            <h1>Bring the pipeline challenge. Leave with a clearer next move.</h1>
            <p className="book-call-lede">
              A focused first conversation to understand your market, identify the real constraint, and decide whether Growth Orbits is the right partner for the work.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#book-call-form">Share your brief</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore services</ButtonLink>
            </div>
            <div className="book-call-promises" aria-label="Call principles">
              <span><Icon name="check" width={15} height={15} /> No hard sell</span>
              <span><Icon name="check" width={15} height={15} /> Practical discussion</span>
              <span><Icon name="check" width={15} height={15} /> Clear next step</span>
            </div>
          </div>

          <aside className="book-call-session-card" aria-label="Suggested strategy call agenda">
            <div className="book-call-orbits" aria-hidden="true">
              <span />
              <span />
              <i />
            </div>
            <div className="book-call-session-top">
              <span><i /> Strategy session</span>
              <small>Suggested format</small>
            </div>
            <div className="book-call-session-title">
              <strong>30</strong>
              <span>focused<br />minutes</span>
            </div>
            <ol className="book-call-mini-agenda">
              <li><span>01</span><strong>Market context</strong><small>10 min</small></li>
              <li><span>02</span><strong>Pipeline friction</strong><small>10 min</small></li>
              <li><span>03</span><strong>Next-step options</strong><small>10 min</small></li>
            </ol>
            <p>No formal deck required. Useful context is enough.</p>
          </aside>
        </div>
      </section>

      <section className="book-call-agenda-section">
        <div className="container">
          <div className="book-call-section-head">
            <div>
              <p className="eyebrow">A working conversation</p>
              <h2>What we’ll use the time to uncover.</h2>
            </div>
            <p>This is not a generic capabilities presentation. The agenda begins with your commercial context and stays anchored to it.</p>
          </div>

          <div className="book-call-agenda-grid">
            {callAgenda.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="book-call-prepare-section">
        <div className="container book-call-prepare-card">
          <div className="book-call-prepare-copy">
            <p className="eyebrow">Come as you are</p>
            <h2>A little preparation makes the call sharper.</h2>
            <p>You do not need perfect answers. A rough view of these four areas gives us enough to ask better questions.</p>
          </div>
          <ul>
            {preparationPoints.map((point, index) => (
              <li key={point}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="book-call-form-section" id="book-call-form">
        <div className="container book-call-form-layout">
          <aside className="book-call-form-intro">
            <p className="eyebrow">Request a conversation</p>
            <h2>Tell us what would make the call worthwhile.</h2>
            <p>Share the essentials below. Until live scheduling is connected, this brief gives the team what they need to arrange the right conversation.</p>
            <div className="book-call-fit-note">
              <span><Icon name="check" width={17} height={17} /></span>
              <div>
                <strong>Best suited to B2B growth teams</strong>
                <p>Especially those exploring outbound, appointment setting, lead generation, or account-based marketing.</p>
              </div>
            </div>
          </aside>
          <ContactForm
            kicker="Strategy call request"
            heading="Give us the useful context."
            intro="The brief does not need to be polished—specific is more useful than perfect."
          />
        </div>
      </section>
    </main>
  );
}
