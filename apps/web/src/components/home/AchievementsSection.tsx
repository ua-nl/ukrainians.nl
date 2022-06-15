import { Col, H1, Para, Section } from 'ui/ux';

export const AchievementsSection = () => {
  return (
    <Section maxWidth="md">
      <H1 center mb={12}>
        Our achievements
      </H1>
      <Col.Container>
        <Col.Item xs={12} sm={4}>
          <H1 center>150K kg+</H1>
          <Para center>
            Humanitarian and protective supplies sent to Ukraine
          </Para>
        </Col.Item>

        <Col.Item xs={12} sm={4}>
          <H1 center>200K€ +</H1>
          <Para center>Spent on bulk purchases and logistic costs</Para>
        </Col.Item>

        <Col.Item xs={12} sm={4}>
          <H1 center>300+</H1>
          <Para center>
            Involved into humanitarian supplies, logistics, refugee support and
            more
          </Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
