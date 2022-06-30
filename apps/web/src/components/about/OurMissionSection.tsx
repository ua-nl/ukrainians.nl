import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

export const OurMissionSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Image
            src={pictures?.[0].url}
            alt={title}
            width={pictures?.[0].width}
            height={pictures?.[0].height}
          />
        </Col.Item>
        <Col.Item sm={6} vAlign="center" order={{ xs: 1, sm: 2 }}>
          <H1>{title}</H1>
          <Para>{description}</Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
