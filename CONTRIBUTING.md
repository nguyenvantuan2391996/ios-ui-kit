# Contributing to iOS UI Kit

Thank you for your interest in contributing to iOS UI Kit! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

Please be respectful and constructive in all interactions with other contributors and maintainers.

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn
- Git
- Basic knowledge of SCSS and CSS
- Understanding of iOS design principles

### Setup Development Environment

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ios-ui-kit.git
   cd ios-ui-kit
   ```

3. **Install Sass Compiler**
   ```bash
   # macOS
   brew install dart-sass
   
   # Windows (using Chocolatey)
   choco install sass
   
   # Or use npm
   npm install -g sass
   ```

4. **Compile SCSS to CSS**
   ```bash
   # Watch mode (auto-compile on changes)
   sass --watch src:dist
   
   # Single compilation
   sass src/index.scss dist/ios-ui-kit.css
   sass --style=compressed src/index.scss dist/ios-ui-kit.min.css
   ```

## 🎯 Types of Contributions

### 1. Bug Reports
- **Before submitting:** Check the [GitHub Issues](https://github.com/username/ios-ui-kit/issues) to avoid duplicates
- **Include:** Steps to reproduce, expected behavior, actual behavior, screenshots
- **Title:** Be descriptive (e.g., "Button hover state not working in Firefox")

### 2. Feature Requests
- **Before submitting:** Check if the feature has been requested
- **Include:** Use case, expected behavior, why it's useful
- **Title:** Clear and concise (e.g., "Add dark mode support")

### 3. Documentation Improvements
- Fix typos and grammatical errors
- Improve clarity and examples
- Add missing information
- Update outdated information

### 4. Code Contributions

## 📝 Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/new-component
# or
git checkout -b fix/component-bug
```

### 2. Make Your Changes

#### For New Components
```
src/components/your-component/
├── your-component.scss
└── README.md (optional)
```

**Component Structure:**
```scss
// iOS UI Kit - Your Component
// Brief description

// ============================================
// Component Base Styles
// ============================================

.your-component {
  // Properties organized by category (layout, typography, colors)
}

// ============================================
// Component Variants
// ============================================

.your-component--variant {
  // Variant styles
}

// ============================================
// Component States
// ============================================

.your-component--active {
  // State styles
}
```

#### For Utilities
```scss
// iOS UI Kit - Utility Name
// Description

// ============================================
// Utility Category
// ============================================

.utility-name {
  property: value;
}
```

### 3. Follow Code Style Guidelines

**SCSS Style:**
- 2-space indentation
- Camel-case for mixin names
- Kebab-case for class names
- Comments with `// ` for single-line comments
- Organized sections with SCSS comments
- Use variables for colors, spacing, and other design tokens

**Example:**
```scss
// ============================================
// Button Primary Variant
// ============================================

.btn--primary {
  background-color: $color-primary;
  color: $color-white;
  
  &:hover {
    background-color: $color-primary-dark;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
```

### 4. Update Component Index
If adding a new component, add it to `src/components/_index.scss`:

```scss
@import 'your-component/your-component';
```

If adding utilities, add them to `src/utils/index.scss`:

```scss
@import 'your-utility';
```

### 5. Create/Update Demo
Add or update demo in `examples/`:
```html
<!-- examples/index-phase-x.html -->
<div class="component-demo">
    <!-- Your component demo -->
</div>
```

### 6. Compile CSS
```bash
sass src/index.scss dist/ios-ui-kit.css
sass --style=compressed src/index.scss dist/ios-ui-kit.min.css
```

### 7. Test Your Changes
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Verify responsive behavior
- Check for accessibility issues
- Validate CSS syntax

### 8. Commit Your Changes
```bash
git add .
git commit -m "feat: add new component or description

- Detailed description of changes
- Reference to issue if applicable (#123)
"
```

**Commit Message Format:**
```
type(scope): subject

body

footer
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`
**Scope:** `button`, `input`, `utilities`, etc.
**Subject:** Lowercase, no period, imperative mood

**Examples:**
- `feat(button): add outlined variant`
- `fix(card): resolve shadow issue in Safari`
- `docs: update installation guide`

