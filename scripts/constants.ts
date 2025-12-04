export enum Themes {
  BrandLight = 'light',
  BrandDark = 'dark',
}

export const TOKENS_DIRECTORY = './tokens';
export const BUILD_DIRECTORY = './build';
export const TOKENS_BUILD_DIRECTORY = `${BUILD_DIRECTORY}/tokens`;
export const SCSS_BUILD_DIRECTORY = `${BUILD_DIRECTORY}/scss`;

export const CSS_BUILD_DIRECTORY = `${BUILD_DIRECTORY}/css`;
export const TS_BUILD_DIRECTORY = `${BUILD_DIRECTORY}/ts`;

export const CSS_TOKENS_FILE = `${CSS_BUILD_DIRECTORY}/brand.module.css`;
export const SCSS_MIXIN_THEME_FILE = `${SCSS_BUILD_DIRECTORY}/brand.scss`;
export const TS_TOKENS_FILE = `${TS_BUILD_DIRECTORY}/styles-theme-variables.ts`;
