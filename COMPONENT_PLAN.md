# iOS UI Kit – Component Development Plan

> **Purpose:** Track which components from the target list already exist and provide a detailed implementation plan for each missing component.
>
> **Stack:** Pure SCSS (BEM-style class naming), consistent with the existing components in `src/components/`.

---

## Status Overview

| Component | Status |
|---|---|
| Button | ✅ Exists (`src/components/button/`) |
| Card | ✅ Exists (`src/components/card/`) |
| Input | ✅ Exists (`src/components/input/`) |
| Select | ✅ Exists (`src/components/select/`) |
| Modal | ✅ Exists (`src/components/modal/`) |
| Alert | ✅ Exists (`src/components/alert/`) |
| Badge | ✅ Exists (`src/components/badge/`) |
| Tabs | ✅ Exists (`src/components/tabs/`) |
| Spin | ✅ Exists (`src/components/spinner/`) |
| Switch | ✅ Exists (`src/components/toggle/`) |
| Avatar | ✅ Exists (`src/components/avatar/`) |
| List | ✅ Exists (`src/components/list/`) |
| Checkbox | ✅ Exists (`src/components/checkbox/`) |
| Radio | ✅ Exists (`src/components/radio/`) |
| Drawer | ❌ Missing |
| Popover | ❌ Missing |
| Tag | ❌ Missing |
| Collapse | ❌ Missing |
| Pagination | ❌ Missing |
| Progress | ❌ Missing |
| Skeleton | ❌ Missing |
| Space | ❌ Missing |
| Breadcrumb | ❌ Missing |
| Steps | ❌ Missing |
| Result | ❌ Missing |
| Tooltip | ❌ Missing |
| Dropdown | ❌ Missing |
| Menu | ❌ Missing |
| Table | ❌ Missing |
| Row | ❌ Missing |
| Col | ❌ Missing |
| Layout | ❌ Missing |
| Tree | ❌ Missing |
| TreeSelect | ❌ Missing |
| Upload | ❌ Missing |
| DatePicker | ❌ Missing |
| Form | ❌ Missing |
| Icon | ❌ Missing |
| Empty | ❌ Missing |
| AutoComplete | ❌ Missing |
| Slider | ❌ Missing |
| Image | ❌ Missing |
| App | ❌ Missing |
| Notification | ❌ Missing |

---

## Implementation Plan

Each missing component follows the same file convention used by existing components:

```
src/components/<component-name>/
  <component-name>.scss
```

All components must be registered in `src/components/_index.scss`.

---

### 1. Drawer

**File:** `src/components/drawer/drawer.scss`

**Description:** A panel that slides in from the edge of the screen, overlaying the main content. Common in iOS for side navigation or context menus.

**Classes to implement:**
- `.drawer` – Base container; `position: fixed`, full height/width, `z-index` above content.
- `.drawer--left` / `.drawer--right` / `.drawer--top` / `.drawer--bottom` – Placement variants; translate off-screen by default, translate to `0` when open.
- `.drawer--open` – Active state modifier; triggers translate transition.
- `.drawer__overlay` – Semi-transparent backdrop (`background: rgba(0,0,0,0.4)`, `position: fixed`, full-screen).
- `.drawer__header` – Top section with title and close button; `display: flex; justify-content: space-between; align-items: center; padding`.
- `.drawer__title` – Title text inside header.
- `.drawer__close` – Close icon/button inside header.
- `.drawer__body` – Scrollable content area; `overflow-y: auto; flex: 1`.
- `.drawer__footer` – Optional footer with actions; `border-top`, `padding`.
- **Sizes:** `.drawer--sm` (280px), `.drawer--md` (360px, default), `.drawer--lg` (480px), `.drawer--full` (100%).
- **Animation:** `transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)` for smooth iOS-like slide.

---

### 2. Popover

**File:** `src/components/popover/popover.scss`

**Description:** A small overlay that appears above a trigger element, showing rich content (not just text like Tooltip).

**Classes to implement:**
- `.popover` – Base container; `position: absolute`, `z-index`, `background: white`, `border-radius`, `box-shadow`.
- `.popover__arrow` – CSS triangle pointing toward the trigger; achieved with `::before`/`::after` pseudo-elements.
- `.popover__title` – Optional heading inside the popover; `font-weight: bold; padding; border-bottom`.
- `.popover__content` – Body content area; `padding`.
- **Placement:** `.popover--top`, `.popover--bottom`, `.popover--left`, `.popover--right` – Position the popover relative to its trigger, adjusting arrow direction.
- **Animation:** `.popover--visible` – Fade + scale-in (`opacity: 0 → 1`, `transform: scale(0.95) → scale(1)`).
- **Trigger wrapper:** `.popover-trigger` – `position: relative; display: inline-block`.

---

### 3. Tag

**File:** `src/components/tag/tag.scss`

**Description:** Small label used to mark or categorize content. Lightweight alternative to Badge.

