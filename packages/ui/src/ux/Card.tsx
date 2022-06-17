import { CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { ReactNode } from 'react';

import { UASysColors } from '../lib/cssVars.color';

type CardProps = {
  image: string;
  children: ReactNode;
};

const CardContainer = styled('div')(({ theme }) => ({
  padding: '32px',
  borderRadius: '4px',
  border: `1px solid ${UASysColors.grey}`,
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '32px',
  maxWidth: 360,

  [theme.breakpoints.only('xs')]: {
    maxWidth: '100%',
  },
}));

export const CardItem = ({ image, children }: CardProps) => (
  <CardContainer>
    <CardMedia component="img" image={image} alt={image} />
    {children}
  </CardContainer>
);
