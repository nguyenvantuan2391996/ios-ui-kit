# 📦 iOS UI Kit - Build Commands

This document outlines all available build commands for the iOS UI Kit project.

## Quick Start

### Prerequisites
```bash
# Install Node.js (if not already installed)
# Dart Sass is available globally on macOS
```

### Available Commands

#### 1. **Build Uncompressed CSS**
```bash
npm run build
# or
sass src/index.scss dist/ios-ui-kit.css
```
**Output:** `dist/ios-ui-kit.css` (147 KB)  
**Use Case:** Development, debugging with full source maps

#### 2. **Build Minified CSS** ⭐
```bash
npm run build:min
# or
sass --style=compressed src/index.scss dist/ios-ui-kit.min.css
```
**Output:** `dist/ios-ui-kit.min.css` (116 KB - 21% reduction)  
**Use Case:** Production deployment, NPM distribution

#### 3. **Build Both Versions** (Recommended) 🚀
```bash
npm run build:all
# or
sass --style=compressed src/index.scss dist/ios-ui-kit.min.css && sass src/index.scss dist/ios-ui-kit.css
```
**Output:** 
- `dist/ios-ui-kit.css` (development)
- `dist/ios-ui-kit.min.css` (production)
- Source maps for both

#### 4. **Watch Mode** (Auto-rebuild on changes)
```bash
npm run watch
# or
sass --watch src:dist
```
**Use Case:** Development - automatically rebuilds CSS when SCSS files change

## Build Output Details

### File Structure
```
dist/
├── ios-ui-kit.css          (147 KB - Development version)
├── ios-ui-kit.css.map      (47 KB - Source map)
├── ios-ui-kit.min.css      (116 KB - Production version)
└── ios-ui-kit.min.css.map  (44 KB - Source map)
```

### What Gets Compiled
```
src/index.scss
├── variables/
│   ├── colors.scss
│   ├── spacing.scss
│   ├── typography.scss
│   └── shadows.scss
├── base/
│   ├── reset.scss
│   └── global.scss
├── components/
│   ├── _index.scss (imports all 31 components)
│   ├── button/
│   ├── input/
│   ├── card/
│   ├── badge/
│   ├── alert/
│   ├── modal/
│   ├── tabs/
│   ├── checkbox/
│   ├── radio/
│   ├── toggle/
│   ├── segmented-control/
│   ├── select/
│   ├── spinner/
│   ├── avatar/
│   ├── navbar/
│   ├── list/
│   ├── space/
│   ├── row/
│   ├── col/
│   ├── icon/
│   ├── layout/
│   ├── app/
│   ├── tag/
│   ├── empty/
│   ├── skeleton/
│   ├── breadcrumb/
│   ├── tooltip/
│   ├── popover/
│   ├── drawer/
│   ├── result/
│   └── notification/
└── utils/
    ├── colors.scss
    ├── spacing.scss
    └── typography.scss
```

## Usage in Your Project

### Option 1: Link Uncompressed (Development)
```html
<link rel="stylesheet" href="node_modules/ios-ui-kit/dist/ios-ui-kit.css">
```

### Option 2: Link Minified (Production) ⭐ Recommended
```html
<link rel="stylesheet" href="node_modules/ios-ui-kit/dist/ios-ui-kit.min.css">
```

### Option 3: Import in SCSS
```scss
@import 'ios-ui-kit/src/index.scss';
```

## Performance Metrics

| Metric | Uncompressed | Minified | Savings |
|--------|-------------|----------|---------|
| Size | 147 KB | 116 KB | -21% |
| Gzip | ~35 KB | ~28 KB | -20% |
| Lines | 5,847 | 1 | 99.98% |

## Troubleshooting

### Command not found: sass
**Solution 1:** Install Sass globally
```bash
brew install sass/sass/sass
```

**Solution 2:** Use npm script instead
```bash
npm run build
```

### npm: command not found
**Solution:** Use direct Sass compiler
```bash
sass src/index.scss dist/ios-ui-kit.css
```

### Deprecation Warnings
The project currently uses deprecated Sass syntax (e.g., `@import`). This is expected and will be fixed in a future version with `@use` statements.

## CI/CD Integration

### GitHub Actions Example
```yaml
- name: Build CSS
  run: npm run build:all
  
- name: Verify Output
  run: ls -lh dist/
```

### Pre-commit Hook
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
npm run build:all
git add dist/ios-ui-kit.css dist/ios-ui-kit.min.css
```

## Component Statistics

- **Total Components:** 31
- **CSS Classes:** 1,504+ responsive selectors
- **Responsive Breakpoints:** 6 (xs, sm, md, lg, xl, xxl)
- **Color Variables:** 24 primary colors
- **Spacing Levels:** 5 (sm, md, lg, xl, 2xl)
- **Typography Scales:** 6 (xs to 2xl)

## Next Steps

1. ✅ **Build & Test**
   ```bash
   npm run build:all
   ```

2. ✅ **Use in Development**
   ```html
   <link rel="stylesheet" href="dist/ios-ui-kit.css">
   ```

3. ✅ **Deploy to Production**
   ```html
   <link rel="stylesheet" href="dist/ios-ui-kit.min.css">
   ```

4. ✅ **Publish to NPM**
   ```bash
   npm publish
   ```

---

**Last Updated:** April 25, 2026  
**Version:** 1.0.0  
**Maintainer:** Nguyễn Văn Tuấn

