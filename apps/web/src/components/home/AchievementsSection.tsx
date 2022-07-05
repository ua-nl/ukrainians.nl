import { PageContent } from 'ui/types';
import { Col, Divider, H1, Para, Section } from 'ui/ux';

export const AchievementsSection = ({
  title,
  cards,
}: Pick<PageContent, 'title' | 'cards'>) => {
  return (
    <Section bgColor="blue">
      <H1 center mb={16}>
        {title}
      </H1>
      <Col.Container>
        {cards &&
          cards.map((card) => (
            <Col.Item sm={6} md={3} key={card.id}>
              <H1 center>{card.title}</H1>
              <Para center> {card.description} </Para>
            </Col.Item>
          ))}
      </Col.Container>
      <Col.Container>
        <Col.Item sm={6} md={3}>
          <Divider />
        </Col.Item>
        <Col.Item sm={6} md={3}>
          <Divider />
        </Col.Item>
        <Col.Item md={3}>
          <Divider />
        </Col.Item>
        <Col.Item md={3}>
          <Divider />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
