import type { ReactNode } from 'react';

import { Box, Container, SxProps, Theme } from '@mui/material';

import { UASysColorKeys } from '../lib/theme/cssVars/color';
import {
  CONTAINER_MAX_WIDTH,
  CONTAINER_SHORT_WIDTH,
} from '../lib/theme/cssVars/size';

const SECTION_COLOR = {
  yellow: 'accent.light',
  blue: 'secondary.light',
  grey: 'grey.300',
} as const;

export interface SectionProps {
  children: ReactNode;
  first?: boolean;
  thin?: boolean;
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
  const hasBackground = Boolean(props.bgColor || props.bgImage);
  return (
    <Box sx={container(props.bgColor, props.bgImage, props.color, props.mt)}>
      <Container
        maxWidth={props.thin ? CONTAINER_SHORT_WIDTH : CONTAINER_MAX_WIDTH}
      >
        <Box pb="100px" pt={props.first && !hasBackground ? '40px' : '100px'}>
          {props.children}
        </Box>
      </Container>
    </Box>
  );
};
