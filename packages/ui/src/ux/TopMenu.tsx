import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Collapse, Container, IconButton, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { LogoMenu } from '../assets/LogoMenu.svg';
import { useScreen } from '../hooks/useScreen';
import { useUIContext } from '../lib';
import { UASysColors } from '../lib/theme/cssVars/color';
import { CONTAINER_MAX_WIDTH } from '../lib/theme/cssVars/size';

const TopMenuContainer = styled('div')(({ theme }) => ({
  position: 'static',
  width: '100%',
  backgroundColor: UASysColors.white,
  zIndex: theme.zIndex.appBar,
}));

const MainContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: theme.spacing(10, 6, 6, 6),
}));

const LogoContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const LinksContainer = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isDesktop',
})<{
  isDesktop: boolean;
}>(({ theme, isDesktop }) => ({
  display: 'flex',
  flexDirection: isDesktop ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: isDesktop ? theme.spacing(8) : theme.spacing(2),
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

const NavbarLink = styled('a', {
  shouldForwardProp: (propName) => propName !== 'isSelected',
})<{
  isSelected: boolean;
}>(({ isSelected }) => ({
  fontWeight: isSelected ? 700 : 400,

  '&:hover': {
    fontWeight: 700,
  },
  '&::before': {
    display: 'block',
    content: 'attr(title)',
    fontWeight: 700,
    height: 0,
    overflow: 'hidden',
    visibility: 'hidden',
  },
}));

const DonateButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const NavbarLinks = () => {
  const ctx = useUIContext();
  const isDesktop = useScreen();
  const { pathname } = useRouter();

  return (
    <LinksContainer isDesktop={isDesktop}>
      {ctx.menu.map((page) => (
        <NavbarLink
          title={ctx.l10n[page.label]}
          key={page.slug}
          href={page.slug}
          isSelected={page.slug === pathname}
        >
          {ctx.l10n[page.label]}
        </NavbarLink>
      ))}
      <DonateButton variant="contained">
        {ctx.l10n[ctx.texts.donateBtn]}
      </DonateButton>
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
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
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

export const TopMenu = () => {
  const isDesktop = useScreen();

  return (
    <TopMenuContainer>
      <MainContent maxWidth={CONTAINER_MAX_WIDTH}>
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </MainContent>
    </TopMenuContainer>
  );
};
