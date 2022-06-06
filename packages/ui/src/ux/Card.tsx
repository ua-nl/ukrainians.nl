import { Box, Card, Grid } from '@mui/material';
import { FC, ReactNode } from 'react';
import { H2 } from './Typography';
import { SvgIconUA } from '../lib/createSvgIcon';

export const IconCardContainer: FC<{
  children: ReactNode;
}> = (props) => (
  <Grid
    container
    rowSpacing={{ xs: 1, sm: 2, md: 3 }}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    alignItems="stretch"
  >
    {props.children}
  </Grid>
);

export const IconCard: FC<{
  Icon: SvgIconUA;
  title: string;
  children: ReactNode;
}> = (props) => (
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
