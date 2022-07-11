import { styled } from '@mui/system';
import { UASysColors } from 'ui/lib';
import { H2, Section } from 'ui/ux';

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const Box = styled('div')(({ theme }) => ({
  padding: theme.spacing(27, 15),
  backgroundColor: UASysColors.black10,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '8px',
  maxWidth: 800,
}));

export const BlockSection = () => {
  return (
    <Section>
      <Container>
        <Box>
          <H2>
            A block that would guide users to go to humanitarian aid page, if
            they want to donate non-financial matters
          </H2>
        </Box>
      </Container>
    </Section>
  );
};
