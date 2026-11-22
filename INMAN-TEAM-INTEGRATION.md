# TARRL Team page / Admiral Bobby R. Inman memorial

## Requirement and historical accuracy
Admiral Bobby Ray Inman (1931–2026) originated the idea for the Texas Advanced Robotics Research Lab (TARRL) and served as its Chairman. He was also Chairman of FloLabs Innovations Group. These organizational details come directly from TARRL's owner and should be represented prominently. His distinguished U.S. Navy, NSA, CIA, technology, and educational service is documented in the sources linked in the page.

Our recent discussions referenced his participation in conversations/meetings in 2024–2025. No undocumented quotations, proprietary meeting content, exact funeral plans, or unverified causes of death are published.

## Included
- Responsive, accessible, dark-themed `latest - www/team.html` with TARRL's own Team navigation.
- Leadership & Legacy / In Memoriam hero and feature profile.
- Explicit credit: **TARRL was Admiral Inman's idea** and **he chaired TARRL**.
- 1983 public-domain U.S. Government portrait with attribution.
- Source links to the University of Texas at Austin, Robert Strauss Center, and AFIO.
- Social meta title/description.

## Still required to show on production
The existing `latest - www/index.html` in this repository is a single minified/compiled HTML file of about 13MB. Connected GitHub file retrieval returns empty content for it. For safety, we have **not overwritten** it.

The deploy maintainer should:
1. Confirm that this repo and `latest - www` are actually used by production https://www.tarrl.org/.
2. Ensure `team.html` is deployed to `/team.html` (or convert this view into a native route in the actual current website source).
3. Add an accessible **Team** navigation link in the website's shared header to `/team.html`. Do not replace the production page with this standalone HTML.
4. Verify the portrait loads, links work, responsive behavior, and title/meta descriptions; confirm that other pages and navigation are unaffected.
5. Check how the live site's brand typography and design system differ and adjust the page as needed.
6. Publish and test https://www.tarrl.org/team.html.

## Review note
The source repository's production deployment relation is **not confirmed**, so this is a prepared change / PR, not a completed live publication.
