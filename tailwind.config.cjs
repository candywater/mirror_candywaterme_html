const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [
    './src/**/*.{svelte,ts}',
    './src/**/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
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
