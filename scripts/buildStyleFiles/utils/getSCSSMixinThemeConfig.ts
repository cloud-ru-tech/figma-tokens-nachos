import StyleDictionaryPackage from 'style-dictionary';

import { SCSS_BUILD_DIRECTORY, Themes, TOKENS_BUILD_DIRECTORY } from '../../constants';
import { FormatName, PLATFORM, TransformName } from '../constants';

export function getSCSSMixinThemeConfig(theme: Themes) {
  return {
    source: [`${TOKENS_BUILD_DIRECTORY}/themes/tokens-${theme}.json`],
    platforms: {
      [PLATFORM]: {
        transforms: [...StyleDictionaryPackage.transformGroup.scss, TransformName.Theme],
        buildPath: `${SCSS_BUILD_DIRECTORY}/`,
        files: [
          {
            destination: `${theme}.scss`,
            format: FormatName.SCSSMixinTheme,
            options: {
              theme,
            },
          },
        ],
      },
    },
  };
}