**Classes to implement:**
- `.tag` – Base; `display: inline-flex; align-items: center; gap; padding; border-radius; font-size: $font-size-xs; font-weight: $font-weight-medium`.
- **Colors:** `.tag--default`, `.tag--primary`, `.tag--success`, `.tag--warning`, `.tag--danger`, `.tag--info` – Each sets `background-color` and `color` using CSS variables or SCSS color tokens.
- **Outlined variant:** `.tag--outlined` – Transparent background, colored border and text.
- **Sizes:** `.tag--sm`, `.tag--md` (default), `.tag--lg`.
- `.tag__close` – Dismiss `×` button inside tag; `cursor: pointer; opacity: 0.6; &:hover { opacity: 1 }`.
- `.tag--closable` – Adds right padding to accommodate close button.
- `.tag--rounded` – Full `border-radius: 999px` pill shape.

---

### 4. Collapse

**File:** `src/components/collapse/collapse.scss`

**Description:** Vertically expanding/collapsing content panels (accordion-style).

**Classes to implement:**
- `.collapse` – Container for one or many panels; `border: 1px solid $color-border; border-radius`.
- `.collapse__item` – Individual expandable section; `border-bottom` between items.
- `.collapse__header` – Clickable trigger row; `display: flex; justify-content: space-between; align-items: center; padding; cursor: pointer`.
- `.collapse__title` – Label text inside header.
- `.collapse__icon` – Chevron/arrow icon; `transition: transform 0.2s`; rotates 180° when open.
- `.collapse__body` – Hidden content area; `max-height: 0; overflow: hidden; transition: max-height 0.3s ease`.
- `.collapse__body--inner` – Inner padding wrapper to prevent padding animation glitch.
- `.collapse__item--active .collapse__body` – `max-height: 1000px` (large enough to reveal content).
- `.collapse__item--active .collapse__icon` – `transform: rotate(180deg)`.
- `.collapse--borderless` – Variant with no border.
- `.collapse--ghost` – Transparent background variant.

---

### 5. Pagination

**File:** `src/components/pagination/pagination.scss`

**Description:** Navigation control for multi-page content.

**Classes to implement:**
- `.pagination` – `display: flex; align-items: center; gap: $spacing-1; list-style: none`.
- `.pagination__item` – Individual page number or control; `display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; border-radius; cursor: pointer`.
- `.pagination__item--active` – Highlighted current page; `background: $color-primary; color: white`.
- `.pagination__item--disabled` – Prev/Next at boundary; `opacity: 0.4; cursor: not-allowed`.
- `.pagination__item--ellipsis` – `…` separator; non-interactive.
- `.pagination__prev` / `.pagination__next` – Arrow navigation items.
- **Sizes:** `.pagination--sm`, `.pagination--md` (default), `.pagination--lg`.
- `.pagination--simple` – Shows only prev/next arrows with current page text.
- `.pagination__total` – Optional item count label (e.g., "Total 50 items").
- `.pagination__sizer` – Items-per-page dropdown wrapper.

---

### 6. Progress

**File:** `src/components/progress/progress.scss`

**Description:** Visual indicator of completion percentage for operations or tasks.

**Classes to implement:**
- `.progress` – Wrapper container; `width: 100%`.
- `.progress__bar-wrap` – Track/background; `background: $color-gray-200; border-radius: 999px; overflow: hidden`.
- `.progress__bar` – Fill element; `height: 100%; background: $color-primary; border-radius: 999px; transition: width 0.4s ease`.
- **Heights (sizes):** `.progress--xs` (4px), `.progress--sm` (6px), `.progress--md` (8px, default), `.progress--lg` (12px).
- **Colors:** `.progress--primary`, `.progress--success`, `.progress--warning`, `.progress--danger`, `.progress--info`.
- `.progress--striped` – Diagonal stripe pattern via CSS `linear-gradient` on the bar.
- `.progress--animated` – Animates stripes with `@keyframes`.
- `.progress__label` – Percentage text displayed alongside or inside the bar.
- `.progress--label-inside` – Shows label text inside the bar (only for larger sizes).
- **Circle variant:** `.progress-circle` – SVG-based circular progress indicator using `stroke-dashoffset` technique.

---

### 7. Skeleton

**File:** `src/components/skeleton/skeleton.scss`

**Description:** Placeholder loading state that mimics the shape of content.

**Classes to implement:**
- `.skeleton` – Base shimmer block; `background: linear-gradient(90deg, $color-gray-200 25%, $color-gray-100 50%, $color-gray-200 75%); background-size: 400%; animation: skeleton-shimmer 1.5s infinite`.
- `@keyframes skeleton-shimmer` – Moves gradient from left to right.
- `.skeleton--text` – Short inline text line; `height: 1em; border-radius: 4px; margin-bottom: $spacing-2`.
- `.skeleton--title` – Wider/taller heading placeholder.
- `.skeleton--circle` – Circular placeholder (for avatars); `border-radius: 50%`.
- `.skeleton--button` – Rounded rectangle for button placeholders.
- `.skeleton--image` – Square/rectangular placeholder for images.
- **Sizes:** `.skeleton--sm`, `.skeleton--md`, `.skeleton--lg` – Vary `height`/`width`.
- `.skeleton-paragraph` – Container for multiple `.skeleton--text` lines mimicking paragraph text.
- `.skeleton-paragraph__row` – Each line; last child can be `width: 61%` for natural look.
- `.skeleton--active` / `.skeleton--inactive` – Toggle shimmer animation.

---

### 8. Space

**File:** `src/components/space/space.scss`

**Description:** Layout utility that adds consistent spacing between child elements without modifying children directly.

