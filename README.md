# iOS UI Kit - CSS Components Library

A comprehensive CSS component library that mimics iOS interface design, helping you easily build web applications with an iOS-like appearance.

## 📋 Roadmap & Detailed Plan

### **Phase 1: Foundation & Setup** (Week 1-2) ✅

- [x] Create basic repository
- [x] Create project folder structure
- [x] Setup configuration files (package.json, .gitignore, etc.)
- [x] Create SCSS/CSS base files
- [x] Create variable files & theme colors
- [x] Create utility files & helpers

**Deliverables:**
- Complete folder structure
- Variables & theme system ready
- Base styles & reset

---

### **Phase 2: Core Components** (Week 3-5) ✅

#### **2.1 Button Component**
- [x] Create basic button (.btn)
- [x] Button variants: primary, secondary, danger, warning
- [x] Button sizes: small, medium, large
- [x] Button states: normal, hover, active, disabled
- [x] Button with icon support
- [x] Documentation & example

**Files:**
- `components/button/button.scss`
- `components/button/button.html` (demo)

#### **2.2 Input Component**
- [x] Create basic text input
- [x] Input variants: default, rounded, filled, outlined
- [x] Input sizes: small, medium, large
- [x] Input states: normal, focus, disabled, error
- [x] Input with label & placeholder
- [x] Input validation feedback
- [x] Documentation & example

**Files:**
- `components/input/input.scss`
- `components/input/input.html` (demo)

#### **2.3 Card Component**
- [x] Create basic card with iOS-style shadow
- [x] Card variants: elevated, outlined, filled
- [x] Card header, body, footer sections
- [x] Card image support
- [x] Card actions (button group)
- [x] Documentation & example

**Files:**
- `components/card/card.scss`
- `components/card/card.html` (demo)

#### **2.4 Badge Component**
- [x] Create basic badge
- [x] Badge colors: primary, success, warning, danger, info
- [x] Badge sizes: small, medium, large
- [x] Badge shapes: rounded, pill
- [x] Badge with close button
- [x] Documentation & example

**Files:**
- `components/badge/badge.scss`
- `components/badge/badge.html` (demo)

---

### **Phase 3: Navigation Components** (Week 6-7) ✅

#### **3.1 Navbar Component**
- [x] Create basic navbar (iOS-style header)
- [x] Navbar variants: light, dark, translucent
- [x] Navbar title & subtitle
- [x] Navbar left/right actions
- [x] Navbar sticky option
- [x] Documentation & example

**Files:**
- `components/navbar/navbar.scss`
- `components/navbar/navbar.html` (demo)

#### **3.2 Tabs Component**
- [x] Create basic tabs
- [x] Tab layout: horizontal, vertical
- [x] Tab active indicator
- [x] Tab with icons
- [x] Tab responsive
- [x] Documentation & example

**Files:**
- `components/tabs/tabs.scss`
- `components/tabs/tabs.html` (demo)

#### **3.3 Segmented Control**
- [x] Create iOS-style segmented control
- [x] Multiple select support
- [x] Single select support
- [x] Icon support
- [x] Documentation & example

**Files:**
- `components/segmented-control/segmented-control.scss`
- `components/segmented-control/segmented-control.html` (demo)

---

### **Phase 4: Form Components** (Week 8-9) ✅

#### **4.1 Checkbox & Radio**
- [x] Create basic checkbox
- [x] Create basic radio button
- [x] Custom styling (iOS-style)
- [x] States: checked, unchecked, disabled, indeterminate
- [x] Documentation & example

**Files:**
- `components/checkbox/checkbox.scss`
- `components/radio/radio.scss`

#### **4.2 Toggle Switch**
- [x] Create iOS-style toggle switch (on/off)
- [x] Toggle sizes
- [x] Toggle colors
- [x] Documentation & example

**Files:**
- `components/toggle/toggle.scss`
- `components/toggle/toggle.html` (demo)

