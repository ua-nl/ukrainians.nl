import { styled } from '@mui/system';
import { Banner, Button, Col, H1, H2, Para, Section } from 'ui/ux';

const List = styled('ul')(() => ({
  marginBlock: 0,
}));

export const ForOrganizationsSection = () => {
  return (
    <Section>
      <Col.Container>
        <Col.Item sm={6}>
          <H1>For organizations</H1>
          <Para mb={8}>
            Humanitarian goods are as vital as financial support. Please
            consider offering those as a form of donation. We graciously accept
            certain types of products, which your organization may wish to
            supply, and we regularly provide updates of the items most needed.
          </Para>
          <Para mb={5}>Current priorities include:</Para>
          <List>
            <li>Medical supplies: CAT or SOF tourniquets</li>
            <li>IFAK first-aid kits</li>
            <li>Celox powder</li>
            <li>
              Food: dried and canned food, chocolate, energy and dried fruit
              bars, baby food
            </li>
            <li>Electronics: pocket torches, battery packs, power banks</li>
            <li>Clothing: men’s socks, khaki-coloured T-shirts, belts</li>
          </List>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Banner>
            <H2 mb={4}>Contact us</H2>
            <Para mb={6}>Humanitarian Coordination team</Para>
            <Button>Contact us</Button>
          </Banner>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
