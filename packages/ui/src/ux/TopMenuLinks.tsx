import {
  Button,
  Collapse,
  Menu,
  MenuItem,
  MenuProps,
  styled,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, MouseEvent, ReactNode, useState } from 'react';

import { IconExpandLess } from '../assets/icons/IconExpandLess.svg';
import { IconExpandMore } from '../assets/icons/IconExpandMore.svg';
import { UASysColors, UASysStyleParts, useUIContext } from '../lib';
import { useScreen } from '../lib/hooks/useScreen';
import { AppLocale } from '../lib/types/app-locale.types';

type DropdownLinkProps = {
  name: string;
  anchorEl: null | HTMLElement;
  setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
  children: ReactNode;
};

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(6),
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

const DropdownMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    borderBottomLeftRadius: UASysStyleParts.boxRadius.borderRadius,
    borderBottomRightRadius: UASysStyleParts.boxRadius.borderRadius,
    marginTop: theme.spacing(5),
    minWidth: 180,
    color: theme.palette.text.primary,
    fontSize: 13,
    fontWeight: 500,
    boxShadow: UASysStyleParts.shadow.boxShadow,
  },
  '& .MuiMenu-list': {
    padding: '0',
  },
}));

const MenuLink = styled(MenuItem)(({ theme }) => ({
  fontWeight: 500,

  '&:hover': {
    textDecoration: 'underline',
    backgroundColor: theme.palette.background.default,
  },

  '& .Mui-focusVisible': {
    backgroundColor: theme.palette.background.default,
  },

  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(8),
    borderRadius: '8px',
  },
}));

const NavbarLink = styled('a')(({ theme }) => ({
  fontWeight: 700,
  fontSize: '14px',
  color: UASysColors.black,
  cursor: 'pointer',
  display: 'flex',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 5),
    borderRadius: '8px',
    justifyContent: 'flex-start',
    width: '100%',

    '&:hover': {
      backgroundColor: UASysColors.black10,
    },
  },
}));

const DonateButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const DropdownLink = ({
  name,
  anchorEl,
  setAnchorEl,
  children,
}: DropdownLinkProps) => {
  const isDesktop = useScreen();
  const isMenuOpen = Boolean(anchorEl);
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const expandLess =
    (isDesktop && isMenuOpen) || (!isDesktop && isCollapseOpen);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsCollapseOpen(!isCollapseOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavbarLink
        id="basic-button"
        aria-controls={isMenuOpen ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
        {expandLess ? <IconExpandLess /> : <IconExpandMore />}
      </NavbarLink>

      {isDesktop ? (
        <DropdownMenu
          id="dropdown-menu"
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'dropdown-button',
          }}
        >
          {children}
        </DropdownMenu>
      ) : (
        <Collapse in={isCollapseOpen}>{children}</Collapse>
      )}
    </>
  );
};

export const NavbarLinks = () => {
  const ctx = useUIContext();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = (locale: AppLocale) => {
    router.push(router.asPath, router.asPath, { locale });
    setAnchorEl(null);
  };

  return (
    <LinksContainer>
      {ctx.menu.map((page) => (
        <NavbarLink
          title={ctx.l10n[page.label]}
          key={page.slug}
          href={page.slug}
        >
          {ctx.l10n[page.label]}
        </NavbarLink>
      ))}
      <DropdownLink
        name="Locale test"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <MenuLink onClick={() => handleClose(AppLocale.en)}>English</MenuLink>
        <MenuLink onClick={() => handleClose(AppLocale.uk)}>Ukrainian</MenuLink>
        <MenuLink onClick={() => handleClose(AppLocale.nl)}>Dutch</MenuLink>
      </DropdownLink>
      <DonateButton variant="contained">
        {ctx.l10n[ctx.texts.donateBtn]}
      </DonateButton>
    </LinksContainer>
  );
};
