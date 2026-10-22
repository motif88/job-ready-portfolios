# Portfolio Design System

This project is a recruiter-first portfolio for Stanley Johnson, positioned as a Web Producer & Digital Experience Specialist.

## Asset hosting and deployment

This is a static website. Deploy the entire project together so that `index.html`, each page directory, and the complete `assets/` directory keep the same relative structure. Images, video, CSS, JavaScript, and the résumé are then served by the same host and domain as the portfolio; a separate image-hosting service is not required.

- Keep public images in `assets/images/` and use lowercase, hyphenated filenames without spaces.
- Use page-relative URLs: root pages use `assets/images/...`, first-level pages use `../assets/images/...`, and nested case studies use `../../assets/images/...`.
- Include intrinsic `width` and `height` on raster images, descriptive `alt` text for meaningful images, `alt=""` for decorative images, and `loading="lazy" decoding="async"` for below-the-fold images.
- Do not move or upload only the HTML files. Static hosts such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages should publish the project root, including `assets/`.
- Before launch, replace every `https://example.com` canonical URL with the production domain. Social preview image URLs should also be made absolute after the domain is known, for example `https://your-domain.com/assets/images/ami-responsive-desktop.jpg`.
- Use separate object storage or an image CDN only if the portfolio later grows to many large originals, user uploads, or dynamically transformed images. For the current small asset set, bundling assets with the site is simpler and more reliable.

## Role and positioning

- Primary title: Web Producer & Digital Experience Specialist
- Supporting specialties: Web Design · CMS Management · Web Operations · Conversion Strategy
- Hero eyebrow: Web Producer · Web Administrator · Digital Designer
- Hero headline: I build, manage, and improve websites that support real business goals.
- Hero supporting copy: I combine web production, CMS management, UX design, and technical problem-solving to create reliable digital experiences for organizations and their customers.
- Availability: Based in North Carolina · Open to remote opportunities

## Audience and purpose

This is a personal employment portfolio for roles including Web Producer, Web Administrator, Webmaster, CMS Specialist, Digital Content Producer, Web Designer, Website Operations Specialist, and Digital Experience Specialist. It is not a freelance agency, pricing, or service site.

The main audience is recruiters and hiring managers, and the site must quickly communicate Stanley’s role, capabilities, projects, business impact, experience, résumé, and contact information.

## Core design direction

- Modern digital product feel: polished, precise, dependable, results-driven, technically capable, approachable
- Dark hero followed by bright editorial content sections
- Premium but not flashy or overdesigned
- Use the provided color tokens and typography system
- Maintain a strong utility-first information hierarchy for recruiter scanning

## Design System V1 baseline

The foundations and reusable components documented below are frozen as Design System V1. New pages must compose this system without introducing visual variants unless a system-level or accessibility requirement justifies the change. Validate any approved system change on `design-system.html` before applying it to production pages.

### Foundations

- **Colors:** Ink `#0b1220`, navy `#132033`, canvas `#f6f8fb`, surface `#ffffff`, text `#172033`, muted text `#5d6878`, border `#dde3ea`, primary `#155eef`, primary hover `#004eeb`, accent `#56d4ff`, success `#087a5b`, warning `#b54708`, and focus `#84caff`. Semantic aliases cover page backgrounds, elevated and dark surfaces, primary, secondary, inverse and disabled text, borders, interaction states, status colors, and glows.
- **Typography:** Manrope headings and Instrument Sans body/interface text with system fallbacks. The semantic scale is display, h1–h4, body-large, body, body-small, label, and eyebrow. Headings and larger text use restrained fluid `clamp()` scaling; body copy uses a maximum 45rem reading measure.
- **Spacing:** `4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 120px`, exposed as `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-7`, `--space-8`, `--space-10`, `--space-12`, `--space-16`, `--space-20`, `--space-24`, and `--space-30`. The standard component/grid gap is 24px.
- **Radii:** Small 8px, medium 12px, standard 16px, large 20px, hero 24px, and pill/full-round.
- **Shadows:** None, subtle, card, elevated, dark-elevated, primary glow, and accent glow. Elevation remains restrained and must not substitute for structure or contrast.
- **Motion:** Fast 120ms, standard 180ms, and slow 250ms with standard and emphasized easing. Movement is limited to subtle 2–4px feedback and is removed when reduced motion is requested.
- **Layout:** `.container` is capped at 1200px; `.reading-container` is 720px. Responsive side padding is 20px mobile, 32px tablet, and 48px desktop. Reusable primitives are `.section`, `.stack`, `.cluster`, `.split`, `.grid`, `.layout-grid`, and `.content-sidebar`. The explicit grid uses 4 mobile, 8 tablet, and 12 desktop columns.

