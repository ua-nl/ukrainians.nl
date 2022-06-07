import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  ContainerProps,
  Menu,
} from '@mui/material';

import { LogoMenu } from '../assets/LogoMenu.svg';
import { UIContext } from '../lib/uiContext';

export const TopMenu: React.FC<
  Pick<UIContext, 'menu' | 'l10n' | 'texts'> & {
    maxWidth: ContainerProps['maxWidth'];
    currentSlug?: string;
  }
> = ({ menu, currentSlug, l10n, maxWidth, texts }) => (
  <AppBar position="static" color="transparent">
    <Container maxWidth={maxWidth}>
      <Toolbar disableGutters>
        <LogoMenu />

        <Menu open={false}>
          {menu.map((page) => (
            <MenuItem key={page.slug} selected={page.slug === currentSlug}>
              <Typography textAlign="center">{l10n[page.label]}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Box>{l10n[texts.donateBtn]}</Box>
      </Toolbar>
    </Container>
  </AppBar>
);
