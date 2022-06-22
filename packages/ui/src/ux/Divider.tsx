import { styled } from '@mui/system';

import { UASysColors } from '../lib';

const Container = styled('div')({
  display: 'flex',
  height: 10,
  marginTop: 40,
});

const BlueBox = styled('div')({
  backgroundColor: UASysColors.blue100,
  width: '50%',
});

const YellowBox = styled('div')({
  backgroundColor: UASysColors.yellow100,
  width: '50%',
});

export const Divider = () => {
  return (
    <Container>
      <BlueBox />
      <YellowBox />
    </Container>
  );
};
