import { Box, Container, ContainerProps, Typography } from '@mui/material';

import { LogoFooter } from '../assets/LogoFooter.svg';
import { UASysColors } from '../lib/cssVars.color';
import { useUIContext } from '../lib/uiContext';

export interface FooterProps {
  maxWidth: ContainerProps['maxWidth'];
}
export const Footer = ({ maxWidth }: FooterProps) => {
  const ctx = useUIContext();
  return (
    <Box bgcolor={UASysColors.darkBlue} pt="32px" pb="32px">
      <Container maxWidth={maxWidth}>
        <LogoFooter />

        <Box sx={{ color: UASysColors.white }}>
          <Typography variant="h3">
            {ctx.l10n[ctx.texts.contactHeader]}
          </Typography>

          {ctx.contactData.map(({ key, label, value }) => (
            <Box key={key}>
              <span>{ctx.l10n[label]}:</span>
              {key === 'email' ? (
                <a href={`mailto:${value}`}>{value}</a>
              ) : key === 'phone' ? (
                <a href={`phone:${value}`}>{value}</a>
              ) : (
                <span>{value}</span>
              )}
            </Box>
          ))}

          <Typography variant="h3">{ctx.l10n[ctx.texts.followUs]}</Typography>
        </Box>
      </Container>
    </Box>
  );
};
