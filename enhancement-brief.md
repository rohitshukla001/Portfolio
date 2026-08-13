# Enhancement brief: polish the existing portfolio without redesigning it

Enhance the visual quality of Rohit Shukla's existing portfolio site. This is not a redesign: the current layout, identity, and user experience stay, and the work is a finishing pass over what already exists. Improve consistency, spacing, typography, responsiveness, and overall finish. A returning visitor should think "cleaner", never "different site".

## How this brief is structured

Each section owns one concern and stands alone; you can revise any section without rereading the others. Two sections override every other on conflict: the Preservation contract and the Hard constraints. When an improvement collides with either, the improvement loses, and the collision gets flagged rather than resolved quietly.

## Preservation contract (overrides everything)

- The single-page structure and section order stay: hero, about, projects, certificates, resume, contact, footer.
- Navigation keeps its pattern: a fixed top bar with anchor links, an outbound blog link, and a collapse menu on small screens.
- User flows stay as they are: resume download, the EmailJS contact form, carousel browsing for projects and certificates.
- The visual identity stays: light theme on a white body, soft blue `#F5FAFE` header and footer, yellow `#ffc200` accent, dark navy `#0a1a2e`, and Calibri as the only text family.
- Content stays: wording, images, and section copy are untouched, except where accessibility requires alt text or a form label.

## Baseline

The site is a static single page on GitHub Pages: Bootstrap 4.6 grid, Font Awesome icons, Swiper carousels, and vanilla JavaScript. The header is a fixed 72px bar and the footer matches it. All custom styling lives in one stylesheet, `assets/css/style.css`, organised in numbered sections. The four Calibri faces are self-hosted TTFs.

## Consistency

Colours, shadows, radii, and borders currently appear as scattered literals. Collect them into CSS custom properties named for role (background, surface, text, accent, border, state colours) and replace the literals with the tokens. Where near-duplicate values exist, converge on one value per role. Buttons converge on one primary and one secondary treatment. Project cards and certificate cards share a single card treatment.

## Spacing

Adopt one spacing scale on an 8px base and use only its steps. Section padding is identical from section to section, card grids use one gap, and one-off pixel values migrate to the nearest step. The result to aim for: consistent vertical rhythm down the whole page.

## Typography

Calibri stays the only family. Define the scale explicitly: one size per heading level, body at 16px or larger, line height 1.5 or more for reading text, and long paragraphs capped near a 70-character measure. Weights stay simple: 400 for body, 700 for headings. Ad hoc font-size overrides in the stylesheet migrate onto the scale.

## Responsiveness

The page must hold at 360, 768, 1024, and 1440px with no horizontal scroll at any of them. Mobile spacing tightens using steps from the same scale. Images scale inside their containers. The contact form is comfortable to use on a phone. Touch targets reach 44px wherever padding alone gets them there.

## Polish

Hover and focus transitions converge on one timing: 150 to 250ms, ease-out, animating transform, colour, or opacity. Every interactive element gets a styled :focus-visible state. Icon sizes are consistent within each context. Card images share one aspect treatment. Form fields get focus, error, and success states drawn from the token palette. Selection colour and favicon match the identity.

## Accessibility (applies to everything)

Improvements here must respect the identity: adjust shades minimally to reach 4.5:1 contrast for body text and 3:1 for large text and UI parts, keeping each hue recognisably itself. Form fields carry real labels, and errors appear in text, never in colour alone. Images carry meaningful alt text. Headings run in order under exactly one h1. The mobile menu and both carousels are fully keyboard operable. Honour prefers-reduced-motion by pausing carousel autoplay and removing non-essential animation.

## Performance and implementation (applies to everything)

The stack stays exactly as it is: a static page, Bootstrap 4.6, vanilla JavaScript, no build step, no new dependencies. Changes land in the existing `style.css` and `index.html`, keeping the stylesheet's numbered-section organisation. Every asset stays self-hosted. Nothing regresses load time.

## Working rules

Work in passes, one enhancement area at a time, and prefer the smallest change that fixes each issue. Verify each pass in a browser at all four widths before moving on. When a fix would change layout, navigation, or behaviour, stop and flag it instead of making it; the flag list is a deliverable, not a failure.

## Deliverables

- The updated stylesheet and markup, changed only where an enhancement requires it.
- A change log grouped by enhancement area, each entry naming the issue found and the fix applied.
- Before and after screenshots at 360px and 1440px for each area.
- The flagged list: improvements identified but skipped because they would change layout or experience.

## Hard constraints

- Do not use the Galaxy design pattern.
- Do not use anything from the Vendasta ecosystem, including its design language, components, patterns, colours, or UI conventions.
- Preserve the existing UI: enhance the current visual style in place, and treat any change to the core layout, navigation pattern, or user experience as out of scope.
