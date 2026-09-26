"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { routing, type AppLocale } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import styles from "./site-header.module.scss";

const localeLabel: Record<AppLocale, string> = {
  en: "EN",
  ru: "RU",
  ar: "AR",
};

type NavItem = {
  href: "/services" | "/about" | "/blog" | "/cases" | "/contact" | "/seo" | "/ai-seo";
  label: string;
};

type SiteHeaderProps = {
  links: NavItem[];
  serviceLinks: NavItem[];
  servicesLabel: string;
  discussLabel: string;
};

export function SiteHeader({
  links,
  serviceLinks,
  servicesLabel,
  discussLabel,
}: SiteHeaderProps) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  function isCurrent(href: string) {
    if (href === "/services") {
      return pathname === href || pathname === "/seo" || pathname === "/ai-seo";
    }

    return pathname === href;
  }

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <nav className={styles.desktop} aria-label={t("primary")}>
          <div className={styles.services}>
            <Link
              href="/services"
              className={styles.link}
              aria-current={isCurrent("/services") ? "page" : undefined}
            >
              {servicesLabel}
            </Link>
            <div className={styles.dropdown}>
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.logo} aria-label="MBers Laboratory">
          <Image
            src="/brand/logo-dark.png"
            alt=""
            width={86}
            height={56}
            priority
            className={styles.forLight}
          />
          <Image
            src="/brand/logo-light.png"
            alt=""
            width={86}
            height={56}
            priority
            className={styles.forDark}
          />
        </Link>

        <div className={styles.actions}>
          <div className={styles.locales} role="group" aria-label={t("language")}>
            {routing.locales.map((locale) => (
              <Link
                key={locale}
                href={pathname}
                locale={locale}
                hrefLang={locale}
                className={locale === currentLocale ? styles.localeActive : styles.locale}
                aria-current={locale === currentLocale ? "true" : undefined}
              >
                {localeLabel[locale]}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Link href="/contact" className={`${styles.discuss} ${styles.discussDesktop}`}>
            {discussLabel}
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className={styles.mobile} aria-label={t("primary")}>
          <Link href="/services" onClick={close}>
            {servicesLabel}
          </Link>
          {serviceLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.discuss} onClick={close}>
            {discussLabel}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
