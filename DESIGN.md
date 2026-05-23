# DESIGN.md — progsu.com

> Drop this file in your project root and tell your AI agent: "Build a page that matches DESIGN.md."

---

## 1. Visual Theme & Atmosphere

**Mood:** Dark editorial meets Atlanta streetwear collective. High-fashion lookbook restraint, not a typical tech startup site. Confident, unhurried, premium.

**Density:** Ultra-low. Generous whitespace. Sections breathe at `6rem` vertical padding. Nothing competes for attention except the hero.

**Design philosophy:**
- Pure black canvas. The background is always `#000000` — never dark gray, never navy.
- Text is white with opacity dialed down. Color comes from *absence*, not paint.
- One accent color — a purple glow — reserved exclusively for hover interactions. It is never used as a fill, background, or static color.
- Two fonts in deliberate contrast: a grotesque sans for UI and body; a serif italic for names, titles, and editorial moments.
- Everything is lowercase. No exceptions in navigation, headings, body copy, or button labels.
- Motion is slow, cinematic, and blurry on entry. Nothing bounces or pops.

---

## 2. Color Palette & Roles

| Token | Value | Role |
|---|---|---|
| `color-bg` | `#000000` | Page background — every section, every page |
| `color-surface-1` | `rgba(255,255,255,0.02)` | Subtle card surface (barely visible) |
| `color-surface-2` | `rgba(255,255,255,0.05)` | Slightly elevated card surface |
| `color-surface-3` | `rgba(255,255,255,0.06)` | Hover / active surface state |
| `color-surface-deep` | `rgba(30,27,38,0.85)` | Heavy glass card (events, modals) |
| `color-border-1` | `rgba(255,255,255,0.05)` | Hairline border, barely there |
| `color-border-2` | `rgba(255,255,255,0.10)` | Standard card/section border |
| `color-border-3` | `rgba(255,255,255,0.12)` | Elevated card border |
| `color-border-hover` | `rgba(255,255,255,0.25)` | Border on hover |
| `color-text-primary` | `#ffffff` | Active links, headings, selected state |
| `color-text-body` | `rgba(255,255,255,0.60)` | Default body copy |
| `color-text-secondary` | `rgba(255,255,255,0.55)` | Secondary descriptions |
| `color-text-muted` | `rgba(255,255,255,0.50)` | Tertiary body text |
| `color-text-dim` | `rgba(255,255,255,0.45)` | Links at rest, nav items |
| `color-text-ghost` | `rgba(255,255,255,0.40)` | Weakest text, labels, tags |
| `color-text-faint` | `rgba(255,255,255,0.35)` | Footer, copyright, annotations |
| `color-accent` | `rgb(147,51,234)` | **Purple — hover glow ONLY. Never a fill.** |
| `color-accent-mid` | `rgba(147,51,234,0.60)` | Mid-spread of purple glow |
| `color-accent-far` | `rgba(147,51,234,0.25)` | Outer spread of purple glow |
| `color-scrollbar-track` | `#111111` | Scrollbar track |
| `color-scrollbar-thumb` | `#333333` | Scrollbar thumb |
| `color-scrollbar-hover` | `#555555` | Scrollbar thumb on hover |
| `color-selection-bg` | `#ffffff` | Text selection background |
| `color-selection-text` | `#000000` | Text selection foreground |

**Rule:** The purple accent (`rgb(147,51,234)`) appears in exactly one context — `text-shadow` on hover. It is never a background color, border color, or static fill of any kind.

---

## 3. Typography Rules

### Font Families

```css
/* Primary — all UI, body, labels, navigation, buttons */
--font-sans: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

/* Display — page titles, section feature names, member names, serif moments */
--font-serif: 'Noto Serif', Georgia, 'Times New Roman', serif;
```

Apply globally:
```css
* { font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important; }
```
Then selectively override headings/names with the serif via inline `style` attributes.

### Type Hierarchy

