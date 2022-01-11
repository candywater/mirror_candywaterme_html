const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: [
      './src/**/*.{svelte,ts}',
      './src/**/*.html',
    ],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
