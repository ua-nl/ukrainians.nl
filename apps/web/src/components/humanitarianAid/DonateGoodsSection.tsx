import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import TwoGirls from '../../../public/photo/two-girls.jpeg';

export const DonateGoodsSection = () => {
  return (
    <Section maxWidth="lg" first>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6}>
          <H1>Help us do good: donate goods</H1>
          <Para>
            Our foundation provides aid for areas most impacted by Russia’s war.
            We also support the Armed Forces of Ukraine, including wounded
            soldiers and their families.
          </Para>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Image src={TwoGirls} />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