#### **4.3 Select/Dropdown**
- [x] Create basic select
- [x] Select multiple options
- [x] Select searchable
- [x] Select grouped options
- [x] Documentation & example

**Files:**
- `components/select/select.scss`
- `components/select/select.html` (demo)

---

### **Phase 5: Modal & Overlay Components** (Week 10) ✅

#### **5.1 Modal/Dialog**
- [x] Create basic modal
- [x] Modal sizes: small, medium, large
- [x] Modal header, body, footer
- [x] Modal close button
- [x] Modal backdrop
- [x] Documentation & example

**Files:**
- `components/modal/modal.scss`
- `components/modal/modal.html` (demo)

#### **5.2 Alert/Toast**
- [x] Alert/Toast types: success, warning, error, info
- [x] Alert positions & animations
- [x] Auto-dismiss option
- [x] Documentation & example

**Files:**
- `components/alert/alert.scss`
- `components/alert/alert.html` (demo)

#### **5.3 Spinner/Loading**
- [x] Create loading spinner
- [x] Spinner sizes & colors
- [x] Pulse animation
- [x] Documentation & example

**Files:**
- `components/spinner/spinner.scss`
- `components/spinner/spinner.html` (demo)

---

### **Phase 6: List & Grid Components** (Week 11) ✅

#### **6.1 List Component**
- [x] Create basic list items
- [x] List item with avatar
- [x] List item with title & description
- [x] List divider
- [x] List group
- [x] Documentation & example

**Files:**
- `components/list/list.scss`
- `examples/index-phase6.html` (demo)

#### **6.2 Avatar Component**
- [x] Create basic avatar
- [x] Avatar sizes
- [x] Avatar group (stacked)
- [x] Avatar with image/initials/icon
- [x] Documentation & example

**Files:**
- `components/avatar/avatar.scss`
- `examples/index-phase6.html` (demo)

---

### **Phase 7: Utility & Helper Components** (Week 12) ✅

#### **7.1 Spacing & Sizing Utilities**
- [x] Margin utilities (m-*, mt-*, mb-*, ml-*, mr-*, mx-*, my-*)
- [x] Padding utilities (p-*, pt-*, pb-*, pl-*, pr-*, px-*, py-*)
- [x] Width & height utilities (w-*, h-*, min-w-*, max-w-*, etc.)
- [x] Display utilities (d-flex, d-grid, d-block, etc.)
- [x] Gap and flex utilities for layouts

#### **7.2 Typography Utilities**
- [x] Font size utilities (text-xs, text-sm, text-base, text-lg, etc.)
- [x] Font weight utilities (font-light, font-normal, font-bold, etc.)
- [x] Text alignment utilities (text-left, text-center, text-right)
- [x] Text color utilities (text-primary, text-success, text-danger, etc.)
- [x] Text transform utilities (uppercase, lowercase, capitalize)
- [x] Line clamp utilities for text truncation

#### **7.3 Color Utilities**
- [x] Background color utilities (bg-primary, bg-gray-*, etc.)
- [x] Text color utilities (text-*, inherited from typography)
- [x] Border color utilities (border-primary, border-gray-*, etc.)
- [x] Opacity utilities (opacity-0 to opacity-100)
- [x] Light color variants (bg-primary-light, etc.)

**Files:**
- `src/utils/spacing.scss`
- `src/utils/typography.scss`
- `src/utils/colors.scss`
- `examples/index-phase7.html` (demo)

---

### **Phase 8: Documentation & Publishing** (Week 13-14) ✅

- [x] Create comprehensive documentation
- [x] Create demo/example showcase page
- [x] Create INSTALLATION.md
- [x] Create CONTRIBUTING.md
- [x] Setup npm publish (package.json)
- [x] Create changelog (CHANGELOG.md)
- [x] Release version 1.0.0

**Deliverables:**
- `INSTALLATION.md` - Installation and quick start guide
- `CONTRIBUTING.md` - Contribution guidelines and development setup
- `CHANGELOG.md` - Version history and release notes
- `package.json` - NPM package configuration
- `.gitignore` - Git ignore rules
- `LICENSE` - MIT License
- `examples/index-complete.html` - Complete showcase demo

