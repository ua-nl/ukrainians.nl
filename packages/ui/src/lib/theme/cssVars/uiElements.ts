import { CSSObject } from '@mui/material';

import { UASysColors } from './color';

export type UASysStylePartsKeys = 'shadow' | 'boxRadius' | 'elementRadius';
export const UASysStyleParts: Record<UASysStylePartsKeys, CSSObject> = {
  shadow: {
    boxShadow: `0px 0px 30px 4px ${UASysColors.shadow}`,
  },
  boxRadius: {
    borderRadius: 12,
  },
  elementRadius: {
    borderRadius: 4,
  },
};
