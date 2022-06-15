import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useUIContext } from 'ui/lib';
import { Button, H1, Section, Subtitle } from 'ui/ux';

import CoverImage from '../../../public/img/carousel/cover1.png';

const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  mt: theme.spacing(12),
}));

export const MainHeaderSection = () => {
  const ctx = useUIContext();

  return (
    <Section first bgImage={CoverImage.src} color="white" maxWidth="md">
      <Box maxWidth={550}>
        <H1>
          Stand with us to support peace and freedom in Ukraine – and beyond
        </H1>
        <Subtitle>Foundation Ukrainians in the Netherlands</Subtitle>

        <ButtonsContainer>
          <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
          <Button type="accent">{ctx.l10n[ctx.texts.volunteer]}</Button>
        </ButtonsContainer>
      </Box>
    </Section>
  );
};