Source files: `assets/css/tokens.css`, `assets/css/base.css`, and `assets/css/layout.css`.

### Components

- **Buttons:** `.button` or compatibility alias `.btn`; primary, secondary, dark, inverse, and text variants; optional `.button__icon`.
- **Tags:** `.skill-tag` inside `.tag-list`; compact metadata only.
- **Pills:** `.capability-pill` inside `.pill-list`; use sparingly for capability scanning.
- **Section headings:** `.section-heading` with eyebrow and description elements.
- **Cards:** `.card` with optional media, header, body, and footer regions; interactive, dark, and featured variants.
- **Project cards:** `.project-card` with media, organization, title, role, summary, up to four tags, verified result, and descriptive case-study link. `.featured-project` supports the existing production structure.
- **Experience entries:** `.experience-entry` or existing `.timeline-entry`, with semantic header, metadata, summary, and highlights.
- **Skill groups:** `.skill-group-card` or existing `.skill-group`, grouping skills by work function.
- **Impact items:** `.impact-item` or existing `.info-card`, pairing a verified result with a short explanation.
- **CTA panels:** `.cta-panel` or existing `.contact-cta`, with concise copy and a small action group.
- **Dark UI surfaces:** `.dark-section`, `.dark-panel`, `.ui-preview-card`, `.technical-glow`, inverse-text helpers, dark borders, and dark/accent status indicators.

Component source: `assets/css/components.css`. Page-only exceptions belong in `assets/css/pages.css`.

### Accessibility

- Target WCAG 2.2 AA contrast for text, controls, borders, and focus indicators.
- Preserve the global visible `:focus-visible` treatment; never remove outlines without an equivalent replacement.
- Interactive controls must provide a minimum 44px touch target and remain operable by keyboard.
- Hover may enhance an interaction but cannot reveal the only available content or state.
- Links remain recognizable without relying on color alone; disabled states use semantics as well as styling.
- Use semantic landmarks, one logical h1, ordered headings, meaningful alt text, explicit labels, and associated validation feedback.
- Layout and content must remain usable with text resizing, at 200% zoom, and at the supported responsive widths without horizontal page overflow.
- Respect `prefers-reduced-motion`; content and navigation must remain available without animation or JavaScript.

### Development Rules

- Reuse existing tokens and component classes before adding CSS. Do not hardcode shared colors, spacing, radii, shadows, or transitions.
- Build page structure from the layout primitives. Avoid fixed heights and one-off positioning when intrinsic grid or flex behavior works.
- Keep reusable component rules in `components.css`; keep genuine page exceptions in `pages.css`. Do not increase selector specificity to override the system.
- Do not add a utility framework, CSS framework, or animation library.
- Do not create unapproved visual variants, duplicate component patterns, continuous animation, dramatic scaling, or decorative clutter.
- Use real, verified portfolio content. Do not invent clients, dates, tools, testimonials, metrics, or outcomes; mark missing content explicitly.
- Keep project cards to four tags maximum and prioritize recruiter scanning, descriptive links, and verified outcomes.
- Test system changes on `design-system.html`, then verify pages at 320px, 768px, 1024px, and 1440px with keyboard, reduced-motion, zoom, overflow, and wrapping checks.
- Treat a V1 foundation or component change as a system change: document the reason, correct the shared rule rather than adding a page override, and re-run accessibility and responsive QA.

## Homepage structure

1. Accessible sticky header
2. Recruiter-focused hero
3. Capability proof strip
4. Selected work
5. Results or impact summary
6. Relevant professional experience
7. Skills grouped by work function
8. Short professional introduction
9. Contact call to action
10. Footer

## Required header content

- Stanley Johnson wordmark
- Work
- Experience
- About
- Contact
- Download Résumé button
- Responsive mobile navigation with keyboard and touch support

## Hero content

- Use a two-column desktop layout and one-column mobile layout
- Left side includes eyebrow, headline, supporting paragraph, CTA buttons, and availability
- Right side may show a refined preview or CSS-based placeholder
- Use a dark confident hero with editorial content sections

