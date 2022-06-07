import { Box, Container, ContainerProps, Typography } from '@mui/material';

import { LogoFooter } from '../assets/LogoFooter.svg';
import { UASysColors } from '../lib/cssVars.color';

import type { UIContext } from '../lib/uiContext';

export const Footer: React.FC<
  Pick<UIContext, 'l10n' | 'contactData' | 'texts'> & {
    maxWidth: ContainerProps['maxWidth'];
  }
> = ({ contactData, texts, maxWidth, l10n }) => (
  <Box bgcolor={UASysColors.darkBlue} pt="32px" pb="32px">
    <Container maxWidth={maxWidth}>
      <LogoFooter />

      <Box sx={{ color: UASysColors.white }}>
        <Typography variant="h3">{l10n[texts.contactHeader]}</Typography>

        {contactData.map(({ key, label, value }) => (
          <Box>
            <span>{l10n[label]}:</span>
            {key === 'email' ? (
              <a href={`mailto:${value}`}>{value}</a>
            ) : key === 'phone' ? (
              <a href={`phone:${value}`}>{value}</a>
            ) : (
              <span>{value}</span>
            )}
          </Box>
        ))}

        <Typography variant="h3">{l10n[texts.followUs]}</Typography>
      </Box>
    </Container>
  </Box>
);
