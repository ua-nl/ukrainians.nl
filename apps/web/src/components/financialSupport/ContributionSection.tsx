import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import SunflowersImg from '../../../public/img/sunflowers.png';
import { DonateForm } from '../DonateForm';

export const ContributionSection = () => {
  return (
    <Section first bgColor="grey">
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          <Image src={SunflowersImg} alt="Kids" />
        </Col.Item>
        <Col.Item sm={6} vAlign="center">
          <H1>Your financial support help us to continue providing Ukraine</H1>
          <Para>
            Whether you are an individual or an organization , we invite you to
            stand with Ukraine and support its people in these trying times.
          </Para>
          <DonateForm />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
