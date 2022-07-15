import { useUIContext } from 'ui/lib';
import { PageContent } from 'ui/types';
import { Button, H1, IconCard, Img, Para, Section } from 'ui/ux';

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
              Icon={
                <Img
                  picture={card.pictures?.[0]}
                  alt={card.title}
                  width={90}
                  height={90}
                />
              }
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
