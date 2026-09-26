"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import layout from "@/shared/styles/layout.module.scss";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className={layout.page}>
      <div className={`${layout.wrap} ${layout.narrow}`}>
        <h1 className={layout.display}>{t("title")}</h1>
        <p className={layout.lead}>{t("text")}</p>
        <p>
          <Link href="/">{t("home")}</Link>
        </p>
      </div>
    </div>
  );
}
