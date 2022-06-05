import { CSSObject } from '@mui/material';

export type UASysTypographyKeys =
  | 'Header1'
  | 'Header2'
  | 'Header3'
  | 'Header4'
  | 'Body1'
  | 'Body2'
  | 'Body2bold'
  | 'caption'
  | 'textField'
  | 'button';

export const UASysTypography: Record<UASysTypographyKeys, CSSObject> = {
  Header1: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: `120%`,
    textTransform: 'uppercase',
  },
  Header2: { fontSize: 24, lineHeight: `120%`, fontWeight: 700 },
  Header3: { fontSize: 20, lineHeight: `120%`, fontWeight: 700 },
  Header4: { fontSize: 16, lineHeight: `120%`, fontWeight: 700 },
  Body1: { fontSize: 16 },
  Body2: { fontSize: 14 },
  Body2bold: { fontSize: 14, lineHeight: `120%`, fontWeight: 700 },
  caption: { fontSize: 12 },
  textField: { fontSize: 12 },
  button: { fontSize: `16px`, fontWeight: 700 },
};
