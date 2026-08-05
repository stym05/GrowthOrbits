import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import type { ContentPage } from "@/content/site";

export function ContentPageView({ page }: { page: ContentPage }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          {page.path !== "thank-you" ? (
            <div className="hero-actions">
              <ButtonLink href="/book-a-call">Book a strategy call</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore services</ButtonLink>
            </div>
          ) : (
            <div className="hero-actions">
              <ButtonLink href="/">Return home</ButtonLink>
            </div>
          )}
        </div>
      </section>

      {page.sections.map((section, index) => {
        const theme = section.theme ?? "light";
        return (
          <section className={`content-section theme-${theme}`} key={`${section.title}-${index}`}>
            <div className="container">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                copy={section.copy}
                invert={theme === "navy"}
              />

              {section.bullets ? (
                <ul className="feature-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span><Icon name="check" width={18} height={18} /></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.cards ? (
                <div className="content-card-grid">
                  {section.cards.map((card) => (
                    <article className="content-card" key={card.title}>
                      {card.meta ? <small>{card.meta}</small> : null}
                      <h3>{card.title}</h3>
                      <p>{card.copy}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      {page.form ? (
        <section className="form-section">
          <div className="container form-layout">
            <div>
              <p className="eyebrow">Start the conversation</p>
              <h2>Share the context. We’ll make the next step clear.</h2>
              <p>
                This starter sends server-validated submissions through a protected API route. Configure the delivery and distributed rate-limiting environment variables before production.
              </p>
            </div>
            <ContactForm defaultService={page.form === "pilot" ? "Pilot programme" : "General enquiry"} />
          </div>
        </section>
      ) : null}

      {page.path !== "contact" && page.path !== "book-a-call" && page.path !== "pilot" && page.path !== "thank-you" ? (
        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow">Build the next orbit</p>
              <h2>Turn a clear market into better sales conversations.</h2>
            </div>
            <ButtonLink href="/book-a-call" variant="light">Book a strategy call</ButtonLink>
          </div>
        </section>
      ) : null}
    </main>
  );
}
