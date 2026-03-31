#!/usr/bin/env python3

from __future__ import annotations

import argparse
import sys
from pathlib import Path
import re


ENTRY_RE = re.compile(rb"@\w+\s*\{\s*([^,\s]+)\s*,", re.MULTILINE)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Identify .bib files in the current directory that are likely duplicates "
            "of entries in the library by citation key."
        )
    )
    parser.add_argument(
        "bib_files",
        nargs="*",
        help="Specific .bib files to check. Defaults to all .bib files in the current directory.",
    )
    parser.add_argument(
        "--library",
        default="../Library",
        help="Path to the library root to search for existing citation keys. Default: %(default)s",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Show warnings for unreadable or malformed library .bib files.",
    )
    parser.add_argument(
        "--clear",
        action="store_true",
        help="Delete duplicate .bib files and same-stem .pdf files from the current directory.",
    )
    return parser.parse_args()


def extract_citation_key(bib_path: Path) -> str:
    data = bib_path.read_bytes()
    match = ENTRY_RE.search(data)
    if not match:
        raise ValueError(f"could not find a BibTeX entry key in {bib_path}")
    return match.group(1).decode("latin-1")


def build_library_index(library_root: Path, verbose: bool) -> dict[str, list[Path]]:
    index: dict[str, list[Path]] = {}
    for bib_path in sorted(library_root.rglob("*.bib")):
        try:
            key = extract_citation_key(bib_path)
        except (OSError, ValueError) as exc:
            if verbose:
                print(f"warning: {exc}", file=sys.stderr)
            continue
        index.setdefault(key, []).append(bib_path)
    return index


def resolve_targets(args: argparse.Namespace) -> list[Path]:
    if args.bib_files:
        return [Path(name) for name in args.bib_files]
    return sorted(Path.cwd().glob("*.bib"))


def delete_duplicate_files(bib_path: Path) -> list[Path]:
    removed: list[Path] = []
    candidates = [bib_path, bib_path.with_suffix(".pdf")]
    for candidate in candidates:
        if candidate.exists():
            candidate.unlink()
            removed.append(candidate)
    return removed


def main() -> int:
    args = parse_args()
    library_root = Path(args.library).resolve()
    targets = resolve_targets(args)

    if not library_root.is_dir():
        print(f"error: library directory not found: {library_root}", file=sys.stderr)
        return 2

    if not targets:
        print("error: no .bib files to check", file=sys.stderr)
        return 2

    library_index = build_library_index(library_root, args.verbose)
    found_duplicate = False
    had_error = False

    for bib_path in targets:
        if bib_path.suffix != ".bib":
            print(f"warning: skipping non-.bib file {bib_path}", file=sys.stderr)
            continue
        if not bib_path.is_file():
            print(f"error: file not found: {bib_path}", file=sys.stderr)
            had_error = True
            continue

        try:
            key = extract_citation_key(bib_path)
        except (OSError, ValueError) as exc:
            print(f"error: {exc}", file=sys.stderr)
            had_error = True
            continue

        matches = library_index.get(key, [])
        if matches:
            found_duplicate = True
            print(f"DUPLICATE {bib_path}: {key}")
            for match in matches:
                print(f"  {match}")
            if args.clear:
                removed = delete_duplicate_files(bib_path)
                for removed_path in removed:
                    print(f"REMOVED {removed_path}")
        else:
            print(f"UNIQUE {bib_path}: {key}")

    if had_error:
        return 2
    if found_duplicate:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
