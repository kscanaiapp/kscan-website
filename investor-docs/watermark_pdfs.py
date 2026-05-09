#!/usr/bin/env python3
"""
Batch watermark investor PDFs with per-recipient traceability details.

Usage:
  1. Place the source PDF at `input/master.pdf`
  2. Create `investors.csv` with columns: `name,email,id`
  3. Install dependencies:
       pip install -r requirements.txt
  4. Run from inside `investor-docs`:
       python watermark_pdfs.py

Examples:
  python watermark_pdfs.py
  python watermark_pdfs.py --opacity 0.12 --force
  python watermark_pdfs.py --include_email false --verbose
  python watermark_pdfs.py --input_pdf input/master.pdf --csv_path investors.csv --output_dir output

This utility is intended for local internal use only. It does not integrate with
the public website, Next.js app, API routes, or Vercel deployment.
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from dataclasses import dataclass
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Iterable

import fitz

DEFAULT_OPACITY = 0.10
DEFAULT_FOOTER_FONT_SIZE = 9.0
DEFAULT_WATERMARK_COLOR = (0.58, 0.67, 0.69)
DEFAULT_FOOTER_COLOR = (0.45, 0.45, 0.45)
WATERMARK_TITLE = "CONFIDENTIAL - K SCAN AI"
FOOTER_TEXT = "Traceable investor copy. Unauthorized distribution prohibited."


@dataclass(frozen=True)
class InvestorRow:
    name: str
    email: str
    investor_id: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate one watermarked PDF per investor from a master PDF."
    )
    parser.add_argument("--input_pdf", default="input/master.pdf", help="Path to the source PDF.")
    parser.add_argument("--csv_path", default="investors.csv", help="Path to the investor CSV.")
    parser.add_argument("--output_dir", default="output", help="Directory for generated PDFs.")
    parser.add_argument(
        "--opacity",
        type=float,
        default=DEFAULT_OPACITY,
        help=f"Watermark opacity between 0 and 1. Default: {DEFAULT_OPACITY:.2f}",
    )
    parser.add_argument(
        "--include_email",
        default="true",
        help="Whether to include email in the visible watermark (true/false). Default: true",
    )
    parser.add_argument(
        "--footer_font_size",
        type=float,
        default=DEFAULT_FOOTER_FONT_SIZE,
        help=f"Footer font size in points. Default: {DEFAULT_FOOTER_FONT_SIZE:g}",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing generated PDFs.",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Print progress details while generating files.",
    )
    return parser.parse_args()


def parse_bool(value: str) -> bool:
    normalized = str(value).strip().lower()
    if normalized in {"1", "true", "t", "yes", "y", "on"}:
        return True
    if normalized in {"0", "false", "f", "no", "n", "off"}:
        return False
    raise argparse.ArgumentTypeError(f"Invalid boolean value: {value}")


def clean_name(value: str) -> str:
    underscored = re.sub(r"\s+", "_", value.strip())
    sanitized = re.sub(r"[^A-Za-z0-9_-]", "", underscored)
    sanitized = re.sub(r"_+", "_", sanitized).strip("_")
    return sanitized or "Investor"


def log(message: str, *, verbose: bool = True) -> None:
    if verbose:
        print(message)


def warn(message: str) -> None:
    print(f"Warning: {message}", file=sys.stderr)


def ensure_paths(input_pdf: Path, csv_path: Path, output_dir: Path) -> None:
    if not input_pdf.exists():
        raise FileNotFoundError(f"Input PDF not found: {input_pdf}")
    if not csv_path.exists():
        raise FileNotFoundError(f"CSV file not found: {csv_path}")
    output_dir.mkdir(parents=True, exist_ok=True)


def read_investors(csv_path: Path) -> list[InvestorRow]:
    rows: list[InvestorRow] = []
    with csv_path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        expected = {"name", "email", "id"}
        missing_headers = expected - set(reader.fieldnames or [])
        if missing_headers:
            raise ValueError(f"CSV is missing required columns: {', '.join(sorted(missing_headers))}")

        for index, row in enumerate(reader, start=2):
            name = (row.get("name") or "").strip()
            email = (row.get("email") or "").strip()
            investor_id = (row.get("id") or "").strip()
            if not name or not investor_id:
                warn(f"Skipping row {index}: missing required name or id.")
                continue
            rows.append(InvestorRow(name=name, email=email, investor_id=investor_id))
    return rows


def compute_font_size(page: fitz.Page, line_one: str, line_two: str, line_three: str) -> float:
    width = page.rect.width
    height = page.rect.height
    longest = max(len(line_one), len(line_two), len(line_three), 1)
    target = min(width, height) * 0.78
    estimated = target / (longest * 0.60)
    return max(14.0, min(estimated, 42.0))


def text_width(text: str, font_size: float) -> float:
    return fitz.get_text_length(text, fontname="helv", fontsize=font_size)


def draw_watermark(
    page: fitz.Page,
    name: str,
    email: str,
    investor_id: str,
    generated_on: str,
    *,
    opacity: float,
    include_email: bool,
    footer_font_size: float,
) -> None:
    line_one = WATERMARK_TITLE
    prepared_for = f"Prepared for: {name}"
    if include_email and email:
        prepared_for = f"{prepared_for} | {email}"
    line_two = prepared_for
    line_three = f"ID: {investor_id} | Generated: {generated_on}"

    font_size = compute_font_size(page, line_one, line_two, line_three)
    line_gap = font_size * 1.18
    total_height = line_gap * 3
    center = page.rect.tl + (page.rect.br - page.rect.tl) * 0.5
    rotation = fitz.Matrix(1, 1).prerotate(-45)
    start_y = center.y - (total_height * 0.5) + font_size
    for offset, line in enumerate((line_one, line_two, line_three)):
        width = text_width(line, font_size)
        insertion_point = fitz.Point(
            center.x - (width * 0.5),
            start_y + (offset * line_gap),
        )
        page.insert_text(
            insertion_point,
            line,
            fontname="helv",
            fontsize=font_size,
            color=DEFAULT_WATERMARK_COLOR,
            render_mode=0,
            morph=(center, rotation),
            stroke_opacity=opacity,
            fill_opacity=opacity,
            overlay=True,
        )

    footer_rect = fitz.Rect(
        page.rect.x0 + 24,
        page.rect.y1 - (footer_font_size * 2.7),
        page.rect.x1 - 24,
        page.rect.y1 - 8,
    )
    page.insert_textbox(
        footer_rect,
        FOOTER_TEXT,
        fontname="helv",
        fontsize=footer_font_size,
        color=DEFAULT_FOOTER_COLOR,
        align=1,
        overlay=True,
    )


def build_output_name(investor: InvestorRow) -> str:
    return f"KScan_Investor_Deck_{clean_name(investor.name)}_{investor.investor_id}.pdf"


def generate_pdf(
    input_pdf: Path,
    output_pdf: Path,
    investor: InvestorRow,
    *,
    generated_on: str,
    opacity: float,
    include_email: bool,
    footer_font_size: float,
) -> None:
    with fitz.open(input_pdf) as document:
        for page in document:
            draw_watermark(
                page,
                investor.name,
                investor.email,
                investor.investor_id,
                generated_on,
                opacity=opacity,
                include_email=include_email,
                footer_font_size=footer_font_size,
            )
        document.save(
            output_pdf,
            incremental=False,
            garbage=0,
            deflate=False,
            clean=False,
            encryption=fitz.PDF_ENCRYPT_KEEP,
        )


def write_log(log_path: Path, entries: Iterable[dict[str, str]]) -> None:
    with log_path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["generated_at", "name", "email", "id", "output_file"],
        )
        writer.writeheader()
        for entry in entries:
            writer.writerow(entry)


def main() -> int:
    args = parse_args()
    try:
        include_email = parse_bool(args.include_email)
    except argparse.ArgumentTypeError as exc:
        print(str(exc), file=sys.stderr)
        return 2

    if not 0 <= args.opacity <= 1:
        print("--opacity must be between 0 and 1.", file=sys.stderr)
        return 2
    if args.footer_font_size <= 0:
        print("--footer_font_size must be greater than 0.", file=sys.stderr)
        return 2

    script_dir = Path(__file__).resolve().parent
    input_pdf = (script_dir / args.input_pdf).resolve()
    csv_path = (script_dir / args.csv_path).resolve()
    output_dir = (script_dir / args.output_dir).resolve()
    log_path = script_dir / "watermark_log.csv"

    try:
        ensure_paths(input_pdf, csv_path, output_dir)
        investors = read_investors(csv_path)
    except (FileNotFoundError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 1

    if not investors:
        warn("No valid investor rows found. Nothing was generated.")
        return 0

    generated_on = date.today().isoformat()
    generated_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    log_entries: list[dict[str, str]] = []

    for investor in investors:
        output_name = build_output_name(investor)
        output_pdf = output_dir / output_name
        if output_pdf.exists() and not args.force:
            warn(f"Skipping existing file without --force: {output_pdf.name}")
            continue

        log(f"Generating {output_pdf.name}", verbose=args.verbose)
        try:
            generate_pdf(
                input_pdf,
                output_pdf,
                investor,
                generated_on=generated_on,
                opacity=args.opacity,
                include_email=include_email,
                footer_font_size=args.footer_font_size,
            )
        except Exception as exc:  # pragma: no cover - surfaces document-specific issues
            warn(f"Failed to generate PDF for {investor.investor_id}: {exc}")
            continue

        log_entries.append(
            {
                "generated_at": generated_at,
                "name": investor.name,
                "email": investor.email,
                "id": investor.investor_id,
                "output_file": output_pdf.name,
            }
        )

    write_log(log_path, log_entries)
    print(f"Generated {len(log_entries)} PDF(s). Log written to {log_path.name}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
