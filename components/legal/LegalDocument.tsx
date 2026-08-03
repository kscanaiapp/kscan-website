import { Fragment, type ReactNode } from "react";

// ─── Content model ──────────────────────────────────────────────────────────
// Structured representation of the authoritative legal DOCX documents in
// public/docs/. Text is stored verbatim as plain strings so the rendered HTML
// preserves the legal language exactly.

export type LegalContactLine = {
  label?: string;
  text: string;
  href?: string;
};

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "definition"; term: string; text: string }
  | { type: "subheading"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "contact"; lines: LegalContactLine[] };

export type LegalSection = {
  id: string;
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDocumentData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  governingLinks: { label: string; href: string; boldLabel: boolean }[];
  sections: LegalSection[];
};

// ─── Inline auto-linking ────────────────────────────────────────────────────
// Plain-text URLs and email addresses from the source documents are rendered
// as anchors. Display text is never altered; trailing sentence punctuation is
// kept outside the link.

const URL_OR_EMAIL = /(https?:\/\/[^\s"'<>]+|[\w.+-]+@[\w-]+\.[\w.+-]+)/g;
const TRAILING_PUNCT = /[.,;:!?)\]]+$/;

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

function linkify(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(URL_OR_EMAIL)) {
    const raw = match[0];
    const start = match.index ?? 0;

    const trailing = raw.match(TRAILING_PUNCT)?.[0] ?? "";
    const linked = raw.slice(0, raw.length - trailing.length);

    if (start > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, start)}</Fragment>);
    }

    const href = linked.includes("@") && !linked.startsWith("http") ? `mailto:${linked}` : linked;
    nodes.push(
      <a key={key++} href={href} className={linkClassName}>
        {linked}
      </a>,
    );
    if (trailing) {
      nodes.push(<Fragment key={key++}>{trailing}</Fragment>);
    }

    lastIndex = start + raw.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

// ─── Renderer ───────────────────────────────────────────────────────────────

function LegalBlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{linkify(block.text)}</p>;

    case "bullets":
      return (
        <ul className="list-disc space-y-2 pl-5 marker:text-stone-300">
          {block.items.map((item, i) => (
            <li key={i}>{linkify(item)}</li>
          ))}
        </ul>
      );

    case "definition":
      return (
        <p>
          <strong className="font-semibold text-stone-700">{block.term}</strong> {linkify(block.text)}
        </p>
      );

    case "subheading":
      return <h3 className="pt-2 font-semibold text-stone-700">{block.text}</h3>;

    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13px] leading-relaxed md:text-[14px]">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border border-stone-200 bg-stone-50 px-3 py-2 text-left font-semibold text-stone-700"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-stone-200 px-3 py-2 align-top">
                      {linkify(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "contact":
      return (
        <div className="space-y-2">
          {block.lines.map((line, i) => (
            <p key={i}>
              {line.label ? <strong className="font-semibold text-stone-700">{line.label} </strong> : null}
              {line.href ? (
                <a href={line.href} className={linkClassName}>
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>
      );
  }
}

export function LegalDocument({
  document,
  downloadHref,
  downloadLabel,
}: {
  document: LegalDocumentData;
  downloadHref?: string;
  downloadLabel?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl break-words px-6 py-16 md:px-10 md:py-24">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          {document.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          {document.title}
        </h1>
        <p className="mt-4 text-[15px] text-stone-500 md:text-[16px]">{document.subtitle}</p>
        <p className="mt-4 text-[14px] text-stone-400">
          Effective Date: {document.effectiveDate}
          {"  |  "}
          Last Updated: {document.lastUpdated}
          {"  |  "}
          Contact:{" "}
          <a href={`mailto:${document.contactEmail}`} className={linkClassName}>
            {document.contactEmail}
          </a>
        </p>

        <div className="mt-8 rounded-md border border-stone-200 bg-white px-5 py-4 text-[14px] leading-relaxed text-stone-500">
          {document.governingLinks.map((link) => (
            <p key={link.href}>
              {link.boldLabel ? (
                <strong className="font-semibold text-stone-700">{link.label} </strong>
              ) : (
                <>{link.label} </>
              )}
              <a href={link.href} className={linkClassName}>
                {link.href}
              </a>
            </p>
          ))}
        </div>
      </header>

      <div className="mt-8 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
        {document.sections.map((section, i) => (
          <section
            key={section.id}
            aria-labelledby={section.heading ? section.id : undefined}
            className={`${i === 0 ? "" : "mt-12"} space-y-4`}
          >
            {section.heading ? (
              <h2 id={section.id} className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
                {section.heading}
              </h2>
            ) : null}
            {section.blocks.map((block, j) => (
              <LegalBlockRenderer key={j} block={block} />
            ))}
          </section>
        ))}
      </div>

      {downloadHref && downloadLabel ? (
        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>
            <a href={downloadHref} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {downloadLabel}
            </a>
          </p>
        </div>
      ) : null}
    </article>
  );
}
