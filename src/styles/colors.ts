const light = {
  inactiveButtonColor: '#777',
  buttonColor: '#000',
  backgroundColor: '#fff',
};

type ThemeColors = typeof light;

const dark: ThemeColors = {
  inactiveButtonColor: '#ccc',
  buttonColor: '#fff',
  backgroundColor: '#000',
};

const themes = {
  light,
  dark,
};

export const getThemeColors = (colorScheme: 'dark' | 'light'): ThemeColors =>
  themes[colorScheme];