**Classes to implement:**
- `.space` – `display: inline-flex; align-items: center` (horizontal by default).
- `.space--horizontal` – `flex-direction: row` (default).
- `.space--vertical` – `flex-direction: column`.
- **Gap sizes:** `.space--xs` (`gap: $spacing-1`), `.space--sm` (`gap: $spacing-2`), `.space--md` (`gap: $spacing-4`, default), `.space--lg` (`gap: $spacing-6`), `.space--xl` (`gap: $spacing-8`).
- `.space--wrap` – `flex-wrap: wrap`.
- `.space--block` – `display: flex; width: 100%` (full-width block variant).
- **Alignment:** `.space--align-start`, `.space--align-center`, `.space--align-end`, `.space--align-baseline`.
- `.space__item` – Optional explicit wrapper for each child, enabling fine-grained control.
- `.space-divider` – Thin separator between items (`border-left`/`border-top` based on direction).

---

### 9. Breadcrumb

**File:** `src/components/breadcrumb/breadcrumb.scss`

**Description:** Navigation trail showing the user's current location in a hierarchy.

**Classes to implement:**
- `.breadcrumb` – Wrapper; `display: flex; align-items: center; flex-wrap: wrap; gap`.
- `.breadcrumb__item` – Individual crumb; `display: inline-flex; align-items: center`.
- `.breadcrumb__link` – Clickable ancestor link; `color: $color-primary; text-decoration: none; &:hover { text-decoration: underline }`.
- `.breadcrumb__separator` – Divider between crumbs (e.g., `/`, `>`, `›`); `color: $color-text-disabled; margin: 0 $spacing-2`.
- `.breadcrumb__item--active` – Current (last) crumb; `color: $color-text-primary; font-weight: $font-weight-medium; cursor: default`.
- **Separator styles:** `.breadcrumb--slash`, `.breadcrumb--arrow`, `.breadcrumb--dot` – Override default separator character via CSS `content` on separator pseudo-element.
- `.breadcrumb--sm` / `.breadcrumb--md` / `.breadcrumb--lg` – Font size variants.

---

### 10. Steps

**File:** `src/components/steps/steps.scss`

**Description:** Step-by-step progress indicator for multi-step flows (e.g., wizards, onboarding).

**Classes to implement:**
- `.steps` – `display: flex; width: 100%`.
- `.steps--horizontal` – `flex-direction: row` (default).
- `.steps--vertical` – `flex-direction: column`.
- `.steps__item` – Individual step; `flex: 1; position: relative`.
- `.steps__item-container` – Inner layout for icon + content.
- `.steps__icon` – Step number circle or check/error icon; `width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center`.
- `.steps__title` – Step label; `font-weight: $font-weight-medium`.
- `.steps__description` – Optional sub-label; `font-size: $font-size-sm; color: $color-text-secondary`.
- `.steps__tail` – Connecting line between steps; `position: absolute; background: $color-border`.
- **States:**
  - `.steps__item--wait` – Not yet reached; muted colors.
  - `.steps__item--process` – Current step; `$color-primary` icon background.
  - `.steps__item--finish` – Completed; checkmark icon, primary color tail.
  - `.steps__item--error` – Failed step; `$color-danger` styling.
- `.steps--small` – Compact variant with smaller icons.
- `.steps--dot` – Minimal dot-only step indicator (no number).
- `.steps--navigation` – Clickable tab-style steps.

---

### 11. Result

**File:** `src/components/result/result.scss`

**Description:** Feedback page shown after an operation completes (success, error, warning, info, 404, etc.).

**Classes to implement:**
- `.result` – Container; `display: flex; flex-direction: column; align-items: center; text-align: center; padding: $spacing-8`.
- `.result__icon` – Large icon or illustration area; `margin-bottom: $spacing-4`.
- `.result__title` – Main heading; `font-size: $font-size-2xl; font-weight: $font-weight-bold`.
- `.result__subtitle` – Secondary description text; `color: $color-text-secondary`.
- `.result__extra` – Area for action buttons below the description.
- `.result__content` – Optional additional detail content block.
- **Status variants:**
  - `.result--success` – Icon/title in `$color-success`.
  - `.result--error` – `$color-danger`.
  - `.result--warning` – `$color-warning`.
  - `.result--info` – `$color-info`.
  - `.result--404` / `.result--403` / `.result--500` – HTTP status variants with distinct icon styles.

---

### 12. Tooltip

**File:** `src/components/tooltip/tooltip.scss`

**Description:** Small text label that appears on hover/focus, providing additional context for a UI element.

**Classes to implement:**
- `.tooltip` – Wrapper with `position: relative; display: inline-block`.
- `.tooltip__content` – The visible tip box; `position: absolute; z-index: 1070; background: rgba(0,0,0,0.75); color: white; padding: $spacing-1 $spacing-2; border-radius; font-size: $font-size-xs; white-space: nowrap; pointer-events: none`.
- `.tooltip__arrow` – CSS triangle; `::before` pseudo-element.
- **Placement:** `.tooltip--top`, `.tooltip--bottom`, `.tooltip--left`, `.tooltip--right` – Position and arrow direction.
- **Visibility:** `.tooltip__content` hidden by default (`opacity: 0; visibility: hidden`); `.tooltip--visible .tooltip__content` or `:hover` / `:focus-within` triggers `opacity: 1; visibility: visible`.
- **Animation:** `transition: opacity 0.15s, visibility 0.15s`.
- `.tooltip--light` – Light background variant (`background: white; color: $color-text-primary; box-shadow: $shadow-md`).

