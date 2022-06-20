import type { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/material';

export interface TypographyUAProps {
  children: ReactNode;
  center?: boolean;
  mb?: number;
}

const createTypography = (
  variant: TypographyProps['variant'],
  tProps: TypographyProps = {},
) => {
  const TypographyUA = (props: TypographyUAProps) => (
    <Typography
      variant={variant}
      textAlign={props.center ? 'center' : undefined}
      mb={props.mb ?? tProps.mb}
    >
      {props.children}
    </Typography>
  );
  return TypographyUA;
};

export const H1 = createTypography('h1', { mb: 4 });
export const H2 = createTypography('h2', { mb: 3 });
export const H3 = createTypography('h3', { mb: 2 });
export const H4 = createTypography('h4', { mb: 1 });

export const Para = createTypography('body1', { mb: 2 });
export const Para2 = createTypography('body2');
export const Subtitle = createTypography('subtitle1');
export const Caption = createTypography('caption');
