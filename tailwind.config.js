/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ffff',
          hover: '#33ffff',
        },
        secondary: {
          DEFAULT: '#ff00ff',
          hover: '#ff33ff',
        },
        accent: {
          DEFAULT: '#50fa7b',
          hover: '#69ff92',
        },
        dark: {
          DEFAULT: '#1a1033',
          lighter: '#2d1b69',
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #2d1b69 0%, #1a1033 100%)',
        'neon-gradient': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
      },
    },
  },
  plugins: [],
};