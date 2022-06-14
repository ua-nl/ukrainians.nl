import { Box, SxProps, Theme } from '@mui/material';
import { useUIContext } from 'ui/lib';
import { Button, H1, Page, Section, Subtitle } from 'ui/ux';

import CoverImage from '../assets/images/cover1.png';
import { ActionCards } from '../components/ActionSection';

const buttonsContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 3,
  mt: 12,
};

export default function Index() {
  const ctx = useUIContext();

  return (
    <Page>
      <Section first bgImage={CoverImage.src} color="white" maxWidth="md">
        <Box maxWidth={550}>
          <H1>
            Stand with us to support peace and freedom in Ukraine – and beyond
          </H1>
          <Subtitle>Foundation Ukrainians in the Netherlands</Subtitle>

          <Box sx={buttonsContainer}>
            <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
            <Button type="accent">Volunteer</Button>
          </Box>
        </Box>
      </Section>
      <Section>
        <ActionCards />
      </Section>
    </Page>
  );
}
