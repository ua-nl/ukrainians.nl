import {
  Box,
  Card,
  Container,
  ContainerProps,
  Typography,
} from '@mui/material';
import type { UIContext } from '../lib/uiContext';
import { UASysColors } from '../lib/cssVars.color';
import { LogoFooter } from '../assets/LogoFooter.svg';

export const Footer: React.FC<
  Pick<UIContext, 'l10n' | 'contactData' | 'texts'> & {
    maxWidth: ContainerProps['maxWidth'];
  }
> = ({ contactData, texts, maxWidth, l10n }) => (
  <Box bgcolor={UASysColors.darkBlue}>
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
