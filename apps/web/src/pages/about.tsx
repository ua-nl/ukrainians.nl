import Image from 'next/image';
import { Bread, Col, H1, ImgBox, Page, Para, Section } from 'ui/ux';

import partners from '../../public/img/partners.png';
import atTheTruck from '../../public/photo/at-the-truck.jpeg';
import groupWithFlag from '../../public/photo/group-with-flag.jpeg';
import { ActionCards } from '../components/ActionSection';
import { useUIContext } from '../lib/uiContext';

export default function Index() {
  const ctx = useUIContext();
  return (
    <Page ctx={ctx}>
      <Bread history={[{ label: 'Home', href: '/' }]} current="About" />

      <Section first>
        <Col.Container>
          <Col.Item vAlign="center">
            <H1>About us</H1>
            <Para>
              Ukrainians in the Netherlands Foundation supports the needs of the
              Dutch-Ukrainian diaspora and is also working tirelessly to counter
              the catastrophic consequences of Russia’s war on Ukraine
            </Para>
          </Col.Item>
          <Col.Item>
            <ImgBox sx={{ float: 'right', marginLeft: '25%' }}>
              <Image src={atTheTruck} />
            </ImgBox>
            <ImgBox sx={{ float: 'left', width: '50%', marginTop: '-30%' }}>
              <Image src={groupWithFlag} />
            </ImgBox>
          </Col.Item>
        </Col.Container>
      </Section>

      <Section>
        <H1 center>What we do</H1>
        <ActionCards />
      </Section>

      <Section bg="blue">
        <H1 center>Our achievements</H1>
        <Col.Container>
          <Col.Item>
            <H1 center>150K kg+</H1>
            <Para center>
              Humanitarian and protective supplies sent to Ukraine
            </Para>
          </Col.Item>

          <Col.Item>
            <H1 center>200K€ +</H1>
            <Para center>Spent on bulk purchases and logistic costs</Para>
          </Col.Item>

          <Col.Item>
            <H1 center>300+</H1>
            <Para center>
              involved into humanitarian supplies, logistics, refugee support
              and more
            </Para>
          </Col.Item>

          <Col.Item>
            <H1 center>% 100</H1>
            <Para center>
              involved into humanitarian supplies, logistics, refugee support
              and more
            </Para>
          </Col.Item>
        </Col.Container>
      </Section>

      <Section>
        <H1 center>Our partners &amp; sponsors</H1>
        <Image src={partners} />
      </Section>
    </Page>
  );
}
