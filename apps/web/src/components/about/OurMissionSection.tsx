import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import GroupPhotoImg from '../../../public/photo/group-photo.jpg';

export const OurMissionSection = () => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Image src={GroupPhotoImg} alt="Group photo" />
        </Col.Item>
        <Col.Item sm={6} vAlign="center" order={{ xs: 1, sm: 2 }}>
          <H1>Our mission and values</H1>
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
      </Col.Container>
    </Section>
  );
};