| Role | Size | Weight | Style | Font | Case | Tracking |
|---|---|---|---|---|---|---|
| Hero wordmark | `5xl–8xl` (responsive) | `bold` (700) | italic | Serif | lowercase | `tracking-tight` |
| Page hero title | `4xl–5xl` | `bold` | italic | Serif | lowercase | `tracking-tight` |
| Section label | `2xl–3xl` | `bold` | normal | Sans | **lowercase** | `tracking-widest` |
| Feature sub-heading | `xl–2xl` | `bold` | italic | Serif | lowercase | default |
| Body / description | `base–lg` | `light` (300) | normal | Sans | sentence / lowercase | default |
| Nav links | `lg` | `light` | normal | Sans | lowercase | default |
| CTA links | `sm` | normal | normal | Sans | lowercase | `tracking-widest` |
| Small labels / metadata | `xs–sm` | normal | normal | Sans | lowercase | `tracking-widest` |
| Tag chips | `xs` | normal | normal | Sans | lowercase | default |
| Specialty pills | `10px` | normal | normal | Sans | uppercase | `tracking-widest` |

### Cardinal Rules
- **Everything is lowercase.** Nav items, section headings, body descriptions, button labels, member roles, tag names — all `.toLowerCase()`. The pronunciation guide (`/prāg ˌes ˈyü/`) is the only exception.
- Body copy uses `font-light` (300 weight), not regular.
- Line height: `leading-relaxed` for all body paragraphs.

---

## 4. Component Stylings

### Section Heading
```html
<h2 class="text-2xl md:text-3xl font-bold text-white mb-8 tracking-widest text-center"
    style="font-family: 'Helvetica Neue', sans-serif;">
  section name
</h2>
```

### Feature Sub-heading (Serif Italic)
```html
<h3 class="text-2xl font-bold text-white italic"
    style="font-family: 'Noto Serif', Georgia, serif !important;">
  feature name
</h3>
```

### Body Paragraph
```html
<p class="text-white/60 leading-relaxed font-light"
   style="font-family: 'Helvetica Neue', sans-serif;">
  description text here
</p>
```

### Ghost Link (Purple Glow on Hover)
The primary link pattern across the entire site. Used for nav, CTAs, back links, social links.
```html
<a href="/"
   class="text-white/40 hover:text-white text-sm tracking-widest transition-all duration-300"
   style="font-family: 'Helvetica Neue', sans-serif; text-shadow: 0 0 8px rgba(147,51,234,0);"
   onmouseover="this.style.textShadow='0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)'"
   onmouseout="this.style.textShadow='0 0 8px rgba(147,51,234,0)'">
  link text
</a>
```

### CTA Link (Underline Style)
Used for primary calls-to-action ("join progsu →", "start a partnership →").
```html
<a href="/"
   class="inline-block text-white border-b border-white/30 hover:border-white pb-1 text-sm tracking-widest transition-colors duration-300"
   style="font-family: 'Helvetica Neue', sans-serif;">
  action label →
</a>
```

### Button — Minimal
```html
<!-- Primary -->
<button class="inline-flex items-center justify-center gap-2 font-medium transition-all duration-300
               bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white
               border border-white/10 hover:border-white/20
               px-4 py-2 text-xs tracking-widest rounded">
  button label
</button>

<!-- Outline -->
<button class="inline-flex items-center justify-center gap-2 font-medium transition-all duration-300
               bg-transparent hover:bg-white/[0.04] text-white/50 hover:text-white/70
               border border-white/10 hover:border-white/20
               px-4 py-2 text-xs tracking-widest rounded">
  button label
</button>
```

### Card — Hairline (Standard)
```html
<div class="bg-white/[0.02] border border-white/5 rounded-lg p-6 my-4">
  <!-- content -->
</div>

<!-- Bordered variant (slightly more visible) -->
<div class="bg-white/[0.02] border border-white/10 rounded-lg p-6 my-4">
  <!-- content -->
</div>
```

