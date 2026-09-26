"use client";

import { useState } from "react";
import styles from "./faq-list.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
  label: string;
};

export function FaqList({ items, label }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.list} role="list" aria-label={label}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article key={item.question} className={styles.item} role="listitem">
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.button}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon} data-open={open || undefined} aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              data-open={open || undefined}
              aria-hidden={open ? undefined : true}
            >
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
