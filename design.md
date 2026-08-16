# ARMOURIXX Security — Design System Documentation

> Last updated: 2026 | Author: Build Agent

---

## Brand Overview & Voice

**Company:** ARMOURIXX Security  
**Tagline:** *"Elite Protection. Unmatched Presence."*  
**Secondary line:** *"Beyond Protection. We Command Security."*  
**Founded:** 2026 | **Founder & MD:** Akshay Sanjay Bhote  
**Service area:** PAN Maharashtra → Expanding PAN India

**Voice attributes:** Confident, restrained, authoritative, precise. Never casual or generic.  
Use active voice. Short, declarative statements. Military-precision terminology where appropriate.  
**Avoid:** corporate jargon, clichés ("synergy", "solutions"), exclamation marks, overly friendly tone.

---

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold` | `#C9A227` | Primary accent, CTAs, highlights |
| `--gold-light` | `#E8C468` | Gradient end, hover states |
| `--gold-dark` | `#B4881F` | Gradient start, deeper accents |
| `--gold-muted` | `#6B5313` | TODO placeholder text |
| `--ink` | `#0A0A0B` | Primary background |
| `--ink-2` | `#121214` | Secondary background (alternating sections) |
| `--ink-3` | `#1A1A1D` | Tertiary background, input fields |
| `--ink-4` | `#242428` | Card backgrounds, subtle elements |
| `--ink-5` | `#2E2E33` | Borders, dividers |
| `--cream` | `#F5F3EC` | Primary body text |
| `--cream-muted` | `#B8B4A8` | Secondary body text, captions |

### Usage Rules

- **Gold is allowed:** CTAs, active states, section eyebrows, divider lines, icon accents, gradient text on major headlines, card borders on hover, stat numbers.
- **Gold is restricted:** Do NOT use gold as a full background color on large areas — it becomes garish. Max usage as a highlight covering ~20% of any given view.
- **Text on gold buttons:** Always `--ink` (near-black) — never white.
- **Alternating sections:** Use `--ink` and `--ink-2` alternately to create visual rhythm without using a completely different color.

---

## Typography Scale

| Role | Family | Weight | Size | Usage |
|------|--------|--------|------|-------|
| Display/Hero | Bebas Neue | 400 | clamp(4rem, 12vw, 9rem) | Hero H1 |
| Section H2 | Bebas Neue | 400 | 5rem–7rem | Section headings |
| Card H3 | Bebas Neue | 400 | 1.5rem–2rem | Card titles |
| Eyebrow | Inter | 600 | 0.75rem | Section labels, above headings |
| Body | Inter | 400 | 0.875rem–1.125rem | Paragraph text |
| Caption | Inter | 400 | 0.75rem | Captions, metadata |
| CTA | Inter | 700 | 0.875rem–1.125rem | Buttons, uppercase tracked |

**Tracking rules:** Display fonts use `letter-spacing: 0.05em` minimum. Eyebrow labels use `letter-spacing: 0.3em–0.4em`. CTA buttons use `letter-spacing: 0.15em` minimum with `text-transform: uppercase`.

**Google Fonts:** Bebas Neue (Display), Inter (Body) — loaded via `next/font/google`.

---

## Spacing & Grid System

- **Max content width:** `max-w-7xl` (1280px) with `px-6` gutters
- **Section padding:** `clamp(4rem, 10vw, 8rem)` top/bottom (`.section-pad`)
- **Grid:** 12-column conceptual grid; Tailwind grid classes used throughout
- **Card gap:** `gap-4` to `gap-6` (16px–24px)
- **Component internal padding:** `p-6` (24px) standard, `p-8–p-10` for hero cards

---

## Component Inventory

### Built-in UI Components (`/src/components/ui/`)

| Component | Source | Used Where |
|-----------|--------|------------|
| `MagneticButton` | Custom | Nav CTA, primary CTAs |
| `ShimmerButton` | Custom (gold shimmer keyframe) | Hero CTA, CTABanner, Contact form |
| `GlassCard` | Custom | Stat bar, testimonials, contact, USP cards |
| `AnimatedCounter` | Custom (IntersectionObserver) | StatsBar |
| `TiltCard` | Custom (3D perspective) | ServicesGrid, Services page |
| `BlurFadeIn` | Custom (IntersectionObserver) | All sections, section entrances |
| `SectionHeading` | Custom | All section headings |

### Layout Components (`/src/components/layout/`)

| Component | Key Features |
|-----------|-------------|
| `Navbar` | Glass on scroll, sliding indicator, Services mega-menu, staggered mobile overlay |
| `Footer` | Brand, quick links, services, contact TODOs, 24/7 badge |

### Section Components (`/src/components/sections/`)

