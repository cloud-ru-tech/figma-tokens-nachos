import { buildStyleFiles } from '../buildStyleFiles';
import { buildTokens } from '../buildTokens';
import {
  CSS_BUILD_DIRECTORY,
  CSS_TOKENS_FILE,
  SCSS_BUILD_DIRECTORY,
  SCSS_MIXIN_THEME_FILE,
  Themes,
  TS_TOKENS_FILE,
} from '../constants';
import { combineFiles, compileTs, deleteFiles, logMessage } from './utils';

const logFormattedMessage = (message: string) => {
  logMessage('------------');
  logMessage(message);
  logMessage('');
};

const getCSSFiles = () => Object.values(Themes).map(theme => `${CSS_BUILD_DIRECTORY}/${theme}.module.css`);
const getSCSSMixinThemeFiles = () => Object.values(Themes).map(theme => `${SCSS_BUILD_DIRECTORY}/${theme}.scss`);

(async () => {
  logFormattedMessage('Deleting "build" directory...');
  deleteFiles('build');

  logFormattedMessage('Building tokens...');
  await buildTokens();
  await buildStyleFiles();
  compileTs(TS_TOKENS_FILE);
  await combineFiles(getCSSFiles(), CSS_TOKENS_FILE);
  await combineFiles(getSCSSMixinThemeFiles(), SCSS_MIXIN_THEME_FILE);

  logFormattedMessage('Cleaning supporting files...');
  deleteFiles(TS_TOKENS_FILE);
  deleteFiles(getCSSFiles());
  deleteFiles(getSCSSMixinThemeFiles());
})();
