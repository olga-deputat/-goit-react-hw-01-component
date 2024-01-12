export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    gray: '#9e9e9e',
    grey: '#ebedf0',
    light: '#f2f2f2',
    dark: '#212121',
    secondarydark: '#a4a6a8',
    secondarylighter: '#f1f2f5',
    secondarylightest: '#f5f6f8',
    infolight: '#6ecfef',
  },
  spacing: value => `${value * 4}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #eef9fd',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
});