| Component | Key Features |
|-----------|-------------|
| `Hero` | GSAP ScrollTrigger word-split, cursor-reveal lerp mask, floating chips, video placeholder |
| `StatsBar` | 4 animated counters in glass cards |
| `AboutTeaser` | Split layout, 3 pillars, image placeholder |
| `DriftWall` | 3D tilt masonry gallery, 10 placeholder cards |
| `ServicesGrid` | 6-card bento grid, TiltCard, gold bottom-border reveal |
| `TechEdge` | Animated SVG beam diagram (6 nodes) + 6 USP cards |
| `IndustriesMarquee` | Dual-row alternating infinite marquee, 12 industries |
| `Testimonials` | Auto-playing carousel, glass cards, big bg number |
| `FounderQuote` | Full-width gold pull-quote, shield watermark |
| `CTABanner` | Gold glow bg, shimmer CTA |

---

## Motion Principles

### Easing Curves
- **Standard entrance:** `cubic-bezier(0.22, 1, 0.36, 1)` (strong ease-out — feels quick & confident)
- **Magnetic button:** `cubic-bezier(0.23, 1, 0.32, 1)` on release
- **Counter:** Cubic ease-out (1 - (1-t)³)
- **GSAP ScrollTrigger scrub:** `scrub: 1.2` — medium smoothing

### Durations
- **Micro-interactions (hover):** 150–300ms
- **Section entrances (BlurFadeIn):** 700ms
- **Carousel auto-advance:** 5000ms
- **Counter duration:** 2200ms
- **Marquee loop:** 28s

### Scroll-Trigger Rules
- Hero transformation: pinned, scrubbed — fires during hero scroll-out
- All other sections: `whileInView` equivalent via IntersectionObserver, `threshold: 0.1`
- Marquee: CSS animation, no scroll dependency

### Reduced Motion Policy
- All CSS `animation` properties are disabled via `@media (prefers-reduced-motion: reduce)`
- GSAP and RAF-based animations: GSAP respects `prefers-reduced-motion` by default; custom RAF loops should check `window.matchMedia("(prefers-reduced-motion: reduce)").matches` before running

---

## Image Treatment Guidelines

All photography should receive one of these treatments for brand consistency:

1. **Dark duotone with gold tint:** Desaturate, then apply a warm gold color overlay at 15–25% opacity using CSS `mix-blend-mode: multiply` or `color` on a pseudo-element
2. **Gold rim-light edit:** Ensure strong gold edge lighting in the original photography — this is the preferred editorial style
3. **Desaturated + gold-border framing:** If the photo is straight photography, frame it with a `border border-[var(--gold)]/20` and a gold gradient overlay at the bottom

**Do NOT:** Use bright color photography without treatment — it will clash with the dark gold brand palette.

---

## Accessibility Notes

- All interactive elements have `focus-visible` ring styles (gold ring)
- Semantic HTML used throughout: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<button>`, `<a>`
- `aria-label` on icon-only buttons
- `aria-expanded` on accordion toggles (Industries)
- Form fields: explicit `<label>` elements, `aria-describedby` on error messages
- Image `alt` attributes: required on all `<Image>` components (marked in TODO comments)
- Color contrast: all gold on dark-ink combinations pass WCAG AA at standard text sizes
- `prefers-reduced-motion` respected via global CSS rule

---

## Open TODOs — Client Must Supply

> **These were NOT provided in the company info document and MUST be filled in before launch.**

| Item | Location in Code | Priority |
|------|-----------------|----------|
| Phone number | `Footer.tsx`, `contact/page.tsx` | 🔴 High |
| WhatsApp number | `contact/page.tsx` | 🔴 High |
| Email address | `Footer.tsx`, `contact/page.tsx` | 🔴 High |
| Office address | `Footer.tsx`, `contact/page.tsx` | 🔴 High |
| Social media links (LinkedIn, Instagram, Twitter/X) | `Footer.tsx` | 🟡 Medium |
| Founder portrait image | `about/page.tsx` → founder section, `FounderQuote.tsx` | 🟡 Medium |
| Hero/about/gallery photography | `Hero.tsx`, `AboutTeaser.tsx`, `DriftWall.tsx` | 🟡 Medium |
| Hero background video | `Hero.tsx` (comment in code: replace `<div>` with `<video>`) | 🟡 Medium |
| Licenses & certifications list | `why-us/page.tsx` → badges marquee | 🟢 Low |
| Major client names/logos | Throughout | 🟢 Low |
| Training program details | About page | 🟢 Low |
| Contact form backend | `contact/page.tsx` → `handleSubmit` | 🔴 High |
| Live website URL (for OG tags) | `layout.tsx` → metadata | 🟡 Medium |

---

*ARMOURIXX Security Design System v1.0 — Built 2026*
