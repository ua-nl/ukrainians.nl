import Image from 'next/image';
import { Col, H1, Para, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

type OurStorySectionProps = Pick<
  PageContent,
  'title' | 'pictures' | 'description' | 'description2'
>;

export const OurStorySection = ({
  title,
  pictures,
  description,
  description2,
}: OurStorySectionProps) => {
  console.log(pictures);
  return (
    <Section bgColor="grey">
      <H1 center mb={16}>
        {title}
      </H1>
      <Col.Container>
        <Col.Item sm={6}>
          <Para>{description}</Para>
        </Col.Item>

        <Col.Item sm={6}>
          <Para mb={10}>{description2}</Para>
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Image
            src={pictures?.[0].url}
            width={pictures?.[0].width}
            height={pictures?.[0].height}
            alt="Mom with kid"
          />
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Image
            src={pictures?.[1].url}
            width={pictures?.[1].width}
            height={pictures?.[1].height}
            alt="Two girls"
          />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
