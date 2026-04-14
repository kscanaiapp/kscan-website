/**
 * SectionShell — thin semantic section wrapper.
 *
 * Exists to guarantee that id, className, and children are always passed
 * through correctly on section elements. This matters for:
 * - anchor-link navigation (e.g. #investor-access)
 * - section targeting (scroll-to, hash routing)
 * - semantic HTML structure consistency
 *
 * This is intentionally minimal. Section surfaces (backgrounds, borders,
 * padding) remain at the use-site via className.
 */

type SectionShellProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
