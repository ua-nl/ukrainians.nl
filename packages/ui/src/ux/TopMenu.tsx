import MenuIcon from '@mui/icons-material/Menu';
import { Button, Collapse, Container, IconButton, styled } from '@mui/material';
import { useState } from 'react';

import { LogoMenu } from '../assets/LogoMenu.svg';
import { useScreen } from '../hooks/useScreen';
import { useUIContext } from '../lib';
import { CONTAINER_MAX_WIDTH } from '../lib/cssVars.width';

export interface TopMenuProps {
  currentSlug?: string;
}

type DesktopProps = {
  isDesktop: boolean;
};

const TopMenuContainer = styled('div')(({ theme }) => ({
  position: 'static',
  width: '100%',
  backgroundColor: '#fff',
  zIndex: theme.zIndex.appBar,
}));

const MainContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(6),
}));

const LogoContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const LinksContainer = styled('div')<DesktopProps>(({ theme, isDesktop }) => ({
  display: 'flex',
  flexDirection: isDesktop ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(8),
  paddingBottom: theme.spacing(6),
}));

const MobileNavbarContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const MobileNavbarContent = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const NavbarLink = styled('a')(() => ({
  '&:hover': {
    textShadow: '1px 0 0 black',
  },
}));

const NavbarLinks = () => {
  const ctx = useUIContext();
  const isDesktop = useScreen();

  return (
    <LinksContainer isDesktop={isDesktop}>
      {ctx.menu.map((page) => (
        <NavbarLink key={page.slug} href="/">
          {ctx.l10n[page.label]}
        </NavbarLink>
      ))}
      <Button variant="contained">{ctx.l10n[ctx.texts.donateBtn]}</Button>
    </LinksContainer>
  );
};

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <MobileNavbarContainer>
      <MobileNavbarContent>
        <LogoContainer>
          <LogoMenu />
        </LogoContainer>

        <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <MenuIcon />
        </IconButton>
      </MobileNavbarContent>

      <Collapse in={isDrawerOpen}>
        <NavbarLinks />
      </Collapse>
    </MobileNavbarContainer>
  );
};

const DesktopNavbar = () => {
  return (
    <>
      <LogoContainer>
        <LogoMenu />
      </LogoContainer>
      <NavbarLinks />
    </>
  );
};

export const TopMenu = ({ currentSlug }: TopMenuProps) => {
  const isDesktop = useScreen();

  return (
    <TopMenuContainer>
      <MainContent maxWidth={CONTAINER_MAX_WIDTH}>
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </MainContent>
    </TopMenuContainer>
  );
};
