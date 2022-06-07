import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';

import { UASysColors } from '../lib/cssVars.color';
import { CONTAINER_MAX_WIDTH } from './Page';

const SECTION_COLOR = {
  yellow: UASysColors.yellow30,
  blue: UASysColors.blue30,
  gray: UASysColors.black10,
};
export const Section: FC<{
  children: ReactNode;
  first?: boolean;
  bg?: keyof typeof SECTION_COLOR;
}> = (props) => (
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
