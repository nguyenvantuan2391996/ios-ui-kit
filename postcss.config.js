/**
 * PostCSS Configuration — ios-ui-kit + Tailwind CSS
 *
 * Used by `postcss-cli` to process src/tailwind.css → dist/tailwind.css
 * The existing SCSS pipeline (sass CLI) is unaffected.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

