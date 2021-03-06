import { styled } from '@mui/system';
import { UASysColors, UASysStyleParts } from 'ui/lib';
import { H2, Para } from 'ui/ux';

const Container = styled('div')({
  display: 'flex',
  width: '100%',
  flexGrow: 1,
  justifyContent: 'center',
});

const ContentBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 14),
  backgroundColor: UASysColors.lightGrey,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: UASysStyleParts.shadow.boxShadow,

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8),
  },
}));

export const BankAccountDetails = () => {
  return (
    <Container>
      <ContentBox>
        <H2 mb={6}>Bank account details</H2>
        <Para mb={0}>Stichting Oekraïners in Nederland:</Para>
        <Para>
          <strong>NL97 INGB 0006 5104 66</strong>
        </Para>

        <Para mb={0}>Swift/Bic: </Para>
        <Para>INGBNL2AXXX</Para>

        <Para mb={0}>Name of the bank: </Para>
        <Para>ING Bank </Para>

        <Para mb={0}>Address:</Para>
        <Para>Bijlmerdreef 106, 1102 MG, Amsterdam, Netherlands</Para>
      </ContentBox>
    </Container>
  );
};
