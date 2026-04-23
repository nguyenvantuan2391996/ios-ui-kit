# Installation Guide

## iOS UI Kit - CSS Components Library

A CSS component library that mimics iOS interface design for building web applications with an iOS-like appearance.

## 📦 Installation

### NPM
```bash
npm install ios-ui-kit
```

### Yarn
```bash
yarn add ios-ui-kit
```

### PNPM
```bash
pnpm add ios-ui-kit
```

### CDN
```html
<!-- Expanded version -->
<link rel="stylesheet" href="https://unpkg.com/ios-ui-kit@1.0.0/dist/ios-ui-kit.css">

<!-- Minified version (recommended for production) -->
<link rel="stylesheet" href="https://unpkg.com/ios-ui-kit@1.0.0/dist/ios-ui-kit.min.css">
```

### Manual Download
Download the latest release from GitHub and include the CSS file:
```html
<link rel="stylesheet" href="path/to/ios-ui-kit.css">
```

## 🚀 Quick Start

### 1. Include the CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="https://unpkg.com/ios-ui-kit@1.0.0/dist/ios-ui-kit.min.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### 2. Use Components
```html
<!-- Button Component -->
<button class="btn btn--primary">Click me</button>

<!-- Input Component -->
<input type="text" class="input input--outlined" placeholder="Enter text">

<!-- Card Component -->
<div class="card card--elevated">
    <div class="card__header">
        <h3 class="card__title">Card Title</h3>
    </div>
    <div class="card__body">
        <p>Card content goes here</p>
    </div>
</div>

<!-- Badge Component -->
<span class="badge badge--primary">New</span>

<!-- Avatar Component -->
<div class="avatar avatar--md avatar--primary">
    <span class="avatar__initials">JD</span>
</div>

<!-- List Component -->
<ul class="list">
    <li class="list-item">
        <div class="list-item__content">
            <div class="list-item__title">Item</div>
        </div>
    </li>
</ul>
```

## 🎨 Utility Classes

### Spacing
```html
<!-- Margin: m-1 to m-16 -->
<div class="m-4">Content with margin</div>

<!-- Padding: p-1 to p-12 -->
<div class="p-6">Content with padding</div>

<!-- Specific directions -->
<div class="mt-4 mb-2 px-3">Custom spacing</div>
```

### Typography
```html
<!-- Font Sizes: text-xs to text-4xl -->
<p class="text-lg">Large text</p>

<!-- Font Weights: font-light to font-extrabold -->
<p class="font-bold">Bold text</p>

<!-- Text Colors -->
<p class="text-primary">Primary color</p>
<p class="text-success">Success color</p>

<!-- Text Alignment -->
<p class="text-center">Centered text</p>
```

### Colors
```html
<!-- Background Colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-gray-100">Gray background</div>

<!-- Border Colors -->
<div class="border border-primary">Border with color</div>

<!-- Opacity -->
<div class="bg-primary opacity-50">Semi-transparent</div>
```

### Layout
```html
<!-- Flex Layout -->
<div class="d-flex gap-4 justify-center">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- Grid Layout -->
<div class="d-grid" style="grid-template-columns: repeat(3, 1fr); gap: 20px;">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>

<!-- Responsive -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive width</div>
```

## 📱 Responsive Design

iOS UI Kit uses a mobile-first approach with the following breakpoints:

| Breakpoint | Size | Prefix |
|-----------|------|--------|
| XS | < 320px | (none) |
| SM | ≥ 640px | `sm:` |
| MD | ≥ 768px | `md:` |
| LG | ≥ 1024px | `lg:` |
| XL | ≥ 1280px | `xl:` |
| 2XL | ≥ 1536px | `2xl:` |

