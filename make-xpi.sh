#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

version="$(python3 - <<'PY'
import json
from pathlib import Path
manifest = json.loads(Path("manifest.json").read_text(encoding="utf-8"))
print(manifest["version"])
PY
)"

output="yorklib-exporter-${version}.xpi"
rm -f "$output"
zip -qr "$output" manifest.json bootstrap.js yorklib-exporter.js README.md
printf 'Wrote %s\n' "$script_dir/$output"
