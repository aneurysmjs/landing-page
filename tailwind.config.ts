import type { Config } from 'tailwindcss';
import tailwindCssForms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		fontFamily: {
  			'tt-norms': 'var(--font-tt-norms)',
  			'tt-norms-bold': 'var(--font-tt-norms-bold)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [tailwindCssForms, require("tailwindcss-animate")],
};

export default config;
