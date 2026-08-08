"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".page-hero .narrow-container > *",
  ".hero-copy > *",
  ".orbit-visual",
  ".principles-grid > div",
  ".section-heading",
  ".service-card",
  ".proof-copy",
  ".proof-panel",
  ".process-showcase-card",
  ".process-showcase-action",
  ".audience-list article",
  ".testimonial-card",
  ".resource-showcase-card",
  ".faq-list",
  ".content-card",
  ".feature-list li",
  ".form-layout > *",
  ".cta-inner > *",
  ".founder-hero-copy > *",
  ".team-hero-collage",
  ".editorial-founder-story > *",
  ".editorial-team-row",
  ".team-principle",
  ".story-hero-copy > *",
  ".story-orbit",
  ".story-origin-layout > *",
  ".story-milestone",
  ".story-belief",
  ".work-hero-copy > *",
  ".work-loop",
  ".work-phase",
  ".collaboration-board > *",
  ".work-rhythm-heading > *",
  ".work-rhythm > li",
  ".delivery-standard",
].join(",");

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    elements.forEach((element) => {
      const siblingIndex = Array.from(element.parentElement?.children ?? []).indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(Math.max(siblingIndex, 0), 3) * 60}ms`);
      element.classList.add("reveal-ready");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
