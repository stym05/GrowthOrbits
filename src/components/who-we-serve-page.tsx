import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { whoWeServeContent } from "@/content/who-we-serve";

export function WhoWeServePage() {
  const { hero, sectors, moments, fit, cta } = whoWeServeContent;

  return (
    <main className="serve-page">
      <section className="serve-hero">
        <div className="container serve-hero-grid">
          <div className="serve-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="serve-hero-lede">{hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href="/book-a-call">Discuss your market</ButtonLink>
              <ButtonLink href="#sectors" variant="secondary">Explore sectors</ButtonLink>
            </div>
            <div className="serve-hero-signals" aria-label="Best-fit signals">
              {hero.signals.map((signal, index) => (
                <span key={signal}><small>{String(index + 1).padStart(2, "0")}</small>{signal}</span>
              ))}
            </div>
          </div>
          <figure className="serve-hero-visual">
            <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="(max-width: 1080px) 100vw, 52vw" />
            <figcaption><span>Built around fit</span><strong>Market clarity before volume</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="serve-sectors-section" id="sectors">
        <div className="container">
          <div className="serve-heading-row">
            <div>
              <p className="eyebrow">{sectors.eyebrow}</p>
              <h2>{sectors.title}</h2>
            </div>
            <p>{sectors.description}</p>
          </div>
          <div className="serve-sector-grid">
            {sectors.items.map((sector) => (
              <article key={sector.number}>
                <div className="serve-sector-topline"><span>{sector.number}</span><i aria-hidden="true" /></div>
                <h3>{sector.title}</h3>
                <p>{sector.copy}</p>
                <div className="serve-sector-tags">
                  {sector.situations.map((situation) => <span key={situation}>{situation}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="serve-moments-section">
        <div className="container serve-moments-grid">
          <figure className="serve-moments-visual">
            <Image src={moments.image} alt={moments.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" />
            <div className="serve-image-index" aria-hidden="true"><span>01</span><i /><small>Market motion</small></div>
          </figure>
          <div className="serve-moments-copy">
            <p className="eyebrow">{moments.eyebrow}</p>
            <h2>{moments.title}</h2>
            <p>{moments.description}</p>
            <div className="serve-moment-list">
              {moments.items.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="serve-fit-section">
        <div className="container serve-fit-shell">
          <div className="serve-fit-intro">
            <p className="eyebrow">{fit.eyebrow}</p>
            <h2>{fit.title}</h2>
            <p>{fit.description}</p>
          </div>
          <div className="serve-fit-columns">
            <div className="serve-fit-column serve-fit-strong">
              <span className="serve-fit-label">Strong foundations</span>
              <ul>
                {fit.strong.map((item) => (
                  <li key={item}><Icon name="check" width={16} height={16} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="serve-fit-column serve-fit-prepare">
              <span className="serve-fit-label">Better to prepare first</span>
              <ul>
                {fit.prepare.map((item) => (
                  <li key={item}><span>—</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="serve-cta-section">
        <div className="container serve-cta-card">
          <div className="serve-cta-orbits" aria-hidden="true"><span /><span /><i /></div>
          <div>
            <p className="eyebrow">{cta.eyebrow}</p>
            <h2>{cta.title}</h2>
            <p>{cta.copy}</p>
          </div>
          <ButtonLink href="/book-a-call" variant="light">Start the conversation</ButtonLink>
        </div>
      </section>
    </main>
  );
}
