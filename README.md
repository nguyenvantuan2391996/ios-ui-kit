# iOS UI Kit - CSS Components Library

Một bộ CSS component library mô phỏng giao diện iOS, giúp bạn dễ dàng xây dựng các ứng dụng web có giao diện giống iOS.

## 📋 Roadmap & Plan Chi Tiết

### **Phase 1: Foundation & Setup** (Tuần 1-2)
- [x] Tạo repository cơ bản
- [ ] Tạo structure folder project
- [ ] Setup file cấu hình (package.json, .gitignore, etc.)
- [ ] Tạo file SCSS/CSS base
- [ ] Tạo file variables & theme colors
- [ ] Tạo file utilities & helpers

**Deliverables:**
- Folder structure hoàn chỉnh
- Variables & theme system sẵn sàng
- Base styles & reset

---

### **Phase 2: Core Components** (Tuần 3-5)

#### **2.1 Button Component**
- [ ] Tạo button cơ bản (.btn)
- [ ] Button variants: primary, secondary, danger, warning
- [ ] Button sizes: small, medium, large
- [ ] Button states: normal, hover, active, disabled
- [ ] Button với icon support
- [ ] Documentation & example

**Files:**
- `components/button/button.scss`
- `components/button/button.html` (demo)

#### **2.2 Input Component**
- [ ] Input text cơ bản
- [ ] Input variants: default, rounded, filled, outlined
- [ ] Input sizes: small, medium, large
- [ ] Input states: normal, focus, disabled, error
- [ ] Input với label & placeholder
- [ ] Input validation feedback
- [ ] Documentation & example

**Files:**
- `components/input/input.scss`
- `components/input/input.html` (demo)

#### **2.3 Card Component**
- [ ] Card cơ bản với shadow iOS-style
- [ ] Card variants: elevated, outlined, filled
- [ ] Card header, body, footer sections
- [ ] Card image support
- [ ] Card actions (button group)
- [ ] Documentation & example

**Files:**
- `components/card/card.scss`
- `components/card/card.html` (demo)

#### **2.4 Badge Component**
- [ ] Badge cơ bản
- [ ] Badge colors: primary, success, warning, danger, info
- [ ] Badge sizes: small, medium, large
- [ ] Badge shapes: rounded, pill
- [ ] Badge với close button
- [ ] Documentation & example

**Files:**
- `components/badge/badge.scss`
- `components/badge/badge.html` (demo)

---

### **Phase 3: Navigation Components** (Tuần 6-7)

#### **3.1 Navbar Component**
- [ ] Navbar cơ bản (header iOS-style)
- [ ] Navbar variants: light, dark, translucent
- [ ] Navbar title & subtitle
- [ ] Navbar left/right actions
- [ ] Navbar sticky option
- [ ] Documentation & example

**Files:**
- `components/navbar/navbar.scss`
- `components/navbar/navbar.html` (demo)

#### **3.2 Tabs Component**
- [ ] Tab cơ bản
- [ ] Tab layout: horizontal, vertical
- [ ] Tab active indicator
- [ ] Tab with icons
- [ ] Tab responsive
- [ ] Documentation & example

**Files:**
- `components/tabs/tabs.scss`
- `components/tabs/tabs.html` (demo)

#### **3.3 Segmented Control**
- [ ] Segmented control iOS-style
- [ ] Multiple select support
- [ ] Single select support
- [ ] Icon support
- [ ] Documentation & example

**Files:**
- `components/segmented-control/segmented-control.scss`
- `components/segmented-control/segmented-control.html` (demo)

---

### **Phase 4: Form Components** (Tuần 8-9)

#### **4.1 Checkbox & Radio**
- [ ] Checkbox cơ bản
- [ ] Radio button cơ bản
- [ ] Custom styling (iOS-style)
- [ ] States: checked, unchecked, disabled, indeterminate
- [ ] Documentation & example

**Files:**
- `components/checkbox/checkbox.scss`
- `components/radio/radio.scss`

#### **4.2 Toggle Switch**
- [ ] Toggle switch iOS-style (on/off)
- [ ] Toggle sizes
- [ ] Toggle colors
- [ ] Documentation & example

**Files:**
- `components/toggle/toggle.scss`
- `components/toggle/toggle.html` (demo)

