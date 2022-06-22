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
  lightGrey: 'grey.100',
} as const;

export interface SectionProps {
  children: ReactNode;
  breadcrumbs?: boolean;
  second?: boolean;
  thin?: boolean;
  bgColor?: keyof typeof SECTION_COLOR;
  color?: UASysColorKeys;
  mt?: number;
}

const container = (
  bgColor?: keyof typeof SECTION_COLOR,
  color?: UASysColorKeys,
  mt?: number,
): SxProps<Theme> => ({
  backgroundColor: bgColor ? SECTION_COLOR[bgColor] : undefined,
  color: color,
  mt: mt,
});

export const Section = (props: SectionProps) => {
  return (
    <Box sx={container(props.bgColor, props.color, props.mt)}>
      <Container
        maxWidth={props.thin ? CONTAINER_SHORT_WIDTH : CONTAINER_MAX_WIDTH}
      >
        <Box
          pt={props.breadcrumbs || props.second ? '0px' : '100px'}
          pb={props.breadcrumbs ? '0px' : '100px'}
        >
          {props.children}
        </Box>
      </Container>
    </Box>
  );
};
