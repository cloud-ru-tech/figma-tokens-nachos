import { Format, Named } from 'style-dictionary';

import { FormatName } from '../../constants';
import { formatter } from './formatter';

export const SCSSMixinThemeFormat: Named<Format> = {
  name: FormatName.SCSSMixinTheme,
  formatter: formatter,
};
