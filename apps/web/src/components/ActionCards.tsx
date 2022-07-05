import Image from 'next/image';
import { useUIContext } from 'ui/lib';
import { Button, IconCard, Para } from 'ui/ux';

import { Card } from '../types/strapi-content.types';

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
          Icon={<Image src={card.pictures?.[0]} />}
          title={card.title}
          key={card.id}
        >
          <Para mb={5}>{card.description}</Para>
          <Button>{readMore}</Button>
        </IconCard.Item>
      ))}
    </IconCard.Container>
  );
};
