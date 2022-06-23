import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import { Section, SECTION_COLOR } from './Section';

export const Bread = (props: {
  history: Array<{ label: string; href: string }>;
  current: string;
  bgColor?: keyof typeof SECTION_COLOR;
}) => (
  <Section breadcrumbs bgColor={props.bgColor}>
    <Box pt={14} pb={6}>
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
        <Typography fontWeight="bold" mb={0}>
          {props.current}
        </Typography>
      </Breadcrumbs>
    </Box>
  </Section>
);
