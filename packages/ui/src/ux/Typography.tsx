import type { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/material';

export interface TypographyUAProps {
  children: ReactNode;
  center?: boolean;
  mb?: number;
  gutterBottom?: boolean;
}

const createTypography = (
  variant: TypographyProps['variant'],
  tProps: Partial<Pick<TypographyProps, 'letterSpacing' | 'mb'>> = {},
) => {
  const TypographyUA = (props: TypographyUAProps) => (
    <Typography
      variant={variant}
      gutterBottom={
        props.gutterBottom === undefined ? true : props.gutterBottom
      }
      textAlign={props.center ? 'center' : undefined}
      mb={
        props.mb || props.mb === 0
          ? props.mb
          : tProps.mb
          ? tProps.mb
          : undefined
      }
      letterSpacing={tProps.letterSpacing}
    >
      {props.children}
    </Typography>
  );
  return TypographyUA;
};

export const H1 = createTypography('h1');
export const H2 = createTypography('h2');
export const H3 = createTypography('h3');
export const H4 = createTypography('h4');
export const Subtitle = createTypography('subtitle1', {
  letterSpacing: '-1px',
});
export const Para = createTypography('body1', { mb: '16px' });
export const Para2 = createTypography('body2');
export const Caption = createTypography('caption');
