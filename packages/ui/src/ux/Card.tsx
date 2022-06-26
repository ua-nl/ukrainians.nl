import { styled } from '@mui/system';
import { ReactNode } from 'react';

import { UASysStyleParts } from '../lib/theme/cssVars/uiElements';

type CardProps = {
  image: string;
  children: ReactNode;
};

const CardContainer = styled('div')(({ theme }) => ({
  borderRadius: UASysStyleParts.boxRadius.borderRadius,
  boxShadow: UASysStyleParts.shadow.boxShadow,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 370,
  paddingBottom: theme.spacing(3),

  [theme.breakpoints.only('xs')]: {
    maxWidth: '100%',
  },
}));

const CardImage = styled('img')({
  borderTopRightRadius: '12px',
  borderTopLeftRadius: '12px',
  width: '100%',
});

const CardContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
}));

export const CardItem = ({ image, children }: CardProps) => (
  <CardContainer>
    <CardImage src={image} alt={image} />
    <CardContent>{children}</CardContent>
  </CardContainer>
);
