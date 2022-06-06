import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

const ColContainer: FC<{ children: ReactNode }> = (props) => (
  <Grid
    container
    rowSpacing={{ xs: 3, sm: 3, md: 5 }}
    columnSpacing={{ xs: 3, sm: 3, md: 5 }}
  >
    {props.children}
  </Grid>
);

const ColItem: FC<{
  children: ReactNode;
  vAlign?: 'flex-start' | 'flex-end' | 'center';
}> = (props) => (
  <Grid item xs alignSelf={props.vAlign}>
    {props.children}
  </Grid>
);

export const Col = {
  Container: ColContainer,
  Item: ColItem,
};
