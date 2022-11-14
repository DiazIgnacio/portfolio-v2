/** @type {import('tailwindcss').Config} */

const blueTheme = {
  primary: '#0099FF',
  gradientTo: '#0074C2',
  primaryDark: '#007CCE'
}

const greenTheme = {
  primary: '#00CC99',
  gradientTo: '#00A86B',
  primaryDark: '#009966'
}

const redTheme = {
  primary: '#FF6666',
  gradientTo: '#CC3333',
  primaryDark: '#CC0000'
}

const customColors = {
  ...blueTheme
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f8f8',
        black: '#151419',
        primary: customColors.primary,
        'primary-dark': customColors.primaryDark,
        gradientTo: customColors.gradientTo,
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
      },
      // Gradient
      backgroundImage: {
        'gradient-to-t': `linear-gradient(to top, ${customColors.gradientTo}, ${customColors.primary})`, // Primary
        'gradient-to-r': `linear-gradient(to right, ${customColors.primary}, ${customColors.gradientTo})` // Primary
      }
    }
  },
  plugins: []
}
