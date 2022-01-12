module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      logo: ['"Swanky and Moo Moo"', 'cursive'],
      timer: ['"Swanky and Moo Moo"', 'cursive'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      white: '#ffffff',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tomato: 'var(--color-bg-tomato)',
        tortoise: 'var(--color-bg-tortoise)',
        pink: 'var(--color-bg-pink)',
        burgundy: 'var(--color-bg-burgundy)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tomato: 'var(--color-text-tomato)',
        tortoise: 'var(--color-bg-tortoise)',
        pink: 'var(--color-bg-pink)',
        ivory: 'var(--color-text-ivory)',
      },
      borderColor: {
        tomato: 'var(--color-text-tomato)',
        tortoise: 'var(--color-bg-tortoise)',
        pink: 'var(--color-bg-pink)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
