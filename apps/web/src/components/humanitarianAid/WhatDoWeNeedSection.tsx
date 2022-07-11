import { Box } from '@mui/material';
import Image from 'next/image';
import { useUIContext } from 'ui/lib';
import { Button, Col, H1, ImgBox, Para, Section } from 'ui/ux';

import LoadTruckImg from '../../../public/photo/load-truck.jpg';
import PackedTruckImg from '../../../public/photo/packed-truck.jpg';

export const WhatDoWeNeedSection = () => {
  const ctx = useUIContext();

  return (
    <Section bgColor="grey">
      <Col.Container>
        <Col.Item sm={6} vAlign="center">
          <H1>What do we need</H1>
          <Para mb={5}>
            Relief efforts encompass the procurement, collection and transport
            of urgently needed medical supplies, protective equipment, and
            humanitarian aid. Follow us for regular updates on goods accepted.
          </Para>
          <Para mb={16}>The current priorities can be found here:</Para>
          <H1>Where to drop off</H1>
          <Para>
            We have more than 20 collection points throughout the Netherlands
            where goods can be donated, also in bulk. For very large quantities,
            please contact our helpline for possible pickup.
          </Para>
          <Box mt={8}>
            <Button>{ctx.l10n[ctx.texts.collectionPoints]}</Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <ImgBox sx={{ float: 'right', marginLeft: '25%' }}>
            <Image src={PackedTruckImg} />
          </ImgBox>
          <ImgBox sx={{ float: 'left', width: '50%', marginTop: '-30%' }}>
            <Image src={LoadTruckImg} />
          </ImgBox>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
