import { PageContent } from 'ui/types';
import { Col, H1, Img, Para, Section } from 'ui/ux';

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
          <Img picture={pictures?.[0]} alt={title} />
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Img picture={pictures?.[1]} alt={title} />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