---

### 13. Dropdown

**File:** `src/components/dropdown/dropdown.scss`

**Description:** Clickable trigger that reveals a menu of options below (or above) it.

**Classes to implement:**
- `.dropdown` – Wrapper; `position: relative; display: inline-block`.
- `.dropdown__trigger` – The activating element (button, link, etc.); no special styles beyond display.
- `.dropdown__menu` – The panel of options; `position: absolute; z-index: 1050; background: white; border-radius; box-shadow: $shadow-lg; min-width: 160px; padding: $spacing-1 0`.
- **Placement:** `.dropdown--top`, `.dropdown--bottom` (default), `.dropdown--left`, `.dropdown--right` – Position the menu relative to trigger.
- `.dropdown__menu--visible` – Show state; `opacity: 1; transform: scaleY(1)`; uses `transform-origin: top` for top-opening variant.
- `.dropdown__item` – Menu item; `display: flex; align-items: center; gap; padding: $spacing-2 $spacing-3; cursor: pointer; &:hover { background: $color-gray-50 }`.
- `.dropdown__item--active` – Selected/highlighted item.
- `.dropdown__item--disabled` – `opacity: 0.4; cursor: not-allowed; pointer-events: none`.
- `.dropdown__divider` – `border-top: 1px solid $color-border; margin: $spacing-1 0`.
- `.dropdown__item-icon` – Leading icon spacing.

---

### 14. Menu

**File:** `src/components/menu/menu.scss`

**Description:** Navigation or action menu, used for sidebars, top navigation, or context menus.

**Classes to implement:**
- `.menu` – Root container; `list-style: none; padding: 0; margin: 0`.
- `.menu--horizontal` – `display: flex; flex-direction: row` for top-nav use.
- `.menu--vertical` – `display: flex; flex-direction: column` (default for sidebars).
- `.menu--inline` – Inline-collapsible sub-menu variant.
- `.menu__item` – A single menu item; `display: flex; align-items: center; gap; padding; cursor: pointer; border-radius`.
- `.menu__item--selected` – Active/selected state; `color: $color-primary; background: rgba($color-primary, 0.08)`.
- `.menu__item--disabled` – `opacity: 0.4; cursor: not-allowed`.
- `.menu__item-icon` – Leading icon area; fixed width for alignment.
- `.menu__item-title` – Item label text.
- `.menu__item-extra` – Trailing badge or count.
- `.menu__submenu` – Nested list of items; collapsible.
- `.menu__submenu-title` – Clickable header for submenu group; includes expand arrow.
- `.menu__submenu--open .menu__submenu-list` – Show nested items.
- `.menu__divider` – Separator line between item groups.
- `.menu__group-title` – Non-clickable section label; `font-size: $font-size-xs; text-transform: uppercase; color: $color-text-disabled; padding`.
- `.menu--dark` – Dark theme variant.
- `.menu--collapsed` – Icon-only collapsed sidebar mode.

---

### 15. Table

**File:** `src/components/table/table.scss`

**Description:** Structured data grid for displaying rows and columns.

**Classes to implement:**
- `.table` – Core `<table>` element styles; `width: 100%; border-collapse: collapse; font-size: $font-size-sm`.
- `.table__header` – `<thead>`; `background: $color-gray-50`.
- `.table__header-cell` – `<th>`; `text-align: left; font-weight: $font-weight-semibold; padding; border-bottom: 2px solid $color-border; white-space: nowrap`.
- `.table__header-cell--sortable` – Adds sort icon and pointer cursor.
- `.table__header-cell--sorted-asc` / `--sorted-desc` – Active sort direction indicator.
- `.table__row` – `<tr>`; `&:hover { background: $color-gray-50 }`.
- `.table__row--selected` – Highlighted selected row; `background: rgba($color-primary, 0.06)`.
- `.table__row--expanded` – Row with expanded detail sub-row.
- `.table__cell` – `<td>`; `padding; border-bottom: 1px solid $color-border`.
- `.table__cell--ellipsis` – `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`.
- **Variants:** `.table--bordered` (all-cell borders), `.table--striped` (alternating row bg), `.table--compact` (reduced padding).
- `.table-wrapper` – Scroll container; `overflow-x: auto`.
- `.table__empty` – Centered "no data" placeholder row.
- `.table__loading` – Overlay showing a spinner while data loads.
- `.table__pagination` – Footer row containing `Pagination` component.
- `.table__fixed-header` – `position: sticky; top: 0; z-index` on `.table__header`.
- `.table__fixed-column` – `position: sticky; left: 0` for pinned columns.
- `.table__expand-icon` – Chevron for expand-row feature.
- `.table__selection-cell` – Column for checkbox row selection.

---

### 16. Row

**File:** `src/components/row/row.scss`

**Description:** Horizontal grid row container (used with `Col` for grid layout).

