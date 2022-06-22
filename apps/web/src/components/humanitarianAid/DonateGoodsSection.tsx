import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import Storehouse from '../../../public/photo/storehouse.jpg';

export const DonateGoodsSection = () => {
  return (
    <Section first>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6} vAlign="center">
          <Image src={Storehouse} alt="Two girls" />
        </Col.Item>
        <Col.Item sm={6} vAlign="center">
          <H1>Help us do good: donate goods</H1>
          <Para>
            Our foundation provides aid for areas most impacted by Russia’s war.
            We also support the Armed Forces of Ukraine, including wounded
            soldiers and their families.
          </Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