### Card — Heavy Glass (Events, Modals)
```css
background: rgba(30, 27, 38, 0.85);
border: 1.5px solid rgba(255, 255, 255, 0.12);
border-radius: 1.5rem;          /* rounded-2xl */
backdrop-filter: blur(8px);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
overflow: hidden;
```

### Callout / Alert (Left-border accent)
```html
<!-- info -->
<div class="border-l-2 border-blue-400/40 bg-blue-400/5 p-4 rounded-r-lg my-4">
  <h4 class="text-blue-300/80 font-semibold mb-2 text-sm">title</h4>
  <div class="text-blue-300/80 text-sm leading-relaxed">content</div>
</div>
```
Variants — swap the color token only:

| Type | Border | Background | Text |
|---|---|---|---|
| info | `border-blue-400/40` | `bg-blue-400/5` | `text-blue-300/80` |
| warning | `border-orange-400/40` | `bg-orange-400/5` | `text-orange-300/80` |
| success | `border-green-400/40` | `bg-green-400/5` | `text-green-300/80` |
| tip | `border-purple-400/40` | `bg-purple-400/5` | `text-purple-300/80` |
| danger | `border-red-400/40` | `bg-red-400/5` | `text-red-300/80` |

### Divider List Row (Guide / Resource links)
```html
<a href="/" class="block group">
  <div class="flex items-start justify-between py-6 border-b border-white/10 group-hover:border-white/25 transition-all duration-300">
    <div class="space-y-2">
      <h3 class="text-white font-medium text-lg italic group-hover:text-white/90 transition-colors"
          style="font-family: 'Noto Serif', Georgia, serif !important;">
        guide title
      </h3>
      <p class="text-white/55 text-sm leading-relaxed"
         style="font-family: 'Helvetica Neue', sans-serif;">
        description of what this covers
      </p>
    </div>
    <span class="text-white/35 group-hover:text-white/60 text-sm ml-6 flex-shrink-0 transition-all duration-300">
      →
    </span>
  </div>
</a>
```

### Tag / Specialty Chip
```html
<span class="px-2 py-1 text-xs rounded-full border border-white/10 text-white/40 bg-white/5"
      style="font-family: 'Helvetica Neue', sans-serif;">
  tag name
</span>
```

### Member / Avatar Card
Uses initials only — no photos.
```html
<div class="text-center space-y-3">
  <!-- Avatar circle -->
  <div class="w-16 h-16 rounded-full mx-auto bg-white/5 text-white/60
              flex items-center justify-center text-lg font-bold
              transition-all duration-300 hover:scale-110 hover:bg-white/15">
    JD
  </div>
  <!-- Name -->
  <h3 class="text-white font-medium text-base italic"
      style="font-family: 'Noto Serif', Georgia, serif !important;">
    john doe
  </h3>
  <!-- Role -->
  <p class="text-xs tracking-widest text-white/45"
     style="font-family: 'Helvetica Neue', sans-serif;">
    president · engineering
  </p>
</div>
```

Avatar role tinting:
| Role tier | Background | Text |
|---|---|---|
| Founding president | `bg-purple-500/20` | `text-purple-300` |
| President | `bg-amber-500/20` | `text-amber-300` |
| C-suite | `bg-indigo-500/20` | `text-indigo-300` |
| Member | `bg-white/5` | `text-white/60` |

### Modal
```css
/* Backdrop */
background: rgba(0,0,0,0.80);
backdrop-filter: blur(4px);

/* Card */
background: #000000;
border: 1px solid rgba(255,255,255,0.10);
border-radius: 1rem;           /* rounded-2xl */
padding: 2rem;
max-width: 24rem;

/* Entrance animation */
from: scale(0.95) opacity(0) translateY(8px)
to:   scale(1.00) opacity(1) translateY(0)
transition: 300ms ease
```

