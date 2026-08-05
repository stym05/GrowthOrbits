"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { navigation } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div className="nav-group" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {"children" in item ? (
                <div className="nav-menu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink className="header-cta" href="/book-a-call" arrow={false}>
            Book a call
          </ButtonLink>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} width={24} height={24} />
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div className="mobile-group" key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {"children" in item ? (
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <ButtonLink href="/book-a-call" onClick={() => setOpen(false)}>
            Book a strategy call
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
