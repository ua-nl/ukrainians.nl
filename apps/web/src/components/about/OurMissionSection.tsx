import { PageContent } from 'ui/types';
import { Col, H1, Img, Markdown, Section } from 'ui/ux';

export const OurMissionSection = ({
  title,
  description,
  pictures,
}: Pick<PageContent, 'title' | 'description' | 'pictures'>) => {
  return (
    <Section first>
      <Col.Container>
        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          {pictures && <Img picture={pictures[0]} alt={title} />}
        </Col.Item>
        <Col.Item sm={6} vAlign="center" order={{ xs: 1, sm: 2 }}>
          <H1>{title}</H1>
          <Markdown>{description}</Markdown>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
