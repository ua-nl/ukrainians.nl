import { Box } from '@mui/material';
import Image from 'next/image';
import { useUIContext } from 'ui/lib';
import { Button, Col, H1, ImgBox, Para, Section } from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

export const WhatDoWeNeedSection = ({
  cards,
  pictures,
}: Pick<PageContent, 'cards' | 'pictures'>) => {
  const ctx = useUIContext();

  return (
    <Section bgColor="grey">
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          {cards.map((card) => (
            <>
              <H1>{card.title}</H1>
              <Para mb={16}>{card.description}</Para>
            </>
          ))}
          <Box mt={8}>
            <Button>{ctx.l10n[ctx.texts.collectionPoints]}</Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <ImgBox sx={{ float: 'right', marginLeft: '20%' }}>
            <Image
              src={pictures?.[0].url}
              alt={cards[0].title}
              width={pictures?.[0].width}
              height={pictures?.[0].height}
            />
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '70%', marginTop: '-30%' }}>
            <Image
              src={pictures?.[1].url}
              alt={cards[1].title}
              width={pictures?.[1].width}
              height={pictures?.[1].height}
            />
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
