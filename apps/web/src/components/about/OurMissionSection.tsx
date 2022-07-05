import { PageContent } from 'ui/types';
import { Col, H1, Img, Para, Section } from 'ui/ux';

export const OurMissionSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Img picture={pictures?.[0]} alt={title} />
        </Col.Item>
        <Col.Item sm={6} vAlign="center" order={{ xs: 1, sm: 2 }}>
          <H1>{title}</H1>
          <Para>{description}</Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
