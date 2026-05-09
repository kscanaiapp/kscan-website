import type { ReactNode } from "react";

type InvestorDeckLauncherProps = {
  className?: string;
  href?: string;
  children?: ReactNode;
};

export function InvestorDeckLauncher({
  className,
  href = "/api/investor/deck",
  children = "Open Investor Deck",
}: InvestorDeckLauncherProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
