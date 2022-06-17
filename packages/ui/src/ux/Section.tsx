import type { ReactNode } from 'react';

import { Box, Breakpoint, Container, SxProps, Theme } from '@mui/material';

import { UASysColorKeys, UASysColors } from '../lib/cssVars.color';

const SECTION_COLOR = {
  yellow: UASysColors.yellow30,
  blue: UASysColors.blue30,
  gray: UASysColors.black10,
};
export interface SectionProps {
  children: ReactNode;
  first?: boolean;
  maxWidth?: Breakpoint;
  bgColor?: keyof typeof SECTION_COLOR;
  bgImage?: string;
  color?: UASysColorKeys;
  mt?: number;
}

const container = (
  bgColor?: keyof typeof SECTION_COLOR,
  bgImage?: string,
  color?: UASysColorKeys,
  mt?: number,
): SxProps<Theme> => ({
  background: bgImage ? `url(${bgImage})` : undefined,
  backgroundColor: bgColor ? SECTION_COLOR[bgColor] : undefined,
  color: color,
  mt: mt,
});

export const Section = (props: SectionProps) => {
  const hasBackground = props.bgColor || props.bgImage;

  return (
    <Box sx={container(props.bgColor, props.bgImage, props.color, props.mt)}>
      <Container maxWidth={props.maxWidth}>
        <Box pb="100px" pt={props.first && !hasBackground ? '40px' : '100px'}>
          {props.children}
        </Box>
      </Container>
    </Box>
  );
};
