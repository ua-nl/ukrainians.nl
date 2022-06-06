import { FC, ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

const createTypography =
  (
    variant: TypographyProps['variant'],
    tProps: Partial<Pick<TypographyProps, 'gutterBottom' | 'mb'>> = {},
  ): FC<{
    children: ReactNode;
    center?: boolean;
  }> =>
  (props) =>
    (
      <Typography
        variant={variant}
        gutterBottom={tProps.gutterBottom}
        textAlign={props.center ? 'center' : undefined}
      >
        {props.children}
      </Typography>
    );

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
