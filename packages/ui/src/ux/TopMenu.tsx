import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  ContainerProps,
  SxProps,
} from '@mui/material';
import * as muiIcon from '@mui/icons-material';
import { UIContext } from '../lib/uiContext';

const SX: Record<string, SxProps> = {
  logo: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  adb: {
    display: { xs: 'none', md: 'flex' },
    mr: 1,
  },
  menu: {
    flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
  },
};

export const TopMenu: React.FC<
  Pick<UIContext, 'menu' | 'l10n' | 'texts'> & {
    maxWidth: ContainerProps['maxWidth'];
    currentSlug?: string;
  }
> = ({ menu, currentSlug, l10n, maxWidth, texts }) => (
  <AppBar position="static">
    <Container maxWidth={maxWidth}>
      <Toolbar disableGutters>
        <muiIcon.Adb sx={SX.adb} />
        <Typography variant="h6" noWrap component="a" href="/" sx={SX.logo}>
          LOGO
        </Typography>

        <Box sx={SX.menu}>
          {menu.map((page) => (
            <MenuItem key={page.slug} selected={page.slug === currentSlug}>
              <Typography textAlign="center">{l10n[page.label]}</Typography>
            </MenuItem>
          ))}
        </Box>
        <Box>{l10n[texts.donateBtn]}</Box>
      </Toolbar>
    </Container>
  </AppBar>
);
