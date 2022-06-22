import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useUIContext } from 'ui/lib';
import { Button, MainHeader, Section, Subtitle } from 'ui/ux';

import CoverImage from '../../../public/img/carousel/cover1.png';

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(12),
}));

const BackgroundImageContainer = styled('div')(() => ({
  backgroundImage: `url(${CoverImage.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const MainHeaderSection = () => {
  const ctx = useUIContext();

  return (
    <BackgroundImageContainer>
      <Section first color="white">
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <MainHeader>
            <span style={{ color: 'white' }}>#</span>StandWithUkraine
          </MainHeader>
          <Subtitle>Stichting Oekraïners in Nederland</Subtitle>

          <ButtonsContainer>
            <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
            <Button type="accent">{ctx.l10n[ctx.texts.volunteer]}</Button>
          </ButtonsContainer>
        </Box>
      </Section>
    </BackgroundImageContainer>
  );
};
