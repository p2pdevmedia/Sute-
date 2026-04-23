import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f2e9',
        sand: '#e9decf',
        espresso: '#2b221c',
        clay: '#b47a4d',
        olive: '#5f6444'
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(43,34,28,0.45)'
      }
    }
  },
  plugins: []
};

export default config;
