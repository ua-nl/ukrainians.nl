import { styled } from '@mui/system';
import { UASysColors, UASysStyleParts } from 'ui/lib';
import { Card } from 'ui/types';
import { H2, Markdown } from 'ui/ux';

type BankAccountDetailsProps = {
  card: Card;
};

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

export const BankAccountDetails = ({ card }: BankAccountDetailsProps) => {
  return (
    <Container>
      <ContentBox>
        <H2 mb={6}>{card.title}</H2>
        <Markdown>{card.description}</Markdown>
      </ContentBox>
    </Container>
  );
};
