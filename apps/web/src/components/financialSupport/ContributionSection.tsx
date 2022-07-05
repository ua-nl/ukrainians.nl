import { PageContent } from 'ui/types';
import { Col, H2, Img, Para, Section } from 'ui/ux';

import { DonateForm } from '../DonateForm';

export const ContributionSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section first bgColor="grey">
      <Col.Container>
        <Col.Item sm={12} md={6} vAlign="center">
          <Img picture={pictures?.[0]} alt={title} />
        </Col.Item>
        <Col.Item sm={12} md={6} vAlign="center">
          <H2>{title}</H2>
          <Para>{description}</Para>
          <DonateForm />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
