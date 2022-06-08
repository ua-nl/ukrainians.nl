import { Box } from '@mui/material';
import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import GroupPhoto from '../../../public/photo/group-photo.jpg';

export const OurMissionSection = () => {
  return (
    <Section first>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6}>
          <H1>Our mission</H1>
          <Para>
            We facilitate the integration of Ukrainians living in the
            Netherlands into Dutch society, while helping them to preserve their
            distinct identity, language, culture, and religious traditions for
            future generations.
          </Para>
          <Para>
            Our foundation also aims to provide continuous support and
            humanitarian aid to Ukraine, especially to areas most affected by
            Russian occupation and aggression.
          </Para>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Box mt={{ xs: 8, sm: 0 }}>
            <Image src={GroupPhoto} />
          </Box>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
