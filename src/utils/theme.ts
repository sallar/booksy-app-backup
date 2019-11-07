import { light as lightMap, dark as darkMap } from '@eva-design/eva';

interface ThemeType {
  [key: string]: string;
}

const processTheme = (theme: ThemeType) => {
  return Object.fromEntries(
    Object.entries(theme).map(([key, value]) => {
      if (value.startsWith('$')) {
        value = theme[value.replace(/^\$/, '')];
      }
      return [key, value];
    })
  );
};

export const dark = processTheme(darkMap);
export const light = processTheme(lightMap);
export const themes = { dark, light };

export const getThemeColor = (theme: string, key: string) => themes[theme][key];
