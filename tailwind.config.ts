import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#ceaa6a',
        'brand-dark-green': '#233224',
        'surface': '#fff8f3',
        'surface-container': '#f7ece1',
        'surface-container-high': '#f1e6dc',
        'surface-variant': '#ebe1d6',
        'on-surface': '#201b14',
        'on-surface-variant': '#5c403d',
        'ink': '#1a1a1a',
        'primary': '#82000d',
        'on-primary': '#ffffff',
        'primary-container': '#ae0116',
        'on-primary-container': '#ffb9b2',
        'outline-variant': '#e5bdba',
        'secondary-container': '#d3e5d0',
        'on-secondary-container': '#566756',
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '16px',
        'container-max': '1280px',
        'section-gap': '120px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      fontFamily: {
        display: ['Lora', 'serif'],
        headline: ['Lora', 'serif'],
        body: ['Geist', 'sans-serif'],
        label: ['Geist', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
