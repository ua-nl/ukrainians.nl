import { Breadcrumbs, Link, Typography, Box } from '@mui/material';

import { Section } from './Section';

export const Bread = (props: {
  history: Array<{ label: string; href: string }>;
  current: string;
}) => (
  <Section first>
    <Box mt="50px" mb="24px">
      <Breadcrumbs component="div">
        {props.history.map((item) => (
          <Link
            key={item.label}
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
