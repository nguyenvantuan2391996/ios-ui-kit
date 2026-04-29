/**
 * ios-ui-kit — Tailwind CSS v3 Configuration
 *
 * Strategy
 * ─────────
 * • prefix: "tw-"   → every utility becomes e.g. tw-flex, tw-px-4
 *                     so NO existing .btn/.card/etc. class is ever shadowed
 * • corePlugins.preflight: false  → we keep the iOS kit's own reset intact
 * • The extend section mirrors every iOS design token so utilities
 *   feel native, not generic
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ─── Prefix ────────────────────────────────────────────────────────────────
  // All Tailwind utilities are prefixed with "tw-" to guarantee zero collisions
  // with the ios-ui-kit class names.
  prefix: "tw-",

  // ─── Content ────────────────────────────────────────────────────────────────
  content: [
    "./examples/**/*.{html,js}",
    "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
    // add your app source if consuming the kit:
    // "./app/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
  ],

  // ─── Disable Preflight ───────────────────────────────────────────────────────
  // The iOS kit already ships a carefully tuned CSS reset (base/reset.scss).
  // Enabling Tailwind's Preflight on top would create double-reset conflicts.
  corePlugins: {
    preflight: false,
  },

  // ─── Theme ──────────────────────────────────────────────────────────────────
  theme: {
    // ── Screens / Breakpoints (iOS device widths) ─────────────────────────────
    screens: {
      xs:  "320px",  // iPhone SE
      sm:  "390px",  // iPhone 14
      md:  "768px",  // iPad portrait
      lg:  "1024px", // iPad landscape
      xl:  "1280px",
      "2xl": "1536px",
    },

    // ── Colors ─────────────────────────────────────────────────────────────────
    // Mapped from src/variables/colors.scss + iOS HIG
    // CSS-var references keep the values live in dark-mode automatically.
    colors: {
      transparent: "transparent",
      current:     "currentColor",

      // System tints
      blue:    "var(--ios-blue)",
      green:   "var(--ios-green)",
      red:     "var(--ios-red)",
      orange:  "var(--ios-orange)",
      yellow:  "var(--ios-yellow)",
      teal:    "var(--ios-teal)",
      indigo:  "var(--ios-indigo)",
      purple:  "var(--ios-purple)",
      pink:    "var(--ios-pink)",

      // Gray family
      gray: {
        DEFAULT: "var(--ios-gray)",    // #8E8E93
        50:  "#F9F9FB",
        100: "var(--ios-gray6)",       // #F2F2F7
        200: "var(--ios-gray5)",       // #E5E5EA
        300: "var(--ios-gray4)",       // #D1D1D6
        400: "var(--ios-gray3)",       // #C7C7CC
        500: "var(--ios-gray2)",       // #AEAEB2
        600: "var(--ios-gray)",        // #8E8E93
        700: "#636366",
        800: "var(--ios-gray4)",
        900: "var(--ios-gray6)",
      },

      // Semantic
      white:   "var(--ios-system-bg)",
      black:   "var(--ios-label)",

      // Backgrounds
      "bg-primary":   "var(--ios-system-bg)",
      "bg-secondary": "var(--ios-secondary-system-bg)",
      "bg-grouped":   "var(--ios-grouped-bg)",

      // Fills
      "fill-system":    "var(--ios-system-fill)",
      "fill-secondary": "var(--ios-secondary-fill)",
      "fill-tertiary":  "var(--ios-tertiary-fill)",

      // Separators
      separator:        "var(--ios-separator)",
      "separator-solid":"var(--ios-opaque-separator)",

      // Labels / text
      label:              "var(--ios-label)",
      "label-secondary":  "var(--ios-secondary-label)",
      "label-tertiary":   "var(--ios-tertiary-label)",
      "label-quaternary": "var(--ios-quaternary-label)",
      placeholder:        "var(--ios-placeholder-text)",
      link:               "var(--ios-link)",

      // Overlays
      "overlay-thin":   "var(--ios-overlay-thin,   rgba(0,0,0,.06))",
      "overlay-medium": "var(--ios-overlay-medium, rgba(0,0,0,.30))",
      "overlay-thick":  "var(--ios-overlay-thick,  rgba(0,0,0,.50))",
    },

    // ── Spacing (iOS 4pt grid) ─────────────────────────────────────────────────
    // Keeps parity with $spacing-* SCSS tokens so tw-p-4 == $spacing-4 == 16px
    spacing: {
      px:    "1px",
      "0":   "0",
      "0.5": "2px",    // $spacing-0-5
      "1":   "4px",    // $spacing-1
      "2":   "8px",    // $spacing-2
      "3":   "12px",   // $spacing-3
      "4":   "16px",   // $spacing-4  — standard iOS margin
      "5":   "20px",   // $spacing-5
      "6":   "24px",   // $spacing-6
      "7":   "28px",   // $spacing-7
      "8":   "32px",   // $spacing-8
      "9":   "36px",   // $spacing-9
      "10":  "40px",   // $spacing-10
      "11":  "44px",   // $spacing-11 — iOS touch target
      "12":  "48px",   // $spacing-12
      "14":  "56px",   // $spacing-14
      "16":  "64px",   // $spacing-16
      "20":  "80px",
      "24":  "96px",
      "28":  "112px",
      "32":  "128px",
      // larger jumps
      "36":  "144px",
      "40":  "160px",
      "48":  "192px",
      "56":  "224px",
      "64":  "256px",
      // fractions still useful
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.667%",
      "1/4": "25%",
      "3/4": "75%",
      full:  "100%",
    },

    // ── Border Radius ──────────────────────────────────────────────────────────
    borderRadius: {
      none:    "0",
      xs:      "4px",   // $border-radius-xs
      sm:      "6px",   // $border-radius-sm
      DEFAULT: "10px",  // $border-radius-md — iOS controls
      md:      "10px",
      lg:      "12px",  // $border-radius-lg — cards
      xl:      "16px",  // $border-radius-xl
      "2xl":   "20px",  // $border-radius-2xl — action sheets
      "3xl":   "28px",  // $border-radius-3xl — large rounded cards
      full:    "9999px", // capsule / pill
    },

    // ── Box Shadow ─────────────────────────────────────────────────────────────
    boxShadow: {
      none:      "none",
      hairline:  "0 0 0 0.5px rgba(0,0,0,.12)",
      xs:        "0 1px 3px rgba(0,0,0,.08)",
      sm:        "0 1px 3px rgba(0,0,0,.10), 0 1px 2px rgba(0,0,0,.06)",
      DEFAULT:   "0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04)",
      md:        "0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04)",
      lg:        "0 10px 30px rgba(0,0,0,.12), 0 4px 10px rgba(0,0,0,.06)",
      xl:        "0 20px 40px rgba(0,0,0,.14), 0 10px 20px rgba(0,0,0,.08)",
      "2xl":     "0 30px 60px rgba(0,0,0,.18), 0 15px 30px rgba(0,0,0,.10)",
      // focus ring — matches iOS input focus style
      "focus-ring": "0 0 0 4px rgba(0,122,255,.15)",
      // segmented thumb
      thumb:     "0 3px 8px rgba(0,0,0,.12), 0 3px 1px rgba(0,0,0,.04)",
    },

    // ── Typography ─────────────────────────────────────────────────────────────
    fontFamily: {
      sans:    ["-apple-system", "BlinkMacSystemFont", "'SF Pro Text'", "'SF Pro Display'", "'Helvetica Neue'", "sans-serif"],
      rounded: ["-apple-system", "'SF Pro Rounded'", "'Helvetica Neue'", "sans-serif"],
      mono:    ["'SF Mono'", "ui-monospace", "'Cascadia Code'", "Menlo", "Monaco", "Consolas", "'Courier New'", "monospace"],
    },

    fontSize: {
      // iOS HIG exact sizes (1pt = 1px on 1× screen)
      "caption2":    ["11px", { lineHeight: "1.36" }],
      "caption1":    ["12px", { lineHeight: "1.33" }],
      "footnote":    ["13px", { lineHeight: "1.38" }],
      "subhead":     ["15px", { lineHeight: "1.33" }],
      "callout":     ["16px", { lineHeight: "1.31" }],
      "body":        ["17px", { lineHeight: "1.29" }],
      "headline":    ["17px", { lineHeight: "1.29", fontWeight: "600" }],
      "title3":      ["20px", { lineHeight: "1.30" }],
      "title2":      ["22px", { lineHeight: "1.27" }],
      "title1":      ["28px", { lineHeight: "1.21" }],
      "large-title": ["34px", { lineHeight: "1.21", fontWeight: "700" }],
      // generic aliases still available
      xs:   ["12px", { lineHeight: "1.33" }],
      sm:   ["13px", { lineHeight: "1.38" }],
      base: ["17px", { lineHeight: "1.29" }],
      lg:   ["20px", { lineHeight: "1.30" }],
      xl:   ["22px", { lineHeight: "1.27" }],
      "2xl":["28px", { lineHeight: "1.21" }],
      "3xl":["34px", { lineHeight: "1.21" }],
      "4xl":["40px", { lineHeight: "1.15" }],
    },

    fontWeight: {
      light:     "300",
      normal:    "400",
      medium:    "500",
      semibold:  "600",
      bold:      "700",
      extrabold: "800",
      heavy:     "900",
    },

    lineHeight: {
      tight:   "1.2",
      normal:  "1.29",
      relaxed: "1.4",
      loose:   "1.6",
    },

    letterSpacing: {
      tight:  "-0.5px",
      normal: "0",
      wide:   "0.5px",
      wider:  "1px",
    },

    // ── Z-Index ────────────────────────────────────────────────────────────────
    zIndex: {
      auto:       "auto",
      "0":        "0",
      "10":       "10",
      "20":       "20",
      "30":       "30",
      dropdown:   "1000",
      sticky:     "1020",
      fixed:      "1030",
      "modal-bg": "1040",
      modal:      "1050",
      popover:    "1060",
      tooltip:    "1070",
      notification: "1080",
    },

    extend: {
      // Component heights
      height: {
        "navbar":      "44px",
        "tab-bar":     "49px",
        "status-bar":  "44px",
        "touch":       "44px",
        "touch-large": "50px",
      },
      minHeight: {
        "touch": "44px",
      },
      minWidth: {
        "touch": "44px",
      },
      maxWidth: {
        container: "1200px",
      },
      // Icon sizes
      width: {
        "icon-xs": "12px",
        "icon-sm": "16px",
        "icon-md": "22px",
        "icon-lg": "28px",
        "icon-xl": "44px",
      },
      // Transition defaults matching iOS spring feel
      transitionDuration: {
        DEFAULT: "200ms",
        fast:    "100ms",
        normal:  "200ms",
        slow:    "350ms",
      },
      transitionTimingFunction: {
        "ios":         "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ios-in":      "cubic-bezier(0.42, 0, 1.0, 1.0)",
        "ios-out":     "cubic-bezier(0.0, 0.0, 0.58, 1.0)",
        "ios-spring":  "cubic-bezier(0.34, 1.56, 0.64, 1.0)",
      },
      // Blur values for frosted-glass / vibrancy effects
      backdropBlur: {
        none:  "0",
        sm:    "8px",
        DEFAULT: "16px",
        md:    "20px",
        lg:    "32px",
        "vibrancy": "40px",
      },
    },
  },

  plugins: [],
};