---

### **Phase 9: Foundation & Overlay Components** (Week 15) ✅

#### **9.1 Foundation Components (Group 1 - 6 components)**
- [x] **Space** - Layout spacing utility for consistent spacing between elements
  - Horizontal/vertical alignment, 5 size variants, wrap mode, dividers
- [x] **Row** - Horizontal 24-column grid container (Ant Design-style)
  - 6 gutter sizes, alignment options, responsive variants
- [x] **Col** - Responsive grid column with offset and order support
  - 24-span sizing, 6 responsive breakpoints, 500+ class variants
- [x] **Icon** - Icon wrapper styles for SVG and icon-font icons
  - 6 sizes, 6 colors, spin/pulse animations, icon-button variant
- [x] **Layout** - Full-page structural layout (header, sider, content, footer)
  - Collapsible sidebar, responsive behavior, navigation menu
- [x] **App** - Root application wrapper with global styles and theme support
  - Typography scales, form styles, scrollbar customization, a11y features

#### **9.2 Simple UI Components (Group 2 - 4 components)**
- [x] **Tag** - Content labels with color variants and sizes
  - 6 colors, 3 sizes, outlined/rounded/pill variants, closable
- [x] **Empty** - Placeholder for empty data states
  - Image, title, description, action area, 3 sizes
- [x] **Skeleton** - Loading state placeholders with shimmer animation
  - 6 shapes, 5 sizes, paragraph/card/list variants
- [x] **Breadcrumb** - Navigation breadcrumb with multiple separators
  - Slash/arrow/dot separators, active states, 3 sizes

#### **9.3 Overlay & Feedback Components (Group 3 - 5 components)**
- [x] **Tooltip** - Contextual help text labels on hover
  - 4 placements, light/dark variants, 6 colors, arrow pointer
- [x] **Popover** - Rich overlay with title and content
  - 4 placements, arrow, scale animation, CSS-only
- [x] **Drawer** - Slide-in side panel for navigation/actions
  - 4 directions, 4 sizes, header/body/footer, smooth animation
- [x] **Result** - Feedback page for operation results
  - 6 status variants (success/error/warning/info/404/403), 3 sizes
- [x] **Notification** - Toast messages with auto-dismiss
  - 9 placements, 4 status variants, progress bar, stack support

**Files:**
- `src/components/space/space.scss` (60 lines)
- `src/components/row/row.scss` (140+ lines)
- `src/components/col/col.scss` (300+ lines)
- `src/components/icon/icon.scss` (220+ lines)
- `src/components/layout/layout.scss` (282 lines)
- `src/components/app/app.scss` (380+ lines)
- `src/components/tag/tag.scss` (150+ lines)
- `src/components/empty/empty.scss` (190+ lines)
- `src/components/skeleton/skeleton.scss` (300+ lines)
- `src/components/breadcrumb/breadcrumb.scss` (280+ lines)
- `src/components/tooltip/tooltip.scss` (150+ lines)
- `src/components/popover/popover.scss` (180+ lines)
- `src/components/drawer/drawer.scss` (240+ lines)
- `src/components/result/result.scss` (220+ lines)
- `src/components/notification/notification.scss` (280+ lines)
- `examples/index-phase9.html` - Interactive demo
- `PHASE9_SUMMARY.md` - Comprehensive documentation

**Compiled Output:**
- `dist/ios-ui-kit.css` - 147 KB (expanded)
- `dist/ios-ui-kit.min.css` - 61 KB (minified)
- 500+ responsive CSS classes
- 0 compilation errors

---

## 📁 Project Structure

