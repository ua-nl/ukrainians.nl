import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import MomWithKid from '../../../public/photo/mom-with-kid.jpg';

export const LatestNewsSection = () => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          <Image src={MomWithKid} alt="Mom with kid" />
        </Col.Item>
        <Col.Item sm={6} vAlign="center">
          <H1>Latest news</H1>
          <Para>
            The Foundation supports cultural exchange between the Netherlands
            and Ukraine. We organize film screenings, exhibitions, concerts,
            seminars, festivals, art events, literary evenings and creative
            masterclasses. We also participate in political forums.
          </Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
