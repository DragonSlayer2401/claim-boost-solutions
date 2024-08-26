/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px', // Extra small devices (portrait phones)
        sm: '576px', // Small devices (landscape phones)
        md: '768px', // Medium devices (tablets)
        lg: '992px', // Large devices (desktops)
        xl: '1200px', // Extra large devices (large desktops)
        xxl: '1400px', // Extra extra large devices (larger desktops)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