```
ios-ui-kit/
├── src/
│   ├── index.scss              # Main entry point
│   ├── variables/
│   │   ├── colors.scss         # Color variables
│   │   ├── spacing.scss        # Spacing scale
│   │   ├── typography.scss     # Font sizes, weights
│   │   ├── shadows.scss        # iOS-style shadows
│   │   └── index.scss          # Variables index
│   ├── base/
│   │   ├── reset.scss          # CSS reset
│   │   ├── global.scss         # Global styles
│   │   └── index.scss          # Base index
| ├── components/             # 31 UI components
| │   ├── space/
| │   ├── row/
| │   ├── col/
| │   ├── icon/
| │   ├── layout/
| │   ├── app/
| │   ├── tag/
| │   ├── empty/
| │   ├── skeleton/
| │   ├── breadcrumb/
| │   ├── tooltip/
| │   ├── popover/
| │   ├── drawer/
| │   ├── result/
| │   ├── notification/
| │   ├── button/
| │   ├── input/
| │   ├── card/
| │   ├── badge/
| │   ├── navbar/
| │   ├── tabs/
| │   ├── segmented-control/
| │   ├── checkbox/
| │   ├── radio/
| │   ├── toggle/
| │   ├── select/
| │   ├── modal/
| │   ├── alert/
| │   ├── spinner/
| │   ├── avatar/
| │   ├── list/
| │   └── _index.scss
│   └── utils/
│       ├── spacing.scss        # Spacing utilities (80+ classes)
│       ├── typography.scss     # Typography utilities (100+ classes)
│       ├── colors.scss         # Color utilities (120+ classes)
│       └── index.scss          # Utilities index
├── dist/
│   ├── ios-ui-kit.css          # Compiled CSS (147 KB)
│   ├── ios-ui-kit.min.css      # Minified CSS (61 KB)
│   ├── ios-ui-kit.css.map      # Source map
│   └── ios-ui-kit.min.css.map  # Minified source map
├── examples/
│   ├── index.html              # Phase 2 demo
│   ├── index-phase3.html       # Phase 3 demo (Navigation)
│   ├── index-phase45.html      # Phase 4-5 demo (Forms)
│   ├── index-phase6.html       # Phase 6 demo (Avatar & List)
│   ├── index-phase7.html       # Phase 7 demo (Utilities)
│   ├── index-phase9.html       # Phase 9 demo (Foundation & Overlay)
│   └── index-complete.html     # Complete showcase
├── INSTALLATION.md             # Installation guide
├── CONTRIBUTING.md             # Contribution guidelines
├── CHANGELOG.md                # Version history
├── PHASE6_SUMMARY.md           # Phase 6 documentation
├── PHASE7_SUMMARY.md           # Phase 7 documentation
├── PHASE8_SUMMARY.md           # Phase 8 documentation
├── PHASE9_SUMMARY.md           # Phase 9 documentation
├── PROJECT_PROGRESS.md         # Project progress tracking
├── package.json                # NPM package config
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## 🎨 Design Principles

1. **iOS-Style Design**
   - Minimal, clean aesthetic
   - Subtle shadows & depth
   - Smooth animations & transitions
   - Native iOS-like interactions

2. **Accessibility**
   - WCAG 2.1 compliant
   - Keyboard navigation support
   - ARIA labels & roles

3. **Responsive**
   - Mobile-first approach
   - Tablet & desktop support
   - Flexible component sizing

4. **Customizable**
   - CSS variables for easy theming
   - Modifier classes for variants
   - Composable components

---

## 🚀 Getting Started

### Installation
```bash
npm install ios-ui-kit
```

### Usage
```html
<link rel="stylesheet" href="path/to/ios-ui-kit.css">

<button class="btn btn-primary">Click me</button>
<input type="text" class="input" placeholder="Enter text">
<div class="card">
  <div class="card-body">Content here</div>
</div>
```

---

## 📝 Next Steps

1. **Phase 1**: Initialize project structure & variables
2. **Phase 2-6**: Build each component according to roadmap
3. **Phase 7**: Optimize utilities & helpers
4. **Phase 8**: Complete docs & release

---

## 📄 License

MIT

## 👨‍💻 Author

Created by nguyenvantuan2391996

---

**Last Updated**: 2026-04-23
**Version**: 1.0.0 (Released)
