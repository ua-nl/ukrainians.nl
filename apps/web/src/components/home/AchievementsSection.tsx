import { Col, Divider, H1, Para, Section } from 'ui/ux';

export const AchievementsSection = () => {
  return (
    <Section bgColor="blue">
      <H1 center mb={16}>
        Our achievements
      </H1>
      <Col.Container>
        <Col.Item sm={6} md={3}>
          <H1 center>150K kg+</H1>
          <Para center>
            Humanitarian and protective supplies sent to Ukraine
          </Para>
        </Col.Item>

        <Col.Item sm={6} md={3}>
          <H1 center>200K€ +</H1>
          <Para center>Spent on bulk purchases and logistic costs</Para>
        </Col.Item>

        <Col.Item sm={6} md={3}>
          <H1 center>300+</H1>
          <Para center>
            Involved into humanitarian supplies, logistics, refugee support and
            more
          </Para>
        </Col.Item>

        <Col.Item sm={6} md={3}>
          <H1 center>% 100</H1>
          <Para center>
            Involved into humanitarian supplies, logistics, refugee support and
            more
          </Para>
        </Col.Item>
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
