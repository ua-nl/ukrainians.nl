import { IconHandWithHeart } from 'ui/assets';
import { useUIContext } from 'ui/lib';
import { Button, IconCard, Para } from 'ui/ux';

import { Card } from '../types/strapi-data';

type ActionCardsProps = {
  cards: Card[];
};

export const ActionCards = ({ cards }: ActionCardsProps) => {
  const ctx = useUIContext();
  const readMore = ctx.l10n[ctx.texts.readMore];

  return (
    <IconCard.Container>
      {cards.map((card) => (
        <IconCard.Item
          Icon={IconHandWithHeart}
          title={card.title}
          key={card.id}
        >
          <Para mb={5}>{card.description}</Para>
          <Button>{readMore}</Button>
        </IconCard.Item>
      ))}

      {/* <IconCard.Item Icon={IconHandWithHeart} title="Humanitarian aid">
        <Para mb={5}>
          We coordinate and supply priority assistance for those impacted by the
          war, whether within Ukraine or beyond its borders
        </Para>
        <Button>{readMore}</Button>
      </IconCard.Item>

      <IconCard.Item
        Icon={IconHouse}
        title="Support of temporary displaced Ukrainians "
      >
        <Para mb={5}>
          We help thousands of displaced Ukrainians by coordinating and
          providing accommodation, mental-health support, translation, and
          humanitarian aid.
        </Para>
        <Button>{readMore}</Button>
      </IconCard.Item>

      <IconCard.Item Icon={IconCoatOfArms} title="Community services">
        <Para mb={5}>
          We coordinate and supply priority assistance for those impacted by the
          war, whether within Ukraine or beyond its borders
        </Para>
        <Button>{readMore}</Button>
      </IconCard.Item>

      <IconCard.Item Icon={IconUkraineInHands} title="Events and activism">
        <Para mb={5}>
          We organize initiatives about Ukraine, from informational and cultural
          events to peaceful demonstrations
        </Para>
        <Button>{readMore}</Button>
      </IconCard.Item> */}
    </IconCard.Container>
  );
};