#### **4.3 Select/Dropdown**
- [ ] Select cơ bản
- [ ] Select multiple option
- [ ] Select searchable
- [ ] Select grouped options
- [ ] Documentation & example

**Files:**
- `components/select/select.scss`
- `components/select/select.html` (demo)

---

### **Phase 5: Modal & Overlay Components** (Tuần 10)

#### **5.1 Modal/Dialog**
- [ ] Modal cơ bản
- [ ] Modal sizes: small, medium, large
- [ ] Modal header, body, footer
- [ ] Modal close button
- [ ] Modal backdrop
- [ ] Documentation & example

**Files:**
- `components/modal/modal.scss`
- `components/modal/modal.html` (demo)

#### **5.2 Alert/Toast**
- [ ] Alert/Toast types: success, warning, error, info
- [ ] Alert positions & animations
- [ ] Auto-dismiss option
- [ ] Documentation & example

**Files:**
- `components/alert/alert.scss`
- `components/alert/alert.html` (demo)

#### **5.3 Spinner/Loading**
- [ ] Loading spinner
- [ ] Spinner sizes & colors
- [ ] Pulse animation
- [ ] Documentation & example

**Files:**
- `components/spinner/spinner.scss`
- `components/spinner/spinner.html` (demo)

---

### **Phase 6: List & Grid Components** (Tuần 11)

#### **6.1 List Component**
- [ ] List item cơ bản
- [ ] List item with avatar
- [ ] List item with title & description
- [ ] List divider
- [ ] List group
- [ ] Documentation & example

**Files:**
- `components/list/list.scss`
- `components/list/list.html` (demo)

#### **6.2 Avatar Component**
- [ ] Avatar cơ bản
- [ ] Avatar sizes
- [ ] Avatar group (stacked)
- [ ] Avatar with image/initials/icon
- [ ] Documentation & example

**Files:**
- `components/avatar/avatar.scss`
- `components/avatar/avatar.html` (demo)

---

### **Phase 7: Utility & Helper Components** (Tuần 12)

#### **7.1 Spacing & Sizing Utilities**
- [ ] Margin utilities
- [ ] Padding utilities
- [ ] Width & height utilities
- [ ] Display utilities

#### **7.2 Typography Utilities**
- [ ] Font size utilities
- [ ] Font weight utilities
- [ ] Text alignment utilities
- [ ] Text color utilities

#### **7.3 Color Utilities**
- [ ] Background color utilities
- [ ] Text color utilities
- [ ] Border color utilities

**Files:**
- `utils/spacing.scss`
- `utils/typography.scss`
- `utils/colors.scss`

---

### **Phase 8: Documentation & Publishing** (Tuần 13-14)

- [ ] Tạo comprehensive documentation
- [ ] Tạo demo/example page tổng hợp
- [ ] Tạo INSTALLATION.md
- [ ] Tạo CONTRIBUTING.md
- [ ] Setup npm publish
- [ ] Create changelog
- [ ] Release version 1.0.0

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
│   │   └── shadows.scss        # iOS-style shadows
│   ├── base/
│   │   ├── reset.scss          # CSS reset
│   │   ├── global.scss         # Global styles
│   │   └── utilities.scss      # Utility classes
│   ├── components/
│   │   ├── button/
│   │   │   ├── button.scss
│   │   │   └── button.html
│   │   ├── input/
│   │   │   ├── input.scss
│   │   │   └── input.html
│   │   ├── card/
│   │   │   ├── card.scss
│   │   │   └── card.html
│   │   ├── badge/
│   │   ├── navbar/
│   │   ├── tabs/
│   │   ├── modal/
│   │   ├── ...
│   └── dist/
│       ├── ios-ui-kit.css      # Compiled CSS
│       └── ios-ui-kit.min.css  # Minified CSS
├── docs/
│   ├── INSTALLATION.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   └── components/
│       └── [component docs]
├── examples/
│   └── index.html              # Demo page
├── package.json
├── .gitignore
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

1. **Phase 1**: Khởi tạo project structure & variables
2. **Phase 2-6**: Xây dựng từng component theo roadmap
3. **Phase 7**: Tối ưu utilities & helpers
4. **Phase 8**: Hoàn thiện docs & release

---

## 📄 License

MIT

## 👨‍💻 Author

Created by nguyenvantuan2391996

---

**Last Updated**: 2026-04-23
**Version**: 0.1.0 (Planning Phase)
