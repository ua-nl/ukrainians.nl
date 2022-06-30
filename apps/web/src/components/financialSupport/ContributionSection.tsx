import Image from 'next/image';
import { Col, H2, Para, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';
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
          <Image
            src={pictures?.[0].url}
            width={pictures?.[0].width}
            height={pictures?.[0].height}
            alt={title}
          />
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
