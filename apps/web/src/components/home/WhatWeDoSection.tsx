import { IconHandWithHeart } from 'ui/assets';
import { useUIContext } from 'ui/lib';
import { PageContent } from 'ui/types';
import { Button, H1, IconCard, Para, Section } from 'ui/ux';

export const WhatWeDoSection = ({
  title,
  cards,
}: Pick<PageContent, 'title' | 'cards'>) => {
  const ctx = useUIContext();
  const readMore = ctx.l10n[ctx.texts.readMore];

  return (
    <Section bgColor="lightGrey">
      <H1 center mb={16}>
        {title}
      </H1>
      <IconCard.Container>
        {cards &&
          cards.map((card) => (
            <IconCard.Item
              Icon={IconHandWithHeart}
              title={card.title}
              key={card.id}
            >
              <Para mb={5}>{card.description}</Para>
              <Button>{readMore}</Button>
            </IconCard.Item>
          ))}
      </IconCard.Container>
    </Section>
  );
};
