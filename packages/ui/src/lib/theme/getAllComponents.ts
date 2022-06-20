import { Components, Theme } from '@mui/material';

import { getButtonStyles } from './components/getButtonStyles';
import { getContainerStyles } from './components/getContainerStyles';
import { getCssBaselineStyles } from './components/getCssBaselineStyles';
import { getInputStyles } from './components/getInputStyles';
import { getTypographyStyle } from './components/getTypographyStyle';

export const getAllComponents = (theme: Theme) =>
  [
    getCssBaselineStyles,
    getTypographyStyle,
    getButtonStyles,
    getInputStyles,
    getContainerStyles,
  ].reduce<Components<Theme>>(
    (memo, item) => ({
      ...memo,
      ...item(theme),
    }),
    {},
  );
