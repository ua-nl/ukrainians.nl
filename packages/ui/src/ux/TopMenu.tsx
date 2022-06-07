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
import { useUIContext } from '../lib/uiContext';

export interface TopMenuProps {
  maxWidth: ContainerProps['maxWidth'];
  currentSlug?: string;
}
export const TopMenu = ({ currentSlug, maxWidth }: TopMenuProps) => {
  const ctx = useUIContext();
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth={maxWidth}>
        <Toolbar disableGutters>
          <LogoMenu />

          <Menu open={false}>
            {ctx.menu.map((page) => (
              <MenuItem key={page.slug} selected={page.slug === currentSlug}>
                <Typography textAlign="center">
                  {ctx.l10n[page.label]}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Box>{ctx.l10n[ctx.texts.donateBtn]}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
