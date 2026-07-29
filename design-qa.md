# Design QA

- Selected reference: `design-targets/centered-triptych-selected.png`
- Desktop implementation: `design-qa/implementation-home-production-final.png`
- Same-viewport comparison input: `design-qa/reference-vs-production-final.png`
- Mobile implementation: `design-qa/implementation-home-mobile-final.png`
- Expanded-content desktop: `design-qa/content-expanded-desktop.png`
- Expanded-content mobile: `design-qa/content-expanded-mobile.png`
- Expanded-content full page: `design-qa/content-expanded-full.png`
- Expanded Codex result page: `design-qa/content-expanded-codex-detail.png`
- Expanded-content comparison input: `design-qa/reference-vs-content-expanded.png`
- Reference report capture: `design-audit/reference-site-desktop.png`, `design-audit/reference-site-mobile.png`
- Editorial implementation capture: `design-qa/editorial-implementation-desktop.png`, `design-qa/editorial-implementation-mobile.png`, `design-qa/editorial-codex-detail.png`
- Same-viewport editorial comparison input: `design-qa/reference-vs-editorial.png`
- Desktop viewport: 1440 × 1024
- Mobile viewport: 390 × 844

## Visual checks

- The first screen has one centered headline and three equal result columns.
- WORK BUDDY, TRAE, and CODEX have equal visual weight and distinct accent colors.
- All three columns use real runnable game pages rather than placeholder artwork.
- The comparison call to action is centered beneath the three columns.
- The mobile headline, cards, and game previews fit without horizontal overflow.
- Motion is restrained to entry, hover, and online-status feedback, with reduced-motion support.
- The expanded copy preserves the selected centered triptych while explaining the experiment before making comparative claims.
- The first screen names the shared prompt, shared workflow, three participants, and what the visitor should do next.
- The full page explains the controlled conditions, reading order, result interpretation, trade-offs, evidence boundary, and detail-page purpose.
- The redesigned page follows the reference's editorial report rhythm: numbered sections, cream grid, dark data panel, evidence table, and final synthesis.
- The mobile layout stacks the report and keeps the comparison table intentionally scrollable instead of clipping the page.

## Functional checks

- Production builds succeeded for Vinext and static GitHub Pages export.
- Automated rendered-HTML tests passed: 2/2.
- Home, result pages, legacy `/trea/`, all three game pages, and the Codex scene asset returned HTTP 200 locally.
- TRAE spelling and `/games/trae/` paths are used in the visible interface.
- The legacy `/trea/` page remains available for old shared links.

## Resolved QA findings

- Fixed Codex preview images that used root-relative asset URLs and failed under the `/hahah/` GitHub Pages subpath.
- Replaced obsolete starter-template tests with checks for the comparison page, TRAE route, game builds, and Codex asset paths.
- Reduced the mobile headline size to prevent an orphaned final character.
- Replaced slogan-only comparison copy with plain-language context, practical verdicts, and evidence boundaries after user review found the page too terse.
- Rebuilt the information architecture around the supplied reference report after visual review found the centered triptych too unlike the target.
- Added explicit mobile word-breaking to prevent long Chinese editorial headings from overflowing the viewport.

final result: passed
