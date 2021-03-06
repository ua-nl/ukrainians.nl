import type { ReactNode } from 'react';

import { Card, Grid } from '@mui/material';

import { SvgIconUA } from '../lib/createSvgIcon';
import { H2 } from './Typography';

const IconCardContainer = (props: { children: ReactNode }) => (
  <Grid
    container
    rowSpacing={{ xs: 6, sm: 7, md: 10 }}
    columnSpacing={{ xs: 6, sm: 7, md: 10 }}
  >
    {props.children}
  </Grid>
);

const IconCardItem = (props: {
  Icon: SvgIconUA;
  title: string;
  children: ReactNode;
}) => (
  <Grid item sm={6}>
    <Card sx={{ height: '100%' }}>
      <Grid
        container
        padding={{ xs: 10, md: 14 }}
        spacing={{ xs: 2, sm: 5, md: 8 }}
      >
        <Grid item xs="auto" sm={12} md={2}>
          <props.Icon size="56px" />
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <H2 mb={4}>{props.title}</H2>
          {props.children}
        </Grid>
      </Grid>
    </Card>
  </Grid>
);

export const IconCard = {
  Container: IconCardContainer,
  Item: IconCardItem,
};
