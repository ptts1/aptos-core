const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/components/**/*.{rb,erb}',
    './app/helpers/**/*.rb',
    './app/form_builders/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        'neutral': {
          ...defaultTheme.colors.neutral,
          '700': '#393939',
          '800': '#212121',
          '900': '#171717',
        },
        teal: {
          50: '#eafff7',
          100: '#cbffeb',
          200: '#9cfedc',
          300: '#5df8cc',
          400: '#1de9b6',
          500: '#00d0a1',
          600: '#00a380',
          700: '#008068',
          800: '#005c4b',
          900: '#002e26',
        },
      },
      fontFamily: {
        'sans': ['apparat', ...defaultTheme.fontFamily.sans],
        'mono': ['lft-etica-mono', ...defaultTheme.fontFamily.mono],
        'display': ['apparat-semicond', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
