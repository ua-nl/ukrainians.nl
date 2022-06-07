import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { FC } from 'react';

import { Section } from './Section';

export const Bread: FC<{
  history: Array<{ label: string; href: string }>;
  current: string;
}> = (props) => (
  <Section first>
    <Box mt="50px" mb="24px">
      <Breadcrumbs component="div">
        {props.history.map((item) => (
          <Link
            underline="hover"
            color="inherit"
            href={item.href}
            sx={{ fontWeight: 'normal' }}
          >
            {item.label}
          </Link>
        ))}
        <Typography fontWeight="bold">{props.current}</Typography>
      </Breadcrumbs>
    </Box>
  </Section>
);
