import { Box } from '@mui/material';
import { useUIContext } from 'ui/lib';
import { Button, CardItem, Col, H2, Para } from 'ui/ux';

import CardPlaceholder from '../../public/img/card-placeholder.png';

const ReadMoreButton = () => {
  const ctx = useUIContext();
  const readMore = ctx.l10n[ctx.texts.readMore];

  return (
    <Box>
      <Button type="accent">{readMore}</Button>
    </Box>
  );
};

export const ActionCards = () => {
  return (
    <Col.Container columns={{ sm: 12 }}>
      <Col.Item sm={6}>
        <CardItem image={CardPlaceholder.src}>
          <H2>Humanitarian aid</H2>
          <Para>
            We coordinate and supply priority assistance for those impacted by
            the war, whether within Ukraine or beyond its borders
          </Para>
          <ReadMoreButton />
        </CardItem>
        <CardItem image={CardPlaceholder.src}>
          <H2>Community services</H2>
          <Para>
            We sponsor and support schools, churches, organizations and other
            social platforms that serve the Ukrainian diaspora and our Dutch
            allies.
          </Para>
          <ReadMoreButton />
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
          <ReadMoreButton />
        </CardItem>
        <CardItem image={CardPlaceholder.src}>
          <H2>Events and activism</H2>
          <Para>
            We organize initiatives about Ukraine, from informational and
            cultural events to peaceful demonstrations
          </Para>
          <ReadMoreButton />
        </CardItem>
      </Col.Item>
    </Col.Container>
  );
};
