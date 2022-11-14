/** @type {import('tailwindcss').Config} */

function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue
      ? `rgba(var(${cssVariable}), ${opacityValue})`
      : `rgb(var(${cssVariable}))`
  }
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f8f8',
        black: '#151419',
        primary: withOpacity('--color-primary'),
        'primary-dark': withOpacity('--color-primaryDark'),
        gradientTo: withOpacity('--color-gradientTo'),
        grey: '#989898'
      },
      fontSize: {
        '2xs': '.625rem', // 10px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '2.5rem', // 40px
        '6xl': '3rem', // 48px
        '7xl': ' 3.75rem', // 60px
        '8xl': '5rem' // 80px
      },
      // Font family
      fontFamily: {
        logo: ['Birthstone'],
        'logo-first-letter': ['Bilbo Swash Caps']
      }
    }
  },
  plugins: []
}
