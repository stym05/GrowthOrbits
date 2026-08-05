import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand />
          <p>{siteConfig.tagline}</p>
          <a className="footer-contact" href={`mailto:${siteConfig.email}`}>
            <Icon name="mail" width={18} height={18} />
            {siteConfig.email}
          </a>
        </div>

        {navigation.map((group) => (
          <div className="footer-column" key={group.href}>
            <Link className="footer-heading" href={group.href}>
              {group.label}
            </Link>
            {"children" in group ? (
              <div className="footer-links">
                {group.children.slice(0, 4).map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Growth Orbits. Example company information.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/gdpr">GDPR</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
