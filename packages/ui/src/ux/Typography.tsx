import type { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/material';

export interface TypographyUAProps {
  children: ReactNode;
  center?: boolean;
}
const createTypography = (
  variant: TypographyProps['variant'],
  tProps: Partial<Pick<TypographyProps, 'gutterBottom' | 'mb'>> = {},
) => {
  const TypographyUA = (props: TypographyUAProps) => (
    <Typography
      variant={variant}
      gutterBottom={tProps.gutterBottom}
      textAlign={props.center ? 'center' : undefined}
    >
      {props.children}
    </Typography>
  );
  return TypographyUA;
};

export const H1 = createTypography('h1', { gutterBottom: true });
export const H2 = createTypography('h2', { gutterBottom: true });
export const H3 = createTypography('h3', { gutterBottom: true });
export const H4 = createTypography('h4', { gutterBottom: true });
export const Para = createTypography('body1', {
  gutterBottom: true,
  mb: '16px',
});
export const Para2 = createTypography('body2', { gutterBottom: true });
export const Caption = createTypography('caption', {});
