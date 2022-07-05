import { PageContent } from 'ui/types';
import { Banner, Button, Col, H1, H2, Para, Section } from 'ui/ux';

export const ForOrganizationsSection = ({
  title,
  description,
  description2,
  cards,
}: Pick<PageContent, 'title' | 'description' | 'description2' | 'cards'>) => {
  const card = cards[0];
  return (
    <Section>
      <Col.Container>
        <Col.Item sm={6}>
          <H1>{title}</H1>
          <Para mb={8}>{description}</Para>
          <Para mb={5}>{description2}</Para>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Banner>
            <H2 mb={4}>{card.title}</H2>
            <Para mb={6}>{card.description}</Para>
            <Button>Contact us</Button>
          </Banner>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
