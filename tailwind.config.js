export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        13: '52px',
      },
    },
    fontSize: {
      xs: ['4px', '100%'],
      sm: ['8px', '100%'],
      md: ['12px', '100%'],
      base: ['14px', '100%'],
      lg: ['16px', '100%'],
      xl: ['18px', '100%'],
      '2xl': ['20px', '100%'],
      '3xl': ['24px', '100%'],
      '4xl': ['26px', '100%'],
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        dark: 'rgba(102, 102, 102, 1)',
        normal: 'rgba(102, 102, 102, 0.5)',
        light: 'rgba(204, 204, 204, 1)',
      },
      pink: '#FF006B',
      green: '#37B86B',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['contrast-more'],
      textColor: ['contrast-more'],
      borderColor: ['contrast-more'],
    },
  },
  // plugins: [
  //   plugin(function ({ addVariant }) {
  //     addVariant('contrast-more', '@media (prefers-contrast: more)');
  //   }),
  // ],
};
