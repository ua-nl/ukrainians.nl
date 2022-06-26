import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { UASysColors } from 'ui/lib';
import { Section } from 'ui/ux';

type BannerProps = {
  children: ReactNode;
};

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: UASysColors.yellow30,
  borderRadius: '12px',
  padding: theme.spacing(10, 15),
  color: UASysColors.blue100,
}));

const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
}));

export const Banner = ({ children }: BannerProps) => {
  return (
    <Section>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Section>
  );
};
