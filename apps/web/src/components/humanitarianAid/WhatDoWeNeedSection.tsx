import { Box } from '@mui/material';
import { useUIContext } from 'ui/lib';
import { PageContent } from 'ui/types';
import { Button, Col, Img, ImgBox, Markdown, Section } from 'ui/ux';

export const WhatDoWeNeedSection = ({
  title,
  pictures,
  description,
}: Pick<PageContent, 'title' | 'pictures' | 'description'>) => {
  const ctx = useUIContext();

  return (
    <Section bgColor="grey">
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          <Markdown>{description}</Markdown>
          <Box mt={8}>
            <Button>{ctx.l10n[ctx.texts.collectionPoints]}</Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <ImgBox sx={{ float: 'right', marginLeft: '20%' }}>
            {pictures && <Img picture={pictures[0]} alt={title} />}
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '70%', marginTop: '-30%' }}>
            {pictures && <Img picture={pictures[1]} alt={title} />}
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
