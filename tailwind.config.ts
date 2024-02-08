import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'card-height': '238px',
        'inner-card-height': '156px',
      },
      maxWidth: {
        'card-width': '230px',
      },
      colors: {
        'pastel-purple-grey': '#5D608F',
        'purple-navy-blue': '#3E3E82',
        'light-pastel-purple': '#9EA0CA',
        'pastel-purple': '#686299',
        'light-purple': '#E5E6FA',
        'purple-grey': '#535572',
        'grey-purple-white': '#F5F5F9',
        'light-purple-grey': '#9798AD',
        'dark-navy-blue': '#31374A',
        'neon-blue': '#56DEE7',
        'purple-pink': '#C671E3',
        'greyish-blue': '#9595B4',
        'light-navy': '#0CA1CF',
        'corn-flower-blue': '#6B71FF',
        'light-orange': '#FFA06B',
        'neon-pink': '#FF6BDE',
        'blue-pastel': '#6BAFFF',
        'dark-pastel-green': '#03C03C',
        'rusty-red': '#DA2C43',
        'chili-red': '#F25656',
        'sea-green': '#00FFCC',
        'pink-pastel': '#FC8686',
        'dark-black': '#01030D',
        'neon-purple': '#6821FF',
        'beacon-gray': '#D1D2E0',
        'lime-green': '#00FF47',
        'light-greyish-blue': '#DDDDE4',
        'soft-violet': '#9B51E0',
        'mostly-white': '#FCFCFF',
        'light-greyish': '#ECEDF2',
        'white-grey-bluish': '#F7F7F9',
        'silver-sand': '#BBBCCC',
        'light-slate-grey': '#76799B',
        'pastel-green': '#05AE8C',
        'east-bay': '#545673',
        'vivid-orange': '#FF6007',
        'vivid-magenta': '#EE05E5',
        gainsboro: '#D9DBE3',
        comet: '#65687B',
        amethyst: '#985EE1',
        'ghost-white': '#F8F8FB',
        'light-blue': '#F2F2F8',
        'light-red': '#F25E5E',
        'ocean-green': '#00FFCE',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
