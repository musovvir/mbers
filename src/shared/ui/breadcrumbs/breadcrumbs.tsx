import { Link } from "@/i18n/navigation";
import styles from "./breadcrumbs.module.scss";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  label: string;
};

export function Breadcrumbs({ items, label }: BreadcrumbsProps) {
  return (
    <nav className={styles.nav} aria-label={label}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {item.href && !last ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
