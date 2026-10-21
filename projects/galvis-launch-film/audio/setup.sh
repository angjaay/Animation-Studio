#!/usr/bin/env bash
# Creates the audio venv and installs the toolchain.
#
#   bash audio/setup.sh           full: core + torch/transformers (earshot listening models)
#   bash audio/setup.sh --core    core only (enough to mix, master, QA and build the film; no torch)
#
# Environment:
#   AUDIO_VENV   venv directory                (default: audio/.venv)
#   PYTHON       interpreter that makes the venv (default: python3)
#   EARSHOT_SRC  earshot source: a local checkout or any pip spec
#                (default: git+https://github.com/Leonxlnx/earshot@925ebe5)
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="${AUDIO_VENV:-$HERE/.venv}"
PYTHON="${PYTHON:-python3}"
EARSHOT_SRC="${EARSHOT_SRC:-git+https://github.com/Leonxlnx/earshot@925ebe5}"

CORE_ONLY=0
for arg in "$@"; do
  case "$arg" in
    --core) CORE_ONLY=1 ;;
    *) echo "usage: setup.sh [--core]" >&2; exit 2 ;;
  esac
done

[ -x "$VENV/bin/python" ] || "$PYTHON" -m venv "$VENV"
PIP=("$VENV/bin/python" -m pip install --disable-pip-version-check --quiet)

"${PIP[@]}" --upgrade pip
"${PIP[@]}" -r "$HERE/requirements.txt"
if [ "$CORE_ONLY" = 1 ]; then
  # earshot lists torch as a hard dependency; core mode installs it without dependencies.
  "${PIP[@]}" --no-deps "$EARSHOT_SRC"
else
  "${PIP[@]}" -r "$HERE/requirements-listen.txt"
  "${PIP[@]}" "$EARSHOT_SRC"
fi

echo "audio venv ready: $VENV/bin/python"
FILTERS="$(ffmpeg -hide_banner -filters 2>/dev/null || true)"
if [[ "$FILTERS" != *rubberband* ]]; then
  echo "note: this ffmpeg has no rubberband filter; music tempo stretch is unavailable (use \"stretch\": \"none\")" >&2
fi
