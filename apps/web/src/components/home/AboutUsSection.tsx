import Image from 'next/image';
import { Col, H1, ImgBox, Para, Section } from 'ui/ux';

import atTheTruck from '../../../public/photo/at-the-truck.jpg';
import groupWithFlag from '../../../public/photo/group-with-flag.jpg';

export const AboutUsSection = () => {
  return (
    <Section>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item vAlign="center" sm={6}>
          <H1>About us</H1>
          <Para>
            Ukrainians in the Netherlands Foundation supports the needs of the
            Dutch-Ukrainian diaspora and is also working tirelessly to counter
            the catastrophic consequences of Russia’s war on Ukraine
          </Para>
        </Col.Item>
        <Col.Item sm={6}>
          <ImgBox sx={{ float: 'right', marginLeft: '25%' }}>
            <Image src={atTheTruck} />
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '50%', marginTop: '-30%' }}>
            <Image src={groupWithFlag} />
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
