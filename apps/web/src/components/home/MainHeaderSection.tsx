import { styled } from '@mui/system';
import { useUIContext } from 'ui/lib';
import { PageContent } from 'ui/types';
import { Button, MainHeader, Section, Subtitle } from 'ui/ux';

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(12),
}));

const BackgroundImageContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'src',
})<{ src?: string }>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const BackgroundImageContent = styled('div')({
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const MainHeaderSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  const ctx = useUIContext();

  return (
    <BackgroundImageContainer src={pictures?.[0].url}>
      <Section breadcrumbs color="white">
        <BackgroundImageContent>
          <MainHeader>{title}</MainHeader>
          <Subtitle>{description}</Subtitle>

          <ButtonsContainer>
            <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
            <Button type="accent">{ctx.l10n[ctx.texts.volunteer]}</Button>
          </ButtonsContainer>
        </BackgroundImageContent>
      </Section>
    </BackgroundImageContainer>
  );
};
