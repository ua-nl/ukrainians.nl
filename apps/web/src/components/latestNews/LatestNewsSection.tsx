import { PageContent } from 'ui/types';
import { Col, H1, Img, Para, Section } from 'ui/ux';

export const LatestNewsSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          <Img picture={pictures?.[0]} alt={title} />
        </Col.Item>
        <Col.Item sm={6} vAlign="center">
          <H1>{title}</H1>
          <Para>{description}</Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
