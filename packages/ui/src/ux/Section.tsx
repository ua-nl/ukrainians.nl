import type { ReactNode } from 'react';

import { Box, Container } from '@mui/material';

import { CONTAINER_MAX_WIDTH } from './Page';

const SECTION_COLOR = {
  yellow: 'accent.light',
  blue: 'secondary.light',
  grey: 'grey.300',
} as const;

export interface SectionProps {
  children: ReactNode;
  first?: boolean;
  bg?: keyof typeof SECTION_COLOR;
}
export const Section = (props: SectionProps) => (
  <Box mt={props.first ? undefined : '100px'}>
    <Box bgcolor={props.bg ? SECTION_COLOR[props.bg] : undefined}>
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        {!props.bg ? (
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
