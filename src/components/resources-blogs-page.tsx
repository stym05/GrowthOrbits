import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { blogsContent } from "@/content/blogs";

export function ResourcesBlogsPage() {
  const { hero, featured, categories, posts, editorialPrinciples, updates } = blogsContent;

  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <div className="container blogs-hero-grid">
          <div className="blogs-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink>
            </div>
          </div>
          <article className="blogs-featured-card">
            <div className="blogs-featured-art" aria-hidden="true"><span /><span /><i /></div>
            <div className="blogs-featured-top"><span>{featured.status}</span><small>{featured.category}</small></div>
            <div className="blogs-featured-copy">
              <p>{featured.takeaway}</p>
              <h2>{featured.title}</h2>
              <div>{featured.excerpt}</div>
            </div>
            <footer><span>{featured.author}</span><strong>{featured.readTime}</strong></footer>
          </article>
        </div>
      </section>

      <nav className="blogs-topic-nav" aria-label="Blog topics">
        <div className="container">
          <span>Explore by topic</span>
          <div>{categories.map((category, index) => <Link className={index === 0 ? "is-active" : ""} href="#article-library" key={category}>{category}</Link>)}</div>
        </div>
      </nav>

      <section className="blogs-library-section section" id="article-library">
        <div className="container">
          <div className="blogs-library-heading">
            <SectionHeading eyebrow="Article library" title="Ideas designed to be put to work." copy="Sample editorial cards ready to be replaced by published posts or connected to a CMS." />
            <div className="sample-content-note"><strong>Sample content</strong><p>No articles are presented as published customer evidence.</p></div>
          </div>
          <div className="blogs-grid">
            {posts.map((post) => (
              <article className={`blog-card blog-card-${post.accent}`} key={post.number}>
                <div className="blog-card-art" aria-hidden="true"><span /><span /></div>
                <div className="blog-card-meta"><span>{post.category}</span><small>{post.number}</small></div>
                <div className="blog-card-copy"><small>{post.format}</small><h3>{post.title}</h3><p>{post.excerpt}</p></div>
                <footer><span>Draft outline</span><strong>{post.readTime}<Icon name="arrow" width={15} height={15} /></strong></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-editorial-section section">
        <div className="container">
          <SectionHeading eyebrow="Editorial standard" title="Useful before impressive." copy="The principles intended to guide every Growth Orbits article." invert />
          <div className="blogs-editorial-grid">
            {editorialPrinciples.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="blogs-updates-section">
        <div className="container blogs-updates-card">
          <div className="blogs-updates-lines" aria-hidden="true"><span /><span /><span /></div>
          <div><p className="eyebrow">{updates.eyebrow}</p><h2>{updates.title}</h2><p>{updates.copy}</p></div>
          <ButtonLink href={updates.action.href} variant="light">{updates.action.label}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
