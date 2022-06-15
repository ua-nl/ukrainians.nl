import { Box, Breakpoint, Container, SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';
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
}

const container = (
  bgColor?: keyof typeof SECTION_COLOR,
  bgImage?: string,
  color?: UASysColorKeys,
): SxProps<Theme> => ({
  background: bgImage ? `url(${bgImage})` : undefined,
  backgroundColor: bgColor ? SECTION_COLOR[bgColor] : undefined,
  color: color,
});

export const Section = (props: SectionProps) => (
  <Box mt={props.first ? undefined : '100px'}>
    <Box sx={container(props.bgColor, props.bgImage, props.color)}>
      <Container maxWidth={props.maxWidth}>
        {!props.bgColor && !props.bgImage ? (
          props.children
        ) : (
          <Box pt="100px" pb="100px">
            {props.children}
          </Box>
        )}
      </Container>
    </Box>
  </Box>
);
