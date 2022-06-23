import type { ReactNode } from 'react';

import { Grid, GridDirection } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';

export interface ColContainerProps {
  children: ReactNode;
  columns?: ResponsiveStyleValue<number>;
  direction?: ResponsiveStyleValue<GridDirection>;
}

const ColContainer = (props: ColContainerProps) => (
  <Grid
    container
    direction={props.direction}
    columns={props.columns}
    rowSpacing={{ xs: 10, md: 5 }}
    columnSpacing={{ xs: 4, sm: 10, md: 25 }}
    justifyContent="center"
  >
    {props.children}
  </Grid>
);

export interface ColItemProps {
  children: ReactNode;
  vAlign?: 'flex-start' | 'flex-end' | 'center';
  order?: ResponsiveStyleValue<number>;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

const ColItem = (props: ColItemProps) => (
  <Grid
    item
    xs={props.xs}
    sm={props.sm}
    md={props.md}
    order={props.order}
    alignSelf={props.vAlign}
  >
    {props.children}
  </Grid>
);

export const Col = {
  Container: ColContainer,
  Item: ColItem,
};
