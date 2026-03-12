const defaultTheme = require('tailwindcss/defaultTheme')
const daisyui = require('daisyui')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/components/**/*.html.erb',
    './app/controllers/**/*.rb',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        starter_light: {
          "primary":          "#6366f1",
          "primary-content":  "#ffffff",
          "secondary":        "#8b5cf6",
          "secondary-content": "#ffffff",
          "accent":           "#06b6d4",
          "accent-content":   "#ffffff",
          "neutral":          "#1f2937",
          "neutral-content":  "#ffffff",
          "base-100":         "#ffffff",
          "base-200":         "#f9fafb",
          "base-300":         "#f3f4f6",
          "base-content":     "#1f2937",
          "info":             "#3b82f6",
          "success":          "#22c55e",
          "warning":          "#f59e0b",
          "error":            "#ef4444",
        },
      },
      {
        starter_dark: {
          "primary":          "#6366f1",
          "primary-content":  "#ffffff",
          "secondary":        "#8b5cf6",
          "secondary-content": "#ffffff",
          "accent":           "#06b6d4",
          "accent-content":   "#ffffff",
          "neutral":          "#374151",
          "neutral-content":  "#ffffff",
          "base-100":         "#1f2937",
          "base-200":         "#111827",
          "base-300":         "#0f172a",
          "base-content":     "#f9fafb",
          "info":             "#3b82f6",
          "success":          "#22c55e",
          "warning":          "#f59e0b",
          "error":            "#ef4444",
        },
      },
    ],
    darkTheme: "starter_dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
