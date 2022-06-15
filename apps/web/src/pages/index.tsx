import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import { useUIContext } from 'ui/lib';
import {
  Button,
  CardItem,
  Col,
  H1,
  H2,
  Page,
  Para,
  Section,
  Subtitle,
} from 'ui/ux';

import CardPlaceholder from '../../public/img/card-placeholder.png';
import CoverImage from '../../public/img/carousel/cover1.png';
import Logo from '../../public/img/logo.png';
import partners from '../../public/img/partners.png';

const buttonsContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 3,
  mt: 12,
};

export default function Index() {
  const ctx = useUIContext();

  return (
    <Page>
      <Section first bgImage={CoverImage.src} color="white" maxWidth="md">
        <Box maxWidth={550}>
          <H1>
            Stand with us to support peace and freedom in Ukraine – and beyond
          </H1>
          <Subtitle>Foundation Ukrainians in the Netherlands</Subtitle>

          <Box sx={buttonsContainer}>
            <Button type="primary">{ctx.l10n[ctx.texts.donateBtn]}</Button>
            <Button type="accent">Volunteer</Button>
          </Box>
        </Box>
      </Section>

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
              Involved into humanitarian supplies, logistics, refugee support
              and more
            </Para>
          </Col.Item>
        </Col.Container>
      </Section>

      <Section bgColor="gray" maxWidth="md">
        <Col.Container columns={{ sm: 12 }}>
          <Col.Item sm={6}>
            <H2>WHO WE ARE</H2>
            <Para>
              Ukrainians in the Netherlands Foundation supports the needs of the
              Dutch-Ukrainian diaspora and is also working tirelessly to counter
              the catastrophic consequences of Russia’s war on Ukraine{' '}
            </Para>
            <Box mt={5}>
              <Button type="accent">Read more</Button>
            </Box>
          </Col.Item>

          <Col.Item sm={6} vAlign="center">
            <Image src={Logo} width={324} height={96} />
          </Col.Item>
        </Col.Container>
      </Section>

      <Section maxWidth="md">
        <H1 center mb={8}>
          WHAT WE DO
        </H1>
        <Col.Container columns={{ sm: 12 }}>
          <Col.Item sm={6}>
            <CardItem image={CardPlaceholder.src}>
              <H2>Humanitarian aid</H2>
              <Para>
                We coordinate and supply priority assistance for those impacted
                by the war, whether within Ukraine or beyond its borders
              </Para>
              <Box>
                <Button type="accent">Read more</Button>
              </Box>
            </CardItem>
            <CardItem image={CardPlaceholder.src}>
              <H2>Community services</H2>
              <Para>
                We sponsor and support schools, churches, organizations and
                other social platforms that serve the Ukrainian diaspora and our
                Dutch allies.
              </Para>
              <Box>
                <Button type="accent">Read more</Button>
              </Box>
            </CardItem>
          </Col.Item>

          <Col.Item sm={6}>
            <CardItem image={CardPlaceholder.src}>
              <H2>Support of temporary displaced Ukrainians </H2>
              <Para>
                We help thousands of displaced Ukrainians by coordinating and
                providing accommodation, mental-health support, translation, and
                humanitarian aid.
              </Para>
              <Box>
                <Button type="accent">Read more</Button>
              </Box>
            </CardItem>
            <CardItem image={CardPlaceholder.src}>
              <H2>Events and activism</H2>
              <Para>
                We organize initiatives about Ukraine, from informational and
                cultural events to peaceful demonstrations
              </Para>
              <Box>
                <Button type="accent">Read more</Button>
              </Box>
            </CardItem>
          </Col.Item>
        </Col.Container>
      </Section>

      <Section bgColor="gray" maxWidth="md">
        <H1 center mb={8}>
          Our partners &amp; sponsors
        </H1>
        <Image src={partners} />
      </Section>
    </Page>
  );
}
