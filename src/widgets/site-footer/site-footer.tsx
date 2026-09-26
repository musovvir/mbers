import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/shared/config/site";
import styles from "./site-footer.module.scss";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.summary}>{t("summary")}</p>
        </div>
        <nav aria-label={t("services")}>
          <p className={styles.label}>{t("services")}</p>
          <Link href="/ai-seo">{nav("aiSeo")}</Link>
          <Link href="/seo">{nav("seo")}</Link>
        </nav>
        <nav aria-label={t("company")}>
          <p className={styles.label}>{t("company")}</p>
          <Link href="/about">{nav("about")}</Link>
          <Link href="/blog">{nav("blog")}</Link>
          <Link href="/cases">{nav("cases")}</Link>
          <Link href="/faq">{t("faq")}</Link>
        </nav>
        <nav aria-label={t("legal")}>
          <p className={styles.label}>{t("legal")}</p>
          <Link href="/privacy-policy">{t("privacy")}</Link>
          <Link href="/terms-of-use">{t("terms")}</Link>
          <Link href="/contact">{nav("contacts")}</Link>
        </nav>
      </div>
      <p className={styles.legal}>
        © {year} {site.name}. {t("rights")}
      </p>
    </footer>
  );
}
