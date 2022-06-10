import {
  Box,
  Container,
  ContainerProps,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import { LogoFooter } from '../assets/LogoFooter.svg';
import { UASysColors } from '../lib/cssVars.color';
import { UIContext, useUIContext } from '../lib/uiContext';

export interface FooterProps {
  maxWidth: ContainerProps['maxWidth'];
}

export interface ContactInfoProps {
  ctx: UIContext;
}

const FooterContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: UASysColors.darkBlue,
  color: UASysColors.white,
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

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(8),
  },
}));

const MiddleContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr minmax(auto, 260px) auto',
  gridTemplateAreas: `'logo . links socials'`,
  width: '100%',

  [theme.breakpoints.down('md')]: {
    gridTemplateRows: '1fr auto',
    gridTemplateColumns: 'minmax(200px, 600px) auto',
    gridTemplateAreas: `
    'logo logo'
    'links socials'
    `,
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateRows: '1fr auto auto',
    gridTemplateColumns: 'minmax(200px, 400px)',
    gridTemplateAreas: `
    'logo'
    'links'
    'socials'
    `,
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

const ContactInfo = ({ ctx }: ContactInfoProps) => {
  return (
    <ContactsContainer>
      {ctx.contactData.map(({ key, label, value }) => (
        <ContactItem key={key}>
          <IconBox size={24} />
          <Typography
            variant="body1"
            sx={{ mr: 1, ml: 2 }}
            gutterBottom={false}
          >
            {ctx.l10n[label]}:
          </Typography>
          {key === 'email' ? (
            <a href={`mailto:${value}`}>{value}</a>
          ) : key === 'phone' ? (
            <a href={`phone:${value}`}>{value}</a>
          ) : (
            <Typography variant="h4" gutterBottom={false}>
              {value}
            </Typography>
          )}
        </ContactItem>
      ))}
    </ContactsContainer>
  );
};

const Links = ({ ctx }: ContactInfoProps) => {
  return (
    <LinksContainer>
      <Typography variant="h2" mb={4}>
        {ctx.l10n[ctx.texts.contactHeader]}
      </Typography>
      <Typography variant="body1" mb={4}>
        Vacancies
      </Typography>
      <Typography variant="body1" mb={4}>
        Schools
      </Typography>
      <Typography variant="body1" mb={4}>
        Churches
      </Typography>
    </LinksContainer>
  );
};

const SocialMedia = ({ ctx }: ContactInfoProps) => {
  return (
    <SocialMediaContainer>
      <Typography variant="h2" mb={4}>
        {ctx.l10n[ctx.texts.followUs]}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <IconBox key={index} size={40} />
        ))}
      </Box>
    </SocialMediaContainer>
  );
};

export const Footer = ({ maxWidth }: FooterProps) => {
  const ctx = useUIContext();
  return (
    <FooterContainer>
      <ContentContainer maxWidth={maxWidth}>
        <ContactInfo ctx={ctx} />
        <MiddleContainer>
          <Box sx={{ gridArea: 'logo', mb: 18 }}>
            <LogoFooter />
          </Box>
          <Links ctx={ctx} />
          <SocialMedia ctx={ctx} />
        </MiddleContainer>
        <Copyright variant="body2">
          Copyright © 2014, All Right Reserved Stichting Oekraïners in Nederland
        </Copyright>
      </ContentContainer>
    </FooterContainer>
  );
};
