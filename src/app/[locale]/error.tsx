"use client";

import { useTranslations } from "next-intl";
import layout from "@/shared/styles/layout.module.scss";
import styles from "./error.module.scss";

export default function LocaleError({ reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("ErrorPage");

  return (
    <div className={layout.page}>
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <h1 className={layout.display}>{t("title")}</h1>
        <p className={layout.lead}>{t("text")}</p>
        <button type="button" className={styles.retry} onClick={reset}>
          {t("retry")}
        </button>
      </div>
    </div>
  );
}
