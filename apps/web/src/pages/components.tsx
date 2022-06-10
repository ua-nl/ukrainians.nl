import {
  IconBird,
  IconCalendar,
  IconCoatOfArms,
  IconHandWithHeart,
  IconHouse,
  IconProtest,
  IconProtestHand,
  IconUkraineInHands,
  IconUkraineOnHand,
} from 'ui/assets';
import {
  Bread,
  Button,
  Caption,
  Col,
  H1,
  H2,
  H3,
  H4,
  Page,
  Para,
  Para2,
  Section,
} from 'ui/ux';

import { ActionCards } from '../components/ActionSection';

export default function Index() {
  return (
    <Page>
      <Bread
        history={[
          { label: 'Home', href: '/' },
          { label: 'Protest', href: '/protest' },
        ]}
        current="Current"
      />
      <Section first>
        <H1>Typografy</H1>

        <H1>Header 1</H1>
        <H2>Header 2</H2>
        <H3>Header 3</H3>
        <H4>Header 4</H4>
        <Para>
          Body 1: We help thousands of displaced Ukrainians by coordinating and
          providing accommodation, mental-health support, translation, and
          humanitarian aid.
        </Para>
        <Para2>
          Body 2: Ukraine is an integral part of Europe culturally,
          geographically, and historically. However, our country was not part of
          the European...
        </Para2>
        <Caption>
          Caption: We coordinate and supply priority assistance for those
          impacted by the war, whether within Ukraine or beyond its borders{' '}
        </Caption>
      </Section>

      <Section bg="blue">
        <H1>
          Icons &nbsp;
          <IconBird /> &nbsp;
          <IconCalendar /> &nbsp;
          <IconCoatOfArms /> &nbsp;
          <IconHandWithHeart /> &nbsp;
          <IconHouse /> &nbsp;
          <IconProtest /> &nbsp;
          <IconProtestHand /> &nbsp;
          <IconUkraineInHands /> &nbsp;
          <IconUkraineOnHand /> &nbsp;
        </H1>
        <Para>
          {[120, 100, 64, 56, 48, 40, 32, 24, 20, 16].map((size) => (
            <span key={String(size)}>
              {size}px <IconCalendar size={`${size}px`} />
            </span>
          ))}
        </Para>

        <Para>
          Some &nbsp;
          <IconBird /> &nbsp;
          <IconCalendar /> &nbsp;
          <IconCoatOfArms /> &nbsp; icons
          <IconHandWithHeart /> &nbsp;
          <IconHouse /> &nbsp;
          <IconProtest /> &nbsp; between
          <IconProtestHand /> &nbsp;
          <IconUkraineInHands /> &nbsp;
          <IconUkraineOnHand /> &nbsp; text
        </Para>
        <Para>
          <Button>
            <IconUkraineInHands />
            &nbsp;Button
          </Button>
          &nbsp;
          <Button>
            Button&nbsp;
            <IconUkraineOnHand />
          </Button>
        </Para>
      </Section>

      <Section>
        <H1>Buttons</H1>
        <H4>Normal size</H4>
        <Button type="primary" onClick={() => alert('primary')}>
          Primary
        </Button>
        &nbsp;
        <Button type="accent" onClick={() => alert('accent')}>
          Accent
        </Button>
        &nbsp;
        <Button type="secondary" onClick={() => alert('secondary')}>
          Secondary
        </Button>
        &nbsp;
        <Button onClick={() => alert('outline')}>Outline</Button>{' '}
        <H4>Small size</H4>
        <Button type="primary" size="small" onClick={() => alert('primary')}>
          Primary
        </Button>
        &nbsp;
        <Button type="accent" size="small" onClick={() => alert('accent')}>
          Accent
        </Button>
        &nbsp;
        <Button
          type="secondary"
          size="small"
          onClick={() => alert('secondary')}
        >
          Secondary
        </Button>
        &nbsp;
        <Button type="outline" size="small" onClick={() => alert('outline')}>
          Outline
        </Button>
      </Section>

      <Section bg="yellow">
        <Col.Container>
          <Col.Item>
            Ukrainians in the Netherlands Foundation is a non-profit
            organization established during the Euromaidan Uprising in 2014.
            Since then, our foundation has become a point of reference and
            connection for the Ukrainian-Dutch diaspora, and has also been
            providing support for and humanitarian aid to Ukraine. We actively
            collaborate with the Ukrainian Embassy in the Kingdom of the
            Netherlands, sponsoring and supporting local Ukrainian weekend
            schools and churches and organising numerous cultural and
            educational events.
          </Col.Item>
          <Col.Item>
            From the moment the Russian Federation unjustly invaded Ukraine on
            24 February 2022, our foundation has been at forefront of urgent
            humanitarian assistance for Ukrainian civilians and the Armed Forces
            of Ukraine, as well as support for refugees and displaced persons in
            the Netherlands. Consequently, we collaborate with numerous partners
            both in Ukraine and in the Netherlands, including accredited
            volunteer organisations, public-sector organisations and
            foundations, as well as commercial enterprises.
          </Col.Item>
        </Col.Container>
      </Section>

      <Section>
        <ActionCards />
      </Section>
    </Page>
  );
}
