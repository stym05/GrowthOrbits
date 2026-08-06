import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-line-art" aria-hidden="true">
        <svg viewBox="0 0 1440 560" preserveAspectRatio="none">
          <path className="footer-line footer-line-one" d="M-110 544C178 448 242 159 518 205S807 514 1089 338 1316 101 1538 72" />
          <path className="footer-line footer-line-two" d="M-118 500C154 405 236 119 526 169S822 471 1092 301 1319 65 1534 38" />
          <path className="footer-line footer-line-three" d="M-125 588C207 487 275 213 548 253S832 556 1122 380 1334 157 1538 120" />
          <ellipse className="footer-orbit footer-orbit-one" cx="1244" cy="246" rx="410" ry="137" transform="rotate(-18 1244 246)" />
          <ellipse className="footer-orbit footer-orbit-two" cx="90" cy="485" rx="326" ry="104" transform="rotate(18 90 485)" />
          <circle className="footer-line-dot footer-line-dot-one" cx="518" cy="205" r="5" />
          <circle className="footer-line-dot footer-line-dot-two" cx="1091" cy="337" r="5" />
          <circle className="footer-line-dot footer-line-dot-three" cx="1329" cy="115" r="5" />
        </svg>
      </div>
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
        <nav className="footer-socials" aria-label="Social media">
          {siteConfig.socialLinks.map((social) => (
            <a href={social.href} aria-label={social.label} title={social.label} key={social.label}>
              <Icon name={social.icon} width={17} height={17} />
            </a>
          ))}
        </nav>
        <div className="footer-legal-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/gdpr">GDPR</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