### 9. Push to Your Fork
```bash
git push origin feature/new-component
```

### 10. Create a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill in the PR template
- Link to related issues
- Request review from maintainers

## 📋 Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Documentation update
- [ ] Style improvement

## Related Issues
Closes #(issue number)

## Screenshots (if applicable)
Add screenshots for UI changes

## Testing Done
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Verified responsiveness

## Checklist
- [ ] Code follows style guidelines
- [ ] SCSS properly formatted
- [ ] Demo page updated
- [ ] Component index updated
- [ ] CSS compiled
- [ ] No console errors
```

## 🎨 Design Guidelines

### iOS-Style Design Principles
1. **Minimalist Aesthetic**
   - Clean, simple designs
   - Generous whitespace
   - Subtle visual hierarchy

2. **Subtle Shadows & Depth**
   - Use shadow system: `$card-shadow-xs` to `$card-shadow-2xl`
   - Keep shadows subtle and iOS-like

3. **Smooth Transitions**
   - Use `transition: all 0.2s ease` for interactions
   - Avoid abrupt changes

4. **Responsive Design**
   - Mobile-first approach
   - Support all breakpoints
   - Test on various screen sizes

### Color Usage
- Use colors from `$color-*` variables
- Maintain consistent color palette
- Consider contrast and accessibility

### Spacing
- Use spacing scale: `$spacing-1` (4px) to `$spacing-20` (80px)
- Maintain visual rhythm
- Consistent padding/margins across components

## 🧪 Testing Guidelines

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667)

### Responsive Testing
- Test all breakpoints
- Verify touch targets are 44px minimum
- Check text readability

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast (WCAG AA minimum)
- Focus indicators

## 📚 Documentation

### Component Documentation
If creating a new component, provide:
- Description
- Usage examples
- Available variants
- Size/color options
- States (hover, active, disabled)
- Responsive behavior

### Example:
```markdown
# Button Component

## Overview
The button component provides clickable actions with various styles and states.

## Usage
\`\`\`html
<button class="btn btn--primary">Click me</button>
\`\`\`

## Variants
- `.btn--primary` - Primary button
- `.btn--secondary` - Secondary button
- `.btn--outlined` - Outlined button

## Sizes
- `.btn--sm` - Small (14px)
- `.btn--md` - Medium (16px)
- `.btn--lg` - Large (18px)

## States
- `:hover` - Hover state
- `:active` - Active/pressed state
- `:disabled` - Disabled state
```

## 🐛 Reporting Issues

### Issue Template
```markdown
## Description
What's the issue?

## Steps to Reproduce
1.
2.
3.

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Screenshots
If applicable

## Environment
- Browser: 
- OS: 
- iOS UI Kit version:
```

## 💡 Development Tips

### Useful Commands
```bash
# Watch for SCSS changes
sass --watch src:dist

# Compile to minified CSS
sass --style=compressed src/index.scss dist/ios-ui-kit.min.css

# Check file sizes
ls -lh dist/

# Count CSS classes
grep -o '\.[a-zA-Z-]*' dist/ios-ui-kit.css | sort | uniq | wc -l
```

### Project Structure
```
src/
├── index.scss              # Main entry
├── variables/              # Design tokens
│   ├── colors.scss
│   ├── spacing.scss
│   ├── typography.scss
│   └── shadows.scss
├── base/                   # Reset & global
│   ├── reset.scss
│   └── global.scss
├── components/             # UI components
│   ├── button/
│   ├── input/
│   └── ...
└── utils/                  # Utility classes
    ├── spacing.scss
    ├── typography.scss
    └── colors.scss
```

## 📞 Getting Help

- Review existing issues and PRs
- Check the [Documentation](./INSTALLATION.md)
- Ask in GitHub Discussions
- Contact maintainers for complex questions

## 🎓 Learning Resources

- [iOS Design Guidelines](https://developer.apple.com/design/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

By contributing to iOS UI Kit, you agree your contributions are licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to iOS UI Kit! Your efforts help make web development easier for everyone.

---

**Happy Contributing! 🚀**