**Classes to implement:**
- `.row` – `display: flex; flex-wrap: wrap; box-sizing: border-box`.
- **Gutter (horizontal/vertical gap):** Use CSS custom properties `--row-gutter-x` and `--row-gutter-y`; apply as `margin: calc(var(--row-gutter-y) / -2) calc(var(--row-gutter-x) / -2)`.
- **Predefined gutters:** `.row--gutter-0`, `.row--gutter-8`, `.row--gutter-16` (default), `.row--gutter-24`, `.row--gutter-32`.
- **Justify:** `.row--justify-start`, `.row--justify-center`, `.row--justify-end`, `.row--justify-space-between`, `.row--justify-space-around`, `.row--justify-space-evenly`.
- **Align:** `.row--align-top`, `.row--align-middle`, `.row--align-bottom`, `.row--align-stretch`.
- `.row--no-wrap` – `flex-wrap: nowrap`.

---

### 17. Col

**File:** `src/components/col/col.scss`

**Description:** Grid column, child of `Row`. Based on a 24-column grid system (matching Ant Design's system).

**Classes to implement:**
- `.col` – Base; `box-sizing: border-box; padding: calc(var(--row-gutter-y) / 2) calc(var(--row-gutter-x) / 2); min-width: 0`.
- **Span:** `.col-1` through `.col-24` – `flex: 0 0 calc(N/24 * 100%); max-width: calc(N/24 * 100%)`.
- `.col-0` – `display: none`.
- **Offset:** `.col-offset-1` through `.col-offset-24` – `margin-left: calc(N/24 * 100%)`.
- **Order:** `.col-order-first` (`order: -1`), `.col-order-last` (`order: 9999`), `.col-order-1` through `.col-order-24`.
- **Responsive breakpoints** (using `@media` queries):
  - `xs` (< 576px), `sm` (≥ 576px), `md` (≥ 768px), `lg` (≥ 992px), `xl` (≥ 1200px), `xxl` (≥ 1600px).
  - Each breakpoint generates its own `.col-{bp}-{1..24}` span and offset classes.
- `.col--flex` – `flex: 1` (auto-fill remaining space).

---

### 18. Layout

**File:** `src/components/layout/layout.scss`

**Description:** Full page structural layout container with header, sider, content, and footer zones.

**Classes to implement:**
- `.layout` – `display: flex; flex-direction: column; min-height: 100vh`.
- `.layout--has-sider` – `flex-direction: row` when a sider is present.
- `.layout__header` – Top bar; `background: $color-primary; color: white; padding: 0 $spacing-6; height: 64px; display: flex; align-items: center; flex-shrink: 0`.
- `.layout__sider` – Sidebar; `background: $color-gray-900; width: 200px; flex-shrink: 0; transition: width 0.2s`.
- `.layout__sider--collapsed` – `width: 64px` (icon-only mode).
- `.layout__sider--light` – Light-colored sidebar.
- `.layout__content` – Main content area; `flex: 1; overflow: auto; padding: $spacing-6`.
- `.layout__footer` – Bottom bar; `text-align: center; padding: $spacing-4; background: $color-gray-100; color: $color-text-secondary`.
- `.layout__trigger` – Collapse/expand button for sider.

---

### 19. Tree

**File:** `src/components/tree/tree.scss`

**Description:** Hierarchical data display with expand/collapse nodes.

**Classes to implement:**
- `.tree` – Root container; `list-style: none; padding: 0; margin: 0`.
- `.tree__node` – An item in the tree; `display: flex; align-items: center; padding; cursor: pointer; border-radius`.
- `.tree__node:hover` – `background: $color-gray-50`.
- `.tree__node--selected` – `background: rgba($color-primary, 0.08); color: $color-primary`.
- `.tree__node--disabled` – `opacity: 0.4; cursor: not-allowed`.
- `.tree__switcher` – Expand/collapse toggle icon; rotates on expand.
- `.tree__switcher--leaf` – Empty spacer for leaf nodes (no icon).
- `.tree__checkbox` – Optional checkbox per node.
- `.tree__icon` – Custom node icon.
- `.tree__title` – Node label text.
- `.tree__indent` – Horizontal indent per depth level (`padding-left: 18px` per level).
- `.tree__list` – `<ul>` child list; hidden when collapsed.
- `.tree__node--loading` – Shows spinner in switcher position.
- `.tree--show-line` – Draws vertical guide lines connecting nodes (via pseudo-elements).
- `.tree--block-node` – Makes each node fill full width.
- **Drag-and-drop:** `.tree__node--drag-over`, `.tree__node--drag-enter` – Visual feedback during drag.

---

### 20. TreeSelect

**File:** `src/components/tree-select/tree-select.scss`

**Description:** A Select input that shows a tree of options in its dropdown panel.

**Classes to implement:**
- `.tree-select` – Root wrapper; `position: relative; display: inline-block; width: 100%`.
- `.tree-select__selector` – The visible input/tag area; mimics `.input` styling; `border: 1px solid $color-border; border-radius; padding; min-height: 36px; display: flex; flex-wrap: wrap; align-items: center; cursor: pointer`.
- `.tree-select__selector--focused` – `border-color: $color-primary; box-shadow`.
- `.tree-select__placeholder` – Placeholder text; `color: $color-text-disabled`.
- `.tree-select__selection-item` – Selected value tag inside selector; reuses `.tag` styles.
- `.tree-select__clear` – Clear all button (×); `position: absolute; right`.
- `.tree-select__arrow` – Dropdown chevron icon.
- `.tree-select__dropdown` – Panel below/above selector; `position: absolute; z-index; background: white; border: 1px solid $color-border; border-radius; box-shadow: $shadow-lg; max-height: 300px; overflow-y: auto`.
- `.tree-select__search` – Search input at top of dropdown.
- `.tree-select__tree` – The embedded `.tree` component inside dropdown.
- **States:** `.tree-select--disabled`, `.tree-select--multiple` (tag mode), `.tree-select--sm` / `.tree-select--lg`.

---

### 21. Upload

**File:** `src/components/upload/upload.scss`

**Description:** File upload area with drag-and-drop and file list support.

**Classes to implement:**
- `.upload` – Base wrapper.
- `.upload__dragger` – Drag-and-drop zone; `display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed $color-border; border-radius; padding: $spacing-8; background: $color-gray-50; cursor: pointer`.
- `.upload__dragger:hover` / `.upload__dragger--drag-over` – `border-color: $color-primary; background: rgba($color-primary, 0.04)`.
- `.upload__icon` – Upload icon (cloud/arrow); `color: $color-primary; font-size: 2rem`.
- `.upload__text` – Main hint text; `font-weight: $font-weight-medium`.
- `.upload__hint` – Secondary hint; `font-size: $font-size-sm; color: $color-text-secondary`.
- `.upload__button` – Trigger button mode (no drag zone, just a button).
- `.upload__list` – List of uploaded files.
- `.upload__list-item` – Single file entry; `display: flex; align-items: center; gap; padding`.
- `.upload__list-item-icon` – File type icon.
- `.upload__list-item-name` – File name text; `flex: 1; overflow: hidden; text-overflow: ellipsis`.
- `.upload__list-item-size` – File size label; `font-size: $font-size-xs; color: $color-text-secondary`.
- `.upload__list-item-status` – Upload progress or status icon.
- `.upload__list-item-remove` – Delete button.
- `.upload__progress` – Per-file progress bar.
- **Variants:** `.upload--picture-card` – Grid of image thumbnails with hover overlay.

---

### 22. DatePicker

**File:** `src/components/date-picker/date-picker.scss`

**Description:** Calendar-based date/date-range input.

**Classes to implement:**
- `.date-picker` – Root; `position: relative; display: inline-block`.
- `.date-picker__input` – Text input showing selected date; reuses `.input` base styles; with calendar icon suffix.
- `.date-picker__panel` – Floating calendar panel; `position: absolute; z-index; background: white; border: 1px solid $color-border; border-radius; box-shadow: $shadow-lg; padding: $spacing-3`.
- `.date-picker__header` – Month/year navigation row; prev/next arrows + current month-year label.
- `.date-picker__body` – Grid of dates.
- `.date-picker__weekdays` – Row of day-of-week abbreviations (Mo, Tu, …); `font-weight: bold; color: $color-text-secondary`.
- `.date-picker__date-grid` – 7-column CSS grid.
- `.date-picker__cell` – Single date cell; `display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; cursor: pointer`.
- `.date-picker__cell:hover` – Hover highlight.
- `.date-picker__cell--today` – `border: 1px solid $color-primary`.
- `.date-picker__cell--selected` – `background: $color-primary; color: white`.
- `.date-picker__cell--disabled` – `opacity: 0.4; cursor: not-allowed`.
- `.date-picker__cell--outside-month` – `color: $color-text-disabled`.
- `.date-picker__cell--in-range` – `background: rgba($color-primary, 0.1)` for date-range selection.
- `.date-picker__cell--range-start` / `--range-end` – Bold endpoints for range.
- **Panels:** `.date-picker__month-panel`, `.date-picker__year-panel` – Month/year selection grids.
- `.date-picker--range` – Two-calendar side-by-side range picker.

---

### 23. Form

**File:** `src/components/form/form.scss`

**Description:** Layout and validation wrapper for form fields.

**Classes to implement:**
- `.form` – Root `<form>` wrapper; `width: 100%`.
- `.form--horizontal` – Label left of input; `display: flex; flex-wrap: wrap`.
- `.form--vertical` – Label above input (default); `display: flex; flex-direction: column`.
- `.form--inline` – Inline row of fields; `display: flex; flex-wrap: wrap; gap`.
- `.form__item` – A single field group (label + control + message).
- `.form__label` – Field label; `font-size: $font-size-sm; font-weight: $font-weight-medium; color: $color-text-primary; margin-bottom: $spacing-1`.
- `.form__label--required::after` – `content: " *"; color: $color-danger`.
- `.form__control` – Wrapper for the input element.
- `.form__message` – Validation feedback text below control; `font-size: $font-size-xs; margin-top: $spacing-1`.
- `.form__message--error` – `color: $color-danger`.
- `.form__message--warning` – `color: $color-warning`.
- `.form__message--success` – `color: $color-success`.
- `.form__item--error .form__control input` / `select` / `textarea` – `border-color: $color-danger; &:focus { box-shadow: 0 0 0 3px rgba($color-danger, 0.2) }`.
- `.form__item--warning` / `.form__item--success` – Similar for other states.
- `.form__extra` – Helper text below message.
- `.form__actions` – Footer row with submit/cancel buttons; `display: flex; gap; justify-content: flex-end; margin-top: $spacing-6`.

---

### 24. Icon

**File:** `src/components/icon/icon.scss`

**Description:** Wrapper styles for inline SVG or icon-font icons.

**Classes to implement:**
- `.icon` – Base; `display: inline-flex; align-items: center; justify-content: center; line-height: 1`.
- **Sizes:** `.icon--xs` (12px), `.icon--sm` (16px), `.icon--md` (20px, default), `.icon--lg` (24px), `.icon--xl` (32px), `.icon--2xl` (48px).
- **Colors:** `.icon--primary`, `.icon--secondary`, `.icon--success`, `.icon--warning`, `.icon--danger`, `.icon--info`, `.icon--muted`.
- `.icon--spin` – Continuous rotation `animation: spin 1s linear infinite` (reuse the `@keyframes spin` from Spin component).
- `.icon--pulse` – Pulsing opacity animation.
- `.icon svg` – `fill: currentColor; width: 1em; height: 1em` to inherit size from font-size.
- `.icon--block` – `display: flex` (block-level).

---

### 25. Empty

**File:** `src/components/empty/empty.scss`

**Description:** Placeholder shown when there is no data to display.

**Classes to implement:**
- `.empty` – Container; `display: flex; flex-direction: column; align-items: center; justify-content: center; padding: $spacing-8; color: $color-text-disabled`.
- `.empty__image` – Illustration or icon area; `margin-bottom: $spacing-3`.
- `.empty__description` – Caption text below image; `font-size: $font-size-sm`.
- `.empty__extra` – Optional slot for action buttons (e.g., "Create New").
- **Sizes:** `.empty--sm` – Compact variant with smaller image and text.
- `.empty--simple` – Minimal text-only variant (no image).
- `.empty__image img` / `svg` – `max-width: 100%; height: auto`.

---

### 26. AutoComplete

**File:** `src/components/auto-complete/auto-complete.scss`

**Description:** Text input with dropdown suggestion list that filters as the user types.

**Classes to implement:**
- `.auto-complete` – Root wrapper; `position: relative; display: inline-block; width: 100%`.
- `.auto-complete__input` – The text input; reuses `.input` styles.
- `.auto-complete__dropdown` – Suggestion list panel; `position: absolute; z-index; top: 100%; left: 0; right: 0; background: white; border: 1px solid $color-border; border-radius; box-shadow: $shadow-lg; max-height: 256px; overflow-y: auto`.
- `.auto-complete__option` – Single suggestion item; `padding: $spacing-2 $spacing-3; cursor: pointer; &:hover { background: $color-gray-50 }`.
- `.auto-complete__option--active` – Keyboard-focused item; `background: $color-gray-100`.
- `.auto-complete__option--selected` – Currently selected value; `font-weight: $font-weight-medium; color: $color-primary`.
- `.auto-complete__option--disabled` – `opacity: 0.4; cursor: not-allowed`.
- `.auto-complete__option-label` – Displayed text; supports highlight of matched portion.
- `.auto-complete__highlight` – Bold/colored matched text within option label.
- `.auto-complete__empty` – "No results" message shown when list is empty.
- `.auto-complete--loading` – Spinner shown inside dropdown while fetching results.

---

### 27. Slider

**File:** `src/components/slider/slider.scss`

**Description:** Range input control for selecting a numeric value or range.

**Classes to implement:**
- `.slider` – Root wrapper; `position: relative; width: 100%; padding: $spacing-2 0`.
- `.slider__rail` – Background track; `position: absolute; width: 100%; height: 4px; background: $color-gray-200; border-radius: 2px; top: 50%; transform: translateY(-50%)`.
- `.slider__track` – Filled portion; same positioning as rail, `background: $color-primary`.
- `.slider__handle` – Draggable thumb; `position: absolute; width: 14px; height: 14px; background: white; border: 2px solid $color-primary; border-radius: 50%; top: 50%; transform: translate(-50%, -50%); cursor: grab; box-shadow: $shadow-sm`.
- `.slider__handle:active` – `cursor: grabbing`.
- `.slider__handle:focus` – `outline: 3px solid rgba($color-primary, 0.3)`.
- `.slider__marks` – Container for tick marks below rail.
- `.slider__mark` – Individual tick; `position: absolute; top: 14px; width: 1px; height: 8px; background: $color-gray-300; transform: translateX(-50%)`.
- `.slider__mark-label` – Text label below a tick; `position: absolute; top: 24px; font-size: $font-size-xs; color: $color-text-secondary; white-space: nowrap; transform: translateX(-50%)`.
- `.slider__tooltip` – Value tooltip above/below handle on drag.
- `.slider--vertical` – Rotates orientation 90°; swaps width/height logic.
- `.slider--disabled` – `opacity: 0.5; pointer-events: none`.
- **Colors:** `.slider--primary`, `.slider--success`, `.slider--warning`, `.slider--danger`.
- **Range slider:** `.slider--range` – Two handles; `.slider__track` spans between them.

---

### 28. Image

**File:** `src/components/image/image.scss`

**Description:** Enhanced image with preview, fallback, and lazy-load support.

**Classes to implement:**
- `.image` – Root wrapper; `display: inline-block; position: relative; overflow: hidden`.
- `.image__img` – The `<img>` element; `display: block; width: 100%; height: 100%; object-fit: cover`.
- `.image--fit-contain` – `object-fit: contain`.
- `.image--fit-fill` – `object-fit: fill`.
- `.image--fit-none` – `object-fit: none`.
- `.image__fallback` – Shown when image fails to load; centered icon/text placeholder.
- `.image__preview-mask` – Overlay on hover; `position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.2s; display: flex; align-items: center; justify-content: center; color: white`.
- `.image:hover .image__preview-mask` – `opacity: 1`.
- `.image__preview-icon` – Eye/zoom icon inside mask.
- `.image--loading` – Shimmer placeholder while loading (reuse Skeleton shimmer).
- `.image-preview` – Full-screen preview overlay.
- `.image-preview__content` – Centered image inside preview; `max-width: 90vw; max-height: 90vh`.
- `.image-preview__close` – Close button.
- `.image-preview__toolbar` – Bottom bar with zoom-in, zoom-out, rotate, flip controls.
- **Shapes:** `.image--rounded` (`border-radius: 8px`), `.image--circle` (`border-radius: 50%`).
- `.image-group` – Container for multiple images with a "+N more" overflow indicator.

---

### 29. App

**File:** `src/components/app/app.scss`

**Description:** Top-level application wrapper that provides global context styles (theme, font, color variables, and root-level reset/defaults).

**Classes to implement:**
- `.app` – Root app container; applies global font, `color: $color-text-primary; background: $color-bg-base; font-family: $font-family-base; font-size: $font-size-base; line-height: $line-height-base`.
- `.app--light` – Light theme (default).
- `.app--dark` – Dark theme; overrides CSS custom properties for dark color tokens.
- `.app__loading` – Full-screen app initialization spinner overlay (first load).
- Global `box-sizing: border-box` reset under `.app *`.
- Smooth scroll: `.app { scroll-behavior: smooth }`.
- `::-webkit-scrollbar` overrides for iOS-friendly thin scrollbars inside `.app`.

---

### 30. Notification

**File:** `src/components/notification/notification.scss`

**Description:** Toast-style message that appears at a corner of the screen and auto-dismisses.

**Classes to implement:**
- `.notification-container` – Fixed container for stacking notifications; `position: fixed; z-index: 1080; display: flex; flex-direction: column; gap: $spacing-2; pointer-events: none`.
- **Placement:** `.notification-container--top-right`, `--top-left`, `--bottom-right`, `--bottom-left`, `--top-center`, `--bottom-center`.
- `.notification` – Individual notification card; `background: white; border-radius; box-shadow: $shadow-lg; padding: $spacing-3 $spacing-4; display: flex; align-items: flex-start; gap; min-width: 280px; max-width: 400px; pointer-events: all`.
- `.notification__icon` – Status icon; colored by type.
- `.notification__content` – Flex column for title + description.
- `.notification__title` – Bold heading; `font-weight: $font-weight-semibold`.
- `.notification__description` – Body text; `font-size: $font-size-sm; color: $color-text-secondary`.
- `.notification__close` – Dismiss button (×); `position: absolute or margin-left: auto`.
- `.notification__progress` – Thin auto-dismiss progress bar at the bottom.
- **Status variants:** `.notification--success`, `--warning`, `--error`, `--info` – Border-left accent or icon color.
- **Animations:** `.notification--enter` (`opacity: 0; transform: translateX(40px)` → `opacity: 1; translateX(0)`), `.notification--leave` (reverse).

---

## File Registration

After each component's SCSS file is created, add an `@forward` (or `@use`) entry in `src/components/_index.scss`:

```scss
@forward 'drawer/drawer';
@forward 'popover/popover';
@forward 'tag/tag';
@forward 'collapse/collapse';
@forward 'pagination/pagination';
@forward 'progress/progress';
@forward 'skeleton/skeleton';
@forward 'space/space';
@forward 'breadcrumb/breadcrumb';
@forward 'steps/steps';
@forward 'result/result';
@forward 'tooltip/tooltip';
@forward 'dropdown/dropdown';
@forward 'menu/menu';
@forward 'table/table';
@forward 'row/row';
@forward 'col/col';
@forward 'layout/layout';
@forward 'tree/tree';
@forward 'tree-select/tree-select';
@forward 'upload/upload';
@forward 'date-picker/date-picker';
@forward 'form/form';
@forward 'icon/icon';
@forward 'empty/empty';
@forward 'auto-complete/auto-complete';
@forward 'slider/slider';
@forward 'image/image';
@forward 'app/app';
@forward 'notification/notification';
```

---

## Implementation Order (Recommended)

Implement in the following order to build simpler utilities first, then compose more complex components:

1. **Foundation utilities** – Space, Row, Col, Layout, Icon, App
2. **Simple display** – Tag, Badge (exists), Empty, Skeleton
3. **Feedback overlays** – Tooltip, Popover, Notification, Drawer, Result, Alert (exists)
4. **Form inputs** – Slider, AutoComplete, DatePicker, Upload, Form (wraps existing inputs)
5. **Navigation** – Breadcrumb, Steps, Pagination, Menu, Dropdown
6. **Data display** – Table, Tree, TreeSelect, List (exists), Image
7. **Containers** – Collapse, Progress, Tabs (exists), Card (exists)
