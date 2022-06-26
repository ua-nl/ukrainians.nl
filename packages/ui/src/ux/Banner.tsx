import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { UASysColors } from 'ui/lib';

type BannerProps = {
  children: ReactNode;
};

const BannerContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: UASysColors.yellow30,
  borderRadius: '12px',
  padding: theme.spacing(10, 15),
  color: UASysColors.blue100,
  width: '100%',
}));

const BannerContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '600px',
}));

export const Banner = ({ children }: BannerProps) => {
  return (
    <BannerContainer>
      <BannerContent>{children}</BannerContent>
    </BannerContainer>
  );
};
