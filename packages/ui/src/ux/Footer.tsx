import {
  Box,
  Container,
  ContainerProps,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import { LogoFooter } from '../assets/LogoFooter.svg';
import { UASysColors } from '../lib/theme/cssVars/color';
import { useUIContext } from '../lib/uiContext';

export interface FooterProps {
  maxWidth: ContainerProps['maxWidth'];
}

const FooterContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: UASysColors.darkBlue,
  color: UASysColors.white,
}));

const FooterLink = styled(Link)(() => ({
  color: UASysColors.white,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    maxWidth: 750,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 400,
  },
}));

const ContactsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(18),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
}));

const ContactItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: 'white',

  [theme.breakpoints.down('md')]: {
    flexBasis: '40%',
  },
}));

const LinksContainer = styled('div')(() => ({
  gridArea: 'links',
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
}));

const SocialMediaContainer = styled('div')(({ theme }) => ({
  gridArea: 'socials',
  display: 'flex',
  flexDirection: 'column',
  justifySelf: 'end',

  [theme.breakpoints.down('md')]: {
    justifySelf: 'start',
  },
}));

const SocialMediaIconsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const MiddleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(18),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const LinksAndSocialsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(30),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(9),
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(2),
}));

const IconBox = ({ size }: { size: number }) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        bgcolor: UASysColors.blue30,
        borderRadius: 1,
      }}
    ></Box>
  );
};

const ContactInfo = () => {
  const ctx = useUIContext();

  return (
    <ContactsContainer>
      {ctx.contactData.map(({ key, label, value }) => (
        <ContactItem key={key}>
          <IconBox size={24} />
          <Typography variant="body1" mr={1} ml={2} gutterBottom={false}>
            {ctx.l10n[label]}:
          </Typography>
          <Typography variant="h4" gutterBottom={false}>
            {key === 'email' ? (
              <FooterLink href={`mailto:${value}`}>{value}</FooterLink>
            ) : key === 'phone' ? (
              <FooterLink href={`phone:${value}`}>{value}</FooterLink>
            ) : (
              value
            )}
          </Typography>
        </ContactItem>
      ))}
    </ContactsContainer>
  );
};

const Links = () => {
  const ctx = useUIContext();

  return (
    <LinksContainer>
      <Typography variant="h2" mb={2}>
        {ctx.l10n[ctx.texts.contactHeader]}
      </Typography>
      {ctx.links.map(({ label, slug }, index) => (
        <FooterLink href={slug} key={index} mb={4}>
          {ctx.l10n[label]}
        </FooterLink>
      ))}
    </LinksContainer>
  );
};

const SocialMedia = () => {
  const ctx = useUIContext();

  return (
    <SocialMediaContainer>
      <Typography variant="h2" mb={4}>
        {ctx.l10n[ctx.texts.followUs]}
      </Typography>
      <SocialMediaIconsContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <IconBox key={index} size={40} />
        ))}
      </SocialMediaIconsContainer>
    </SocialMediaContainer>
  );
};

export const Footer = ({ maxWidth }: FooterProps) => {
  const ctx = useUIContext();

  return (
    <FooterContainer>
      <ContentContainer maxWidth={maxWidth}>
        <ContactInfo />
        <MiddleContainer>
          <LogoFooter />
          <LinksAndSocialsContainer>
            <Links />
            <SocialMedia />
          </LinksAndSocialsContainer>
        </MiddleContainer>
        <Copyright variant="body2">{ctx.l10n[ctx.copyright]}</Copyright>
      </ContentContainer>
    </FooterContainer>
  );
};
