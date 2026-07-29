# Design QA

- Selected reference: `design-targets/centered-triptych-selected.png`
- Desktop implementation: `design-qa/implementation-home-production-final.png`
- Same-viewport comparison input: `design-qa/reference-vs-production-final.png`
- Mobile implementation: `design-qa/implementation-home-mobile-final.png`
- Desktop viewport: 1440 × 1024
- Mobile viewport: 390 × 844

## Visual checks

- The first screen has one centered headline and three equal result columns.
- WORK BUDDY, TRAE, and CODEX have equal visual weight and distinct accent colors.
- All three columns use real runnable game pages rather than placeholder artwork.
- The comparison call to action is centered beneath the three columns.
- The mobile headline, cards, and game previews fit without horizontal overflow.
- Motion is restrained to entry, hover, and online-status feedback, with reduced-motion support.

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

final result: passed
