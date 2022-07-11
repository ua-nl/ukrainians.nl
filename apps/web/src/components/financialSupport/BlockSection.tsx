import { styled } from '@mui/system';
import { UASysColors } from 'ui/lib';
import { Button, H1, Section } from 'ui/ux';

const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(27, 15),
  backgroundColor: UASysColors.yellow30,
  color: UASysColors.blue100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  maxWidth: 800,
}));

export const BlockSection = () => {
  return (
    <Section>
      <Container>
        <Content>
          <H1 center mb={10}>
            Do you want to support by non-financial matters?
          </H1>
          <div>
            <Button>Contact us</Button>
          </div>
        </Content>
      </Container>
    </Section>
  );
};
