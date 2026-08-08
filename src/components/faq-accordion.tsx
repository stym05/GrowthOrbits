"use client";

import { useId, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();

  return (
    <div className="faq-list faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span>{item.question}</span>
                <i className="faq-toggle" aria-hidden="true"><span /><span /></i>
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              aria-labelledby={buttonId}
              className="faq-answer"
              id={panelId}
              role="region"
            >
              <div><p>{item.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
