import { PageContent } from 'ui/types';
import { Col, H1, Img, Para, Section } from 'ui/ux';

type OurStorySectionProps = Pick<PageContent, 'title' | 'cards'>;

export const OurStorySection = ({ title, cards }: OurStorySectionProps) => {
  return (
    <Section bgColor="grey">
      <H1 center mb={16}>
        {title}
      </H1>
      <Col.Container>
        <Col.Item sm={6}>
          <Para>{cards[0].description}</Para>
        </Col.Item>

        <Col.Item sm={6}>
          <Para mb={10}>{cards[1].description}</Para>
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          {cards[0].pictures && (
            <Img picture={cards[0].pictures[0]} alt={title} />
          )}
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          {cards[1].pictures && (
            <Img picture={cards[1].pictures[0]} alt={title} />
          )}
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
