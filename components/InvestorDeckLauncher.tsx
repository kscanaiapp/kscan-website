type InvestorDeckLauncherProps = {
  className?: string;
};

export function InvestorDeckLauncher({ className }: InvestorDeckLauncherProps) {
  return (
    <a href="/api/investor/deck" target="_blank" rel="noopener noreferrer" className={className}>
      Open Investor Deck
    </a>
  );
}
