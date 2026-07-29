# Issue Knowledge Base

## WEB-001 — Codex preview images fail under a repository subpath

- Status: resolved
- Found during: desktop visual QA
- Symptom: the Codex preview showed broken image text while its interface still rendered; its bundled fonts also requested files from the domain root.
- Root cause: the compiled game bundle and stylesheet referenced `/assets/...`, which points to the domain root instead of `/hahah/games/codex/assets/...` on GitHub Pages.
- Resolution: changed runtime image URLs to document-relative `./assets/...` paths and stylesheet font URLs to stylesheet-relative `./...` paths.
- Regression evidence: the final production screenshot renders the scene; the game page and scene image both return HTTP 200; automated tests assert the corrected image and font paths.
- Prevention: test every embedded build from the same non-root base path used by production.

## WEB-002 — Starter-template tests no longer describe the product

- Status: resolved
- Found during: final build verification
- Symptom: tests expected a deleted loading skeleton and development-only metadata.
- Root cause: the starter tests were not replaced when the comparison product superseded the template.
- Resolution: replaced them with product tests for the centered comparison, corrected TRAE route, three game builds, and Codex asset paths.
- Regression evidence: 2/2 tests pass after both product and asset-path changes.
- Prevention: when a starter screen is replaced, update its acceptance tests in the same change.

## WEB-003 — Mobile headline creates an orphaned final character

- Status: resolved
- Found during: 390 × 844 visual QA
- Symptom: the last character of the headline wrapped onto a third line by itself.
- Root cause: the mobile heading size was too large for the available width.
- Resolution: reduced the mobile heading size and adjusted line height.
- Regression evidence: `design-qa/implementation-home-mobile-final.png` shows a balanced two-line headline without horizontal overflow.
- Prevention: include a narrow-phone viewport in every visual handoff.

## WEB-004 — Repeated comparison values create duplicate React keys

- Status: resolved
- Found during: browser console review
- Symptom: React warned that repeated values such as “连续蓄力跳跃” used the same list key.
- Root cause: matrix cells used their displayed value as the key, but values can legitimately repeat across products.
- Resolution: keyed each cell by its row dimension and column index.
- Regression evidence: the final build and rendered-HTML tests pass after the change.
- Prevention: never use display text as a key when sibling values may repeat.

## WEB-005 — Comparison page labels outcomes without explaining the experiment

- Status: resolved
- Found during: user review
- Symptom: the page showed three games and a short matrix, but a first-time visitor could not tell what was held constant, what each tool actually did, or how to interpret the differences.
- Root cause: the first version optimized for visual compactness and reduced the content to slogans and short labels.
- Resolution: rewrote the hero in plain language, added experiment conditions and a reading guide, explained each result's focus and suitable use case, added evidence-based verdicts and trade-offs, and expanded the individual result pages with implementation rationale and play instructions.
- Regression evidence: rendered-HTML tests assert the experiment explanation, interpretation section, shared input, shared workflow, and three playable outcomes.
- Prevention: every comparison page must explain the input, controlled conditions, evaluation method, evidence boundary, and practical takeaway before presenting a winner-like conclusion.