## Proof strip

Show these capabilities immediately below the hero:

- Framer
- WordPress
- CMS Management
- HTML/CSS
- Responsive Design
- Website QA
- Accessibility
- CRM & Email Automation

No autoplay marquee.

## Work section

Use one large featured project followed by a two-column project grid.

Initial project candidates:

- AMI Global
- Mindful Method
- Sierra & Stone

Each project card must display:

- Project image
- Project name
- Organization or industry type
- Stanley’s role
- Concise problem/outcome summary
- No more than four skill tags
- One verified result or truthful operational outcome
- Descriptive case study link

If a detail is unconfirmed, use a clearly marked HTML comment such as:

```html
<!-- CONTENT NEEDED: Add verified project result -->
```

Do not display fake metrics, clients, testimonials, tools, or results.

## Case study layout

Every case study page must include:

1. Project overview
2. Project information panel
3. Challenge
4. Responsibilities
5. Process and decisions
6. Website production details
7. Technical work or troubleshooting
8. Final solution
9. Verified results or operational outcomes
10. Lessons learned
11. Previous and next project navigation
12. Contact CTA

The info panel should support:

- Role
- Timeline
- Platform
- Responsibilities
- Collaborators
- Tools
- Deliverables

For AMI, only use the approximately 12% donation improvement if it is clearly labeled for verification before publication and not presented as a confirmed metric without a visible note.

## Experience section

Create entries for:

- Freelance Web Producer & Digital Designer
- Self-employed · Present
- Director of Music & Technology
- Organization name and dates to be confirmed if necessary

## Skills grouping

Group skills by function:

- Web Production
- Design and User Experience
- Platforms and Technical Tools
- Business Systems

Do not use percentages, progress bars, or oversized logo walls.

## Accessibility requirements

Target WCAG 2.2 AA.

Include:

- Skip-to-content link
- Semantic landmarks
- One h1 per page
- Logical heading order
- Visible keyboard focus
- Full keyboard access
- Minimum 44x44 pixel touch targets
- Meaningful image alt text
- Empty alt attributes for decorative images
- Visible form labels
- Associated validation messages
- Reduced-motion support
- Sufficient color contrast
- Usability at 200% zoom
- No content available only through hover
- No information communicated through color alone

## Animation guidelines

- CSS transitions only, optional
- Limits: 2–4px hover movement, 12–20px entrance movement
- Duration: 120–250ms
- No continuous animation, parallax, scroll hijacking, text animation, loader animation, or carousel
- Respect prefers-reduced-motion

## Performance expectations

- Use responsive images
- Prefer WebP or AVIF when appropriate
- Set image dimensions
- Lazy-load noncritical images
- Minimize layout shift
- Avoid unnecessary scripts
- Keep content available without JavaScript

## SEO requirements

- Unique titles and meta descriptions
- Canonical placeholders
- Open Graph metadata
- Descriptive headings
- Human-readable routes
- Person structured data only when accurate

Homepage title:

Stanley Johnson | Web Producer & Digital Experience Specialist

Homepage description:

Web producer and digital experience specialist creating, managing, and improving responsive websites, CMS content, and conversion-focused digital experiences.

## Contact page requirements

- Name, email, company/organization, message, send button
- Direct email alternative
- Success and error states
- Use native HTML validation first
- No fake form submission
- If no form service is configured, clearly document what must be connected before launch

## Quality checklist

Before completion, verify:

- Each page at 320px, 768px, 1024px, and 1440px
- No horizontal scrolling
- Keyboard navigation works
- Focus styles are visible
- All navigation paths work from nested folders
- Résumé button points to an actual PDF or clearly marks the placeholder
- No fake metrics, dates, employers, or testimonials were added
- Animations are subtle and optional
- No framework or animation library dependency was added
- HTML and CSS are valid
- Accessibility and performance checks are run

## File structure

```text
index.html
work/
  index.html
  ami-global/
    index.html
  mindful-method/
    index.html
  sierra-and-stone/
    index.html
about/
  index.html
resume/
  index.html
contact/
  index.html
assets/
  css/
    tokens.css
    base.css
    layout.css
    components.css
    pages.css
  js/
    main.js
  images/
    projects/
  documents/
    stanley-johnson-resume.pdf
```

Only create `main.js` if needed. Do not add an empty JavaScript file merely to satisfy the structure.
