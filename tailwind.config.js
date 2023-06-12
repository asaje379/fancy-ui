/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#FFFFFF',
          50: 'F5F5F5',
          100: '#ECECEC',
          200: '#D8D8D8',
          300: '#C5C5C5',
          400: '#B1B1B1',
          500: '#9E9E9E',
          600: '#7E7E7E',
          700: '#5F5F5F',
          800: '#3F3F3F',
          900: '#202020',
        },
        primary: {
          default: '#3B25A9',
          outlined: '#F7F5FF',
          border: '#BCB0F5',
          hover: '#3B1AD9',
          pressed: '#230F80',
          focus: '#E7E2FF',
        },
        danger: {
          default: '#A92525',
          outlined: '#EED3D3',
          border: '#E2B6B6',
          hover: '#8D1F1F',
          pressed: '#541212',
          focus: '#D49292',
        },
        warning: {
          default: '#D9B020',
          outlined: '#F7EFD2',
          border: '#F2E5B5',
          hover: '#B5931B',
          pressed: '#6C5810',
          focus: '#ECD78F',
        },
        success: {
          default: '#006637',
          outlined: '#CCE0D7',
          border: '#AACCBC',
          hover: '#00552E',
          pressed: '#00331B',
          focus: '#80B29B',
        },
        info: {
          default: '#0350C1',
          outlined: '#CDDCF3',
          border: '#ABC5EA',
          hover: '#0243A1',
          pressed: '#012860',
          focus: '#81A7E0',
        },
      },
    },
  },
  plugins: [],
};
