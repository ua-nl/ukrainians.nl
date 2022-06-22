import { styled } from '@mui/system';
import { useUIContext } from 'ui/lib';
import { Button, MainHeader, Section, Subtitle } from 'ui/ux';

import CoverImage from '../../../public/img/carousel/cover1.png';

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(12),
}));

const BackgroundImageContainer = styled('div')({
  backgroundImage: `url(${CoverImage.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const BackgroundImageContent = styled('div')({
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const AccentHeader = styled('span')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const MainHeaderSection = () => {
  const ctx = useUIContext();

  return (
    <BackgroundImageContainer>
      <Section breadcrumbs color="white">
        <BackgroundImageContent>
          <MainHeader>
            <AccentHeader>#</AccentHeader>StandWithUkraine
          </MainHeader>
          <Subtitle>Stichting Oekraïners in Nederland</Subtitle>

          <ButtonsContainer>
            <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
            <Button type="accent">{ctx.l10n[ctx.texts.volunteer]}</Button>
          </ButtonsContainer>
        </BackgroundImageContent>
      </Section>
    </BackgroundImageContainer>
  );
};