### Navigation — Desktop
Fixed full-height left sidebar. No logo in the nav bar.
```html
<nav class="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
  <div class="absolute top-1/2 left-8 -translate-y-1/2 pointer-events-auto
              hidden md:flex flex-col space-y-4"
       style="font-family: 'Helvetica Neue', sans-serif;">
    <a href="/" class="text-white/60 hover:text-white text-lg font-light">home</a>
    <a href="/events" class="text-white/60 hover:text-white text-lg font-light">events</a>
    <a href="/members" class="text-white/60 hover:text-white text-lg font-light">members</a>
    <!-- etc -->
  </div>
</nav>
```

Dropdown (if needed): `bg-black/90 backdrop-blur-sm border border-white/10 rounded-sm`. Links inside: `text-sm font-light px-4 py-2 hover:bg-white/5`.

### Navigation — Mobile
Hamburger button: `w-10 h-10 rounded-full bg-white/10 hover:bg-white/20` (top-right corner).  
Overlay: `fixed inset-0 bg-black/95 backdrop-blur-md`, links centered vertically at `text-xl font-light`.

---

## 5. Layout Principles

### Max-Width Containers
```
Full sections:      max-w-5xl  (1024px)  — movements, about, stats grids
Article / content:  max-w-4xl  (896px)   — events list, featured cards
Focused text:       max-w-3xl  (768px)   — gitpaid guide, hero descriptions
Narrow CTA:         max-w-2xl  (672px)   — "get involved" two-column
```

All containers: `mx-auto`.

### Vertical Spacing
```
Standard section:   py-24  (6rem top + bottom)
Tighter section:    py-16  (4rem)
Hero / subpage:     pt-32 pb-16  (top accounts for fixed nav)
Footer:             py-8
```

### Horizontal Padding
```
All sections:   px-8  (2rem)
```

