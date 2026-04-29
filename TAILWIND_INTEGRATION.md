# Tailwind CSS Integration Guide
## ios-ui-kit × Tailwind v3 — Additive, Non-Breaking

> **Core principle**: Tailwind is a utility *supplement*, not a replacement.  
> Every existing `.btn`, `.card`, `.input`, … class works exactly as before.  
> No styles were modified. No visual regressions.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Installation](#2-installation)
3. [Configuration Deep-Dive](#3-configuration-deep-dive)
4. [Conflict-Prevention Strategy](#4-conflict-prevention-strategy)
5. [Build Scripts](#5-build-scripts)
6. [Loading in HTML / Frameworks](#6-loading-in-html--frameworks)
7. [Usage Patterns](#7-usage-patterns)
8. [Component Examples — Before & After](#8-component-examples--before--after)
9. [Design Token Alignment](#9-design-token-alignment)
10. [What to Use Where](#10-what-to-use-where)
11. [FAQ](#11-faq)

---

## 1. Architecture Overview

```
ios-ui-kit/
├── src/
│   ├── index.scss          ← existing SCSS entry (unchanged)
│   └── tailwind.css        ← NEW: Tailwind-only entry point
├── dist/
│   ├── ios-ui-kit.css      ← existing SCSS output (unchanged)
│   ├── tailwind.css        ← NEW: tw-* utilities only
│   └── ios-ui-kit-full.css ← NEW: combined bundle (ios + tailwind)
├── tailwind.config.js      ← NEW: iOS design tokens mapped to Tailwind
└── postcss.config.js       ← NEW: PostCSS pipeline
```

### Two pipelines, one output

| Pipeline | Tool | Input | Output |
|---|---|---|---|
| iOS kit styles | `sass` | `src/index.scss` | `dist/ios-ui-kit.css` |
| Tailwind utilities | `postcss` | `src/tailwind.css` | `dist/tailwind.css` |
| Combined bundle | `cat` | both above | `dist/ios-ui-kit-full.css` |

The SCSS pipeline is **untouched**. Tailwind is a completely separate process.

---

## 2. Installation

```bash
npm install --save-dev tailwindcss@3 postcss autoprefixer postcss-cli
```

If consuming this kit in your own project:

```bash
# your project
npm install ios-ui-kit
npm install --save-dev tailwindcss@3 postcss autoprefixer postcss-cli
```

Then copy `tailwind.config.js` to your project root, or extend it:

```js
// tailwind.config.js in your app
const iosKitConfig = require('ios-ui-kit/tailwind.config.js');

module.exports = {
  ...iosKitConfig,
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,vue,svelte}',
  ],
};
```

---

## 3. Configuration Deep-Dive

### `tailwind.config.js` highlights

#### ① `prefix: "tw-"` — the conflict shield

```js
module.exports = {
  prefix: "tw-",  // all utilities become tw-flex, tw-px-4, tw-grid, …
};
```

Every Tailwind utility is prefixed with `tw-`.  
The iOS kit uses unprefixed BEM classes (`.btn`, `.card`, `.input`).  
These namespaces **can never collide**.

#### ② `corePlugins.preflight: false` — keep the iOS reset

```js
corePlugins: {
  preflight: false,  // Tailwind's browser reset is disabled
}
```

The iOS kit ships its own `base/reset.scss` (calibrated to Apple HIG).  
Enabling Tailwind's Preflight on top would create double-reset conflicts on
`<button>`, `<input>`, headings, and more. Disabled here.

#### ③ iOS design tokens baked in

All spacing, colors, border-radius, shadows, and typography match
`src/variables/` exactly. See [§9 Design Token Alignment](#9-design-token-alignment).

---

## 4. Conflict-Prevention Strategy

Three layers protect against accidental overrides:

### Layer 1 — Namespace prefix (`tw-`)
Tailwind cannot generate a class that matches any iOS kit selector.  
`tw-` + `flex` = `tw-flex`.  The kit has no class called `tw-flex`.  
→ **Structural impossibility of collision.**

### Layer 2 — No Preflight
Tailwind's base (`preflight`) resets `<button>`, `<a>`, headings, etc.  
With `preflight: false` those elements are untouched by Tailwind.  
→ **No base-layer interference.**

### Layer 3 — CSS cascade order
`ios-ui-kit.css` is loaded **before** `tailwind.css`.  
Component styles (`.btn`, `.card`) have lower source-order than Tailwind utilities,
BUT because Tailwind only emits utilities that start with `tw-`, they target
completely different class names. Source order is irrelevant.  
→ **No cascade conflict even without `!important`.**

### Do NOT set `important: true`

Setting `important: true` in Tailwind config would force every utility to
`!important`, which would override iOS kit states (`:hover`, `:focus`, `[disabled]`).
**Leave it off** — the prefix strategy makes it unnecessary.

---

## 5. Build Scripts

```bash
# Build the iOS SCSS kit only (existing, unchanged)
npm run build

# Build Tailwind utilities only
npm run build:tw

# Build minified Tailwind (production — tree-shaken to used classes)
npm run build:tw:min

# Build both + create combined bundle
npm run build:full

# Build everything (both non-minified + minified + combined)
npm run build:all

# Watch modes
npm run watch        # SCSS watch
npm run watch:tw     # Tailwind watch
```

> **JIT tree-shaking**: Tailwind v3 only emits CSS for classes actually found
> in your `content` paths. Add your project source folders to `content` in
> `tailwind.config.js` for minimum CSS weight.

---

## 6. Loading in HTML / Frameworks

### Option A — Two separate files (recommended for development)

```html
<!-- 1. iOS UI Kit — all component styles -->
<link rel="stylesheet" href="dist/ios-ui-kit.css" />
<!-- 2. Tailwind utilities (tw-* only) -->
<link rel="stylesheet" href="dist/tailwind.css" />
```

### Option B — Single combined bundle (recommended for production)

```html
<link rel="stylesheet" href="dist/ios-ui-kit-full.css" />
```

### Option C — Via npm + bundler (Webpack / Vite / Parcel)

```js
// main.js / main.ts
import 'ios-ui-kit/dist/ios-ui-kit.css';
import './tailwind.css';  // your project's Tailwind entry
```

### Option D — Framework CDN fallback

```html
<!-- For quick prototyping — NOT for production -->
<link rel="stylesheet" href="https://unpkg.com/ios-ui-kit/dist/ios-ui-kit-full.css" />
```

---

## 7. Usage Patterns

### Pattern A — Tailwind for layout, kit for visuals

```html
<!-- tw-flex + tw-gap-* replace manual inline styles           -->
<!-- .btn keeps all its iOS visual styling untouched           -->
<div class="tw-flex tw-flex-wrap tw-gap-2">
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
  <button class="btn btn--ghost">Ghost</button>
</div>
```

### Pattern B — Tailwind for responsive behavior

```html
<!-- 1-column on mobile, 3-column on tablet+                   -->
<!-- .card controls every visual detail (shadow, radius, etc.) -->
<div class="tw-grid tw-grid-cols-1 tw-md:grid-cols-3 tw-gap-3">
  <div class="card">…</div>
  <div class="card">…</div>
  <div class="card">…</div>
</div>
```

### Pattern C — Tailwind for spacing without inline styles

```html
<!-- Before: style="margin-bottom:12px"  -->
<!-- After:  tw-mb-3  (= 12px on iOS 4pt grid) -->
<div class="form-group tw-mb-3">
  <label class="form-label">Email</label>
  <input class="input" type="email" />
</div>
```

### Pattern D — Tailwind typography utilities

```html
<!-- Uses iOS font sizes from tailwind.config fontSize table   -->
<h1 class="tw-text-large-title tw-font-bold tw-text-label">Dashboard</h1>
<p  class="tw-text-body tw-text-label-secondary">Manage your account.</p>
```

### Pattern E — Tailwind for frosted glass / backdrop effects

```html
<!-- iOS "vibrancy" card effect                                -->
<div class="card tw-bg-white/60 tw-backdrop-blur tw-border tw-border-white/40">
  …
</div>
```

---

## 8. Component Examples — Before & After

### 8.1 Button Group

**Before** (iOS kit only, inline layout):

```html
<div style="display:flex; gap:8px; flex-wrap:wrap">
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
</div>
```

**After** (Tailwind layout, kit visuals):

```html
<!-- Tailwind handles layout; kit handles styling              -->
<div class="tw-flex tw-flex-wrap tw-gap-2">
  <button class="btn tw-flex-1 tw-sm:flex-none">Primary</button>
  <button class="btn btn--secondary tw-flex-1 tw-sm:flex-none">Secondary</button>
</div>
```

What changed: `style="display:flex;gap:8px"` → `tw-flex tw-gap-2`.  
Fully mobile-responsive: buttons stack full-width on phones, auto-width on ≥390 px.

---

### 8.2 Card Grid

**Before** (kit only, no responsive grid):

```html
<div>
  <div class="card" style="margin-bottom:12px">…</div>
  <div class="card" style="margin-bottom:12px">…</div>
  <div class="card" style="margin-bottom:12px">…</div>
</div>
```

**After** (responsive grid via Tailwind):

```html
<div class="tw-grid tw-grid-cols-1 tw-md:grid-cols-3 tw-gap-3">
  <div class="card">  <!-- zero changes inside card --></div>
  <div class="card">…</div>
  <div class="card">…</div>
</div>
```

What changed: manual `margin-bottom` + no responsive layout →
responsive 1/2/3 column grid. Card internals unchanged.

---

### 8.3 Form Layout

**Before** (kit only, vertical stack):

```html
<div class="card">
  <div class="form-group" style="margin-bottom:12px">
    <label class="form-label">First Name</label>
    <input class="input" />
  </div>
  <div class="form-group" style="margin-bottom:12px">
    <label class="form-label">Last Name</label>
    <input class="input" />
  </div>
  <button class="btn" style="width:100%">Save</button>
</div>
```

**After** (2-column form on tablet, right-aligned actions):

```html
<div class="card">
  <div class="tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-3 tw-mb-4">
    <div class="form-group">
      <label class="form-label">First Name</label>
      <input class="input" />
    </div>
    <div class="form-group">
      <label class="form-label">Last Name</label>
      <input class="input" />
    </div>
    <div class="form-group tw-md:col-span-2">
      <label class="form-label">Email</label>
      <input class="input" type="email" />
    </div>
  </div>

  <div class="tw-flex tw-gap-2 tw-justify-end">
    <button class="btn btn--ghost">Cancel</button>
    <button class="btn">Save Changes</button>
  </div>
</div>
```

What changed: `style="margin-bottom:12px"` → `tw-gap-3 tw-mb-4`.  
Added responsive 2-column layout. `style="width:100%"` → `tw-flex tw-justify-end`.  
`.form-label`, `.input`, `.btn` are 100% unchanged.

---

### 8.4 Alert / Notification Banner

**Before** (kit only — no internal flex layout):

```html
<div class="alert alert--info">
  Software Update Available — iOS 18.4 is ready to install.
</div>
```

**After** (icon + text + action button in one row):

```html
<div class="alert alert--info  tw-flex tw-items-start tw-gap-3">
  <span class="tw-text-xl tw-shrink-0">ℹ️</span>
  <div class="tw-flex-1 tw-min-w-0">
    <p class="tw-text-headline tw-font-semibold tw-m-0 tw-mb-1">
      Software Update Available
    </p>
    <p class="tw-text-footnote tw-text-label-secondary tw-m-0">
      iOS 18.4 — Your device will restart after install.
    </p>
  </div>
  <button class="btn btn--ghost btn--sm tw-shrink-0">Later</button>
</div>
```

What changed: `.alert` still controls the visual container (background, border,
border-radius, text color). Tailwind provides the internal 3-column flex row.

---

## 9. Design Token Alignment

Every Tailwind token directly maps a SCSS variable from `src/variables/`.

### Spacing (4pt grid)

| Tailwind class | Value | SCSS variable |
|---|---|---|
| `tw-p-1` | 4px | `$spacing-1` |
| `tw-p-2` | 8px | `$spacing-2` |
| `tw-p-3` | 12px | `$spacing-3` |
| `tw-p-4` | 16px | `$spacing-4` (standard iOS margin) |
| `tw-p-6` | 24px | `$spacing-6` |
| `tw-h-11` | 44px | `$touch-target-min` |

### Border Radius

| Tailwind class | Value | SCSS variable |
|---|---|---|
| `tw-rounded` | 10px | `$border-radius-md` |
| `tw-rounded-lg` | 12px | `$border-radius-lg` |
| `tw-rounded-xl` | 16px | `$border-radius-xl` |
| `tw-rounded-2xl` | 20px | `$border-radius-2xl` |
| `tw-rounded-3xl` | 28px | `$border-radius-3xl` |
| `tw-rounded-full` | 9999px | `$border-radius-full` |

### Shadows

| Tailwind class | Description | SCSS variable |
|---|---|---|
| `tw-shadow-hairline` | 0.5px ring | `$shadow-hairline` |
| `tw-shadow-sm` | cards, buttons | `$card-shadow-sm` |
| `tw-shadow` | floating cards | `$card-shadow-md` |
| `tw-shadow-lg` | modals | `$card-shadow-lg` |
| `tw-shadow-xl` | overlays | `$card-shadow-xl` |
| `tw-shadow-focus-ring` | input focus | `$input-shadow-focus` |

### Colors (live via CSS vars — dark mode included)

| Tailwind class | CSS variable | Light value |
|---|---|---|
| `tw-bg-white` | `--ios-system-bg` | `#FFFFFF` |
| `tw-bg-bg-secondary` | `--ios-secondary-system-bg` | `#F2F2F7` |
| `tw-text-label` | `--ios-label` | `#000000` |
| `tw-text-label-secondary` | `--ios-secondary-label` | `rgba(60,60,67,.6)` |
| `tw-bg-blue` | `--ios-blue` | `#007AFF` |
| `tw-bg-green` | `--ios-green` | `#34C759` |
| `tw-bg-red` | `--ios-red` | `#FF3B30` |
| `tw-text-separator` | `--ios-separator` | `rgba(60,60,67,.29)` |

### Typography

| Tailwind class | Size | iOS HIG name |
|---|---|---|
| `tw-text-caption2` | 11px | Caption 2 |
| `tw-text-caption1` / `tw-text-xs` | 12px | Caption 1 |
| `tw-text-footnote` / `tw-text-sm` | 13px | Footnote |
| `tw-text-subhead` | 15px | Subheadline |
| `tw-text-callout` | 16px | Callout |
| `tw-text-body` / `tw-text-base` | 17px | Body |
| `tw-text-headline` | 17px semibold | Headline |
| `tw-text-title3` / `tw-text-lg` | 20px | Title 3 |
| `tw-text-title2` / `tw-text-xl` | 22px | Title 2 |
| `tw-text-title1` / `tw-text-2xl` | 28px | Title 1 |
| `tw-text-large-title` / `tw-text-3xl` | 34px | Large Title |

### Breakpoints

| Tailwind prefix | Screen width | Device |
|---|---|---|
| `tw-xs:` | 320px | iPhone SE |
| `tw-sm:` | 390px | iPhone 14 |
| `tw-md:` | 768px | iPad portrait |
| `tw-lg:` | 1024px | iPad landscape |
| `tw-xl:` | 1280px | Desktop |

---

## 10. What to Use Where

### Use the iOS UI Kit class for…

| Concern | Example |
|---|---|
| Component visual identity | `.btn`, `.card`, `.input`, `.badge`, `.alert` |
| iOS color tokens | `.btn--primary`, `.badge--success` |
| Dark mode | Automatic via `@media (prefers-color-scheme: dark)` |
| States | `:hover`, `:focus`, `[disabled]`, `.btn--loading` |
| Sizes | `.btn--sm`, `.btn--lg`, `.input--lg` |
| Component variants | `.btn--ghost`, `.card--elevated`, `.badge--outline` |

### Use Tailwind (`tw-*`) for…

| Concern | Example |
|---|---|
| Flex / grid layout | `tw-flex`, `tw-grid`, `tw-grid-cols-2` |
| Alignment | `tw-items-center`, `tw-justify-between` |
| Spacing (container level) | `tw-gap-3`, `tw-px-4`, `tw-mt-6` |
| Responsive behavior | `tw-sm:flex-row`, `tw-md:grid-cols-3` |
| Overflow / truncation | `tw-truncate`, `tw-overflow-hidden`, `tw-min-w-0` |
| Visual effects | `tw-backdrop-blur`, `tw-opacity-60` |
| Z-index | `tw-z-modal`, `tw-z-tooltip` |
| Quick one-offs | `tw-sr-only`, `tw-pointer-events-none` |

### Never do…

```html
<!-- ✗ Don't use tw-* to restyle iOS kit components -->
<button class="btn tw-bg-blue tw-rounded-xl tw-font-bold">
  Broken — Tailwind colors will fight with btn's internal vars
</button>

<!-- ✗ Don't use tw-* for typography inside kit components -->
<!-- The kit manages font-size/weight inside .btn, .card, etc. -->
<div class="card tw-text-xl tw-font-bold">…</div>

<!-- ✓ Correct — Tailwind for layout, kit for visuals -->
<div class="tw-flex tw-gap-2">
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
</div>
```

---

## 11. FAQ

**Q: Can I use Tailwind's responsive prefixes with kit classes?**  
A: No — responsive prefixes only work with Tailwind's own utilities (`tw-*`).  
For responsive component variants, use the kit's JS or CSS media queries.

**Q: The `tw-` prefix is verbose. Can I remove it?**  
A: Only if your project has no class names that could conflict with Tailwind.  
For safety in this kit, the prefix stays. In an isolated app that imports only  
this kit, you could set `prefix: ""` in your own copy of `tailwind.config.js`.

**Q: Does dark mode work with Tailwind colors?**  
A: Yes. All color tokens in `tailwind.config.js` reference CSS custom properties  
(`var(--ios-blue)` etc.). The iOS kit's `@media (prefers-color-scheme: dark)` block  
updates those properties automatically, so `tw-bg-blue` adapts to dark mode  
without any extra Tailwind config.

**Q: Can I use Tailwind's `@apply` in SCSS?**  
A: Yes, but use it carefully. `@apply tw-flex` in SCSS output will emit the  
utility CSS inline — avoid using it inside kit component files to prevent  
polluting the existing SCSS output. Use it only in your own project SCSS.

**Q: How do I add my own custom utilities?**  
A: Extend under `theme.extend` in `tailwind.config.js` — your additions will  
automatically inherit the `tw-` prefix.

```js
extend: {
  spacing: {
    "safe-bottom": "env(safe-area-inset-bottom)",
  }
}
// Usage: tw-pb-safe-bottom
```

---

*Live demo: open `examples/tailwind-integration.html` in a browser after running `npm run build:full`.*

