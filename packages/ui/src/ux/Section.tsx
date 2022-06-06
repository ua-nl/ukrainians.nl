import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
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
}> = (props) =>
  !props.bg ? (
    <Container maxWidth={CONTAINER_MAX_WIDTH}>
      <Box mt={props.first ? undefined : '100px'}>{props.children}</Box>
    </Container>
  ) : (
    <Box mt={props.first ? undefined : '100px'}>
      <Box pt="100px" pb="100px" bgcolor={SECTION_COLOR[props.bg]}>
        <Section first>{props.children}</Section>
      </Box>
    </Box>
  );
