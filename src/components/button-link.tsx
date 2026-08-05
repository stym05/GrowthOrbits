import Link from "next/link";
import type { ComponentProps } from "react";
import { Icon } from "@/components/icons";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
};

export function ButtonLink({
  className = "",
  variant = "primary",
  arrow = true,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      {arrow ? <Icon name="arrow" width={18} height={18} /> : null}
    </Link>
  );
}
