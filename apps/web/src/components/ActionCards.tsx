import { useUIContext } from 'ui/lib';
import { Card } from 'ui/types';
import { Button, IconCard, Img, Para } from 'ui/ux';

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
          Icon={card.pictures && <Img picture={card.pictures[0]} />}
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
