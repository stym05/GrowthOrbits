"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/brand";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icons";
import { navigation } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (desktopMenu) {
        setDesktopMenu(null);
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      }

      if (open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopMenu, open]);

  useEffect(() => {
    const closeAtDesktopBreakpoint = () => {
      if (window.innerWidth > 1080) setOpen(false);
    };

    window.addEventListener("resize", closeAtDesktopBreakpoint);
    return () => window.removeEventListener("resize", closeAtDesktopBreakpoint);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div
              className={`nav-group ${desktopMenu === item.href ? "is-open" : ""}`}
              key={item.href}
              onPointerEnter={() => setDesktopMenu(item.href)}
              onPointerLeave={() => setDesktopMenu(null)}
              onFocus={() => setDesktopMenu(item.href)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setDesktopMenu(null);
              }}
            >
              {"children" in item ? (
                <>
                  <button
                    className="nav-label"
                    type="button"
                    aria-expanded={desktopMenu === item.href}
                    onClick={() => setDesktopMenu(item.href)}
                  >
                    {item.label}
                  </button>
                  <div className="nav-menu">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setDesktopMenu(null)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link className="nav-label" href={item.href}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink className="header-cta" href="/book-a-call" arrow={false}>
            Book a Strategy Call
          </ButtonLink>
          <button
            ref={menuButtonRef}
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

      <div
        id="mobile-navigation"
        className={`mobile-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div className="mobile-group" key={item.href}>
              {"children" in item ? (
                <>
                  <span className="mobile-nav-label">{item.label}</span>
                  <div className="mobile-subnav">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link className="mobile-nav-label" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <ButtonLink href="/book-a-call" onClick={() => setOpen(false)}>
            Book a Strategy Call
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
