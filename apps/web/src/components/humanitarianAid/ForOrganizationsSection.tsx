import { styled } from '@mui/system';
import { UASysColors } from 'ui/lib';
import { Button, Col, H1, H3, Para, Section } from 'ui/ux';

const List = styled('ul')(() => ({
  marginBlock: 0,
}));

const ContactBoxContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}));

const ContactBox = styled('div')(() => ({
  backgroundColor: UASysColors.black10,
  borderRadius: '8px',
  padding: '32px 40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 400,
}));

export const ForOrganizationsSection = () => {
  return (
    <Section>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6}>
          <H1>For organizations</H1>
          <Para>
            Humanitarian goods are as vital as financial support. Please
            consider offering those as a form of donation. We graciously accept
            certain types of products, which your organization may wish to
            supply, and we regularly provide updates of the items most needed.
          </Para>
          <Para mb={1}>Current priorities include:</Para>
          <List>
            <li>
              Medical supplies: CAT or SOF tourniquets; IFAK first-aid kits;
              Celox powder
            </li>
            <li>
              Food: dried and canned food; chocolate; energy and dried fruit
              bars; baby food
            </li>
            <li>Electronics: pocket torches; battery packs; power banks</li>
            <li>Clothing: men’s socks, khaki-coloured T-shirts, belts</li>
          </List>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <ContactBoxContainer>
            <ContactBox>
              <H3>Contact us</H3>
              <Para>Humanitarian Coordination team</Para>
              <Button type="accent">Contact us</Button>
            </ContactBox>
          </ContactBoxContainer>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
