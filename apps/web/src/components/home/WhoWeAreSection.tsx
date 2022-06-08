import { Box } from '@mui/material';
import Image from 'next/image';
import { Button, Col, H2, Para, Section } from 'ui/ux';

import Logo from '../../../public/img/logo.png';

export const WhoWeAreSection = () => {
  return (
    <Section thin bgColor="gray">
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6}>
          <H2>WHO WE ARE</H2>
          <Para>
            Ukrainians in the Netherlands Foundation supports the needs of the
            Dutch-Ukrainian diaspora and is also working tirelessly to counter
            the catastrophic consequences of Russia’s war on Ukraine{' '}
          </Para>
          <Box mt={5}>
            <Button type="accent">Read more</Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Box mt={{ xs: 8, sm: 0 }}>
            <Image src={Logo} />
          </Box>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