### Grid Patterns
```
Three-column equal:    grid-cols-1 md:grid-cols-3 gap-8
Two-column split:      grid-cols-1 md:grid-cols-2 gap-12
Two-column CTA:        grid-cols-1 md:grid-cols-2 gap-16
Member grid:           grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16
Event cards (wide):    grid-cols-1 lg:grid-cols-2 gap-8
Event cards (dense):   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### Centering
- Hero / hero-style sections: `text-center` always.
- Two-column sections: `text-center md:text-left` on the text half.
- Single-column content sections: `text-center`.

---

## 6. Depth & Elevation

There are only three elevation levels. No drop shadows on flat text or standard UI.

| Level | Usage | CSS |
|---|---|---|
| 0 — Flat | Body text, nav links, divider rows | no shadow |
| 1 — Card | Standard glass cards | `box-shadow: 0 8px 32px 0 rgba(31,38,135,0.25)` |
| 2 — Pinned | Pinned/featured event cards | `box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 3px rgba(255,255,255,0.8), 0 0 40px rgba(147,197,253,0.6), 0 0 80px rgba(147,197,253,0.3)` |
| 3 — Hover Pinned | Pinned card on hover | Same as above but `0 0 50px / 100px` spread, `rgba(255,255,255,1)` ring |

Blur surfaces use `backdrop-filter: blur(8px)` on heavy glass cards and `backdrop-filter: blur(4px)` on modal backdrops.

---

## 7. Animation System

### Float-In (Scroll Reveal) — Applied to every content block
```css
.float-in {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(10px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out, filter 0.9s ease-out;
}
.float-in.visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
```
Trigger via `IntersectionObserver` at `threshold: 0.15`. Once visible, never re-hide.

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.float-in').forEach(el => observer.observe(el));
```

### Purple Hover Glow — All interactive text links
```js
el.addEventListener('mouseover', () => {
  el.style.textShadow = '0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)';
});
el.addEventListener('mouseout', () => {
  el.style.textShadow = '0 0 8px rgba(147,51,234,0)';
});
```

### Hero Title Pulse
```css
@keyframes titlePulse {
  0%, 100% {
    text-shadow: 0 0 6px rgba(59,130,246,0.18), 0 0 12px rgba(255,255,255,0.10), 0 0 24px rgba(59,130,246,0.08);
    color: #fff;
  }
  50% {
    text-shadow: 0 0 12px rgba(59,130,246,0.22), 0 0 24px rgba(255,255,255,0.13), 0 0 36px rgba(59,130,246,0.10);
    color: #f4faff;
  }
}
animation: titlePulse 2.5s infinite;
```

### Glitch Char (Interactive letter hover)
```css
.glitch-char { display: inline-block; transition: all 0.1s ease; }
.glitch-char:hover {
  color: #9333ea;
  text-shadow: 0 0 5px rgba(147,51,234,0.5), 0 0 10px rgba(147,51,234,0.3);
  transform: scale(1.05);
}
```

### Standard Transition Duration
```
Color / opacity changes:    duration-300  (300ms)
Scroll-reveal entry:        duration-900  (900ms, ease-out)
Nav scroll morph:           600ms cubic-bezier(0.4, 0, 0.2, 1)
Modal enter / exit:         300ms ease
```

### Standard Hover Transforms
```
Card hover lift:       hover:-translate-y-1 hover:scale-[1.02]
Member avatar hover:   hover:scale-110
Pinned event hover:    translateY(-6px) scale(1.04)
Active press:          active:scale-95
```

---

## 8. Hero Section

The hero is full-screen (`min-h-screen`). Background: a 3D WebGL tunnel of photo cards scrolling toward the camera (Three.js + `@react-three/fiber`). If WebGL is unavailable, fall back to a simple image grid.

Every image in the gallery receives this shader treatment (reproduce the look via CSS filters if not using WebGL):
- Desaturate 35% toward grayscale
- Cool color shift: push blue up, pull red/green slightly
- Lift blacks / slightly crush whites for a faded-film feel
- Subtle S-curve contrast
- Vignette (darken edges)
- Animated film grain overlay

The wordmark sits over the gallery using `mix-blend-mode: exclusion`, which inverts the text against bright image areas creating a cutout effect.

```html
<section class="min-h-screen relative w-full flex items-center justify-center overflow-hidden">
  <!-- WebGL gallery fills absolute inset -->
  <div class="absolute inset-0 z-0"><!-- gallery here --></div>

  <!-- Overlay text: mix-blend-exclusion for cutout effect -->
  <div class="absolute inset-0 pointer-events-none flex items-center justify-center z-10 mix-blend-exclusion text-white">
    <div class="text-center px-4 max-w-lg">
      <h1 class="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight italic"
          style="font-family: 'Georgia', 'Times New Roman', serif;">
        progsu
      </h1>
      <div class="mt-5 text-xs md:text-sm tracking-widest uppercase opacity-70"
           style="font-family: 'Helvetica Neue', sans-serif;">
        /prāg ˌes ˈyü/ &nbsp; <span class="italic">noun</span>
      </div>
      <p class="mt-3 text-sm md:text-base font-light opacity-60 leading-relaxed"
         style="font-family: 'Georgia', 'Times New Roman', serif;">
        builders &amp; dreamers of atl. a new generation of talent.
      </p>
    </div>
  </div>
</section>
```

---

## 9. Scrollbar & Browser Chrome

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #111; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #555; }

::selection { background: #fff; color: #000; }
::-moz-selection { background: #fff; color: #000; }
```

---

## 10. Background Texture (Footer / Decorative)

Repeating binary string at near-zero opacity — used as a section texture before the footer:
```html
<div style="
  opacity: 0.03;
  font-size: 2rem;
  color: rgba(255,255,255,0.1);
  text-shadow: 0 0 5px rgba(255,255,255,0.1);
  user-select: none;
  word-wrap: break-word;
  overflow: hidden;
">
  1000001100000000101001011011110000000101000011000100...
</div>
```

---

## 11. Responsive Behavior

| Breakpoint | Change |
|---|---|
| `< md (768px)` | Left nav hidden → hamburger button top-right; font sizes step down one level |
| `md (768px)+` | Left sidebar nav appears; two-column grids unlock |
| `lg (1024px)+` | Three-column grids unlock; hero title reaches max size |

Main content top padding accounts for fixed nav:
```css
main { padding-top: 8rem; }       /* mobile */
@media (min-width: 640px)  { main { padding-top: 7rem; } }
@media (min-width: 768px)  { main { padding-top: 5rem; } }
```

Subpages add `pt-32` to their first section to clear the nav.

Touch targets: all interactive elements minimum `40×40px` (hamburger button is exactly `w-10 h-10`).

---

## 12. Do's and Don'ts

### Do
- Use `#000000` for every background — not dark gray, not `#0a0a0a`
- Render all text lowercase (`.toLowerCase()` in templates)
- Use `font-light` (300) for body paragraphs
- Apply `tracking-widest` to all section headings and small labels
- Use the serif font (`Noto Serif`) in italic for all display names, page titles, and feature labels
- Keep the purple glow to `text-shadow` on hover only
- Add `float-in` scroll animation to every major content block
- Use `border-b border-white/30 hover:border-white` for primary CTA links
- Apply `transition-all duration-300` to every interactive element
- Keep sections at `py-24` minimum
- Use `backdrop-filter: blur(8px)` on heavy glass cards
- Write copy in the voice: short declarative sentences, lowercase, evocative not descriptive

### Don't
- Don't use any background color other than pure black
- Don't use purple as a fill, border, or static color
- Don't use uppercase text in nav, headings, or buttons
- Don't use `font-regular` (400) for body — use `font-light` (300)
- Don't use border-radius larger than `rounded-2xl` (1.5rem)
- Don't use drop shadows on flat elements (text, nav links, standard buttons)
- Don't add colored backgrounds to sections (even subtle tints)
- Don't use icon libraries for navigation — all links are text only
- Don't load external fonts besides Noto Serif — Helvetica Neue is a system font
- Don't use gradients as backgrounds — gradients are only for `bg-clip-text` accent headings
- Don't use exclamation points or emojis in copy
- Don't add borders wider than `1.5px`
- Don't use `font-bold` for body copy — only headings

---

## 13. Agent Prompt Guide

### Quick Color Reference
```
Background:     #000
Text primary:   #fff
Text body:      white/60
Text muted:     white/50
Text dim:       white/40
Accent glow:    rgb(147,51,234) — text-shadow hover only
Card surface:   white/2 to white/6
Card border:    white/5 to white/12
```

### Ready-to-Use Prompts

**"Build a landing page section"**
> Use DESIGN.md. Black background, Helvetica Neue font, all text lowercase. Section heading in `text-2xl tracking-widest font-bold text-white`, body in `text-white/60 font-light`. Wrap in `py-24 px-8`. Add `float-in` class for scroll animation.

**"Build a card component"**
> Use DESIGN.md card pattern: `bg-white/[0.02] border border-white/5 rounded-lg p-6`. If glass/heavy: `bg-[rgba(30,27,38,0.85)] border border-white/[0.12] rounded-2xl backdrop-blur-sm`. Title in italic Noto Serif, body in `text-white/40 text-sm`.

**"Build a navigation"**
> Fixed left sidebar on desktop (`top-1/2 left-8 -translate-y-1/2`). Links `text-lg font-light text-white/60 hover:text-white`. Hamburger circle `w-10 h-10 rounded-full bg-white/10` top-right on mobile. All link labels lowercase.

**"Add hover interactions to links"**
> Apply purple glow on hover: `text-shadow: 0 0 12px rgba(147,51,234,1), 0 0 30px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.25)`. Base state: `text-white/40`. Hover state: `text-white`. Never use purple as a fill.

**"Build a list/guide page"**
> Each row: `flex items-start justify-between py-6 border-b border-white/10 hover:border-white/25 transition-all duration-300`. Title: italic Noto Serif `text-lg text-white`. Description: Helvetica `text-sm text-white/55`. Arrow: `text-white/35 group-hover:text-white/60 text-sm`.
