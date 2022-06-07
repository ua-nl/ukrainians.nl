import type { ReactNode } from 'react';

import { Box, Card, Grid } from '@mui/material';

import { SvgIconUA } from '../lib/createSvgIcon';
import { H2 } from './Typography';

const IconCardContainer = (props: { children: ReactNode }) => (
  <Grid
    container
    rowSpacing={{ xs: 1, sm: 3, md: 5 }}
    columnSpacing={{ xs: 1, sm: 3, md: 5 }}
    alignItems="stretch"
  >
    {props.children}
  </Grid>
);

const IconCardItem = (props: {
  Icon: SvgIconUA;
  title: string;
  children: ReactNode;
}) => (
  <Grid item xs={6}>
    <Card>
      <Box padding="56px 40px 56px 24px">
        <Grid container>
          <Grid item xs="auto" mr={{ xs: 1, sm: 2, md: 3 }}>
            <props.Icon size="56px" />
          </Grid>
          <Grid item xs>
            <H2>{props.title}</H2>
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </Card>
  </Grid>
);

export const IconCard = {
  Container: IconCardContainer,
  Item: IconCardItem,
};
