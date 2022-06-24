import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Container, IconButton, styled } from '@mui/material';
import { useState } from 'react';

import { LogoMenu } from '../assets/LogoMenu.svg';
import { useScreen } from '../hooks/useScreen';
import { UASysColors } from '../lib/theme/cssVars/color';
import { CONTAINER_MAX_WIDTH } from '../lib/theme/cssVars/size';
import { NavbarLinks } from '../ux';

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
  padding: theme.spacing(0, 6),
}));

const LogoContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const MobileNavbarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const MobileNavbarContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

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
