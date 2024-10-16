import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: ['./src/**/*.{ts,tsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      border: '#F5F5F7',
      input: '#F5F5F7',
      ring: '#546FFF',
      background: '#FFFFFF',
      foreground: '#141522',
      primary: {
        DEFAULT: '#546FFF',
        foreground: '#FFFFFF',
        900: '#10197A',
        800: '#1A2793',
        700: '#2A3BB7',
        600: '#3D53DB',
        500: '#546FFF',
        400: '#9F84FD',
        300: '#98ABFF',
        200: '#BAC8FF',
        100: '#DCE4FF',
      },
      secondary: {
        DEFAULT: '#141522',
        foreground: '#FFFFFF',
        900: '#040815',
        800: '#060713',
        700: '#0A0A18',
        600: '#0E0F1D',
        500: '#141522',
        400: '#54577A',
        300: '#8E92BC',
        200: '#C2C6E8',
        100: '#DFE1F3',
      },
      destructive: {
        DEFAULT: '#FF4D5E',
        foreground: '#FFFFFF',
      },
      muted: {
        DEFAULT: '#F5F5F7',
        foreground: '#141522',
      },
      accent: {
        DEFAULT: '#F5F5F7',
        foreground: '#141522',
      },
      popover: {
        DEFAULT: '#FFFFFF',
        foreground: '#141522',
      },
      card: {
        DEFAULT: '#FFFFFF',
        foreground: '#141522',
      },
    },
    extend: {
      borderRadius: {
        xl: '20px',
        lg: '16px',
        md: '10px',
        sm: '5px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [animate],
};
