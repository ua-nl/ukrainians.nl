import {
  Box,
  Card,
  Container,
  ContainerProps,
  Typography,
} from '@mui/material';
import type { UIContext } from '../lib/uiContext';

export const Footer: React.FC<
  Pick<UIContext, 'l10n' | 'contactData' | 'texts'> & {
    maxWidth: ContainerProps['maxWidth'];
  }
> = ({ contactData, texts, maxWidth, l10n }) => (
  <Box bgcolor="Background">
    <Container maxWidth={maxWidth}>
      <Typography variant="h3">{l10n[texts.contactHeader]}</Typography>
      {contactData.map(({ key, label, value }) => (
        <Card key={key}>
          <span>{l10n[label]}:</span>
          {key === 'email' ? (
            <a href={`mailto:${value}`}>{value}</a>
          ) : key === 'phone' ? (
            <a href={`phone:${value}`}>{value}</a>
          ) : (
            <span>{value}</span>
          )}
        </Card>
      ))}
      <Typography variant="h3">{l10n[texts.followUs]}</Typography>
    </Container>
  </Box>
);
