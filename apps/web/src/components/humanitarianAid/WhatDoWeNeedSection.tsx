import { Box } from '@mui/material';
import { Fragment } from 'react';
import { useUIContext } from 'ui/lib';
import { PageContent } from 'ui/types';
import { Button, Col, H1, Img, ImgBox, Para, Section } from 'ui/ux';

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
            <Fragment key={card.id}>
              <H1>{card.title}</H1>
              <Para mb={16}>{card.description}</Para>
            </Fragment>
          ))}
          <Box mt={8}>
            <Button>{ctx.l10n[ctx.texts.collectionPoints]}</Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <ImgBox sx={{ float: 'right', marginLeft: '20%' }}>
            <Img picture={pictures?.[0]} alt={cards[0].title} />
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '70%', marginTop: '-30%' }}>
            <Img picture={pictures?.[1]} alt={cards[1].title} />
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