### Responsive Example
```html
<!-- Hidden on small screens, visible on medium+ -->
<div class="d-none md:d-block">Desktop only</div>

<!-- Responsive text size -->
<h1 class="text-lg md:text-xl lg:text-2xl">Responsive heading</h1>

<!-- Responsive layout -->
<div class="d-block md:d-flex md:gap-4">
    <div class="w-full md:w-1/2">Side 1</div>
    <div class="w-full md:w-1/2">Side 2</div>
</div>
```

## 🎯 Component Reference

### button
- `.btn` - Base class
- `.btn--primary`, `.btn--secondary`, `.btn--success`, `.btn--warning`, `.btn--danger` - Colors
- `.btn--sm`, `.btn--md`, `.btn--lg` - Sizes
- `.btn--outlined`, `.btn--ghost` - Variants
- `.btn--block` - Full width
- `:disabled` - Disabled state

### input
- `.input` - Base class
- `.input--sm`, `.input--md`, `.input--lg` - Sizes
- `.input--outlined`, `.input--filled`, `.input--rounded`, `.input--underline` - Variants
- `.input--error`, `.input--success` - States

### card
- `.card` - Base class
- `.card--elevated`, `.card--outlined`, `.card--filled` - Variants
- `.card__header`, `.card__body`, `.card__footer` - Sections
- `.card__title`, `.card__subtitle`, `.card__content` - Content

### badge
- `.badge` - Base class
- `.badge--primary`, `.badge--success`, `.badge--warning`, etc. - Colors
- `.badge--sm`, `.badge--md`, `.badge--lg` - Sizes
- `.badge--pill`, `.badge--circle` - Shapes

### avatar
- `.avatar` - Base class
- `.avatar--xs`, `.avatar--sm`, `.avatar--md`, `.avatar--lg`, `.avatar--xl`, `.avatar--2xl` - Sizes
- `.avatar--primary`, `.avatar--success`, etc. - Colors
- `.avatar__image`, `.avatar__initials`, `.avatar__icon` - Content types
- `.avatar__status` - Status indicator

### list
- `.list` - Base class
- `.list-item` - Item
- `.list-item__leading`, `.list-item__content`, `.list-item__trailing` - Sections
- `.list-item--active`, `.list-item--disabled` - States
- `.list-group` - Group with header

## ⚙️ Customization

### CSS Variables
iOS UI Kit uses CSS variables for easy customization:

```css
:root {
    --color-primary: #007aff;
    --color-success: #34c759;
    --color-warning: #ff9500;
    --color-danger: #ff3b30;
    
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-4: 16px;
}
```

Override in your CSS:
```css
:root {
    --color-primary: #0066cc;
}
```

### SCSS Customization
If using SCSS, import and customize variables before components:

```scss
// Override variables
$color-primary: #0066cc;
$spacing-4: 20px;

// Import iOS UI Kit
@import '~ios-ui-kit/src/index';
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari 12+
- Android Chrome 60+

## 📚 Resources

- [GitHub Repository](https://github.com/username/ios-ui-kit)
- [Component Examples](./examples)
- [Design System](./docs)
- [Contributing Guide](./CONTRIBUTING.md)

## ❓ FAQ

### Q: Can I use iOS UI Kit with a CSS preprocessor?
A: Yes! iOS UI Kit is built with SCSS and can be imported and customized in your SCSS files.

### Q: Do I need JavaScript for the components to work?
A: No, iOS UI Kit is pure CSS. JavaScript is optional for interactive features.

### Q: Can I modify the styles?
A: Yes, you can override styles by creating your own CSS files or using CSS variables.

### Q: Is iOS UI Kit responsive?
A: Yes, all components are responsive with mobile-first design principles.

### Q: What's the file size?
A: The minified CSS is approximately 61 KB (gzipped: ~15 KB).

## 📞 Support

For issues, bug reports, or feature requests, please visit the [GitHub Issues](https://github.com/username/ios-ui-kit/issues) page.

## 📄 License

MIT - See LICENSE file for details

---

**Version:** 1.0.0  
**Last Updated:** April 23, 2026

