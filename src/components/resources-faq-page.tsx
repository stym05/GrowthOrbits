import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { resourceFaqContent } from "@/content/resources-faq";

export function ResourcesFaqPage() {
  const { hero, categories, contact } = resourceFaqContent;

  return (
    <main className="resource-faq-page">
      <section className="resource-faq-hero">
        <div className="container resource-faq-hero-grid">
          <div className="resource-faq-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink>
            </div>
            <div className="resource-faq-highlights">
              {hero.highlights.map((highlight) => (
                <div key={highlight.label}><strong>{highlight.value}</strong><span>{highlight.label}</span></div>
              ))}
            </div>
          </div>
          <div className="resource-faq-orbit-panel">
            <div className="resource-faq-orbits" aria-hidden="true"><span /><span /><i /></div>
            <div className="resource-faq-panel-head"><span>Quick routes</span><small>Popular questions</small></div>
            <div className="resource-faq-popular">
              {hero.popular.map((item, index) => (
                <Link href={item.href} key={item.question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><small>{item.label}</small><strong>{item.question}</strong></div>
                  <Icon name="arrow" width={17} height={17} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="resource-faq-topic-nav" aria-label="FAQ topics">
        <div className="container">
          <span>Browse by topic</span>
          <div>{categories.map((category) => <Link href={`#${category.slug}`} key={category.slug}>{category.number}. {category.title}</Link>)}</div>
        </div>
      </nav>

      <section className="resource-faq-directory section">
        <div className="container">
          {categories.map((category) => (
            <section className="resource-faq-category" id={category.slug} key={category.slug}>
              <header>
                <span>{category.number}</span>
                <p>FAQ topic</p>
                <h2>{category.title}</h2>
                <div>{category.description}</div>
              </header>
              <div className="resource-faq-list">
                {category.questions.map((item, index) => (
                  <details id={item.id} key={item.question} open={index === 0}>
                    <summary><span>{item.question}</span><i aria-hidden="true">+</i></summary>
                    <div><p>{item.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="resource-faq-contact-section">
        <div className="container resource-faq-contact-card">
          <div className="resource-faq-contact-orbit" aria-hidden="true"><span /><span /></div>
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.title}</h2>
            <p>{contact.copy}</p>
          </div>
          <div className="resource-faq-contact-actions">
            <ButtonLink href={contact.primaryAction.href} variant="light">{contact.primaryAction.label}</ButtonLink>
            <ButtonLink href={contact.secondaryAction.href} variant="secondary">{contact.secondaryAction.label}</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
