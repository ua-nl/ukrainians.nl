import type { ReactNode } from 'react';

import { Grid } from '@mui/material';

export interface ColContainerProps {
  children: ReactNode;
}

const ColContainer = (props: ColContainerProps) => (
  <Grid
    container
    rowSpacing={{ xs: 3, sm: 3, md: 5 }}
    columnSpacing={{ xs: 3, sm: 3, md: 5 }}
  >
    {props.children}
  </Grid>
);

export interface ColItemProps {
  children: ReactNode;
  vAlign?: 'flex-start' | 'flex-end' | 'center';
}

const ColItem = (props: ColItemProps) => (
  <Grid item xs alignSelf={props.vAlign}>
    {props.children}
  </Grid>
);

export const Col = {
  Container: ColContainer,
  Item: ColItem,
};
