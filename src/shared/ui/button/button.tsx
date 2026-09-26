import { Link } from "@/i18n/navigation";
import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "text";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  disabled,
}: ButtonProps) {
  const className = variant === "primary" ? styles.primary : styles.text;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
